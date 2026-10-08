/* =====================================================================
   WORK PAGE — PROJECT FOLDERS
   ---------------------------------------------------------------------
   Every folder in the Work-page drawer (and its detail page) is built
   from this list. To add a project, copy one object and edit it; to
   reorder, move objects. No layout work needed.

   Fields
     id            URL slug: the project opens at  yoursite.com/#work/<id>
     title         Folder + detail title. titleKm is the Khmer version
                   (every text field accepts a ...Km twin; it falls back
                   to English when missing).
     category      Small label on the folder tab and the detail page.
     client, role, year
     fill          Folder look:
                     'plain'  white folder, black text
                     'photo'  coverImage fills the folder (white text);
                              dark gradient placeholder until you add one
                     '#RRGGBB' solid accent colour (white text)
     coverImage    Path to the cover photo (used by 'photo' folders and
                   as the detail-page hero for every fill type).
     detailImages  Paths for the "Key screens / deliverables" grid.
                   Empty = 4 labelled placeholder blocks.
     overview, problem, process, outcome   Detail-page text sections.
     tools         Names from WORK_TOOL_ICONS below.
     tabPosition   Optional 0–1: where the tab sits along the folder top
                   (0 = far left, 1 = far right). Omit for automatic.

   Put images in  assets/work/<id>/  and reference them by path.
   ===================================================================== */

