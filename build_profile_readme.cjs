const fs = require('fs');
const path = require('path');

const root = __dirname;
const assetsDir = path.join(root, 'assets');
const verificationDir = path.join(root, 'verification');
const frameDir = path.join(verificationDir, 'frames');
const noMotionDir = path.join(verificationDir, 'animation-removed');

for (const dir of [assetsDir, frameDir, noMotionDir]) fs.mkdirSync(dir, { recursive: true });

const b64 = (file) => fs.readFileSync(file).toString('base64');
const idPng = b64(path.join(root, 'id.png'));
const pointingPng = b64(path.join(root, 'right_pointing.png'));
const displayFont = b64(path.join(root, 'portfolio', 'node_modules', 'next', 'dist', 'esm', 'next-devtools', 'server', 'font', 'geist-latin.woff2'));
const monoFont = b64(path.join(root, 'portfolio', 'node_modules', 'next', 'dist', 'esm', 'next-devtools', 'server', 'font', 'geist-mono-latin.woff2'));

const img = (data, mime = 'image/png') => `data:${mime};base64,${data}`;
const commonStyle = `
  @font-face{font-family:UltronDisplay;src:url(data:font/woff2;base64,${displayFont}) format('woff2');font-weight:100 900;font-style:normal;font-display:block}
  @font-face{font-family:UltronMono;src:url(data:font/woff2;base64,${monoFont}) format('woff2');font-weight:100 900;font-style:normal;font-display:block}
  :root{font-family:UltronDisplay,Arial,sans-serif;color:#f5f7ff}
  .display{font-family:UltronDisplay,Arial,sans-serif}.mono{font-family:UltronMono,Consolas,monospace}
  .ink{fill:#f5f7ff}.muted{fill:#aeb8cf}.blue{fill:#247bff}.red{fill:#ff354f}.line{stroke:#8292b5;stroke-opacity:.28}.hair{stroke:url(#ultron-gradient);stroke-width:1}
  .card{fill:#0b1222;stroke:#253452;stroke-width:1}.tiny{font-size:14px;letter-spacing:2px}.label{font-size:17px;letter-spacing:1.4px}.body{font-size:22px;letter-spacing:.2px}.small{font-size:18px}.title{font-size:67px;font-weight:800;letter-spacing:-2.8px}.subtitle{font-size:30px;font-weight:700;letter-spacing:-.6px}
  .reveal{animation-fill-mode:both;animation-timing-function:cubic-bezier(.22,.8,.24,1)}
  .reveal-up{animation:ultron-rise 900ms .1s both}.reveal-fade{animation:ultron-fade 900ms .2s both}.reveal-right{animation:ultron-right 900ms .25s both}
  @keyframes ultron-rise{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
  @keyframes ultron-fade{from{opacity:0}to{opacity:1}}
  @keyframes ultron-right{from{opacity:0;transform:translateX(30px)}to{opacity:1;transform:translateX(0)}}
  @media (prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:1ms!important;animation-iteration-count:1!important;scroll-behavior:auto!important}.smil{display:none!important}}
`;

const defs = (prefix, extra = '') => `
  <defs>
    <linearGradient id="${prefix}-gradient" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#247bff"/><stop offset=".58" stop-color="#247bff"/><stop offset="1" stop-color="#ff354f"/></linearGradient>
    <linearGradient id="${prefix}-foil" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ffffff" stop-opacity="0"/><stop offset=".48" stop-color="#ffffff" stop-opacity=".48"/><stop offset=".6" stop-color="#ffffff" stop-opacity="0"/><stop offset="1" stop-color="#ffffff" stop-opacity="0"/></linearGradient>
    <pattern id="${prefix}-dots" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.2" fill="#92a1bf" opacity=".14"/></pattern>
    ${extra}
  </defs>`;

const bg = (prefix, height) => `
  <rect width="1200" height="${height}" fill="#070b16"/>
  <rect width="1200" height="${height}" fill="url(#${prefix}-dots)" opacity=".55"/>
  <path d="M0 ${height - 24}H1200" stroke="#253452" stroke-opacity=".7"/>
  <path d="M40 36H300M900 ${height - 36}H1160" stroke="url(#${prefix}-gradient)" stroke-width="2" opacity=".7"/>
`;

