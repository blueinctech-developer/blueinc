import {
  site, home, about, audit, values, servicesPage, services, industries, portfolio,
  testimonials, reviewsPage, pricing, contactPage,
} from '../data/site.mjs';
import { esc, pad, icon, btn, quoteBtn, roll, eyebrow, crumbs, shot, projectForm, devices } from './components.mjs';
import { servicesPanel, quotesGrid, counters, aboutSplit } from './home.mjs';
import { hasShot, isLive, hasLong, longName } from './util.mjs';
import { products } from '../data/site.mjs';

/* ---------- Shared page hero ---------- */
function pageHero({ trail, eyebrowText, title, lead, actions = '', wide = false, aside = '' }) {
  return `
<section class="page-hero container">
  ${crumbs(trail)}
  <div class="page-hero__grid">
    <div>
      <h1 class="h1${wide ? ' wide' : ''}" data-intro-lines>${esc(title)}</h1>
      ${lead ? `<p class="lead" data-intro>${esc(lead)}</p>` : ''}
      ${actions ? `<div class="btn-row" data-intro>${actions}</div>` : ''}
    </div>
    ${aside}
  </div>
</section>`;
}

const mediaCard = (src, alt, extra = '', w = 1868, h = 1232) => `
<div class="media-card media-card--wide ${extra}" data-reveal-media>
  <img src="${src}" alt="${esc(alt)}" width="${w}" height="${h}" data-media-img>
</div>`;

function siteCard(domain, { badge = '' } = {}) {
  const img = hasShot(domain);
  const live = isLive(domain);
  const inner = `
    <div class="site-card__img${hasLong(domain) ? ' site-card__img--scroll' : ''}">${img ? `<img src="${hasLong(domain) ? `/assets/media/sites/${longName(domain)}-d.jpg` : shot(domain)}" alt="${esc(domain)} website by Blueinc Technologies" loading="lazy" width="1440" height="900">` : `<span>${esc(domain)}</span>`}${badge ? `<span class="badge">${esc(badge)}</span>` : ''}</div>
    <div class="site-card__meta"><span>www.${esc(domain)}</span>${live ? icon.arrowUpRight : ''}</div>`;
  return live
    ? `<a class="site-card${img ? '' : ' site-card--text'}" href="https://${domain}/" target="_blank" rel="noopener">${inner}</a>`
    : `<div class="site-card${img ? '' : ' site-card--text'}">${inner}</div>`;
}

/* ---------- About ---------- */
export function aboutPage() {
  return `
${pageHero({ trail: [{ label: 'Home', href: '/' }, { label: 'About Us' }], title: about.h1, lead: about.lead, wide: true,
  actions: `${btn({ label: 'Explore Our Solutions', href: '/our-services/' })}${quoteBtn('Get a Free Consultation', 'light')}` })}
<div class="media-card media-card--wide media-card--stage" data-reveal-media>${devices({ laptop: 'staffintra.com', phone: 'staffintra.com', label: 'Staffintra, a Blueinc Technologies product, on laptop and phone' })}</div>

<section class="section container" aria-label="What we do">
  ${eyebrow('What we do')}
  <p class="statement" style="margin-top:1.5rem" data-reveal="words">${esc(about.body)}</p>
</section>

<section class="section container" aria-labelledby="values-title" style="padding-top:0">
  <div class="section-head section-head--left">
    ${eyebrow('Our Values')}
    <h2 class="h2" id="values-title" data-reveal="lines">The principles behind everything we build</h2>
  </div>
  <div class="cards-4" data-stagger>${values.map((v, i) => `
    <article class="card"><h3 class="h5">${esc(v.title)}</h3><p>${esc(v.body)}</p></article>`).join('')}</div>
</section>

${aboutSplit()}

<section class="section container" aria-labelledby="serve-title">
  <div class="split">
    <div class="split__sticky">
      ${eyebrow('Digital solutions provider')}
      <h2 class="h2" id="serve-title" style="margin-top:1.25rem" data-reveal="lines">${esc(about.serve.title)}</h2>
    </div>
    <div>
      <p class="body-l" data-reveal="fade">${esc(about.serve.body)}</p>
      <div style="margin-top:2rem" data-reveal="fade">${quoteBtn('Get a Free Consultation')}</div>
      <ul class="check-list" style="margin-top:3.5rem" data-stagger>${home.history.points.map((p) => `<li>${icon.check}<span>${esc(p)}</span></li>`).join('')}</ul>
    </div>
  </div>
</section>

<section class="panel panel--dark on-dark section--lg" aria-labelledby="believe-title">
  <div class="container center">
    ${eyebrow(about.believe.eyebrow)}
    <h2 class="h2" id="believe-title" style="margin:1.25rem auto 0;max-width:18ch" data-reveal="lines">${esc(about.believe.title)}</h2>
    <p class="lead" style="margin:2rem auto 0;max-width:40rem" data-reveal="fade">${esc(about.believe.body)}</p>
    <div class="principles" data-stagger>${about.believe.principles.map((p) => `<span>${esc(p)}</span>`).join('')}</div>
  </div>
</section>

<section class="section container" aria-labelledby="team-title">
  <div class="split split--even" style="align-items:center">
    <div>
      ${eyebrow('Team')}
      <h2 class="h2" id="team-title" style="margin-top:1.25rem" data-reveal="lines">${esc(about.team.title)}</h2>
      <p class="body-l" style="margin-top:1.5rem" data-reveal="fade">${esc(about.team.body)}</p>
      <div class="btn-row" style="margin-top:2rem" data-reveal="fade">${btn({ label: 'Work With Us', href: '/contact/' })}</div>
    </div>
    <div class="media-card media-card--stage media-card--stage-fit" style="margin:0;aspect-ratio:4/3" data-reveal-media>${devices({ laptop: 'teststreams.com', phone: 'myjobtests.com', label: 'Teststreams and MyJobTests, Blueinc Technologies products, on laptop and phone' })}</div>
  </div>
</section>
`;
}