window.WORK_PROJECTS = [
    {
      id: 'finance-app-redesign',
      title: 'Finance App Redesign', titleKm: 'រចនាកម្មវិធីហិរញ្ញវត្ថុឡើងវិញ',
      category: 'UI/UX Design', categoryKm: 'ការរចនា UI/UX',
      client: '—',   // REPLACE: client name
      role: '—',     // REPLACE: your role, e.g. 'UI/UX Designer'
      year: '—',     // REPLACE: e.g. '2025'
      fill: 'plain',
      coverImage: '',      // ADD: e.g. 'assets/work/finance-app-redesign/cover.jpg'
      detailImages: [],    // ADD: e.g. ['assets/work/finance-app-redesign/screen-1.jpg', ...]
      overview: 'PLACEHOLDER: 2–3 sentences on what this project is, who it was for, and your part in it.',
      problem: 'PLACEHOLDER: the problem or goal this project set out to solve.',
      process: 'PLACEHOLDER: how you approached it — research, sketches, iterations.',
      outcome: 'PLACEHOLDER: the result — launch, metrics, client feedback.',
      tools: ['Figma', 'Illustrator'],
    },
    {
      id: 'nomad-coffee-app',
      title: 'Nomad Coffee App', titleKm: 'កម្មវិធីនំបុ័ង Nomad Coffee',
      category: 'UI/UX Design', categoryKm: 'ការរចនា UI/UX',
      client: '—',   // REPLACE: client name
      role: '—',     // REPLACE: your role, e.g. 'UI/UX Designer'
      year: '—',     // REPLACE: e.g. '2025'
      fill: 'photo',
      coverImage: '',      // ADD: e.g. 'assets/work/nomad-coffee-app/cover.jpg'
      detailImages: [],    // ADD: e.g. ['assets/work/nomad-coffee-app/screen-1.jpg', ...]
      overview: 'Mobile ordering & loyalty experience.',
      overviewKm: 'បទពិសោធន៍បញ្ជាទិញ និងភាពស្មោះត្រង់លើទូរស័ព្ទ។',
      problem: 'PLACEHOLDER: the problem or goal this project set out to solve.',
      process: 'PLACEHOLDER: how you approached it — research, sketches, iterations.',
      outcome: 'PLACEHOLDER: the result — launch, metrics, client feedback.',
      tools: ['Figma', 'Adobe XD'],
    },
    {
      id: 'aura-skincare',
      title: 'Aura Skincare', titleKm: 'ម៉ាកយីហោ Aura Skincare',
      category: 'Branding', categoryKm: 'ម៉ាកយីហោ',
      client: '—',   // REPLACE: client name
      role: '—',     // REPLACE: your role, e.g. 'UI/UX Designer'
      year: '—',     // REPLACE: e.g. '2025'
      fill: 'plain',
      coverImage: '',      // ADD: e.g. 'assets/work/aura-skincare/cover.jpg'
      detailImages: [],    // ADD: e.g. ['assets/work/aura-skincare/screen-1.jpg', ...]
      overview: 'PLACEHOLDER: 2–3 sentences on what this project is, who it was for, and your part in it.',
      problem: 'PLACEHOLDER: the problem or goal this project set out to solve.',
      process: 'PLACEHOLDER: how you approached it — research, sketches, iterations.',
      outcome: 'PLACEHOLDER: the result — launch, metrics, client feedback.',
      tools: ['Illustrator', 'Photoshop'],
    },
    {
      id: 'festival-poster-series',
      title: 'Festival Poster Series', titleKm: 'ស៊េរីផ្ទាំងផ្សព្វផ្សាយពិធីបុណ្យ',
      category: 'Graphic Design', categoryKm: 'ការរចនាក្រាហ្វិក',
      client: '—',   // REPLACE: client name
      role: '—',     // REPLACE: your role, e.g. 'UI/UX Designer'
      year: '—',     // REPLACE: e.g. '2025'
      fill: '#E5241B',
      coverImage: '',      // ADD: e.g. 'assets/work/festival-poster-series/cover.jpg'
      detailImages: [],    // ADD: e.g. ['assets/work/festival-poster-series/screen-1.jpg', ...]
      overview: 'PLACEHOLDER: 2–3 sentences on what this project is, who it was for, and your part in it.',
      problem: 'PLACEHOLDER: the problem or goal this project set out to solve.',
      process: 'PLACEHOLDER: how you approached it — research, sketches, iterations.',
      outcome: 'PLACEHOLDER: the result — launch, metrics, client feedback.',
      tools: ['Illustrator', 'Photoshop'],
    },
    {
      id: 'finance-dashboard',
      title: 'Finance Dashboard', titleKm: 'ផ្ទាំងគ្រប់គ្រងហិរញ្ញវត្ថុ',
      category: 'UI/UX Design', categoryKm: 'ការរចនា UI/UX',
      client: '—',   // REPLACE: client name
      role: '—',     // REPLACE: your role, e.g. 'UI/UX Designer'
      year: '—',     // REPLACE: e.g. '2025'
      fill: 'plain',
      coverImage: '',      // ADD: e.g. 'assets/work/finance-dashboard/cover.jpg'
      detailImages: [],    // ADD: e.g. ['assets/work/finance-dashboard/screen-1.jpg', ...]
      overview: 'Personal budgeting & insights app.',
      overviewKm: 'កម្មវិធីគ្រប់គ្រងថវិកា និងវិភាគទិន្នន័យផ្ទាល់ខ្លួន។',
      problem: 'PLACEHOLDER: the problem or goal this project set out to solve.',
      process: 'PLACEHOLDER: how you approached it — research, sketches, iterations.',
      outcome: 'PLACEHOLDER: the result — launch, metrics, client feedback.',
      tools: ['Figma'],
    },
    {
      id: 'nomad-coffee-identity',
      title: 'Nomad Coffee Identity', titleKm: 'អត្តសញ្ញាណម៉ាក Nomad Coffee',
      category: 'Branding', categoryKm: 'ម៉ាកយីហោ',
      client: '—',   // REPLACE: client name
      role: '—',     // REPLACE: your role, e.g. 'UI/UX Designer'
      year: '—',     // REPLACE: e.g. '2025'
      fill: '#4A4D2C',
      coverImage: '',      // ADD: e.g. 'assets/work/nomad-coffee-identity/cover.jpg'
      detailImages: [],    // ADD: e.g. ['assets/work/nomad-coffee-identity/screen-1.jpg', ...]
      overview: 'PLACEHOLDER: 2–3 sentences on what this project is, who it was for, and your part in it.',
      problem: 'PLACEHOLDER: the problem or goal this project set out to solve.',
      process: 'PLACEHOLDER: how you approached it — research, sketches, iterations.',
      outcome: 'PLACEHOLDER: the result — launch, metrics, client feedback.',
      tools: ['Illustrator', 'Photoshop'],
    },
    {
      id: 'neon-dreams',
      title: 'Neon Dreams', titleKm: 'ក្តីស្រមៃនីអុន',
      category: 'Digital Art', categoryKm: 'សិល្បៈឌីជីថល',
      client: '—',   // REPLACE: client name
      role: '—',     // REPLACE: your role, e.g. 'UI/UX Designer'
      year: '—',     // REPLACE: e.g. '2025'
      fill: 'photo',
      coverImage: '',      // ADD: e.g. 'assets/work/neon-dreams/cover.jpg'
      detailImages: [],    // ADD: e.g. ['assets/work/neon-dreams/screen-1.jpg', ...]
      overview: 'PLACEHOLDER: 2–3 sentences on what this project is, who it was for, and your part in it.',
      problem: 'PLACEHOLDER: the problem or goal this project set out to solve.',
      process: 'PLACEHOLDER: how you approached it — research, sketches, iterations.',
      outcome: 'PLACEHOLDER: the result — launch, metrics, client feedback.',
      tools: ['Procreate', 'Photoshop'],
    },
    {
      id: 'wellness-tracker',
      title: 'Wellness Tracker', titleKm: 'កម្មវិធីតាមដានសុខភាព',
      category: 'UI/UX Design', categoryKm: 'ការរចនា UI/UX',
      client: '—',   // REPLACE: client name
      role: '—',     // REPLACE: your role, e.g. 'UI/UX Designer'
      year: '—',     // REPLACE: e.g. '2025'
      fill: 'plain',
      coverImage: '',      // ADD: e.g. 'assets/work/wellness-tracker/cover.jpg'
      detailImages: [],    // ADD: e.g. ['assets/work/wellness-tracker/screen-1.jpg', ...]
      overview: 'Daily habits & mindfulness companion.',
      overviewKm: 'កម្មវិធីដៃគូទម្លាប់ប្រចាំថ្ងៃ និងស្មារតីភ្ញាក់រឿយៗ។',
      problem: 'PLACEHOLDER: the problem or goal this project set out to solve.',
      process: 'PLACEHOLDER: how you approached it — research, sketches, iterations.',
      outcome: 'PLACEHOLDER: the result — launch, metrics, client feedback.',
      tools: ['Figma', 'Illustrator'],
    },
    {
      id: 'studio-mark',
      title: 'Studio Mark', titleKm: 'និមិត្តសញ្ញា Studio Mark',
      category: 'Branding', categoryKm: 'ម៉ាកយីហោ',
      client: '—',   // REPLACE: client name
      role: '—',     // REPLACE: your role, e.g. 'UI/UX Designer'
      year: '—',     // REPLACE: e.g. '2025'
      fill: '#111111',
      coverImage: '',      // ADD: e.g. 'assets/work/studio-mark/cover.jpg'
      detailImages: [],    // ADD: e.g. ['assets/work/studio-mark/screen-1.jpg', ...]
      overview: 'PLACEHOLDER: 2–3 sentences on what this project is, who it was for, and your part in it.',
      problem: 'PLACEHOLDER: the problem or goal this project set out to solve.',
      process: 'PLACEHOLDER: how you approached it — research, sketches, iterations.',
      outcome: 'PLACEHOLDER: the result — launch, metrics, client feedback.',
      tools: ['Illustrator'],
    },
    {
      id: 'album-cover-set',
      title: 'Album Cover Set', titleKm: 'ក្របសៀវភៅអាល់ប៊ុមចម្រៀង',
      category: 'Graphic Design', categoryKm: 'ការរចនាក្រាហ្វិក',
      client: '—',   // REPLACE: client name
      role: '—',     // REPLACE: your role, e.g. 'UI/UX Designer'
      year: '—',     // REPLACE: e.g. '2025'
      fill: 'photo',
      coverImage: '',      // ADD: e.g. 'assets/work/album-cover-set/cover.jpg'
      detailImages: [],    // ADD: e.g. ['assets/work/album-cover-set/screen-1.jpg', ...]
      overview: 'PLACEHOLDER: 2–3 sentences on what this project is, who it was for, and your part in it.',
      problem: 'PLACEHOLDER: the problem or goal this project set out to solve.',
      process: 'PLACEHOLDER: how you approached it — research, sketches, iterations.',
      outcome: 'PLACEHOLDER: the result — launch, metrics, client feedback.',
      tools: ['Photoshop', 'Procreate'],
    },
];

