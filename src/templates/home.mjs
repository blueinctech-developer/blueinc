import { site, home, services, industries, featuredWork, testimonials, clientLogos, values } from '../data/site.mjs';
import { esc, pad, icon, btn, quoteBtn, wordmark, roll, eyebrow, shot, devices, loopVideo } from './components.mjs';
import { hasShot } from './util.mjs';

const plusRow = () => `<div class="svc__crosses" aria-hidden="true">${icon.plus.repeat(4)}</div>`;

export function servicesPanel({ id = 'home', compact = false } = {}) {
  const svcRows = services.map((s, i) => `
      <article class="svc-row${compact ? ' svc-row--compact' : ''}" style="z-index:${i + 1}">
        <div>
          <a class="svc-row__title" href="/our-services/${s.slug}/"><span class="dot-num" aria-hidden="true"></span><h3 class="h4">${esc(s.name)}</h3></a>
          <ul class="tags">${s.tags.map((t) => `<li class="tag">${esc(t)}</li>`).join('')}</ul>
          ${btn({ label: 'Show more', href: `/our-services/${s.slug}/`, variant: 'ghost', size: 'sm' })}
        </div>
        <div>
          <a class="svc-row__thumb" href="/our-services/${s.slug}/" tabindex="-1" aria-hidden="true"><img src="${thumbFor(s)}" alt="" loading="lazy" width="474" height="267"></a>
          <p class="svc-row__desc">${esc(s.summary)}</p>
        </div>
      </article>`).join('');
  const indRows = industries.list.map((d, i) => `
      <article class="svc-row svc-row--compact" style="z-index:${i + 1}">
        <a class="svc-row__title" href="/industries-served/#${d.slug}"><span class="dot-num" aria-hidden="true"></span><h3 class="h4">${esc(d.name)}</h3></a>
        <div class="svc-row__desc" style="margin:0">${btn({ label: 'Start a project', variant: 'ghost', size: 'sm', attrs: 'data-open-quote' })}</div>
      </article>`).join('');
  return `
<section class="panel panel--dark svc on-dark" aria-labelledby="svc-title-${id}" data-svc>
  ${plusRow()}
  <div class="svc__inner">
    <h2 class="sr-only" id="svc-title-${id}">Our services and the industries we serve</h2>
    <div class="svc__tabs-wrap"><div class="svc__tabs" role="tablist" aria-label="Services or industries">
      <button class="svc__tab" role="tab" id="tab-s-${id}" aria-selected="true" aria-controls="pan-s-${id}">Services <sup>(${services.length})</sup></button>
      <button class="svc__tab" role="tab" id="tab-i-${id}" aria-selected="false" aria-controls="pan-i-${id}" tabindex="-1">Industries <sup>(${industries.list.length})</sup></button>
    </div></div>
    <div class="svc__panel" role="tabpanel" id="pan-s-${id}" aria-labelledby="tab-s-${id}">${svcRows}</div>
    <div class="svc__panel" role="tabpanel" id="pan-i-${id}" aria-labelledby="tab-i-${id}" hidden>${indRows}</div>
  </div>
</section>`;
}

function thumbFor(s) {
  if (s.image.startsWith('clients/')) {
    const siteName = s.image.slice(8, -4);
    return hasShot(siteName) ? `/assets/img/${s.image}` : '/assets/img/people.jpg';
  }
  return `/assets/img/${s.image}`;
}

export function quotesGrid(list) {
  return `<div class="quotes" data-stagger>${list.map((t) => `
    <figure class="quote">
      ${icon.quote}
      <blockquote><p>${esc(t.text)}</p></blockquote>
      <footer><b>${esc(t.name)}</b>${esc(t.org)}${t.site ? ` · ${esc(t.site)}` : ''}</footer>
    </figure>`).join('')}</div>`;
}

export function counters() {
  return `
<section class="section" aria-labelledby="trusted-title">
  <div class="container">
    <div class="section-head">
      <span class="stars-row" aria-hidden="true" data-reveal="fade">${icon.star.repeat(5)}</span>
      <h2 class="h3" id="trusted-title" data-reveal="lines" style="max-width:26ch;font-size:clamp(2rem,3.6vw,3.25rem)">${esc(home.trustedBy)}</h2>
    </div>
    <div class="counters">${home.stats.map((s) => `
      <div class="counter">
        <div class="counter__num" data-odometer="${s.value}" aria-label="${s.value}${esc(s.suffix)}"><span aria-hidden="true" data-odo-digits>${s.value}</span><span class="counter__suffix" aria-hidden="true">${esc(s.suffix)}</span></div>
        <p class="counter__label">${esc(s.label)}</p>
      </div>`).join('')}
    </div>
  </div>
</section>`;
}

