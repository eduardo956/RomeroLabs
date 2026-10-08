// inspect_form_logic.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const file = path.join(__dirname, 'extracted_2985.js');
const content = fs.readFileSync(file, 'utf8');

// Find handleSubmit or wa.me occurrences
const idx = content.indexOf('wa.me');
if (idx !== -1) {
  console.log('=== WA.ME SURROUNDING CODE ===');
  console.log(content.slice(Math.max(0, idx - 1000), Math.min(content.length, idx + 1000)));
}

// Find form submission handler
const formIdx = content.indexOf('onSubmit');
if (formIdx !== -1) {
  console.log('=== ONSUBMIT SURROUNDING CODE ===');
  console.log(content.slice(Math.max(0, formIdx - 500), Math.min(content.length, formIdx + 1500)));
}
