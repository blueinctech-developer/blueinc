/* Blueinc Technologies — interaction & motion runtime
 * Motion language (shared across the site):
 *   durations  0.2s micro · 0.6s base · 1.1–1.6s choreography
 *   easing     expo.out for entrances, cubic-bezier(.614,.001,.333,.995) for state changes
 *   stagger    0.02 chars · 0.06–0.08 items/lines
 *   distances  24px fades · 110% masked lines · 100% char rolls
 */
(function () {
  'use strict';

  const html = document.documentElement;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const { gsap, ScrollTrigger, SplitText } = window;
  // If the fail-safe already revealed everything statically (scripts arrived late), don't re-hide
  // content to animate it — that would flash visible → hidden → animated.
  const canAnimate = !!(gsap && ScrollTrigger && SplitText) && !reduced && !html.classList.contains('no-anim');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  clearTimeout(window.__animTimeout);
  if (!canAnimate) html.classList.add(reduced ? 'reduced' : 'no-anim');

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const EASE = 'expo.out';
  let lenis = null;

  /* =====================================================================
     Always-on behaviour (works with or without animation)
     ===================================================================== */

  // ---- Smooth scrolling (Lenis) ------------------------------------------------
  if (canAnimate && window.Lenis) {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    lenis = new window.Lenis({ lerp: 0.14, wheelMultiplier: 1, smoothWheel: true });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
  } else if (canAnimate) {
    gsap.registerPlugin(ScrollTrigger, SplitText);
  }
  const lockScroll = (on) => { if (lenis) on ? lenis.stop() : lenis.start(); document.body.style.overflow = on ? 'hidden' : ''; };

  // In-page anchors use the smooth scroller.
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href');
    const target = id.length > 1 ? document.querySelector(id) : null;
    if (!target) return;
    e.preventDefault();
    if (lenis) lenis.scrollTo(target, { offset: -110, duration: 1.4 });
    else target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
    if (target.id === 'main') target.focus({ preventScroll: true });
  });
  // Arriving with a hash (e.g. /industries-served/#education)
  if (location.hash && lenis) {
    const t = document.querySelector(location.hash);
    if (t) window.addEventListener('load', () => lenis.scrollTo(t, { offset: -110, immediate: true }));
  }

  // ---- Button cursor glow -------------------------------------------------------
  if (finePointer) {
    document.addEventListener('pointermove', (e) => {
      const b = e.target.closest && e.target.closest('.btn');
      if (!b) return;
      const r = b.getBoundingClientRect();
      const inner = b.querySelector('.btn__in');
      inner.style.setProperty('--mx', `${e.clientX - r.left}px`);
      inner.style.setProperty('--my', `${e.clientY - r.top}px`);
    }, { passive: true });
  }

  // ---- Dropdown: Escape closes and returns focus ----------------------------------
  $$('.has-drop').forEach((li) => {
    li.addEventListener('keydown', (e) => {
      if (e.key !== 'Escape') return;
      li.classList.add('drop-suppressed');
      li.querySelector('.navbar__link').focus();
    });
    const reset = () => li.classList.remove('drop-suppressed');
    li.addEventListener('mouseleave', reset);
    li.addEventListener('focusout', (e) => { if (!li.contains(e.relatedTarget)) reset(); });
  });

  // ---- On-demand UI ---------------------------------------------------------------
  // The mobile menu and the quote dialog ship inside inert <template>s (not styled or laid out
  // on page load) and are created the first time they're opened.
  const fromTemplate = (id) => {
    const tpl = document.getElementById(id);
    if (!tpl) return null;
    const node = tpl.content.firstElementChild.cloneNode(true);
    document.body.appendChild(node);
    tpl.remove();
    return node;
  };

  // ---- Mobile menu ---------------------------------------------------------------
  let menu = $('[data-menu]');
  const menuBtn = $('[data-menu-open]');
  let menuTl = null;
  function ensureMenu() {
    if (menu) return menu;
    menu = fromTemplate('tpl-menu');
    if (!menu) return null;
    $$('[data-menu-close]', menu).forEach((b) => b.addEventListener('click', closeMenu));
    menu.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
      if (e.key === 'Tab') { // focus trap
        const f = $$('a, button', menu).filter((el) => el.offsetParent !== null);
        if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
        else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
      }
    });
    $$('.menu__acc', menu).forEach((b) => b.addEventListener('click', () => b.setAttribute('aria-expanded', String(b.getAttribute('aria-expanded') !== 'true'))));
    $$('.menu__links a', menu).forEach((a) => a.addEventListener('click', () => { if (!a.getAttribute('href').startsWith('#')) lockScroll(false); }));
    return menu;
  }
  function buildMenuTl() {
    const sheet = $('.menu__sheet', menu);
    const items = $$('[data-menu-item]', menu);
    return gsap.timeline({ paused: true })
      .to($('.menu__bg', menu), { opacity: 1, duration: 0.4, ease: 'power2.out' }, 0)
      .fromTo(sheet, { clipPath: 'inset(0% 0% 100% 0% round 12px)' }, { clipPath: 'inset(0% 0% 0% 0% round 12px)', duration: 0.8, ease: 'expo.inOut' }, 0)
      .fromTo(items, { y: 28, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.05, ease: EASE }, 0.35);
  }
  function openMenu() {
    if (!ensureMenu()) return;
    void menu.offsetWidth; // freshly created: flush styles so the open transition runs
    menu.classList.add('is-open');
    menuBtn.setAttribute('aria-expanded', 'true');
    lockScroll(true);
    if (canAnimate) { menuTl = menuTl || buildMenuTl(); menuTl.timeScale(1).play(); }
    // The items (including the close button) fade in from 0.35s; a hidden element can't take focus.
    setTimeout(() => $('.menu__close', menu).focus({ preventScroll: true }), canAnimate ? 450 : 50);
  }
  function closeMenu() {
    menuBtn.setAttribute('aria-expanded', 'false');
    lockScroll(false);
    const done = () => { menu.classList.remove('is-open'); menuBtn.focus(); };
    if (canAnimate && menuTl) { menuTl.timeScale(1.6).reverse(); menuTl.eventCallback('onReverseComplete', done); }
    else done();
  }
  if (menuBtn) {
    menuBtn.addEventListener('click', openMenu);
    window.matchMedia('(min-width: 992px)').addEventListener('change', (m) => { if (m.matches && menu && menu.classList.contains('is-open')) closeMenu(); });
  }

  // ---- Tabs (services panel + portfolio) --------------------------------------------
  $$('[role="tablist"]').forEach((list) => {
    const tabs = $$('[role="tab"]', list);
    const select = (tab, focus) => {
      tabs.forEach((t) => {
        const on = t === tab;
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
        const panel = document.getElementById(t.getAttribute('aria-controls'));
        if (panel) panel.hidden = !on;
      });
      if (focus) tab.focus();
      const panel = document.getElementById(tab.getAttribute('aria-controls'));
      if (canAnimate && panel) {
        const kids = panel.querySelectorAll(':scope > *, :scope > .sites > *');
        gsap.fromTo(kids, { y: 30, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.9, stagger: 0.05, ease: EASE, clearProps: 'transform' });
        ScrollTrigger.refresh();
      }
    };
    // Deep link: a tab with data-hash="x" opens for #x (also when the hash changes in place).
    const fromHash = () => { const t = tabs.find((x) => x.dataset.hash && '#' + x.dataset.hash === location.hash); if (t) select(t); };
    fromHash();
    window.addEventListener('hashchange', () => { fromHash(); const el = location.hash && document.querySelector(location.hash); if (el && lenis) lenis.scrollTo(el, { offset: -110 }); });
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => select(t));
      t.addEventListener('keydown', (e) => {
        const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (d) { e.preventDefault(); select(tabs[(i + d + tabs.length) % tabs.length], true); }
      });
    });
  });

  // ---- Quote dialog -----------------------------------------------------------------
  let dialog = $('#quote-dialog');
  function ensureDialog() {
    if (dialog) return dialog;
    dialog = fromTemplate('tpl-quote');
    if (!dialog) return null;
    dialog.addEventListener('close', () => lockScroll(false));
    dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });
    $$('[data-close-dialog]', dialog).forEach((b) => b.addEventListener('click', () => dialog.close()));
    $$('form[data-form]', dialog).forEach(bindForm);
    return dialog;
  }
  document.addEventListener('click', (e) => {
    const opener = e.target.closest('[data-open-quote]');
    if (!opener || !ensureDialog()) return;
    e.preventDefault();
    const type = opener.getAttribute('data-project');
    const sel = $('select[name="project"]', dialog);
    if (sel && type) sel.value = type;
    if (menu && menu.classList.contains('is-open')) closeMenu();
    if (typeof dialog.showModal === 'function') dialog.showModal(); else dialog.setAttribute('open', '');
    lockScroll(true);
  });

  // ---- Hero "ask" box (chat-style): Enter sends, Shift+Enter adds a line; sending opens the quote
  // form with the message filled in, so it goes through the same endpoint as every other enquiry.
  const ask = $('[data-ask]');
  if (ask) {
    const input = $('[data-ask-input]', ask);
    const grow = () => {
      input.style.height = 'auto';
      input.style.height = `${Math.min(input.scrollHeight, 200)}px`;
      ask.classList.toggle('is-empty', !input.value.trim());
    };
    input.addEventListener('input', grow);
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey && !e.isComposing) { e.preventDefault(); ask.requestSubmit(); }
    });
    ask.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = input.value.trim();
      if (!text) {
        input.focus();
        ask.classList.remove('is-nudge'); void ask.offsetWidth; ask.classList.add('is-nudge');
        return;
      }
      if (!ensureDialog()) return;
      const msg = $('textarea[name="message"]', dialog);
      if (msg) msg.value = text;
      if (typeof dialog.showModal === 'function') dialog.showModal(); else dialog.setAttribute('open', '');
      lockScroll(true);
      const next = $('input[name="name"]', dialog);
      if (next) next.focus();
    });
    $$('[data-ask-chip]').forEach((chip) => chip.addEventListener('click', () => {
      input.value = chip.dataset.askChip;
      grow();
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
    }));
    grow();
  }

  // ---- Forms ---------------------------------------------------------------------------
  const cfg = window.BLUEINC_CONFIG || {};
  function bindForm(form) {
    const status = $('.form__status', form);
    const setStatus = (msg, kind) => { status.textContent = msg; status.className = `form__status${kind ? ` is-${kind}` : ''}`; };
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); setStatus('Please complete the required fields.', 'err'); return; }
      const data = new FormData(form);
      if (data.get('website')) return; // honeypot
      data.delete('website');
      data.append('page', location.pathname);
      const submit = $('[type="submit"]', form);
      submit.disabled = true;
      try {
        if (cfg.formEndpoint) {
          setStatus('Sending…');
          const res = await fetch(cfg.formEndpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
          if (!res.ok) throw new Error(String(res.status));
          form.reset();
          setStatus('Thank you! Your message has been sent — we’ll be in touch shortly.', 'ok');
        } else {
          const lines = [];
          data.forEach((v, k) => { if (k !== 'terms') lines.push(`${k.charAt(0).toUpperCase() + k.slice(1)}: ${v}`); });
          const subject = `${form.dataset.form === 'contact' ? 'Website enquiry' : 'Quote request'}${data.get('project') ? ` — ${data.get('project')}` : ''} from ${data.get('name')}`;
          window.location.href = `mailto:${cfg.formEmail || 'contact@blueinctech.com'}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
          setStatus('Opening your email app to send this message…', 'ok');
        }
      } catch (err) {
        setStatus(`Sorry, something went wrong. Please email ${cfg.formEmail || 'contact@blueinctech.com'} directly.`, 'err');
      } finally {
        submit.disabled = false;
      }
    });
  }
  $$('form[data-form]').forEach(bindForm);

  // ---- Copy email -------------------------------------------------------------------------
  $$('[data-copy]').forEach((b) => b.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(b.dataset.copy); } catch { /* ignore */ }
    b.classList.add('is-copied');
    setTimeout(() => b.classList.remove('is-copied'), 1600);
  }));

  // ---- Office clocks --------------------------------------------------------------------------
  const clocks = $$('[data-clock]');
  if (clocks.length) {
    const tick = () => {
      const now = new Date();
      clocks.forEach((c) => {
        const timeZone = c.dataset.clock;
        const parts = new Intl.DateTimeFormat('en-US', { timeZone, hour: 'numeric', minute: '2-digit', hour12: true }).formatToParts(now);
        const get = (t) => (parts.find((p) => p.type === t) || {}).value || '';
        const time = `${get('hour').padStart(2, '0')}<span class="colon">:</span>${get('minute')}`;
        const t = $('[data-time]', c);
        if (t.dataset.v !== time) { t.innerHTML = time; t.dataset.v = time; }
        $('[data-ampm]', c).textContent = get('dayPeriod').toLowerCase();
        $('[data-date]', c).textContent = new Intl.DateTimeFormat('en-US', { timeZone, weekday: 'long', month: 'long', day: 'numeric' }).format(now);
      });
    };
    tick();
    setInterval(tick, 1000);
  }
  $$('[data-year]').forEach((y) => { y.textContent = new Date().getFullYear(); });

  // ---- Back to top ----------------------------------------------------------------------------------
  const toTop = $('[data-to-top]');
  if (toTop) {
    const upd = () => toTop.classList.toggle('is-visible', window.scrollY > 900);
    window.addEventListener('scroll', upd, { passive: true });
    upd();
  }

  // ---- Video: ambient loops play only while on screen; never autoplay with reduced motion ----------
  const videoIO = new IntersectionObserver((entries) => entries.forEach((e) => {
    const v = e.target;
    if (e.isIntersecting && !reduced && !v.dataset.userPaused) {
      if (v.preload === 'none') v.preload = 'auto';
      v.play().catch(() => {});
    } else if (!e.isIntersecting) v.pause();
  }), { rootMargin: '150px 0px' });
  // Videos start loading only after the page has finished loading, so they never compete with
  // fonts or CSS.
  const startVideos = () => $$('[data-autovideo]').forEach((v) => videoIO.observe(v));
  if (document.readyState === 'complete') startVideos(); else window.addEventListener('load', startVideos, { once: true });

  // ---- Starfields (canvas) ---------------------------------------------------------------------------
  function starfield(canvas) {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let W, H, D, stars = [], raf = null, last = 0, visible = false;
    const rnd = (a, b) => a + Math.random() * (b - a);
    function build() {
      D = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.clientWidth; H = canvas.clientHeight;
      canvas.width = W * D; canvas.height = H * D;
      ctx.setTransform(D, 0, 0, D, 0, 0);
      const n = Math.min(Math.round(W * H * 0.00028), 420);
      stars = Array.from({ length: n }, () => ({ x: rnd(-1, 1), y: rnd(-1, 1), z: rnd(0.08, 1), tw: rnd(0, Math.PI * 2) }));
    }
    function draw(t) {
      const dt = Math.min(t - last, 50); last = t;
      ctx.clearRect(0, 0, W, H);
      const cx = W / 2, cy = H / 2, f = Math.max(W, H) * 0.45;
      for (const s of stars) {
        if (!reduced) s.z -= dt * 0.000035;
        if (s.z < 0.03) { s.x = rnd(-1, 1); s.y = rnd(-1, 1); s.z = 1; }
        const px = cx + (s.x * f) / s.z, py = cy + (s.y * f) / s.z;
        if (px < -20 || px > W + 20 || py < -20 || py > H + 20) { s.z = 1; continue; }
        const d = 1 - s.z;
        ctx.globalAlpha = Math.min(d * 1.2, 1) * (0.7 + 0.3 * Math.sin(t / 600 + s.tw));
        ctx.fillStyle = '#fff';
        ctx.beginPath(); ctx.arc(px, py, 0.3 + d * 1.4, 0, 6.283); ctx.fill();
      }
      ctx.globalAlpha = 1;
      if (visible && !reduced) raf = requestAnimationFrame(draw);
    }
    const start = () => { if (!raf && visible) { last = performance.now(); raf = requestAnimationFrame(draw); } };
    const stop = () => { if (raf) cancelAnimationFrame(raf); raf = null; };
    build();
    new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) { reduced ? draw(performance.now()) : start(); } else stop(); }).observe(canvas);
    let rt; window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(() => { build(); if (reduced) draw(performance.now()); }, 150); });
    document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));
  }
  $$('[data-stars]').forEach(starfield);

  // ---- Blog index: sort articles by publish date (newest / oldest); remembered in ?sort= ---------
  const blogGrid = $('[data-blog-grid]');
  const blogSort = $('[data-blog-sort]');
  if (blogGrid && blogSort) {
    const buttons = $$('[data-sort]', blogSort);
    const apply = (order, animate) => {
      const cards = $$('.bcard', blogGrid).sort((a, b) => (order === 'oldest' ? 1 : -1) * a.dataset.date.localeCompare(b.dataset.date));
      cards.forEach((c) => blogGrid.appendChild(c));
      buttons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.sort === order)));
      if (animate && canAnimate) {
        gsap.fromTo(cards, { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.7, stagger: 0.06, ease: 'expo.out', clearProps: 'transform' });
        ScrollTrigger.refresh();
      }
    };
    const initial = new URLSearchParams(location.search).get('sort') === 'oldest' ? 'oldest' : 'newest';
    if (initial !== 'newest') apply(initial, false);
    buttons.forEach((b) => b.addEventListener('click', () => {
      const order = b.dataset.sort;
      if (b.getAttribute('aria-pressed') === 'true') return;
      apply(order, true);
      const url = new URL(location.href);
      if (order === 'oldest') url.searchParams.set('sort', 'oldest'); else url.searchParams.delete('sort');
      history.replaceState(null, '', url);
    }));
  }

  // ---- Blog article: reading progress, active contents link, copy link ----------------------------
  const article = $('[data-article]');
  if (article) {
    const bar = $('[data-readbar]');
    const tocLinks = $$('[data-toc-link]');
    const heads = tocLinks.map((a) => document.getElementById(a.getAttribute('href').slice(1))).filter(Boolean);
    let ticking = false;
    const onScroll = () => {
      ticking = false;
      const r = article.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh * 0.35 - r.top) / Math.max(1, r.height - vh * 0.4)));
      if (bar) bar.style.transform = `scaleX(${p.toFixed(4)})`;
      let active = -1;
      heads.forEach((h, i) => { if (h.getBoundingClientRect().top < vh * 0.35) active = i; });
      tocLinks.forEach((a, i) => a.classList.toggle('is-active', i === active));
    };
    window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
    onScroll();
  }
  $$('[data-copy-link]').forEach((b) => b.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(location.origin + location.pathname); } catch { /* ignore */ }
    b.classList.add('is-copied');
    setTimeout(() => b.classList.remove('is-copied'), 1600);
  }));

  // ---- Illustrations: run only while on screen, pointer depth, hero product switcher ------------
  // A scene is "live" when it is on screen and not held (an inactive hero slide is held).
  // Its GSAP timeline (built in the motion section) plays only while live.
  const illos = $$('[data-illo]');
  let buildIllo = null;
  const syncIllo = (el) => {
    const live = !!el.__vis && !el.__held;
    if (live && !el.__tl && buildIllo) buildIllo(el);
    el.classList.toggle('is-live', live);
    if (el.__tl) live ? el.__tl.play() : el.__tl.pause();
  };
  const illoIO = new IntersectionObserver((entries) => entries.forEach((e) => { e.target.__vis = e.isIntersecting; syncIllo(e.target); }), { rootMargin: '100px 0px' });
  illos.forEach((el) => illoIO.observe(el));
  if (finePointer && !reduced) {
    illos.forEach((el) => {
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        el.style.setProperty('--px', (0.5 - (e.clientX - r.left) / r.width).toFixed(3));
        el.style.setProperty('--py', (0.5 - (e.clientY - r.top) / r.height).toFixed(3));
      });
      el.addEventListener('pointerleave', () => { el.style.setProperty('--px', 0); el.style.setProperty('--py', 0); });
    });
  }

  // Home hero: one product scene at a time; tabs switch, auto-advance, play/pause (WCAG 2.2.2).
  const heroReel = $('[data-hero-reel]');
  if (heroReel) {
    const tabs = $$('[data-hero-tab]');
    const slides = $$('[data-hero-slide]', heroReel);
    const toggle = $('[data-reel-toggle]', heroReel);
    const DWELL = 9000;
    let current = 0;
    let timer = null;
    let paused = reduced;
    let onScreen = true;
    const select = (i, { restart = true } = {}) => {
      current = (i + slides.length) % slides.length;
      slides.forEach((s, j) => {
        const on = j === current;
        s.classList.toggle('is-active', on);
        s.setAttribute('aria-hidden', String(!on));
        s.inert = !on;
        const sc = $('[data-illo]', s);
        if (sc) {
          sc.__held = !on || paused;
          if (on && restart && sc.__tl) sc.__tl.restart();
          syncIllo(sc);
        }
      });
      tabs.forEach((t, j) => { t.setAttribute('aria-selected', String(j === current)); t.tabIndex = j === current ? 0 : -1; });
      schedule();
    };
    const schedule = () => {
      clearTimeout(timer);
      heroReel.style.setProperty('--dwell', `${DWELL}ms`);
      tabs.forEach((t) => { t.classList.remove('is-timing'); void t.offsetWidth; });
      if (paused || !onScreen) return;
      tabs[current].classList.add('is-timing');
      timer = setTimeout(() => select(current + 1), DWELL);
    };
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => select(i));
      t.addEventListener('keydown', (e) => {
        const d = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
        if (!d) return;
        e.preventDefault();
        select(current + d);
        tabs[current].focus();
      });
    });
    const syncToggle = () => {
      heroReel.classList.toggle('is-paused', paused);
      if (!toggle) return;
      toggle.classList.toggle('is-paused', paused);
      toggle.setAttribute('aria-label', paused ? 'Play product showcase' : 'Pause product showcase');
    };
    if (toggle) toggle.addEventListener('click', () => { paused = !paused; syncToggle(); select(current, { restart: false }); });
    new IntersectionObserver(([e]) => { onScreen = e.isIntersecting; schedule(); }).observe(heroReel);
    syncToggle();
    select(0, { restart: false });
  }

  // Home card stack: pin the hero once its bottom edge reaches the bottom of the viewport, so a
  // hero taller than the screen is fully seen before the next section slides over it.
  $$('[data-stack-base]').forEach((stackBase) => {
    const setTop = () => stackBase.style.setProperty('--stack-top', `${Math.min(0, window.innerHeight - stackBase.offsetHeight)}px`);
    setTop();
    new ResizeObserver(setTop).observe(stackBase);
    window.addEventListener('resize', setTop);
  });

  // ---- Odometer markup (static fallback keeps the plain number) -------------------------------
  function buildOdometer(el) {
    const value = String(el.dataset.odometer);
    const holder = $('[data-odo-digits]', el);
    // One element per digit column: 0-9 twice as text lines (was 20 <span>s per digit).
    const strip = Array.from({ length: 20 }, (_, i) => i % 10).join('\n');
    holder.innerHTML = value.split('').map((d) => `<span class="odo"><span class="odo__col" data-digit="${d}">${strip}</span></span>`).join('');
    return $$('.odo__col', holder);
  }

  if (!canAnimate) return;

  /* =====================================================================
     Motion (GSAP + ScrollTrigger + SplitText)
     ===================================================================== */
  const show = (els) => gsap.set(els, { visibility: 'visible' });

  document.fonts.ready.then(() => {
    intro();
    rotator();
    reveals();
    homeScenes();
    sharedScenes();
    illoScenes();
    ScrollTrigger.refresh();
  });

  // ---- Illustration timelines ------------------------------------------------------------------
  // Steps ([data-s]) build up in order, hold, fade out together and rebuild, looping while on
  // screen. Each timeline starts at its "full" label so a visible scene never flashes empty.
  function illoScenes() {
    const pxPerEm = (root) => parseFloat(getComputedStyle($('.il__stage', root)).fontSize) || 12;
    const fmt = (el, v) => {
      if (el.dataset.fmt === 'time') { const s = Math.round(v); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; }
      return v.toFixed(+el.dataset.dec || 0);
    };
    // Each effect adds its tween(s) at time `at` and returns how long it runs.
    const FX = {
      pop(tl, el, at, em) {
        const svg = el instanceof SVGElement;
        tl.from(el, { autoAlpha: 0, y: svg ? 14 : em * 0.8, scale: svg ? 0.6 : 0.96, transformOrigin: svg ? '50% 100%' : '50% 50%', duration: 0.8 }, at);
        return 0.8;
      },
      slide(tl, el, at, em) { tl.from(el, { autoAlpha: 0, x: -em * 1.2, duration: 0.8 }, at); return 0.8; },
      fill(tl, el, at) {
        const vertical = !!el.closest('.il-bars');
        tl.from(el, vertical ? { scaleY: 0, duration: 1 } : { scaleX: 0, duration: 1.1 }, at);
        return 1;
      },
      ring(tl, el, at) { tl.from(el, { strokeDasharray: '0 100', duration: 1.4, ease: 'power3.out' }, at); return 1.4; },
      draw(tl, el, at) { tl.from(el, { strokeDashoffset: 1, duration: 1.2, ease: 'power2.inOut' }, at); return 1.2; },
      count(tl, el, at) {
        const o = { v: 0 };
        const from = parseFloat(el.dataset.from || 0);
        tl.fromTo(o, { v: from }, { v: parseFloat(el.dataset.to), duration: 1.4, ease: 'power2.out', onUpdate: () => { el.textContent = fmt(el, o.v); } }, at);
        return 1.4;
      },
      type(tl, el, at) {
        const full = el.textContent;
        const o = { n: 0 };
        const d = Math.min(1.6, full.length * 0.045);
        tl.fromTo(o, { n: 0 }, { n: full.length, duration: d, ease: 'none', onUpdate: () => { el.textContent = full.slice(0, Math.round(o.n)); } }, at);
        return d;
      },
      cursor(tl, el, at) {
        const [dx, dy] = el.dataset.path.split(',').map(Number);
        const w = parseFloat(el.style.width) || 1.6;
        tl.fromTo(el, { autoAlpha: 0, xPercent: (dx / w) * 100, yPercent: (dy / w) * 100 }, { autoAlpha: 1, duration: 0.3 }, at)
          .to(el, { xPercent: 0, yPercent: 0, duration: 0.9, ease: 'power3.inOut' }, at + 0.15)
          .to(el, { scale: 0.8, duration: 0.12, yoyo: true, repeat: 1, ease: 'power1.inOut' }, at + 1.05);
        return 1.3;
      },
      on(tl, el, at) { tl.call(() => el.classList.add('is-on'), null, at + 0.15); return 0.5; },
    };

    buildIllo = (root) => {
      if (root.__tl) return;
      const em = pxPerEm(root);
      const steps = new Map();
      $$('[data-s]', root).forEach((el) => {
        const k = +el.dataset.s;
        if (!steps.has(k)) steps.set(k, []);
        steps.get(k).push(el);
      });
      const ons = $$('[data-fx="on"]', root);
      const faders = [];
      const tl = gsap.timeline({ repeat: -1, paused: true, defaults: { ease: EASE } });
      tl.call(() => ons.forEach((o) => o.classList.remove('is-on')), null, 0.01);
      let t = 0.5;
      [...steps.keys()].sort((a, b) => a - b).forEach((k) => {
        let span = 0;
        steps.get(k).forEach((el, i) => {
          const fx = FX[el.dataset.fx] || FX.pop;
          const at = t + i * 0.1;
          span = Math.max(span, at - t + fx(tl, el, at, em));
          // State toggles reset by class; counters restart from zero (fading them would leave their units behind).
          if (el.dataset.fx !== 'on' && el.dataset.fx !== 'count') faders.push(el);
        });
        t += Math.max(0.55, span * 0.65);
      });
      tl.addLabel('full', t + 0.3);
      tl.to(faders, { autoAlpha: 0, duration: 0.5, ease: 'power2.in' }, t + 3.6);
      tl.to({}, { duration: 0.7 });
      root.__tl = tl;
      tl.seek('full', false);
    };
    illos.forEach(syncIllo);
  }

  // ---- Page-load choreography ------------------------------------------------------------------
  function intro() {
    const tl = gsap.timeline({ defaults: { ease: EASE } });
    // The navbar and home hero (wordmark, tabs, showreel) animate in CSS from the first paint
    // (see "Page-load intro in CSS"); this timeline only handles inner-page headers.

    // Inner-page headers ([data-intro-lines] titles, [data-intro] lead/actions) also animate in CSS.
  }

  // ---- Rotating headline word ----------------------------------------------------------------------
  function rotator() {
    const r = $('[data-rotator]');
    if (!r) return;
    const spans = $$(':scope > span', r);
    const words = spans.map((w) => SplitText.create(w, { type: 'chars', charsClass: 'split-char' }).chars);
    // Transformed chars can't share the parent's background-clip:text, so give each char a slice
    // of one word-wide gradient — visually identical to a continuous gradient.
    const paintGradient = () => spans.forEach((w, wi) => {
      const box = w.getBoundingClientRect();
      words[wi].forEach((c) => {
        c.style.backgroundImage = 'linear-gradient(90deg, var(--cyan), var(--pink))';
        c.style.backgroundSize = `${box.width}px 100%`;
        c.style.backgroundPosition = `${-(c.getBoundingClientRect().left - box.left)}px 0`;
        c.style.webkitBackgroundClip = 'text';
        c.style.backgroundClip = 'text';
        c.style.color = 'transparent';
      });
      w.style.background = 'none';
    });
    paintGradient();
    window.addEventListener('resize', paintGradient);
    spans.forEach((w) => gsap.set(w, { visibility: 'visible' }));
    words.forEach((c, i) => gsap.set(c, { yPercent: i ? 110 : 0 }));
    // The swap loop may only start once the first word has finished entering; otherwise the
    // entrance and the first swap race and two words end up on the line together.
    let introDone = false, inView = false;
    const startLoop = () => { clearInterval(r._int); if (introDone && inView) r._int = setInterval(next, 2600); };
    gsap.from(words[0], { yPercent: 110, duration: 1.1, stagger: 0.03, ease: EASE, scrollTrigger: { trigger: r, start: 'top 90%', once: true }, onComplete: () => { introDone = true; startLoop(); } });
    let i = 0;
    const next = () => {
      const cur = words[i]; i = (i + 1) % words.length; const nxt = words[i];
      // Sequential hand-off: the outgoing word fully clears the line before the next rolls in,
      // so letters from the two words never share the same space.
      gsap.timeline()
        .to(cur, { yPercent: -110, duration: 0.5, stagger: 0.02, ease: 'power3.in' })
        .fromTo(nxt, { yPercent: 110 }, { yPercent: 0, duration: 0.85, stagger: 0.025, ease: EASE }, '>-0.02');
    };
    ScrollTrigger.create({ trigger: r, start: 'top bottom', end: 'bottom top', onToggle: (s) => { inView = s.isActive; if (inView) startLoop(); else clearInterval(r._int); } });
  }

  // ---- Generic scroll reveals ----------------------------------------------------------------------
  // Split text only when it approaches the viewport: splitting every heading at load is the
  // single biggest chunk of start-up work (layout + DOM creation).
  const nearIO = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (!e.isIntersecting) return;
    nearIO.unobserve(e.target);
    const fn = e.target.__onNear; delete e.target.__onNear; if (fn) fn();
  }), { rootMargin: '0px 0px 35% 0px' });
  const whenNear = (el, fn) => { el.__onNear = fn; nearIO.observe(el); };

  function reveals() {
    $$('[data-reveal="lines"]').forEach((el) => whenNear(el, () => {
      SplitText.create(el, {
        type: 'lines', mask: 'lines', linesClass: 'split-line', autoSplit: true,
        onSplit(self) {
          show(el);
          return gsap.from(self.lines, { yPercent: 115, duration: 1.2, stagger: 0.08, ease: EASE, scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
        },
      });
    }));

    $$('[data-reveal="words"]').forEach((el) => whenNear(el, () => {
      SplitText.create(el, {
        type: 'words', wordsClass: 'split-word', autoSplit: true,
        onSplit(self) {
          return gsap.fromTo(self.words, { opacity: 0.14 }, { opacity: 1, stagger: 0.1, ease: 'none', scrollTrigger: { trigger: el, start: 'top 82%', end: 'bottom 55%', scrub: true } });
        },
      });
    }));

    $$('[data-reveal="fade"]').forEach((el) => {
      if (el.closest('.page-hero')) return;
      gsap.fromTo(el, { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1.1, ease: EASE, scrollTrigger: { trigger: el, start: 'top 92%', once: true } });
    });
    $$('[data-reveal="up"]').forEach((el) => {
      gsap.fromTo(el, { y: 60, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1.4, ease: EASE, scrollTrigger: { trigger: el, start: 'top 90%', once: true } });
    });
    $$('[data-stagger]').forEach((el) => {
      const kids = Array.from(el.children);
      gsap.fromTo(kids, { y: 34, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1.1, stagger: 0.08, ease: EASE, scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
    });

    // Media cards: clip-path opening + inner zoom-out, scrubbed to scroll.
    $$('[data-reveal-media]').forEach((card) => {
      const img = $('[data-media-img]', card);
      gsap.fromTo(card, { clipPath: 'inset(10% 5% 0% 5% round 28px)' }, { clipPath: 'inset(0% 0% 0% 0% round 28px)', ease: 'none', scrollTrigger: { trigger: card, start: 'top bottom', end: 'top 25%', scrub: true } });
      show(card); // revealed only once its clipped starting state is applied
      if (img) gsap.fromTo(img, { scale: 1.25 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: true } });
    });

    $$('[data-parallax]').forEach((el) => {
      const amt = parseFloat(el.dataset.parallax) || -8;
      gsap.fromTo(el, { yPercent: amt }, { yPercent: -amt, ease: 'none', scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } });
    });

    // Service process steps highlight as they cross the viewport centre.
    $$('[data-steps] .step').forEach((step) => {
      ScrollTrigger.create({ trigger: step, start: 'top 60%', end: 'bottom 40%', toggleClass: 'is-active' });
      gsap.from(step, { y: 40, autoAlpha: 0, duration: 1.1, ease: EASE, scrollTrigger: { trigger: step, start: 'top 90%', once: true } });
    });
  }

  // ---- Home-specific scenes -------------------------------------------------------------------------
  function homeScenes() {

    // Logo marquee: an infinite CSS loop (see "Logo marquee" in main.css), no JavaScript needed.

    // Card stacks: the pinned section recedes (scales, rounds, dims) as the next one covers it.
    $$('[data-stack]').forEach((stack) => {
      const base = $('[data-stack-base]', stack);
      const card = $('.stack__card', stack);
      gsap.fromTo(base, { scale: 1, borderRadius: 0, '--stack-dim': 0 }, {
        scale: 0.94, borderRadius: 28, '--stack-dim': 0.45, ease: 'none',
        scrollTrigger: { trigger: card, start: 'top bottom', end: 'top top', scrub: true },
      });
    });

    // Stacking work cards: the card underneath recedes as the next one slides over it.
    // Each .works__list is an independent stack (home has one; the portfolio has one per tab).
    $$('.works__list').forEach((list) => {
    const works = $$('[data-work]', list);
    works.forEach((w, i) => {
      const card = $('.work__card', w);
      const pill = $('.work__pill', w);
      const sides = $$('.work__side', w);
      gsap.from(pill, { y: -16, autoAlpha: 0, duration: 1, ease: EASE, scrollTrigger: { trigger: w, start: 'top 75%', once: true } });
      const next = works[i + 1];
      if (next) {
        // Explicit start value: tweening filter from "none" starts at brightness(0) (black flash).
        gsap.fromTo(card, { scale: 1, filter: 'brightness(1)' }, { scale: 0.92, filter: 'brightness(0.55)', ease: 'none', scrollTrigger: { trigger: next, start: 'top bottom', end: 'top 128px', scrub: true } });
      }
    });

    // Side labels: every card's labels sit in the same pinned spot, so they must hand over one at a
    // time. Visibility is computed every frame from the cards' live on-screen positions (not from
    // trigger offsets measured once), so it can't drift out of sync after a resize, a reload
    // mid-page or late-loading content.
    //   out (card i): fades as the next card approaches — done while it is still 40% of a viewport away
    //   in  (card i): appears only once card i is within 32% of a viewport of its pinned position
    // The gap between 40% and 32% guarantees two cards' labels are never visible together.
    if (works.length) {
      const sideSets = works.map((w) => $$('.work__side', w));
      const clamp01 = (v) => Math.min(1, Math.max(0, v));
      const smooth = (t) => t * t * (3 - 2 * t);
      const update = () => {
        const vh = window.innerHeight;
        const pinTop = parseFloat(getComputedStyle(works[0]).top) || 128;
        const tops = works.map((w) => w.getBoundingClientRect().top - pinTop); // 0 when pinned
        works.forEach((w, i) => {
          const inP = i === 0
            ? clamp01((vh * 0.92 - tops[0]) / (vh * 0.25)) // first card: reveal as the section enters
            : clamp01((vh * 0.32 - tops[i]) / (vh * 0.22));
          const outP = i < works.length - 1 ? clamp01((vh * 0.62 - tops[i + 1]) / (vh * 0.22)) : 0;
          const a = smooth(inP) * (1 - smooth(outP));
          const y = 14 * (1 - smooth(inP)) - 14 * smooth(outP);
          sideSets[i].forEach((s) => { s.style.opacity = a.toFixed(3); s.style.visibility = a < 0.01 ? 'hidden' : 'visible'; s.style.transform = `translateY(${y.toFixed(1)}px)`; });
        });
      };
      ScrollTrigger.create({
        trigger: list, start: 'top bottom', end: 'bottom top',
        onToggle: (s) => (s.isActive ? gsap.ticker.add(update) : gsap.ticker.remove(update)),
        onRefresh: update,
      });
      update();
    }
    });

    // Services rows: content rises in as each row arrives.
    $$('.svc-row').forEach((row) => {
      gsap.from(row.querySelectorAll('.svc-row__title, .tags .tag, .svc-row .btn, .svc-row__thumb, .svc-row__desc'), {
        y: 26, autoAlpha: 0, duration: 1, stagger: 0.035, ease: EASE, scrollTrigger: { trigger: row, start: 'top 85%', once: true },
      });
    });
    $$('.svc__crosses svg').forEach((c, i) => gsap.from(c, { rotate: -90, scale: 0, duration: 1.2, delay: i * 0.08, ease: EASE, scrollTrigger: { trigger: c, start: 'top 90%', once: true } }));

    // Bento: wireframe builds, chart grows, posts stack in, history list, timeline bars.
    const wire = $('[data-wire]');
    if (wire) {
      const tl = gsap.timeline({ scrollTrigger: { trigger: wire, start: 'top 85%', once: true } });
      tl.from(wire, { y: 30, autoAlpha: 0, duration: 1, ease: EASE })
        .from($$('.wire__blk', wire), { scaleX: 0, duration: 0.9, stagger: 0.08, ease: EASE }, 0.3)
        .from($('.wire__img', wire), { clipPath: 'inset(0 0 100% 0)', duration: 1.1, ease: 'expo.inOut' }, 0.4)
        .from($('.wire__cursor', wire), { x: 60, y: 40, autoAlpha: 0, duration: 1, ease: 'power3.out' }, 0.9);
      gsap.to($('.wire__cursor', wire), { x: -90, y: 14, duration: 2.4, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 2 });
    }
    const chart = $('[data-chart]');
    if (chart) gsap.from($$('i', chart), { scaleY: 0, duration: 1.4, stagger: 0.06, ease: EASE, scrollTrigger: { trigger: chart, start: 'top 85%', once: true } });
    const posts = $('[data-posts]');
    if (posts) {
      gsap.from($$('.post', posts), { y: 50, autoAlpha: 0, scale: 0.96, duration: 1.1, stagger: 0.14, ease: EASE, scrollTrigger: { trigger: posts, start: 'top 85%', once: true } });
      $$('.post', posts).forEach((p, i) => gsap.to(p, { y: i % 2 ? 4 : -4, duration: 2.6 + i * 0.4, ease: 'sine.inOut', yoyo: true, repeat: -1 }));
    }
    const timeline = $('[data-timeline]');
    if (timeline) {
      const bars = $$('.timeline__bar', timeline);
      gsap.from(bars, { scaleX: 0, autoAlpha: 0, duration: 1.2, stagger: 0.14, ease: 'expo.inOut', scrollTrigger: { trigger: timeline, start: 'top 80%', once: true } });
    }
    $$('[data-bento]').forEach((b) => gsap.from(b, { y: 60, autoAlpha: 0, duration: 1.3, ease: EASE, scrollTrigger: { trigger: b, start: 'top 92%', once: true } }));

    // Orbit block: gentle entrance
    const orbit = $('.orbit');
    if (orbit) gsap.from(orbit, { scale: 0.7, rotate: -30, autoAlpha: 0, duration: 2, ease: EASE, scrollTrigger: { trigger: orbit, start: 'top 85%', once: true } });
  }

  // ---- Scenes present on every page ------------------------------------------------------------------
  function sharedScenes() {
    // Odometer counters
    // Digit strips are built only when a counter nears the viewport; until then the plain number shows.
    $$('[data-odometer]').forEach((el) => {
      whenNear(el, () => {
        const cols = buildOdometer(el);
        gsap.set(cols, { y: 0 });
        ScrollTrigger.create({
          trigger: el, start: 'top 85%', once: true,
          onEnter: () => cols.forEach((c, i) => gsap.to(c, { y: `${-(10 + Number(c.dataset.digit))}em`, duration: 2 + i * 0.35, ease: 'expo.out', delay: 0.1 * i })),
        });
      });
      gsap.from($('.counter__suffix', el), { scale: 0, duration: 1, ease: 'back.out(2)', delay: 1.2, scrollTrigger: { trigger: el, start: 'top 85%', once: true } });
    });

    // CTA: rocket lifts off as the panel scrolls in
    const cta = $('[data-cta]');
    if (cta) {
      // The 3D loop rises and settles as the panel scrolls into place.
      const vid = $('[data-cta-video]', cta);
      if (vid) gsap.fromTo(vid, { scale: 1.18, yPercent: 10 }, { scale: 1, yPercent: 0, ease: 'none', scrollTrigger: { trigger: cta, start: 'top bottom', end: 'bottom bottom', scrub: true } });
    }

    // Footer wordmark rises letter by letter, each inside its own clipping box (translate only,
    // composited, so the scrub stays smooth).
    const fw = $$('[data-footer-wordmark] .wm-letter > svg');
    if (fw.length) {
      show(fw);
      gsap.from(fw, { yPercent: 105, force3D: true, ease: 'none', stagger: { each: 0.04, from: 'center' }, scrollTrigger: { trigger: '[data-footer-wordmark]', start: 'top bottom', end: 'bottom bottom', scrub: 0.6 } });
    }
    gsap.from($$('.clock'), { y: 40, autoAlpha: 0, duration: 1.1, stagger: 0.1, ease: EASE, scrollTrigger: { trigger: '.clocks', start: 'top 92%', once: true } });
  }
})();
