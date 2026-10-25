// Animated product illustrations (used instead of screenshots).
//
// Each scene is HTML + inline SVG laid out on a fixed 64×40em stage (phone scenes: 20×43.3em).
// The stage's font-size is derived from the container size, so a scene scales as one picture
// at any size. The markup is the finished, readable picture; main.js turns it into a looping
// build-up with GSAP while it is on screen:
//   data-s="n"        step the element animates in on (steps play in ascending order)
//   data-fx="..."     pop | slide | fill | ring | count | type | draw | cursor | on
//   data-d="n"        parallax depth for the pointer-tilt effect
// Static fallback (no JS / reduced motion): the markup as written, with every `on` state applied.

import { esc } from './components.mjs';

/* ---------- Building blocks ---------- */
const attrs = ({ s, fx, path, to, from, dec, fmt } = {}) =>
  `${s != null ? ` data-s="${s}"` : ''}${fx ? ` data-fx="${fx}"` : ''}${path ? ` data-path="${path}"` : ''}` +
  `${to != null ? ` data-to="${to}"` : ''}${from != null ? ` data-from="${from}"` : ''}${dec ? ` data-dec="${dec}"` : ''}${fmt ? ` data-fmt="${fmt}"` : ''}`;

// Positioned layer on the stage (units: em)
const L = (x, y, w, inner, { h, d = 1, cls = '', ...a } = {}) =>
  `<div class="il-l ${cls}" style="left:${x}em;top:${y}em;width:${w}em;${h ? `height:${h}em;` : ''}--d:${d}"${attrs(a)}>${inner}</div>`;

const win = (url, body, cls = '') =>
  `<div class="il-win ${cls}"><div class="il-win__bar"><i></i><i></i><i></i><span>${url}</span></div><div class="il-win__body">${body}</div></div>`;
const card = (inner, cls = '', a = {}) => `<div class="il-card ${cls}"${attrs(a)}>${inner}</div>`;
const chip = (text, cls = '', a = {}) => `<span class="il-chip ${cls}"${attrs(a)}>${text}</span>`;
const av = (txt, bg) => `<span class="il-av" style="background:${bg}">${txt}</span>`;
const bar = (pct, a = { fx: 'fill' }, color = '') => `<span class="il-bar"><i style="width:${pct}%;${color ? `background:${color}` : ''}"${attrs(a)}></i></span>`;
const line = (w, cls = '') => `<span class="il-line ${cls}" style="width:${w}%"></span>`;
const count = (to, a = {}, text = to) => `<b${attrs({ fx: 'count', to, ...a })}>${text}</b>`;
// Swaps between two labels: `off` shows during the build-up, `on` once its step is reached.
const swap = (off, on, cls = '', a = {}) =>
  `<span class="il-swap is-on ${cls}"${attrs({ fx: 'on', ...a })}><span class="il-swap__off">${off}</span><span class="il-swap__on">${on}</span></span>`;
const ring = (pct, inner, a = {}) => `
  <span class="il-ring"><svg viewBox="0 0 36 36"><circle cx="18" cy="18" r="15.9155" class="il-ring__bg"/><circle cx="18" cy="18" r="15.9155" class="il-ring__fg" style="stroke-dasharray:${pct} 100"${attrs({ fx: 'ring', ...a })}/></svg><span>${inner}</span></span>`;
const cursor = (x, y, path, s) => L(x, y, 1.6, `<svg viewBox="0 0 24 24"><path d="M4 2l16 9.5-7 1.6L9.5 20z"/></svg>`, { cls: 'il-cursor', d: 2, s, fx: 'cursor', path });

const I = {
  check: '<svg viewBox="0 0 24 24" class="il-i"><path d="M5 12.5l4.2 4.2L19 7"/></svg>',
  pin: '<svg viewBox="0 0 24 24" class="il-i"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
  clock: '<svg viewBox="0 0 24 24" class="il-i"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  search: '<svg viewBox="0 0 24 24" class="il-i"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/></svg>',
  spark: '<svg viewBox="0 0 24 24" class="il-i"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/></svg>',
  play: '<svg viewBox="0 0 24 24" class="il-i il-i--fill"><path d="M8 5.5v13l10-6.5z"/></svg>',
  cart: '<svg viewBox="0 0 24 24" class="il-i"><path d="M3 4h2.5l2.2 11h10.6L20.5 7H7"/><circle cx="9.5" cy="19" r="1.4"/><circle cx="17" cy="19" r="1.4"/></svg>',
  cal: '<svg viewBox="0 0 24 24" class="il-i"><rect x="3.5" y="5" width="17" height="15.5" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/></svg>',
  doc: '<svg viewBox="0 0 24 24" class="il-i"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4M10 12h5M10 16h5"/></svg>',
  heart: '<svg viewBox="0 0 24 24" class="il-i"><path d="M12 20s-7.5-4.5-7.5-10A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 7.5 3c0 5.5-7.5 10-7.5 10z"/></svg>',
  globe: '<svg viewBox="0 0 24 24" class="il-i"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.8 3 2.8 15 0 18M12 3c-2.8 3-2.8 15 0 18"/></svg>',
  truck: '<svg viewBox="0 0 24 24" class="il-i"><path d="M2.5 6h11v10h-11zM13.5 9.5h4l3 3.5V16h-7"/><circle cx="7" cy="17.5" r="1.6"/><circle cx="17" cy="17.5" r="1.6"/></svg>',
  user: '<svg viewBox="0 0 24 24" class="il-i"><circle cx="12" cy="8.5" r="3.8"/><path d="M4.5 20c1.2-4 4.2-5.6 7.5-5.6s6.3 1.6 7.5 5.6"/></svg>',
  ticket: '<svg viewBox="0 0 24 24" class="il-i"><path d="M3 7h18v3a2 2 0 0 0 0 4v3H3v-3a2 2 0 0 0 0-4z"/><path d="M14 7v10" stroke-dasharray="2 2"/></svg>',
};

