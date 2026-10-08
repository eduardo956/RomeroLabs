// fetch_chunks.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const chunks = [
  'app/page-876e06a414ce364a.js',
  '1933-160bff5cd3ad846f.js',
  '8375-f272e20fe97cd9e8.js',
  '2985-b03d71350d24c00e.js',
  '8263-961cf8ff2d2f5003.js',
  '986-33b0623d6f6d86a7.js',
  '5367-684234138eb19506.js',
  '9200-bafe6f00a9d9d046.js',
  'app/layout-4c3b8d200fd6fa21.js'
];

async function main() {
  const outDir = path.join(__dirname, 'gato_chunks');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  for (const chunk of chunks) {
    const url = `https://gato.pe/_next/static/chunks/${chunk}`;
    console.log(`Fetching ${url}...`);
    try {
      const res = await fetch(url);
      if (!res.ok) {
        console.error(`Failed ${url}: ${res.status}`);
        continue;
      }
      const text = await res.text();
      const localFile = path.join(outDir, path.basename(chunk));
      fs.writeFileSync(localFile, text, 'utf8');
      console.log(`Saved ${localFile} (${text.length} bytes)`);
    } catch (err) {
      console.error(`Error fetching ${chunk}:`, err);
    }
  }
}

main();
