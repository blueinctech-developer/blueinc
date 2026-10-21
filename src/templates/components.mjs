import { site, nav, footerCols, services, industries, products, projectTypes, cta } from '../data/site.mjs';

export const esc = (s = '') =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

export const pad = (n) => String(n).padStart(2, '0');
export const isExternal = (href) => /^https?:\/\//.test(href);
export const extAttrs = (href) => (isExternal(href) ? ' target="_blank" rel="noopener"' : '');

/* ---------- Icons (inline, stroke-based) ---------- */
const svg = (d, vb = '0 0 24 24', extra = '') =>
  `<svg viewBox="${vb}" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}>${d}</svg>`;
export const icon = {
  arrow: svg('<path d="M5 12h14M13 6l6 6-6 6"/>'),
  arrowUp: svg('<path d="M12 19V5M6 11l6-6 6 6"/>'),
  arrowUpRight: svg('<path d="M7 17L17 7M8 7h9v9"/>'),
  chevron: svg('<path d="M6 9l6 6 6-6"/>'),
  close: svg('<path d="M5 5l14 14M19 5L5 19"/>', '0 0 24 24', 'stroke-width="2"'),
  copy: svg('<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>'),
  calendar: svg('<rect x="3.5" y="5" width="17" height="15.5" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/>'),
  pin: svg('<path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>'),
  globe: svg('<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.8 3 2.8 15 0 18M12 3c-2.8 3-2.8 15 0 18"/>'),
  spark: svg('<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/>'),
  check: svg('<circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.7 2.7L16.5 9.5"/>'),
  plus: svg('<path d="M12 2v20M2 12h20"/>', '0 0 24 24', 'stroke-width="1.4"'),
  quote: `<svg viewBox="0 0 32 24" fill="currentColor" aria-hidden="true"><path d="M0 24V14.4C0 5.9 4.3 1.1 12.6 0l1.1 3.6C9.2 4.9 7 7.6 6.8 11.2H12.6V24H0zm18.4 0V14.4C18.4 5.9 22.7 1.1 31 0l1 3.6c-4.5 1.3-6.7 4-6.9 7.6H31V24H18.4z"/></svg>`,
  star: `<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M10 1.5l2.6 5.5 6 .7-4.4 4.1 1.2 5.9L10 14.8l-5.4 2.9 1.2-5.9L1.4 7.7l6-.7z"/></svg>`,
  cursor: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 2l16 9.5-7 1.6L9.5 20z"/></svg>`,
  chat: svg('<path d="M21 12a8 8 0 0 1-11.7 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/>'),
  mail: svg('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 6.5l8.5 6 8.5-6"/>'),
  heart: svg('<path d="M12 20s-7.5-4.5-7.5-10A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 7.5 3c0 5.5-7.5 10-7.5 10z"/>'),
};

/* ---------- Text roll ---------- */
export const roll = (label) =>
  `<span class="roll"><span class="roll__a">${esc(label)}</span><span class="roll__b" aria-hidden="true">${esc(label)}</span></span>`;

/* ---------- Button ---------- */
export function btn({ label, href, variant = '', size = '', attrs = '', icon: ic = '' }) {
  const cls = ['btn', variant && `btn--${variant}`, size && `btn--${size}`].filter(Boolean).join(' ');
  const inner = `<span class="btn__in">${roll(label)}${ic}</span>`;
  if (href) return `<a class="${cls}" href="${esc(href)}"${extAttrs(href)} ${attrs}>${inner}</a>`;
  return `<button class="${cls}" type="button" ${attrs}>${inner}</button>`;
}
export const quoteBtn = (label = 'Get a Free Quote', variant = '', size = '', type = '') =>
  btn({ label, variant, size, attrs: `data-open-quote${type ? ` data-project="${esc(type)}"` : ''}` });

/* ---------- Geometric wordmark (BLUEINC TECH) ----------
   Letters are built from rectangles on a 96×288 cell with a 32px stroke,
   echoing the blocky custom wordmark of the reference. Each letter is its
   own <g> so it can be animated independently. */
