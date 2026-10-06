---
version: alpha
name: Sthashta-design-system
description: Sthashta is a live founder-meetup platform with a deliberately hand-made black-and-white visual language. The entire product uses a pure white paper-like canvas, near-black ink, rough sketch borders, stickman founder illustrations, hand-drawn arrows and connectors, and intentionally imperfect geometry. There is only one visual mode: light mode. No gradients, colored accents, glossy surfaces, glassmorphism, realistic 3D, or conventional polished SaaS decoration. The interface should feel like a founder sketched the product on paper and then made the sketch interactive.

colors:
  primary: "#000000"
  primary-active: "#222222"
  ink: "#111111"
  body: "#333333"
  body-strong: "#000000"
  muted: "#666666"
  muted-soft: "#999999"
  sketch-faint: "#D9D9D9"
  hairline: "#D0D0D0"
  hairline-soft: "#E8E8E8"
  hairline-strong: "#111111"
  canvas: "#FFFFFF"
  canvas-soft: "#FAFAFA"
  surface-card: "#FFFFFF"
  surface-strong: "#F4F4F4"
  on-primary: "#FFFFFF"
  semantic-error: "#111111"
  semantic-success: "#111111"

typography:
  display-mega:
    fontFamily: "'Inter', -apple-system, system-ui, sans-serif"
    fontSize: 64px
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: -2.2px
  display-xl:
    fontFamily: "'Inter', sans-serif"
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -1.5px
  display-lg:
    fontFamily: "'Inter', sans-serif"
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -1px
  display-md:
    fontFamily: "'Inter', sans-serif"
    fontSize: 28px
    fontWeight: 650
    lineHeight: 1.15
    letterSpacing: -0.7px
  display-sm:
    fontFamily: "'Inter', sans-serif"
    fontSize: 22px
    fontWeight: 650
    lineHeight: 1.2
    letterSpacing: -0.4px
  title-md:
    fontFamily: "'Inter', sans-serif"
    fontSize: 18px
    fontWeight: 650
    lineHeight: 1.35
  title-sm:
    fontFamily: "'Inter', sans-serif"
    fontSize: 16px
    fontWeight: 650
    lineHeight: 1.4
  body-md:
    fontFamily: "'Inter', sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.55
  body-sm:
    fontFamily: "'Inter', sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  caption:
    fontFamily: "'Inter', sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.4
  caption-uppercase:
    fontFamily: "'JetBrains Mono', monospace"
    fontSize: 11px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0.7px
    textTransform: uppercase
  sketch-note:
    fontFamily: "'Comic Neue', 'Comic Sans MS', cursive"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.35
  code:
    fontFamily: "'JetBrains Mono', 'Fira Code', monospace"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
  button:
    fontFamily: "'Inter', sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1
  nav-link:
    fontFamily: "'Inter', sans-serif"
    fontSize: 14px
    fontWeight: 550
    lineHeight: 1.4

rounded:
  none: 0px
  sketch-xs: 3px
  sketch-sm: 5px
  sketch-md: 7px
  sketch-lg: 10px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  base: 16px
  md: 20px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 96px

components:
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    height: 64px
    borderBottom: "1.5px hand-drawn {colors.ink}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sketch-md}"
    padding: 11px 19px
    height: 42px
    border: "2px solid {colors.primary}"
    treatment: "slightly irregular hand-drawn outline"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sketch-md}"
    padding: 10px 18px
    height: 42px
    border: "2px hand-drawn {colors.ink}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-mega}"
    padding: 96px
  founder-match-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sketch-lg}"
    padding: 0
    border: "2px rough hand-drawn {colors.ink}"
  founder-video-panel:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sketch-md}"
    border: "2px rough hand-drawn {colors.ink}"
  feature-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.sketch-lg}"
    padding: 24px
    border: "1.5px rough hand-drawn {colors.ink}"
  sketch-note:
    backgroundColor: transparent
    textColor: "{colors.body}"
    typography: "{typography.sketch-note}"
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sketch-md}"
    padding: 12px 16px
    height: 46px
    border: "1.5px rough hand-drawn {colors.ink}"
  badge:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.caption-uppercase}"
    rounded: "{rounded.sketch-sm}"
    padding: 4px 9px
    border: "1px rough hand-drawn {colors.ink}"
  cta-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: 96px
  footer-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    padding: 64px 48px

