# Asymmetric / broken grid

Layouts · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#asym

Elements overlap, rotate and break out of a regular grid on purpose to feel editorial and dynamic.

- **Good for:** Fashion, agencies, portfolios, editorial
- **Watch out:** Forms, docs and anything scanned quickly
- **Seen in:** fashion brands, creative agencies, portfolio sites

## Prompt for an AI assistant

Build this layout for my page: Asymmetric / broken grid.

What it is: Elements overlap, rotate and break out of a regular grid on purpose to feel editorial and dynamic.
Good for: Fashion, agencies, portfolios, editorial.
Watch out: Forms, docs and anything scanned quickly.
Seen in: fashion brands, creative agencies, portfolio sites

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
<div class="stage s-asym">
    <span class="big">07</span>
    <div class="img"></div>
    <div class="txt"><b>Autumn<br>Collection</b><span>Raw linen, earth tones and loose cuts.</span></div>
    <span class="strip"></span>
  </div>
```

### CSS

```css
:root { --display: "Bricolage Grotesque",system-ui,sans-serif; }
/* fonts used (all on Google Fonts): Bricolage Grotesque */
/* base styles the site gives every demo (scoped to this demo) */
.s-asym, .s-asym *, .s-asym *::before, .s-asym *::after { box-sizing: border-box; }
.s-asym { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-asym button { font: inherit; cursor: pointer; }
.s-asym { background: #f0ede6; color: #1a1a1a; }
.s-asym .img { position: absolute; left: 8%; top: 12%; width: 46%; height: 68%; background: linear-gradient(150deg,#c2410c,#7c2d12); transform: rotate(-4deg); }
.s-asym .txt { position: absolute; right: 6%; top: 30%; width: 52%; background: #fff; padding: 14px; box-shadow: 0 10px 30px rgba(0,0,0,.12); }
.s-asym .txt b { font: 800 24px/1 var(--display); display: block; margin-bottom: 6px; }
.s-asym .txt span { font-size: 11px; color: #555; }
.s-asym .big { position: absolute; right: 8%; top: 2%; font: 800 70px/1 var(--display); color: transparent; -webkit-text-stroke: 1.5px #1a1a1a; }
.s-asym .strip { position: absolute; left: 0; bottom: 12%; width: 60%; height: 12px; background: #1a1a1a; }
```

No JavaScript needed.
