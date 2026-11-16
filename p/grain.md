# Grain / noise texture

Visual styles · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#grain

A fine film-like noise over gradients and flat colors. It removes the "too digital" look and hides color banding.

- **Good for:** Adding warmth to gradients and flat colors
- **Watch out:** Small text and controls; keep it subtle
- **Seen in:** modern landing pages, album covers, brand illustrations

## Prompt for an AI assistant

Design this interface in the Grain / noise texture visual style.

What it is: A fine film-like noise over gradients and flat colors. It removes the "too digital" look and hides color banding.
Good for: Adding warmth to gradients and flat colors.
Watch out: Small text and controls; keep it subtle.
Seen in: modern landing pages, album covers, brand illustrations

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
<div class="stage s-grain"><div class="tx"><h4 role="none">Golden hour</h4><p>Left half: flat gradient. Right half: the same gradient with grain.</p></div><span class="lb a">no grain</span><span class="lb b">grain</span></div>
```

### CSS

```css
:root { --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): JetBrains Mono, DM Serif Display */
/* base styles the site gives every demo (scoped to this demo) */
.s-grain, .s-grain *, .s-grain *::before, .s-grain *::after { box-sizing: border-box; }
.s-grain { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-grain button { font: inherit; cursor: pointer; }
.s-grain { background: linear-gradient(135deg,#ff8a5b,#f6c453 50%,#7bd3c1); color: #2a1a10; display: grid; place-items: center; text-align: center; }
.s-grain::after { content: ""; position: absolute; inset: 0 0 0 50%; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); mix-blend-mode: overlay; opacity: .9; pointer-events: none; }
.s-grain::before { content: ""; position: absolute; left: 50%; top: 0; bottom: 0; border-left: 1px dashed rgba(0,0,0,.3); }
.s-grain .tx { position: relative; }
.s-grain h4 { margin: 0; font: 400 38px/1 "DM Serif Display",serif; }
.s-grain p { margin: 6px 0 0; font-size: 12px; }
.s-grain .lb { position: absolute; top: 10px; font: 600 10px var(--mono); text-transform: uppercase; letter-spacing: .1em; }
.s-grain .a { left: 12px; }
.s-grain .b { right: 12px; }
```

No JavaScript needed.