/* ---------- Free audit ---------- */
export function auditPage() {
  return `
${pageHero({ trail: [{ label: 'Home', href: '/' }, { label: 'Free Audit' }], title: audit.title, lead: audit.lead })}
<section class="contact-grid" aria-label="Free audit request">
  <div class="contact-info">
    <div><h3>What you’ll get</h3>
      <ul class="check-list" data-stagger>${audit.points.map((p) => `<li>${icon.check}<span style="font-size:1.0625rem;letter-spacing:0">${esc(p)}</span></li>`).join('')}</ul>
    </div>
    <div><h3>Talk to a Digital Partner</h3><ul>${site.phones.map((p) => `<li><a href="${p.href}">${p.display}</a></li>`).join('')}<li><a href="mailto:${site.email}">${site.email}</a></li></ul></div>
  </div>
  <div class="form-card">
    <h2 class="h4" style="margin-bottom:2rem">Request your free consultation</h2>
    ${projectForm({ id: 'audit', submit: 'Book My Consultation' })}
  </div>
</section>
<div class="section--sm"></div>`;
}

/* ---------- Services index ---------- */
export function servicesIndexPage() {
  return `
${pageHero({ trail: [{ label: 'Home', href: '/' }, { label: 'Our Services' }], title: servicesPage.h1, lead: servicesPage.lead, wide: true,
  actions: `${btn({ label: 'Start a Project', href: '/pricing-plans/' })}${quoteBtn('Get a Free Quote', 'light')}` })}
<div class="media-card media-card--wide media-card--stage" data-reveal-media>${devices({ laptop: 'myjobtests.com', phone: 'travelnursehouses.ca', label: 'MyJobTests and Travel Nurse Houses, Blueinc Technologies products, on laptop and phone' })}</div>
<section class="section container" aria-labelledby="belief-title">
  <div class="split">
    <div>${eyebrow('Our Solutions')}</div>
    <div>
      <h2 class="h3" id="belief-title" data-reveal="lines">${esc(servicesPage.beliefTitle)}</h2>
      <p class="body-l" style="margin-top:1.75rem" data-reveal="fade">${esc(servicesPage.beliefBody)}</p>
    </div>
  </div>
</section>
<div class="section--sm" style="padding-top:0">
  <div class="container"><h2 class="h2" style="margin-bottom:3rem" data-reveal="lines">${esc(servicesPage.listTitle)}</h2></div>
  ${servicesPanel({ id: 'svcpage' })}
</div>
<section class="section container" aria-label="Our approach">
  <p class="statement" data-reveal="words">${esc(servicesPage.closing)}</p>
</section>
<section class="section container" aria-labelledby="svc-reviews" style="padding-top:0">
  <div class="section-head section-head--left"><h2 class="h3" id="svc-reviews" data-reveal="lines">What People Say About Us</h2></div>
  ${quotesGrid(testimonials.slice(6, 9))}
</section>`;
}

