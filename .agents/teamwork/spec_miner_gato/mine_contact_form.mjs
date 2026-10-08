// mine_contact_form.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const file = path.join(__dirname, 'gato_chunks', '2985-b03d71350d24c00e.js');
const content = fs.readFileSync(file, 'utf8');

// Find all string literals in content
const stringRegex = /"([^"\\]*(?:\\.[^"\\]*)*)"|'([^'\\]*(?:\\.[^'\\]*)*)'/g;
const strings = [];
let match;
while ((match = stringRegex.exec(content)) !== null) {
  const str = match[1] || match[2];
  if (str && str.length > 1) {
    strings.push(str);
  }
}

console.log('Total strings in 2985:', strings.length);
console.log('Unique strings in 2985:\n', JSON.stringify(Array.from(new Set(strings)), null, 2));

// Save decoded content to a file for easy viewing
fs.writeFileSync(path.join(__dirname, 'extracted_2985.js'), content, 'utf8');
