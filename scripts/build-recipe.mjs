import {readFile,writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {posix} from 'node:path';
process.chdir(fileURLToPath(new URL('..',import.meta.url)));
const files=['START_HERE.md','docs/PRD.md','docs/PREFERENCES.md','docs/BUILD_BRIEF_TEMPLATE.md','docs/DESIGN.md','docs/DATA_MODEL.md','platforms/README.md','platforms/AIRTABLE.md','platforms/CLOUDFLARE_SUPABASE.md','platforms/OTHER_STACKS.md','docs/ACCEPTANCE.md','docs/MIGRATION.md'];
let output='# Trapper Keeper — portable build recipe\n\nThis is a greenfield, platform-independent recipe. Start with the interview; build only selected modules. The concept PNGs are separate optional visual attachments. Follow the user\'s current instructions over example defaults. This file bundles the source documents below so an agent does not need repository access.\n';
function rootLinks(text,file){return text.replace(/(!?\[[^\]]*\]\()([^\s)]+)(\))/g,(match,start,url,end)=>/^(https?:|mailto:|#)/.test(url)?match:`${start}${posix.join(posix.dirname(file),url)}${end}`);}
for(const file of files)output+=`\n\n---\n\n<!-- Source: ${file} -->\n\n${rootLinks(await readFile(file,'utf8'),file)}`;
for(const file of ['schemas/preferences.schema.json','examples/preferences.json'])output+=`\n\n---\n\n## ${file}\n\n\`\`\`json\n${(await readFile(file,'utf8')).trim()}\n\`\`\`\n`;
for(const file of ['01-onboarding','02-navigation','03-data-model','04-task-actions','05-habit-checkins','06-architecture','07-optional-migration'])output+=`\n\n## Workflow: ${file}\n\n\`\`\`mermaid\n${(await readFile(`diagrams/${file}.mmd`,'utf8')).trim()}\n\`\`\`\n`;
await writeFile('RECIPE.md',output);console.log(`Built RECIPE.md (${Buffer.byteLength(output)} bytes)`);