/* ---------- Product scenes ---------- */
function staffintra() {
  const people = [['AO', '#6e52d8', 'Ada Okafor', 'Front desk', '08:02'], ['JM', '#e0739b', 'James Mensah', 'Warehouse', '08:05'], ['LK', '#3aa4c9', 'Lina Kowalski', 'Field team', '08:11'], ['TB', '#e2a33b', 'Tunde Bello', 'Operations', '08:14']];
  const app = `
    <div class="si">
      <aside class="si__side">
        <span class="il-brand"><i style="background:var(--a)"></i>Staffintra</span>
        ${['People', 'Time', 'Approvals', 'Payroll', 'Performance'].map((n, i) => `<span class="si__nav${i === 1 ? ' is-active' : ''}">${n}</span>`).join('')}
      </aside>
      <div class="si__main">
        <div class="si__hello"><b>Good morning, Ada</b><small>Tuesday · Northstar HQ</small></div>
        <div class="il-kpis">
          <div><small>Attendance</small><span>${count('84.3', { s: 1, dec: 1 })}%</span></div>
          <div><small>Hours tracked</small><span>${count('1001', { s: 1 })}h</span></div>
          <div><small>Approvals</small><span>${count('14', { s: 1 })}</span></div>
        </div>
        <div class="si__list">
          <small class="il-label">Who's in today</small>
          ${people.map(([ini, c, n, r, t]) => `<div class="il-row">${av(ini, c)}<span><b>${n}</b><small>${r}</small></span>${swap('Not in yet', `${I.check}In · ${t}`, 'il-status', { s: 5 })}</div>`).join('')}
        </div>
        <div class="il-bars">${[62, 80, 74, 90, 86, 40, 28].map((h, i) => `<i style="height:${h}%"${attrs({ s: 1, fx: 'fill' })}></i>`).join('')}</div>
      </div>
    </div>`;
  return [
    L(3, 4.5, 39, win('app.staffintra.com', app), { h: 31, d: 0.4 }),
    L(44, 3, 17.5, card(`
      <div class="il-head"><b>Clock in</b><small>Northstar HQ · inside geofence</small></div>
      <div class="si__geo"><i></i><i></i><i></i><b></b></div>
      ${swap(`${I.clock}Clock in`, `${I.check}Clocked in · 08:02`, 'il-btn il-btn--block', { s: 4 })}`), { s: 2, fx: 'pop', d: 1.2 }),
    cursor(53, 14.6, '5,6', 3),
    L(43, 20, 19, card(`
      <div class="il-row il-row--flat">${av('TO', '#e2a33b')}<span><b>Tobi Olawale</b><small>Leave request · 2 days</small></span></div>
      <div class="si__dates">${I.cal}Thu 14 – Fri 15 Sep</div>
      ${swap('Awaiting your approval', `${I.check}Approved`, 'il-state', { s: 7 })}
      <div class="il-actions"><span class="il-btn">Approve</span><span class="il-btn il-btn--ghost">Decline</span></div>`), { s: 6, fx: 'pop', d: 1.4 }),
    L(5, 33.6, 21, chip(`${I.check}<b>Timesheets ready for payroll</b><small>export.csv</small>`, 'il-toast'), { s: 8, fx: 'pop', d: 1.6 }),
  ].join('');
}