export function aboutSplit() {
  const avatars = [
    { bg: '/assets/img/partner.jpg', pos: '50% 20%', size: 'cover' },
    { bg: '/assets/img/people.jpg', pos: '38% 50%', size: '640%' },
    { bg: '/assets/img/people.jpg', pos: '62% 43%', size: '640%' },
    { bg: '/assets/img/people.jpg', pos: '74% 46%', size: '560%' },
    { bg: '/assets/img/team-duo.png', pos: '23% 25%', size: '420%' },
    { bg: '/assets/img/team-duo.png', pos: '76% 22%', size: '420%' },
  ];
  const outer = values.map((v, i) => `<div class="orbit__item" style="--a:${i * 90 + 20}deg;--r:calc(min(30rem, 86vw) / 2 - .5rem)"><span class="orbit__chip">${esc(v.title)}</span></div>`).join('');
  const inner = avatars.map((a, i) => `<div class="orbit__item" style="--a:${i * 60}deg;--r:calc(min(30rem, 86vw) * .3)"><span class="orbit__avatar" style="background-image:url(${a.bg});background-position:${a.pos};background-size:${a.size}"></span></div>`).join('');
  return `
<section class="about-split" aria-labelledby="who-title">
  <div class="about-split__copy">
    <div>
      ${eyebrow(home.whoWeAre.eyebrow)}
      <h2 class="h3" id="who-title" data-reveal="lines">${esc(home.whoWeAre.title)}</h2>
      <p class="lead" data-reveal="fade">${esc(home.whoWeAre.body)}</p>
      <div style="margin-top:2rem" data-reveal="fade"><a class="arrow-link" href="/our-services/">${roll('View all solutions')}${icon.arrow}</a></div>
    </div>
    <div class="feature-pair" data-stagger>
      <div class="feature">${icon.globe}<b>United States &amp; Nigeria</b><span>Offices in the US and Nigeria</span></div>
      <div class="feature">${icon.spark}<b>Since ${site.founded}</b><span>Building software and products</span></div>
    </div>
  </div>
  <div class="about-split__orbit">
    <canvas class="stars" data-stars aria-hidden="true"></canvas>
    <div class="orbit" aria-hidden="true">
      <div class="orbit__ring orbit__ring--1">${outer}</div>
      <div class="orbit__ring orbit__ring--2">${inner}</div>
    </div>
    <div class="orbit__center" style="position:absolute">
      <p class="h5">Your technology partner</p>
      <small>Team Work · Integrity · Simplicity · Excellence</small>
    </div>
  </div>
</section>`;
}

