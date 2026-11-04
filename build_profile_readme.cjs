const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const ASSETS = path.join(ROOT, 'assets');
const VERIFICATION = path.join(ROOT, 'verification');
const FRAMES = path.join(VERIFICATION, 'frames');
const STATIC = path.join(VERIFICATION, 'animation-removed');
for (const dir of [ASSETS, FRAMES, STATIC]) fs.mkdirSync(dir, { recursive: true });

const WIDTH = 1200;
const HEIGHT = 660;
const COLORS = {
  bg: '#070b16', card: '#0b1222', panel: '#101a2e', ink: '#f5f7ff', muted: '#aeb8cf',
  blue: '#247bff', red: '#ff354f', line: '#253452', slate: '#8292b5',
};
const TYPE = {
  title: 'font-size:64px;font-weight:800;letter-spacing:-2.6px',
  subtitle: 'font-size:29px;font-weight:700;letter-spacing:-.55px',
  body: 'font-size:20px;letter-spacing:.1px', small: 'font-size:16px;letter-spacing:.15px',
  tiny: 'font-size:13px;letter-spacing:2px', label: 'font-size:16px;letter-spacing:1.3px',
};

const b64 = (file) => fs.readFileSync(file).toString('base64');
const portrait = b64(path.join(ROOT, 'id.png'));
const pointing = b64(path.join(ROOT, 'right_pointing.png'));
const displayFont = b64(path.join(ROOT, 'portfolio', 'node_modules', 'next', 'dist', 'esm', 'next-devtools', 'server', 'font', 'geist-latin.woff2'));
const monoFont = b64(path.join(ROOT, 'portfolio', 'node_modules', 'next', 'dist', 'esm', 'next-devtools', 'server', 'font', 'geist-mono-latin.woff2'));

const esc = (value) => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');

// Conservative width estimation keeps text inside its box without using textLength.
function wrap(text, maxChars) {
  const words = String(text).split(/\s+/);
  const lines = [];
  let line = '';
  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (line && next.length > maxChars) { lines.push(line); line = word; } else line = next;
  }
  if (line) lines.push(line);
  return lines;
}

function text(x, y, value, cls = '', attrs = '') {
  return `<text x="${x}" y="${y}" class="${cls}" ${attrs}>${esc(value)}</text>`;
}

function textLines(x, y, lines, cls = '', lineHeight = 24, attrs = '') {
  return `<text x="${x}" y="${y}" class="${cls}" ${attrs}>${lines.map((line, i) => `<tspan x="${x}" dy="${i ? lineHeight : 0}">${esc(line)}</tspan>`).join('')}</text>`;
}

function block(x, y, value, maxChars, cls = '', lineHeight = 24, attrs = '') {
  return textLines(x, y, wrap(value, maxChars), cls, lineHeight, attrs);
}

function imageHref(kind, mode) {
  if (mode === 'combined') return `#ultron-${kind}`;
  return `data:image/png;base64,${kind === 'portrait' ? portrait : pointing}`;
}

function commonStyle() {
  return `<style>
    @font-face{font-family:UltronDisplay;src:url(data:font/woff2;base64,${displayFont}) format('woff2');font-weight:100 900;font-style:normal;font-display:block}
    @font-face{font-family:UltronMono;src:url(data:font/woff2;base64,${monoFont}) format('woff2');font-weight:100 900;font-style:normal;font-display:block}
    .display{font-family:UltronDisplay,Arial,sans-serif}.mono{font-family:UltronMono,Consolas,monospace}
    .ink{fill:${COLORS.ink}}.muted{fill:${COLORS.muted}}.blue{fill:${COLORS.blue}}.red{fill:${COLORS.red}}
    .card{fill:${COLORS.card};stroke:${COLORS.line};stroke-width:1}.panel{fill:${COLORS.panel};stroke:#3d537c;stroke-width:1}
    .title{${TYPE.title}}.subtitle{${TYPE.subtitle}}.body{${TYPE.body}}.small{${TYPE.small}}.tiny{${TYPE.tiny}}.label{${TYPE.label}}
  </style>`;
}