function travelnursehouses() {
  const pins = [[110, 128, '$2,600'], [262, 100, ''], [120, 238, '$3,300'], [292, 212, '$2,900'], [50, 196, ''], [300, 292, '$2,800']];
  const map = `
    <svg class="tnh__map" viewBox="0 0 380 330" preserveAspectRatio="xMidYMid slice">
      <rect width="380" height="330" fill="#0d1f37"/>
      <path d="M0 250 C70 230 120 300 200 310 S330 290 380 300 V330 H0z" fill="#0b2c4c"/>
      <path d="M250 0 C260 40 300 70 380 60 V0z" fill="#0f3a33"/>
      <g fill="#132a48">${[[20, 20, 70, 40], [110, 20, 90, 50], [20, 80, 50, 60], [90, 100, 60, 40], [170, 90, 50, 30], [300, 90, 60, 50], [20, 170, 90, 50], [140, 190, 60, 40], [230, 150, 60, 40], [310, 160, 50, 40], [160, 250, 60, 30]].map(([x, y, w, h]) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="5"/>`).join('')}</g>
      <g stroke="#1f3d66" stroke-width="7" fill="none" stroke-linecap="round"><path d="M0 70 H380"/><path d="M0 150 C120 150 200 140 380 140"/><path d="M80 0 V330"/><path d="M220 0 C215 120 230 200 210 330"/><path d="M0 230 H260"/></g>
      <path d="M120 238 C150 220 160 190 200 160" class="tnh__route" pathLength="1" data-s="4" data-fx="draw"/>
      <g class="tnh__hosp"><circle cx="200" cy="160" r="26" class="tnh__pulse"/><circle cx="200" cy="160" r="14" fill="var(--a)"/><path d="M200 152v16M192 160h16" stroke="#091628" stroke-width="3.4" stroke-linecap="round"/></g>
      ${pins.map(([x, y, p]) => `<g class="tnh__pin" data-s="3" data-fx="pop"><path d="M${x} ${y}c-6-8-11-13-11-20a11 11 0 0 1 22 0c0 7-5 12-11 20z" fill="#fff"/><circle cx="${x}" cy="${y - 20}" r="4" fill="#091628"/>${p ? `<g><rect x="${x + 10}" y="${y - 34}" width="44" height="18" rx="9" fill="#fff"/><text x="${x + 32}" y="${y - 21.5}" text-anchor="middle">${p}</text></g>` : ''}</g>`).join('')}
    </svg>`;
  const room = `
    <svg viewBox="0 0 200 110" class="tnh__room" preserveAspectRatio="xMidYMid slice">
      <rect width="200" height="110" fill="#e9e4d8"/><rect y="78" width="200" height="32" fill="#c9b89a"/>
      <rect x="118" y="14" width="56" height="44" rx="3" fill="#bfe0ef"/><path d="M146 14v44M118 36h56" stroke="#fff" stroke-width="3"/>
      <rect x="20" y="58" width="92" height="28" rx="6" fill="#fff"/><rect x="20" y="46" width="22" height="18" rx="5" fill="#f3efe6"/><rect x="20" y="70" width="92" height="16" rx="4" fill="#0c6b55"/>
      <rect x="150" y="66" width="22" height="20" rx="3" fill="#8a6b48"/><path d="M161 66V44" stroke="#3b3b3b" stroke-width="2"/><path d="M152 44h18l-4-10h-10z" fill="#d4a017"/>
    </svg>`;
  return [
    L(3, 3.5, 38, `<div class="tnh__panel">${map}</div>`, { h: 33, d: 0.3 }),
    L(6, 5.5, 32, `<div class="tnh__search">${I.pin}<span><small>Where</small><b${attrs({ s: 2, fx: 'type' })}>St. Michael's Hospital, Toronto</b></span><span><small>When</small><b>Nov 3 – Feb 2</b></span><i>${I.search}</i></div>`, { s: 1, fx: 'pop', d: 0.8 }),
    L(5, 29.2, 22, card(`<div class="il-row il-row--flat"><span class="tnh__h">H</span><span><b>St. Michael's Hospital</b><small>${count('41', { s: 5 })} homes · 15 min avg commute</small></span></div>`, 'il-card--dark'), { s: 5, fx: 'slide', d: 0.9 }),
    L(43, 3.5, 18.5, card(`
      <div class="tnh__photo">${room}${chip('Furnished', 'tnh__tag')}<span class="tnh__fav">${I.heart}</span></div>
      <div class="tnh__body">
        <b>Apartment in Toronto</b>
        <small>1 bed · 1 bath · Move-in ready</small>
        <div class="tnh__price"><b>CA$3,300</b><small>/ month</small></div>
        ${chip(`${I.check}Verified Pro Host`, 'tnh__badge')}
        <span class="il-btn il-btn--block">Message host</span>
      </div>`, 'il-card--flush'), { s: 6, fx: 'pop', d: 1.3 }),
    L(43, 28, 18.5, `
      <div class="il-bubble il-bubble--out"${attrs({ s: 7, fx: 'pop' })}>Hi! Is it free for my 13-week contract?</div>
      <div class="il-bubble"${attrs({ s: 8, fx: 'pop' })}>Yes, it's move-in ready on Nov 3.</div>`, { d: 1.6 }),
  ].join('');
}

function myjobtests() {
  const opts = [['A', '15:45'], ['B', '16:15'], ['C', '16:45'], ['D', '15:15']];
  const test = `
    <div class="mjt">
      <div class="mjt__top">${chip('ExxonMobil · Aptitude pack', 'il-chip--soft')}<span class="mjt__timer">${I.clock}${count('1062', { s: 1, from: 1080, fmt: 'time' }, '17:42')}</span></div>
      <div class="mjt__prog"><small>Question 7 of 20</small>${bar(35, { s: 1, fx: 'fill' })}</div>
      <div class="mjt__q"><small class="il-label">Numerical reasoning</small><p>A shift starts at 07:45 and lasts 8.5 hours. What time does it end?</p></div>
      <div class="mjt__opts">${opts.map(([k, v]) => k === 'B'
        ? `<span class="mjt__opt mjt__opt--right is-on"${attrs({ s: 3, fx: 'on' })}><i>${k}</i>${v}<em>${I.check}</em></span>`
        : `<span class="mjt__opt"><i>${k}</i>${v}</span>`).join('')}</div>
      <div class="mjt__explain"${attrs({ s: 4, fx: 'pop' })}>${I.spark}07:45 + 8h 30m = 16:15</div>
      <div class="mjt__foot"><span class="il-btn il-btn--ghost">Skip</span><span class="il-btn">Next question →</span></div>
    </div>`;
  return [
    L(3, 3.5, 38, win('myjobtests.com/practice', test), { h: 33, d: 0.4 }),
    cursor(31.5, 18.8, '-3,11', 2),
    L(43, 3.5, 18.5, card(`
      <div class="il-head"><b>Your score</b>${chip('Pass', 'il-chip--ok')}</div>
      <div class="mjt__score">${ring(86, `${count('86', { s: 6 })}<small>%</small>`, { s: 6 })}</div>
      ${[['Numerical', 90], ['Verbal', 82], ['Logical', 85]].map(([k, v]) => `<div class="il-meter"><small>${k}</small>${bar(v, { s: 6, fx: 'fill' })}<b>${v}</b></div>`).join('')}`), { s: 5, fx: 'pop', d: 1.2 }),
    L(43, 22.5, 18.5, card(`
      <div class="il-head il-head--icon"><span class="mjt__ai">${I.spark}</span><b>AI tutor</b></div>
      <p class="il-p">You're strong on time maths. Next: 10 minutes of ratio questions.</p>
      ${chip(`${I.check}Study plan updated`, 'il-chip--ok')}`), { s: 7, fx: 'pop', d: 1.4 }),
    L(23, 33.4, 19, chip(`${I.doc}<b>Resume review</b><small>ATS check passed</small>`, 'il-toast'), { s: 8, fx: 'pop', d: 1.7 }),
  ].join('');
}