const end = (title, desc) => `\n  <title>${title}</title><desc>${desc}</desc>\n</svg>\n`;

function hero() {
  const prefix = 'ultron-hero';
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1200" height="620" viewBox="0 0 1200 620" role="img" aria-labelledby="${prefix}-title ${prefix}-desc">
  ${defs(prefix, `<clipPath id="${prefix}-hello-clip"><rect x="78" y="58" width="410" height="25"><animate class="smil" attributeName="width" values="0;410" dur=".85s" begin="0s" fill="freeze"/></rect></clipPath><mask id="${prefix}-name-mask"><rect x="76" y="120" width="720" height="104" fill="black"/><rect x="76" y="120" width="720" height="104" fill="white"><animate class="smil" attributeName="y" values="330;120" dur="1.1s" begin="0s" fill="freeze"/></rect></mask>`)}
  <style>${commonStyle}</style>
  ${bg(prefix, 620)}
  <g class="reveal reveal-fade">
    <text x="78" y="78" class="mono tiny blue" clip-path="url(#${prefix}-hello-clip)">HELLO, I BUILD THE HARD PARTS.</text>
    <rect x="78" y="94" width="42" height="3" fill="#ff354f"><animate class="smil" attributeName="x" values="78;494" dur=".85s" begin="0s" fill="freeze"/></rect>
  </g>
  <g class="reveal reveal-up">
    <text x="74" y="219" class="display title ink" mask="url(#${prefix}-name-mask)">SWARAJ</text>
    <text x="78" y="267" class="mono label red">PUPPALWAR / ULTRONTHEAI</text>
    <text x="78" y="318" class="display subtitle ink">Founder &amp; Chief Technology Officer</text>
    <text x="78" y="351" class="body muted">Lioran Group · Lioran Developer Solutions</text>
  </g>
  <g class="reveal reveal-right">
    <rect x="78" y="385" width="588" height="66" rx="18" class="card"/>
    <text x="102" y="413" class="mono tiny blue">PITCH</text>
    <text x="102" y="439" class="body ink">Building reliable, scalable developer infrastructure from India.</text>
  </g>
  <g transform="translate(700 48)">
    <circle cx="215" cy="210" r="180" fill="#0b1222" stroke="#253452"/>
    <circle cx="215" cy="210" r="171" fill="none" stroke="url(#${prefix}-gradient)" stroke-width="2" stroke-dasharray="4 12"/>
    <image x="44" y="30" width="342" height="342" preserveAspectRatio="xMidYMax meet" href="${img(idPng)}" xlink:href="${img(idPng)}"/>
    <path d="M32 404H398" class="hair"/>
    <text x="44" y="434" class="mono tiny muted">CHANDRAPUR, MAHARASHTRA · INDIA</text>
    <text x="44" y="459" class="mono tiny muted">LIORAN GROUP / LDS</text>
  </g>
  <g transform="translate(78 578)" class="mono tiny muted"><circle cx="7" cy="-5" r="5" fill="#247bff"/><text x="22" y="0">SYSTEMS · DATA · CLOUD</text></g>
  <g transform="translate(698 578)" class="mono tiny" aria-label="cycling roles">
    <text x="0" y="0" class="blue">SOFTWARE ENGINEER<animate class="smil" attributeName="opacity" values="1;1;0;0;0;1" keyTimes="0;.24;.25;.49;.5;1" dur="12s" repeatCount="indefinite"/></text>
    <text x="0" y="0" class="blue" opacity="0">DATABASE ENGINEER<animate class="smil" attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;.24;.25;.49;.5;.99" dur="12s" repeatCount="indefinite"/></text>
    <text x="0" y="0" class="blue" opacity="0">FULL-STACK DEVELOPER<animate class="smil" attributeName="opacity" values="0;0;0;0;1;0" keyTimes="0;.49;.5;.74;.75;1" dur="12s" repeatCount="indefinite"/></text>
    <text x="0" y="0" class="blue" opacity="0">INFRASTRUCTURE BUILDER<animate class="smil" attributeName="opacity" values="0;0;0;0;0;1" keyTimes="0;.74;.75;.99;1;1" dur="12s" repeatCount="indefinite"/></text>
  </g>
  ${end(`${prefix}-title`, `${prefix}-desc`)}
`;
}

function aboutLife() {
  const prefix = 'ultron-about';
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="620" viewBox="0 0 1200 620" role="img" aria-labelledby="${prefix}-title ${prefix}-desc">
  ${defs(prefix)}<style>${commonStyle}</style>${bg(prefix, 620)}
  <text x="74" y="78" class="mono tiny red">01 / WHAT I BUILD</text>
  <text x="74" y="140" class="display title ink">Built close to the metal.</text>
  <text x="78" y="181" class="body muted">Systems thinking, product taste, and a bias for dependable primitives.</text>
  <g class="reveal reveal-up">
    <rect x="74" y="224" width="418" height="306" rx="24" class="card"/>
    <path d="M108 268h54M108 280h86" stroke="#247bff" stroke-width="4" stroke-linecap="round"/>
    <text x="108" y="329" class="display subtitle ink">What I ship</text>
    <text x="108" y="372" class="body ink">01  Database internals</text><text x="108" y="402" class="small muted">Storage engines · WAL · indexing</text>
    <text x="108" y="445" class="body ink">02  Cloud platforms</text><text x="108" y="475" class="small muted">Deployments · operations · APIs</text>
    <text x="108" y="518" class="body ink">03  Developer experiences</text>
  </g>
  <g transform="translate(548 224)">
    <rect width="578" height="306" rx="24" class="card"/>
    <text x="34" y="48" class="mono tiny blue">INTERESTS / 03 SLIDES</text>
    <g>
      <g opacity="1"><text x="34" y="104" class="display subtitle ink">Systems Programming</text><text x="34" y="144" class="body muted">Rust, concurrency, storage, and the joy of making</text><text x="34" y="174" class="body muted">a machine do exactly what you meant.</text><circle cx="48" cy="235" r="28" fill="#247bff" opacity=".15"/><text x="38" y="244" class="mono subtitle blue">01</text><animate class="smil" attributeName="opacity" values="1;1;0;0" keyTimes="0;.32;.34;1" dur="12s" repeatCount="indefinite"/></g>
      <g opacity="0"><text x="34" y="104" class="display subtitle ink">Database Internals</text><text x="34" y="144" class="body muted">WALs, indexes, recovery, and the little decisions</text><text x="34" y="174" class="body muted">that turn storage into a product.</text><circle cx="48" cy="235" r="28" fill="#ff354f" opacity=".15"/><text x="38" y="244" class="mono subtitle red">02</text><animate class="smil" attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.32;.34;.65;.67" dur="12s" repeatCount="indefinite"/></g>
      <g opacity="0"><text x="34" y="104" class="display subtitle ink">Developer Content</text><text x="34" y="144" class="body muted">Making infrastructure legible through writing, demos,</text><text x="34" y="174" class="body muted">and a healthy amount of visual polish.</text><circle cx="48" cy="235" r="28" fill="#247bff" opacity=".15"/><text x="38" y="244" class="mono subtitle blue">03</text><animate class="smil" attributeName="opacity" values="0;0;0;0;1;1" keyTimes="0;.65;.67;.98;.99;1" dur="12s" repeatCount="indefinite"/></g>
    </g>
    <g transform="translate(34 273)"><rect width="160" height="5" rx="2.5" fill="#253452"/><rect width="160" height="5" rx="2.5" fill="#247bff"><animate class="smil" attributeName="width" values="0;160;0" keyTimes="0;.333;1" dur="12s" repeatCount="indefinite"/></rect></g>
    <g transform="translate(210 273)"><rect width="160" height="5" rx="2.5" fill="#253452"/><rect width="160" height="5" rx="2.5" fill="#ff354f"><animate class="smil" attributeName="width" values="0;0;160;0" keyTimes="0;.333;.666;1" dur="12s" repeatCount="indefinite"/></rect></g>
    <g transform="translate(386 273)"><rect width="160" height="5" rx="2.5" fill="#253452"/><rect width="160" height="5" rx="2.5" fill="#247bff"><animate class="smil" attributeName="width" values="0;0;0;160" keyTimes="0;.333;.666;1" dur="12s" repeatCount="indefinite"/></rect></g>
  </g>
  <text x="76" y="580" class="mono tiny muted">FOUNDER · SOFTWARE ENGINEER · DATABASE ENGINEER · FULL-STACK DEVELOPER</text>
  ${end(`${prefix}-title`, `${prefix}-desc`)}
`;
}

