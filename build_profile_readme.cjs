const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const ASSETS = path.join(ROOT, 'assets');
const VERIFICATION = path.join(ROOT, 'verification');
const STATIC = path.join(VERIFICATION, 'animation-removed');
for (const dir of [ASSETS, STATIC]) fs.mkdirSync(dir, { recursive: true });

const W = 1200;
const H = 660;
const C = {
  canvas: '#ffffff', canvasSoft: '#fafafa', ink: '#171717', body: '#60646c', muted: '#999999',
  hairline: '#f0f0f3', hairlineStrong: '#dcdee0', surfaceStrong: '#f0f0f3', dark: '#171717',
  darkElevated: '#1a1a1a', onDark: '#ffffff', onDarkSoft: '#b0b4ba', link: '#0d74ce',
  success: '#16a34a', skyLight: '#cfe7ff', skyMid: '#a8c8e8',
};
const T = {
  mega: 'font-family:UltronInter,Inter,-apple-system,system-ui,sans-serif;font-size:64px;font-weight:600;letter-spacing:-1.92px',
  xl: 'font-family:UltronInter,Inter,-apple-system,system-ui,sans-serif;font-size:48px;font-weight:600;letter-spacing:-1.44px',
  lg: 'font-family:UltronInter,Inter,-apple-system,system-ui,sans-serif;font-size:36px;font-weight:600;letter-spacing:-1.08px',
  md: 'font-family:UltronInter,Inter,-apple-system,system-ui,sans-serif;font-size:28px;font-weight:600;letter-spacing:-.84px',
  sm: 'font-family:UltronInter,Inter,-apple-system,system-ui,sans-serif;font-size:22px;font-weight:600;letter-spacing:-.5px',
  title: 'font-family:UltronInter,Inter,-apple-system,system-ui,sans-serif;font-size:18px;font-weight:600;letter-spacing:0',
  titleSm: 'font-family:UltronInter,Inter,-apple-system,system-ui,sans-serif;font-size:16px;font-weight:600;letter-spacing:0',
  body: 'font-family:UltronInter,Inter,-apple-system,system-ui,sans-serif;font-size:16px;font-weight:400;letter-spacing:0',
  bodySm: 'font-family:UltronInter,Inter,-apple-system,system-ui,sans-serif;font-size:14px;font-weight:400;letter-spacing:0',
  caption: 'font-family:UltronInter,Inter,-apple-system,system-ui,sans-serif;font-size:13px;font-weight:400;letter-spacing:0',
  overline: 'font-family:UltronInter,Inter,-apple-system,system-ui,sans-serif;font-size:11px;font-weight:600;letter-spacing:.88px',
  code: 'font-family:UltronMono,JetBrainsMono,Consolas,monospace;font-size:13px;font-weight:400;letter-spacing:0',
  button: 'font-family:UltronInter,Inter,-apple-system,system-ui,sans-serif;font-size:14px;font-weight:500;letter-spacing:0',
};

const b64 = (file) => fs.readFileSync(file).toString('base64');
const portrait = b64(path.join(ROOT, 'id.png'));
const pointing = b64(path.join(ROOT, 'right_pointing.png'));
const inter = b64(path.join(ROOT, 'portfolio', '.next', 'static', 'media', '83afe278b6a6bb3c-s.p.3a6ba036.woff2'));
const mono = b64(path.join(ROOT, 'portfolio', '.next', 'static', 'media', '70bc3e132a0a741e-s.p.15008bfb.woff2'));

const esc = (value) => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
function wrap(value, maxChars) {
  const lines = [];
  let line = '';
  for (const word of String(value).split(/\s+/)) {
    const next = line ? `${line} ${word}` : word;
    if (line && next.length > maxChars) { lines.push(line); line = word; } else line = next;
  }
  if (line) lines.push(line);
  return lines;
}
function text(x, y, value, cls, attrs = '') { return `<text x="${x}" y="${y}" class="${cls}" ${attrs}>${esc(value)}</text>`; }
function lines(x, y, values, cls, leading = 24, attrs = '') { return `<text x="${x}" y="${y}" class="${cls}" ${attrs}>${values.map((v, i) => `<tspan x="${x}" dy="${i ? leading : 0}">${esc(v)}</tspan>`).join('')}</text>`; }
function block(x, y, value, maxChars, cls, leading = 24, attrs = '') { return lines(x, y, wrap(value, maxChars), cls, leading, attrs); }
function image(kind) { return `data:image/png;base64,${kind === 'portrait' ? portrait : pointing}`; }