function defs(prefix, extra = '') {
  return `<defs>
    <linearGradient id="${prefix}-gradient" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${COLORS.blue}"/><stop offset=".58" stop-color="${COLORS.blue}"/><stop offset="1" stop-color="${COLORS.red}"/></linearGradient>
    <pattern id="${prefix}-grid" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.15" fill="#92a1bf" opacity=".14"/></pattern>${extra}
  </defs>`;
}

function background(prefix) {
  return `<rect width="${WIDTH}" height="${HEIGHT}" fill="${COLORS.bg}"/><rect width="${WIDTH}" height="${HEIGHT}" fill="url(#${prefix}-grid)" opacity=".58"/><path d="M40 36H300" stroke="${COLORS.blue}" stroke-width="2" opacity=".74"/><path d="M900 624H1160" stroke="${COLORS.red}" stroke-width="2" opacity=".74"/>`;
}

function slideShell(prefix, section, title, subtitle, content, desc, extra = '') {
  return `<g data-slide="${section}">${defs(prefix, extra)}${commonStyle()}${background(prefix)}${text(76, 54, section, 'mono tiny red')}${text(74, 124, title, 'display title ink')}${text(78, 164, subtitle, 'display body muted')}${content}<title>${esc(title)}</title><desc>${esc(desc)}</desc></g>`;
}

function hero(mode) {
  const p = 'ultron-hero';
  const content = `${text(78, 214, 'PUPPALWAR / ULTRONTHEAI', 'mono label red')}${text(78, 254, 'Founder & Chief Technology Officer', 'display subtitle ink')}${text(78, 286, 'Lioran Group / Lioran Developer Solutions', 'body muted')}
    <g transform="translate(76 320)"><rect width="566" height="124" rx="20" class="card"/>${text(26, 31, 'PITCH', 'mono tiny blue')}${block(26, 67, 'Building reliable, scalable developer infrastructure from India.', 47, 'display body ink', 27)}</g>
    <g transform="translate(730 54)"><circle cx="214" cy="212" r="182" fill="${COLORS.card}" stroke="${COLORS.line}"/><circle cx="214" cy="212" r="173" fill="none" stroke="url(#${p}-gradient)" stroke-width="2" stroke-dasharray="4 12"/><image x="42" y="30" width="344" height="364" preserveAspectRatio="xMidYMax meet" href="${imageHref('portrait', mode)}" xlink:href="${imageHref('portrait', mode)}"/><path d="M28 424H400" stroke="url(#${p}-gradient)" stroke-width="1"/>${text(42, 454, 'CHANDRAPUR, MAHARASHTRA / INDIA', 'mono tiny muted')}${text(42, 480, 'LIORAN GROUP / LDS', 'mono tiny muted')}</g>
    <g transform="translate(78 604)"><circle cx="7" cy="-5" r="5" fill="${COLORS.blue}"/>${text(22, 0, 'SYSTEMS  /  DATA  /  CLOUD', 'mono tiny muted')}</g>${text(760, 604, 'SOFTWARE ENGINEER  /  DATABASE ENGINEER', 'mono tiny blue')}`;
  return slideShell(p, '00 / INTRODUCTION', 'SWARAJ', 'Hello, I build the hard parts.', content, 'Swaraj Puppalwar, Founder and Chief Technology Officer at Lioran Group.');
}

