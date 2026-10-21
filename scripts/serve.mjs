// Minimal static server for previewing dist/ with clean URLs. Usage: npm run serve [-- --port 4321]
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../dist');
const portArg = process.argv.indexOf('--port');
const port = Number(portArg > -1 ? process.argv[portArg + 1] : process.env.PORT || 4321);
const types = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp',
  '.svg': 'image/svg+xml', '.mp4': 'video/mp4', '.webm': 'video/webm', '.xml': 'application/xml', '.txt': 'text/plain', '.ico': 'image/x-icon', '.woff2': 'font/woff2',
};

async function resolve(urlPath) {
  let p = path.join(root, decodeURIComponent(urlPath));
  if (!p.startsWith(root)) return null;
  try {
    const s = await stat(p);
    if (s.isDirectory()) p = path.join(p, 'index.html');
    await stat(p);
    return p;
  } catch {
    if (!path.extname(p)) {
      try { const alt = path.join(p, 'index.html'); await stat(alt); return { redirect: urlPath + '/' }; } catch {}
    }
    return null;
  }
}

createServer(async (req, res) => {
  const urlPath = new URL(req.url, 'http://x').pathname;
  const hit = await resolve(urlPath);
  if (hit && hit.redirect) { res.writeHead(301, { Location: hit.redirect }); return res.end(); }
  if (!hit) {
    res.writeHead(404, { 'Content-Type': types['.html'] });
    return res.end(await readFile(path.join(root, '404.html')));
  }
  const type = types[path.extname(hit)] || 'application/octet-stream';
  const body = await readFile(hit);
  const range = req.headers.range && /bytes=(\d*)-(\d*)/.exec(req.headers.range);
  if (range) { // byte ranges are required for <video> seeking (and by Safari for playback at all)
    const start = range[1] ? +range[1] : 0;
    const end = range[2] ? Math.min(+range[2], body.length - 1) : body.length - 1;
    res.writeHead(206, { 'Content-Type': type, 'Content-Range': `bytes ${start}-${end}/${body.length}`, 'Accept-Ranges': 'bytes', 'Content-Length': end - start + 1 });
    return res.end(body.subarray(start, end + 1));
  }
  res.writeHead(200, { 'Content-Type': type, 'Accept-Ranges': 'bytes', 'Cache-Control': 'no-cache' });
  res.end(body);
}).listen(port, () => console.log(`Serving dist/ at http://localhost:${port}`));