---

## Overview

Sthashta is a live founder-to-founder meetup product. Its visual identity should feel like a **black-ink startup sketchbook that became interactive**. The source design used a polished white developer-platform canvas with blue accents, gradient atmosphere, device mockups, dark cards, and conventional SaaS geometry. Sthashta deliberately removes those signals and replaces them with one strict language: **white paper + black ink + stickmen + imperfect hand-drawn UI**.

The experience is **light-mode only**. There is no dark theme, no theme switcher, and no alternate color scheme.

The page should not look childish or like a classroom doodle. The goal is a **premium editorial sketch**: sparse, confident, weirdly human, and memorable.

### Brand sentence

**Sthashta — where founders meet.**

### Key Characteristics

- Pure solid white background everywhere.
- Black and near-black ink only.
- Grays are allowed only for hierarchy, disabled states, subtle texture, and secondary copy.
- Absolutely no colored accent.
- Absolutely no gradients.
- Absolutely no dark-mode sections.
- Hand-drawn stickman founders are the main brand imagery.
- Rough lines, arrows, circles, underlines, connection paths, speech marks, and annotations act as decoration.
- Product UI is still usable and clean, but its containers look manually sketched.
- Large areas of negative white space.
- Inter for functional/product typography.
- JetBrains Mono for system labels, status, matching metadata, room IDs, and technical surfaces.
- Optional Comic Neue only for tiny handwritten annotations, never for primary UI or long body copy.
- No photorealistic people, stock photography, 3D renders, gradients, glassmorphism, neon glows, or glossy illustrations.
- Motion should feel like ink being drawn, not objects floating through space.

## Character System

The brand repeatedly uses two canonical founder archetypes. These characters should remain recognizable across landing-page art, onboarding, empty states, waiting rooms, social graphics, and launch content.

### Rahul — Humble Founder

Rahul is a young Indian male founder around 24 years old represented as a very simple hand-drawn stickman/sketch character. Slim stickman body. Simple round-ish hand-drawn face. Messy short black hair represented by a few rough black strokes. Tiny light-stubble marks. Plain solid-black T-shirt. Simple black trousers. No glasses. No jewelry. Down-to-earth, humble founder appearance.

Do not increase anatomical detail. Rahul should remain a sketch character.

### Ravi — Hip-Hop Founder

Ravi is a young Indian male founder around 27 years old represented as a simple hand-drawn stickman/sketch character. Slightly broader stickman body than Rahul. Stylish short black hair made from sharper rough strokes. Tiny trimmed-beard marks. Rectangular black sunglasses. Oversized black streetwear jacket over a black shirt. Small subtle chain. Confident, slightly rocky visual energy, but genuine and never dangerous.

Ravi must remain visually consistent with Rahul's illustration system. He is not a realistic portrait.

### Generic Founder

When Rahul or Ravi are not appropriate, use generic founder stickmen with only one or two distinguishing marks: hair shape, glasses, hoodie, cap, beard marks, or shirt fill. Never create highly detailed avatars.

## Colors

### Absolute Rule

Sthashta is monochrome.

The only fundamental colors are:

- **Paper** `{colors.canvas}` — #FFFFFF
- **Ink** `{colors.primary}` — #000000

Everything else exists only to create readable hierarchy.

### Ink

- **Pure Black** #000000: primary CTA, major illustration strokes, active controls, logo.
- **Near Black** #111111: primary text and slightly softer sketch lines.
- **Body** #333333: running copy.
- **Muted** #666666: metadata and secondary text.
- **Muted Soft** #999999: disabled states.
- **Sketch Faint** #D9D9D9: optional construction lines and faint paper-like marks.

### Surface

- Canvas: #FFFFFF.
- Cards: #FFFFFF.
- Alternate sections: preferably #FFFFFF. #FAFAFA may be used extremely sparingly when layout separation is otherwise unclear.
- Inputs: #FFFFFF.
- Video frames: #FFFFFF before video loads.