function aboutLife() {
  const p = 'ultron-about';
  const content = `<g transform="translate(76 218)"><rect width="410" height="360" rx="22" class="card"/><path d="M32 42h54M32 54h88" stroke="${COLORS.blue}" stroke-width="4" stroke-linecap="round"/>${text(32, 102, 'What I ship', 'display subtitle ink')}${text(32, 154, '01  Database internals', 'body ink')}${text(32, 181, 'Storage engines / WAL / indexing', 'small muted')}${text(32, 229, '02  Cloud infrastructure', 'body ink')}${text(32, 256, 'Deployments / managed instances / monitoring', 'small muted')}${text(32, 304, '03  Developer tooling', 'body ink')}${text(32, 331, 'APIs / SDKs / dashboards / automation', 'small muted')}</g>
    <g transform="translate(520 218)"><rect width="606" height="360" rx="22" class="card"/>${text(32, 42, 'INTERESTS / 03 LANES', 'mono tiny blue')}${text(32, 88, '01', 'mono subtitle blue')}${text(92, 84, 'Database engineering', 'display subtitle ink')}${text(92, 111, 'Storage engines, WAL, indexing, and concurrency.', 'small muted')}<path d="M32 136H574" stroke="${COLORS.line}"/>${text(32, 188, '02', 'mono subtitle red')}${text(92, 184, 'Cloud infrastructure', 'display subtitle ink')}${text(92, 211, 'Deployments, managed instances, and monitoring.', 'small muted')}<path d="M32 236H574" stroke="${COLORS.line}"/>${text(32, 288, '03', 'mono subtitle blue')}${text(92, 284, 'Developer tooling', 'display subtitle ink')}${text(92, 311, 'APIs, SDKs, dashboards, and automation.', 'small muted')}<path d="M32 334H574" stroke="${COLORS.line}"/>${text(32, 350, 'PRIMITIVES / OPERATIONS / PRODUCT EXPERIENCE', 'mono tiny muted')}</g>${text(76, 626, 'FOUNDER  /  SOFTWARE ENGINEER  /  DATABASE ENGINEER  /  FULL-STACK DEVELOPER', 'mono tiny muted')}`;
  return slideShell(p, '01 / WHAT I BUILD', 'Built close to the metal.', 'Systems thinking, product taste, and a bias for dependable primitives.', content, 'The engineering areas Swaraj builds: databases, cloud infrastructure, and developer tooling.');
}

function orbitNode(x, y, label, color) { return `<g transform="translate(${x} ${y})"><circle r="31" fill="${COLORS.card}" stroke="${color}" stroke-width="2"/>${text(0, -2, label, 'mono', `text-anchor="middle" font-size="12" fill="${color}"`)}<circle cy="16" r="3" fill="${color}"/></g>`; }
function badge(x, y, width, label, color = COLORS.blue) { return `<rect x="${x}" y="${y}" width="${width}" height="36" rx="18" fill="#13294f" stroke="${color}" stroke-opacity=".24"/>${text(x + width / 2, y + 24, label, 'mono small ink', 'text-anchor="middle"')}`; }

function stack() {
  const p = 'ultron-stack';
  const content = `<g transform="translate(76 218)"><rect width="354" height="340" rx="22" class="card"/>${text(28, 42, 'LANGUAGES / RUNTIMES', 'mono tiny blue')}${badge(28, 72, 112, 'Rust', COLORS.red)}${badge(154, 72, 164, 'TypeScript')}${badge(28, 120, 112, 'JavaScript')}${badge(154, 120, 164, 'Python')}${badge(28, 168, 112, 'C', COLORS.slate)}${badge(154, 168, 164, 'Node.js')}<path d="M28 232H326" stroke="${COLORS.line}"/>${text(28, 266, 'WEB / API', 'mono tiny muted')}${text(28, 296, 'STORAGE / DATA', 'mono tiny muted')}${text(28, 326, 'OPERATIONS / DISTRIBUTED SYSTEMS', 'mono tiny muted')}</g>
    <g transform="translate(470 218)"><rect width="656" height="340" rx="22" fill="none" stroke="${COLORS.line}" stroke-dasharray="3 8" opacity=".7"/><ellipse cx="328" cy="170" rx="250" ry="82" fill="none" stroke="${COLORS.blue}" stroke-width="2" opacity=".62" transform="rotate(-14 328 170)"/><ellipse cx="328" cy="170" rx="250" ry="82" fill="none" stroke="${COLORS.red}" stroke-width="2" opacity=".48" transform="rotate(42 328 170)"/><ellipse cx="328" cy="170" rx="250" ry="82" fill="none" stroke="${COLORS.slate}" stroke-width="2" opacity=".4" transform="rotate(90 328 170)"/><circle cx="328" cy="170" r="70" fill="${COLORS.card}" stroke="url(#${p}-gradient)" stroke-width="2"/>${text(328, 164, 'LIORAN', 'display subtitle ink', 'text-anchor="middle"')}${text(328, 192, 'INFRASTRUCTURE', 'mono tiny blue', 'text-anchor="middle"')}${orbitNode(76, 128, 'RUST', COLORS.red)}${orbitNode(150, 44, 'TS', COLORS.blue)}${orbitNode(328, 30, 'NODE', COLORS.blue)}${orbitNode(506, 78, 'PG', COLORS.red)}${orbitNode(566, 208, 'REDIS', COLORS.red)}${orbitNode(442, 300, 'DOCKER', COLORS.blue)}${orbitNode(220, 304, 'LINUX', COLORS.slate)}${orbitNode(86, 226, 'GRPC', COLORS.slate)}</g>${text(470, 596, 'STACK  /  LANGUAGES  /  DATA  /  OPERATIONS', 'mono tiny muted')}`;
  return slideShell(p, '02 / TECH STACK', 'A stack with gravity.', 'Languages, runtimes, data stores, and protocols orbiting one idea: reliable systems.', content, 'A bounded technology stack diagram for Lioran infrastructure.');
}

