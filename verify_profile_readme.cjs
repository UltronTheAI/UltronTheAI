const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const sharp = require('./portfolio/node_modules/sharp');

const root = __dirname;
const assetDir = path.join(root, 'assets');
const previewDir = path.join(root, 'verification', 'rendered');
fs.mkdirSync(previewDir, { recursive: true });

const sha = (data) => crypto.createHash('sha256').update(data).digest('hex');
const idHash = sha(fs.readFileSync(path.join(root, 'id.png')));
const pointingAsset = path.join(assetDir, 'right_pointing-cropped.png');
if (!fs.existsSync(pointingAsset)) throw new Error('Missing cropped transparent pointing portrait asset');
const pointingHash = sha(fs.readFileSync(pointingAsset));
const slideFiles = ['hero.svg', 'about-life.svg', 'stack.svg', 'id-dashboard.svg', 'projects.svg', 'connect.svg'];
const read = (file) => fs.readFileSync(file, 'utf8');

for (const name of [...slideFiles, 'portfolio.svg']) {
  const file = path.join(assetDir, name);
  if (!fs.existsSync(file)) throw new Error(`Missing asset: ${name}`);
  const svg = read(file);
  const structural = svg.replace(/data:[^"']+/g, 'data:EMBEDDED');
  if (/https?:\/\/(?!www\.w3\.org\/(?:2000\/svg|1999\/xlink))/.test(structural)) throw new Error(`External URL found in ${name}`);
  if (/<script|foreignObject|url\((?!data:|#)/.test(structural)) throw new Error(`Forbidden SVG feature found in ${name}`);
  if (/textLength|<animate|<animateTransform/.test(svg)) throw new Error(`Non-deterministic or forced text layout found in ${name}`);
}

for (const name of slideFiles) {
  const svg = read(path.join(assetDir, name));
  if (!/<svg[^>]+width="1200" height="660" viewBox="0 0 1200 660"/.test(svg)) throw new Error(`Non-uniform slide canvas in ${name}`);
  if (!svg.includes('@font-face') || !svg.includes('data:font/woff2;base64,')) throw new Error(`Font embedding missing in ${name}`);
}

const portfolio = read(path.join(assetDir, 'portfolio.svg'));
if (!/<svg[^>]+width="1200" height="3960" viewBox="0 0 1200 3960"/.test(portfolio)) throw new Error('Combined portfolio canvas is not 1200 x 3960');
if ((portfolio.match(/data-slide=/g) || []).length !== 6) throw new Error('Combined portfolio does not contain exactly six slides');
if ((portfolio.match(/translate\(0 660\)/g) || []).length !== 1 || (portfolio.match(/translate\(0 3300\)/g) || []).length !== 1) throw new Error('Combined slide offsets are not contiguous');
const embedded = [...portfolio.matchAll(/data:image\/png;base64,([^"']+)/g)].map((match) => sha(Buffer.from(match[1], 'base64')));
if (embedded.filter((hash) => hash === idHash).length < 2 || embedded.filter((hash) => hash === pointingHash).length < 1) throw new Error('Combined portrait assets are not byte-for-byte embedded');

const readme = read(path.join(root, 'README.md'));
if ((readme.match(/<img\b/g) || []).length !== 1) throw new Error('README must contain exactly one contiguous portfolio image');
if (!readme.includes('assets/portfolio.svg?v=5') || !/width="100%"/.test(readme)) throw new Error('README does not use the combined full-width asset');
if (/^\s*(?:#|<h[1-6]|\||[-*]\s)/m.test(readme)) throw new Error('README contains non-slide Markdown or headings');
if (readme.trim().split(/\r?\n/).length !== 1) throw new Error('README contains empty or spacer Markdown lines');

const designSvg = [...slideFiles, 'portfolio.svg'].map((name) => read(path.join(assetDir, name))).join('\n');
for (const token of ['#ffffff', '#171717', '#60646c', '#dcdee0', '#0d74ce']) {
  if (!designSvg.toLowerCase().includes(token)) throw new Error(`Design token missing from generated SVGs: ${token}`);
}
for (const forbidden of ['#070b16', '#0b1222', '#247bff', '#ff354f', '#253452', 'linearGradient', 'textLength']) {
  if (designSvg.includes(forbidden)) throw new Error(`Legacy or forbidden visual token found: ${forbidden}`);
}
if (/<(?:radial|linear)Gradient/.test(designSvg)) throw new Error('Gradient definitions remain in generated SVGs');
if (!designSvg.includes('UltronInter') || !designSvg.includes('UltronMono')) throw new Error('Inter / JetBrains Mono embedding missing');

const orbitNodes = [...portfolio.matchAll(/data-orbit-node="([^"]+)" transform="translate\(([-\d.]+) ([-\d.]+)\)"/g)];
if (orbitNodes.length !== 8) throw new Error(`Expected 8 controlled orbit nodes, found ${orbitNodes.length}`);
if ((portfolio.match(/data-orbit-path=/g) || []).length !== 3) throw new Error('Expected exactly 3 orbital paths');
for (const [, label, rawX, rawY] of orbitNodes) {
  const x = Number(rawX); const y = Number(rawY);
  if (x < 506 || x > 1076 || y < 260 || y > 536) throw new Error(`Orbit node outside graph bounds: ${label}`);
  if (Math.hypot(x - 791, y - 398) < 88) throw new Error(`Orbit node too close to central label: ${label}`);
}

async function render() {
  const source = fs.readFileSync(path.join(assetDir, 'portfolio.svg'));
  for (const width of [1200, 768, 390]) {
    await sharp(source, { density: 144 }).resize({ width, fit: 'contain' }).png().toFile(path.join(previewDir, `portfolio-${width}.png`));
  }
  for (let i = 0; i < slideFiles.length; i++) {
    const sourceSlide = fs.readFileSync(path.join(assetDir, slideFiles[i]));
    await sharp(sourceSlide, { density: 144 }).png().toFile(path.join(previewDir, `slide-${i + 1}.png`));
  }
}

render().then(() => console.log('Integrity scan: PASS\nVisual renders: verification/rendered/portfolio-{1200,768,390}.png and slide-{1..6}.png')).catch((error) => { console.error(error.stack || error); process.exitCode = 1; });
