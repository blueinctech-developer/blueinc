// Zero-dependency static site build: renders every route to dist/<route>/index.html
// (clean URLs matching the original WordPress permalinks) and copies assets.
import { mkdirSync, writeFileSync, rmSync, cpSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { site, home, about, audit, servicesPage, services, portfolio, industries, reviewsPage, pricing, contactPage } from '../src/data/site.mjs';
import { layout } from '../src/templates/layout.mjs';
import { homePage } from '../src/templates/home.mjs';
import {
  aboutPage, auditPage, servicesIndexPage, serviceDetailPage, portfolioPage, industriesPage,
  reviewsPageTpl, pricingPage, contactPageTpl, notFoundPage,
} from '../src/templates/pages.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');

const pages = [
  { route: '/', title: home.title, description: site.description, body: homePage(), jsonLd: true, priority: '1.0' },
  { route: '/about-us/', title: about.title, description: about.description, body: aboutPage() },
  { route: '/our-services/', title: servicesPage.title, description: servicesPage.lead, body: servicesIndexPage() },
  ...services.map((s) => ({
    route: `/our-services/${s.slug}/`,
    title: `${s.name} | Blueinc Technologies`,
    description: s.summary.length > 160 ? `${s.summary.slice(0, 157).replace(/\s+\S*$/, '')}…` : s.summary,
    body: serviceDetailPage(s),
  })),
  { route: '/portfolio/', title: portfolio.title, description: portfolio.body, body: portfolioPage() },
  { route: '/industries-served/', title: industries.title, description: industries.body.slice(0, 155) + '…', body: industriesPage() },
  { route: '/success-stories/', title: reviewsPage.title, description: reviewsPage.body, body: reviewsPageTpl() },
  { route: '/pricing-plans/', title: pricing.title, description: pricing.lead, body: pricingPage() },
  { route: '/contact/', title: contactPage.title, description: contactPage.lead, body: contactPageTpl() },
  { route: '/free-detailed-audit/', title: 'Free Detailed Audit | Blueinc Technologies', description: audit.lead, body: auditPage() },
];

// Legacy WordPress URLs that should keep working.
const redirects = {
  '/digital-solutions/': '/our-services/',
  '/our-solutions/': '/our-services/',
  '/hire-us/': '/contact/',
  '/contact-us/': '/contact/',
  '/about/': '/about-us/',
  '/meet-the-team/': '/about-us/',
  '/free-audit/': '/free-detailed-audit/',
  '/free-audit-2/': '/free-detailed-audit/',
  '/industries/': '/industries-served/',
  '/case-studies/': '/portfolio/',
};

const out = (route, html) => {
  const file = route.endsWith('.html') ? path.join(dist, route) : path.join(dist, route, 'index.html');
  mkdirSync(path.dirname(file), { recursive: true });
  writeFileSync(file, html);
};

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });
cpSync(path.join(root, 'src/assets'), path.join(dist, 'assets'), { recursive: true });
if (existsSync(path.join(root, 'src/config.js'))) cpSync(path.join(root, 'src/config.js'), path.join(dist, 'assets/js/config.js'));

for (const p of pages) out(p.route, layout(p));
out('/404.html', layout({ route: '/404.html', title: 'Page not found | Blueinc Technologies', description: site.description, body: notFoundPage(), noindex: true }));

for (const [from, to] of Object.entries(redirects)) {
  out(from, `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Redirecting…</title><link rel="canonical" href="${site.url}${to}"><meta name="robots" content="noindex"><meta http-equiv="refresh" content="0; url=${to}"></head><body><a href="${to}">Continue</a><script>location.replace(${JSON.stringify(to)})</script></body></html>`);
}

const today = new Date().toISOString().slice(0, 10);
writeFileSync(path.join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((p) => `  <url><loc>${site.url}${p.route}</loc><lastmod>${today}</lastmod><priority>${p.priority || '0.8'}</priority></url>`).join('\n')}
</urlset>
`);
writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${site.url}/sitemap.xml\n`);
// Netlify / Cloudflare Pages style redirects file (ignored by hosts that don't support it).
writeFileSync(path.join(dist, '_redirects'), Object.entries(redirects).map(([f, t]) => `${f} ${t} 301`).join('\n') + '\n');

console.log(`Built ${pages.length} pages + ${Object.keys(redirects).length} redirects → dist/`);