function orbitNode(x, y, label, color = '#247bff') {
  return `<g transform="translate(${x} ${y})"><circle r="34" fill="#0b1222" stroke="${color}" stroke-width="2"/><text y="-3" text-anchor="middle" class="mono" font-size="13" fill="${color}">${label}</text><circle cy="17" r="3" fill="${color}"/></g>`;
}

function stack() {
  const prefix = 'ultron-stack';
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="620" viewBox="0 0 1200 620" role="img" aria-labelledby="${prefix}-title ${prefix}-desc">
  ${defs(prefix)}<style>${commonStyle}</style>${bg(prefix, 620)}
  <text x="74" y="78" class="mono tiny red">02 / TECH STACK</text>
  <text x="74" y="140" class="display title ink">A stack with gravity.</text>
  <text x="78" y="181" class="body muted">Languages, runtimes, data stores, and protocols orbiting one idea: ship reliable systems.</text>
  <g transform="translate(0 16)">
    <ellipse cx="790" cy="288" rx="292" ry="102" fill="none" stroke="#247bff" stroke-width="2" opacity=".52" transform="rotate(-14 790 288)"/>
    <ellipse cx="790" cy="288" rx="292" ry="102" fill="none" stroke="#ff354f" stroke-width="2" opacity=".38" transform="rotate(42 790 288)"/>
    <ellipse cx="790" cy="288" rx="292" ry="102" fill="none" stroke="#8292b5" stroke-width="2" opacity=".36" transform="rotate(90 790 288)"/>
    <circle cx="790" cy="288" r="86" fill="#0b1222" stroke="url(#${prefix}-gradient)" stroke-width="2"/>
    <text x="790" y="282" class="display subtitle ink" text-anchor="middle">LIORAN</text><text x="790" y="313" class="mono tiny blue" text-anchor="middle">INFRASTRUCTURE</text>
    ${orbitNode(510, 250, 'RUST', '#ff354f')}${orbitNode(590, 150, 'TS', '#247bff')}${orbitNode(790, 122, 'NODE', '#247bff')}${orbitNode(988, 182, 'PG', '#ff354f')}${orbitNode(1052, 320, 'REDIS', '#ff354f')}${orbitNode(910, 424, 'DOCKER', '#247bff')}${orbitNode(690, 444, 'LINUX', '#8292b5')}${orbitNode(520, 350, 'GRPC', '#8292b5')}
  </g>
  <g transform="translate(74 238)">
    <rect width="318" height="274" rx="22" class="card"/>
    <text x="26" y="42" class="mono tiny blue">LANGUAGES</text>
    <g class="mono small"><rect x="26" y="68" width="112" height="35" rx="17" fill="#13294f"/><text x="82" y="92" text-anchor="middle" class="ink">Rust</text><rect x="150" y="68" width="112" height="35" rx="17" fill="#13294f"/><text x="206" y="92" text-anchor="middle" class="ink">TypeScript</text><rect x="26" y="115" width="112" height="35" rx="17" fill="#13294f"/><text x="82" y="139" text-anchor="middle" class="ink">JavaScript</text><rect x="150" y="115" width="112" height="35" rx="17" fill="#13294f"/><text x="206" y="139" text-anchor="middle" class="ink">Python</text><rect x="26" y="162" width="112" height="35" rx="17" fill="#13294f"/><text x="82" y="186" text-anchor="middle" class="ink">C</text><rect x="150" y="162" width="112" height="35" rx="17" fill="#13294f"/><text x="206" y="186" text-anchor="middle" class="ink">Node.js</text></g>
    <text x="26" y="236" class="mono tiny muted">ICON LABELS FOLLOW OFFICIAL NAMES</text>
  </g>
  <g transform="translate(408 520)" class="mono tiny muted"><text x="0" y="0">WEB / API</text><text x="128" y="0">STORAGE</text><text x="256" y="0">OPERATIONS</text><text x="400" y="0">DISTRIBUTED SYSTEMS</text></g>
  ${end(`${prefix}-title`, `${prefix}-desc`)}
`;
}

function dashboardCompact() {
  const prefix = 'ultron-id';
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1200" height="620" viewBox="0 0 1200 620" role="img" aria-labelledby="${prefix}-title ${prefix}-desc">
  ${defs(prefix, `<clipPath id="${prefix}-portrait-clip"><rect x="28" y="164" width="190" height="170" rx="16"/></clipPath>`)}<style>${commonStyle}</style>${bg(prefix, 620)}
  <text x="74" y="78" class="mono tiny red">03 / DEVELOPER PROFILE</text><text x="74" y="137" class="display title ink">The builder’s ID.</text><text x="78" y="178" class="body muted">Engineering identity, public work, and verified milestones.</text>
  <g transform="translate(74 218)">
    <rect width="1052" height="340" rx="24" fill="#101a2e" stroke="#3d537c" stroke-width="2"/><rect width="1052" height="7" rx="3.5" fill="#247bff"/><path d="M30 42H1022" stroke="#253452"/>
    <text x="30" y="76" class="mono tiny blue">LIORAN GROUP / LDS</text><text x="30" y="112" class="display subtitle ink">SWARAJ PUPPALWAR</text><text x="30" y="140" class="mono small muted">FOUNDER &amp; CHIEF TECHNOLOGY OFFICER</text>
    <rect x="28" y="164" width="190" height="170" rx="16" fill="#070b16" stroke="#253452"/><image x="28" y="164" width="190" height="170" preserveAspectRatio="xMidYMid slice" clip-path="url(#${prefix}-portrait-clip)" href="${img(idPng)}" xlink:href="${img(idPng)}"/>
    <text x="250" y="178" class="mono tiny muted">ENGINEERING IDENTITY</text><text x="250" y="209" class="body ink">Database engineer</text><text x="250" y="238" class="body ink">Infrastructure builder</text><text x="250" y="267" class="body ink">Full-stack developer</text>
    <path d="M548 164V320" stroke="#253452"/>
    <text x="582" y="178" class="mono tiny muted">VERIFIED ACHIEVEMENTS</text><text x="582" y="209" class="body ink">3 newspaper features</text><text x="582" y="233" class="small muted">Nagpur Post · Navarashtra · Tarun Bharat</text><text x="582" y="258" class="mono tiny blue">23 MAY · 23 MAY · 29 MAY 2023</text>
    <text x="582" y="284" class="mono tiny red">CYBER OLYMPIAD · STATE RANK 1</text><text x="582" y="309" class="mono tiny red">CREST CYBER OLYMPIAD · WESTERN REGION RANK 17</text>
    <text x="250" y="331" class="mono tiny muted">PUBLIC CONTRIBUTIONS RANKING · CHECKED 04 NOV 2026</text>
  </g>
  <text x="76" y="580" class="mono tiny muted">FOUNDER · SOFTWARE ENGINEER · DATABASE ENGINEER · FULL-STACK DEVELOPER</text>
  ${end(`${prefix}-title`, `${prefix}-desc`)}
`;
}

