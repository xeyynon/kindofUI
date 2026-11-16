# Swiss / International style

Visual styles · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#swiss

A strict grid, sans-serif type, flush-left text, and bold geometric shapes in red, black and white.

- **Good for:** Posters, museums, agencies, information-heavy sites
- **Watch out:** Playful consumer brands that need warmth
- **Seen in:** museum posters, Swiss railway signage, many design agency sites

## Prompt for an AI assistant

Design this interface in the Swiss / International style visual style.

What it is: A strict grid, sans-serif type, flush-left text, and bold geometric shapes in red, black and white.
Good for: Posters, museums, agencies, information-heavy sites.
Watch out: Playful consumer brands that need warmth.
Seen in: museum posters, Swiss railway signage, many design agency sites

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
<div class="stage s-swiss">
    <span class="no">Nº 47 — Zürich</span>
    <div class="red"></div>
    <h4 role="none">Form<br>folgt<br>Funktion.</h4>
    <span class="circ"></span>
    <div class="small">Kunstgewerbemuseum. Ausstellung vom 4. bis 28. November. Täglich geöffnet 10 to 18 Uhr. Eintritt frei.</div>
  </div>
```

### CSS

```css
/* base styles the site gives every demo (scoped to this demo) */
.s-swiss, .s-swiss *, .s-swiss *::before, .s-swiss *::after { box-sizing: border-box; }
.s-swiss { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-swiss button { font: inherit; cursor: pointer; }
.s-swiss { background: #fff; color: #000; font-family: "Helvetica Neue",Helvetica,Arial,sans-serif; display: grid; grid-template-columns: repeat(6,1fr); grid-template-rows: repeat(6,1fr); gap: 0; padding: 16px; }
.s-swiss .red { grid-column: 4/7; grid-row: 1/4; background: #e30613; }
.s-swiss .circ { grid-column: 5/6; grid-row: 4/6; border-radius: 50%; background: #000; aspect-ratio: 1; max-width: 100%; align-self: center; }
.s-swiss h4 { grid-column: 1/5; grid-row: 2/5; font: 700 42px/.9 "Helvetica Neue",Helvetica,Arial,sans-serif; margin: 0; letter-spacing: -.03em; z-index: 1; align-self: center; }
.s-swiss .small { grid-column: 1/4; grid-row: 5/7; font-size: 10px; line-height: 1.35; align-self: end; columns: 2; column-gap: 10px; }
.s-swiss .no { grid-column: 1/3; grid-row: 1/2; font-size: 10px; font-weight: 700; }
```

No JavaScript needed.