const S = 32, W = 96, H = 288, GAP = 24, SPACE = 72;
const LETTERS = {
  B: { w: W, r: [[0, 0, S, H], [0, 0, 88, S], [56, 0, S, 160], [0, 128, W, S], [64, 128, S, H - 128], [0, H - S, W, S]] },
  L: { w: W, r: [[0, 0, S, H], [0, H - S, W, S]] },
  U: { w: W, r: [[0, 0, S, H], [W - S, 0, S, H], [0, H - S, W, S]] },
  E: { w: W, r: [[0, 0, S, H], [0, 0, W, S], [0, 128, 80, S], [0, H - S, W, S]] },
  I: { w: S, r: [[0, 0, S, H]] },
  N: { w: W, r: [[0, 0, S, H], [W - S, 0, S, H], [0, 0, W, S]] },
  C: { w: W, r: [[0, 0, S, H], [0, 0, W, S], [0, H - S, W, S], [W - S, 0, S, 88], [W - S, H - 88, S, 88]] },
  T: { w: W, r: [[0, 0, W, S], [S, 0, S, H]] },
  H: { w: W, r: [[0, 0, S, H], [W - S, 0, S, H], [0, 128, W, S]] },
};
export function wordmark(text = 'BLUEINC TECH', { label = 'Blueinc Technologies', cls = '' } = {}) {
  let x = 0;
  const groups = [];
  for (const ch of text) {
    if (ch === ' ') { x += SPACE - GAP; continue; }
    const L = LETTERS[ch];
    const rects = L.r.map(([rx, ry, rw, rh]) => `<rect x="${x + rx}" y="${ry}" width="${rw}" height="${rh}"/>`).join('');
    groups.push(`<g class="wm-letter">${rects}</g>`);
    x += L.w + GAP;
  }
  const width = x - GAP;
  return `<svg class="wordmark ${cls}" viewBox="0 0 ${width} ${H}" role="img" aria-label="${esc(label)}" preserveAspectRatio="xMidYMid meet">${groups.join('')}</svg>`;
}

/* ---------- Navbar ---------- */
const dropItems = (key) => {
  if (key === 'products')
    return products.map((p, i) => ({ label: p.name, href: p.url, i }))
      .concat([{ label: 'View all products', href: '/portfolio/#products', foot: true }]);
  if (key === 'services')
    return services.map((s, i) => ({ label: s.short || s.name, href: `/our-services/${s.slug}/`, i }))
      .concat([{ label: 'View all services', href: '/our-services/', foot: true }]);
  if (key === 'industries')
    return industries.list.map((d, i) => ({ label: d.name, href: `/industries-served/#${d.slug}`, i }))
      .concat([{ label: 'All industries', href: '/industries-served/', foot: true }]);
  return [];
};

export function navbar(current) {
  const links = nav.map((n) => {
    const active = current && (current === n.href || (n.href !== '/' && current.startsWith(n.href)));
    const aria = active ? ' aria-current="page"' : '';
    if (!n.children) return `<li><a class="navbar__link" href="${n.href}"${aria}>${roll(n.label)}</a></li>`;
    const items = dropItems(n.children)
      .map((d) => `<li${d.foot ? ' class="drop__foot"' : ''}><a href="${d.href}"${extAttrs(d.href)}>${roll(d.label)}</a></li>`)
      .join('');
    return `<li class="has-drop"><a class="navbar__link" href="${n.href}"${aria} aria-haspopup="true">${roll(n.label)}${icon.chevron}</a><ul class="drop">${items}</ul></li>`;
  }).join('');
  const taglines = site.navTaglines.map((t) => `<span>${esc(t)}</span>`).join('');
  return `
<header class="navbar" data-navbar>
  <nav class="navbar__bar" aria-label="Primary">
    <a class="navbar__logo" href="/" aria-label="Blueinc Technologies — home">
      <img class="navbar__mark" src="/assets/img/mark.png" alt="" width="32" height="32">
      <span class="navbar__tagline" data-taglines aria-hidden="true">${taglines}</span>
    </a>
    <ul class="navbar__links">${links}</ul>
    <div class="navbar__contact">
      <a class="navbar__person" href="${site.calendly}" target="_blank" rel="noopener">
        <img src="/assets/img/partner.jpg" alt="" width="44" height="44">
        <span>
          <span class="navbar__person-name">Talk to a Digital Partner <i class="online-dot"></i></span>
          <span class="navbar__person-role">Schedule a call</span>
        </span>
      </a>
      ${btn({ label: 'Get Started', href: site.calendly, size: 'sm' })}
      <button class="menu-btn" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="menu" data-menu-open>
        <span class="menu-btn__lines"><span></span><span></span></span>
      </button>
    </div>
  </nav>
</header>`;
}