### Forbidden Colors

Do not use:
- blue links
- green success
- red errors
- purple preview tags
- cyan accents
- yellow highlights
- colored avatars
- colored logos
- gradient backgrounds

Semantic meaning must be communicated using **iconography, labels, border styles, fill patterns, and typography**, not hue alone.

Example:
- success = black checkmark + "connected"
- error = black cross + explanatory text
- waiting = hand-drawn ellipsis / spinner
- warning = black outlined triangle

## Typography

### Primary Typeface

Use **Inter** for the actual application and marketing UI.

The sketch aesthetic comes from illustration and geometry, not from making every word look handwritten. This keeps Sthashta usable and prevents the site from turning into a comic-book interface.

### Secondary Typeface

Use **JetBrains Mono** for:
- MATCHING...
- LIVE
- room/session IDs
- timestamps
- founder tags
- technical metadata
- small uppercase labels

### Handwritten Accent

`{typography.sketch-note}` may use Comic Neue or a similar freely available handwritten face only for small annotation-style notes such as:

- "you"
- "another founder"
- "say hi"
- "random match"
- arrows pointing toward UI elements

Never use it for paragraphs, navigation, forms, or primary CTAs.

### Display

Hero headings should be bold, compact, and black. Use large Inter rather than decorative lettering.

Recommended hero:

**Meet a founder.  
Not a feed.**

Alternative supporting line:

**Random live conversations with people who are actually building.**

## Layout

### Spacing

Retain a 4px base spacing system and generous 96px desktop section rhythm.

### Container

- Max content width: 1180–1200px.
- Marketing pages: wide editorial composition.
- Product matching view: center the live interaction within a max 1100px stage.
- Long copy should stay narrow, roughly 620–720px.
- Keep large white margins. Empty space is part of the identity.

### Composition

Avoid perfectly symmetrical SaaS grids everywhere.

Use subtle controlled irregularity:
- illustration shifted 8–20px from mathematical center
- arrows crossing section boundaries
- handwritten labels outside card bounds
- sketch circles partially intersecting a component
- occasional slightly rotated decorative paper/card, maximum about 1–2 degrees

Functional controls themselves must remain aligned and predictable.

## Elevation & Depth

Sthashta is nearly flat.

| Level | Treatment | Use |
|---|---|---|
| Paper | pure white | entire site |
| Sketch card | white + rough black outline | cards, founder panels |
| Active | black fill + white text | primary action |
| Layered paper | duplicate offset black/gray outline | rare hero or modal emphasis |

### Shadows

Avoid conventional blurred box shadows.

If separation is required, use:
- an offset 2–4px hard black/gray sketch line, or
- a second imperfect outline behind the object.

No glowing shadows.

## Shapes

### Geometry Philosophy

Shapes should look **drawn**, not mathematically sterile.

The browser implementation may use normal rectangles, but visual treatment should simulate small imperfections.

Examples:
- uneven SVG border path
- rough.js style line
- duplicated 1px outline with tiny offset
- hand-drawn corner decoration

### Radius

Keep radii small.

- inputs: 7px
- buttons: 7px
- cards: 10px
- video panels: 7px
- badges: 5px

Avoid huge 24–32px SaaS bubbles and full-pill buttons.

## Logo

### Wordmark

Primary wordmark:

**STHASHTA**

Black on white.

The wordmark should be clean enough to read immediately. A tiny roughness in baseline or underline is acceptable, but do not distort the spelling.

### Mark

Preferred icon direction:
- two minimal stickman heads or dots
- one imperfect line connecting them
- optional tiny speech marks

Alternative:
- two rough circles connected by one hand-drawn bridge line

Do not use:
- gradient logo
- dinosaur mascot as the primary mark
- generic network-node globe
- lightning bolt
- abstract AI sparkle

A sketch dinosaur may exist later as an easter egg or mascot, but founder-to-founder connection is the primary identity.

## Components

### Top Navigation

White background, black text, 64px height.

Left:
- STHASHTA wordmark

Middle/right:
- How it works
- Safety
- About

Primary action:
- **Meet a founder**

Optional secondary:
- Sign in

