// mine_nav_footer.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const file = path.join(__dirname, 'gato_chunks', '8263-961cf8ff2d2f5003.js');
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

// Filter interesting strings
const interesting = strings.filter(s => 
  s.includes('Transformamos') || s.includes('Subscrib') || s.includes('correo') || 
  s.includes('Políticas') || s.includes('Reclamaciones') || s.includes('Privacidad') ||
  s.includes('Visítanos') || s.includes('Miraflores') || s.includes('Teléfonos') ||
  s.includes('dortega') || s.includes('mjara') || s.includes('Partners') ||
  s.includes('2025') || s.includes('nav') || s.includes('menu') || s.includes('Contáctanos')
);

console.log('--- Nav & Footer strings ---');
console.log(JSON.stringify(Array.from(new Set(interesting)), null, 2));

// Save decoded content to a file for easy viewing
fs.writeFileSync(path.join(__dirname, 'extracted_8263.js'), content, 'utf8');