/* ---------- Service detail ---------- */
export function serviceDetailPage(s) {
  const others = services.filter((o) => o.slug !== s.slug);
  const heroImg = s.image.startsWith('clients/') && hasShot(s.image.slice(8, -4)) ? `/assets/img/${s.image}` : null;
  return `
${pageHero({ trail: [{ label: 'Home', href: '/' }, { label: 'Our Services', href: '/our-services/' }, { label: s.short || s.name }], title: s.h1, lead: s.lead, wide: true,
  actions: `${quoteBtn('Start a Project', '', '', '')}${btn({ label: 'View pricing', href: '/pricing-plans/', variant: 'light' })}` })}
${s.mockup ? `<div class="media-card media-card--wide media-card--stage" data-reveal-media>${devices({ ...s.mockup, label: `${s.name} work by Blueinc Technologies shown on laptop and phone` })}</div>`
    : heroImg ? mediaCard(heroImg, `${s.name} project by Blueinc Technologies`, '', 1440, 900)
    : mediaCard('/assets/img/clients/staffintra.com.jpg', 'Staffintra, a Blueinc Technologies product', '', 1440, 900)}

<section class="section container" aria-labelledby="intro-title">
  <div class="split">
    <div>${eyebrow(s.name)}</div>
    <div>
      <h2 class="h3" id="intro-title" data-reveal="lines">${esc(s.introTitle)}</h2>
      <p class="body-l" style="margin-top:1.75rem" data-reveal="fade">${esc(s.introBody)}</p>
      <ul class="tags" style="margin-top:2rem" data-stagger>${s.tags.map((t) => `<li class="tag">${esc(t)}</li>`).join('')}</ul>
    </div>
  </div>
</section>

${s.showcase ? `
<section class="section--sm container" aria-label="Recent websites">
  <div class="sites" data-stagger>${s.showcase.map((d) => siteCard(d)).join('')}</div>
</section>` : ''}

<section class="section container" aria-labelledby="process-title">
  <div class="split">
    <div class="split__sticky">
      ${eyebrow('Process')}
      <h2 class="h2" id="process-title" style="margin-top:1.25rem" data-reveal="lines">${esc(s.processTitle)}</h2>
      <div style="margin-top:2.5rem" data-reveal="fade">${quoteBtn('Get a Free Quote')}</div>
    </div>
    <ol class="steps" data-steps>${s.steps.map(([t, d], i) => `
      <li class="step"><div><h3 class="h5">${esc(t)}</h3><p>${esc(d)}</p></div></li>`).join('')}
    </ol>
  </div>
</section>

${s.quote ? `
<section class="panel panel--dark on-dark section--lg" aria-label="Client testimonial">
  <figure class="bigquote container">
    <span style="display:inline-block;width:2.5rem;color:var(--pink);margin-bottom:2rem" data-reveal="fade">${icon.quote}</span>
    <blockquote data-reveal="words">${esc(s.quote.text)}</blockquote>
    <figcaption data-reveal="fade"><b>${esc(s.quote.name)}</b><span>${esc(s.quote.org)}</span></figcaption>
  </figure>
</section>` : ''}

<section class="section container" aria-label="Experience">
  <p class="statement" data-reveal="words">${esc(s.closing)}</p>
</section>

<section class="section--sm container" aria-labelledby="more-title" style="padding-top:0">
  <div class="section-head section-head--left"><h2 class="h4" id="more-title">More services</h2></div>
  <div class="rows">${others.map((o, i) => `
    <a class="row-link" href="/our-services/${o.slug}/"><span class="h3">${esc(o.name)}</span>${icon.arrow}</a>`).join('')}
  </div>
</section>`;
}

