// find_module_7796.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const chunksDir = path.join(__dirname, 'gato_chunks');

for (const f of fs.readdirSync(chunksDir)) {
  const content = fs.readFileSync(path.join(chunksDir, f), 'utf8');
  if (content.includes('7796:')) {
    console.log(`Found 7796: in ${f}`);
    const idx = content.indexOf('7796:');
    console.log(content.slice(idx, idx + 500));
  }
}
