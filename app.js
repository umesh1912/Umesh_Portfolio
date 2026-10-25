// Renders the portfolio pages from data.js. Routes: #/ (home), #/case/1..3, #/about.
(() => {
  // Testimonials and Writing hold placeholder copy; switch on once real content is in data.js.
  const SHOW_PLACEHOLDERS = false;
  const STORE_KEY = 'ua-portfolio-v4';
  const PAGE_SIZE = 9;

  const app = document.getElementById('app');
  const themeBtn = document.getElementById('theme-toggle');
  const state = { gFilter: 'All', gLimit: PAGE_SIZE };
  let pendingAnchor = null;

  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const map = (list, fn) => list.map(fn).join('');

  // ---------- Theme ----------
  function readStore() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY) || '{}'); } catch (e) { return {}; }
  }
  function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    themeBtn.textContent = theme === 'dark' ? '☀ Light' : '☾ Dark';
    try { localStorage.setItem(STORE_KEY, JSON.stringify({ ...readStore(), theme })); } catch (e) {}
  }
  setTheme(readStore().theme || 'light');
  themeBtn.addEventListener('click', () => setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));

  // ---------- Routing ----------
  function parseRoute() {
    const m = location.hash.match(/^#\/(case\/(\d+)|about)?\/?$/);
    if (!m || !m[1]) return { page: 'home' };
    if (m[1] === 'about') return { page: 'about' };
    const idx = Number(m[2]) - 1;
    return CASES[idx] ? { page: 'case', caseIdx: idx } : { page: 'home' };
  }
  let lastCaseIdx = 0;

  function scrollToAnchor(anchor, smooth) {
    const el = anchor && document.getElementById(anchor);
    window.scrollTo({ top: el ? el.getBoundingClientRect().top + window.scrollY - document.querySelector('.site-header').offsetHeight : 0, behavior: el && smooth ? 'smooth' : 'instant' });
  }

  // Navigate to a hash route, optionally scrolling to a section once it is rendered.
  function go(hash, anchor) {
    const samePage = location.hash === hash || (hash === '#/' && parseRoute().page === 'home');
    if (samePage) { scrollToAnchor(anchor, true); return; }
    pendingAnchor = anchor || null;
    location.hash = hash;
  }

  const NAV_TARGETS = {
    work: () => go('#/', 'work'),
    cases: () => go('#/case/' + (lastCaseIdx + 1)),
    process: () => go('#/', 'process'),
    services: () => go('#/', 'services'),
    about: () => go('#/about'),
    contact: () => scrollToAnchor('contact', true)
  };
  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-go]');
    if (btn) NAV_TARGETS[btn.dataset.go]();
  });

  // ---------- Shared pieces ----------
  const sectionHead = (eyebrow, title, extra = '', mod = '') => `
    <div class="section-head ${mod}">
      <div>
        <div class="eyebrow">${eyebrow}</div>
        <h2 class="section-title">${title}</h2>
      </div>
      ${extra}
    </div>`;
  const tags = (list, cls = 'tag') => list.length ? `<div class="tags">${map(list, t => `<span class="${cls}">${esc(t)}</span>`)}</div>` : '';

  // ---------- Home ----------
  function marquee() {
    const item = c => `<span class="marquee-item">${LOGO_DOMAINS[c]
      ? `<img src="https://www.google.com/s2/favicons?domain=${LOGO_DOMAINS[c]}&amp;sz=64" alt="" width="28" height="28" onerror="this.style.display='none'">`
      : `<span class="marquee-initial">${esc(c[0])}</span>`}${esc(c)}</span>`;
    return `<div class="marquee-track">${map([...CLIENTS, ...CLIENTS], item)}</div>`;
  }

  function gallery() {
    const list = ORDER.filter(g => state.gFilter === 'All' || g.type === state.gFilter);
    const shown = list.slice(0, state.gLimit);
    const remaining = list.length - shown.length;
    return `
      <div class="gallery">${map(shown, g => `
        <a class="shot" href="${g.src}" target="_blank" rel="noopener">
          <div class="media shot-media">
            <img src="${g.src}" alt="${esc(g.title)}" loading="lazy">
            <div class="shot-cta">View project ↗</div>
          </div>
          <div class="shot-caption">
            <span class="shot-title">${esc(g.title)}</span>
            <span class="shot-type">${esc(g.type)}</span>
          </div>
        </a>`)}
      </div>
      ${remaining > 0 ? `<div class="more-wrap"><button class="more-btn" data-more>Show more (${remaining})</button></div>` : ''}`;
  }
  function filterChips() {
    return map(GTYPES, t => {
      const count = t === 'All' ? ORDER.length : ORDER.filter(g => g.type === t).length;
      return `<button class="chip${state.gFilter === t ? ' is-active' : ''}" data-filter="${esc(t)}">${GLABEL[t]} <small>${count}</small></button>`;
    });
  }
  function refreshGallery() {
    document.getElementById('gallery-filters').innerHTML = filterChips();
    document.getElementById('gallery-slot').innerHTML = gallery();
  }

  function homePage() {
    return `
    <section class="section">
      <div class="hero">
        <div class="hero-copy">
          <div>
            <div class="status-pill">Available for new projects · Surat, India</div>
            <h1 class="hero-title">I design products that make complex work feel <em>effortless.</em></h1>
            <p class="hero-text">Hi, I'm Umesh, a senior product designer with 13+ years across healthcare, fintech, legal tech and enterprise. I blend deep UX craft with AI-powered workflows to ship thoughtful products, faster.</p>
          </div>
          <div class="hero-actions">
            <button class="pill-btn" data-go="work">See my work</button>
            <a class="pill-btn pill-btn--outline" href="Umesh-Anghan-CV.pdf" download="Umesh-Anghan-CV.pdf">Download CV</a>
          </div>
        </div>
        <div class="portrait">
          <img src="img/umesh.jpg" alt="Umesh D. Anghan">
          <div class="portrait-tags"><span>UX Strategy</span><span>Design Systems</span><span>AI Workflows</span></div>
        </div>
      </div>
      <div class="cells cells--row stats">
        ${map([['13+', 'Years of experience'], ['50+', 'Projects delivered'], ['25+', 'Companies served'], ['4+', 'Industries']],
          ([v, l]) => `<div class="stat"><div class="stat-value">${v}</div><div class="stat-label">${l}</div></div>`)}
      </div>
    </section>

    <section class="section clients">
      <div class="clients-label label">Trusted by</div>
      <div class="marquee">${marquee()}</div>
    </section>

    <section id="cases" class="section">
      ${sectionHead('01 · Case studies', 'Deep dives into problems worth solving',
        '<p class="section-note">From research to measurable results, in healthcare and life-science products.</p>', 'section-head--split')}
      ${map(CASES, (c, i) => `
        <a class="case-card" href="#/case/${i + 1}">
          <div class="case-card-body">
            <div class="case-card-meta label"><span><b>${c.num}</b> · ${esc(c.category)}</span><span>${esc(c.duration)}</span></div>
            <h3 class="case-card-title">${esc(c.title)}</h3>
            <p class="case-card-text">${esc(c.summary)}</p>
            <div class="metric-pair">${map(c.metrics.slice(0, 2), m => `
              <div class="metric-soft"><div class="metric-soft-value">${esc(m.v)}</div><div class="metric-soft-label">${esc(m.l)}</div></div>`)}
            </div>
            <div class="case-card-cta">Read case study →</div>
          </div>
          <div class="case-card-media"><div class="media"><img src="${COVERS[i]}" alt="${esc(c.title)} cover" loading="lazy"></div></div>
        </a>`)}
    </section>

    <section id="work" class="section">
      ${sectionHead('02 · Selected work', 'Websites, apps &amp; visual design',
        '<div class="filters" id="gallery-filters"></div>', 'section-head--split section-head--tight')}
      <div id="gallery-slot"></div>
      <div class="figma-list">
        <div><div class="eyebrow eyebrow--subtle">More in Figma</div><div class="figma-list-sub">18 product files and 4 live sites</div></div>
        <div class="tags">${map(WORK, w => `
          <a class="figma-link" href="${esc(w.href || '#')}" target="_blank" rel="noopener">${esc(w.title)} <span>${esc(w.category)}</span></a>`)}
        </div>
      </div>
    </section>

    <section id="services" class="section">
      ${sectionHead('03 · Services', 'How I can help your team')}
      <div class="cells services">${map(SERVICES, s => `
        <div class="service">
          <span class="service-num">${s.n}</span>
          <h3>${esc(s.title)}</h3>
          <p>${esc(s.body)}</p>
          ${tags(s.tags)}
        </div>`)}
      </div>
    </section>

    <section id="process" class="section">
      ${sectionHead('04 · Process', 'Five steps, with AI speeding up the slow parts')}
      <div class="cells steps">${map(PROCESS, s => `
        <div class="step">
          <span class="step-num">${s.n}</span>
          <div class="step-title">${esc(s.title)}</div>
          <p>${esc(s.body)}</p>
          <div class="step-tools">${esc(s.tools)}</div>
        </div>`)}
      </div>
    </section>

    ${SHOW_PLACEHOLDERS ? `
    <section id="testimonials" class="section">
      ${sectionHead('05 · Kind words', 'What collaborators say')}
      <div class="cells quotes">${map(TESTIMONIALS, t => `
        <figure class="quote">
          <span class="quote-mark">“</span>
          <blockquote>${esc(t.quote)}</blockquote>
          <figcaption><b>${esc(t.name)}</b><span>${esc(t.role)}</span></figcaption>
        </figure>`)}
      </div>
    </section>
    <section id="writing" class="section">
      ${sectionHead('06 · Writing &amp; talks', 'Notes on AI-augmented design',
        '<a href="https://medium.com/@anghanumeshd8" target="_blank" rel="noopener" style="font:700 14px var(--sans)">All articles on Medium ↗</a>', 'section-head--split section-head--tight')}
      ${map(WRITING, w => `
        <a class="writing-row" href="https://medium.com/@anghanumeshd8" target="_blank" rel="noopener">
          <span class="label">${esc(w.type)}</span>
          <span class="writing-title">${esc(w.title)}</span>
          <span class="writing-arrow">↗</span>
        </a>`)}
    </section>` : ''}`;
  }

  // ---------- Case study ----------
  function casePage(idx) {
    const cs = CASES[idx];
    const next = CASES[(idx + 1) % CASES.length];
    return `
    <div class="case-tabs">
      <button class="case-tab case-tab--back" data-go-cases>← All work</button>
      ${map(CASES, (c, i) => `<a class="case-tab${i === idx ? ' is-active' : ''}" href="#/case/${i + 1}">${c.num} ${esc(c.title)}</a>`)}
    </div>
    <section class="page-intro">
      <div class="eyebrow">Case study ${cs.num} · ${esc(cs.category)}</div>
      <h1 class="page-title">${esc(cs.title)}</h1>
      <p class="page-lede">${esc(cs.summary)}</p>
    </section>
    <section class="cells cells--row facts">
      ${map([['Role', cs.role], ['Duration', cs.duration], ['Platform', cs.platform], ['Tools', cs.tools]],
        ([l, v]) => `<div class="fact"><div class="label">${l}</div><div class="fact-value">${esc(v)}</div></div>`)}
    </section>
    <div class="case-hero"><div class="media"><img src="${COVERS[idx]}" alt="${esc(cs.title)}"></div></div>
    <section class="cells cells--row metrics">
      ${map(cs.metrics, m => `<div class="metric"><div class="metric-value">${esc(m.v)}</div><div class="metric-label">${esc(m.l)}</div></div>`)}
    </section>
    <section class="split-3">
      <div class="problem-label eyebrow">The problem</div>
      <p class="problem-text span-2">${esc(cs.problem)}</p>
    </section>
    ${map(cs.phases, ph => `
    <article class="split-3">
      <div class="phase-side">
        <div class="phase-head"><span class="step-num">${ph.n}</span><span class="eyebrow eyebrow--subtle">${esc(ph.label)}</span></div>
        <h3 class="phase-title">${esc(ph.title)}</h3>
        <div class="phase-stats">${map(ph.stats, st => `
          <div class="phase-stat"><div class="phase-stat-value">${esc(st.v)}</div><div class="phase-stat-label">${esc(st.l)}</div></div>`)}
        </div>
      </div>
      <div class="phase-body span-2">
        <p>${esc(ph.body)}</p>
        ${tags(ph.tags, 'tag tag--outline')}
      </div>
    </article>`)}
    <a class="next-case" href="#/case/${((idx + 1) % CASES.length) + 1}">
      <div class="eyebrow">Next case study →</div>
      <div class="next-case-title">${esc(next.title)}</div>
    </a>`;
  }

  // ---------- About ----------
  function aboutPage() {
    return `
    <section class="hero" style="border-bottom:1px solid var(--line)">
      <div class="about-copy">
        <div class="eyebrow">About me</div>
        <h1 class="about-title">Designing AI-powered products people <em>love</em> to use.</h1>
        <p>I'm Umesh D. Anghan, a senior product designer based in Surat, India. I've spent 13+ years shaping digital products across healthcare, fintech, legal tech and enterprise.</p>
        <p>These days I pair deep UX craft with Claude.ai, Figma Make, Lovable and prompt engineering, so products get built faster without losing their human feel. When I'm not designing, I'm usually e-painting or teaching and training other designers.</p>
        <div class="about-facts">
          ${map([['Based in', 'Surat, India'], ['Languages', 'English, Hindi, Gujarati'], ['Degree', 'B.Tech, Computer Eng.']],
            ([l, v]) => `<div><div class="label">${l}</div><div class="about-fact-value">${v}</div></div>`)}
        </div>
      </div>
      <div class="portrait"><img src="img/umesh.jpg" alt="Umesh D. Anghan"></div>
    </section>

    <section class="section">
      ${sectionHead('Experience', 'Where I\'ve made an impact', '', 'section-head--tight')}
      ${map(EXPERIENCE, e => `
      <article class="job">
        <div class="job-side">
          <span class="job-dates">${esc(e.dates)}</span>
          ${e.current ? '<span class="badge">CURRENT</span>' : ''}
          <h3 class="job-company">${esc(e.company)}</h3>
          <div class="job-role">${esc(e.role)}</div>
        </div>
        <div class="job-body span-2">
          <ul>${map(e.points, p => `<li>${esc(p)}</li>`)}</ul>
          ${tags(e.tags)}
          ${e.project ? `<div class="job-link"><a href="${esc(e.href)}" target="_blank" rel="noopener">${esc(e.project)}</a></div>` : ''}
        </div>
      </article>`)}
    </section>

    <section class="two-col">
      <div>
        <div class="col-head eyebrow">Toolkit</div>
        <div class="cells tools">${map(TOOLS, t => `<div class="tool"><b>${esc(t.name)}</b><span>${esc(t.use)}</span></div>`)}</div>
      </div>
      <div class="edu-col">
        <div class="col-head eyebrow">Education</div>
        ${map(EDUCATION, ed => `
        <div class="edu">
          <div><div class="edu-degree">${esc(ed.degree)}</div><div class="edu-school">${esc(ed.school)}</div></div>
          <div class="edu-meta"><div>${esc(ed.years)}</div><b>${esc(ed.score)}</b></div>
        </div>`)}
        <div class="cv-wrap"><a class="pill-btn pill-btn--outline" href="Umesh-Anghan-CV.pdf" download="Umesh-Anghan-CV.pdf">Download full CV</a></div>
      </div>
    </section>`;
  }

  // ---------- Render ----------
  const NAV_ACTIVE = { home: 'work', case: 'cases', about: 'about' };

  function render() {
    const route = parseRoute();
    if (route.page === 'case') lastCaseIdx = route.caseIdx;

    if (route.page === 'case') {
      app.innerHTML = casePage(route.caseIdx);
      document.title = CASES[route.caseIdx].title + ' · Umesh Anghan';
    } else if (route.page === 'about') {
      app.innerHTML = aboutPage();
      document.title = 'About · Umesh Anghan';
    } else {
      app.innerHTML = homePage();
      refreshGallery();
      document.title = 'Umesh Anghan · Product Designer';
    }

    document.querySelectorAll('.nav-btn').forEach(b => b.classList.toggle('is-active', b.dataset.go === NAV_ACTIVE[route.page]));

    const anchor = pendingAnchor;
    pendingAnchor = null;
    requestAnimationFrame(() => scrollToAnchor(anchor, true));
  }

  app.addEventListener('click', e => {
    const chip = e.target.closest('[data-filter]');
    if (chip) { state.gFilter = chip.dataset.filter; state.gLimit = PAGE_SIZE; refreshGallery(); return; }
    if (e.target.closest('[data-more]')) { state.gLimit += PAGE_SIZE; refreshGallery(); return; }
    if (e.target.closest('[data-go-cases]')) go('#/', 'cases');
  });

  window.addEventListener('hashchange', render);
  render();
})();
