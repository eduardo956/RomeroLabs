// extract_hero_code.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const file = path.join(__dirname, 'gato_chunks', '1933-160bff5cd3ad846f.js');
const content = fs.readFileSync(file, 'utf8');

// Find occurrences of "Haz crecer tu negocio con nosotros" and dump 2000 chars around it
const idx = content.indexOf('Haz crecer tu negocio con nosotros');
if (idx !== -1) {
  console.log('=== HERO COMPONENT CODE SNIPPET ===');
  console.log(content.slice(Math.max(0, idx - 1500), Math.min(content.length, idx + 2500)));
}

const idx2 = content.indexOf('Resultados que te');
if (idx2 !== -1) {
  console.log('=== RESULTADOS COMPONENT CODE SNIPPET ===');
  console.log(content.slice(Math.max(0, idx2 - 1000), Math.min(content.length, idx2 + 3500)));
}