/* Icons for the "Tools used" row on detail pages. Key = name used in
   a project's tools list. Add more as  'Name': '<svg …>…</svg>'. */
window.WORK_TOOL_ICONS = {
    'Illustrator': '<svg viewBox="22 21 36 36"><path fill="#FF9A00" d="M39.5419 44.2615H34.2267L33.1453 47.7817C33.1153 47.9125 32.9974 48.0051 32.8692 47.9987H30.1771C30.0235 47.9987 29.9699 47.9103 30.016 47.7335L34.6179 33.8457C34.6639 33.7011 34.71 33.5363 34.756 33.3515C34.8162 33.0298 34.847 32.7028 34.848 32.375C34.8348 32.2782 34.9181 32.1926 35.0091 32.2062H38.6676C38.7747 32.2062 38.8361 32.2464 38.8516 32.3268L44.0749 47.7576C44.1209 47.9184 44.0748 47.9988 43.9368 47.9987H40.9455C40.8406 48.0109 40.7404 47.9374 40.7154 47.8299L39.5419 44.2615ZM35.0551 41.2236H38.6906C38.0933 39.1383 37.4192 37.0805 36.8729 34.9789C36.2834 37.084 35.6403 39.1806 35.0551 41.2236Z"/><path fill="#FF9A00" d="M47.1808 34.7619C46.9462 34.7717 46.7121 34.7296 46.4941 34.6382C46.276 34.5468 46.0788 34.4082 45.9153 34.2314C45.7523 34.047 45.6257 33.8307 45.5428 33.5948C45.4599 33.359 45.4222 33.1083 45.4321 32.8571C45.4237 32.6085 45.4655 32.3608 45.5547 32.1302C45.6439 31.8996 45.7786 31.6913 45.9498 31.519C46.1194 31.3484 46.3196 31.2148 46.5388 31.1258C46.758 31.0368 46.9918 30.9943 47.2268 31.0006C47.7791 31.0006 48.2125 31.1734 48.5269 31.519C48.6856 31.6986 48.809 31.9092 48.8899 32.1388C48.9709 32.3685 49.0078 32.6125 48.9986 32.8571C49.0082 33.1093 48.9694 33.3608 48.8844 33.5969C48.7994 33.833 48.67 34.0488 48.5039 34.2314C48.3302 34.4108 48.1231 34.5505 47.8954 34.6418C47.6677 34.7331 47.4244 34.774 47.1808 34.7619ZM45.5931 47.7575V36.2326C45.5931 36.088 45.6543 36.0156 45.7772 36.0156H48.6074C48.73 36.0156 48.7914 36.0879 48.7915 36.2326V47.7575C48.7915 47.9184 48.7302 47.9987 48.6074 47.9986H45.8003C45.6622 47.9986 45.5932 47.9182 45.5931 47.7575Z"/></svg>',
    'Photoshop': '<svg viewBox="202 21 36 36"><path fill="#31A8FF" d="M211 45.6144V32.2213C211 32.1302 211.037 32.0781 211.125 32.0781C212.414 32.0781 213.703 32 214.993 32C217.086 32 219.352 32.7278 220.146 34.9546C220.333 35.5012 220.433 36.0609 220.433 36.6466C220.433 37.766 220.184 38.6901 219.685 39.419C218.29 41.455 215.874 41.4234 213.708 41.4234V45.6014C213.725 45.7251 213.621 45.7836 213.521 45.7836H211.15C211.05 45.7836 211 45.7316 211 45.6144ZM213.72 34.5901V38.9634C214.579 39.0274 215.478 39.0343 216.303 38.7552C217.214 38.4879 217.713 37.6858 217.713 36.7247C217.738 35.9057 217.3 35.12 216.553 34.8244C215.737 34.4796 214.6 34.459 213.72 34.5901Z"/><path fill="#31A8FF" d="M228.216 38.0994C227.838 37.897 227.436 37.749 227.021 37.6593C226.486 37.5315 224.38 37.0838 224.379 38.2041C224.397 38.8296 225.374 39.1361 225.805 39.3148C227.319 39.8435 229.033 40.7886 228.999 42.6886C229.046 45.0538 226.792 45.9993 224.861 45.9995C223.855 46.0101 222.808 45.8517 221.888 45.4127C221.8 45.3654 221.743 45.2643 221.747 45.1613V42.8981C221.737 42.8074 221.833 42.7281 221.908 42.7933C222.809 43.3479 223.878 43.6171 224.921 43.6315C225.382 43.6315 226.294 43.5861 226.287 42.8981C226.287 42.2378 225.196 41.9343 224.76 41.7665C224.13 41.5375 223.532 41.2203 222.983 40.8235C222.215 40.2669 221.734 39.3745 221.747 38.3927C221.743 36.1657 223.817 35.1661 225.685 35.1656C226.558 35.1583 227.496 35.2241 228.308 35.5847C228.425 35.6197 228.449 35.7449 228.449 35.8571V37.9736C228.456 38.105 228.313 38.1497 228.216 38.0994Z"/></svg>',
    'Figma': '<svg viewBox="94 57 36 36"><path fill="#0ACF83" d="M108.668 86.0001C110.691 86.0001 112.334 84.3578 112.334 82.3348V78.6694H108.668C106.645 78.6694 105.003 80.3117 105.003 82.3348C105.003 84.3578 106.645 86.0001 108.668 86.0001Z"/><path fill="#A259FF" d="M105 74.9998C105 72.9768 106.642 71.3345 108.665 71.3345H112.331V78.669H108.665C106.642 78.669 105 77.0267 105 75.0037V74.9998Z"/><path fill="#F24E1E" d="M105 67.6653C105 65.6423 106.642 64 108.665 64H112.331V71.3345H108.665C106.642 71.3345 105 69.6922 105 67.6692V67.6653Z"/><path fill="#FF7262" d="M112.3 64H115.965C117.988 64 119.63 65.6423 119.63 67.6653C119.63 69.6884 117.988 71.3307 115.965 71.3307H112.3V64Z"/><path fill="#1ABCFE" d="M119.669 74.9998C119.669 77.0229 118.027 78.6651 116.004 78.6651C113.981 78.6651 112.3 77.0229 112.3 74.9998C112.3 72.9768 113.942 71.3345 115.965 71.3345C117.988 71.3345 119.63 72.9768 119.63 74.9998H119.669Z"/></svg>',
    'Adobe XD': '<svg viewBox="22 93 36 36"><path fill="#0D0D0D" d="M40.7267 105.247L37.2066 111.224L40.9727 117.571C41.051 117.715 40.9727 117.746 40.8591 117.746H38.1718C37.9826 117.746 37.8501 117.74 37.7744 117.61C37.5218 117.104 37.2695 116.601 37.0174 116.101C36.7649 115.601 36.4968 115.092 36.2131 114.573C35.9292 114.054 35.6485 113.528 35.371 112.996C35.1184 113.515 34.8377 114.034 34.5666 114.553C34.2952 115.072 34.0271 115.588 33.7623 116.101C33.4974 116.614 33.2262 117.123 32.9486 117.629C32.898 117.746 32.8096 117.758 32.6836 117.758H30.0909C29.9891 117.758 29.9768 117.681 30.0342 117.59L33.6866 111.419L30.1288 105.227C30.0641 105.139 30.1198 105.045 30.2234 105.052H32.8918C33.0073 105.046 33.1094 105.089 33.1756 105.188C33.4028 105.708 33.6551 106.227 33.9326 106.746C34.21 107.265 34.4907 107.778 34.7748 108.284C35.0587 108.79 35.3394 109.303 35.5791 109.822C35.8313 109.29 36.0868 108.771 36.3456 108.265C36.604 107.758 36.869 107.249 37.1404 106.736C37.4116 106.224 37.6734 105.714 37.9258 105.208C37.9593 105.097 38.0395 105.041 38.1529 105.052H40.632C40.7267 105.052 40.7658 105.182 40.7267 105.247Z"/><path fill="#0D0D0D" d="M46.1579 117.999C44.4889 118.025 42.7408 117.336 41.862 115.809C41.4329 115.076 41.2184 114.158 41.2186 113.054C41.2114 112.161 41.4334 111.281 41.862 110.504C42.968 108.521 45.196 107.778 47.3123 107.973V104.137C47.3123 104.047 47.3502 104.001 47.4259 104.001H49.8104C49.8756 103.991 49.9333 104.051 49.924 104.118V115.624C49.924 116.099 49.9709 116.572 49.9997 117.045C50.0043 117.126 49.9577 117.206 49.8861 117.24C48.7079 117.745 47.4331 117.993 46.1579 117.999ZM47.3123 115.585V110.27C45.5838 109.788 43.9056 111.109 43.9059 112.937C43.8648 114.828 45.4893 116.134 47.3123 115.585Z"/></svg>',
    'Procreate': '<svg viewBox="166 93 36 36"><defs><linearGradient id="paint0_pc" x1="178.201" y1="114.383" x2="177.638" y2="122.758" gradientUnits="userSpaceOnUse"><stop stop-color="#FD5200"/><stop offset="0.27225" stop-color="#FFDC38"/><stop offset="0.96259" stop-color="#F3FEAB"/></linearGradient><linearGradient id="paint1_pc" x1="187.627" y1="105.362" x2="171.762" y2="116.799" gradientUnits="userSpaceOnUse"><stop stop-color="#0C64CC"/><stop offset="0.28457" stop-color="#1F9FE3"/><stop offset="0.485108" stop-color="#1B9DEB"/><stop offset="0.756932" stop-color="#72F07F"/><stop offset="0.858448" stop-color="#DBFEC8"/><stop offset="0.991306" stop-color="#F6F9B1"/></linearGradient><linearGradient id="paint2_pc" x1="187.709" y1="100.024" x2="182.068" y2="121.792" gradientUnits="userSpaceOnUse"><stop offset="0.407169" stop-color="#9E010A"/><stop offset="0.624404" stop-color="#FC56A4"/><stop offset="0.688975" stop-color="#F2A780"/><stop offset="0.743082" stop-color="#FFC78A"/></linearGradient><linearGradient id="paint3_pc" x1="195.195" y1="102.946" x2="188.43" y2="98.9195" gradientUnits="userSpaceOnUse"><stop stop-color="#4226A2"/><stop offset="0.322086" stop-color="#7357CB"/><stop offset="0.628334" stop-color="#3B8FE4"/></linearGradient><linearGradient id="paint4_pc" x1="195.92" y1="102.141" x2="172.323" y2="120.584" gradientUnits="userSpaceOnUse"><stop stop-color="#7C4ADF"/><stop offset="0.345854" stop-color="#E251D8"/><stop offset="0.729692" stop-color="#FCDFBC"/><stop offset="0.831215" stop-color="#F6F8B0"/><stop offset="0.918555" stop-color="#FFFFF2"/><stop offset="0.98944" stop-color="#F6F8B0"/></linearGradient><filter id="filter5_pc" x="155.464" y="79.4014" width="59.749" height="56.5103" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="bg"/><feBlend mode="normal" in="SourceGraphic" in2="bg" result="shape"/><feGaussianBlur stdDeviation="10"/></filter><filter id="filter6_pc" x="169.141" y="93" width="32.6396" height="29.1543" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="bg"/><feBlend mode="normal" in="SourceGraphic" in2="bg" result="shape"/><feGaussianBlur stdDeviation="3"/></filter><filter id="filter7_pc" x="172.339" y="94.8333" width="27.4505" height="23.7962" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="bg"/><feBlend mode="normal" in="SourceGraphic" in2="bg" result="shape"/><feGaussianBlur stdDeviation="2.08333"/></filter><mask id="pcMask" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="172" y="99" width="24" height="24"><path fill="#733C3C" d="M182.792 108.826C179.007 109.953 172.322 112.53 172 123C173.772 117.282 176.188 116.557 181.664 115.268C187.141 113.98 190.723 112.318 193.584 108.606C196.445 104.895 195.597 99 195.597 99C195.597 102.06 193.423 104.074 191.329 105.523C189.235 106.973 186.577 107.698 182.792 108.826Z"/></mask></defs><g mask="url(#pcMask)"><path fill="url(#paint0_pc)" d="M182.792 108.826C179.007 109.953 172.322 112.53 172 123C173.208 117.362 176.188 116.557 181.664 115.268C187.141 113.98 190.121 112.53 193.423 108.584C196.725 104.638 195.597 99 195.597 99C195.597 102.06 193.423 104.074 191.329 105.523C189.235 106.973 186.577 107.698 182.792 108.826Z"/><path fill="url(#paint1_pc)" d="M172.049 122.075C172.028 122.376 172.013 122.684 172.003 123C171.982 122.712 171.998 122.402 172.049 122.075C172.725 112.376 179.124 109.919 182.795 108.826C186.58 107.698 189.238 106.973 191.332 105.523C193.426 104.074 195.6 102.06 195.6 99C195.6 99 196.728 104.638 193.426 108.584C190.124 112.53 187.386 110.919 181.909 112.208C176.91 113.384 172.583 118.653 172.049 122.075Z"/><path fill="url(#paint2_pc)" d="M182.47 110.114C174.998 113.435 171.92 119.725 172.001 123C172.242 119.859 175.061 115.832 178.444 114.946C181.826 114.06 188.35 114.946 192.135 111.081C195.92 107.215 195.598 99 195.598 99C195.598 102.223 190.444 106.57 182.47 110.114Z"/><g filter="url(#filter5_pc)"><path fill="#00418F" d="M179.034 113.073C178.23 113.808 177.173 114.701 175.464 115.911C176.4 114.863 177.707 113.893 179.034 113.073C181.082 111.205 181.493 110.371 186.858 107.987C194.831 104.443 195.115 102.625 195.115 99.4014C195.115 99.4014 196.001 104.314 192.457 108.099C188.914 111.885 185.048 110.435 184.403 110.515C183.986 110.568 181.474 111.567 179.034 113.073Z"/></g><path fill="url(#paint3_pc)" d="M182.47 110.114C174.998 113.435 171.92 119.725 172.001 123C172.242 119.859 175.383 113.738 180.538 112.772C185.692 111.805 188.913 111.886 192.457 108.101C196.001 104.315 195.598 99 195.598 99C195.598 102.223 190.444 106.57 182.47 110.114Z"/><g filter="url(#filter6_pc)"><path fill="#B4162E" fill-opacity="0.6" d="M175.897 115.407C175.445 115.847 175.227 116.133 175.141 116.154C175.312 115.935 175.571 115.678 175.897 115.407C177.14 114.196 180.153 111.816 187.06 110.517C189.315 110.087 190.845 108.745 192.859 107.054C194.872 105.362 195.597 102.06 195.597 99C195.597 99 196.805 105.362 193.02 109.228C189.235 113.094 180.617 112.852 178.926 113.577C177.747 114.082 176.647 114.783 175.897 115.407Z"/></g><g filter="url(#filter7_pc)"><path fill="#4C2FA9" d="M182.627 110.758C180.613 111.725 179.727 112.369 176.506 114.463C178.439 113.255 178.68 113.416 182.224 111.483C187.459 108.826 188.586 112.53 192.372 108.664C196.157 104.799 195.593 99 195.593 99C195.593 102.06 195.029 104.638 193.016 106.329C191.002 108.02 184.64 109.792 182.627 110.758Z"/></g><path fill="url(#paint4_pc)" d="M184.162 109.631C174.739 111.403 171.92 119.725 172.001 123C172.242 119.859 174.981 116.235 178.524 114.302C183.759 111.644 189.236 113.094 193.021 109.228C196.806 105.362 195.598 99 195.598 99C195.598 102.06 194.47 104.96 192.457 106.651C190.444 108.342 186.417 109.201 184.162 109.631Z"/></g></svg>',
};