function styles() {
  return `<style>
    @font-face{font-family:UltronInter;src:url(data:font/woff2;base64,${inter}) format('woff2');font-weight:100 900;font-style:normal;font-display:block}
    @font-face{font-family:UltronMono;src:url(data:font/woff2;base64,${mono}) format('woff2');font-weight:100 800;font-style:normal;font-display:block}
    .mega{${T.mega}}.xl{${T.xl}}.lg{${T.lg}}.md{${T.md}}.sm{${T.sm}}.title{${T.title}}.title-sm{${T.titleSm}}.body{${T.body}}.body-sm{${T.bodySm}}.caption{${T.caption}}.overline{${T.overline}}.code{${T.code}}.button{${T.button}}
    .ink{fill:${C.ink}}.body-color{fill:${C.body}}.muted{fill:${C.muted}}.link{fill:${C.link}}.on-dark{fill:${C.onDark}}.on-dark-soft{fill:${C.onDarkSoft}}.success{fill:${C.success}}
  </style>`;
}
function defs(prefix, extra = '', hero = false) {
  return `<defs>${hero ? `<radialGradient id="${prefix}-sky" cx="64%" cy="38%" r="72%"><stop offset="0" stop-color="${C.skyLight}" stop-opacity=".72"/><stop offset=".62" stop-color="${C.skyMid}" stop-opacity=".24"/><stop offset="1" stop-color="${C.canvas}" stop-opacity="0"/></radialGradient>` : ''}${extra}</defs>`;
}
function background(prefix, hero = false) {
  return `<rect width="${W}" height="${H}" fill="${C.canvas}"/>${hero ? `<rect width="${W}" height="${H}" fill="url(#${prefix}-sky)"/>` : ''}`;
}
function card(x, y, w, h, cls = 'feature') {
  const fill = cls === 'dark' ? C.dark : C.canvas;
  const stroke = cls === 'dark' ? C.dark : C.hairlineStrong;
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="${fill}" stroke="${stroke}" stroke-width="1"/>`;
}
function slide(prefix, section, title, subtitle, content, desc, extra = '', hero = false) {
  return `<g data-slide="${section}">${defs(prefix, extra, hero)}${styles()}${background(prefix, hero)}${text(96, 72, section, 'overline ink')}${text(96, 144, title, 'xl ink')}${text(96, 184, subtitle, 'body body-color')}${content}<title>${esc(title)}</title><desc>${esc(desc)}</desc></g>`;
}
function badge(x, y, w, label) { return `<rect x="${x}" y="${y}" width="${w}" height="28" rx="9999" fill="${C.surfaceStrong}"/><text x="${x + w / 2}" y="${y + 19}" class="overline ink" text-anchor="middle">${esc(label)}</text>`; }
function button(x, y, w, label) { return `<rect x="${x}" y="${y}" width="${w}" height="40" rx="8" fill="${C.ink}"/>${text(x + w / 2, y + 25, label, 'button on-dark', 'text-anchor="middle"')}`; }

function hero() {
  const p = 'ultron-hero';
  const content = `${text(96, 232, 'SWARAJ PUPPALWAR', 'overline ink')}${text(96, 288, 'Founder & Chief Technology Officer', 'md ink')}${block(96, 326, 'I build databases, storage systems, backend platforms, and full-stack products.', 48, 'body body-color', 24)}
    ${card(96, 386, 516, 108)}${text(120, 416, 'PITCH', 'overline muted')}${block(120, 452, 'Reliable developer infrastructure from India.', 42, 'body ink', 24)}
    ${button(96, 526, 158, 'VIEW THE WORK')}${text(274, 551, 'github.com/UltronTheAI', 'code link')}
    <g transform="translate(700 62)">${card(0, 0, 404, 520)}${text(28, 38, 'PROFILE / INDIA', 'overline muted')}${card(24, 62, 356, 354, 'dark')}<image x="44" y="74" width="316" height="340" preserveAspectRatio="xMidYMax meet" href="${image('portrait')}" xlink:href="${image('portrait')}"/>${text(28, 454, 'LIORAN GROUP / LDS', 'code ink')}${text(28, 480, 'Systems / Data / Cloud', 'caption body-color')}</g>`;
  return slide(p, '00 / INTRODUCTION', 'SWARAJ', 'Full-stack engineer building developer infrastructure.', content, 'Swaraj Puppalwar, Founder and Chief Technology Officer at Lioran Group.', '', true);
}

function about() {
  const p = 'ultron-about';
  const content = `<g>${card(96, 232, 458, 332)}${text(124, 272, 'What I ship', 'sm ink')}${text(124, 324, '01  Database internals', 'title ink')}${text(124, 349, 'Storage engines / WAL / indexing', 'body-sm body-color')}${text(124, 396, '02  Cloud infrastructure', 'title ink')}${text(124, 421, 'Deployments / managed instances / monitoring', 'body-sm body-color')}${text(124, 468, '03  Developer tooling', 'title ink')}${text(124, 493, 'APIs / SDKs / dashboards / automation', 'body-sm body-color')}</g>
    <g>${card(578, 232, 526, 332, 'dark')}${text(606, 272, 'INTERESTS / 03 LANES', 'overline on-dark-soft')}${text(606, 320, 'Database engineering', 'title on-dark')}${text(606, 346, 'Storage engines, WAL, indexing, and concurrency.', 'body-sm on-dark-soft')}${text(606, 396, 'Cloud infrastructure', 'title on-dark')}${text(606, 422, 'Deployments, managed instances, and monitoring.', 'body-sm on-dark-soft')}${text(606, 472, 'Developer tooling', 'title on-dark')}${text(606, 498, 'APIs, SDKs, dashboards, and automation.', 'body-sm on-dark-soft')}</g>${text(96, 610, 'FOUNDER / SOFTWARE ENGINEER / DATABASE ENGINEER / FULL-STACK DEVELOPER', 'code body-color')}`;
  return slide(p, '01 / WHAT I BUILD', 'Built close to the metal.', 'Systems thinking, product taste, and a bias for dependable primitives.', content, 'The engineering areas Swaraj builds: databases, cloud infrastructure, and developer tooling.');
}

function orbitNode(x, y, label) { return `<g transform="translate(${x} ${y})"><circle r="28" fill="${C.darkElevated}" stroke="${C.onDarkSoft}" stroke-width="1"/>${text(0, 4, label, 'code on-dark', 'text-anchor="middle"')}</g>`; }
function stack() {
  const p = 'ultron-stack';
  const content = `<g>${card(96, 232, 354, 332)}${text(124, 272, 'LANGUAGES / RUNTIMES', 'overline muted')}${badge(124, 304, 88, 'RUST')}${badge(224, 304, 132, 'TYPESCRIPT')}${badge(124, 344, 112, 'JAVASCRIPT')}${badge(248, 344, 108, 'PYTHON')}${badge(124, 384, 88, 'C')}${badge(224, 384, 132, 'NODE.JS')}${text(124, 448, 'WEB / API', 'code body-color')}${text(124, 478, 'STORAGE / DATA', 'code body-color')}${text(124, 508, 'OPERATIONS / DISTRIBUTED SYSTEMS', 'code body-color')}</g>
    <g>${card(478, 232, 626, 332, 'dark')}<ellipse cx="791" cy="398" rx="150" ry="52" fill="none" stroke="${C.onDarkSoft}" stroke-width="1" transform="rotate(-14 791 398)"/><ellipse cx="791" cy="398" rx="150" ry="52" fill="none" stroke="#60646c" stroke-width="1" transform="rotate(42 791 398)"/><ellipse cx="791" cy="398" rx="150" ry="52" fill="none" stroke="#999999" stroke-width="1" transform="rotate(90 791 398)"/><circle cx="791" cy="398" r="60" fill="${C.darkElevated}" stroke="${C.onDark}" stroke-width="1"/>${text(791, 394, 'LIORAN', 'sm on-dark', 'text-anchor="middle"')}${text(791, 418, 'INFRASTRUCTURE', 'overline on-dark-soft', 'text-anchor="middle"')}${orbitNode(594, 340, 'RUST')}${orbitNode(666, 286, 'TS')}${orbitNode(791, 272, 'NODE')}${orbitNode(916, 318, 'PG')}${orbitNode(988, 428, 'REDIS')}${orbitNode(880, 510, 'DOCKER')}${orbitNode(704, 510, 'LINUX')}${orbitNode(602, 446, 'GRPC')}</g>${text(478, 610, 'STACK / LANGUAGES / DATA / OPERATIONS', 'code body-color')}`;
  return slide(p, '02 / TECH STACK', 'A stack with gravity.', 'Languages, runtimes, data stores, and protocols orbiting one idea: reliable systems.', content, 'A bounded technology stack diagram for Lioran infrastructure.');
}

function profile() {
  const p = 'ultron-profile';
  const extra = `<clipPath id="${p}-portrait-clip"><rect x="124" y="360" width="200" height="170" rx="8"/></clipPath>`;
  const content = `<g>${card(96, 224, 1008, 366, 'dark')}${text(124, 260, 'LIORAN GROUP / LDS', 'overline on-dark-soft')}${text(124, 300, 'SWARAJ PUPPALWAR', 'md on-dark')}${text(124, 324, 'FOUNDER & CHIEF TECHNOLOGY OFFICER', 'code on-dark-soft')}<path d="M124 346H1076" stroke="${C.onDarkSoft}" stroke-opacity=".28"/><rect x="124" y="360" width="200" height="170" rx="8" fill="${C.darkElevated}" stroke="${C.onDarkSoft}" stroke-opacity=".42"/><image x="124" y="360" width="200" height="170" preserveAspectRatio="xMidYMax slice" clip-path="url(#${p}-portrait-clip)" href="${image('portrait')}" xlink:href="${image('portrait')}"/>${text(360, 376, 'ENGINEERING IDENTITY', 'overline on-dark-soft')}${text(360, 416, 'Database engineer', 'title on-dark')}${text(360, 444, 'Infrastructure builder', 'title on-dark')}${text(360, 472, 'Full-stack developer', 'title on-dark')}<path d="M648 364V532" stroke="${C.onDarkSoft}" stroke-opacity=".28"/>${text(684, 376, 'VERIFIED ACHIEVEMENTS', 'overline on-dark-soft')}${text(684, 412, 'Newspaper features', 'title on-dark')}${text(684, 436, 'Nagpur Post / Navarashtra / Tarun Bharat', 'body-sm on-dark-soft')}${text(684, 458, '23 MAY / 23 MAY / 29 MAY 2023', 'code on-dark-soft')}${text(684, 492, 'Cyber Olympiad / Maharashtra state rank 1', 'body-sm on-dark')}${text(684, 516, 'Crest Cyber Olympiad / Western region rank 17', 'body-sm on-dark')}</g>${text(96, 620, 'PUBLIC WORK / DATED RECORD / SYSTEMS ENGINEERING', 'code body-color')}`;
  return slide(p, '03 / DEVELOPER PROFILE', 'The builder\'s ID.', 'A small record of work that is dated, public, and worth keeping.', content, 'Developer profile with portrait, engineering identity, and dated achievements.', extra);
}

function projectCard(x, label, title, description, meta, urlLines, status = '') {
  return `<g>${card(x, 232, 320, 332)}${text(x + 24, 270, label, 'overline muted')}${text(x + 24, 310, title, 'title ink')}${block(x + 24, 350, description, 29, 'body-sm body-color', 22)}<path d="M${x + 24} 446H${x + 296}" stroke="${C.hairline}"/>${text(x + 24, 478, meta, 'overline muted')}${status ? text(x + 296, 478, status, 'overline success', 'text-anchor="end"') : ''}${urlLines.map((line, i) => text(x + 24, 514 + i * 20, line, 'code link')).join('')}</g>`;
}
function projects() {
  const content = `${projectCard(96, 'RUST / DATABASE', 'LioranDB', 'Rust document database with a custom storage engine, WAL, indexing, and concurrency primitives.', 'ACTIVE / V2', ['liorandb.com'], 'ACTIVE')}${projectCard(440, 'CLOUD / MANAGED DATA', 'Lioran Cloud', 'Managed LioranDB instances with deployment and administration surfaces for developer infrastructure.', 'LIORAN CLOUD SERVICES', ['app.liorandb.com'])}${projectCard(784, 'SYSTEMS / CONTENT', 'Post-Acle', 'Technical publication platform for systems engineering teardowns, storage internals, and architecture notes.', 'CODE AVAILABLE', ['github.com / LioranGroupOfficial', '/ PostAcle'])}${text(96, 610, 'DATABASES / CLOUD / DEVELOPER PLATFORMS', 'code body-color')}`;
  return slide('ultron-projects', '04 / SELECTED PROJECTS', 'Systems worth shipping.', 'Databases, cloud services, and developer platforms built in public.', content, 'Selected projects: LioranDB, Lioran Cloud, and Post-Acle.');
}

function linkTile(x, y, label, detail, glyph) { return `<g>${card(x, y, 244, 56, 'dark')}${text(x + 22, y + 25, glyph, 'code on-dark')}${text(x + 52, y + 23, label, 'title on-dark')}${text(x + 52, y + 43, detail, 'code on-dark-soft')}</g>`; }
function connect() {
  const content = `<g>${card(96, 232, 410, 332)}<image x="116" y="250" width="370" height="280" preserveAspectRatio="xMidYMax meet" href="${image('pointing')}" xlink:href="${image('pointing')}"/>${text(124, 542, 'CHANDRAPUR -> THE INTERNET', 'code body-color')}</g>
    <g>${card(554, 232, 550, 332, 'dark')}${text(582, 272, 'CONTACT / COLLABORATION', 'overline on-dark-soft')}${text(582, 312, 'Open channels for the next layer.', 'sm on-dark')}${text(582, 338, 'Build, write, or partner around developer infrastructure.', 'body-sm on-dark-soft')}${linkTile(582, 368, 'GitHub', 'github.com/UltronTheAI', 'GH')}${linkTile(842, 368, 'Lioran Group', 'lioran.group', 'LG')}${linkTile(582, 440, 'LioranDB', 'liorandb.com', 'DB')}${linkTile(842, 440, 'Lioran Cloud', 'app.liorandb.com', 'LC')}${text(582, 522, 'OPEN-SOURCE COLLABORATION / INFRASTRUCTURE PARTNERSHIPS', 'code on-dark-soft')}</g>${button(96, 610, 158, 'SAY HELLO')}`;
  return slide('ultron-connect', '05 / OPEN CHANNELS', 'Let\'s build together.', 'Real destinations, one open channel for the next layer.', content, 'Contact and collaboration links for GitHub, Lioran Group, LioranDB, Lioran Cloud, open source, and infrastructure partnerships.');
}

const pages = [['hero.svg', hero, 'hero'], ['about-life.svg', about, 'about'], ['stack.svg', stack, 'stack'], ['id-dashboard.svg', profile, 'profile'], ['projects.svg', projects, 'projects'], ['connect.svg', connect, 'connect']];
function standalone(contents, label) { return `<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(label)}"><title>${esc(label)}</title><desc>UltronTheAI engineering portfolio slide.</desc>${contents}</svg>\n`; }
for (const [filename, builder, key] of pages) { const svg = standalone(builder(), key); fs.writeFileSync(path.join(ASSETS, filename), svg, 'utf8'); fs.writeFileSync(path.join(STATIC, filename), svg, 'utf8'); }