function dashboard() {
  const prefix = 'ultron-id';
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1200" height="900" viewBox="0 0 1200 900" role="img" aria-labelledby="${prefix}-title ${prefix}-desc">
  ${defs(prefix, `<clipPath id="${prefix}-portrait-clip"><rect x="86" y="177" width="214" height="244" rx="16"/></clipPath>`)}<style>${commonStyle}</style>${bg(prefix, 900)}
  <text x="74" y="78" class="mono tiny red">03 / PROOF OF WORK</text><text x="74" y="137" class="display title ink">The builder’s ID.</text><text x="78" y="178" class="body muted">A small record of the work that is dated, public, and worth keeping.</text>
  <g transform="translate(200 250) rotate(-1.7 360 188)">
    <animateTransform class="smil" attributeName="transform" type="rotate" values="-12 360 188;2 360 188;-1.7 360 188;0.8 360 188;-1.7 360 188" keyTimes="0;.20;.38;.64;1" dur="2.4s" begin="0s" fill="freeze"/>
    <animateTransform class="smil" additive="sum" attributeName="transform" type="rotate" values="-1.7 360 188;1.7 360 188;-1.7 360 188" keyTimes="0;.5;1" dur="5.6s" begin="2.4s" repeatCount="indefinite"/>
    <path d="M345 -6c0-38 30-58 58-58s58 20 58 58" fill="none" stroke="#8d99ad" stroke-width="10" stroke-linecap="round"/><rect x="377" y="-24" width="52" height="33" rx="8" fill="#c6cfda" stroke="#6c7890"/><circle cx="403" cy="-8" r="7" fill="#35425a"/>
    <rect width="720" height="610" rx="28" fill="#101a2e" stroke="#3d537c" stroke-width="2"/><rect width="720" height="12" rx="6" fill="url(#${prefix}-gradient)"/><path d="M32 40H688" stroke="#253452"/>
    <text x="36" y="80" class="mono tiny blue">LIORAN GROUP / LDS</text><text x="36" y="118" class="display subtitle ink">SWARAJ PUPPALWAR</text><text x="36" y="148" class="mono small muted">FOUNDER &amp; CHIEF TECHNOLOGY OFFICER</text>
    <rect x="36" y="177" width="214" height="244" rx="16" fill="#070b16" stroke="#253452"/><image x="36" y="177" width="214" height="244" preserveAspectRatio="xMidYMax slice" clip-path="url(#${prefix}-portrait-clip)" href="${img(idPng)}" xlink:href="${img(idPng)}"/>
    <text x="280" y="210" class="mono tiny muted">LOCATION</text><text x="280" y="241" class="body ink">Chandrapur, Maharashtra</text><text x="280" y="270" class="body ink">India</text><text x="280" y="323" class="mono tiny muted">DATED RECORD</text><text x="280" y="353" class="body ink">3 newspaper features</text><text x="280" y="382" class="small muted">Nagpur Post · Navarashtra · Tarun Bharat</text><text x="280" y="416" class="mono tiny blue">23 MAY · 23 MAY · 29 MAY 2023</text>
    <g transform="translate(36 452)"><rect width="648" height="52" rx="12" fill="#0b1222" stroke="#253452"/><text x="20" y="33" class="mono tiny muted">PUBLIC CONTRIBUTIONS RANKING · CHECKED 04 NOV 2026</text></g>
    <g transform="translate(36 528)"><rect x="0" y="0" width="648" height="26" rx="4" fill="#f5f7ff" opacity=".88"/><path d="M0 2h648" stroke="#0b1222" stroke-width="1" opacity=".2"/><path d="M15 3v20m6-20v20m18-20v20m6-20v20m16-20v20m8-20v20m17-20v20m4-20v20m21-20v20m7-20v20m18-20v20m5-20v20m18-20v20m14-20v20m7-20v20m21-20v20m11-20v20m18-20v20m8-20v20m20-20v20m7-20v20m18-20v20m12-20v20m17-20v20m9-20v20m20-20v20m8-20v20m19-20v20m12-20v20m21-20v20m9-20v20m19-20v20m15-20v20m14-20v20m16-20v20m18-20v20m7-20v20m21-20v20m12-20v20m14-20v20m8-20v20m20-20v20m11-20v20m13-20v20m18-20v20m10-20v20m14-20v20m19-20v20m10-20v20m17-20v20m18-20v20m7-20v20m20-20v20m12-20v20m18-20v20m11-20v20m16-20v20m9-20v20m14-20v20m19-20v20m12-20v20m16-20v20m8-20v20" stroke="#070b16" stroke-width="3"/></g>
    <rect x="36" y="575" width="648" height="5" rx="2.5" fill="#247bff" opacity=".6"><animate class="smil" attributeName="x" values="36;684;36" dur="3.2s" repeatCount="indefinite"/></rect>
  </g>
  ${end(`${prefix}-title`, `${prefix}-desc`)}
`;
}

function projects() {
  const prefix = 'ultron-projects';
  const card = (x, label, title, lines, url, color) => { const urls = Array.isArray(url) ? url : [url]; return `<g transform="translate(${x} 226)"><rect width="320" height="292" rx="22" class="card"/><rect width="320" height="5" rx="2.5" fill="${color}"/><text x="26" y="46" class="mono tiny" fill="${color}">${label}</text><text x="26" y="91" class="display subtitle ink">${title}</text>${lines.map((line, i) => `<text x="26" y="${137 + i * 28}" class="${i === 0 ? 'body ink' : 'small muted'}">${line}</text>`).join('')}<path d="M26 230H294" stroke="#253452"/>${urls.map((line, i) => `<text x="26" y="${255 + i * 19}" class="mono tiny muted">${line}</text>`).join('')}</g>`; };
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="620" viewBox="0 0 1200 620" role="img" aria-labelledby="${prefix}-title ${prefix}-desc">
  ${defs(prefix)}<style>${commonStyle}</style>${bg(prefix, 620)}
  <text x="74" y="78" class="mono tiny red">04 / SELECTED PROJECTS</text><text x="74" y="140" class="display title ink">Systems worth shipping.</text><text x="78" y="181" class="body muted">Databases, cloud services, and developer platforms built in public.</text>
  ${card(74, 'RUST / DATABASE', 'LioranDB', ['Document database', 'Custom storage engine', 'WAL · indexing · concurrency'], 'liorandb.com', '#247bff')}
  ${card(440, 'CLOUD / MANAGED DATA', 'Lioran Cloud', ['Managed LioranDB instances', 'Administration · deployment', 'app.liorandb.com'], 'LIORAN CLOUD SERVICES', '#ff354f')}
  ${card(806, 'NEXT.JS / CONTENT', 'Post-Acle', ['AI-powered blogging platform', 'SEO optimized · Tailwind CSS', 'Built for publishing'], ['github.com/LioranGroupOfficial', '/PostAcle'], '#247bff')}
  <text x="76" y="580" class="mono tiny muted">DATABASES · CLOUD · DEVELOPER PLATFORMS</text>
  ${end(`${prefix}-title`, `${prefix}-desc`)}
`;
}

