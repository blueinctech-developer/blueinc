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
  address: site.offices.filter((o) => o.address).map((o) => ({ '@type': 'PostalAddress', streetAddress: o.street || o.address, ...(o.city ? { addressLocality: o.city } : {}), ...(o.region ? { addressRegion: o.region } : {}), ...(o.postalCode ? { postalCode: o.postalCode } : {}), addressCountry: o.countryCode })),
  contactPoint: site.phones.map((p) => ({ '@type': 'ContactPoint', telephone: p.display.replace(/\s/g, ''), contactType: 'customer service', areaServed: p.label })),
});

export function layout({ route, title, description, body, withCta = true, bodyClass = '', ogImage = '/assets/img/og.jpg', noindex = false, jsonLd = false, schema = null, ogType = 'website' }) {
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
<meta property="og:type" content="${ogType}">
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
<link rel="preload" href="/assets/fonts/switzer-500.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/inter-var-latin.woff2" as="font" type="font/woff2" crossorigin>
<!--INLINE_CSS-->
<script>
  (function (d) {
    var h = d.documentElement; h.classList.add('js');
    if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) h.classList.add('reduced');
    // Fail-safe: never leave content hidden if the animation runtime doesn't boot.
    window.__animTimeout = setTimeout(function () { h.classList.add('no-anim'); }, 6000);
  })(document);
</script>
${jsonLd ? `<script type="application/ld+json">${orgJsonLd()}</script>` : ''}
${schema ? `<script type="application/ld+json">${JSON.stringify(schema)}</script>` : ''}
</head>
<body class="${bodyClass}">
<a class="skip-link" href="#main">Skip to content</a>
${navbar(route)}
<template id="tpl-menu">${mobileMenu()}</template>
<main id="main" tabindex="-1">
${body}
</main>
${footer({ withCta })}
<template id="tpl-quote">${quoteDialog()}</template>
<script>
  // Animation + interaction scripts load after the page has painted (they were deferred scripts that
  // ran before the hero could paint). async=false keeps execution order while downloading in parallel.
  (function () {
    var files = ["/assets/vendor/gsap.min.js", "/assets/vendor/ScrollTrigger.min.js", "/assets/vendor/SplitText.min.js", "/assets/vendor/lenis.min.js", "/assets/js/config.js", "/assets/js/main.js"];
    function load() { files.forEach(function (src) { var s = document.createElement("script"); s.src = src; s.async = false; document.body.appendChild(s); }); }
    function go() { (window.requestIdleCallback || function (f) { setTimeout(f, 1); })(load, { timeout: 800 }); }
    if (document.readyState === "complete") go(); else addEventListener("load", go, { once: true });
  })();
</script>
</body>
</html>`;
}
