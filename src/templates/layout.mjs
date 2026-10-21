import { site } from '../data/site.mjs';
import { esc, navbar, mobileMenu, footer, quoteDialog } from './components.mjs';

const orgJsonLd = () => JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  logo: `${site.url}/assets/img/logo.png`,
  email: site.email,
  foundingDate: String(site.founded),
  description: site.description,
  sameAs: site.social.map((s) => s.href),
  address: site.offices.filter((o) => o.address).map((o) => ({ '@type': 'PostalAddress', streetAddress: o.address, ...(o.city ? { addressLocality: o.city } : {}), addressCountry: o.countryCode })),
  contactPoint: site.phones.map((p) => ({ '@type': 'ContactPoint', telephone: p.display.replace(/\s/g, ''), contactType: 'customer service', areaServed: p.label })),
});

export function layout({ route, title, description, body, withCta = true, bodyClass = '', ogImage = '/assets/img/people.jpg', noindex = false, jsonLd = false }) {
  const canonical = site.url + route;
  return `<!doctype html>
<html lang="en-US">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${canonical}">
${noindex ? '<meta name="robots" content="noindex">' : ''}
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(site.name)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${site.url}${ogImage}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@blueinctech">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="theme-color" content="#f5f5f5">
<link rel="icon" href="/assets/img/favicon-32.png" sizes="32x32">
<link rel="icon" href="/assets/img/favicon-192.png" sizes="192x192">
<link rel="apple-touch-icon" href="/assets/img/favicon-192.png">
<link rel="preconnect" href="https://api.fontshare.com" crossorigin>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=switzer@400,500,600&amp;display=swap">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&amp;family=Roboto+Mono:wght@400;500&amp;display=swap">
<link rel="stylesheet" href="/assets/css/main.css">
<script>
  (function (d) {
    var h = d.documentElement; h.classList.add('js');
    if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) h.classList.add('reduced');
    // Fail-safe: never leave content hidden if the animation runtime doesn't boot.
    window.__animTimeout = setTimeout(function () { h.classList.add('no-anim'); }, 4000);
  })(document);
</script>
${jsonLd ? `<script type="application/ld+json">${orgJsonLd()}</script>` : ''}
</head>
<body class="${bodyClass}">
<a class="skip-link" href="#main">Skip to content</a>
${navbar(route)}
${mobileMenu()}
<main id="main" tabindex="-1">
${body}
</main>
${footer({ withCta })}
${quoteDialog()}
<script src="/assets/vendor/gsap.min.js" defer></script>
<script src="/assets/vendor/ScrollTrigger.min.js" defer></script>
<script src="/assets/vendor/SplitText.min.js" defer></script>
<script src="/assets/vendor/lenis.min.js" defer></script>
<script src="/assets/js/config.js" defer></script>
<script src="/assets/js/main.js" defer></script>
</body>
</html>`;
}
