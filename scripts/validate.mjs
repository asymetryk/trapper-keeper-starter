import {readFile,readdir,stat} from 'node:fs/promises';
import {resolve,dirname,extname} from 'node:path';
import {fileURLToPath} from 'node:url';
import assert from 'node:assert/strict';
import {validateProfile} from './profile-validation.mjs';
process.chdir(fileURLToPath(new URL('..',import.meta.url)));
const root=process.cwd();let links=0,profiles=0;
async function walk(dir){const out=[];for(const e of await readdir(dir,{withFileTypes:true})){if(['.git','node_modules','graft','output'].includes(e.name))continue;const path=`${dir}/${e.name}`;out.push(...(e.isDirectory()?await walk(path):[path]));}return out;}
const schema=JSON.parse(await readFile('schemas/preferences.schema.json','utf8'));
for(const name of ['preferences.json','airtable-preferences.json']){const p=JSON.parse(await readFile(`examples/${name}`,'utf8'));assert.deepEqual(validateProfile(p,schema),[],name);profiles++;}
const files=await walk('.');
for(const file of files){
 if(extname(file)==='.json')JSON.parse(await readFile(file,'utf8'));
 if(extname(file)==='.md')for(const m of (await readFile(file,'utf8')).matchAll(/!?\[[^\]]*\]\(([^\s)]+)\)/g)){
  const link=m[1];if(/^(https?:|mailto:|#)/.test(link))continue;
  const path=resolve(dirname(file),decodeURIComponent(link.split('#')[0]));assert.ok(path.startsWith(root+'/'),`Link escapes kit: ${file}`);await stat(path);links++;
 }
}
assert.equal(files.filter(f=>f.endsWith('.mmd')).length,7);
for(const mmd of files.filter(f=>f.endsWith('.mmd'))){const svg=await readFile(mmd.replace(/\.mmd$/,'.svg'),'utf8');assert.match(svg,/<svg/);assert.doesNotMatch(svg,/<script\b/i);}
for(const image of ['work','life','preferences']){const png=await readFile(`mockups/${image}-concept.png`);assert.equal(png.subarray(1,4).toString(),'PNG');assert.ok(png.length>10000);}
const recipe=await readFile('RECIPE.md','utf8');for(const marker of ['START_HERE.md','docs/PRD.md','docs/MIGRATION.md','platforms/AIRTABLE.md','platforms/CLOUDFLARE_SUPABASE.md'])assert.ok(recipe.includes(`Source: ${marker}`));
console.log(`PASS: ${profiles} profiles, ${links} local links, JSON, 7 rendered diagrams, 3 concept images, portable recipe`);
