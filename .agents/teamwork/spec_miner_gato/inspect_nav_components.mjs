// inspect_nav_components.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const file = path.join(__dirname, 'extracted_8263.js');
const content = fs.readFileSync(file, 'utf8');

// Find all exported components in 8263
const exported = content.match(/(\w+):\s*\(e,\s*t,\s*l\)\s*=>/g) || [];
console.log('Exported module IDs in 8263:', exported);

// Check for nav, menu, drawer, sidebar keywords
const keywords = ['sidebar', 'drawer', 'navbar', 'menu', 'burger', 'header', 'GATO'];
for (const kw of keywords) {
  let count = 0;
  let idx = 0;
  while ((idx = content.toLowerCase().indexOf(kw.toLowerCase(), idx)) !== -1) {
    count++;
    idx += kw.length;
  }
  console.log(`Keyword "${kw}": ${count} occurrences`);
}

// Let's print snippets containing G A T O or menu
const gatoIdx = content.indexOf('G A T O');
if (gatoIdx !== -1) {
  console.log('=== G A T O SNIPPET ===');
  console.log(content.slice(Math.max(0, gatoIdx - 500), Math.min(content.length, gatoIdx + 1500)));
} else {
  // Try searching for "GATO" with spaces or letters
  console.log('Searching for "GATO" uppercase:');
  let idx2 = content.indexOf('GATO');
  while (idx2 !== -1 && idx2 < 50000) {
    console.log(content.slice(Math.max(0, idx2 - 100), Math.min(content.length, idx2 + 200)));
    idx2 = content.indexOf('GATO', idx2 + 200);
    break;
  }
}