function profile(mode) {
  const p = 'ultron-profile';
  const extra = `<clipPath id="${p}-portrait-clip"><rect x="34" y="158" width="218" height="230" rx="16"/></clipPath>`;
  const content = `<g transform="translate(76 218)"><rect width="1048" height="376" rx="24" class="panel"/><rect width="1048" height="7" rx="3.5" fill="url(#${p}-gradient)"/>${text(34, 48, 'LIORAN GROUP / LDS', 'mono tiny blue')}${text(34, 86, 'SWARAJ PUPPALWAR', 'display subtitle ink')}${text(34, 112, 'FOUNDER & CHIEF TECHNOLOGY OFFICER', 'mono small muted')}<path d="M34 136H1014" stroke="${COLORS.line}"/><rect x="34" y="158" width="218" height="230" rx="16" fill="${COLORS.bg}" stroke="${COLORS.line}"/><image x="34" y="158" width="218" height="230" preserveAspectRatio="xMidYMax slice" clip-path="url(#${p}-portrait-clip)" href="${imageHref('portrait', mode)}" xlink:href="${imageHref('portrait', mode)}"/>${text(290, 174, 'ENGINEERING IDENTITY', 'mono tiny muted')}${text(290, 211, 'Database engineer', 'body ink')}${text(290, 243, 'Infrastructure builder', 'body ink')}${text(290, 275, 'Full-stack developer', 'body ink')}<path d="M590 158V316" stroke="${COLORS.line}"/>${text(624, 174, 'VERIFIED ACHIEVEMENTS', 'mono tiny muted')}${text(624, 211, 'Newspaper features', 'body ink')}${text(624, 236, 'Nagpur Post / Navarashtra / Tarun Bharat', 'small muted')}${text(624, 260, '23 MAY / 23 MAY / 29 MAY 2023', 'mono tiny blue')}${text(624, 300, 'Cyber Olympiad', 'body ink')}${text(624, 325, 'Maharashtra state rank 1', 'small muted')}${text(624, 365, 'Crest Cyber Olympiad', 'body ink')}${text(624, 390, 'Western region rank 17', 'small muted')}<path d="M34 410H1014" stroke="${COLORS.line}"/>${text(34, 441, 'PUBLIC WORK  /  DATED RECORD  /  SYSTEMS ENGINEERING', 'mono tiny muted')}</g>`;
  return slideShell(p, '03 / DEVELOPER PROFILE', 'The builder\'s ID.', 'A small record of work that is dated, public, and worth keeping.', content, 'Developer profile with portrait, engineering identity, and dated achievements.', extra);
}