export function mobileMenu() {
  const items = nav.map((n) => {
    if (!n.children) return `<li data-menu-item><a href="${n.href}">${esc(n.label)}</a></li>`;
    const sub = dropItems(n.children).map((d) => `<a href="${d.href}"${extAttrs(d.href)}>${esc(d.label)}</a>`).join('');
    return `<li data-menu-item><button class="menu__acc" type="button" aria-expanded="false">${esc(n.label)}${icon.chevron}</button><div class="menu__sub"><div>${sub}</div></div></li>`;
  }).join('');
  return `
<div class="menu" id="menu" role="dialog" aria-modal="true" aria-label="Menu" data-menu>
  <div class="menu__bg" data-menu-close></div>
  <div class="menu__sheet" data-lenis-prevent>
    <div class="menu__top" data-menu-item>
      <a class="menu__logo" href="/"><img src="/assets/img/logo.png" alt="Blueinc Technologies" width="128" height="36"></a>
      <button class="menu__close" type="button" aria-label="Close menu" data-menu-close>${icon.close}</button>
    </div>
    <ul class="menu__links">${items}</ul>
    <div class="menu__card" data-menu-item>
      <a class="navbar__person" href="${site.calendly}" target="_blank" rel="noopener">
        <img src="/assets/img/partner.jpg" alt="" width="44" height="44">
        <span><span class="navbar__person-name">Talk to a Digital Partner <i class="online-dot"></i></span><span class="navbar__person-role">Schedule a call</span></span>
      </a>
      ${btn({ label: 'Get Started', href: site.calendly, size: 'lg' })}
      ${quoteBtn('Get a Free Quote', 'light', 'lg')}
    </div>
    <div class="menu__social" data-menu-item>${site.social.map((s) => `<a href="${s.href}" target="_blank" rel="noopener">${s.label}</a>`).join('')}</div>
  </div>
</div>`;
}

/* ---------- CTA + Footer ---------- */
export function ctaPanel() {
  return `
<section class="cta" aria-labelledby="cta-title" data-cta>
  ${loopVideo('ribbon-wide', 'cta__video', 'data-cta-video')}
  <div class="cta__content">
    <h2 class="h1 cta__title" id="cta-title" data-reveal="lines">${esc(cta.title)}</h2>
    <p class="lead" style="color:var(--grey-200)" data-reveal="fade">${esc(cta.sub)}</p>
    <div class="btn-row btn-row--center" data-reveal="fade">
      ${btn({ label: 'Discuss Your Project', href: site.calendly, size: 'lg' })}
      ${quoteBtn('Get a Free Quote', 'light', 'lg')}
    </div>
  </div>
</section>`;
}

export function footer({ withCta = true } = {}) {
  const cols = footerCols.map((c) => `
    <div class="footer__col">
      <span class="footer__label">${esc(c.title)}</span>
      <ul>${c.links.map((l) => `<li><a href="${l.href}"${extAttrs(l.href)}>${roll(l.label)}</a></li>`).join('')}</ul>
    </div>`).join('');
  const clocks = site.offices.map((o) => `
    <div class="clock" data-clock="${o.tz}">
      <div class="clock__time"><span class="clock__face"><span class="ghost" aria-hidden="true">88:88</span><span class="t" data-time>--:--</span></span><span class="ampm" data-ampm></span></div>
      <div class="clock__meta">
        <span>${icon.calendar}<span data-date>&nbsp;</span></span>
        <span>${icon.pin}${esc(o.label)}</span>
      </div>
    </div>`).join('');
  return `
${withCta ? ctaPanel() : ''}
<footer class="footer${withCta ? '' : ' footer--solo'}" data-footer>
  <div class="footer__top">
    <div class="footer__lead">
      <span class="footer__label">Talk to a Digital Partner:</span>
      <div class="footer__email">
        <a href="mailto:${site.email}" class="u-link">${site.email}</a>
        <button class="copy-btn" type="button" data-copy="${site.email}" aria-label="Copy email address">${icon.copy}<span class="copy-btn__tip" role="status">Copied</span></button>
      </div>
      <div class="footer__phones">${site.phones.map((p) => `<a href="${p.href}">${p.label}: ${p.display}</a>`).join('')}</div>
      <a class="call-chip" href="${site.calendly}" target="_blank" rel="noopener"><img src="/assets/img/partner.jpg" alt="" width="40" height="40">Schedule a call with us ${icon.arrow}</a>
    </div>
    ${cols}
  </div>
  <div class="clocks" style="--n:${site.offices.length}">${clocks}</div>
  <div class="footer__wordmark" data-footer-wordmark>${wordmark('BLUEINC TECH', { label: 'Blueinc Tech' })}</div>
  <div class="footer__bottom">
    <span>© ${site.founded}–<span data-year>${new Date().getFullYear()}</span> ${esc(site.legalName)} | ${site.regNo}</span>
    <nav aria-label="Legal">
      <a href="https://blueinctech.com/terms-of-service/">Terms of Service</a>
      <a href="https://blueinctech.com/privacy-policy">Privacy Policy</a>
      ${site.social.map((s) => `<a href="${s.href}" target="_blank" rel="noopener">${s.label}</a>`).join('')}
    </nav>
  </div>
</footer>
<a class="to-top" href="#main" aria-label="Back to top" data-to-top>${icon.arrowUp}</a>`;
}

