// inspect_sidebar_drawer.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const file = path.join(__dirname, 'gato_chunks', '1933-160bff5cd3ad846f.js');
const content = fs.readFileSync(file, 'utf8');

// Look for n=t(8624) or c=t(8015) in 1933
// In 1933 we saw: var n=t(8624), c=t(8015);
// Let's search for 8624: and 8015:
const idx8624 = content.indexOf('8624:');
if (idx8624 !== -1) {
  console.log('=== MODULE 8624 (SidebarNavbar) ===');
  console.log(content.slice(idx8624, idx8624 + 2000));
}

const idx8015 = content.indexOf('8015:');
if (idx8015 !== -1) {
  console.log('=== MODULE 8015 (DrawerMenu) ===');
  console.log(content.slice(idx8015, idx8015 + 2500));
}
