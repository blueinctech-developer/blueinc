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
  const canAnimate = !!(gsap && ScrollTrigger && SplitText) && !reduced;
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

  // ---- Mobile menu ---------------------------------------------------------------
  const menu = $('[data-menu]');
  const menuBtn = $('[data-menu-open]');
  let menuTl = null;
  function buildMenuTl() {
    const sheet = $('.menu__sheet', menu);
    const items = $$('[data-menu-item]', menu);
    return gsap.timeline({ paused: true })
      .to($('.menu__bg', menu), { opacity: 1, duration: 0.4, ease: 'power2.out' }, 0)
      .fromTo(sheet, { clipPath: 'inset(0% 0% 100% 0% round 12px)' }, { clipPath: 'inset(0% 0% 0% 0% round 12px)', duration: 0.8, ease: 'expo.inOut' }, 0)
      .fromTo(items, { y: 28, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.05, ease: EASE }, 0.35);
  }
  function openMenu() {
    menu.classList.add('is-open');
    menuBtn.setAttribute('aria-expanded', 'true');
    lockScroll(true);
    if (canAnimate) { menuTl = menuTl || buildMenuTl(); menuTl.timeScale(1).play(); }
    setTimeout(() => $('.menu__close', menu).focus(), 50);
  }
  function closeMenu() {
    menuBtn.setAttribute('aria-expanded', 'false');
    lockScroll(false);
    const done = () => { menu.classList.remove('is-open'); menuBtn.focus(); };
    if (canAnimate && menuTl) { menuTl.timeScale(1.6).reverse(); menuTl.eventCallback('onReverseComplete', done); }
    else done();
  }
  if (menu && menuBtn) {
    menuBtn.addEventListener('click', openMenu);
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
    window.matchMedia('(min-width: 992px)').addEventListener('change', (m) => { if (m.matches && menu.classList.contains('is-open')) closeMenu(); });
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
  const dialog = $('#quote-dialog');
  document.addEventListener('click', (e) => {
    const opener = e.target.closest('[data-open-quote]');
    if (!opener || !dialog) return;
    e.preventDefault();
    const type = opener.getAttribute('data-project');
    const sel = $('select[name="project"]', dialog);
    if (sel && type) sel.value = type;
    if (menu && menu.classList.contains('is-open')) closeMenu();
    if (typeof dialog.showModal === 'function') dialog.showModal(); else dialog.setAttribute('open', '');
    lockScroll(true);
  });
  if (dialog) {
    dialog.addEventListener('close', () => lockScroll(false));
    dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });
    $$('[data-close-dialog]', dialog).forEach((b) => b.addEventListener('click', () => dialog.close()));
  }

  // ---- Forms ---------------------------------------------------------------------------
  const cfg = window.BLUEINC_CONFIG || {};
  $$('form[data-form]').forEach((form) => {
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
  });

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
  $$('[data-autovideo], [data-reel-video]').forEach((v) => videoIO.observe(v));

  // Showreel play/pause control (WCAG 2.2.2: moving content must be pausable)
  const reelVideo = $('[data-reel-video]');
  const reelToggle = $('[data-reel-toggle]');
  if (reelVideo && reelToggle) {
    if (reduced) reelVideo.dataset.userPaused = '1';
    const sync = () => {
      const paused = reelVideo.paused;
      reelToggle.classList.toggle('is-paused', paused);
      reelToggle.setAttribute('aria-label', paused ? 'Play showreel' : 'Pause showreel');
    };
    reelToggle.addEventListener('click', () => {
      if (reelVideo.paused) { delete reelVideo.dataset.userPaused; reelVideo.play().catch(() => {}); }
      else { reelVideo.dataset.userPaused = '1'; reelVideo.pause(); }
    });
    reelVideo.addEventListener('play', sync);
    reelVideo.addEventListener('pause', sync);
    sync();
  }

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

  // ---- Odometer markup (static fallback keeps the plain number) -------------------------------
  function buildOdometer(el) {
    const value = String(el.dataset.odometer);
    const holder = $('[data-odo-digits]', el);
    holder.innerHTML = value.split('').map((d) => `<span class="odo"><span class="odo__col" data-digit="${d}">${Array.from({ length: 20 }, (_, i) => `<span>${i % 10}</span>`).join('')}</span></span>`).join('');
    return $$('.odo__col', holder);
  }

  if (!canAnimate) return;

  /* =====================================================================
     Motion (GSAP + ScrollTrigger + SplitText)
     ===================================================================== */
  const show = (els) => gsap.set(els, { visibility: 'visible' });

  document.fonts.ready.then(() => {
    intro();
    taglines();
    rotator();
    reveals();
    homeScenes();
    sharedScenes();
    ScrollTrigger.refresh();
  });

  // ---- Page-load choreography ------------------------------------------------------------------
  function intro() {
    const tl = gsap.timeline({ defaults: { ease: EASE } });
    // Elements are hidden by CSS until this point, so nothing flashes before the intro starts.
    tl.fromTo('.navbar__bar', { yPercent: -140, visibility: 'visible' }, { yPercent: 0, duration: 1.2 }, 0);

    const letters = $$('[data-hero-wordmark] .wm-letter');
    if (letters.length) {
      show(letters);
      tl.from(letters, {
        scaleY: 0,
        transformOrigin: (i) => (i % 3 === 1 ? '50% 0%' : i % 3 === 2 ? '50% 50%' : '50% 100%'),
        duration: 1.3,
        ease: 'expo.inOut',
        stagger: { each: 0.06, from: 'random' },
      }, 0.1);
      const tabs = $$('.hero__tab');
      show(tabs);
      tl.from(tabs, { y: 24, autoAlpha: 0, duration: 1, stagger: 0.08 }, 0.75);
      const reel = $('[data-reel]');
      if (reel) {
        gsap.set(reel, { clipPath: 'inset(48% 22% 0% 22% round 28px)', visibility: 'visible' });
        tl.to(reel, { clipPath: 'inset(0% 0% 0% 0% round 28px)', duration: 1.6, ease: 'expo.inOut', clearProps: 'clipPath' }, 0.45);
        tl.fromTo('[data-reel-img]', { scale: 1.25, transformOrigin: '50% 0%' }, { scale: 1, duration: 2, ease: 'expo.out' }, 0.45);
        tl.from('.reel__meta > *', { y: 20, autoAlpha: 0, duration: 1, stagger: 0.1 }, 1.4);
      }
    }

    const crumbs = $$('.page-hero [data-intro]');
    const h1 = $('[data-intro-lines]');
    if (h1) {
      SplitText.create(h1, {
        type: 'lines', mask: 'lines', linesClass: 'split-line', autoSplit: true,
        onSplit(self) {
          show(h1);
          return gsap.from(self.lines, { yPercent: 115, duration: 1.3, stagger: 0.09, ease: EASE, delay: 0.25 });
        },
      });
    }
    if (crumbs.length) { show(crumbs); tl.from(crumbs, { y: 24, autoAlpha: 0, duration: 1.1, stagger: 0.1 }, 0.55); }
  }

  // ---- Navbar tagline cycle (char roll, staggered) ---------------------------------------------
  function taglines() {
    const wrap = $('[data-taglines]');
    if (!wrap) return;
    const blocks = $$('span', wrap).filter((s) => s.parentElement === wrap);
    const sets = blocks.map((el) => {
      const chars = SplitText.create(el, { type: 'chars', charsClass: 'split-char' }).chars;
      gsap.set(el, { opacity: 1 });
      gsap.set(chars, { yPercent: 110, opacity: 0 });
      return chars;
    });
    // First phrase rolls in once; then a seamless master loop hands each phrase to the next
    // (out upward, next in from below). The loop starts and ends with phrase 0 at rest.
    const HOLD = 2.4;
    const enter = { yPercent: 0, opacity: 1, stagger: 0.018, duration: 0.55, ease: 'power3.out' };
    gsap.to(sets[0], { ...enter, delay: 0.9 });
    const master = gsap.timeline({ repeat: -1, delay: 0.9 + 0.55 + 0.3 });
    sets.forEach((chars, i) => {
      const nextChars = sets[(i + 1) % sets.length];
      master
        .to(chars, { yPercent: -110, opacity: 0, stagger: 0.012, duration: 0.45, ease: 'power3.in' }, `+=${HOLD}`)
        .fromTo(nextChars, { yPercent: 110, opacity: 0 }, { ...enter, immediateRender: false }, '-=0.15');
    });
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
  function reveals() {
    $$('[data-reveal="lines"]').forEach((el) => {
      SplitText.create(el, {
        type: 'lines', mask: 'lines', linesClass: 'split-line', autoSplit: true,
        onSplit(self) {
          show(el);
          return gsap.from(self.lines, { yPercent: 115, duration: 1.2, stagger: 0.08, ease: EASE, scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
        },
      });
    });

    $$('[data-reveal="words"]').forEach((el) => {
      SplitText.create(el, {
        type: 'words', wordsClass: 'split-word', autoSplit: true,
        onSplit(self) {
          return gsap.fromTo(self.words, { opacity: 0.14 }, { opacity: 1, stagger: 0.1, ease: 'none', scrollTrigger: { trigger: el, start: 'top 82%', end: 'bottom 55%', scrub: true } });
        },
      });
    });

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
    // Reel parallax after intro
    const reelImg = $('[data-reel-img]');
    if (reelImg) {
      gsap.to(reelImg, { yPercent: -8, ease: 'none', scrollTrigger: { trigger: '[data-reel]', start: 'top top', end: 'bottom top', scrub: true } });
    }

    // Client logo marquee (seamless loop; slows on hover)
    const mq = $('[data-marquee]');
    if (mq) {
      const track = $('.marquee__track', mq);
      Array.from(track.children).forEach((c) => { const k = c.cloneNode(true); k.setAttribute('aria-hidden', 'true'); $$('img', k).forEach((i) => (i.alt = '')); track.appendChild(k); });
      const loop = gsap.to(track, { xPercent: -50, ease: 'none', duration: 60, repeat: -1 });
      mq.addEventListener('mouseenter', () => gsap.to(loop, { timeScale: 0.15, duration: 0.8 }));
      mq.addEventListener('mouseleave', () => gsap.to(loop, { timeScale: 1, duration: 0.8 }));
      ScrollTrigger.create({ trigger: mq, start: 'top bottom', end: 'bottom top', onToggle: (s) => (s.isActive ? loop.play() : loop.pause()) });
      gsap.from($$('.logo-card', track).slice(0, 8), { y: 40, autoAlpha: 0, duration: 1.2, stagger: 0.06, ease: EASE, scrollTrigger: { trigger: mq, start: 'top 90%', once: true } });
    }

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
    $$('[data-odometer]').forEach((el) => {
      const cols = buildOdometer(el);
      gsap.set(cols, { y: 0 });
      ScrollTrigger.create({
        trigger: el, start: 'top 85%', once: true,
        onEnter: () => cols.forEach((c, i) => gsap.to(c, { y: `${-(10 + Number(c.dataset.digit))}em`, duration: 2 + i * 0.35, ease: 'expo.out', delay: 0.1 * i })),
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

    // Footer wordmark rises letter by letter
    const fw = $$('[data-footer-wordmark] .wm-letter');
    if (fw.length) {
      show(fw);
      gsap.from(fw, { y: 320, ease: 'none', stagger: { each: 0.06, from: 'center' }, scrollTrigger: { trigger: '[data-footer-wordmark]', start: 'top bottom', end: 'bottom bottom', scrub: 1 } });
    }
    gsap.from($$('.clock'), { y: 40, autoAlpha: 0, duration: 1.1, stagger: 0.1, ease: EASE, scrollTrigger: { trigger: '.clocks', start: 'top 92%', once: true } });
  }
})();
