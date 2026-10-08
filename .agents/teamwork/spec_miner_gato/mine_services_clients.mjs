// mine_services_clients.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const file = path.join(__dirname, 'gato_chunks', '8375-f272e20fe97cd9e8.js');
const content = fs.readFileSync(file, 'utf8');

// Find all string literals
const stringRegex = /"([^"\\]*(?:\\.[^"\\]*)*)"|'([^'\\]*(?:\\.[^'\\]*)*)'/g;
const strings = [];
let match;
while ((match = stringRegex.exec(content)) !== null) {
  const str = match[1] || match[2];
  if (str && str.length > 2) {
    strings.push(str);
  }
}

console.log('Total strings in 8375:', strings.length);
console.log('Sample strings:', strings.slice(0, 50));

// Let's dump the entire content of 8375 since it is only 14,024 bytes!
console.log('Full content length:', content.length);
fs.writeFileSync(path.join(__dirname, 'extracted_8375.js'), content, 'utf8');