function projectCard(x, color, label, title, description, meta, urlLines) { return `<g transform="translate(${x} 218)"><rect width="328" height="360" rx="22" class="card"/><rect width="328" height="5" rx="2.5" fill="${color}"/>${text(26, 44, label, 'mono tiny', `fill="${color}"`)}${text(26, 88, title, 'display subtitle ink')}${block(26, 132, description, 28, 'small muted', 23)}<path d="M26 236H302" stroke="${COLORS.line}"/>${text(26, 266, meta, 'mono tiny muted')}${urlLines.map((line, i) => text(26, 302 + i * 22, line, 'mono small')).join('')}</g>`; }

function projects() {
  const p = 'ultron-projects';
  const content = `${projectCard(76, COLORS.blue, 'RUST / DATABASE', 'LioranDB', 'Rust document database with a custom storage engine, WAL, indexing, and concurrency primitives.', 'ACTIVE / V2', ['liorandb.com'])}${projectCard(436, COLORS.red, 'CLOUD / MANAGED DATA', 'Lioran Cloud', 'Managed LioranDB instances with deployment and administration surfaces for developer infrastructure.', 'LIORAN CLOUD SERVICES', ['app.liorandb.com'])}${projectCard(796, COLORS.blue, 'SYSTEMS / CONTENT', 'Post-Acle', 'Technical publication platform for systems engineering teardowns, storage internals, and architecture notes.', 'CODE AVAILABLE', ['github.com / LioranGroupOfficial', '/ PostAcle'])}${text(76, 626, 'DATABASES  /  CLOUD  /  DEVELOPER PLATFORMS', 'mono tiny muted')}`;
  return slideShell(p, '04 / SELECTED PROJECTS', 'Systems worth shipping.', 'Databases, cloud services, and developer platforms built in public.', content, 'Selected projects: LioranDB, Lioran Cloud, and Post-Acle.');
}

function linkTile(x, y, width, color, label, detail, glyph) { return `<g transform="translate(${x} ${y})"><rect width="${width}" height="60" rx="16" class="card"/><circle cx="26" cy="30" r="16" fill="${color}" opacity=".16"/>${text(26, 35, glyph, 'mono label', `text-anchor="middle" fill="${color}"`)}${text(54, 26, label, 'display small ink')}${text(54, 46, detail, 'mono tiny muted')}</g>`; }

function connect(mode) {
  const p = 'ultron-connect';
  const content = `<g transform="translate(76 214)"><rect width="430" height="366" rx="22" class="card"/><image x="18" y="14" width="394" height="320" preserveAspectRatio="xMidYMax meet" href="${imageHref('pointing', mode)}" xlink:href="${imageHref('pointing', mode)}"/>${text(26, 348, 'CHANDRAPUR  ->  THE INTERNET', 'mono tiny muted')}</g>
    <g transform="translate(540 214)"><rect width="584" height="366" rx="22" class="panel"/>${text(30, 42, 'CONTACT / COLLABORATION', 'mono tiny blue')}${text(30, 78, 'Open channels for the next layer.', 'display subtitle ink')}${text(30, 104, 'Build, write, or partner around developer infrastructure.', 'small muted')}${linkTile(30, 132, 252, COLORS.ink, 'GitHub', 'github.com/UltronTheAI', 'GH')}${linkTile(302, 132, 252, COLORS.red, 'Lioran Group', 'lioran.group', 'LG')}${linkTile(30, 204, 252, COLORS.blue, 'LioranDB', 'liorandb.com', 'DB')}${linkTile(302, 204, 252, COLORS.red, 'Lioran Cloud', 'app.liorandb.com', 'LC')}${linkTile(30, 276, 252, COLORS.blue, 'Open source', 'collaboration welcome', 'OS')}${linkTile(302, 276, 252, COLORS.slate, 'Infrastructure', 'partnerships welcome', 'IN')}</g>${text(76, 626, 'SAY HELLO  /  BUILD IN PUBLIC  /  KEEP THE PRIMITIVES HONEST', 'mono tiny muted')}`;
  return slideShell(p, '05 / OPEN CHANNELS', 'Let\'s build together.', 'Real destinations, one open channel for the next layer.', content, 'Contact and collaboration links for GitHub, Lioran Group, LioranDB, Lioran Cloud, open source, and infrastructure partnerships.');
}

