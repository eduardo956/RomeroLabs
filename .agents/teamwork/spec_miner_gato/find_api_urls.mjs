// find_api_urls.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const chunksDir = path.join(__dirname, 'gato_chunks');

for (const f of fs.readdirSync(chunksDir)) {
  const content = fs.readFileSync(path.join(chunksDir, f), 'utf8');
  // Look for http, api, /wp-json, etc.
  const urls = content.match(/https?:\/\/[a-zA-Z0-9\.\_\-\/]+/g) || [];
  const apiUrls = urls.filter(u => u.includes('gato.pe') || u.includes('api') || u.includes('wp-json'));
  if (apiUrls.length > 0) {
    console.log(`In ${f}:`, Array.from(new Set(apiUrls)));
  }
}
