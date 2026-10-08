// find_onSubmit_N.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const file = path.join(__dirname, 'extracted_2985.js');
const content = fs.readFileSync(file, 'utf8');

// Look for const N = or function N or let N =
const regex = /(?:let|const|function)\s+N\s*=?\s*(?:async\s*)?\([^)]*\)\s*=>|\bfunction\s+N\s*\(/;
const match = regex.exec(content);
if (match) {
  const start = match.index;
  console.log('=== FUNCTION N ===');
  console.log(content.slice(start, start + 1500));
} else {
  // Let's search for "onSubmit" and look backwards
  const idx = content.indexOf('onSubmit:N');
  if (idx !== -1) {
    console.log('=== BEFORE onSubmit:N ===');
    console.log(content.slice(Math.max(0, idx - 1500), idx));
  }
}
