const fs = require('fs');
const crypto = require('crypto');

const sha = (data) => crypto.createHash('sha256').update(data).digest('hex');
const idHash = sha(fs.readFileSync('id.png'));
const pointingHash = sha(fs.readFileSync('right_pointing.png'));
const svgFiles = fs.readdirSync('assets').filter((name) => name.endsWith('.svg')).sort();
const expectedSlides = ['about-life.svg', 'connect.svg', 'hero.svg', 'id-dashboard.svg', 'projects.svg', 'stack.svg'];
if (JSON.stringify(svgFiles) !== JSON.stringify(expectedSlides)) throw new Error(`Unexpected SVG slide set: ${svgFiles.join(', ')}`);

for (const name of svgFiles) {
  const text = fs.readFileSync(`assets/${name}`, 'utf8');
  const structural = text.replace(/data:[^"']+/g, 'data:EMBEDDED');
  if (/https?:\/\/(?!www\.w3\.org\/(?:2000\/svg|1999\/xlink))/.test(structural)) throw new Error(`External URL found in ${name}`);
  if (/<script|foreignObject|url\((?!data:|#)/.test(structural)) throw new Error(`Forbidden SVG feature found in ${name}`);
  if (!text.includes('@font-face') || !text.includes('data:font/woff2;base64,')) throw new Error(`Font embedding missing in ${name}`);
  if (!/<svg[^>]+width="1200" height="620" viewBox="0 0 1200 620"/.test(text)) throw new Error(`Non-uniform slide canvas in ${name}`);
}

for (const name of ['assets/hero.svg', 'assets/id-dashboard.svg', 'assets/connect.svg']) {
  const text = fs.readFileSync(name, 'utf8');
  const embedded = [...text.matchAll(/data:image\/png;base64,([^"']+)/g)].map((match) => sha(Buffer.from(match[1], 'base64')));
  const labels = embedded.map((hash) => hash === idHash ? 'id.png' : hash === pointingHash ? 'right_pointing.png' : 'unknown');
  console.log(`${name}: ${labels.join(', ')}`);
}

const readme = fs.readFileSync('README.md', 'utf8');
const versionedImages = [...readme.matchAll(/assets\/[^ )]+\?v=1/g)].map((match) => match[0]);
if (versionedImages.length !== 6) throw new Error(`Expected 6 versioned README images, found ${versionedImages.length}`);
if ((readme.match(/<img\b/g) || []).length !== 6) throw new Error('README must contain exactly six slide images');
if (!/^<div><img[^>]+width="100%"[^>]+><\/div>(?:\r?\n|$)/m.test(readme)) throw new Error('README slide markup is not full-width div-wrapped image markup');
if (/^\s*(?:#|<h[1-6]|\||[-*]\s)/m.test(readme)) throw new Error('README contains non-slide Markdown or headings');
if (/contribution[- ]city/i.test(readme)) throw new Error('Contribution-city section found');
console.log(`README versioned image paths: ${versionedImages.join(', ')}`);
console.log('Integrity scan: PASS');