Use a thin imperfect black bottom rule only when the page has scrolled. On the initial hero, the nav can float on white with no divider.

No theme switcher. Sthashta has one theme.

### Primary Button

Black fill, white text, 2px black border.

Examples:
- Meet a founder
- Start matching
- Join waitlist
- Continue

On hover:
- no color shift
- translate approximately 1px
- optional sketch-outline offset changes subtly

On press:
- translate 2px and remove offset-outline effect.

### Secondary Button

White fill, black text, 2px rough black border.

Examples:
- Learn how it works
- Skip
- End conversation

### Text Links

Links are black.

Differentiate using:
- underline
- hand-drawn underline
- arrow `↗`
- weight

Never blue.

### Founder Match Stage

This is the signature product component.

Desktop:
- two founder video panels side by side
- a narrow center connector
- controls below
- status above or between panels

Before match:
- left panel shows "YOU" with simple stickman placeholder
- right panel shows animated hand-drawn searching marks
- black ink line appears to search/connect between panels

During match:
- both panels contain live video
- minimal names/roles
- tiny founder/company tags
- timer
- End / Next controls

At successful conversation end:
- reveal contact exchange UI
- each founder explicitly chooses what to share
- contact cards should resemble rough paper slips

The entire component should resemble a **sketched video-call wireframe that became functional**.

### Founder Video Panel

- white/black video treatment where technically possible for branded demos
- 2px rough black frame
- small radius
- name plate as white paper label with black border
- no colorful online-status dot
- use black filled dot + "LIVE"

### Matching State

Use animated sketch elements:
- three hand-drawn dots
- line scribbling from left founder toward right
- rough circular spinner
- tiny stickman walking/searching

Copy example:

**Finding someone building...**

Supporting text:

**Random match. Founder to founder.**

### Contact Exchange Card

White paper-like card with rough border.

Fields can include:
- name
- company
- role
- website
- LinkedIn / X / email where chosen by the user

The user must intentionally choose what to share.

Visual metaphor:
two small paper cards slide toward the center and overlap.

### Founder Profile Card

Keep it compact:
- stickman/avatar
- founder name
- company
- "building..." sentence
- industry tags
- optional location
- looking-for tag

No colorful skill chips. Tags are black outline on white.

### Input

White background, black text, rough black outline.

Focus:
- border thickens
- tiny secondary sketch outline may appear

Do not use blue focus rings. Preserve accessibility with sufficient black outline thickness and an additional shape/offset treatment.

### Badges

Black text on white with thin rough outline.

Examples:
- SaaS
- D2C
- DEVTOOLS
- INDIA
- LOOKING FOR SALES
- BUILDING

Avoid pill overload. Prefer small paper-label rectangles.

### Dialog / Modal

White paper card centered over a translucent neutral overlay.

No blurred glass.

Use a slightly doubled sketch border for emphasis.

### Toast

Small white rectangular paper slip with black border.

Icon + concise text:
- ✓ Contact saved
- × Camera unavailable
- ! Connection lost

Again, no semantic colors.

## Landing Page

### Hero

The hero should immediately communicate live founder matching.

Suggested composition:

Left/top:
**Meet founders  
you wouldn't meet otherwise.**

Supporting copy:
**Random live conversations for founders. Talk, connect, exchange contacts, move on.**

Primary CTA:
**Meet a founder**

Secondary:
**How it works**

Right/below:
large hand-drawn scene of Rahul and Ravi inside two rough video-call boxes connected by a black scribbled line.

Tiny handwritten annotation:
**random founder →**

No gradient behind the hero. No colored atmospheric wash.

### Hero Illustration Rules

The illustration should be:
- stickman
- black ink
- pure white background
- sparse
- intentionally rough
- recognizable at a glance
- not a polished vector SaaS illustration

It can include:
- laptop outline
- two founder panels
- Rahul
- Ravi
- speech marks
- one connection line
- tiny arrows
- tiny notes

### How It Works

Three large sketch panels:

**1. Enter**
Tell Sthashta what you're building.

**2. Match**
Get paired with another founder.

**3. Connect**
Talk. If both want to, exchange contacts.

Connect the three panels with one imperfect hand-drawn arrow that visually travels across the section.

