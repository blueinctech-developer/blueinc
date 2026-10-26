import {
  site, home, about, audit, values, servicesPage, services, industries, portfolio,
  testimonials, reviewsPage, pricing, contactPage, solutions, delivery,
} from '../data/site.mjs';
import { esc, pad, icon, btn, quoteBtn, roll, eyebrow, crumbs, projectForm, devices } from './components.mjs';
import { servicesPanel, quotesGrid, counters, aboutSplit, workCard, solutionsGrid, industryGrid } from './home.mjs';
import { isLive } from './util.mjs';
import { illo, SCENE_FOR } from './illos.mjs';
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

// Wide stage card holding an illustration on laptop + phone.
const stageCard = (mockup, label, extra = '') => `
<div class="media-card media-card--wide media-card--stage ${extra}" data-reveal-media>${devices({ ...mockup, label })}</div>`;

function siteCard(domain, { badge = '' } = {}) {
  const scene = SCENE_FOR[domain];
  const live = isLive(domain);
  const inner = `
    <div class="site-card__img">${scene ? illo(scene) : `<span>${esc(domain)}</span>`}${badge ? `<span class="badge">${esc(badge)}</span>` : ''}</div>
    <div class="site-card__meta"><span>www.${esc(domain)}</span>${live ? icon.arrowUpRight : ''}</div>`;
  return live
    ? `<a class="site-card${scene ? '' : ' site-card--text'}" href="https://${domain}/" target="_blank" rel="noopener">${inner}</a>`
    : `<div class="site-card${scene ? '' : ' site-card--text'}">${inner}</div>`;
}

// Product grid (about page): illustration, name, one-line description, link out.
const productGrid = () => `
  <div class="prod-grid" data-stagger>${products.map((p) => `
    <a class="prod-card" href="${p.url}" target="_blank" rel="noopener">
      <div class="prod-card__media">${illo(p.scene, { responsive: true })}</div>
      <div class="prod-card__body"><span class="prod-card__kind">${esc(p.kind)}</span><h3 class="h5">${esc(p.name)}</h3><p>${esc(p.desc)}</p><span class="prod-card__link">${roll(`Visit ${p.site}`)}${icon.arrowUpRight}</span></div>
    </a>`).join('')}
  </div>`;