/* ---------- Forms ---------- */
export function projectForm({ id = 'quote', submit = 'Get Quote', variant = 'quote' } = {}) {
  const options = projectTypes.map((t) => `<option>${esc(t)}</option>`).join('');
  const isContact = variant === 'contact';
  return `
<form class="form" data-form="${variant}" novalidate>
  <div class="field"><label for="${id}-name">Full Name *</label><input id="${id}-name" name="name" autocomplete="name" required></div>
  <div class="field"><label for="${id}-company">Company Name *</label><input id="${id}-company" name="company" autocomplete="organization" required></div>
  <div class="field"><label for="${id}-email">Email Address *</label><input id="${id}-email" name="email" type="email" autocomplete="email" required></div>
  <div class="field"><label for="${id}-phone">Phone Number${isContact ? ' *' : ''}</label><input id="${id}-phone" name="phone" type="tel" autocomplete="tel"${isContact ? ' required' : ''}></div>
  ${isContact ? '' : `<div class="field field--full"><label for="${id}-type">Project Type *</label><select id="${id}-type" name="project" required><option value="">Please select a project</option>${options}</select></div>`}
  <div class="field field--full"><label for="${id}-msg">${isContact ? 'What can we help you with? *' : 'Project Details / Description *'}</label><textarea id="${id}-msg" name="message" required></textarea></div>
  ${isContact ? `<label class="check"><input type="checkbox" name="terms" required> <span>By submitting this form you agree to the terms of the <a href="https://blueinctech.com/privacy-policy">Privacy Policy</a>.</span></label>` : ''}
  <input class="hp" type="text" name="website" tabindex="-1" autocomplete="off" aria-hidden="true">
  <div class="form__foot">${btn({ label: submit, attrs: 'data-submit' }).replace('type="button"', 'type="submit"')}<p class="form__status" role="status" aria-live="polite"></p></div>
</form>`;
}

export function quoteDialog() {
  return `
<dialog class="dialog" id="quote-dialog" data-lenis-prevent aria-labelledby="quote-title">
  <div class="dialog__inner">
    <div class="dialog__head">
      <div><h2 class="h4" id="quote-title">Get a FREE Quote</h2><p>Have a project in mind? Please fill the form and submit now.</p></div>
      <button class="dialog__close" type="button" aria-label="Close" data-close-dialog>${icon.close}</button>
    </div>
    ${projectForm({ id: 'dq' })}
  </div>
</dialog>`;
}

/* ---------- Bits ---------- */
export const eyebrow = () => ''; // eyebrows intentionally removed site-wide
export const crumbs = () => ''; // breadcrumb eyebrow removed
export const crumbsUnused = (items) =>
  `<nav class="crumbs" aria-label="Breadcrumb" data-intro>${items.map((c, i) => (c.href ? `<a href="${c.href}">${esc(c.label)}</a>` : `<span aria-current="page">${esc(c.label)}</span>`) + (i < items.length - 1 ? '<span aria-hidden="true">/</span>' : '')).join('')}</nav>`;

export const shot = (site) => `/assets/img/clients/${site}.jpg`;

/* ---------- Product mockups: laptop + phone showing real client sites, auto-scrolling ---------- */
export function devices({ laptop, phone, label = '', cls = '' }) {
  const L = laptop && laptop.split('.')[0];
  const P = phone && phone.split('.')[0];
  const aria = label ? `role="img" aria-label="${esc(label)}"` : 'aria-hidden="true"';
  return `
<div class="devices ${cls}" ${aria}>
  ${L ? `<div class="device-laptop"><div class="device-laptop__screen"><img class="scrollshot scrollshot--d" src="/assets/media/sites/${L}-d.jpg" alt="" loading="lazy" width="1100" height="2200"></div><div class="device-laptop__base"></div></div>` : ''}
  ${P ? `<div class="device-phone"><div class="device-phone__screen"><img class="scrollshot scrollshot--m" src="/assets/media/sites/${P}-m.jpg" alt="" loading="lazy" width="520" height="4534"></div></div>` : ''}
</div>`;
}

/* ---------- Looping ambient video (muted, plays only while visible, respects reduced motion) ---------- */
export const loopVideo = (name, cls = '', attrs = '') =>
  `<video class="${cls}" muted loop playsinline preload="none" poster="/assets/media/${name}-poster.jpg" data-autovideo aria-hidden="true" ${attrs}><source src="/assets/media/${name}.mp4" type="video/mp4"></video>`;