### Why Sthashta

Avoid a generic six-card feature grid.

Use a sketch story:
- lonely founder
- searching line
- founder appears
- conversation
- exchanged card
- both leave with a useful connection

Copy should remain concise.

### Safety Section

Because this is random live matching, safety should feel first-class rather than hidden in legal copy.

Use simple monochrome illustrations for:
- report
- block
- leave instantly
- choose what contact information to share

No red warning UI. Use strong black iconography and explicit wording.

### Launch / Waitlist Section

Large white section.

**Sthashta is going live.**

CTA:
**Join the waitlist**

Use Rahul and Ravi standing on opposite sides of the CTA with one hand-drawn line between them.

## Product Experience

### Onboarding

Keep onboarding short.

Possible sequence:
1. Your name
2. What are you building?
3. Your role
4. What kind of founder would you like to meet?
5. Camera / microphone check
6. Start matching

Each step uses one tiny stickman sketch.

### Waiting Room

Center stage:
- user stickman/video preview
- animated sketch search line
- status

**Finding a founder...**

Controls:
- camera
- microphone
- cancel

### Live Conversation

Priority is video and conversation.

Do not surround video with dashboards.

Visible information should be minimal:
- name
- company
- what they build
- conversation timer
- report
- end
- optional contact exchange near the end

### End Screen

The end state is important to the product loop.

Headline:
**Good talk? Stay connected.**

Two contact cards.

Each person can:
- share selected contact
- skip
- meet someone else

Primary next action:
**Meet another founder**

## Illustration Language

### Stroke

Use mostly 1.5–2.5px black strokes.

Vary width slightly.

Do not make every line perfectly smooth.

### Stickmen

Stickmen should have:
- round-ish imperfect head
- minimal facial marks
- line arms/legs
- simple filled clothing blocks where character identity requires it
- tiny hair/beard/accessory cues

Avoid:
- realistic hands
- realistic anatomy
- detailed noses/lips
- photorealistic shading
- anime styling
- emoji faces

### Arrows

Arrows are a major brand element.

They should look quickly drawn by hand:
- slightly curved
- uneven
- open arrowhead
- occasionally annotated

### Scribbles

Use scribbles sparingly for:
- loading
- matching
- uncertainty
- energy around a successful connection

Do not cover readable UI with decorative scribbles.

### Texture

The site background remains clean white.

Do not add a strong paper texture globally.

If texture is used, it should be nearly invisible and localized to illustrations.

## Motion

Animation should imitate drawing.

Recommended:
- SVG stroke draws from 0% to 100%
- arrows draw toward their destination
- stickman speech marks pop in
- borders wobble subtly on hover
- contact card slides like a paper note
- matching dots redraw

Avoid:
- gradient animation
- floating blobs
- particle systems
- 3D parallax
- glowing cursor trails
- springy cartoon bounce everywhere

Motion duration:
- micro interactions: 120–180ms
- sketch line draw: 300–700ms
- section illustration entrance: 500–900ms

Respect `prefers-reduced-motion`.

## Icons

Prefer custom line icons or Lucide icons modified to fit the sketch language.

Rules:
- black stroke
- no fill except active state
- 1.75–2px stroke
- rounded linecaps
- optional tiny roughness wrapper

Core icons:
- video
- mic
- next
- end
- report
- block
- contact
- copy
- external link

## Accessibility

The sketch aesthetic must never reduce usability.

- Text contrast remains high.
- Focus states must be clearly visible in black and white.
- Do not rely on color for status.
- All icon-only controls need accessible labels.
- Video controls need at least 44px touch targets.
- Captions/subtitles should be supported where possible.
- Keyboard navigation must work through matching, call controls, report, and contact exchange.
- Decorative sketch SVGs should be hidden from screen readers.
- Reduced-motion mode disables line-drawing animations that are not essential.

## Responsive Behavior

### Mobile < 640px

- Hero heading: 38–42px.
- Illustration stacks below copy.
- Founder video panels stack vertically or use a dominant remote panel with small self-preview.
- Controls remain reachable at bottom.
- Navigation becomes a simple menu.
- Handwritten annotations reduce significantly to avoid clutter.
- Section padding: 64px 20px.