const combined = `<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${W}" height="${H * pages.length}" viewBox="0 0 ${W} ${H * pages.length}" role="img" aria-label="UltronTheAI engineering portfolio"><title>UltronTheAI engineering portfolio</title><desc>Six continuous design-system-driven slides for Swaraj Puppalwar.</desc><g transform="translate(0 0)">${hero()}</g><g transform="translate(0 ${H})">${about()}</g><g transform="translate(0 ${H * 2})">${stack()}</g><g transform="translate(0 ${H * 3})">${profile()}</g><g transform="translate(0 ${H * 4})">${projects()}</g><g transform="translate(0 ${H * 5})">${connect()}</g></svg>\n`;
fs.writeFileSync(path.join(ASSETS, 'portfolio.svg'), combined, 'utf8');
fs.writeFileSync(path.join(ASSETS, 'LICENSES.md'), '# Embedded asset licenses\n\n- Inter and JetBrains Mono are embedded from the local Next.js build output.\n- The portrait and pointing character are the supplied PNG assets, embedded as data URIs.\n- SVGs contain no scripts, foreignObject elements, external images, external fonts, or network requests.\n', 'utf8');
fs.writeFileSync(path.join(ROOT, 'README.md'), '<div><img src="assets/portfolio.svg?v=4" alt="UltronTheAI engineering portfolio: six continuous design-system-driven slides" width="100%" /></div>\n', 'utf8');
fs.writeFileSync(path.join(ROOT, 'preview.html'), `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>UltronTheAI README preview</title><style>html,body{margin:0;background:#fff}img{display:block;width:100%;height:auto}</style></head><body><img src="assets/portfolio.svg?v=4" alt="UltronTheAI engineering portfolio"></body></html>\n`, 'utf8');
fs.writeFileSync(path.join(VERIFICATION, 'README.md'), '# Verification notes\n\nThe README uses `assets/portfolio.svg`, a single 1200px-wide SVG containing six 660px-tall slides with no inter-slide gap. The six standalone SVGs remain available in `assets/` for individual inspection.\n', 'utf8');
console.log(`Generated ${pages.length} design-system-driven SVG slides and one continuous portfolio.svg.`);
