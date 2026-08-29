(function () {
  'use strict';

  var IMG = 'assets/img/';

  /* ---------------- DATA ---------------- */

  var homeProjectGroups = {
    big: [
      { name: 'Nomad Coffee App', tag: 'UI/UX Design', desc: 'Mobile ordering & loyalty experience', grad: 'linear-gradient(135deg,#14324a,#2f7a9a)' },
      { name: 'Finance Dashboard', tag: 'UI/UX Design', desc: 'Personal budgeting & insights app', grad: 'linear-gradient(135deg,#1b2a3a,#3a5a7a)' },
      { name: 'Wellness Tracker', tag: 'UI/UX Design', desc: 'Daily habits & mindfulness companion', grad: 'linear-gradient(135deg,#0d2333,#2aaeae)' },
    ],
    small1: [
      { name: 'Aura Skincare', tag: 'Branding', grad: 'linear-gradient(135deg,#4a2f14,#b3792f)' },
      { name: 'Nomad Coffee Identity', tag: 'Branding', grad: 'linear-gradient(135deg,#331f0d,#a86a2a)' },
      { name: 'Studio Mark', tag: 'Branding', grad: 'linear-gradient(135deg,#3a2a1b,#8a5a2a)' },
    ],
    small2: [
      { name: 'Festival Poster', tag: 'Graphic Design', grad: 'linear-gradient(135deg,#3a144a,#9a2f7a)' },
      { name: 'Neon Dreams', tag: 'Digital Art', grad: 'linear-gradient(135deg,#0d2a2a,#1a6a6a)' },
      { name: 'Album Cover Set', tag: 'Graphic Design', grad: 'linear-gradient(135deg,#240d33,#8e2aae)' },
    ],
  };

  var featuredData = [
    { tag: 'UI/UX Design', name: 'Finance App Redesign', grad: 'linear-gradient(135deg,#1b2a3a,#3a5a7a)' },
    { tag: 'Branding & Logo', name: 'Nomad Coffee Identity', grad: 'linear-gradient(135deg,#3a2a1b,#8a5a2a)' },
    { tag: 'Creative / Graphic', name: 'Festival Poster Series', grad: 'linear-gradient(135deg,#2a1b3a,#7a2a5a)' },
    { tag: 'Digital Art', name: 'Neon Dreams', grad: 'linear-gradient(135deg,#0d2a2a,#1a6a6a)' },
  ];

  var workCategories = [
    {
      key: 'uiux', title: 'UI/UX Design', count: 6,
      pieces: [
        { grad: 'linear-gradient(135deg,#1b2a3a,#3a5a7a)' },
        { grad: 'linear-gradient(135deg,#14324a,#2f7a9a)' },
        { grad: 'linear-gradient(135deg,#0d1f33,#4a7fae)' },
      ],
    },
    {
      key: 'branding', title: 'Branding & Logo', count: 6,
      pieces: [
        { grad: 'linear-gradient(135deg,#3a2a1b,#8a5a2a)' },
        { grad: 'linear-gradient(135deg,#4a2f14,#b3792f)' },
        { grad: 'linear-gradient(135deg,#331f0d,#a86a2a)' },
      ],
    },
    {
      key: 'graphic', title: 'Creative / Graphic Design', count: 5,
      pieces: [
        { grad: 'linear-gradient(135deg,#2a1b3a,#7a2a5a)' },
        { grad: 'linear-gradient(135deg,#3a144a,#9a2f7a)' },
        { grad: 'linear-gradient(135deg,#240d33,#8e2aae)' },
      ],
    },
    {
      key: 'art', title: 'Digital Art', count: 5,
      pieces: [
        { grad: 'linear-gradient(135deg,#0d2a2a,#1a6a6a)' },
        { grad: 'linear-gradient(135deg,#14384a,#2f9a8a)' },
        { grad: 'linear-gradient(135deg,#0d2333,#2aaeae)' },
      ],
    },
  ];

  var outerRadii = ['20px 0 0 0', '0 20px 0 0', '0 0 0 20px', '0 0 20px 0'];

  var tools = ['Figma', 'Adobe XD', 'Illustrator', 'Photoshop', 'Procreate'];

  var skillIconSvgs = {
    attention: '<circle cx="12" cy="12" r="3.2"/><path d="M2 12c2.8-5 6.6-7.5 10-7.5S19.2 7 22 12c-2.8 5-6.6 7.5-10 7.5S4.8 17 2 12Z"/>',
    problem: '<path d="M12 4v3M9.5 6l1.2 2.1M14.5 6l-1.2 2.1"/><circle cx="12" cy="13" r="5"/><path d="M9 21h6M10 18h4"/>',
    adapt: '<path d="M4 12a8 8 0 0 1 13.5-5.8L20 8"/><path d="M20 4v4h-4"/><path d="M20 12a8 8 0 0 1-13.5 5.8L4 16"/><path d="M4 20v-4h4"/>',
    creativity: '<path d="M12 3v3M12 9c-3 1-4 4-2 6.5 1 .1.5 1.5.5 2.5h3c0-1 -.5-2.4.5-2.5 2-2.5 1-5.5-2-6.5Z"/><path d="M10.5 20h3"/>',
    sketch: '<path d="M4 20l1-4 12-12 3 3-12 12-4 1Z"/><path d="M14 5l3 3"/>',
  };
  var softSkills = [
    { name: 'Attention to Detail', icon: skillIconSvgs.attention },
    { name: 'Problem Solving', icon: skillIconSvgs.problem },
    { name: 'Adaptability', icon: skillIconSvgs.adapt },
    { name: 'Creativity', icon: skillIconSvgs.creativity },
    { name: 'Sketching', icon: skillIconSvgs.sketch },
  ];

  var personalStory = [
    { title: 'The Spark', text: "Before code, there was the pencil. I grew up bound to sketchbooks, digital art, and the quiet thrill of creating something from nothing. When it came time to choose a path, logic won, and I chose technology, but the creative drive never left. It was simply waiting." },
    { title: 'The Shift', text: "Technology was a bet on the future. I enrolled in Management Information Systems, driven by a desire to build things that mattered. At the time, I didn't realize it was only the foundation." },
    { title: 'The Friction', text: "Internships and front-end roles brought an unexpected letdown. The work felt less like building and more like assembling: patching together CMS platforms, off-the-shelf templates, and minor customizations. Every project felt pre-boxed. My constant thought: If this were mine, I'd rebuild it from scratch." },
    { title: 'The Craft', text: "That frustration became my leverage. I dove into UI/UX design, pairing rigorous self-study with formal training and high-growth roles. Today, I operate as a creative UI/UX designer, seamlessly bridging product design, brand identity, digital art, and graphic systems." },
  ];

  var education = [
    { school: 'SETEC Institute', line: "Bachelor's degree, Management Information Systems", years: 'Oct 2019 – Present' },
    { school: 'Australian Centre for Education (ACE)', line: 'English', years: '2016 – Present' },
    { school: 'Future.bit Academy', line: 'UI/UX Design Course, Design and Visual Communications', years: 'Apr 2024 – Jun 2024' },
    { school: 'American University of Phnom Penh', line: 'Soft Skill Program', years: '2017' },
    { school: "Toutes à l'école", line: 'Khmer, English', years: '2007 – 2019' },
  ];

  var experience = [
    { role: 'Creative UI/UX Designer', place: 'Thortok', url: 'https://thortok.com/', years: 'Mar 2025 – Present' },
    { role: 'Visual | Web | Branding Designer', place: 'Vector Studio · Freelance', years: 'Aug 2024 – Present' },
    { role: 'Web Designer | UX/UI', place: 'Apsara Media Services · Full-time', years: 'Feb 2024 – Mar 2025' },
    { role: 'Web designer | Digital Marketing Executive', place: 'Nafih Digital Marketing Agent Co., Ltd · Part-time', years: 'Nov 2021 – Jan 2024' },
    { role: 'Home Monitor', place: "Toutes à l'école · Part-time", years: 'Nov 2020 – Oct 2021' },
  ];

  var contactSocials = [
    { name: 'Behance', icon: IMG + 'icon-behance.png', handle: 'behance.net/sreyka', url: 'https://behance.net/sreyka-lach' },
    { name: 'LinkedIn', icon: IMG + 'icon-linkedin.png', handle: 'linkedin.com/in/sreykalach', url: 'https://www.linkedin.com/in/sreykalach?utm_source=share_via&utm_content=profile&utm_medium=member_ios' },
    { name: 'Instagram', icon: IMG + 'icon-instagram.png', handle: '@hi_iam_meee', url: 'https://www.instagram.com/hi_iam_meee?igsh=MWR1M3RmcTQ3ejlpdA%3D%3D&utm_source=qr' },
    { name: 'Telegram', icon: IMG + 'icon-telegram.png', handle: 't.me/sreykalach', url: 'https://t.me/sreykalach' },
  ];

  /* ---------------- STATE ---------------- */

  var state = {
    view: 'home',
    featuredIndex: 0,
    homeProjIndices: { big: 0, small1: 0, small2: 0 },
    workIndices: { uiux: 0, branding: 0, graphic: 0, art: 0 },
    contactFormOpen: false,
  };

  /* ---------------- HELPERS ---------------- */

  function el(tag, className, html) {
    var e = document.createElement(tag);
    if (className) e.className = className;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }

  function renderDots(container, count, activeIndex, onPick, small) {
    container.innerHTML = '';
    for (var i = 0; i < count; i++) {
      (function (i) {
        var d = el('button', 'dot' + (i === activeIndex ? ' is-active' : ''));
        d.type = 'button';
        d.setAttribute('aria-label', 'Show item ' + (i + 1));
        d.addEventListener('click', function () { onPick(i); });
        container.appendChild(d);
      })(i);
    }
  }

  /* ---------------- HOME VIEW RENDER ---------------- */

  function renderFeatured() {
    var f = featuredData[state.featuredIndex];
    document.getElementById('featured-bg').style.background = f.grad;
    document.getElementById('featured-tag').textContent = f.tag;
    document.getElementById('featured-name').textContent = f.name;
    renderDots(document.getElementById('featured-dots'), featuredData.length, state.featuredIndex, function (i) {
      state.featuredIndex = i;
      renderFeatured();
    });
  }

  function renderHomeProjCard(key, prefix, isBig) {
    var items = homeProjectGroups[key];
    var idx = state.homeProjIndices[key];
    var item = items[idx];
    var bg = document.getElementById(prefix + '-bg');
    bg.style.background = item.grad;
    if (isBig) {
      document.getElementById(prefix + '-tag').textContent = item.tag;
      document.getElementById(prefix + '-name').textContent = item.name;
      document.getElementById(prefix + '-desc').textContent = item.desc || '';
    } else {
      document.getElementById(prefix + '-name').textContent = item.name;
      document.getElementById(prefix + '-tag').textContent = item.tag;
    }
    renderDots(document.getElementById(prefix + '-dots'), items.length, idx, function (i) {
      state.homeProjIndices[key] = i;
      renderHomeProjCard(key, prefix, isBig);
    });
  }

  function renderHomeTools() {
    var row = document.getElementById('home-tools');
    row.innerHTML = '';
    tools.forEach(function (t) {
      row.appendChild(el('div', 'chip', t));
    });
  }

  function renderHome() {
    renderFeatured();
    renderHomeProjCard('big', 'proj-big', true);
    renderHomeProjCard('small1', 'proj-small1', false);
    renderHomeProjCard('small2', 'proj-small2', false);
    renderHomeTools();
  }

  /* ---------------- WORK VIEW RENDER ---------------- */

  function renderWork() {
    var grid = document.getElementById('work-grid');
    grid.innerHTML = '';
    workCategories.forEach(function (c, ci) {
      var idx = state.workIndices[c.key];
      var card = el('div', 'card card-photo work-card');
      card.style.borderRadius = outerRadii[ci];

      var underlay = el('div', 'photo-underlay');
      underlay.style.background = c.pieces[idx].grad;
      card.appendChild(underlay);

      card.appendChild(el('div', 'photo-scrim photo-scrim--soft'));

      var content = el('div', 'photo-content');
      var top = el('div');
      top.appendChild(el('div', 'proj-title', c.title));
      top.appendChild(el('div', 'proj-desc', c.title + ' — ' + c.count + ' works'));
      content.appendChild(top);

      var dotsWrap = el('div', 'dots');
      content.appendChild(dotsWrap);
      card.appendChild(content);

      grid.appendChild(card);

      renderDots(dotsWrap, c.pieces.length, idx, function (i) {
        state.workIndices[c.key] = i;
        renderWork();
      });
    });
  }

  /* ---------------- ABOUT VIEW RENDER ---------------- */

  function renderTimeline(container, items, mapFn) {
    container.innerHTML = '';
    items.forEach(function (item, i) {
      var notLast = i < items.length - 1;
      var row = el('div', 'timeline-item');
      var dotCol = el('div', 'timeline-dot-col');
      dotCol.appendChild(el('div', 'timeline-dot'));
      if (notLast) dotCol.appendChild(el('div', 'timeline-line'));
      row.appendChild(dotCol);
      row.appendChild(mapFn(item));
      container.appendChild(row);
    });
  }

  function renderAbout() {
    renderTimeline(document.getElementById('personal-story'), personalStory, function (ps) {
      var body = el('div', 'timeline-body');
      body.appendChild(el('div', 'timeline-title', ps.title));
      body.appendChild(el('div', 'timeline-text', ps.text));
      return body;
    });

    renderTimeline(document.getElementById('education'), education, function (e) {
      var body = el('div', 'timeline-body');
      body.appendChild(el('div', 'timeline-title', e.school));
      body.appendChild(el('div', 'timeline-sub', e.line + ' · ' + e.years));
      return body;
    });

    renderTimeline(document.getElementById('experience'), experience, function (ex) {
      var body = el('div', 'timeline-body');
      body.appendChild(el('div', 'timeline-title', ex.role));
      var sub = el('div', 'timeline-sub');
      if (ex.url) {
        var a = el('a', null, ex.place);
        a.href = ex.url;
        a.target = '_blank';
        a.rel = 'noopener';
        sub.appendChild(a);
      } else {
        sub.textContent = ex.place;
      }
      body.appendChild(sub);
      body.appendChild(el('div', 'timeline-sub', ex.years));
      return body;
    });

    var toolsRow = document.getElementById('about-tools');
    toolsRow.innerHTML = '';
    tools.forEach(function (t) { toolsRow.appendChild(el('div', 'chip', t)); });

    var skillsWrap = document.getElementById('soft-skills');
    skillsWrap.innerHTML = '';
    softSkills.forEach(function (sk) {
      var pill = el('div', 'soft-skill');
      var svg = el('span', null, '<svg viewBox="0 0 24 24" fill="none" stroke="#2a3a12" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" width="16" height="16">' + sk.icon + '</svg>');
      pill.appendChild(svg);
      pill.appendChild(document.createTextNode(sk.name));
      skillsWrap.appendChild(pill);
    });
  }

  /* ---------------- CONTACT VIEW RENDER ---------------- */

  function renderContact() {
    var row = document.getElementById('contact-socials');
    row.innerHTML = '';
    contactSocials.forEach(function (cs) {
      var a = el('a', 'social-pill');
      a.href = cs.url;
      a.target = '_blank';
      a.rel = 'noopener';
      var badge = el('div', 'social-icon-badge');
      var img = document.createElement('img');
      img.src = cs.icon;
      img.alt = cs.name + ' icon';
      badge.appendChild(img);
      a.appendChild(badge);
      var text = el('div');
      text.appendChild(el('div', 'social-name', cs.name));
      text.appendChild(el('div', 'social-handle', cs.handle));
      a.appendChild(text);
      row.appendChild(a);
    });

    var loc = el('div', 'location-pill');
    var locBadge = el('div', 'social-icon-badge');
    var locImg = document.createElement('img');
    locImg.src = IMG + 'icon-location.png';
    locImg.alt = 'Location icon';
    locBadge.appendChild(locImg);
    loc.appendChild(locBadge);
    var locText = el('div');
    locText.appendChild(el('div', 'social-name', 'Phnom Penh'));
    locText.appendChild(el('div', 'social-handle', 'Cambodia'));
    loc.appendChild(locText);
    row.appendChild(loc);
  }

  /* ---------------- VIEW SWITCHING ---------------- */

  function setView(view) {
    state.view = view;
    state.contactFormOpen = false;
    updateContactFormVisibility();

    document.querySelectorAll('.view').forEach(function (v) {
      v.hidden = v.getAttribute('data-view-panel') !== view;
    });
    document.querySelectorAll('.nav-btn').forEach(function (b) {
      b.classList.toggle('is-active', b.getAttribute('data-view') === view);
    });
  }

  /* ---------------- CONTACT FORM ---------------- */

  function updateContactFormVisibility() {
    var overlay = document.getElementById('contact-form-overlay');
    var sheet = document.getElementById('contact-form-sheet');
    overlay.hidden = !state.contactFormOpen;
    sheet.hidden = !state.contactFormOpen;
  }

  function openContactForm() {
    state.contactFormOpen = true;
    updateContactFormVisibility();
  }

  function closeContactForm() {
    state.contactFormOpen = false;
    updateContactFormVisibility();
  }

  /* ---------------- INIT ---------------- */

  function init() {
    document.querySelectorAll('.nav-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setView(btn.getAttribute('data-view'));
      });
    });

    document.getElementById('say-hello-btn').addEventListener('click', openContactForm);
    document.getElementById('close-form-btn').addEventListener('click', closeContactForm);
    document.getElementById('contact-form-overlay').addEventListener('click', closeContactForm);

    document.getElementById('contact-form').addEventListener('submit', function (evt) {
      evt.preventDefault();
      var form = evt.target;
      var inner = document.querySelector('.contact-form-inner');
      inner.innerHTML = '';
      var title = el('div', 'form-title', "Message sent!");
      inner.appendChild(title);
      inner.appendChild(el('div', 'form-sent-msg', "Thanks for reaching out — I'll get back to you at sreyka.lach12@gmail.com soon."));
      var closeAgain = el('button', 'send-btn', 'Close');
      closeAgain.type = 'button';
      closeAgain.addEventListener('click', closeContactForm);
      inner.appendChild(closeAgain);
      form.reset();
    });

    setView('home');
    renderHome();
    renderWork();
    renderAbout();
    renderContact();

    // Synced 10s autoplay across featured, home project groups, and work categories.
    setInterval(function () {
      state.featuredIndex = (state.featuredIndex + 1) % featuredData.length;
      Object.keys(state.homeProjIndices).forEach(function (key) {
        state.homeProjIndices[key] = (state.homeProjIndices[key] + 1) % homeProjectGroups[key].length;
      });
      workCategories.forEach(function (c) {
        state.workIndices[c.key] = (state.workIndices[c.key] + 1) % c.pieces.length;
      });
      if (state.view === 'home') {
        renderFeatured();
        renderHomeProjCard('big', 'proj-big', true);
        renderHomeProjCard('small1', 'proj-small1', false);
        renderHomeProjCard('small2', 'proj-small2', false);
      } else if (state.view === 'work') {
        renderWork();
      }
    }, 10000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