function teststreams() {
  const packs = [['DSS Past Questions &amp; Answers', '4.8 ★ · Updated 2026', '#4c570d'], ['Numerical Reasoning', 'Timed CBT · 15 questions', '#879628'], ['SSS1 Biology · First Term', 'Video · 9 lessons', '#1e7c3e']];
  const lib = `
    <div class="il-head"><b>My Library</b><small>3 packs · offline ready</small></div>
    ${packs.map(([t, m, c]) => `<div class="ts__pack"${attrs({ s: 1, fx: 'slide' })}><span class="ts__cover" style="--c:${c}"><i></i><i></i><i></i></span><span><b>${t}</b><small>${m}</small></span></div>`).join('')}
    <div class="ts__offline">Read offline ${swap('', '', 'il-toggle', { s: 2 })}</div>`;
  const cbt = `
    <div class="ts__cbt">
      <div class="ts__cbt-top"><span><small class="il-label">Free practice test</small><b>Numerical reasoning</b></span><span class="mjt__timer">${I.clock}${count('866', { s: 3, from: 1080, fmt: 'time' }, '14:26')}</span></div>
      <div class="ts__grid">${Array.from({ length: 15 }, (_, i) => `<span class="${i === 4 || i === 11 ? 'is-wrong ' : ''}is-on"${attrs({ s: 4, fx: 'on' })}>${i + 1}</span>`).join('')}</div>
      <div class="ts__q">${line(92)}${line(70)}${line(48)}</div>
      <div class="mjt__prog"><small>15 of 15 answered</small>${bar(100, { s: 4, fx: 'fill' })}</div>
      <div class="mjt__foot"><span class="il-btn il-btn--ghost">Review</span><span class="il-btn">Submit test</span></div>
    </div>`;
  return [
    L(3, 4, 25, card(lib, 'ts__lib'), { h: 24.5, d: 0.5 }),
    L(30, 3, 31, win('teststreams.com/practice', cbt), { h: 27.5, d: 1 }),
    L(4, 31.4, 22, card(`<div class="il-row il-row--flat"><span class="ts__play">${I.play}</span><span><b>Video lesson 4 of 9</b><small>SSS1 Biology · with Ms Tina</small></span></div>${bar(44, { s: 6, fx: 'fill' })}`), { s: 6, fx: 'pop', d: 1.3 }),
    L(33, 32, 24, chip(`<span class="ts__big">${count('13', { s: 5 })}/15</span><span><b>Completed in 14:26</b><small>Walk in ready</small></span>${I.check}`, 'il-toast ts__result'), { s: 5, fx: 'pop', d: 1.5 }),
  ].join('');
}

/* ---------- Client scenes (live sites only) ---------- */
const site = (brand, links, cta, hero, rest = '') => `
  <div class="cs">
    <div class="cs__nav"><b class="cs__logo">${brand}</b><span class="cs__links">${links.map((l) => `<i>${l}</i>`).join('')}</span>${cta ? (cta.startsWith('<') ? cta : `<span class="il-btn il-btn--sm">${cta}</span>`) : ''}</div>
    ${hero}${rest}<div class="cs__more">${'<span><i></i><b></b><b></b></span>'.repeat(3)}</div>
  </div>`;

function scrubharvard() {
  const colors = ['#161515', '#e46c2e', '#7a1f2b', '#e693b4'];
  const top = (c, a = {}) => `<svg viewBox="0 0 100 100" class="sh__top"${attrs(a)}><path d="M30 14l12-6c2 6 14 6 16 0l12 6 18 18-12 12-8-6v56H32V38l-8 6-12-12z" fill="${c}"/><path d="M42 8l8 14 8-14" fill="none" stroke="rgba(255,255,255,.35)" stroke-width="2"/></svg>`;
  const hero = `
    <div class="sh__hero">
      <div><small class="il-label">The standard for every shift</small><h4>Scrubs that<br>show up</h4><span class="il-btn">Shop best sellers</span></div>
      <div class="sh__stage">${top(colors[0])}${colors.slice(1).map((c, i) => top(c, { s: 2 + i, fx: 'pop' })).join('')}</div>
    </div>
    <div class="sh__tiles">${['Bypass Top', 'Murmur Top', 'Flutter Pants'].map((n, i) => `<span${attrs({ s: 1, fx: 'pop' })}>${top(colors[i + 1] || '#555').replace('sh__top', 'sh__mini')}<small>${n}</small></span>`).join('')}</div>`;
  return [
    L(3, 3.5, 40, win('scrubharvard.com', site('SCRUB HARVARD', ['Shop', 'Best Sellers', 'Teams'], `<span class="sh__cart">${I.cart}<b class="is-on"${attrs({ s: 5, fx: 'on' })}>1</b></span>`, hero)), { h: 33, d: 0.4 }),
    L(45, 6, 16.5, card(`<div class="il-head"><b>Shop core colors</b><small>Bypass Top</small></div><div class="sh__sw">${colors.map((c, i) => `<i style="background:${c}"${i === 3 ? ' class="is-sel"' : ''}></i>`).join('')}</div>`), { d: 1.2 }),
    L(45, 21, 16.5, chip(`${I.cart}<b>Added to cart</b><small>Bypass Top · Pink · M</small>`, 'il-toast'), { s: 5, fx: 'pop', d: 1.5 }),
  ].join('');
}