/* ---------- About ---------- */
export function aboutPage() {
  return `
${pageHero({ trail: [{ label: 'Home', href: '/' }, { label: 'About Us' }], title: about.h1, lead: about.lead, wide: true,
  actions: `${quoteBtn('Discuss a Challenge')}${btn({ label: 'Explore Our Products', href: '/products/', variant: 'light' })}` })}
${stageCard({ laptop: 'staffintra', phone: 'travelnursehouses' }, 'Blueinc Technologies solutions and products on laptop and phone')}

<section class="section container" aria-label="What we do">
  ${eyebrow('What we do')}
  <p class="statement" style="margin-top:1.5rem" data-reveal="words">${esc(about.body)}</p>
</section>

<section class="section container" aria-labelledby="pillars-title" style="padding-top:0">
  <h2 class="sr-only" id="pillars-title">What we do</h2>
  <div class="pillars" data-stagger>
    <a class="pillar pillar--lead" href="/solutions/"><span class="pillar__kicker">Solutions</span><h3 class="h4">We solve business problems with technology</h3><p>Digital transformation, systems integration, AI and automation, workforce operations, customer experience, consulting and managed support.</p><span class="pillar__more">${roll('Explore solutions')}${icon.arrow}</span></a>
    <a class="pillar" href="/products/"><span class="pillar__kicker">Products</span><h3 class="h5">We build, own and operate our own platforms</h3><p>Staffintra, Travel Nurse Houses, MyJobTests and Teststreams.</p><span class="pillar__more">${roll('Our products')}${icon.arrow}</span></a>
    <a class="pillar" href="/our-services/"><span class="pillar__kicker">Engineering</span><h3 class="h5">We build software when a solution needs it</h3><p>Websites, web and mobile applications, custom software and product design.</p><span class="pillar__more">${roll('Our services')}${icon.arrow}</span></a>
  </div>
</section>

<section class="section container" aria-labelledby="family-title" style="padding-top:0">
  <div class="section-head section-head--left">
    <h2 class="h2" id="family-title" data-reveal="lines">Products we build and operate</h2>
  </div>
  ${productGrid()}
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
      ${eyebrow('Who we serve')}
      <h2 class="h2" id="serve-title" style="margin-top:1.25rem" data-reveal="lines">${esc(about.serve.title)}</h2>
    </div>
    <div>
      <p class="body-l" data-reveal="fade">${esc(about.serve.body)}</p>
      <div style="margin-top:2rem" data-reveal="fade">${btn({ label: 'Explore Our Products', href: '/products/' })}</div>
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
    <div class="media-card media-card--stage media-card--stage-fit" style="margin:0;aspect-ratio:4/3" data-reveal-media>${devices({ laptop: 'teststreams', phone: 'myjobtests', label: 'Teststreams and MyJobTests, Blueinc Technologies products, on laptop and phone' })}</div>
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
    <div><h3>Talk to our team</h3><ul>${site.phones.map((p) => `<li><a href="${p.href}">${p.display}</a></li>`).join('')}<li><a href="mailto:${site.email}">${site.email}</a></li></ul></div>
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
  actions: `${quoteBtn('Start a Project')}${btn({ label: 'See partner work', href: '/portfolio/', variant: 'light' })}` })}
${stageCard({ laptop: 'myjobtests', phone: 'travelnursehouses' }, 'MyJobTests and Travel Nurse Houses, Blueinc Technologies products, on laptop and phone')}
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
  return `
${pageHero({ trail: [{ label: 'Home', href: '/' }, { label: 'Services', href: '/our-services/' }, { label: s.short || s.name }], title: s.h1, lead: s.lead, wide: true,
  actions: `${quoteBtn('Start a Project', '', '', '')}${btn({ label: 'View pricing', href: '/pricing-plans/', variant: 'light' })}` })}
${stageCard(s.mockup, `${s.name} work by Blueinc Technologies shown on laptop and phone`)}

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
  return `<div class="works__list">${items.map((it, i) => workCard({
    ...it,
    scene: it.site && SCENE_FOR[it.site],
    href: it.href || (it.site && isLive(it.site) ? `https://${it.site}/` : null),
    pill: 'Visit site',
  }, i)).join('')}</div>`;
}

export function portfolioPage() {
  const panels = [
    projectStack(portfolio.websites.map((w) => ({ site: w.site, name: w.name, leftLabel: 'Client', rightLabel: w.site, kind: w.kind }))),
    projectStack(portfolio.webApps.map((t) => ({ name: t, leftLabel: 'Project', rightLabel: 'Type', kind: 'Web application' }))),
    projectStack(portfolio.mobileApps.map((t) => ({ name: t, leftLabel: 'Project', rightLabel: 'Type', kind: 'Mobile application' }))),
  ];
  const counts = [portfolio.websites.length, portfolio.webApps.length, portfolio.mobileApps.length];
  return `
<script>if (location.hash === '#products') location.replace('/products/');</script>
${pageHero({ trail: [{ label: 'Home', href: '/' }, { label: 'Our Work' }], title: portfolio.h1, lead: portfolio.body,
  actions: `${quoteBtn('Start a Project')}${btn({ label: 'Our products', href: '/products/', variant: 'light' })}` })}
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

/* ---------- Industries: use cases with evidence ---------- */
export function industriesPage() {
  return `
${pageHero({ trail: [{ label: 'Home', href: '/' }, { label: 'Industries' }], title: industries.h1, lead: industries.lead,
  actions: `${quoteBtn('Discuss a Challenge')}${btn({ label: 'All solutions', href: '/solutions/', variant: 'light' })}` })}
<section class="section--sm container" aria-label="Global presence" style="padding-top:0">
  <p class="statement" data-reveal="words">${esc(industries.body)}</p>
</section>
<section class="section container" aria-labelledby="ind-list" style="padding-top:2rem">
  <h2 class="sr-only" id="ind-list">Industries and use cases</h2>
  ${industryGrid({ dark: false })}
</section>
${counters()}`;
}

/* ---------- Solutions ---------- */
const deliverySteps = () => `
    <ol class="steps" data-steps>${delivery.map(([t, d]) => `
      <li class="step"><div><h3 class="h5">${esc(t)}</h3><p>${esc(d)}</p></div></li>`).join('')}
    </ol>`;

