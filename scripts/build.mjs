// Zero-dependency static site build: renders every route to dist/<route>/index.html
// (clean URLs matching the original WordPress permalinks) and copies assets.
import { mkdirSync, writeFileSync, readFileSync, rmSync, cpSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { site, home, about, audit, servicesPage, services, portfolio, industries, reviewsPage, pricing, contactPage, productsPageData } from '../src/data/site.mjs';
import { terms, privacy, legalEmail } from '../src/data/legal.mjs';
import { blog, posts as rawPosts, readMinutes, byDate } from '../src/data/blog.mjs';
const posts = byDate(rawPosts);
import { layout } from '../src/templates/layout.mjs';
import { homePage } from '../src/templates/home.mjs';
import {
  aboutPage, auditPage, servicesIndexPage, serviceDetailPage, portfolioPage, industriesPage,
  reviewsPageTpl, pricingPage, contactPageTpl, notFoundPage, legalPage, blogIndexPage, blogPostPage, productsPage,
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
  { route: '/products/', title: productsPageData.title, description: productsPageData.description, body: productsPage(productsPageData), ogImage: '/assets/img/clients/staffintra.com.jpg', priority: '0.9' },
  { route: '/portfolio/', title: portfolio.title, description: portfolio.body, body: portfolioPage() },
  { route: '/industries-served/', title: industries.title, description: industries.body.slice(0, 155) + '…', body: industriesPage() },
  { route: '/success-stories/', title: reviewsPage.title, description: reviewsPage.body, body: reviewsPageTpl() },
  { route: '/pricing-plans/', title: pricing.title, description: pricing.lead, body: pricingPage() },
  { route: '/contact/', title: contactPage.title, description: contactPage.lead, body: contactPageTpl() },
  { route: '/blog/', title: blog.title, description: blog.description, body: blogIndexPage(blog, posts, readMinutes), priority: '0.7' },
  ...posts.map((p) => ({
    route: `/blog/${p.slug}/`, title: `${p.title} | Blueinc Technologies`, description: p.excerpt, ogImage: p.image, ogType: 'article', priority: '0.6',
    body: blogPostPage(p, posts, readMinutes),
    schema: { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: p.title, description: p.excerpt, datePublished: p.date, image: site.url + p.image, mainEntityOfPage: `${site.url}/blog/${p.slug}/`, author: { '@type': 'Organization', name: site.name, url: site.url }, publisher: { '@type': 'Organization', name: site.name, logo: { '@type': 'ImageObject', url: site.url + '/assets/img/logo.png' } } },
  })),
  ...[terms, privacy].map((d) => ({ route: d.route, title: d.title, description: d.description, body: legalPage(d, { email: legalEmail }), priority: '0.3' })),
  { route: '/free-detailed-audit/', title: 'Free Technology Consultation | Blueinc Technologies', description: audit.lead, body: auditPage() },
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
  '/privacy-policy-2/': '/privacy-policy/',
  '/terms-conditions/': '/terms-of-service/',
  '/terms-and-conditions/': '/terms-of-service/',
};

// ---- Performance post-processing ------------------------------------------------------------
// 1) Inline the stylesheet (minified) so it isn't a render-blocking request.
// 2) Serve WebP wherever a .webp sits next to a .jpg/.png (skips <meta>/<link>, so social
//    previews and favicons keep their universally supported formats).
// 3) Card pills show 36px thumbnails, not full 1440px screenshots.
const minifyCss = (css) => css
  .replace(/\/\*[\s\S]*?\*\//g, '')
  .replace(/\s+/g, ' ')
  .replace(/\s*([{}:;,>])\s*/g, '$1')
  .replace(/;}/g, '}')
  .trim();
const inlineCss = `<style>${minifyCss(readFileSync(path.join(root, 'src/assets/css/main.css'), 'utf8'))}</style>`;
const webpFor = new Map();
const toWebp = (url) => {
  if (!webpFor.has(url)) {
    const candidate = url.replace(/\.(jpe?g|png)$/i, '.webp');
    webpFor.set(url, candidate !== url && existsSync(path.join(root, 'src', candidate)) ? candidate : url);
  }
  return webpFor.get(url);
};
// 4) Cache-busting: every /assets/ URL gets ?v=<content hash>. Assets are cached by browsers for
//    days, so without this a deploy could pair new HTML with an old cached main.js (seen in the
//    wild: the old JS intro froze the wordmark letters mid-animation). Changed file → new URL.
const fileHash = new Map();
const withVersion = (url) => {
  if (!fileHash.has(url)) {
    const file = path.join(root, 'src', url);
    const alt = url === '/assets/js/config.js' ? path.join(root, 'src/config.js') : null;
    const src = existsSync(file) ? file : alt && existsSync(alt) ? alt : null;
    fileHash.set(url, src ? createHash('sha1').update(readFileSync(src)).digest('hex').slice(0, 8) : null);
  }
  const h = fileHash.get(url);
  return h ? `${url}?v=${h}` : url;
};
const optimize = (html) => html
  .replace('<!--INLINE_CSS-->', inlineCss)
  .replace(/(class="work__pill"><img src=")\/assets\/img\/clients\/([^"]+)\.(?:jpg|webp)"/g, (m, pre, name) =>
    existsSync(path.join(root, 'src/assets/img/clients/thumbs', `${name}.webp`)) ? `${pre}/assets/img/clients/thumbs/${name}.webp"` : m)
  .replace(/<(?!meta\b|link\b)[a-z][^>]*>/gi, (tag) =>
    tag.replace(/(\/assets\/[^"')\s]+?\.(?:jpe?g|png))(?=["')\s])/gi, (u) => toWebp(u)))
  // relative /assets/ URLs only (absolute og:image/JSON-LD URLs are left untouched)
  .replace(/(["'(\s,])(\/assets\/[^"')\s,?#]+\.[a-z0-9]+)(?=["')\s,])/gi, (m, pre, url) => pre + withVersion(url));

const out = (route, html) => {
  const file = route.endsWith('.html') ? path.join(dist, route) : path.join(dist, route, 'index.html');
  mkdirSync(path.dirname(file), { recursive: true });
  writeFileSync(file, optimize(html));
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