function gebbrapharma() {
  const hero = `
    <div class="cs__hero cs__hero--band"><small class="il-label">Pharmaceutical supply · Nigeria</small><h4>Pioneering solutions in pharmaceutical supply</h4><span class="il-btn">Book a consultation</span></div>
    <div class="il-kpis il-kpis--4">${[['32', '+', 'Partnerships'], ['1196', '', 'Products'], ['24', '+', 'States'], ['89', '%', 'Satisfaction']].map(([v, s, k]) => `<div><span>${count(v, { s: 1 })}${s}</span><small>${k}</small></div>`).join('')}</div>
    <div class="gp__cards">${[['Private healthcare', 'Last-mile distribution'], ['Public healthcare', 'Vaccination &amp; emergency programs']].map(([t, d]) => `<span${attrs({ s: 2, fx: 'pop' })}><b>${t}</b><small>${d}</small></span>`).join('')}</div>`;
  return [
    L(3, 3.5, 40, win('gebbrapharma.com', site('GEBBRA', ['About', 'Products', 'Diagnostics'], 'Contact', hero)), { h: 33, d: 0.4 }),
    L(45, 4, 17, card(`
      <div class="il-head"><b>Last-mile delivery</b><small>Warehouse → clinics</small></div>
      <svg viewBox="0 0 160 80" class="gp__route"><path d="M14 64 C50 64 46 20 82 22 S130 52 148 16" class="gp__path" pathLength="1"${attrs({ s: 3, fx: 'draw' })}/><circle cx="14" cy="64" r="6"/><circle cx="82" cy="22" r="5"/><circle cx="148" cy="16" r="5"/></svg>
      ${swap(`${I.truck}In transit`, `${I.check}Delivered to 3 clinics`, 'il-state', { s: 4 })}`), { d: 1.2 }),
    L(45, 22, 17, card(`
      <div class="il-head"><b>Diagnostic tests</b><small>Book an appointment</small></div>
      ${['Genetic testing', 'Hormone panel', 'Food sensitivity'].map((t, i) => `<div class="il-opt${i === 1 ? ' is-on' : ''}"${i === 1 ? attrs({ s: 5, fx: 'on' }) : ''}><i></i>${t}</div>`).join('')}`), { s: 5, fx: 'pop', d: 1.4 }),
  ].join('');
}

function bridgeandvalue() {
  const hero = `
    <div class="cs__hero"><small class="il-label">Africa ⇄ Europe business development</small><h4>Unlocking your door to opportunities</h4><span class="il-btn">Partner with us</span></div>
    <div class="bv__tracks">${['B2B', 'B2G', 'G2G'].map((t) => chip(t, 'il-chip--soft', { s: 1, fx: 'pop' })).join('')}</div>
    <div class="cs__rows">${['International business development', 'Investment linkages &amp; fundraising', 'Trade missions &amp; market research'].map((t) => `<span${attrs({ s: 1, fx: 'slide' })}>${t}<i>→</i></span>`).join('')}</div>`;
  return [
    L(3, 3.5, 40, win('bridgeandvalue.com', site('Bridge <em>&amp;</em> Value', ['About', 'Services', 'Missions'], 'Contact', hero)), { h: 33, d: 0.4 }),
    L(44, 4, 18, card(`
      <div class="il-head"><b>Connecting markets</b><small>Abuja ⇄ Paris</small></div>
      <svg viewBox="0 0 170 80" class="bv__arc"><path d="M18 64 C50 4 120 4 152 64" class="bv__path" pathLength="1"${attrs({ s: 2, fx: 'draw' })}/><circle cx="18" cy="64" r="7" fill="var(--a)"/><circle cx="152" cy="64" r="7" fill="var(--a2)"/><text x="18" y="79" text-anchor="middle">Abuja</text><text x="152" y="79" text-anchor="middle">Paris</text></svg>
      <div class="bv__tags">${chip('Investment', '', { s: 3, fx: 'pop' })}${chip('Trade', '', { s: 3, fx: 'pop' })}${chip('Training', '', { s: 3, fx: 'pop' })}</div>`), { d: 1.2 }),
    L(44, 22, 18, card(`
      <div class="il-head"><b>Paris business mission 2026</b><small>5 days · B2B meetings</small></div>
      ${swap('Register', `${I.check}Registered`, 'il-btn il-btn--block', { s: 5 })}`), { s: 4, fx: 'pop', d: 1.4 }),
  ].join('');
}

function goodwillstaffing() {
  const jobs = [['ER Registered Nurse', 'Saskatchewan · Contract'], ['Personal Support Worker', 'Long-term care · Per diem'], ['Licensed Practical Nurse', 'Rural clinic · Temp-to-perm']];
  const hero = `
    <div class="cs__hero"><small class="il-label">Healthcare staffing · Canada</small><h4>Powering better healthcare staffing</h4></div>
    <div class="gw__search">${I.search}<span>Registered Nurse</span><i></i>${I.pin}<span>Saskatchewan</span><b class="il-btn il-btn--sm">Find shifts</b></div>
    <div class="cs__rows cs__rows--jobs">${jobs.map(([t, m]) => `<span${attrs({ s: 1, fx: 'slide' })}><span><b>${t}</b><small>${m}</small></span><i class="il-btn il-btn--sm il-btn--ghost">Apply</i></span>`).join('')}</div>`;
  return [
    L(3, 3.5, 40, win('goodwillstaffing.ca', site('Goodwill Staffing', ['Find work', 'Hire staff', 'About'], 'Get started', hero)), { h: 33, d: 0.4 }),
    L(44, 4, 18, card(`
      <div class="il-row il-row--flat">${av('AK', '#02646f')}<span><b>Amara K., RN</b><small>6 years ER experience</small></span></div>
      <div class="gw__match">${ring(94, `${count('94', { s: 3 })}<small>%</small>`, { s: 3 })}<span><small>Match for</small><b>ER Registered Nurse</b></span></div>
      ${swap('Reviewing', `${I.check}Placed`, 'il-state', { s: 4 })}`), { s: 2, fx: 'pop', d: 1.2 }),
    L(44, 23, 18, card(`
      <div class="il-head"><b>Shifts this week</b><small>Per diem</small></div>
      <div class="gw__week">${['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => `<span><small>${d}</small><i class="${[0, 1, 3, 4].includes(i) ? 'is-on' : ''}"${[0, 1, 3, 4].includes(i) ? attrs({ s: 5, fx: 'on' }) : ''}></i></span>`).join('')}</div>`), { s: 5, fx: 'pop', d: 1.4 }),
  ].join('');
}

