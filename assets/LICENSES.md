# Embedded asset licenses

- **Geist** and **Geist Mono** WOFF2 font files are embedded in each SVG from the local Next.js distribution. Source: https://github.com/vercel/geist-font. The font software is distributed under the SIL Open Font License 1.1; the full text is available at https://scripts.sil.org/OFL.
- The portrait and pointing character are the exact user-supplied PNG assets, embedded byte-for-byte as data URIs.
- The stack visualization uses label-led inline SVG glyphs with the official technology names; no remote icon requests are made.
- All SVGs in this folder are self-contained: no JavaScript, foreignObject, external images, external fonts, or network requests.
