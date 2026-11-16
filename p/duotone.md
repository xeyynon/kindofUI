# Duotone

Visual styles · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#duotone

A photo turned into just two colors, one for shadows and one for highlights, often with bold type on top.

- **Good for:** Hero images, campaigns, year-in-review stories
- **Watch out:** Product photos where true color matters
- **Seen in:** year-in-review campaigns, editorial heroes, posters

## Prompt for an AI assistant

Design this interface in the Duotone visual style.

What it is: A photo turned into just two colors, one for shadows and one for highlights, often with bold type on top.
Good for: Hero images, campaigns, year-in-review stories.
Watch out: Product photos where true color matters.
Seen in: year-in-review campaigns, editorial heroes, posters

Requirements:
1. Match my existing stack, components and design tokens. If I have none, use semantic HTML, CSS and a little vanilla JavaScript.
2. Every control must work with the keyboard and show a visible focus ring.
3. Keep text contrast at WCAG AA or better (4.5:1 for body text, 3:1 for large text and icons).
4. Respect prefers-reduced-motion and keep any motion calm and short.
5. Make it work from 320px wide up to large desktops with no sideways scrolling.
6. Use realistic content instead of lorem ipsum, and do not add features I did not ask for.

Use the kindofui reference code below for the look and behaviour. Adapt it to my project instead of pasting it as is.

## Code

Copy and adapt. The HTML and CSS are scoped to this demo, so they will not touch the page they are pasted into.

### HTML

```html
<div class="stage s-duo"><span class="ph"></span><span class="o1"></span><span class="o2"></span><div class="tx"><small>YOUR 2026</small><h4 role="none">412 hours<br>of music</h4></div></div>
```

### CSS

```css
:root { --display: "Bricolage Grotesque",system-ui,sans-serif; --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): Bricolage Grotesque, JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-duo, .s-duo *, .s-duo *::before, .s-duo *::after { box-sizing: border-box; }
.s-duo { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-duo button { font: inherit; cursor: pointer; }
.s-duo { isolation: isolate; color: #fff; display: grid; align-content: end; padding: 18px; }
.s-duo .ph { position: absolute; inset: 0; background: radial-gradient(circle at 62% 32%,#eee 0 13%,transparent 13.5%),radial-gradient(ellipse 34% 30% at 62% 78%,#ccc 0 99%,transparent 100%),radial-gradient(circle at 30% 20%,#999,#222 70%); filter: grayscale(1) contrast(1.2); }
.s-duo .o1 { position: absolute; inset: 0; background: #2b0a6b; mix-blend-mode: lighten; }
.s-duo .o2 { position: absolute; inset: 0; background: #ff4f8b; mix-blend-mode: multiply; }
.s-duo .tx { position: relative; z-index: 1; }
.s-duo small { font: 700 10px var(--mono); letter-spacing: .2em; }
.s-duo h4 { margin: 4px 0 0; font: 800 30px/1 var(--display); }
```

No JavaScript needed.