export function solutionsIndexPage(page) {
  return `
${pageHero({ trail: [{ label: 'Home', href: '/' }, { label: 'Solutions' }], title: page.h1, lead: page.lead, wide: true,
  actions: `${quoteBtn('Discuss a Challenge')}${btn({ label: 'Explore Our Products', href: '/products/', variant: 'light' })}` })}
<section class="section--sm container" aria-label="Solutions" style="padding-top:1rem">
  ${solutionsGrid()}
</section>
<section class="section container" aria-labelledby="deliver-title">
  <div class="split">
    <div class="split__sticky">
      <h2 class="h2" id="deliver-title" data-reveal="lines">How we deliver solutions</h2>
      <p class="body-l" style="margin-top:1.5rem" data-reveal="fade">${esc(page.deliveryLead)}</p>
      <div style="margin-top:2rem" data-reveal="fade">${quoteBtn('Discuss a Challenge')}</div>
    </div>
    ${deliverySteps()}
  </div>
</section>
<div class="section" style="padding-top:0">
<section class="panel panel--dark on-dark industries-panel" aria-labelledby="sol-ind-title">
  <div class="section-head section-head--split">
    <h2 class="h2" id="sol-ind-title" data-reveal="lines">Solutions shaped by industry</h2>
    <div><p class="body-l" data-reveal="fade">${esc(industries.lead)}</p></div>
  </div>
  ${industryGrid()}
</section>
</div>`;
}

