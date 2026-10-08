// find_navbar.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const chunksDir = path.join(__dirname, 'gato_chunks');

for (const f of fs.readdirSync(chunksDir)) {
  const content = fs.readFileSync(path.join(chunksDir, f), 'utf8');
  // Check if content has letters G, A, T, O together or vertical or hamburger
  if (content.includes('gato-icon') || content.includes('gato_icon') || content.includes('contactanos')) {
    console.log(`Matching file: ${f}`);
  }
}