function why() {
  const [tailored, intuitive, tracking, social] = home.why.items;
  const steps = services[0].steps;
  // Gantt placement across a 12-column grid (illustrative sequencing, no durations implied)
  const spans = [[1, 4], [3, 7], [5, 8], [7, 10], [8, 12], [10, 13]];
  return `
<section class="panel panel--dark why on-dark" aria-labelledby="why-title">
  <div class="why__head">
    ${eyebrow(home.why.eyebrow)}
    <h2 class="h2" id="why-title" data-reveal="lines">${esc(home.why.title)}</h2>
    <p class="lead" data-reveal="fade">We build and run digital products of our own, so we bring an owner’s perspective to every client project: what to build, how to launch it, and how to keep it growing.</p>
    <div data-reveal="fade">${btn({ label: 'Discuss Your Project', href: site.calendly, size: 'lg' })}</div>
  </div>
  <div class="bento">
    <article class="bento__card bento__card--photo" data-bento>
      <img src="/assets/img/people.jpg" alt="Blueinc Technologies team members collaborating on a project" loading="lazy" width="1868" height="1232" data-parallax="-8">
      <div class="glass history-panel">
        <div class="history-panel__head"><span>Our history</span><span>${icon.arrowUpRight.replace('<svg', '<svg style="width:1rem"')}</span></div>
        <ul data-stagger>${home.history.points.map((p, i) => `<li><span>${esc(p)}</span></li>`).join('')}</ul>
      </div>
      <h3 class="h5" style="margin-top:2rem">${esc(tailored.title)}</h3>
      <p>${esc(tailored.body)}</p>
    </article>
    <article class="bento__card bento__card--devices" data-bento>
      ${devices({ laptop: 'staffintra.com', phone: 'myjobtests.com', cls: 'devices--bento' })}
      <h3 class="h5">${esc(intuitive.title)}</h3>
      <p>${esc(intuitive.body)}</p>
    </article>
    <article class="bento__card bento__card--video" data-bento>
      ${loopVideo('ribbon', 'bento__video')}
      <p class="bento__stat"><b>${home.stats[0].value}${esc(home.stats[0].suffix)}</b>${esc(home.stats[0].label)}</p>
    </article>
    <article class="bento__card" data-bento>
      <div class="dash" aria-hidden="true" data-dash>
        <div class="dash__top"><span class="dash__title"><i></i>Analytics overview</span><span class="dash__tabs"><i>7D</i><i class="on">30D</i><i>90D</i></span></div>
        <div class="dash__kpis">${['Sessions', 'Leads', 'Conversions'].map((k, i) => `<div><small>${k}</small><svg viewBox="0 0 100 32" preserveAspectRatio="none"><path d="${['M0 26 L14 22 L28 24 L42 16 L56 18 L70 10 L84 12 L100 4', 'M0 28 L14 24 L28 20 L42 22 L56 14 L70 15 L84 8 L100 6', 'M0 27 L14 26 L28 21 L42 19 L56 20 L70 13 L84 9 L100 5'][i]}"/></svg></div>`).join('')}</div>
        <div class="chart" data-chart>${[28, 40, 34, 52, 46, 63, 58, 72, 66, 84, 78, 95].map((h) => `<i style="--h:${h}%"></i>`).join('')}</div>
      </div>
      <h3 class="h5">${esc(tracking.title)}</h3>
      <p>${esc(tracking.body)}</p>
    </article>
    <article class="bento__card bento__card--social" data-bento>
      ${devices({ phone: 'teststreams.com', cls: 'devices--social' })}
      <div class="posts" aria-hidden="true" data-posts>
        <div class="post"><span class="post__ico">${icon.chat}</span><span><b>Product launch</b>Release plans · onboarding</span></div>
        <div class="post"><span class="post__ico">${icon.heart}</span><span><b>Search & social</b>SEO · content · campaigns</span></div>
        <div class="post"><span class="post__ico">${icon.mail}</span><span><b>Iteration</b>Feedback · analytics · updates</span></div>
      </div>
      <h3 class="h5">${esc(social.title)}</h3>
      <p>${esc(social.body)}</p>
    </article>
    <article class="bento__card timeline" data-timeline>
      <div class="timeline__head">
        <h3 class="h6">Timeline &amp; Process</h3>
        <span class="timeline__chip">${icon.calendar}Our six-step approach</span>
      </div>
      <div class="timeline__grid">
        ${steps.map(([name], i) => `<div class="timeline__bar" style="grid-column:${spans[i][0]} / ${spans[i][1]};grid-row:${i + 1}"><span>${esc(name)}</span>${icon.arrow.replace('<svg', '<svg style="width:.875rem;flex:none"')}</div>`).join('')}
      </div>
    </article>
  </div>
</section>`;
}

