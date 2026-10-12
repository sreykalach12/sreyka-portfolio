(function () {
  'use strict';

  var IMG = 'assets/img/';

  /* ---------------- STATIC STRINGS (EN / KM) ---------------- */

  var STR = {
    en: {
      navHome: 'Home', navAbout: 'About me', navWork: 'Work', navContact: 'Contact',
      locationCity: 'Phnom Penh', locationCountry: 'Cambodia',
      tools: 'Tools',
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
      backToFolders: 'Back to folders',
      client: 'Client', role: 'Role', year: 'Year', category: 'Category',
      problem: 'Problem / Goal', process: 'Process', keyScreens: 'Key screens & deliverables',
      outcome: 'Outcome', toolsUsed: 'Tools used', image: 'Image', coverImage: 'Cover image',
      prevProject: 'Previous project', nextProject: 'Next project',
    },
    km: {
      navHome: 'ទំព័រដើម', navAbout: 'ប្រវត្តិសង្ខេប', navWork: 'ស្នាដៃ', navContact: 'ទំនាក់ទំនង',
      locationCity: 'រាជធានីភ្នំពេញ', locationCountry: 'ប្រទេសកម្ពុជា',
      tools: 'ឧបករណ៍',
      bio: 'ខ្ញុំច្នៃប្រឌិតផលិតផលឌីជីថលដោយផ្អែកលើការរួមបញ្ចូលគ្នារវាងតក្កវិជ្ជានិងសិល្បៈច្នៃប្រឌិត។ ដោយមានមូលដ្ឋានគ្រឹះផ្នែកការអភិវឌ្ឍប្រព័ន្ធ និងការច្នៃប្រឌិតចម្រុះជំនាញ ខ្ញុំបម្លែងរចនាសម្ព័ន្ធបច្ចេកទេសដ៏ស្មុគស្មាញទៅជា UI/UX ដែលងាយស្រួលយល់ អត្តសញ្ញាណម៉ាកសញ្ញាច្បាស់លាស់ និងប្រព័ន្ធរូបភាពប្រកបដោយប្រណីតភាព។ សម្រាប់ខ្ញុំ ការច្នៃប្រឌិតមិនមែនត្រឹមតែជាការតុបតែងផ្ទៃមុខកម្មវិធីនោះទេ ប៉ុន្តែវាជាការបង្កើតបទពិសោធន៍ និងការចងចាំរបស់អ្នកប្រើប្រាស់ចំពោះផលិតផល។',
      personalStory: 'រឿងរ៉ាវផ្ទាល់ខ្លួន',
      education: 'ការសិក្សា',
      skills: 'ជំនាញ',
      experience: 'បទពិសោធន៍',
      hobbies: 'ចំណូលចិត្ត',
      works: 'ស្នាដៃ',
      sayHello: 'ទំនាក់ទំនង',
      letsTalk: 'តោះនិយាយគ្នា',
      placeholderName: 'ឈ្មោះរបស់អ្នក',
      placeholderEmail: 'អ៊ីមែលរបស់អ្នក',
      placeholderMessage: 'ប្រាប់ខ្ញុំអំពីគម្រោងរបស់អ្នក',
      sendMessage: 'ផ្ញើសារ',
      sentTitle: 'សារបានផ្ញើ!',
      sentBody: 'អរគុណសម្រាប់ការទាក់ទង — ខ្ញុំនឹងឆ្លើយតបទៅកាន់អ្នកឆាប់ៗនេះតាមរយៈ sreyka.lach12@gmail.com។',
      close: 'បិទ',
      backToFolders: 'ត្រឡប់ទៅថតឯកសារ',
      client: 'អតិថិជន', role: 'តួនាទី', year: 'ឆ្នាំ', category: 'ប្រភេទ',
      problem: 'បញ្ហា / គោលដៅ', process: 'ដំណើរការ', keyScreens: 'អេក្រង់ និងស្នាដៃសំខាន់ៗ',
      outcome: 'លទ្ធផល', toolsUsed: 'ឧបករណ៍ដែលបានប្រើ', image: 'រូបភាព', coverImage: 'រូបភាពគម្រប',
      prevProject: 'គម្រោងមុន', nextProject: 'គម្រោងបន្ទាប់',
    },
  };

  /* ---------------- DATA ---------------- */

  var homeProjectGroups = {
    big: [
      { name: 'Nomad Coffee App', nameKm: 'កម្មវិធីនំបុ័ង Nomad Coffee', tag: 'UI/UX Design', tagKm: 'ការរចនា UI/UX', desc: 'Mobile ordering & loyalty experience', descKm: 'បទពិសោធន៍បញ្ជាទិញ និងភាពស្មោះត្រង់លើទូរស័ព្ទ', grad: 'linear-gradient(135deg,#141414,#3a3a3a)' },
      { name: 'Finance Dashboard', nameKm: 'ផ្ទាំងគ្រប់គ្រងហិរញ្ញវត្ថុ', tag: 'UI/UX Design', tagKm: 'ការរចនា UI/UX', desc: 'Personal budgeting & insights app', descKm: 'កម្មវិធីគ្រប់គ្រងថវិកា និងវិភាគទិន្នន័យផ្ទាល់ខ្លួន', grad: 'linear-gradient(135deg,#1c1c1c,#454545)' },
      { name: 'Wellness Tracker', nameKm: 'កម្មវិធីតាមដានសុខភាព', tag: 'UI/UX Design', tagKm: 'ការរចនា UI/UX', desc: 'Daily habits & mindfulness companion', descKm: 'កម្មវិធីដៃគូទម្លាប់ប្រចាំថ្ងៃ និងស្មារតីភ្ញាក់រឿយៗ', grad: 'linear-gradient(135deg,#0f0f0f,#505050)' },
    ],
    small1: [
      { name: 'Aura Skincare', nameKm: 'ម៉ាកយីហោ Aura Skincare', tag: 'Branding', tagKm: 'ម៉ាកយីហោ', grad: 'linear-gradient(135deg,#242424,#5a5a5a)' },
      { name: 'Nomad Coffee Identity', nameKm: 'អត្តសញ្ញាណម៉ាក Nomad Coffee', tag: 'Branding', tagKm: 'ម៉ាកយីហោ', grad: 'linear-gradient(135deg,#181818,#4d4d4d)' },
      { name: 'Studio Mark', nameKm: 'និមិត្តសញ្ញា Studio Mark', tag: 'Branding', tagKm: 'ម៉ាកយីហោ', grad: 'linear-gradient(135deg,#1e1e1e,#525252)' },
    ],
    small2: [
      { name: 'Festival Poster', nameKm: 'ផ្ទាំងផ្សព្វផ្សាយពិធីបុណ្យ', tag: 'Graphic Design', tagKm: 'ការរចនាក្រាហ្វិក', grad: 'linear-gradient(135deg,#202020,#484848)' },
      { name: 'Neon Dreams', nameKm: 'ក្តីស្រមៃនីអុន', tag: 'Digital Art', tagKm: 'សិល្បៈឌីជីថល', grad: 'linear-gradient(135deg,#101010,#3f3f3f)' },
      { name: 'Album Cover Set', nameKm: 'ក្របសៀវភៅអាល់ប៊ុមចម្រៀង', tag: 'Graphic Design', tagKm: 'ការរចនាក្រាហ្វិក', grad: 'linear-gradient(135deg,#161616,#464646)' },
    ],
  };

  var featuredData = [
    { tag: 'UI/UX Design', tagKm: 'ការរចនា UI/UX', name: 'Finance App Redesign', nameKm: 'រចនាកម្មវិធីហិរញ្ញវត្ថុឡើងវិញ', grad: 'linear-gradient(135deg,#1c1c1c,#454545)' },
    { tag: 'Branding & Logo', tagKm: 'ម៉ាកយីហោ និងឡូហ្គោ', name: 'Nomad Coffee Identity', nameKm: 'អត្តសញ្ញាណម៉ាក Nomad Coffee', grad: 'linear-gradient(135deg,#181818,#4d4d4d)' },
    { tag: 'Creative / Graphic', tagKm: 'ក្រាហ្វិកច្នៃប្រឌិត', name: 'Festival Poster Series', nameKm: 'ស៊េរីផ្ទាំងផ្សព្វផ្សាយពិធីបុណ្យ', grad: 'linear-gradient(135deg,#202020,#484848)' },
    { tag: 'Digital Art', tagKm: 'សិល្បៈឌីជីថល', name: 'Neon Dreams', nameKm: 'ក្តីស្រមៃនីអុន', grad: 'linear-gradient(135deg,#101010,#3f3f3f)' },
  ];

  var tools = [
    { label: 'Illustrator' },
    { label: 'Photoshop' },
    { label: 'Figma' },
    { label: 'Adobe XD' },
    { label: 'Procreate' },
  ];

  var skillIconSvgs = {
    attention: '<circle cx="12" cy="12" r="3.2"/><path d="M2 12c2.8-5 6.6-7.5 10-7.5S19.2 7 22 12c-2.8 5-6.6 7.5-10 7.5S4.8 17 2 12Z"/>',
    problem: '<path d="M12 4v3M9.5 6l1.2 2.1M14.5 6l-1.2 2.1"/><circle cx="12" cy="13" r="5"/><path d="M9 21h6M10 18h4"/>',
    adapt: '<path d="M4 12a8 8 0 0 1 13.5-5.8L20 8"/><path d="M20 4v4h-4"/><path d="M20 12a8 8 0 0 1-13.5 5.8L4 16"/><path d="M4 20v-4h4"/>',
    creativity: '<path d="M12 3v3M12 9c-3 1-4 4-2 6.5 1 .1.5 1.5.5 2.5h3c0-1 -.5-2.4.5-2.5 2-2.5 1-5.5-2-6.5Z"/><path d="M10.5 20h3"/>',
  };
  var softSkills = [
    { name: 'Attention to Detail', nameKm: 'ផ្ចិតផ្ចង់រាល់ចំណុចតូចៗ', icon: skillIconSvgs.attention },
    { name: 'Problem Solving', nameKm: 'ចេះដោះស្រាយបញ្ហា / រកដំណោះស្រាយ', icon: skillIconSvgs.problem },
    { name: 'Adaptability', nameKm: 'សម្របខ្លួនលឿន / បត់បែនបាន', icon: skillIconSvgs.adapt },
    { name: 'Creativity', nameKm: 'មានគំនិតច្នៃប្រឌិត', icon: skillIconSvgs.creativity },
  ];

  var personalStory = [
    { title: 'The Spark', titleKm: 'ចំណុចចាប់ផ្តើម', text: "Before code, there was the pencil. I grew up bound to sketchbooks, digital art, and the quiet thrill of creating something from nothing. When it came time to choose a path, logic won, and I chose technology, but the creative drive never left. It was simply waiting.", textKm: 'មុនស្គាល់និងប្រលូកចូលការសរសេរកូដ ខ្ញុំធំឡើងជាមួយការគូរគំនូរលើសៀវភៅ គូរលើកុំព្យូទ័រ និងចូលចិត្តអារម្មណ៍ពេលបង្កើតអ្វីមួយថ្មី។ ដល់ពេលត្រូវជ្រើសរើសរៀន ខ្ញុំជ្រើសរើសបច្ចេកវិទ្យា ប៉ុន្តែចិត្តស្រឡាញ់ការច្នៃប្រឌិតនៅតែមានជានិច្ច។' },
    { title: 'The Shift', titleKm: 'ការផ្លាស់ប្តូរ', text: "Technology was a bet on the future. I enrolled in Management Information Systems, driven by a desire to build things that mattered. At the time, I didn't realize it was only the foundation.", textKm: 'បច្ចេកវិទ្យាជាជម្រើសសម្រាប់អនាគត។ ខ្ញុំបានសម្រេចចិត្តរៀនជំនាញគ្រប់គ្រងប្រព័ន្ធព័ត៌មានវិទ្យា (MIS) ព្រោះចង់បង្កើតអ្វីដែលមានប្រយោជន៍។ កាលហ្នឹង ខ្ញុំមិនទាន់ដឹងថាវាគ្រាន់តែជាជំហានដំបូងឡើយ។' },
    { title: 'The Friction', titleKm: 'ឧបសគ្គ / បញ្ហាជួបប្រទះ', text: "Internships and front-end roles brought an unexpected letdown. The work felt less like building and more like assembling: patching together CMS platforms, off-the-shelf templates, and minor customizations. Every project felt pre-boxed. My constant thought: If this were mine, I'd rebuild it from scratch.", textKm: 'ការចុះកម្មសិក្សា និងការងារផ្នែក Front-end បាននាំមកនូវការខកចិត្តដែលស្មានមិនដល់។ ការងារហាក់ដូចជាមិនមែនជាការបង្កើត តែជាការយករបស់មកតផ្គុំគ្នា៖ ការបិទភ្ជាប់ប្រព័ន្ធ CMS, ពុម្ពគំរូស្រាប់ និងការកែប្រែបន្តិចបន្តួច។ រាល់គម្រោងទាំងអស់ហាក់ដូចជាត្រូវគេកំណត់ក្នុងប្រអប់ស្រាប់។ គំនិតក្នុងចិត្តខ្ញុំជានិច្ចគឺ៖ ប្រសិនបើវាជាស្នាដៃខ្ញុំ ខ្ញុំនឹងបង្កើតវាឡើងវិញពីចំណុចសូន្យ។' },
    { title: 'The Craft', titleKm: 'ជំនាញ និងការច្នៃប្រឌិត', text: "That frustration became my leverage. I dove into UI/UX design, pairing rigorous self-study with formal training and high-growth roles. Today, I operate as a creative UI/UX designer, seamlessly bridging product design, brand identity, digital art, and graphic systems.", textKm: 'ការខកចិត្តនោះបានក្លាយជាកម្លាំងរុញច្រាន។ ខ្ញុំបានប្រលូកចូលទៅក្នុងវិស័យ UI/UX design ដោយផ្គួបផ្សំការស្រាវជ្រាវស្វ័យសិក្សាយ៉ាងបន្ថែម ជាមួយនឹងការបណ្តុះបណ្តាលផ្សេងៗ។ បច្ចុប្បន្ន ខ្ញុំធ្វើការជាអ្នកច្នៃប្រឌិត UI/UX ដោយតភ្ជាប់យ៉ាងរលូនរវាងការរចនាផលិតផល អត្តសញ្ញាណម៉ាកសញ្ញា សិល្បៈឌីជីថល និងប្រព័ន្ធក្រាហ្វិក។' },
  ];

  var education = [
    { school: 'SETEC Institute', line: "Bachelor's degree, Management Information Systems", lineKm: 'សញ្ញាបត្របរិញ្ញាបត្រ ផ្នែកប្រព័ន្ធព័ត៌មានវិទ្យាគ្រប់គ្រង', years: 'Oct 2019 – Present' },
    { school: 'Australian Centre for Education (ACE)', line: 'English', lineKm: 'ភាសាអង់គ្លេស', years: '2016' },
    { school: 'Future.bit Academy', line: 'UI/UX Design Course, Design and Visual Communications', lineKm: 'វគ្គសិក្សារចនា UI/UX ការរចនា និងទំនាក់ទំនងដោយរូបភាព', years: 'Apr 2024 – Jun 2024' },
    { school: 'American University of Phnom Penh', line: 'Soft Skill Program', lineKm: 'កម្មវិធីជំនាញទន់', years: '2017' },
    { school: "Toutes à l'école", line: 'Khmer, English', lineKm: 'ភាសាខ្មែរ ភាសាអង់គ្លេស', years: '2007 – 2019' },
  ];

  var experience = [
    { role: 'Creative UI/UX Designer', roleKm: 'អ្នករចនា UI/UX ច្នៃប្រឌិត', place: 'Thortok', url: 'https://thortok.com/', years: 'Mar 2025 – Present' },
    { role: 'Visual | Web | Branding Designer', roleKm: 'អ្នករចនាច្នៃប្រឌិត | គេហទំព័រ | ម៉ាកយីហោ', place: 'Vector Studio · Freelance', years: 'Aug 2024 – Present' },
    { role: 'Web Designer | UX/UI', roleKm: 'អ្នករចនាគេហទំព័រ | UX/UI', place: 'Apsara Media Services · Full-time', years: 'Feb 2024 – Mar 2025' },
    { role: 'Web designer | Digital Marketing Executive', roleKm: 'អ្នករចនាគេហទំព័រ | ថ្នាក់គ្រប់គ្រងទីផ្សារឌីជីថល', place: 'Nafih Digital Marketing Agent Co., Ltd · Part-time', years: 'Nov 2021 – Jan 2024' },
    { role: 'Home Monitor', roleKm: 'អ្នកត្រួតពិនិត្យផ្ទះ', place: "Toutes à l'école · Part-time", years: 'Nov 2020 – Oct 2021' },
  ];

  var hobbies = [
    { name: 'Watch anime and manga', nameKm: 'មើល Anime និងអាន Manga' },
    { name: 'Technology researching', nameKm: 'ស្រាវជ្រាវបច្ចេកវិទ្យា' },
    { name: 'Read design/creative books', nameKm: 'អានសៀវភៅរចនា និងគំនិតច្នៃប្រឌិត' },
  ];

  var contactSocials = [
    { name: 'Behance', icon: IMG + 'icon-behance-v2.png', handle: 'behance.net/sreyka', url: 'https://behance.net/sreyka-lach' },
    { name: 'LinkedIn', icon: IMG + 'icon-linkedin-v2.png', handle: 'linkedin.com/in/sreykalach', url: 'https://www.linkedin.com/in/sreykalach?utm_source=share_via&utm_content=profile&utm_medium=member_ios' },
    { name: 'Instagram', icon: IMG + 'icon-instagram-v2.png', handle: '@hi_iam_meee', url: 'https://www.instagram.com/hi_iam_meee?igsh=MWR1M3RmcTQ3ejlpdA%3D%3D&utm_source=qr' },
    { name: 'Telegram', icon: IMG + 'icon-telegram-v2.png', handle: 't.me/sreykalach', url: 'https://t.me/sreykalach' },
  ];

  /* ---------------- STATE ---------------- */

  var state = {
    view: 'home',
    lang: (localStorage.getItem('site-lang') === 'en') ? 'en' : 'km',
    featuredIndex: 0,
    homeProjIndices: { big: 0, small1: 0, small2: 0 },
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
    document.getElementById('featured-name').textContent = pick(f, 'nameKm', 'name');
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
      document.getElementById(prefix + '-name').textContent = pick(item, 'nameKm', 'name');
      document.getElementById(prefix + '-desc').textContent = pick(item, 'descKm', 'desc') || '';
    } else {
      document.getElementById(prefix + '-name').textContent = pick(item, 'nameKm', 'name');
      document.getElementById(prefix + '-tag').textContent = pick(item, 'tagKm', 'tag');
    }
    renderDots(document.getElementById(prefix + '-dots'), items.length, idx, function (i) {
      state.homeProjIndices[key] = i;
      renderHomeProjCard(key, prefix, isBig);
    });
  }

  function renderHome() {
    renderFeatured();
    renderHomeProjCard('big', 'proj-big', true);
    renderHomeProjCard('small1', 'proj-small1', false);
    renderHomeProjCard('small2', 'proj-small2', false);
  }

  /* ---------------- WORK VIEW: FOLDER DRAWER ---------------- */

  var projects = window.WORK_PROJECTS || [];
  var toolIcons = window.WORK_TOOL_ICONS || {};
  // Where each tab sits along its folder (0 = left, 1 = right): a
  // repeating left-to-right staircase, unless a project sets tabPosition.
  var TAB_POSITIONS = [0, 1 / 3, 2 / 3, 1];
  var MORPH_MS = 520;
  var MORPH_EASE = 'cubic-bezier(0.65, 0, 0.35, 1)';
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var detail = { root: null, project: null, pushed: false, busy: false };

  function txt(item, field) { return pick(item, field + 'Km', field); }
  function projectById(id) {
    for (var i = 0; i < projects.length; i++) if (projects[i].id === id) return projects[i];
    return null;
  }
  function cssUrl(path) { return 'url("' + new URL(path, document.baseURI).href + '")'; }
  function isColorFill(p) { return p.fill !== 'plain' && p.fill !== 'photo'; }

  // Folders are all white; a project's own colour and cover photo show
  // once it opens.
  function folderBg() { return '#FFFFFF'; }
  function heroBg(p) {
    if (p.coverImage) return 'linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(0,0,0,0.55)), ' + cssUrl(p.coverImage);
    if (p.fill === 'plain') return '#F2F2F2';
    if (p.fill === 'photo') return 'linear-gradient(135deg, #161616, #5a5a5a)';
    return p.fill;
  }
  function heroTone(p) { return (p.fill === 'plain' && !p.coverImage) ? 'light' : 'dark'; }

  function folderEl(id) { return document.querySelector('.folder[data-id="' + id + '"]'); }

  function buildFolder(p, i) {
    var a = document.createElement('a');
    a.className = 'folder';
    a.href = '#work/' + p.id;
    a.setAttribute('data-id', p.id);
    var pos = typeof p.tabPosition === 'number' ? p.tabPosition : TAB_POSITIONS[i % TAB_POSITIONS.length];
    a.style.setProperty('--p-d', String(pos));
    a.style.setProperty('--p-m', i % 2 ? '1' : '0');

    var body = el('span', 'folder-body');
    var tab = el('span', 'folder-tab');
    var title = el('span', 'folder-title');
    title.textContent = txt(p, 'title');
    var tag = el('span', 'folder-tag');
    tag.textContent = txt(p, 'category');
    tab.appendChild(title);
    tab.appendChild(tag);
    a.appendChild(body);
    a.appendChild(tab);

    a.addEventListener('click', function (e) {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
      e.preventDefault();
      openProject(p.id, { animate: true, push: true });
    });
    a.addEventListener('keydown', function (e) {
      if (e.key === ' ') { e.preventDefault(); openProject(p.id, { animate: true, push: true }); }
    });
    return a;
  }

  function renderWork() {
    var stage = document.getElementById('work-stage');
    var stack = el('div', 'folder-stack');
    stack.setAttribute('role', 'list');
    stack.setAttribute('aria-label', t('navWork'));
    projects.forEach(function (p, i) {
      var f = buildFolder(p, i);
      f.setAttribute('role', 'listitem');
      stack.appendChild(f);
    });
    var shelf = el('div', 'drawer-shelf');
    shelf.setAttribute('aria-hidden', 'true');
    shelf.appendChild(el('span', 'drawer-handle'));
    stack.appendChild(shelf);
    stage.innerHTML = '';
    stage.appendChild(stack);
  }

  /* ----- detail page ----- */

  function textBlock(tagName, className, text) {
    var e = el(tagName, className);
    e.textContent = text;
    return e;
  }

  function section(label, text) {
    var s = el('section', 'wd-section');
    s.appendChild(textBlock('h2', 'wd-h2', label));
    s.appendChild(textBlock('p', 'wd-text', text));
    return s;
  }

  function buildDetail(p) {
    var idx = projects.indexOf(p);
    var prev = projects[(idx - 1 + projects.length) % projects.length];
    var next = projects[(idx + 1) % projects.length];
    var title = txt(p, 'title');

    var sheet = el('div', 'wd-sheet');
    sheet.setAttribute('role', 'dialog');
    sheet.setAttribute('aria-modal', 'true');
    sheet.setAttribute('aria-label', title);

    var close = el('button', 'wd-close');
    close.type = 'button';
    close.appendChild(textBlock('span', 'wd-close-x', '✕'));
    close.firstChild.setAttribute('aria-hidden', 'true');
    close.appendChild(textBlock('span', null, t('backToFolders')));
    close.addEventListener('click', requestClose);
    sheet.appendChild(close);

    var hero = el('header', 'wd-hero');
    hero.setAttribute('data-tone', heroTone(p));
    hero.style.background = heroBg(p);
    hero.style.backgroundSize = 'cover';
    hero.style.backgroundPosition = 'center';
    hero.appendChild(textBlock('div', 'wd-hero-tag', txt(p, 'category') + (p.year && p.year !== '—' ? ' · ' + p.year : '')));
    if (!p.coverImage && !isColorFill(p)) hero.appendChild(textBlock('span', 'wd-ph-label', t('coverImage')));
    hero.appendChild(textBlock('h1', 'wd-title', title));
    sheet.appendChild(hero);

    var body = el('div', 'wd-body');
    var meta = el('dl', 'wd-meta');
    [['client', p.client], ['role', p.role], ['year', p.year], ['category', txt(p, 'category')]].forEach(function (m) {
      var cell = el('div');
      cell.appendChild(textBlock('dt', null, t(m[0])));
      cell.appendChild(textBlock('dd', null, m[1] || '—'));
      meta.appendChild(cell);
    });
    body.appendChild(meta);
    body.appendChild(textBlock('p', 'wd-lead', txt(p, 'overview')));

    var two = el('div', 'wd-two');
    two.appendChild(section(t('problem'), txt(p, 'problem')));
    two.appendChild(section(t('process'), txt(p, 'process')));
    body.appendChild(two);

    var shots = el('section', 'wd-section');
    shots.appendChild(textBlock('h2', 'wd-h2', t('keyScreens')));
    var grid = el('div', 'wd-screens');
    var images = p.detailImages && p.detailImages.length ? p.detailImages : [null, null, null, null];
    images.forEach(function (src, i) {
      var shot = el('div', 'wd-shot');
      if (src) {
        var img = document.createElement('img');
        img.src = src;
        img.alt = title + ' — ' + (i + 1);
        img.loading = 'lazy';
        shot.appendChild(img);
      } else {
        shot.textContent = t('image') + ' ' + (i + 1);
      }
      grid.appendChild(shot);
    });
    shots.appendChild(grid);
    body.appendChild(shots);

    body.appendChild(section(t('outcome'), txt(p, 'outcome')));

    if (p.tools && p.tools.length) {
      var toolsSec = el('section', 'wd-section');
      toolsSec.appendChild(textBlock('h2', 'wd-h2', t('toolsUsed')));
      var row = el('div', 'wd-tools');
      p.tools.forEach(function (name) {
        var chip = el('span', 'wd-tool', toolIcons[name] || '');
        chip.appendChild(document.createTextNode(name));
        row.appendChild(chip);
      });
      toolsSec.appendChild(row);
      body.appendChild(toolsSec);
    }

    if (projects.length > 1) {
      var pager = el('nav', 'wd-pager');
      pager.setAttribute('aria-label', t('navWork'));
      [[prev, 'wd-prev', '← ' + t('prevProject')], [next, 'wd-next', t('nextProject') + ' →']].forEach(function (pg) {
        var b = el('button', pg[1]);
        b.type = 'button';
        b.appendChild(textBlock('small', null, pg[2]));
        b.appendChild(textBlock('strong', null, txt(pg[0], 'title')));
        b.addEventListener('click', function () { swapProject(pg[0]); });
        pager.appendChild(b);
      });
      body.appendChild(pager);
    }

    sheet.appendChild(body);
    return sheet;
  }

  // Box + title geometry used by the folder-tab <-> hero morph.
  function snapshot(box, titleEl) {
    var r = box.getBoundingClientRect();
    var tr = titleEl.getBoundingClientRect();
    var cs = getComputedStyle(titleEl);
    return {
      top: r.top, left: r.left, width: r.width, height: r.height,
      radius: getComputedStyle(box).borderTopLeftRadius,
      tLeft: tr.left - r.left, tBottom: r.bottom - tr.bottom,
      fontSize: cs.fontSize, color: cs.color,
    };
  }

  function morph(p, from, to, toHero) {
    var ghost = el('div', 'wd-ghost');
    var folderFill = el('div', 'wd-ghost-fill');
    // start/end on the colour the tab actually shows (white while hovered)
    var liveTab = folderEl(p.id) && folderEl(p.id).querySelector('.folder-tab');
    folderFill.style.background = liveTab ? getComputedStyle(liveTab).backgroundColor : folderBg(p);
    var heroFill = el('div', 'wd-ghost-fill');
    heroFill.style.background = heroBg(p);
    heroFill.style.backgroundSize = 'cover';
    heroFill.style.backgroundPosition = 'center';
    var title = textBlock('div', 'wd-ghost-title', txt(p, 'title'));
    ghost.appendChild(folderFill);
    ghost.appendChild(heroFill);
    ghost.appendChild(title);
    document.body.appendChild(ghost);

    var opts = { duration: MORPH_MS, easing: MORPH_EASE, fill: 'forwards' };
    function box(s) {
      return { top: s.top + 'px', left: s.left + 'px', width: s.width + 'px', height: s.height + 'px',
        borderTopLeftRadius: s.radius, borderTopRightRadius: s.radius };
    }
    function label(s) { return { left: s.tLeft + 'px', bottom: s.tBottom + 'px', fontSize: s.fontSize, color: s.color }; }
    var anim = ghost.animate([box(from), box(to)], opts);
    title.animate([label(from), label(to)], opts);
    heroFill.animate([{ opacity: toHero ? 0 : 1 }, { opacity: toHero ? 1 : 0 }], opts);
    return anim.finished.then(function () { return ghost; });
  }

  function setPageInert(on) {
    var page = document.getElementById('page-root');
    if (on) page.setAttribute('inert', '');
    else page.removeAttribute('inert');
  }

  function openProject(id, opts) {
    var p = projectById(id);
    if (!p || detail.busy) return;
    if (detail.root) { swapProject(p, true); return; }
    if (state.view !== 'work') setView('work');
    if (opts.push) history.pushState(null, '', '#work/' + id);
    detail.pushed = !!opts.push;
    detail.project = p;

    var root = el('div', 'work-detail');
    var backdrop = el('div', 'wd-backdrop');
    backdrop.addEventListener('click', requestClose);
    root.appendChild(backdrop);
    var sheet = buildDetail(p);
    root.appendChild(sheet);
    document.body.appendChild(root);
    detail.root = root;
    document.documentElement.classList.add('wd-lock');
    setPageInert(true);

    var folder = folderEl(id);
    var animate = opts.animate && folder && !reducedMotion.matches && folder.getClientRects().length;
    if (folder) folder.classList.add('is-lifted');
    if (!animate) {
      root.classList.add('is-open');
      sheet.querySelector('.wd-close').focus();
      return;
    }

    detail.busy = true;
    var tab = folder.querySelector('.folder-tab');
    var hero = sheet.querySelector('.wd-hero');
    var from = snapshot(tab, tab.querySelector('.folder-title'));
    var to = snapshot(hero, hero.querySelector('.wd-title'));
    hero.classList.add('is-hidden');
    void root.offsetWidth;
    root.classList.add('is-open');
    morph(p, from, to, true).then(function (ghost) {
      hero.classList.remove('is-hidden');
      ghost.remove();
      detail.busy = false;
      sheet.querySelector('.wd-close').focus({ preventScroll: true });
    });
  }

  function closeDetail(animate) {
    var root = detail.root;
    if (!root || detail.busy) return;
    var p = detail.project;
    var folder = folderEl(p.id);

    function done() {
      root.remove();
      if (folder) folder.classList.remove('is-lifted');
      document.documentElement.classList.remove('wd-lock');
      setPageInert(false);
      detail.root = null;
      detail.project = null;
      detail.pushed = false;
      detail.busy = false;
      if (folder) folder.focus({ preventScroll: true });
    }

    if (!animate || !folder || reducedMotion.matches || !folder.getClientRects().length) { done(); return; }

    detail.busy = true;
    folder.scrollIntoView({ block: 'nearest' });
    var sheet = root.querySelector('.wd-sheet');
    var hero = sheet.querySelector('.wd-hero');
    var tab = folder.querySelector('.folder-tab');
    var from = snapshot(hero, hero.querySelector('.wd-title'));
    var to = snapshot(tab, tab.querySelector('.folder-title'));
    hero.classList.add('is-hidden');
    root.classList.remove('is-open');
    morph(p, from, to, false).then(function (ghost) {
      done();
      ghost.remove();
    });
  }

  function requestClose() {
    if (!detail.root || detail.busy) return;
    if (detail.pushed) {
      history.back(); // popstate -> closeDetail
    } else {
      history.replaceState(null, '', '#work');
      closeDetail(true);
    }
  }

  // Previous/next inside the open detail view: replace content in place.
  function swapProject(p, fromRoute) {
    if (!detail.root || detail.busy || p === detail.project) return;
    var oldFolder = folderEl(detail.project.id);
    if (oldFolder) oldFolder.classList.remove('is-lifted');
    var newFolder = folderEl(p.id);
    if (newFolder) newFolder.classList.add('is-lifted');
    detail.project = p;
    if (!fromRoute) history.replaceState(null, '', '#work/' + p.id);
    var oldSheet = detail.root.querySelector('.wd-sheet');
    var sheet = buildDetail(p);
    if (!reducedMotion.matches) sheet.classList.add('is-swapping');
    detail.root.replaceChild(sheet, oldSheet);
    sheet.querySelector('.wd-close').focus({ preventScroll: true });
  }

  function projectFromHash() {
    var m = /^#work\/([\w-]+)$/.exec(location.hash);
    return m ? projectById(m[1]) : null;
  }

  function onRouteChange() {
    var p = projectFromHash();
    if (p) openProject(p.id, { animate: true, push: false });
    else if (detail.root) closeDetail(true);
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
    tools.forEach(function (tool) { toolsRow.appendChild(el('div', 'chip', tool.label)); });

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
    locImg.src = IMG + 'icon-location-v2.png';
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

    document.querySelector('.nav-btn[data-view="home"] .nav-btn-label').textContent = t('navHome');
    document.querySelector('.nav-btn[data-view="about"] .nav-btn-label').textContent = t('navAbout');
    document.querySelector('.nav-btn[data-view="work"] .nav-btn-label').textContent = t('navWork');
    document.querySelector('.nav-btn[data-view="contact"] .nav-btn-label').textContent = t('navContact');

    document.getElementById('label-home-location').textContent = t('locationCity') + ', ' + t('locationCountry');
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
    if (nameEl) nameEl.textContent = state.lang === 'km' ? 'ឡាច ស្រីកា' : 'Sreyka Lach';
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
    if (view !== 'work' && /^#work/.test(location.hash)) history.replaceState(null, '', location.pathname + location.search);
    state.contactFormOpen = false;
    updateContactFormVisibility();

    document.querySelectorAll('.view').forEach(function (v) {
      v.hidden = v.getAttribute('data-view-panel') !== view;
    });
    var tabs = Array.prototype.slice.call(document.querySelectorAll('.nav-btn'));
    var activeIndex = tabs.findIndex(function (b) { return b.getAttribute('data-view') === view; });
    tabs.forEach(function (b, i) {
      var isActive = i === activeIndex;
      b.classList.toggle('is-active', isActive);
      b.setAttribute('aria-selected', String(isActive));
      b.setAttribute('tabindex', isActive ? '0' : '-1');
      // Radial grey shading: inactive tabs closer to the active one read
      // darker, fading out with distance, so the row reads as receding
      // folder tabs around the selected one.
      b.classList.remove('dist-1', 'dist-2', 'dist-3');
      if (!isActive) {
        var dist = Math.abs(i - activeIndex);
        b.classList.add('dist-' + Math.min(dist, 3));
      }
    });
    closeMobileNav();
  }

  function focusAdjacentTab(current, delta) {
    var tabs = Array.prototype.slice.call(document.querySelectorAll('.nav-btn'));
    var i = tabs.indexOf(current);
    var next = tabs[(i + delta + tabs.length) % tabs.length];
    next.focus();
    setView(next.getAttribute('data-view'));
  }

  /* ---------------- MOBILE NAV ---------------- */

  function closeMobileNav() {
    document.getElementById('nav-pill').classList.remove('is-open');
    document.getElementById('nav-hamburger').setAttribute('aria-expanded', 'false');
  }

  function toggleMobileNav() {
    var pill = document.getElementById('nav-pill');
    var isOpen = pill.classList.toggle('is-open');
    document.getElementById('nav-hamburger').setAttribute('aria-expanded', String(isOpen));
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
      btn.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight') { e.preventDefault(); focusAdjacentTab(btn, 1); }
        else if (e.key === 'ArrowLeft') { e.preventDefault(); focusAdjacentTab(btn, -1); }
      });
    });

    document.getElementById('nav-hamburger').addEventListener('click', toggleMobileNav);

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

    applyStaticLabels();
    renderHome();
    renderWork();
    renderAbout();
    renderContact();

    // #work opens the Work tab; #work/<id> also opens that project (no morph on load).
    var initial = projectFromHash();
    setView(/^#work/.test(location.hash) ? 'work' : 'home');
    if (initial) openProject(initial.id, { animate: false, push: false });
    window.addEventListener('popstate', onRouteChange);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && detail.root) requestClose();
    });

    // Synced 10s autoplay across featured, home project groups, and work categories.
    setInterval(function () {
      state.featuredIndex = (state.featuredIndex + 1) % featuredData.length;
      Object.keys(state.homeProjIndices).forEach(function (key) {
        state.homeProjIndices[key] = (state.homeProjIndices[key] + 1) % homeProjectGroups[key].length;
      });
      if (state.view === 'home') {
        renderFeatured();
        renderHomeProjCard('big', 'proj-big', true);
        renderHomeProjCard('small1', 'proj-small1', false);
        renderHomeProjCard('small2', 'proj-small2', false);
      }
    }, 10000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