export function solutionPage(s) {
  const proofCards = s.proof.map((p) => `
    <article class="proof-card">
      <div class="proof-card__media">${illo(p.scene, { label: false })}</div>
      <div class="proof-card__body"><h3 class="h5">${esc(p.name)}</h3><p>${esc(p.text)}</p></div>
    </article>`).join('');
  const related = s.related.map((slug) => services.find((x) => x.slug === slug)).filter(Boolean);
  const others = solutions.filter((o) => o.slug !== s.slug);
  const quote = s.quote != null ? testimonials[s.quote] : null;
  return `
${pageHero({ trail: [{ label: 'Home', href: '/' }, { label: 'Solutions', href: '/solutions/' }, { label: s.short || s.name }], title: s.h1, lead: s.lead, wide: true,
  actions: `${quoteBtn('Discuss This Challenge', '', '', s.projectType)}${btn({ label: 'All solutions', href: '/solutions/', variant: 'light' })}` })}
${stageCard(s.mockup, `${s.name}: illustration of the solution in use on laptop and phone`)}

<section class="section container" aria-labelledby="challenge-title">
  <div class="split">
    <div><span class="kicker">${esc(s.name)}</span><h2 class="h3" id="challenge-title" style="margin-top:1rem" data-reveal="lines">The challenge</h2></div>
    <p class="statement statement--sm" data-reveal="words">${esc(s.challengeLong)}</p>
  </div>
</section>

<section class="section container" aria-labelledby="cap-title" style="padding-top:0">
  <div class="split">
    <div class="split__sticky">
      <h2 class="h2" id="cap-title" data-reveal="lines">What we deliver</h2>
      <div style="margin-top:2rem" data-reveal="fade">${quoteBtn('Discuss This Challenge', '', '', s.projectType)}</div>
    </div>
    <ul class="check-list" data-stagger>${s.capabilities.map((c) => `<li>${icon.check}<span>${esc(c)}</span></li>`).join('')}</ul>
  </div>
</section>

<section class="section container" aria-labelledby="out-title" style="padding-top:0">
  <div class="section-head section-head--left"><h2 class="h2" id="out-title" data-reveal="lines">The outcomes</h2></div>
  <div class="cards-3" data-stagger>${s.outcomes.map(([t, d]) => `
    <article class="card"><h3 class="h5">${esc(t)}</h3><p>${esc(d)}</p></article>`).join('')}</div>
</section>

<div class="section" style="padding-top:0">
<section class="panel panel--dark on-dark proof-panel" aria-labelledby="proof-title">
  <div class="section-head section-head--split">
    <h2 class="h2" id="proof-title" data-reveal="lines">Where we have done this</h2>
    <div><p class="body-l" data-reveal="fade">Evidence from the products we operate and the work we have delivered for clients.</p></div>
  </div>
  <div class="proof-grid" data-stagger>${proofCards}</div>
</section>
</div>

<section class="section container" aria-labelledby="how-title" style="padding-top:0">
  <div class="split">
    <div class="split__sticky"><h2 class="h2" id="how-title" data-reveal="lines">How we deliver</h2></div>
    ${deliverySteps()}
  </div>
</section>

${quote ? `
<section class="panel panel--dark on-dark section--lg" aria-label="Client testimonial">
  <figure class="bigquote container">
    <span style="display:inline-block;width:2.5rem;color:var(--pink);margin-bottom:2rem" data-reveal="fade">${icon.quote}</span>
    <blockquote data-reveal="words">${esc(quote.text)}</blockquote>
    <figcaption data-reveal="fade"><b>${esc(quote.name)}</b><span>${esc(quote.org)}</span></figcaption>
  </figure>
</section>` : ''}

<section class="section container" aria-labelledby="rel-title">
  <div class="section-head section-head--left"><h2 class="h4" id="rel-title">Related services</h2></div>
  <div class="rows">${related.map((r) => `
    <a class="row-link" href="/our-services/${r.slug}/"><span class="h3">${esc(r.name)}</span>${icon.arrow}</a>`).join('')}
  </div>
</section>

<section class="section--sm container" aria-labelledby="more-sol-title" style="padding-top:0">
  <div class="section-head section-head--left"><h2 class="h4" id="more-sol-title">More solutions</h2></div>
  <div class="rows">${others.map((o) => `
    <a class="row-link" href="/solutions/${o.slug}/"><span class="h3">${esc(o.name)}</span>${icon.arrow}</a>`).join('')}
  </div>
</section>`;
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
          ${illo(p.scene, { label: false })}
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
    <div class="bpost__illo">${illo(post.scene)}</div>
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
          <p>We build and run Staffintra, Travel Nurse Houses, MyJobTests and Teststreams, and build custom software for select partners.</p>
          <div class="btn-row">${btn({ label: 'Our products', href: '/products/', size: 'sm' })}${btn({ label: 'More articles', href: '/blog/', variant: 'light', size: 'sm' })}</div>
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
// One section per product: animated illustration beside what it does, who it is for and its key
// features. Sections alternate sides on wide screens.
export function productsPage(page) {
  const sections = products.map((p, i) => `
<section class="product container${i % 2 ? ' product--flip' : ''}" id="${p.scene}" aria-labelledby="p-${p.scene}">
  <div class="product__media" data-reveal="up">
    <a class="product__frame" href="${p.url}" target="_blank" rel="noopener" tabindex="-1" aria-hidden="true">${illo(p.scene, { label: false, responsive: true })}</a>
  </div>
  <div class="product__copy">
    <div class="product__brand" data-reveal="fade"><img src="${p.logo}" alt="" width="44" height="44"><span>${esc(p.kind)}</span></div>
    <h2 class="h2" id="p-${p.scene}" data-reveal="lines">${esc(p.name)}</h2>
    <p class="body-l" data-reveal="fade">${esc(p.desc)}</p>
    <p class="product__audience" data-reveal="fade">${esc(p.audience)}</p>
    <ul class="check-list" data-stagger>${p.features.map((f) => `<li>${icon.check}<span>${esc(f)}</span></li>`).join('')}</ul>
    <div class="btn-row" data-reveal="fade">${btn({ label: `Visit ${p.name}`, href: p.url })}</div>
  </div>
</section>`).join('');
  return `
${pageHero({ trail: [{ label: 'Home', href: '/' }, { label: 'Our Products' }], title: page.h1, lead: page.lead,
  actions: products.map((p) => `<a class="chip-link" href="#${p.scene}">${esc(p.name)}</a>`).join('') })}
${sections}
<section class="section container" aria-label="About our products">
  <p class="statement" data-reveal="words">${esc(page.statement)}</p>
  <div class="btn-row" style="margin-top:2.5rem" data-reveal="fade">${quoteBtn('Build With Blueinc')}${btn({ label: 'See partner work', href: '/portfolio/', variant: 'light' })}</div>
</section>`;
}
