// node render.js page.html outDir w h fps duration [times...]  (times → preview only)
const { chromium } = require('playwright-core'); const fs = require('fs'); const { pathToFileURL } = require('url');
(async () => {
  const [page, outDir, w, h, fps, dur, ...times] = process.argv.slice(2);
  fs.mkdirSync(outDir, { recursive: true });
  const b = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const ctx = await b.newContext({ viewport: { width: +w, height: +h } }); const p = await ctx.newPage();
  p.on('pageerror', e => console.log('PAGEERROR', e.message)); p.on('console', m => { if (m.type() === 'error') console.log('CONSOLE', m.text()); });
  await p.goto(/^https?:/.test(page) ? page : pathToFileURL(page).href, { waitUntil: 'load' });
  await p.evaluate(() => window.ready); await p.waitForTimeout(800);
  const c = await ctx.newCDPSession(p);
  const list = times.length ? times.map(Number) : Array.from({ length: Math.round(+dur * +fps) }, (_, i) => i / +fps);
  let i = 0;
  for (const t of list) {
    await p.evaluate((t) => window.seek(t), t);
    await p.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))));
    const r = await c.send('Page.captureScreenshot', { format: 'jpeg', quality: 92 });
    fs.writeFileSync(`${outDir}/${times.length ? 't' + t : String(i).padStart(4, '0')}.jpg`, Buffer.from(r.data, 'base64'));
    i++;
  }
  console.log('frames', i);
  await b.close();
})();