function lexpraxisng() {
  const hero = `
    <div class="cs__hero cs__hero--band"><small class="il-label">Welcome to Lex-Praxis Solicitors</small><h4>Your trusted legal partner</h4><span class="il-btn">Speak to us now</span></div>
    <div class="lp__steps">${['Free discovery call', 'Recommendations', 'Results'].map((t, i) => `<span class="is-on"${attrs({ s: 2 + i, fx: 'on' })}><i>${i + 1}</i>${t}</span>`).join('')}</div>`;
  return [
    L(3, 3.5, 40, win('lexpraxisng.com', site('LEX-PRAXIS', ['Services', 'About', 'Insights'], 'Contact', hero)), { h: 33, d: 0.4 }),
    L(44, 4, 18, card(`
      <div class="il-head"><b>Practice areas</b><small>Business &amp; corporate law</small></div>
      <div class="lp__tiles">${['Company formation', 'Tax compliance', 'IP registration', 'Contracts', 'Due diligence', 'Data protection'].map((t) => `<span${attrs({ s: 1, fx: 'pop' })}>${t}</span>`).join('')}</div>`), { d: 1.2 }),
    L(44, 22.5, 18, card(`
      <div class="il-head"><b>Book a discovery call</b><small>Free · 30 minutes</small></div>
      <div class="lp__slots">${['Mon 9:00', 'Tue 10:00', 'Wed 14:00'].map((t, i) => `<span class="${i === 1 ? 'is-on' : ''}"${i === 1 ? attrs({ s: 6, fx: 'on' }) : ''}>${t}</span>`).join('')}</div>
      ${swap('Confirm booking', `${I.check}Booked`, 'il-btn il-btn--block', { s: 7 })}`), { s: 5, fx: 'pop', d: 1.4 }),
  ].join('');
}

function abiodunodunuga() {
  const hero = `
    <div class="ao__hero">
      <div><small class="il-label">International development &amp; business consultant</small><h4>Abiodun Odunuga</h4><span class="il-btn">Work with me</span></div>
      <svg viewBox="0 0 120 120" class="ao__portrait"><circle cx="60" cy="60" r="56" fill="#eeecea"/><path d="M60 8a52 52 0 0 1 52 52" stroke="var(--a2)" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="60" cy="50" r="18" fill="#1f2937"/><path d="M26 104c6-22 20-30 34-30s28 8 34 30" fill="#1f2937"/></svg>
    </div>
    <small class="il-label">What I do</small>
    <div class="ao__do">${['Business consulting', 'Brand communications', 'Fund raising', 'Program development'].map((t) => `<span${attrs({ s: 1, fx: 'pop' })}>${I.spark}${t}</span>`).join('')}</div>`;
  return [
    L(3, 3.5, 40, win('abiodunodunuga.com', site('Abiodun Odunuga', ['About', 'Creed', 'Portfolio'], '', hero)), { h: 33, d: 0.4 }),
    L(44, 4, 18, card(`
      <div class="il-head"><b>My creed</b><small>The DEED framework</small></div>
      <div class="ao__deed">${[['D', 'Development'], ['E', 'Entrepreneurship'], ['E', 'Education'], ['D', 'Diaspora']].map(([l, w], i) => `<span class="is-on"${attrs({ s: 2 + i, fx: 'on' })}><b>${l}</b><small>${w}</small></span>`).join('')}</div>`), { d: 1.2 }),
    L(44, 24, 18, card(`
      <div class="il-head"><b>Brands in my portfolio</b></div>
      <div class="ao__stats"><span>${count('25', { s: 6 })}+<small>Brands</small></span><span>${count('20', { s: 6 })}+<small>Countries</small></span></div>`), { s: 6, fx: 'pop', d: 1.4 }),
  ].join('');
}

function spotlight() {
  const hero = `
    <div class="cs__hero cs__hero--dark"><small class="il-label">9th edition · Paris · 6 October 2026</small><h4>Translating opportunities to business deals</h4><span class="il-btn">Get tickets</span></div>
    <small class="il-label">Programme</small>
    <div class="cs__rows">${['Digital finance', 'Agriculture &amp; agribusiness', 'France–Nigeria outlook', 'B2B networking'].map((t) => `<span${attrs({ s: 1, fx: 'slide' })}>${t}<i>→</i></span>`).join('')}</div>`;
  return [
    L(3, 3.5, 40, win('spotlightnigeria-france.com', site('SPOTLIGHT NIGERIA', ['Event', 'Programme', 'Sponsors'], 'Tickets', hero)), { h: 33, d: 0.4 }),
    L(44, 4, 18, `<div class="sp__ticket">${I.ticket}<small>Spotlight Nigeria 2026</small><b>Paris · 6 Oct</b><div class="sp__tiers">${['Beginner', 'Advanced', 'Premium'].map((t, i) => `<span class="${i === 2 ? 'is-on' : ''}"${i === 2 ? attrs({ s: 3, fx: 'on' }) : ''}>${t}</span>`).join('')}</div><em>Admit one</em></div>`, { s: 2, fx: 'pop', d: 1.2 }),
    L(44, 24, 18, card(`
      <div class="il-head"><b>Since 2014</b><small>Nigeria ⇄ Europe forum</small></div>
      <div class="ao__stats"><span>${count('9', { s: 5 })}<small>Editions</small></span><span class="sp__logos">${'<i></i>'.repeat(6)}</span></div>`), { s: 4, fx: 'pop', d: 1.4 }),
  ].join('');
}