export function homePage() {
  const works = featuredWork.map((w, i) => {
    const img = hasShot(w.site) ? shot(w.site) : null;
    return `
    <div class="work" style="z-index:${i + 1}" data-work>
      <div class="work__side"><small>${w.own ? 'Our product' : 'Client'}</small><span>${esc(w.client)}</span></div>
      <a class="work__card" href="${w.href || '/portfolio/'}"${w.href ? ' target="_blank" rel="noopener"' : ''} aria-label="${esc(w.client)}: ${w.own ? 'visit product' : 'see our work'}">
        ${img ? `<img src="${img}" alt="${esc(w.client)}, ${w.own ? 'a digital product built and operated by Blueinc Technologies' : 'designed and built by Blueinc Technologies'}" loading="lazy" width="1440" height="900">` : ''}
        <span class="work__shade"></span>
        <span class="work__pill">${img ? `<img src="${img}" alt="" width="36" height="36">` : ''}${esc(w.client)}<i></i><em>${w.own ? 'Visit product' : 'See work'}</em></span>
      </a>
      <div class="work__side work__side--r"><small>${esc(w.kind || 'Website')}</small><span>${esc(w.site)}</span></div>
    </div>`;
  }).join('');

  const logos = clientLogos.map((l, i) => `
      <div class="logo-card"><div class="logo-card__box"><img src="/assets/img/logos/${l}.png" alt="${esc(l.replace(/-/g, ' '))} logo" width="200" height="70" loading="lazy"></div></div>`).join('');

  const rotWords = home.headlineWords.map((w) => `<span class="text-gradient">${esc(w)}</span>`).join('');

  return `
<section class="hero" aria-label="Introduction">
  <h1 class="sr-only">Blueinc Technologies: Technology Solutions and Digital Products</h1>
  <div class="hero__wordmark" data-hero-wordmark>${wordmark()}</div>
  <nav class="hero__tabs" aria-label="What we do">
    ${home.heroServices.map((s) => `<a class="hero__tab" href="${s.href}" data-intro>${roll(s.label)}</a>`).join('')}
  </nav>
  <div class="reel" data-reel>
    <div class="reel__media">
      <video muted loop playsinline preload="auto" poster="/assets/media/showreel-poster.jpg" data-reel-img data-reel-video aria-label="Blueinc Technologies showreel: our products, client work and our team">
        <source src="/assets/media/showreel.mp4" type="video/mp4">
      </video>
    </div>
    <button class="reel__toggle" type="button" aria-label="Pause showreel" data-reel-toggle>
      <svg class="i-pause" viewBox="0 0 16 16" aria-hidden="true"><rect x="4" y="3" width="3" height="10" rx="1"/><rect x="9" y="3" width="3" height="10" rx="1"/></svg>
      <svg class="i-play" viewBox="0 0 16 16" aria-hidden="true"><path d="M5 3.5v9l8-4.5z"/></svg>
    </button>
    <div class="reel__meta">
      <span class="reel__meta-left"><span>since</span><b>${site.founded}</b></span>
    </div>
  </div>
</section>

<section class="weare container" aria-labelledby="weare-title">
  <div class="weare__grid">
    <div>
      ${eyebrow('We are Blueinc Technologies')}
      <h2 class="h1 weare__title" id="weare-title"><span class="lead-line" data-reveal="lines">${esc(home.headlineLead)}</span> <span class="rotator" data-rotator aria-label="${esc(home.headlineWords.join(', '))}">${rotWords}</span></h2>
      <p class="lead weare__lead" data-reveal="fade">${esc(home.intro)}</p>
      <div class="btn-row" style="margin-top:2rem" data-reveal="fade">
        ${btn({ label: 'Book a Free Consultation', href: '/free-detailed-audit/' })}
        ${btn({ label: 'Build With Blueinc', href: site.calendly, variant: 'light' })}
      </div>
    </div>
    <aside class="weare__aside" data-reveal="up">
      <div class="review-card">
        <div class="review-card__head"><img src="/assets/img/mark.png" alt="" width="32" height="32"><span>Blueinc Reviews</span></div>
        <div class="review-card__score"><b>${home.reviewsCount}</b><span class="stars-row" aria-hidden="true">${icon.star.repeat(5)}</span><small>Client reviews</small></div>
        <div class="review-card__body">“${esc(testimonials[6].text)}”<div class="review-card__who">${esc(testimonials[6].name)}<span>${esc(testimonials[6].org)}</span></div></div>
        <a class="review-card__foot" href="/success-stories/">${roll('View all reviews')}${icon.arrow.replace('<svg', '<svg style="width:1rem"')}</a>
      </div>
    </aside>
  </div>
</section>

<section aria-labelledby="clients-title">
  <h2 class="sr-only" id="clients-title">Our Clientele</h2>
  <div class="marquee" data-marquee><div class="marquee__track">${logos}</div></div>
  <div class="container marquee__foot">
    <a class="arrow-link" href="/portfolio/">${roll('View more clients')}${icon.arrow}</a>
  </div>
</section>

<section class="works" aria-labelledby="works-title">
  <div class="section-head" style="margin-bottom:5.5rem">
    ${eyebrow('Works')}
    <h2 class="h2" id="works-title" data-reveal="lines">Our products &amp; selected work</h2>
  </div>
  <div class="works__list">${works}</div>
  <div class="works__more">${btn({ label: 'Explore Our Work', href: '/portfolio/', variant: 'plain', size: 'lg' })}</div>
</section>

<div class="section">
${servicesPanel()}
</div>

${aboutSplit()}

<div class="section">
${why()}
</div>

<section class="section" aria-labelledby="reviews-title" style="padding-top:2rem">
  <div class="container">
    <div class="section-head">
      <h2 class="h2" id="reviews-title" data-reveal="lines" style="max-width:14ch">What our happy clients are saying</h2>
    </div>
    <div class="reviews__widget">
      <div class="reviews__top"><b>Blueinc Technologies Reviews</b><a class="arrow-link" href="/success-stories/">${roll('View all reviews')}${icon.arrow}</a></div>
      ${quotesGrid(testimonials.slice(0, 6))}
    </div>
  </div>
</section>

${counters()}
`;
}
