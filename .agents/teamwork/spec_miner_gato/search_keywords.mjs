// search_keywords.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const chunksDir = path.join(__dirname, 'gato_chunks');

const keywords = ['Resultados', 'Impulsan', 'whatsapp', 'Clientes', 'Proyectos', 'servicios', 'consulta', 'Explorar', 'Haz', 'Google', 'Políticas', 'Reclamaciones'];

for (const file of fs.readdirSync(chunksDir)) {
  const content = fs.readFileSync(path.join(chunksDir, file), 'utf8');
  const found = keywords.filter(k => content.toLowerCase().includes(k.toLowerCase()));
  if (found.length > 0) {
    console.log(`File: ${file} matches: ${found.join(', ')}`);
  }
}
