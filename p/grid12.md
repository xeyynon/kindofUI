# 12-column grid

Layouts · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#grid12

The page is split into 12 equal columns with gutters. Blocks span 12, 8, 6, 4 or 3 columns, so everything lines up. The red stripes are the columns.

- **Good for:** Almost any responsive page layout
- **Watch out:** Forcing tiny components onto it
- **Seen in:** Bootstrap, most marketing sites, Figma layout grids

## Prompt for an AI assistant

Build this layout for my page: 12-column grid.

What it is: The page is split into 12 equal columns with gutters. Blocks span 12, 8, 6, 4 or 3 columns, so everything lines up. The red stripes are the columns.
Good for: Almost any responsive page layout.
Watch out: Forcing tiny components onto it.
Seen in: Bootstrap, most marketing sites, Figma layout grids

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
<div class="stage wf s-g12">
    <div class="cols" id="g12-cols"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
    <div class="g"><div class="bx" style="grid-column:span 12">span 12 · header</div><div class="bx" style="grid-column:span 8;height:80px">span 8 · main</div><div class="bx" style="grid-column:span 4">span 4 · side</div><div class="bx" style="grid-column:span 4">span 4</div><div class="bx" style="grid-column:span 4">span 4</div><div class="bx" style="grid-column:span 4">span 4</div><div class="bx" style="grid-column:span 6">span 6</div><div class="bx" style="grid-column:span 6">span 6</div><div class="bx" style="grid-column:span 3">3</div><div class="bx" style="grid-column:span 3">3</div><div class="bx" style="grid-column:span 3">3</div><div class="bx" style="grid-column:span 3">3</div></div>
    <button class="tgl" id="g12-btn">Hide columns</button>
  </div>
```

### CSS

```css
:root { --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-g12, .s-g12 *, .s-g12 *::before, .s-g12 *::after { box-sizing: border-box; }
.s-g12 { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-g12 button { font: inherit; cursor: pointer; }
.wf { background: #f3f4f7; color: #2b3040; }
.bx { background: #fff; border: 1px solid #dfe3ea; border-radius: 6px; }
.s-g12 { padding: 14px; }
.s-g12 .cols,.s-g12 .g { display: grid; grid-template-columns: repeat(12,1fr); gap: 8px; }
.s-g12 .cols { position: absolute; inset: 14px; pointer-events: none; z-index: 1; }
.s-g12 .cols i { background: rgba(229,72,77,.13); }
.s-g12 .g .bx { padding: 6px; font: 9px/1.2 var(--mono); min-height: 30px; min-width: 0; overflow-wrap: anywhere; }
.s-g12 .tgl { position: absolute; right: 12px; bottom: 10px; z-index: 2; border: 1px solid #d6dae1; background: #fff; border-radius: 6px; padding: 4px 10px; font-size: 11px; }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  const on = (sel, ev, fn) => { const el = $(sel); if (el) el.addEventListener(ev, fn); return el; };

  /* ---------- Layouts ---------- */
  on('#g12-btn', 'click', e => { const c = $('#g12-cols'); c.hidden = !c.hidden; e.currentTarget.textContent = c.hidden ? 'Show columns' : 'Hide columns'; });
})();
```