/* ---------- Portfolio ---------- */
// Projects are shown as stacked, pinned cards (the same component as the home "products & selected
// work" section), modelled on cosmos.studio/projects: a "Name | See work" pill on each card and
// small labels at the left and right edges.
function projectStack(items) {
  return `<div class="works__list">${items.map((it, i) => {
    const img = it.site && hasShot(it.site) ? shot(it.site) : null;
    const href = it.href || (it.site && isLive(it.site) ? `https://${it.site}/` : null);
    const tag = href ? 'a' : 'div';
    const attrs = href ? ` href="${href}" target="_blank" rel="noopener" aria-label="${esc(it.name)}: visit site"` : '';
    return `
    <div class="work" style="z-index:${i + 1}" data-work>
      <div class="work__side"><small>${esc(it.leftLabel)}</small><span>${esc(it.name)}</span></div>
      <${tag} class="work__card${img ? '' : ' work__card--text'}"${attrs}>
        ${img ? `<img src="${img}" alt="${esc(it.name)} by Blueinc Technologies" loading="lazy" width="1440" height="900">` : `<span class="work__title" aria-hidden="true">${esc(it.name)}</span>`}
        <span class="work__shade"></span>
        <span class="work__pill">${img ? `<img src="${img}" alt="" width="36" height="36">` : ''}<b class="work__pill-name">${esc(it.name)}</b>${href ? '<i></i><em>Visit site</em>' : ''}</span>
      </${tag}>
      <div class="work__side work__side--r"><small>${esc(it.rightLabel)}</small><span>${esc(it.kind)}</span></div>
    </div>`;
  }).join('')}</div>`;
}

export function portfolioPage() {
  const panels = [
    projectStack(portfolio.websites.map((d) => ({ site: d, name: d, leftLabel: 'Client', rightLabel: 'Type', kind: 'Website' }))),
    projectStack(portfolio.webApps.map((t) => ({ name: t, leftLabel: 'Project', rightLabel: 'Type', kind: 'Web application' }))),
    projectStack(portfolio.mobileApps.map((t) => ({ name: t, leftLabel: 'Project', rightLabel: 'Type', kind: 'Mobile application' }))),
  ];
  const counts = [portfolio.websites.length, portfolio.webApps.length, portfolio.mobileApps.length];
  return `
<script>if (location.hash === '#products') location.replace('/products/');</script>
${pageHero({ trail: [{ label: 'Home', href: '/' }, { label: 'Our Work' }], title: portfolio.h1, lead: portfolio.body,
  actions: `${quoteBtn('Start a Project')}${btn({ label: 'Read reviews', href: '/success-stories/', variant: 'light' })}` })}
<section class="section--sm container" aria-label="Projects" style="padding-top:1rem">
  <div class="tabs" role="tablist" aria-label="Project categories" data-tabs>
    ${portfolio.categories.map((c, i) => `<button class="tabs__btn" role="tab" id="pt-${i}" aria-controls="pp-${i}" aria-selected="${i === 0}"${i ? ' tabindex="-1"' : ''}>${esc(c)} <sup>(${counts[i]})</sup></button>`).join('')}
  </div>
  ${panels.map((p, i) => `<div class="tab-panel" role="tabpanel" id="pp-${i}" aria-labelledby="pt-${i}"${i ? ' hidden' : ''}>${p}</div>`).join('')}
</section>
<section class="section container" aria-labelledby="pf-reviews">
  <div class="section-head section-head--left"><h2 class="h3" id="pf-reviews" data-reveal="lines">What our clients say</h2></div>
  ${quotesGrid(testimonials.slice(0, 3))}
</section>`;
}

/* ---------- Industries ---------- */
export function industriesPage() {
  return `
${pageHero({ trail: [{ label: 'Home', href: '/' }, { label: 'Industries Served' }], title: industries.h1,
  actions: `${btn({ label: 'Start a project', href: '/pricing-plans/' })}` })}
<section class="section--sm container" aria-label="Global presence" style="padding-top:0">
  <p class="statement" data-reveal="words">${esc(industries.body)}</p>
</section>
<section class="section container" aria-labelledby="ind-list">
  <h2 class="sr-only" id="ind-list">Industries</h2>
  <div class="rows">${industries.list.map((d, i) => `
    <a class="row-link" id="${d.slug}" href="/contact/"><span class="h3">${esc(d.name)}</span>${icon.arrow}</a>`).join('')}
  </div>
</section>
${counters()}`;
}

/* ---------- Reviews ---------- */
export function reviewsPageTpl() {
  return `
${pageHero({ trail: [{ label: 'Home', href: '/' }, { label: 'Reviews' }], title: reviewsPage.h1, lead: reviewsPage.body,
  actions: `${btn({ label: 'Start a Project', href: '/pricing-plans/' })}` })}
