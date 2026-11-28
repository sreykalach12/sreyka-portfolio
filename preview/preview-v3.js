/* Long-scroll PREVIEW. Reads the same project list as the live site
   (../js/work-projects-v7.js); the About content is copied from
   ../js/main-v31.js (English only, like the live site right now). */
(function () {
  'use strict';

  var ROOT = '../';
  var projects = window.WORK_PROJECTS || [];
  var INITIAL_COUNT = 6;

  var story = [
    { title: 'The Spark', text: "Before code, there was the pencil. I grew up bound to sketchbooks, digital art, and the quiet thrill of creating something from nothing. When it came time to choose a path, logic won, and I chose technology, but the creative drive never left. It was simply waiting." },
    { title: 'The Shift', text: "Technology was a bet on the future. I enrolled in Management Information Systems, driven by a desire to build things that mattered. At the time, I didn't realize it was only the foundation." },
    { title: 'The Friction', text: "Internships and front-end roles brought an unexpected letdown. The work felt less like building and more like assembling: patching together CMS platforms, off-the-shelf templates, and minor customizations. Every project felt pre-boxed. My constant thought: If this were mine, I'd rebuild it from scratch." },
    { title: 'The Craft', text: "That frustration became my leverage. I dove into UI/UX design, pairing rigorous self-study with formal training and high-growth roles. Today, I operate as a creative UI/UX designer, seamlessly bridging product design, brand identity, digital art, and graphic systems." },
  ];
  var experience = [
    { title: 'Creative UI/UX Designer', place: 'Thortok', url: 'https://thortok.com/', years: 'Mar 2025 – Present' },
    { title: 'Visual | Web | Branding Designer', place: 'Vector Studio · Freelance', years: 'Aug 2024 – Present' },
    { title: 'Web Designer | UX/UI', place: 'Apsara Media Services · Full-time', years: 'Feb 2024 – Mar 2025' },
    { title: 'Web designer | Digital Marketing Executive', place: 'Nafih Digital Marketing Agent Co., Ltd · Part-time', years: 'Nov 2021 – Jan 2024' },
    { title: 'Home Monitor', place: "Toutes à l'école · Part-time", years: 'Nov 2020 – Oct 2021' },
  ];
  var education = [
    { title: 'SETEC Institute', place: "Bachelor's degree, Management Information Systems", years: 'Oct 2019 – Present' },
    { title: 'Future.bit Academy', place: 'UI/UX Design Course, Design and Visual Communications', years: 'Apr 2024 – Jun 2024' },
    { title: 'American University of Phnom Penh', place: 'Soft Skill Program', years: '2017' },
    { title: 'Australian Centre for Education (ACE)', place: 'English', years: '2016' },
    { title: "Toutes à l'école", place: 'Khmer, English', years: '2007 – 2019' },
  ];
  var tools = ['Figma', 'Illustrator', 'Photoshop', 'Adobe XD', 'Procreate'];
  var strengths = ['Attention to detail', 'Problem solving', 'Adaptability', 'Creativity'];
  var hobbies = ['Anime & manga', 'Technology research', 'Design & creative books'];
  var socials = [
    { name: 'Behance', icon: 'icon-behance-v2.png', url: 'https://behance.net/sreyka-lach' },
    { name: 'LinkedIn', icon: 'icon-linkedin-v2.png', url: 'https://www.linkedin.com/in/sreykalach' },
    { name: 'Instagram', icon: 'icon-instagram-v2.png', url: 'https://www.instagram.com/hi_iam_meee' },
    { name: 'Telegram', icon: 'icon-telegram-v2.png', url: 'https://t.me/sreykalach' },
  ];

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function $(id) { return document.getElementById(id); }

  /* ---------- work grid with category filters ---------- */
  var filter = 'All';
  var expanded = false;
  var cats = ['All'];
  projects.forEach(function (p) { if (cats.indexOf(p.category) < 0) cats.push(p.category); });
  cats.forEach(function (c) {
    var b = el('button', 'filter', c);
    b.type = 'button';
    b.setAttribute('aria-pressed', String(c === filter));
    b.addEventListener('click', function () {
      filter = c;
      document.querySelectorAll('.filter').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      renderWork();
    });
    $('work-filters').appendChild(b);
  });

  function renderWork() {
    var grid = $('work-grid');
    grid.innerHTML = '';
    var list = projects.filter(function (p) { return filter === 'All' || p.category === filter; });
    var shown = expanded ? list : list.slice(0, INITIAL_COUNT);
    shown.forEach(function (p, i) {
      // opens the project's detail page on the live site
      var a = el('a', 'card project');
      a.href = ROOT + '#work/' + p.id;
      a.style.setProperty('--i', String(i % 2));
      var img = el('div', 'project-img');
      img.style.backgroundImage = 'url("' + ROOT + p.coverImage + '")';
      img.appendChild(el('span', 'chip chip--glass project-cat', p.category));
      a.appendChild(img);
      var meta = el('div', 'project-meta');
      meta.appendChild(el('h3', 'project-title', p.title));
      meta.appendChild(el('span', 'project-sub', [p.client, p.year].filter(Boolean).join(' · ')));
      a.appendChild(meta);
      grid.appendChild(a);
    });
    var more = $('work-more');
    more.parentNode.hidden = list.length <= INITIAL_COUNT;
    more.textContent = expanded ? 'Show fewer' : 'Show all ' + list.length + ' projects';
  }
  $('work-more').addEventListener('click', function () {
    expanded = !expanded;
    renderWork();
    if (!expanded) $('work').scrollIntoView({ behavior: 'smooth' });
  });
  renderWork();

  /* ---------- about ---------- */
  story.forEach(function (s, i) {
    var item = el('article', 'chapter');
    item.appendChild(el('span', 'chapter-num', String(i + 1).padStart(2, '0')));
    var body = el('div');
    body.appendChild(el('h3', 'chapter-title', s.title));
    body.appendChild(el('p', 'chapter-text', s.text));
    item.appendChild(body);
    $('story').appendChild(item);
  });
  function cvList(id, items) {
    items.forEach(function (it) {
      var li = el('li', 'cv-item');
      li.style.setProperty('--i', String($(id).children.length));
      li.appendChild(el('span', 'cv-years', it.years));
      var body = el('div');
      body.appendChild(el('div', 'cv-title', it.title));
      if (it.url) {
        var a = el('a', 'cv-place', it.place);
        a.href = it.url; a.target = '_blank'; a.rel = 'noopener';
        body.appendChild(a);
      } else {
        body.appendChild(el('div', 'cv-place', it.place));
      }
      li.appendChild(body);
      $(id).appendChild(li);
    });
  }
  cvList('experience', experience);
  cvList('education', education);
  function chips(id, items) { items.forEach(function (t) { $(id).appendChild(el('span', 'chip', t)); }); }
  chips('tools', tools);
  chips('strengths', strengths);
  chips('hobbies', hobbies);

  /* ---------- contact ---------- */
  socials.forEach(function (s) {
    var li = el('li');
    var a = el('a', 'social');
    a.href = s.url; a.target = '_blank'; a.rel = 'noopener';
    var img = el('img');
    img.src = ROOT + 'assets/img/' + s.icon; img.alt = '';
    a.appendChild(img);
    a.appendChild(el('span', null, s.name));
    li.appendChild(a);
    $('socials').appendChild(li);
  });
  $('year').textContent = new Date().getFullYear();

  /* ---------- side menu + back-to-top: both follow the scroll ---------- */
  var links = Array.prototype.slice.call(document.querySelectorAll('.rail-link'));
  var sections = links.map(function (l) { return $(l.getAttribute('data-section')); });
  var toTop = $('to-top');
  var ring = $('to-top-ring');
  var railFill = $('rail-fill');
  var hero = $('top');
  var avatar = $('hero-avatar');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var ticking = false;

  function onScroll() {
    ticking = false;
    var y = window.scrollY;
    var max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    var progress = Math.min(1, y / max);

    // which section is in view
    var mark = window.innerHeight * 0.4;
    var current = sections[0];
    sections.forEach(function (s) { if (s.getBoundingClientRect().top <= mark) current = s; });
    if (y >= max - 4) current = sections[sections.length - 1];
    links.forEach(function (l) {
      var on = l.getAttribute('data-section') === current.id;
      l.classList.toggle('is-active', on);
      if (on) l.setAttribute('aria-current', 'true'); else l.removeAttribute('aria-current');
    });
    railFill.style.transform = 'scaleY(' + progress + ')';

    // back-to-top shows once the hero is mostly scrolled past
    toTop.classList.toggle('is-visible', y > window.innerHeight * 0.6);
    ring.style.strokeDashoffset = String(100 - progress * 100);

    // hero parallax: the big name drifts up slower, the avatar slightly faster
    if (!reduceMotion && y < window.innerHeight * 1.2) {
      avatar.style.transform = 'translate3d(0,' + (y * 0.18) + 'px,0) scale(' + (1 + y / 6000) + ')';
    }
  }
  function requestTick() { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }
  window.addEventListener('scroll', requestTick, { passive: true });
  window.addEventListener('resize', requestTick);
  onScroll();

  // hero entrance animation starts once the page has painted
  requestAnimationFrame(function () { document.documentElement.classList.add('hero-ready'); });

  /* ---------- about: chapters follow the scroll both ways ---------- */
  var chapters = Array.prototype.slice.call(document.querySelectorAll('.chapter'));
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    chapters.forEach(function (c) { c.classList.add('chapter--anim'); c.setAttribute('data-from', 'below'); });
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var below = e.boundingClientRect.top > 0;   // is it entering/leaving at the bottom edge?
        e.target.setAttribute('data-from', below ? 'below' : 'above');
        e.target.classList.toggle('is-in', e.isIntersecting);
      });
    }, { threshold: 0.25 });
    chapters.forEach(function (c) { cio.observe(c); });
  }

  /* ---------- gentle reveal on scroll ---------- */
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('.section-head, .project, .cv-card, .cv-item, .about-photo, .contact-text, .contact-img, .work-more').forEach(function (n) {
      n.classList.add('reveal');
      io.observe(n);
    });
    // cards added later by the filters
    new MutationObserver(function () {
      document.querySelectorAll('.project:not(.reveal)').forEach(function (n) { n.classList.add('reveal', 'is-in'); });
    }).observe($('work-grid'), { childList: true });
  }
})();
