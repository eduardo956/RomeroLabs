// analyze_chunks.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const chunksDir = path.join(__dirname, 'gato_chunks');

const files = fs.readdirSync(chunksDir);

for (const file of files) {
  const content = fs.readFileSync(path.join(chunksDir, file), 'utf8');
  console.log(`=== File: ${file} (${content.length} chars) ===`);
  
  // Find all string literals with Spanish text or identifiable patterns
  const spanishRegex = /"([^"\\]*(?:[áéíóúñ¿¡][^"\\]*)+)"/gi;
  const matches = new Set();
  let m;
  while ((m = spanishRegex.exec(content)) !== null) {
    if (m[1].length > 3 && m[1].length < 150) {
      matches.add(m[1]);
    }
  }
  console.log(`Found ${matches.size} Spanish phrases. Sample:`, Array.from(matches).slice(0, 10));
}