### Tablet 640–1024px

- Hero heading: ~48px.
- Two founder panels may remain side-by-side in landscape.
- Feature/story sections use 2-up layouts where appropriate.

### Desktop 1024–1280px

- Hero heading: 64px.
- Full Rahul + Ravi call illustration.
- Two-panel live call stage.
- Content max ~1200px.

### Wide > 1280px

Do not endlessly expand the interface. Keep content capped around 1200px and preserve white margins.

## Do's and Don'ts

### Do

- Keep the whole product in light mode.
- Use white as the dominant visual field.
- Use black as the only action color.
- Make every illustration feel hand drawn.
- Keep Rahul and Ravi visually consistent.
- Use stickmen rather than realistic people in marketing art.
- Use rough borders and imperfect arrows as recurring motifs.
- Use huge amounts of negative space.
- Keep actual application typography clean and readable.
- Make the founder match interface the strongest visual signature.
- Let the weirdness come from drawing style, not from usability.

### Don't

- Do not add dark mode.
- Do not add a theme toggle.
- Do not use gradients anywhere.
- Do not use blue links.
- Do not use colorful success/error/warning states.
- Do not use glassmorphism.
- Do not use glowing effects.
- Do not use 3D device mockups.
- Do not use polished corporate vector people.
- Do not use stock photography.
- Do not use realistic Rahul or Ravi.
- Do not use large bubbly SaaS radii.
- Do not make every component crooked. Functional layout stays disciplined.
- Do not overuse handwritten fonts.
- Do not turn the site into a children's doodle aesthetic.
- Do not use fake paper texture heavily.
- Do not introduce visual elements that cannot be explained by paper, ink, or live founder connection.

## Implementation Guidance

### Rough Borders

Prefer SVG/CSS techniques rather than raster assets.

Possible implementations:
- rough.js for decorative borders/arrows
- SVG filters with extremely subtle displacement
- two pseudo-element borders with 1–2px offset
- custom hand-drawn SVG paths

Keep text and clickable geometry stable even when decorative outlines are irregular.

### Sketch Components

Build reusable primitives:
- `SketchBorder`
- `SketchCard`
- `SketchButton`
- `SketchArrow`
- `SketchUnderline`
- `StickFounder`
- `FounderVideoFrame`
- `ContactSlip`
- `SketchStatus`

Do not manually redraw random CSS per page.

### Light Mode Enforcement

The application should explicitly render the same white/black theme regardless of OS preference.

- no `prefers-color-scheme: dark` theme
- no theme persistence setting
- set browser `color-scheme: light`
- white root/background
- ensure native inputs do not automatically switch to dark controls

### Image Generation Prompt Baseline

When generating Sthashta marketing artwork, begin with:

"Vertical or horizontal minimalist black-and-white hand-drawn stickman sketch, solid pure white background, rough black ink strokes, intentionally imperfect simple lines, lots of negative space, premium startup advertisement aesthetic, no colors, no gradients, no photorealism, no realistic anatomy, no 3D, no generated text."

Then append the complete Rahul and/or Ravi character lock whenever either character appears.

## Iteration Guide

1. Start every new page from white paper, not from a conventional SaaS component library aesthetic.
2. Ask whether each decorative element could plausibly be drawn with a black pen. If not, remove it.
3. Keep the application grid disciplined even when borders are rough.
4. Use one strong illustration per section rather than many decorative assets.
5. Keep copy short enough that illustrations and negative space remain dominant.
6. Test all controls without color.
7. Test mobile early because sketch annotations become clutter quickly.
8. Keep Rahul and Ravi locked across all generated artwork.
9. Make the match stage recognizable even without the Sthashta wordmark.
10. If the page begins to look like Expo, Linear, Vercel, or a generic SaaS template, strip another layer of polish away and return to paper + ink.

## Known Gaps

- Final Sthashta logo artwork is not yet locked.
- Exact production hand-drawn border implementation is not selected.
- Final safety/moderation interaction details are not defined in this design file.
- Live video technology and matching backend behavior are outside the scope of this visual design specification.
- Final copy may change before the 11 November 2026 launch.
