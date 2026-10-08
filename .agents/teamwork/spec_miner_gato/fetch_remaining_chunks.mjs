// fetch_remaining_chunks.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outDir = path.join(__dirname, 'gato_chunks');

const chunks = [
  '4bd1b696-f785427dddbba9fb.js',
  '1255-5fe68596fe147850.js',
  'main-app-12e0f6b0c4a5ff47.js',
  '1104-ea9c1ba82d528294.js',
  '8946-0f6f2dd3b096dbc9.js',
  '95-8397396a6c8ff378.js',
  '8e1d74a4-6b26898a7ade711c.js',
  '53c13509-ee761b7395480b51.js'
];

async function main() {
  for (const c of chunks) {
    const url = `https://gato.pe/_next/static/chunks/${c}`;
    try {
      const res = await fetch(url);
      if (res.ok) {
        const text = await res.text();
        fs.writeFileSync(path.join(outDir, path.basename(c)), text, 'utf8');
        console.log(`Fetched ${c} (${text.length} bytes)`);
      }
    } catch (e) {
      console.error(`Failed ${c}:`, e.message);
    }
  }
}

main();
