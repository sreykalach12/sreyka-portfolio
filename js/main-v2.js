(function () {
  'use strict';

  var IMG = 'assets/img/';

  /* ---------------- STATIC STRINGS (EN / KM) ---------------- */

  var STR = {
    en: {
      navHome: 'Home', navAbout: 'About me', navWork: 'Work', navContact: 'Contact',
      openToWork: 'Open to work',
      role: 'Creative UI/UX Designer',
      locationCity: 'Phnom Penh', locationCountry: 'Cambodia',
      tools: 'Tools',
      projectsCompleted: 'Projects completed',
      bio: "I design digital products where systemic logic meets bold visual craft. Blending a background in systems, development, and multi-disciplinary creative design, I translate complex technical structures into intuitive UI/UX, distinct brand identities, and refined visual systems. For me, design isn't just interface polish; it's shaping how people experience and remember a product.",
      personalStory: 'Personal Story',
      education: 'Education',
      skills: 'Skills',
      experience: 'Experience',
      hobbies: 'Hobbies',
      works: 'works',
      sayHello: 'Say hello',
      letsTalk: "Let's talk",
      placeholderName: 'Your name',
      placeholderEmail: 'Your email',
      placeholderMessage: 'Tell me about your project',
      sendMessage: 'Send message',
      sentTitle: 'Message sent!',
      sentBody: "Thanks for reaching out — I'll get back to you at sreyka.lach12@gmail.com soon.",
      close: 'Close',
    },
    km: {
      navHome: 'ទំព័រដើម', navAbout: 'អំពីខ្ញុំ', navWork: 'ស្នាដៃ', navContact: 'ទំនាក់ទំនង',
      openToWork: 'ត្រៀមរួចរាល់សម្រាប់ការងារ',
      role: 'អ្នករចនា UI/UX ច្នៃប្រឌិត',
      locationCity: 'ភ្នំពេញ', locationCountry: 'កម្ពុជា',
      tools: 'ឧបករណ៍',
      projectsCompleted: 'គម្រោងបានបញ្ចប់',
      bio: 'ខ្ញុំរចនាផលិតផលឌីជីថល ដែលផ្សំបញ្ចូលគ្នារវាងតក្កវិជ្ជាជាប្រព័ន្ធ និងសិល្បៈរចនាដ៏ក្លាហាន។ ដោយផ្អែកលើមូលដ្ឋានចំណេះដឹងផ្នែកប្រព័ន្ធ ការអភិវឌ្ឍន៍ និងការរចនាច្នៃប្រឌិតចម្រុះមុខជំនាញ ខ្ញុំបំប្លែងរចនាសម្ព័ន្ធបច្ចេកទេសដ៏ស្មុគស្មាញ ទៅជាចំណុចប្រទាក់ UI/UX ដ៏ងាយស្រួលប្រើ អត្តសញ្ញាណម៉ាកយីហោប្លែក និងប្រព័ន្ធរូបភាពដ៏ល្អិតល្អន់។ សម្រាប់ខ្ញុំ ការរចនាមិនមែនគ្រាន់តែជាការតុបតែងចំណុចប្រទាក់ប៉ុណ្ណោះទេ វាគឺជាការកសាងបទពិសោធន៍ និងការចងចាំរបស់មនុស្សចំពោះផលិតផលនោះ។',
      personalStory: 'រឿងរ៉ាវផ្ទាល់ខ្លួន',
      education: 'ការសិក្សា',
      skills: 'ជំនាញ',
      experience: 'បទពិសោធន៍',
      hobbies: 'ចំណូលចិត្ត',
      works: 'ស្នាដៃ',
      sayHello: 'ជម្រាបសួរ',
      letsTalk: 'តោះនិយាយគ្នា',
      placeholderName: 'ឈ្មោះរបស់អ្នក',
      placeholderEmail: 'អ៊ីមែលរបស់អ្នក',
      placeholderMessage: 'ប្រាប់ខ្ញុំអំពីគម្រោងរបស់អ្នក',
      sendMessage: 'ផ្ញើសារ',
      sentTitle: 'សារបានផ្ញើ!',
      sentBody: 'អរគុណសម្រាប់ការទាក់ទង — ខ្ញុំនឹងឆ្លើយតបទៅកាន់អ្នកឆាប់ៗនេះតាមរយៈ sreyka.lach12@gmail.com។',
      close: 'បិទ',
    },
  };

  /* ---------------- DATA ---------------- */

  var homeProjectGroups = {
    big: [
      { name: 'Nomad Coffee App', tag: 'UI/UX Design', tagKm: 'ការរចនា UI/UX', desc: 'Mobile ordering & loyalty experience', descKm: 'បទពិសោធន៍បញ្ជាទិញ និងភាពស្មោះត្រង់លើទូរស័ព្ទ', grad: 'linear-gradient(135deg,#141414,#3a3a3a)' },
      { name: 'Finance Dashboard', tag: 'UI/UX Design', tagKm: 'ការរចនា UI/UX', desc: 'Personal budgeting & insights app', descKm: 'កម្មវិធីគ្រប់គ្រងថវិកា និងវិភាគទិន្នន័យផ្ទាល់ខ្លួន', grad: 'linear-gradient(135deg,#1c1c1c,#454545)' },
      { name: 'Wellness Tracker', tag: 'UI/UX Design', tagKm: 'ការរចនា UI/UX', desc: 'Daily habits & mindfulness companion', descKm: 'កម្មវិធីដៃគូទម្លាប់ប្រចាំថ្ងៃ និងស្មារតីភ្ញាក់រឿយៗ', grad: 'linear-gradient(135deg,#0f0f0f,#505050)' },
    ],
    small1: [
      { name: 'Aura Skincare', tag: 'Branding', tagKm: 'ម៉ាកយីហោ', grad: 'linear-gradient(135deg,#242424,#5a5a5a)' },
      { name: 'Nomad Coffee Identity', tag: 'Branding', tagKm: 'ម៉ាកយីហោ', grad: 'linear-gradient(135deg,#181818,#4d4d4d)' },
      { name: 'Studio Mark', tag: 'Branding', tagKm: 'ម៉ាកយីហោ', grad: 'linear-gradient(135deg,#1e1e1e,#525252)' },
    ],
    small2: [
      { name: 'Festival Poster', tag: 'Graphic Design', tagKm: 'ការរចនាក្រាហ្វិក', grad: 'linear-gradient(135deg,#202020,#484848)' },
      { name: 'Neon Dreams', tag: 'Digital Art', tagKm: 'សិល្បៈឌីជីថល', grad: 'linear-gradient(135deg,#101010,#3f3f3f)' },
      { name: 'Album Cover Set', tag: 'Graphic Design', tagKm: 'ការរចនាក្រាហ្វិក', grad: 'linear-gradient(135deg,#161616,#464646)' },
    ],
  };

  var featuredData = [
    { tag: 'UI/UX Design', tagKm: 'ការរចនា UI/UX', name: 'Finance App Redesign', grad: 'linear-gradient(135deg,#1c1c1c,#454545)' },
    { tag: 'Branding & Logo', tagKm: 'ម៉ាកយីហោ និងឡូហ្គោ', name: 'Nomad Coffee Identity', grad: 'linear-gradient(135deg,#181818,#4d4d4d)' },
    { tag: 'Creative / Graphic', tagKm: 'ក្រាហ្វិកច្នៃប្រឌិត', name: 'Festival Poster Series', grad: 'linear-gradient(135deg,#202020,#484848)' },
    { tag: 'Digital Art', tagKm: 'សិល្បៈឌីជីថល', name: 'Neon Dreams', grad: 'linear-gradient(135deg,#101010,#3f3f3f)' },
  ];

  var workCategories = [
    {
      key: 'uiux', title: 'UI/UX Design', titleKm: 'ការរចនា UI/UX', count: 6,
      pieces: [
        { grad: 'linear-gradient(135deg,#1c1c1c,#454545)' },
        { grad: 'linear-gradient(135deg,#141414,#3a3a3a)' },
        { grad: 'linear-gradient(135deg,#0d0d0d,#4a4a4a)' },
      ],
    },
    {
      key: 'branding', title: 'Branding & Logo', titleKm: 'ម៉ាកយីហោ និងឡូហ្គោ', count: 6,
      pieces: [
        { grad: 'linear-gradient(135deg,#1e1e1e,#525252)' },
        { grad: 'linear-gradient(135deg,#242424,#5a5a5a)' },
        { grad: 'linear-gradient(135deg,#181818,#4d4d4d)' },
      ],
    },
    {
      key: 'graphic', title: 'Creative / Graphic Design', titleKm: 'ការរចនាក្រាហ្វិកច្នៃប្រឌិត', count: 5,
      pieces: [
        { grad: 'linear-gradient(135deg,#202020,#484848)' },
        { grad: 'linear-gradient(135deg,#161616,#464646)' },
        { grad: 'linear-gradient(135deg,#0f0f0f,#505050)' },
      ],
    },
    {
      key: 'art', title: 'Digital Art', titleKm: 'សិល្បៈឌីជីថល', count: 5,
      pieces: [
        { grad: 'linear-gradient(135deg,#101010,#3f3f3f)' },
        { grad: 'linear-gradient(135deg,#1a1a1a,#4a4a4a)' },
        { grad: 'linear-gradient(135deg,#0d0d0d,#4a4a4a)' },
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
    { name: 'Attention to Detail', nameKm: 'ការយកចិត្តទុកដាក់ចំពោះព័ត៌មានលម្អិត', icon: skillIconSvgs.attention },
    { name: 'Problem Solving', nameKm: 'ការដោះស្រាយបញ្ហា', icon: skillIconSvgs.problem },
    { name: 'Adaptability', nameKm: 'សមត្ថភាពសម្របខ្លួន', icon: skillIconSvgs.adapt },
    { name: 'Creativity', nameKm: 'ភាពច្នៃប្រឌិត', icon: skillIconSvgs.creativity },
    { name: 'Sketching', nameKm: 'គូរគំនូរព្រាង', icon: skillIconSvgs.sketch },
  ];

  var personalStory = [
    { title: 'The Spark', titleKm: 'ចំណុចចាប់ផ្តើម', text: "Before code, there was the pencil. I grew up bound to sketchbooks, digital art, and the quiet thrill of creating something from nothing. When it came time to choose a path, logic won, and I chose technology, but the creative drive never left. It was simply waiting.", textKm: 'មុននឹងមានកូដ មានខ្មៅដៃជាមុនសិន។ ខ្ញុំធំឡើងជាប់នឹងសៀវភៅគូរគំនូរ សិល្បៈឌីជីថល និងអារម្មណ៍រំភើបស្ងាត់ស្ងៀមនៃការបង្កើតអ្វីមួយពីភាពទទេ។ នៅពេលដល់ពេលត្រូវជ្រើសរើសផ្លូវមួយ តក្កវិជ្ជាឈ្នះ ហើយខ្ញុំបានជ្រើសរើសបច្ចេកវិទ្យា ប៉ុន្តែកម្លាំងចិត្តច្នៃប្រឌិតមិនដែលបាត់ទៅណាឡើយ។ វាគ្រាន់តែកំពុងរង់ចាំប៉ុណ្ណោះ។' },
    { title: 'The Shift', titleKm: 'ការផ្លាស់ប្តូរ', text: "Technology was a bet on the future. I enrolled in Management Information Systems, driven by a desire to build things that mattered. At the time, I didn't realize it was only the foundation.", textKm: 'បច្ចេកវិទ្យាគឺជាការភ្នាល់មួយលើអនាគត។ ខ្ញុំបានចូលរៀនផ្នែកប្រព័ន្ធព័ត៌មានវិទ្យាគ្រប់គ្រង ព្រោះមានបំណងចង់កសាងអ្វីៗដែលមានតម្លៃ។ ពេលនោះ ខ្ញុំមិនបានដឹងទេថា វាគ្រាន់តែជាគ្រឹះមួយប៉ុណ្ណោះ។' },
    { title: 'The Friction', titleKm: 'ឧបសគ្គ', text: "Internships and front-end roles brought an unexpected letdown. The work felt less like building and more like assembling: patching together CMS platforms, off-the-shelf templates, and minor customizations. Every project felt pre-boxed. My constant thought: If this were mine, I'd rebuild it from scratch.", textKm: 'កម្មសិក្សា និងតួនាទីជា Front-end បាននាំមកនូវការខកចិត្តដោយមិននឹកស្មានដល់។ ការងារមានអារម្មណ៍ថាមិនមែនជាការកសាងទេ គឺដូចជាការផ្គុំបន្ថែម៖ ផ្គុំវេទិកា CMS គំរូដែលមានស្រាប់ និងការកែសម្រួលបន្តិចបន្តួច។ គម្រោងនីមួយៗមានអារម្មណ៍ថាត្រូវបានកំណត់ស្រាប់រួចហើយ។ គំនិតដដែលៗរបស់ខ្ញុំគឺ៖ បើវាជារបស់ខ្ញុំ ខ្ញុំនឹងកសាងវាឡើងវិញពីដំបូង។' },
    { title: 'The Craft', titleKm: 'សិប្បកម្ម', text: "That frustration became my leverage. I dove into UI/UX design, pairing rigorous self-study with formal training and high-growth roles. Today, I operate as a creative UI/UX designer, seamlessly bridging product design, brand identity, digital art, and graphic systems.", textKm: 'ភាពខកចិត្តនោះបានក្លាយជាកម្លាំងចលករបស់ខ្ញុំ។ ខ្ញុំបានចាប់ផ្តើមស្វែងយល់ស៊ីជម្រៅផ្នែករចនា UI/UX ដោយផ្សំការសិក្សាដោយខ្លួនឯងយ៉ាងម៉ត់ចត់ជាមួយនឹងការបណ្តុះបណ្តាលជាផ្លូវការ និងតួនាទីការងារកំណើនខ្ពស់។ សព្វថ្ងៃនេះ ខ្ញុំបម្រើការជាអ្នករចនា UI/UX ច្នៃប្រឌិត ដោយភ្ជាប់គ្នារវាងការរចនាផលិតផល អត្តសញ្ញាណម៉ាកយីហោ សិល្បៈឌីជីថល និងប្រព័ន្ធក្រាហ្វិកយ៉ាងរលូន។' },
  ];

  var education = [
    { school: 'SETEC Institute', line: "Bachelor's degree, Management Information Systems", lineKm: 'សញ្ញាបត្របរិញ្ញាបត្រ ផ្នែកប្រព័ន្ធព័ត៌មានវិទ្យាគ្រប់គ្រង', years: 'Oct 2019 – Present' },
    { school: 'Australian Centre for Education (ACE)', line: 'English', lineKm: 'ភាសាអង់គ្លេស', years: '2016 – Present' },
    { school: 'Future.bit Academy', line: 'UI/UX Design Course, Design and Visual Communications', lineKm: 'វគ្គសិក្សារចនា UI/UX ការរចនា និងទំនាក់ទំនងដោយរូបភាព', years: 'Apr 2024 – Jun 2024' },
    { school: 'American University of Phnom Penh', line: 'Soft Skill Program', lineKm: 'កម្មវិធីជំនាញទន់', years: '2017' },
    { school: "Toutes à l'école", line: 'Khmer, English', lineKm: 'ភាសាខ្មែរ ភាសាអង់គ្លេស', years: '2007 – 2019' },
  ];

  var experience = [
    { role: 'Creative UI/UX Designer', roleKm: 'អ្នករចនា UI/UX ច្នៃប្រឌិត', place: 'Thortok', url: 'https://thortok.com/', years: 'Mar 2025 – Present' },
    { role: 'Visual | Web | Branding Designer', roleKm: 'អ្នករចនាចក្ខុវិស័យ | គេហទំព័រ | ម៉ាកយីហោ', place: 'Vector Studio · Freelance', years: 'Aug 2024 – Present' },
    { role: 'Web Designer | UX/UI', roleKm: 'អ្នករចនាគេហទំព័រ | UX/UI', place: 'Apsara Media Services · Full-time', years: 'Feb 2024 – Mar 2025' },
    { role: 'Web designer | Digital Marketing Executive', roleKm: 'អ្នករចនាគេហទំព័រ | ថ្នាក់គ្រប់គ្រងទីផ្សារឌីជីថល', place: 'Nafih Digital Marketing Agent Co., Ltd · Part-time', years: 'Nov 2021 – Jan 2024' },
    { role: 'Home Monitor', roleKm: 'អ្នកត្រួតពិនិត្យផ្ទះ', place: "Toutes à l'école · Part-time", years: 'Nov 2020 – Oct 2021' },
  ];

  var hobbies = [
    { name: 'Watch anime and manga', nameKm: 'មើលអានីម៉េ និងម៉ង្គា' },
    { name: 'Technology researching', nameKm: 'ស្រាវជ្រាវបច្ចេកវិទ្យា' },
    { name: 'Read design/creative books', nameKm: 'អានសៀវភៅរចនា/ច្នៃប្រឌិត' },
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
    lang: (localStorage.getItem('site-lang') === 'en') ? 'en' : 'km',
    featuredIndex: 0,
    homeProjIndices: { big: 0, small1: 0, small2: 0 },
    workIndices: { uiux: 0, branding: 0, graphic: 0, art: 0 },
    contactFormOpen: false,
  };

  function t(key) { return STR[state.lang][key]; }
  function pick(item, kmField, enField) { return state.lang === 'km' ? (item[kmField] || item[enField]) : item[enField]; }

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
    document.getElementById('featured-tag').textContent = pick(f, 'tagKm', 'tag');
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
      document.getElementById(prefix + '-tag').textContent = pick(item, 'tagKm', 'tag');
      document.getElementById(prefix + '-name').textContent = item.name;
      document.getElementById(prefix + '-desc').textContent = pick(item, 'descKm', 'desc') || '';
    } else {
      document.getElementById(prefix + '-name').textContent = item.name;
      document.getElementById(prefix + '-tag').textContent = pick(item, 'tagKm', 'tag');
    }
    renderDots(document.getElementById(prefix + '-dots'), items.length, idx, function (i) {
      state.homeProjIndices[key] = i;
      renderHomeProjCard(key, prefix, isBig);
    });
  }

  function renderHomeTools() {
    var row = document.getElementById('home-tools');
    row.innerHTML = '';
    tools.forEach(function (tName) {
      row.appendChild(el('div', 'chip', tName));
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

      var title = pick(c, 'titleKm', 'title');
      var content = el('div', 'photo-content');
      var top = el('div');
      top.appendChild(el('div', 'proj-title', title));
      top.appendChild(el('div', 'proj-desc', title + ' — ' + c.count + ' ' + t('works')));
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
      body.appendChild(el('div', 'timeline-title', pick(ps, 'titleKm', 'title')));
      body.appendChild(el('div', 'timeline-text', pick(ps, 'textKm', 'text')));
      return body;
    });

    renderTimeline(document.getElementById('education'), education, function (e) {
      var body = el('div', 'timeline-body');
      body.appendChild(el('div', 'timeline-title', e.school));
      body.appendChild(el('div', 'timeline-sub', pick(e, 'lineKm', 'line') + ' · ' + e.years));
      return body;
    });

    renderTimeline(document.getElementById('experience'), experience, function (ex) {
      var body = el('div', 'timeline-body');
      body.appendChild(el('div', 'timeline-title', pick(ex, 'roleKm', 'role')));
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
    tools.forEach(function (tName) { toolsRow.appendChild(el('div', 'chip', tName)); });

    var skillsWrap = document.getElementById('soft-skills');
    skillsWrap.innerHTML = '';
    softSkills.forEach(function (sk) {
      var pill = el('div', 'soft-skill');
      var svg = el('span', null, '<svg viewBox="0 0 24 24" fill="none" stroke="#17181A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" width="16" height="16">' + sk.icon + '</svg>');
      pill.appendChild(svg);
      pill.appendChild(document.createTextNode(pick(sk, 'nameKm', 'name')));
      skillsWrap.appendChild(pill);
    });

    var hobbiesRow = document.getElementById('hobbies-row');
    hobbiesRow.innerHTML = '';
    hobbies.forEach(function (h) {
      hobbiesRow.appendChild(el('div', 'chip', pick(h, 'nameKm', 'name')));
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
    locText.appendChild(el('div', 'social-name', t('locationCity')));
    locText.appendChild(el('div', 'social-handle', t('locationCountry')));
    loc.appendChild(locText);
    row.appendChild(loc);
  }

  /* ---------------- STATIC LABELS / LANGUAGE ---------------- */

  function applyStaticLabels() {
    document.documentElement.setAttribute('lang', state.lang);

    document.querySelector('.nav-btn[data-view="home"]').textContent = t('navHome');
    document.querySelector('.nav-btn[data-view="about"]').textContent = t('navAbout');
    document.querySelector('.nav-btn[data-view="work"]').textContent = t('navWork');
    document.querySelector('.nav-btn[data-view="contact"]').textContent = t('navContact');

    document.getElementById('label-open-to-work').textContent = t('openToWork');
    document.getElementById('label-role').textContent = t('role');
    document.getElementById('label-home-location').textContent = t('locationCity') + ', ' + t('locationCountry');
    document.getElementById('label-tools-home').textContent = t('tools');
    document.getElementById('label-projects-completed').textContent = t('projectsCompleted');
    document.getElementById('label-bio').textContent = t('bio');

    document.getElementById('label-personal-story').textContent = t('personalStory');
    document.getElementById('label-education').textContent = t('education');
    document.getElementById('label-skills').textContent = t('skills');
    document.getElementById('label-experience').textContent = t('experience');
    document.getElementById('label-hobbies').textContent = t('hobbies');

    document.getElementById('label-say-hello').textContent = t('sayHello');
    document.getElementById('label-lets-talk').textContent = t('letsTalk');
    document.getElementById('input-name').placeholder = t('placeholderName');
    document.getElementById('input-email').placeholder = t('placeholderEmail');
    document.getElementById('input-message').placeholder = t('placeholderMessage');
    var sendBtn = document.getElementById('send-btn');
    if (sendBtn) sendBtn.textContent = t('sendMessage');

    var langSwitch = document.getElementById('lang-switch');
    langSwitch.setAttribute('data-lang', state.lang);
    document.getElementById('lang-opt-km').classList.toggle('is-active', state.lang === 'km');
    document.getElementById('lang-opt-en').classList.toggle('is-active', state.lang === 'en');

    var nameEl = document.getElementById('label-name');
    if (nameEl) nameEl.textContent = state.lang === 'km' ? 'ឡាចស្រីកា' : 'Sreyka Lach';
  }

  function setLang(lang) {
    state.lang = lang;
    localStorage.setItem('site-lang', lang);
    applyStaticLabels();
    renderHome();
    renderWork();
    renderAbout();
    renderContact();
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

    document.getElementById('lang-switch').addEventListener('click', function () {
      setLang(state.lang === 'km' ? 'en' : 'km');
    });

    document.getElementById('say-hello-btn').addEventListener('click', openContactForm);
    document.getElementById('close-form-btn').addEventListener('click', closeContactForm);
    document.getElementById('contact-form-overlay').addEventListener('click', closeContactForm);

    document.getElementById('contact-form').addEventListener('submit', function (evt) {
      evt.preventDefault();
      var form = evt.target;
      var inner = document.querySelector('.contact-form-inner');
      inner.innerHTML = '';
      var title = el('div', 'form-title', t('sentTitle'));
      inner.appendChild(title);
      inner.appendChild(el('div', 'form-sent-msg', t('sentBody')));
      var closeAgain = el('button', 'send-btn', t('close'));
      closeAgain.type = 'button';
      closeAgain.addEventListener('click', closeContactForm);
      inner.appendChild(closeAgain);
      form.reset();
    });

    setView('home');
    applyStaticLabels();
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
