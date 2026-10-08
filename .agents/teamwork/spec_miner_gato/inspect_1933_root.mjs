// inspect_1933_root.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const file = path.join(__dirname, 'gato_chunks', '1933-160bff5cd3ad846f.js');
const content = fs.readFileSync(file, 'utf8');

// Look for component u definition: let u = ... or function u
const idx = content.lastIndexOf('let u=');
if (idx !== -1) {
  console.log('=== COMPONENT U IN 1933 ===');
  console.log(content.slice(idx, idx + 2500));
} else {
  const idx2 = content.lastIndexOf('function u');
  if (idx2 !== -1) {
    console.log('=== FUNCTION U IN 1933 ===');
    console.log(content.slice(idx2, idx2 + 2500));
  }
}