<section class="section--sm container" aria-label="Testimonials" style="padding-top:1rem">
  <div class="reviews__widget" style="max-width:none">
    <div class="reviews__top"><b>${home.reviewsCount} Client reviews</b><span class="stars-row" aria-hidden="true">${icon.star.repeat(5)}</span></div>
    ${quotesGrid(testimonials)}
  </div>
</section>
${counters()}`;
}

/* ---------- Pricing ---------- */
export function pricingPage() {
  return `
${pageHero({ trail: [{ label: 'Home', href: '/' }, { label: 'Pricing' }], title: pricing.h1, lead: pricing.lead })}
<section class="section--sm container" aria-label="Plans" style="padding-top:1rem">
  <div class="plans" data-stagger>${pricing.plans.map((p, i) => `
    <article class="plan${i === 1 ? ' plan--dark on-dark' : ''}">
      
      <h2 class="h5">${esc(p.name)}</h2>
      <ul>${p.items.map((it) => `<li>${esc(it)}</li>`).join('')}</ul>
      ${p.perk ? `<span class="plan__perk">${icon.spark.replace('<svg', '<svg style="width:.875rem"')}${esc(p.perk)}</span>` : ''}
      <div class="btn-wrap">${quoteBtn('Get quote', i === 1 ? '' : 'plain', 'lg', p.type)}</div>
    </article>`).join('')}
  </div>
</section>
<section class="section container" aria-label="Custom pricing">
  <p class="statement" data-reveal="words">${esc(pricing.lead)} <span class="dim">${esc(servicesPage.closing)}</span></p>
</section>`;
}

/* ---------- Contact ---------- */
export function contactPageTpl() {
  return `
${pageHero({ trail: [{ label: 'Home', href: '/' }, { label: 'Contact Us' }], title: contactPage.h1, lead: contactPage.lead })}
<section class="contact-grid" aria-label="Contact details and form">
  <div class="contact-info" data-stagger>
    <div><h3>Phone number</h3><ul>${site.phones.map((p) => `<li><a class="u-link" href="${p.href}">${p.label}: ${p.display}</a></li>`).join('')}</ul></div>
    <div><h3>Email address</h3><a class="u-link" href="mailto:${site.email}">${site.email}</a></div>
    ${site.offices.map((o) => `<div><h3>${esc(o.label)}${o.main ? ' — Head office' : ''}</h3>${o.address ? `<p>${esc(o.address)}</p>` : ''}<p><a class="u-link" href="${o.phone.href}">${o.phone.display}</a></p>${o.map ? `<a class="map-link" href="${o.map}" target="_blank" rel="noopener">${roll('View on map')}</a>` : ''}</div>`).join('')}
    <div><h3>Schedule a call</h3>${btn({ label: 'Request Meeting', href: site.calendly })}</div>
  </div>
  <div class="form-card">
    <h2 class="h4" style="margin-bottom:2rem">Get in touch</h2>
    ${projectForm({ id: 'contact', submit: 'Get in touch', variant: 'contact' })}
  </div>
</section>
<div class="section--sm"></div>`;
}

/* ---------- 404 ---------- */
export function notFoundPage() {
  return `
<section class="notfound container">
  <div class="stack" style="--stack:1.5rem">
    <h1 class="h1">Page not found</h1>
    <p class="lead" style="margin-inline:auto">The page you’re looking for may have moved. Try one of these instead.</p>
    <div class="btn-row btn-row--center">${btn({ label: 'Back to home', href: '/' })}${btn({ label: 'Contact us', href: '/contact/', variant: 'light' })}</div>
  </div>
</section>`;
}

/* ---------- Legal pages (Terms of Service, Privacy Policy) ---------- */
export function legalPage(doc, { email }) {
  const linkEmail = (t) => esc(t).replace('{email}', `<a class="u-link" href="mailto:${email}">${email}</a>`);
  const contact = () => `
      <address class="legal__contact">
        <b>${esc(site.name)}</b>
        ${site.offices.map((o) => `<span>${esc(o.label)}${o.address ? `: ${esc(o.address)}` : ''}</span>`).join('')}
        <span>Phone: ${site.phones.map((p) => `<a class="u-link" href="${p.href}">${p.display}</a>`).join(' · ')}</span>
        <span>Email: <a class="u-link" href="mailto:${email}">${email}</a></span>
      </address>`;
  const block = (b) =>
    b.p ? `<p>${linkEmail(b.p)}</p>`
      : b.h ? `<h3>${esc(b.h)}</h3>`
        : b.ul ? `<ul>${b.ul.map((li) => `<li>${esc(li)}</li>`).join('')}</ul>`
          : b.dl ? `<dl>${b.dl.map(([t, d]) => `<div><dt>${esc(t)}</dt><dd>${esc(d)}</dd></div>`).join('')}</dl>`
            : b.contact ? contact() : '';
  return `
