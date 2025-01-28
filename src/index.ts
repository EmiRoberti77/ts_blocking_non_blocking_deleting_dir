import fsp from 'fs/promises';
import fs from 'fs';

async function deleteDir(dir: string): Promise<void> {
  await fsp.rm(dir, { recursive: true, force: true });
  console.log(`${dir} deleted`);
}

async function deleteDirSync(dir: string): Promise<void> {
  await fs.rmSync(dir, { recursive: true, force: true });
  console.log(`${dir} deleted`);
}

console.log('Task1');
//deleteDir('deleteMe');
deleteDirSync('deleteMe');
console.log('Task2');
