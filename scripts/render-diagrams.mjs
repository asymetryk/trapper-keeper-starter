import {readdir,mkdtemp,writeFile,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';
process.chdir(fileURLToPath(new URL('..',import.meta.url)));
const temp=await mkdtemp(join(tmpdir(),'binder-diagrams-'));
try{
 const config=join(temp,'browser.json');await writeFile(config,JSON.stringify({args:['--no-sandbox'],...(process.env.PUPPETEER_EXECUTABLE_PATH?{executablePath:process.env.PUPPETEER_EXECUTABLE_PATH}:{})}));
 for(const file of (await readdir('diagrams')).filter(f=>f.endsWith('.mmd')).sort()){
  const result=spawnSync(process.env.MERMAID_CLI||'mmdc',['-i',`diagrams/${file}`,'-o',`diagrams/${file.replace(/\.mmd$/,'.svg')}`,'-p',config,'-b','white','-t','neutral'],{stdio:'inherit'});
  if(result.error)throw result.error;if(result.status!==0)throw Error(`Diagram render failed: ${file}`);
 }
}finally{await rm(temp,{recursive:true,force:true});}