const pages = [['hero.svg', hero, 'hero'], ['about-life.svg', aboutLife, 'about'], ['stack.svg', stack, 'stack'], ['id-dashboard.svg', profile, 'profile'], ['projects.svg', projects, 'projects'], ['connect.svg', connect, 'connect']];
function standaloneSvg(contents, label, description) { return `<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" role="img" aria-label="${esc(label)}"><title>${esc(label)}</title><desc>${esc(description)}</desc>${contents}</svg>\n`; }

for (const [filename, builder, key] of pages) {
  const contents = builder('standalone');
  fs.writeFileSync(path.join(ASSETS, filename), standaloneSvg(contents, key, `UltronTheAI profile slide: ${key}.`), 'utf8');
  fs.writeFileSync(path.join(STATIC, filename), standaloneSvg(contents, key, `Static fallback for ${key}.`), 'utf8');
}

const combinedDefs = `<defs><image id="ultron-portrait" width="1" height="1" href="data:image/png;base64,${portrait}" xlink:href="data:image/png;base64,${portrait}"/><image id="ultron-pointing" width="1" height="1" href="data:image/png;base64,${pointing}" xlink:href="data:image/png;base64,${pointing}"/></defs>`;
const combined = `<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${WIDTH}" height="${HEIGHT * pages.length}" viewBox="0 0 ${WIDTH} ${HEIGHT * pages.length}" role="img" aria-label="UltronTheAI engineering portfolio"><title>UltronTheAI engineering portfolio</title><desc>Six continuous dark portfolio slides for Swaraj Puppalwar.</desc>${combinedDefs}<g transform="translate(0 0)">${hero('combined')}</g><g transform="translate(0 ${HEIGHT})">${aboutLife('combined')}</g><g transform="translate(0 ${HEIGHT * 2})">${stack('combined')}</g><g transform="translate(0 ${HEIGHT * 3})">${profile('combined')}</g><g transform="translate(0 ${HEIGHT * 4})">${projects('combined')}</g><g transform="translate(0 ${HEIGHT * 5})">${connect('combined')}</g></svg>\n`;
fs.writeFileSync(path.join(ASSETS, 'portfolio.svg'), combined, 'utf8');

fs.writeFileSync(path.join(ASSETS, 'LICENSES.md'), '# Embedded asset licenses\n\n- Geist and Geist Mono are embedded from the local Next.js distribution; source: https://github.com/vercel/geist-font.\n- The portrait and pointing character are the supplied PNG assets, embedded as data URIs.\n- The SVGs contain no scripts, foreignObject elements, external images, external fonts, or network requests.\n', 'utf8');
fs.writeFileSync(path.join(ROOT, 'README.md'), '<div><img src="assets/portfolio.svg?v=2" alt="UltronTheAI engineering portfolio: six continuous dark slides" width="100%" /></div>\n', 'utf8');
fs.writeFileSync(path.join(ROOT, 'preview.html'), `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>UltronTheAI README preview</title><style>html,body{margin:0;background:${COLORS.bg}}img{display:block;width:100%;height:auto}</style></head><body><img src="assets/portfolio.svg?v=2" alt="UltronTheAI engineering portfolio"></body></html>\n`, 'utf8');
fs.writeFileSync(path.join(VERIFICATION, 'README.md'), '# Verification notes\n\nThe README uses `assets/portfolio.svg`, a single 1200px-wide SVG containing six 660px-tall slides with no inter-slide gap. The six standalone SVGs remain available in `assets/` for individual inspection.\n', 'utf8');

console.log(`Generated ${pages.length} standalone SVG slides and one continuous portfolio.svg.`);