/* ---------- Phone versions ---------- */
const phone = (app, title, items, cta) => `
  <div class="ph">
    <div class="ph__status"><b>9:41</b><span><i></i><i></i><i></i></span></div>
    <div class="ph__head"><span class="il-brand"><i style="background:var(--a)"></i>${app}</span>${I.user}</div>
    <div class="ph__title">${title}</div>
    <div class="ph__list">${items.map(([t, m, c], i) => `<div class="ph__item"${attrs({ s: i + 1, fx: 'pop' })}><span class="ph__dot" style="background:${c || 'var(--a)'}"></span><span><b>${t}</b><small>${m}</small></span></div>`).join('')}</div>
    ${cta ? `<span class="il-btn il-btn--block"${attrs({ s: items.length + 1, fx: 'pop' })}>${cta}</span>` : ''}
    <div class="ph__tabs"><i class="is-active"></i><i></i><i></i><i></i></div>
  </div>`;

/* ---------- Registry ---------- */
// bg: stage backdrop; vars: colours used by the scene's CSS.
export const SCENES = {
  staffintra: {
    name: 'Staffintra', label: 'Staffintra: clocking in, approving leave and preparing payroll-ready timesheets',
    vars: '--a:#6e52d8;--a2:#a796f0;--ok:#2fbf7f;--bg:radial-gradient(60% 80% at 85% 10%,#3b2a9c 0%,transparent 60%),radial-gradient(50% 70% at 0% 100%,#2a1d7a 0%,transparent 60%),#17133c',
    scene: staffintra,
    phone: () => phone('Staffintra', '<b>Good morning, Ada</b><small>Clocked in · 08:02</small>', [['Leave approved', 'Tobi · Thu 14 – Fri 15', '#2fbf7f'], ['Timesheet ready', 'Week of 14 Sep · 38.5h'], ['New announcement', 'Team lunch on Friday', '#e0739b']], 'Clock out'),
  },
  travelnursehouses: {
    name: 'Travel Nurse Houses', label: 'Travel Nurse Houses: finding furnished homes near a Toronto hospital and messaging a host',
    vars: '--a:#ced02d;--on:#091628;--a2:#d4a017;--ok:#0c6b55;--bg:radial-gradient(60% 80% at 100% 0%,#13325a 0%,transparent 60%),#091628',
    scene: travelnursehouses,
    phone: () => phone('Travel Nurse Houses', '<b>Homes near St. Michael\'s</b><small>Toronto · 41 homes</small>', [['Apartment in Toronto', 'CA$3,300 / month · 1 bed', '#ced02d'], ['Entire home', 'Pet friendly · 15 min', '#d4a017'], ['Private room', 'Verified Pro Host', '#0c6b55']], 'Message host'),
  },
  myjobtests: {
    name: 'MyJobTests', label: 'MyJobTests: answering a timed aptitude question, then getting a score and AI feedback',
    vars: '--a:#098647;--a2:#e7a400;--ok:#00a265;--bg:radial-gradient(55% 70% at 90% 0%,#c9f0dc 0%,transparent 60%),radial-gradient(50% 60% at 0% 100%,#fff1c9 0%,transparent 60%),#f3faf6',
    scene: myjobtests,
    phone: () => phone('MyJobTests', '<b>Prepare smarter.</b><small>Get hired faster.</small>', [['Numerical reasoning', 'Score 86% · Pass', '#00a265'], ['ExxonMobil pack', '18 practice tests', '#e7a400'], ['Resume review', 'ATS check passed', '#098647']], 'Start a test'),
  },
  teststreams: {
    name: 'Teststreams', label: 'Teststreams: a library of study packs and a timed practice test completed',
    vars: '--a:#4c570d;--a2:#879628;--ok:#1e7c3e;--bg:radial-gradient(55% 70% at 100% 0%,#e3e8b5 0%,transparent 60%),#fbfcf1',
    scene: teststreams,
    phone: () => phone('Teststreams', '<b>Learn it, practise it</b><small>and walk in ready</small>', [['DSS Past Questions', 'Updated 2026 · 4.8 ★'], ['Numerical reasoning', '15 questions · 18 minutes', '#879628'], ['SSS1 Biology', 'Video · 9 lessons', '#1e7c3e']], 'Open library'),
  },
  scrubharvard: {
    name: 'Scrub Harvard', label: 'Scrub Harvard online store: choosing a scrub colour and adding it to the cart',
    vars: '--a:#161515;--a2:#e46c2e;--ok:#161515;--bg:radial-gradient(60% 80% at 100% 0%,#f6d9c8 0%,transparent 60%),#efefef',
    scene: scrubharvard,
    phone: () => phone('Scrub Harvard', '<b>Scrubs that show up</b><small>Best sellers</small>', [['Bypass Top', 'Core colors · XS–3XL', '#7a1f2b'], ['Murmur Top', 'Four-way stretch', '#e46c2e'], ['Flutter Pants', 'Team ordering', '#e693b4']], 'Add to cart'),
  },
  gebbrapharma: {
    name: 'Gebbra Pharmaceuticals', label: 'Gebbra Pharmaceuticals website: supply statistics, last-mile delivery and diagnostic test booking',
    vars: '--a:#2e3192;--a2:#f0174e;--ok:#2e3192;--bg:radial-gradient(60% 80% at 100% 0%,#c0c3ec 0%,transparent 60%),#eaeaf4',
    scene: gebbrapharma,
    phone: () => phone('Gebbra', '<b>Pharmaceutical supply</b><small>24+ states served</small>', [['Private healthcare', 'Last-mile distribution', '#2e3192'], ['Public healthcare', 'Vaccination programs', '#f0174e'], ['Diagnostics', 'Book a test', '#6d6fb3']], 'Book a consultation'),
  },
  bridgeandvalue: {
    name: 'Bridge and Value', label: 'Bridge and Value website: connecting African and European markets through business missions',
    vars: '--a:#33b44b;--a2:#3c8bca;--ok:#33b44b;--bg:radial-gradient(60% 80% at 100% 0%,#cdeccf 0%,transparent 60%),#eef3f0',
    scene: bridgeandvalue,
    phone: () => phone('Bridge & Value', '<b>Unlocking your door</b><small>to opportunities</small>', [['B2B partnerships', 'Africa ⇄ Europe', '#33b44b'], ['Investment linkages', 'Fundraising support', '#3c8bca'], ['Paris mission 2026', '5 days · Register', '#1e1e1e']], 'Partner with us'),
  },
  goodwillstaffing: {
    name: 'Goodwill Staffing', label: 'Goodwill Staffing website: matching nurses to healthcare shifts across Canada',
    vars: '--a:#02646f;--a2:#e5482e;--ok:#02646f;--bg:radial-gradient(60% 80% at 100% 0%,#cfe6e8 0%,transparent 60%),#f4f7f8',
    scene: goodwillstaffing,
    phone: () => phone('Goodwill Staffing', '<b>Find your next shift</b><small>Saskatchewan</small>', [['ER Registered Nurse', 'Contract', '#02646f'], ['Personal Support Worker', 'Per diem', '#e5482e'], ['Licensed Practical Nurse', 'Temp-to-perm', '#4a9aa3']], 'Apply now'),
  },
  lexpraxisng: {
    name: 'Lex-Praxis Solicitors', label: 'Lex-Praxis Solicitors website: practice areas and booking a free discovery call',
    vars: '--a:#20336d;--a2:#ca9c4c;--ok:#20336d;--bg:radial-gradient(60% 80% at 100% 0%,#efe2c8 0%,transparent 60%),#eef0f5',
    scene: lexpraxisng,
    phone: () => phone('Lex-Praxis', '<b>Your trusted</b><small>legal partner</small>', [['Company formation', 'Local &amp; foreign founders', '#20336d'], ['Tax compliance', 'Filing &amp; advisory', '#ca9c4c'], ['IP registration', 'Trademarks', '#54595f']], 'Book a call'),
  },
  abiodunodunuga: {
    name: 'Abiodun Odunuga', label: 'Abiodun Odunuga personal website: consulting services and the DEED framework',
    vars: '--a:#1f2937;--a2:#d4a843;--ok:#8a6d1b;--bg:radial-gradient(60% 80% at 100% 0%,#f1e3bf 0%,transparent 60%),#faf9f7',
    scene: abiodunodunuga,
    phone: () => phone('Abiodun Odunuga', '<b>Business consultant</b><small>25+ brands · 20+ countries</small>', [['Business consulting', 'Strategy &amp; growth', '#1f2937'], ['Fund raising', 'Investor readiness', '#d4a843'], ['Program development', 'DEED framework', '#8a6d1b']], 'Work with me'),
  },
  spotlight: {
    name: 'Spotlight Nigeria', label: 'Spotlight Nigeria-France website: the Paris business forum programme and tickets',
    vars: '--a:#21b354;--a2:#8bea66;--ok:#21b354;--bg:radial-gradient(60% 80% at 100% 0%,#cff5d6 0%,transparent 60%),#eef4ef',
    scene: spotlight,
    phone: () => phone('Spotlight Nigeria', '<b>Paris · 6 Oct 2026</b><small>9th edition</small>', [['Digital finance', 'Plenary session', '#21b354'], ['Agriculture', 'Plenary session', '#8bea66'], ['B2B networking', 'Meet investors', '#424242']], 'Get tickets'),
  },
};

