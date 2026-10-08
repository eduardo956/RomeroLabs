// find_modules_8624_8015.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const chunksDir = path.join(__dirname, 'gato_chunks');

for (const f of fs.readdirSync(chunksDir)) {
  const content = fs.readFileSync(path.join(chunksDir, f), 'utf8');
  if (content.includes('8624:')) {
    console.log(`8624 in ${f}`);
    const idx = content.indexOf('8624:');
    console.log(content.slice(idx, idx + 1000));
  }
  if (content.includes('8015:')) {
    console.log(`8015 in ${f}`);
    const idx = content.indexOf('8015:');
    console.log(content.slice(idx, idx + 1000));
  }
}