function connect() {
  const prefix = 'ultron-connect';
  const card = (y, label, sub, glyph, color) => `<g transform="translate(614 ${y})" class="reveal reveal-right"><rect width="490" height="72" rx="20" class="card"/><circle cx="38" cy="36" r="22" fill="${color}" opacity=".17"/><text x="38" y="43" text-anchor="middle" class="mono subtitle" fill="${color}">${glyph}</text><text x="78" y="31" class="display subtitle ink">${label}</text><text x="78" y="54" class="mono tiny muted">${sub}</text><path d="M432 36h28m-8-8 8 8-8 8" stroke="${color}" stroke-width="2" fill="none"><animate class="smil" attributeName="transform" values="translate(0 0);translate(7 0);translate(0 0)" dur="1.8s" repeatCount="indefinite"/></path></g>`;
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1200" height="620" viewBox="0 0 1200 620" role="img" aria-labelledby="${prefix}-title ${prefix}-desc">
  ${defs(prefix)}<style>${commonStyle}</style>${bg(prefix, 620)}
  <text x="74" y="78" class="mono tiny red">05 / OPEN CHANNELS</text><text x="74" y="140" class="display title ink">Let’s build together.</text><text x="78" y="181" class="body muted">Real destinations, one open channel for the next layer.</text>
  <g transform="translate(42 226)"><image x="0" y="0" width="520" height="360" preserveAspectRatio="xMidYMax meet" href="${img(pointingPng)}" xlink:href="${img(pointingPng)}"/><path d="M430 170h94" stroke="#247bff" stroke-width="2" stroke-dasharray="4 8"/><path d="M524 170l-12-8m12 8-12 8" stroke="#247bff" stroke-width="2" fill="none"/></g>
  ${card(230, 'GitHub', 'github.com/UltronTheAI', 'GH', '#f5f7ff')}${card(314, 'X / Twitter', '@PuppalwarSwaraj', 'X', '#247bff')}${card(398, 'Portfolio', 'swaraj.lioransolutions.com', '↗', '#ff354f')}${card(482, 'Lioran Group', 'lioran.group', 'LG', '#247b7f')}
  <text x="78" y="588" class="mono tiny muted">CHANDRAPUR → THE INTERNET · SAY HELLO</text>
  ${end(`${prefix}-title`, `${prefix}-desc`)}
`;
}

const assets = {
  'hero.svg': hero(),
  'about-life.svg': aboutLife(),
  'stack.svg': stack(),
  'id-dashboard.svg': dashboardCompact(),
  'projects.svg': projects(),
  'connect.svg': connect(),
};

for (const [name, contents] of Object.entries(assets)) {
  const normalized = contents.replace(/<animate(Transform)? class="smil"(?![^>]*\bbegin=)/g, '<animate$1 class="smil" begin="0s"');
  fs.writeFileSync(path.join(assetsDir, name), normalized, 'utf8');
  const withoutMotion = normalized
    .replace(/<animateTransform[^>]*\/>(\s*)/g, '')
    .replace(/<animate[^>]*\/>(\s*)/g, '')
    .replace(/animation:[^;{}]+;?/g, 'animation:none;')
    .replace(/class="smil"/g, 'class="smil removed"');
  fs.writeFileSync(path.join(noMotionDir, name), withoutMotion, 'utf8');
}

const licenses = `# Embedded asset licenses\n\n- **Geist** and **Geist Mono** WOFF2 font files are embedded in each SVG from the local Next.js distribution. Source: https://github.com/vercel/geist-font. The font software is distributed under the SIL Open Font License 1.1; the full text is available at https://scripts.sil.org/OFL.\n- The portrait and pointing character are the exact user-supplied PNG assets, embedded byte-for-byte as data URIs.\n- The stack visualization uses label-led inline SVG glyphs with the official technology names; no remote icon requests are made.\n- All SVGs in this folder are self-contained: no JavaScript, foreignObject, external images, external fonts, or network requests.\n`;
fs.writeFileSync(path.join(assetsDir, 'LICENSES.md'), licenses, 'utf8');

const preview = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Swaraj Puppalwar · README preview</title><style>body{margin:0;background:#050812;color:#f5f7ff;font-family:Arial,sans-serif}.wrap{max-width:900px;margin:0 auto;padding:28px 18px 80px}h1{font-size:22px;font-weight:600;letter-spacing:.04em}p{color:#aeb8cf;line-height:1.5}.card{margin:22px 0;border:1px solid #1b2944;border-radius:14px;overflow:hidden;background:#070b16}.card img{display:block;width:100%;height:auto}.label{padding:10px 14px;font:12px monospace;letter-spacing:.12em;color:#8292b5;background:#0b1222}</style></head><body><main class="wrap"><h1>SWARAJ PUPPALWAR / GITHUB PROFILE README</h1><p>Local preview at GitHub-like width. SVGs are loaded as <code>&lt;img&gt;</code> elements so this path tests the actual README rendering mode.</p>${Object.keys(assets).filter((x)=>x.endsWith('.svg')).map((name)=>`<figure class="card"><div class="label">assets/${name}</div><img src="assets/${name}?v=1" alt="${name} preview"></figure>`).join('')}</main></body></html>`;
fs.writeFileSync(path.join(root, 'preview.html'), preview, 'utf8');

const report = `# Verification notes\n\nGenerated files: ${Object.keys(assets).join(', ')}\n\nThe ` + '`animation-removed`' + ` directory contains each SVG with SMIL/CSS motion removed for fallback inspection. The ` + '`frames`' + ` directory is populated by the local render check.\n`;
fs.writeFileSync(path.join(verificationDir, 'README.md'), report, 'utf8');

console.log(`Generated ${Object.keys(assets).length} SVG assets, preview.html, and verification fallbacks.`);
