import {readFile,readdir} from 'node:fs/promises';
import {extname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';
process.chdir(fileURLToPath(new URL('..',import.meta.url)));
const textTypes=new Set(['.md','.mjs','.json','.mmd','.svg','.txt','.html','.css','.js']);
const patterns=[
 ['live provider identifier',/\b(?:app|tbl|fld|rec|pag|pbd|wfl|shr)[A-Za-z0-9]{14}\b/],
 ['credential token',/\b(?:gh[pousr]_[A-Za-z0-9]{20,}|sk-[A-Za-z0-9_-]{20,}|pat[A-Za-z0-9]{24,})\b/],
 ['private tailnet hostname',/\b[a-z0-9.-]+\.ts\.net\b/i],
 ['operator filesystem path',/\/(?:Users|home)\/[a-z][a-z0-9_-]*\//i],
 ['private LAN address',/\b(?:192\.168\.\d{1,3}\.\d{1,3}|10\.\d{1,3}\.\d{1,3}\.\d{1,3})\b/],
 ['private key material',/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/]
];
const failures=[];let checked=0;
async function walk(dir){for(const e of await readdir(dir,{withFileTypes:true})){if(['.git','node_modules','graft','output'].includes(e.name))continue;const file=`${dir}/${e.name}`;if(e.isDirectory()){await walk(file);continue;}const data=await readFile(file);checked++;
 if(textTypes.has(extname(file))||['./LICENSE','./.gitignore'].includes(file)){const text=data.toString();for(const [label,pattern]of patterns)if(pattern.test(text))failures.push(`${file}: ${label}`);}
 if(file.endsWith('.png')){for(let offset=8;offset+12<=data.length;){const length=data.readUInt32BE(offset),type=data.toString('ascii',offset+4,offset+8);if(['tEXt','iTXt','zTXt','eXIf'].includes(type))failures.push(`${file}: remove ${type} metadata`);offset+=length+12;}}
}}
await walk('.');
const commits=spawnSync('git',['log','--all','--format=%an <%ae> %cn <%ce>'],{encoding:'utf8'});
if(commits.status===0&&commits.stdout.trim())for(const line of commits.stdout.trim().split('\n'))if(line!=='Trapper Keeper Starter contributors <contributors@users.noreply.github.com> Trapper Keeper Starter contributors <contributors@users.noreply.github.com>')failures.push('Git history contains an unexpected author identity');
if(failures.length){console.error(failures.join('\n'));process.exit(1);}
console.log(`PASS: ${checked} public files scanned; no configured identifiers/secrets/private paths; PNG metadata and Git author checks clean. Visual/media review is still required.`);