${pageHero({ trail: [{ label: 'Home', href: '/' }, { label: doc.h1 }], title: doc.h1 })}
<section class="section--sm container" aria-label="${esc(doc.h1)}" style="padding-top:0">
  <div class="split">
    <nav class="split__sticky legal__toc" aria-label="On this page">
      <ol>${doc.sections.map(([t], i) => `<li><a class="u-link" href="#s${i + 1}">${esc(t)}</a></li>`).join('')}</ol>
    </nav>
    <article class="legal">
      ${doc.sections.map(([t, blocks], i) => `
      <section id="s${i + 1}">
        <h2 class="h5">${esc(t)}</h2>
        ${blocks.map(block).join('\n        ')}
      </section>`).join('')}
    </article>
  </div>
</section>
<div class="section--sm"></div>`;
}

/* ---------- Blog ---------- */
const fmtDate = (d) => new Date(d + 'T12:00:00Z').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
const fmtShort = (d) => new Date(d + 'T12:00:00Z').toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' });
const slugify = (t) => t.toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// Blog card: cover with category tag, date + read time, title, excerpt.
function blogCard(p, readMin, { headingLevel = 2 } = {}) {
  const h = `h${headingLevel}`;
  return `
    <article class="bcard" data-date="${p.date}">
      <a class="bcard__link" href="/blog/${p.slug}/" aria-label="${esc(p.title)}">
        <div class="bcard__media">
          <img src="${p.image}" alt="" loading="lazy" width="1440" height="900">
          <span class="bcard__tag">${esc(p.category)}</span>
        </div>
        <div class="bcard__body">
          <p class="bcard__meta"><time datetime="${p.date}">${fmtShort(p.date)}</time><span aria-hidden="true"></span>${readMin} min read</p>
          <${h} class="bcard__title">${esc(p.title)}</${h}>
          <p class="bcard__excerpt">${esc(p.excerpt)}</p>
          <span class="bcard__more">${roll('Read article')}${icon.arrowUpRight}</span>
        </div>
      </a>
    </article>`;
}

export function blogIndexPage(blog, posts, readMinutes) {
  return `
<section class="bhead container">
  <div class="bhead__copy">
    <h1 class="h1 bhead__title" data-intro-lines>${esc(blog.h1)}</h1>
    <p class="lead" data-intro>${esc(blog.lead)}</p>
  </div>
  <div class="bhead__tools" data-intro>
    <span class="bhead__count">${posts.length} articles</span>
    <div class="seg" role="group" aria-label="Sort articles by publish date" data-blog-sort>
      <button type="button" class="seg__btn" aria-pressed="true" data-sort="newest">Newest first</button>
      <button type="button" class="seg__btn" aria-pressed="false" data-sort="oldest">Oldest first</button>
    </div>
  </div>
</section>
<section class="section--sm container" aria-label="Articles" style="padding-top:0">
  <div class="bgrid" data-blog-grid data-stagger>${posts.map((p) => blogCard(p, readMinutes(p))).join('')}</div>
