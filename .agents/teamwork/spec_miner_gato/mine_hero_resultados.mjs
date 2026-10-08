// mine_hero_resultados.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const file = path.join(__dirname, 'gato_chunks', '1933-160bff5cd3ad846f.js');
const content = fs.readFileSync(file, 'utf8');

// Find all string literals in content
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
  s.includes('Haz') || s.includes('Impuls') || s.includes('negocio') || 
  s.includes('Explorar') || s.includes('consulta') || s.includes('partner') ||
  s.includes('Resultados') || s.includes('Optim') || s.includes('marca') ||
  s.includes('Estrategias') || s.includes('redes') || s.includes('web') ||
  s.includes('tecnología')
);

console.log('--- Hero & Resultados strings ---');
console.log(JSON.stringify(Array.from(new Set(interesting)), null, 2));