// Domain → scene key
export const SCENE_FOR = {
  'staffintra.com': 'staffintra', 'travelnursehouses.ca': 'travelnursehouses', 'myjobtests.com': 'myjobtests', 'teststreams.com': 'teststreams',
  'scrubharvard.com': 'scrubharvard', 'gebbrapharma.com': 'gebbrapharma', 'bridgeandvalue.com': 'bridgeandvalue', 'goodwillstaffing.ca': 'goodwillstaffing',
  'lexpraxisng.com': 'lexpraxisng', 'abiodunodunuga.com': 'abiodunodunuga', 'spotlightnigeria-france.com': 'spotlight',
};

/**
 * Render a scene. `phone: true` renders the portrait phone version.
 * `responsive: true` renders both, and CSS shows the phone version (in a phone frame) whenever the
 * frame is portrait-shaped, e.g. full-width cards on phones, where the wide scene would be too small.
 * `label: false` hides it from assistive tech (when the surrounding element already names it).
 */
export function illo(key, { phone: asPhone = false, responsive = false, cls = '', label = true } = {}) {
  const sc = SCENES[key];
  if (!sc) return '';
  const a11y = label ? `role="img" aria-label="${esc(sc.label)}"` : 'aria-hidden="true"';
  const stage = asPhone ? sc.phone() : sc.scene();
  const mobile = responsive && !asPhone ? `<div class="il__stage il__stage--m" aria-hidden="true">${sc.phone()}</div>` : '';
  return `<div class="il${asPhone ? ' il--phone' : ''}${mobile ? ' il--resp' : ''} ${cls}" style="${sc.vars}" data-illo ${a11y}><div class="il__stage" aria-hidden="true">${stage}</div>${mobile}</div>`;
}