</section>
<div class="section--sm"></div>`;
}

export function blogPostPage(post, posts, readMinutes) {
  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const headings = post.body.filter((b) => b.h).map((b) => ({ text: b.h, id: slugify(b.h) }));
  const block = (b) =>
    b.p ? `<p>${esc(b.p)}</p>`
      : b.h ? `<h2 id="${slugify(b.h)}">${esc(b.h)}</h2>`
        : b.ul ? `<ul>${b.ul.map((li) => `<li>${esc(li)}</li>`).join('')}</ul>` : '';
  const url = encodeURIComponent(`${site.url}/blog/${post.slug}/`);
  const text = encodeURIComponent(post.title);
  const share = (cls = '') => `
      <div class="share ${cls}">
        <span class="share__label">Share</span>
        <button type="button" class="share__btn" data-copy-link aria-label="Copy link to this article">${icon.copy}<span class="copy-btn__tip" role="status">Copied</span></button>
        <a class="share__btn" href="https://www.linkedin.com/sharing/share-offsite/?url=${url}" target="_blank" rel="noopener" aria-label="Share on LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11H3v-11zm6.5 0h3.8v1.5h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1v5.45h-4v-4.83c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.85 1.25-1.85 2.55v4.91h-4v-11z"/></svg></a>
        <a class="share__btn" href="https://twitter.com/intent/tweet?url=${url}&amp;text=${text}" target="_blank" rel="noopener" aria-label="Share on X"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.78L17.75 3zm-1.08 16.18h1.7L7.4 4.73H5.58l11.09 14.45z"/></svg></a>
        <a class="share__btn" href="https://www.facebook.com/sharer/sharer.php?u=${url}" target="_blank" rel="noopener" aria-label="Share on Facebook"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.87.25-1.46 1.5-1.46h1.55V4.45A20.8 20.8 0 0 0 14.3 4.3c-2.25 0-3.8 1.37-3.8 3.9v2.3H8v3h2.5V21h3z"/></svg></a>
      </div>`;
  return `
<div class="readbar" aria-hidden="true"><span data-readbar></span></div>
<article class="bpost">
  <header class="bpost__head container">
    <a class="bpost__back" href="/blog/">${icon.arrow.replace('<svg', '<svg style="transform:scaleX(-1)"')}${roll('All articles')}</a>
    <span class="bcard__tag bpost__tag" data-intro>${esc(post.category)}</span>
    <h1 class="bpost__title" data-intro-lines>${esc(post.title)}</h1>
    <div class="bpost__byline" data-intro>
      <img src="/assets/img/mark.png" alt="" width="40" height="40">
      <span><b>Blueinc Technologies</b><span><time datetime="${post.date}">${fmtDate(post.date)}</time> · ${readMinutes(post)} min read</span></span>
    </div>
  </header>
  <div class="bpost__cover container" data-reveal-media>
    <img src="${post.image}" alt="${esc(post.imageAlt)}" width="1440" height="900" data-media-img>
  </div>
  <div class="bpost__layout container">
    <aside class="bpost__toc" aria-label="Contents">
      <p class="bpost__toc-title">Contents</p>
      <ol>${headings.map((h) => `<li><a href="#${h.id}" data-toc-link>${esc(h.text)}</a></li>`).join('')}</ol>
    </aside>
    <div class="bpost__body" data-article>
      <p class="bpost__lead">${esc(post.excerpt)}</p>
      ${post.body.map(block).join('\n      ')}
      <div class="bpost__author">
        <img src="/assets/img/mark.png" alt="" width="56" height="56">
        <div>
          <b>Written by Blueinc Technologies</b>
          <p>We build software for businesses and develop and operate digital products of our own.</p>
          <div class="btn-row">${quoteBtn('Discuss Your Project', '', 'sm')}${btn({ label: 'More articles', href: '/blog/', variant: 'light', size: 'sm' })}</div>
        </div>
      </div>
      ${share('share--inline')}
    </div>
    <aside class="bpost__aside" aria-label="Share this article">${share()}</aside>
  </div>
</article>
<section class="section container" aria-labelledby="more-posts">
  <div class="bmore__head"><h2 class="h3" id="more-posts" data-reveal="lines">Keep reading</h2><a class="arrow-link" href="/blog/">${roll('All articles')}${icon.arrow}</a></div>
  <div class="bgrid" data-stagger>${others.map((p) => blogCard(p, readMinutes(p), { headingLevel: 3 })).join('')}</div>
</section>`;
}


/* ---------- Products (Blueinc-owned digital products) ---------- */
// Same layout as the portfolio: page hero + stacked, pinned project cards.
export function productsPage(page) {
  return `
${pageHero({ trail: [{ label: 'Home', href: '/' }, { label: 'Our Products' }], title: page.h1, lead: page.lead,
  actions: `${quoteBtn('Discuss Your Project')}${btn({ label: 'Explore Our Work', href: '/portfolio/', variant: 'light' })}` })}
<section class="section--sm container" aria-label="Products" style="padding-top:1rem">
  ${projectStack(products.map((p) => ({ site: p.site, href: p.url, name: p.name, leftLabel: 'Our product', rightLabel: p.site, kind: p.kind })))}
</section>
<section class="section container" aria-label="About our products">
  <p class="statement" data-reveal="words">${esc(page.statement)}</p>
</section>`;
}
