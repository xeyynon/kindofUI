# Tooltips & popovers

Components and UX patterns · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#tooltip

A tooltip is a short label that appears on hover or focus. A popover is a small panel you open on click and can interact with.

- **Good for:** Labels for icon buttons and short hints
- **Watch out:** Essential info, or touch-only screens
- **Seen in:** Figma toolbar, Google Docs, Notion share menu

## Prompt for an AI assistant

Build this UI pattern for my app: Tooltips & popovers.

What it is: A tooltip is a short label that appears on hover or focus. A popover is a small panel you open on click and can interact with.
Good for: Labels for icon buttons and short hints.
Watch out: Essential info, or touch-only screens.
Seen in: Figma toolbar, Google Docs, Notion share menu

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
<div class="stage s-tip">
    <div class="row">
      <span class="pw"><button class="sh" id="pop-b" aria-expanded="true">Share ▾</button><div class="pop" id="pop"><b>Share "Q4 plan"</b><input id="pop-l" value="docs.example.com/q4" readonly="" aria-label="Share link"><label for="pop-c"><input type="checkbox" checked="" id="pop-c"> Anyone with the link can view</label><button class="cp2">Copy link</button></div></span>
      <span class="tw"><button class="ib" aria-label="Bold" aria-describedby="tt1">B</button><span role="tooltip" id="tt1" class="tt">Bold <kbd>Ctrl B</kbd></span></span>
      <span class="tw"><button class="ib" aria-label="Italic" aria-describedby="tt2"><i>I</i></button><span role="tooltip" id="tt2" class="tt">Italic <kbd>Ctrl I</kbd></span></span>
      <span class="tw"><button class="ib" aria-label="Insert link" aria-describedby="tt3">⛓</button><span role="tooltip" id="tt3" class="tt">Insert link <kbd>Ctrl K</kbd></span></span>
    </div>
    <small class="hint">Hover or Tab to B, I and ⛓ for tooltips</small>
  </div>
```

### CSS

```css
:root { --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-tip, .s-tip *, .s-tip *::before, .s-tip *::after { box-sizing: border-box; }
.s-tip { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-tip button { font: inherit; cursor: pointer; }
.s-tip { background: #fff; color: #1f2430; padding: 16px; font-size: 12px; }
.s-tip .row { display: flex; gap: 4px; align-items: center; border: 1px solid #e3e6ec; border-radius: 8px; padding: 5px; width: max-content; max-width: 100%; }
.s-tip .tw,.s-tip .pw { position: relative; }
.s-tip .ib { width: 30px; height: 30px; border: 0; background: none; border-radius: 6px; font-weight: 700; color: #1f2430; }
.s-tip .ib:hover { background: #f1f3f8; }
.s-tip .tt { position: absolute; top: calc(100% + 8px); left: 50%; transform: translateX(-50%); background: #111827; color: #fff; font-size: 11px; padding: 4px 8px; border-radius: 5px; white-space: nowrap; opacity: 0; pointer-events: none; transition: opacity .15s; z-index: 3; }
.s-tip .tt::before { content: ""; position: absolute; top: -4px; left: 50%; margin-left: -4px; border: 4px solid transparent; border-top: 0; border-bottom-color: #111827; }
.s-tip .tw:hover .tt,.s-tip .tw:focus-within .tt { opacity: 1; }
.s-tip kbd { font: 10px var(--mono); opacity: .7; margin-left: 4px; }
.s-tip .sh { border: 1px solid #d6dae1; background: #fff; border-radius: 6px; padding: 6px 10px; margin-right: 4px; color: #1f2430; }
.s-tip .pop { position: absolute; left: 0; top: calc(100% + 10px); width: 220px; background: #fff; border: 1px solid #e3e6ec; border-radius: 10px; box-shadow: 0 14px 30px rgba(0,0,0,.12); padding: 12px; display: grid; gap: 8px; z-index: 2; }
.s-tip .pop input[readonly] { border: 1px solid #e3e6ec; border-radius: 6px; padding: 6px; font: 11px var(--mono); background: #f7f8fa; color: #1f2430; min-width: 0; }
.s-tip .pop label { display: flex; gap: 6px; align-items: center; font-size: 11px; }
.s-tip .cp2 { border: 0; background: #3557e0; color: #fff; border-radius: 6px; padding: 7px; font-weight: 600; }
.s-tip .hint { position: absolute; left: 16px; bottom: 12px; color: #888; font-size: 11px; }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  const on = (sel, ev, fn) => { const el = $(sel); if (el) el.addEventListener(ev, fn); return el; };

  // popover + copy
  on('#pop-b', 'click', e => { const p = $('#pop'); p.hidden = !p.hidden; e.currentTarget.setAttribute('aria-expanded', !p.hidden); });

  on('.s-tip .cp2', 'click', e => { const t = e.currentTarget; try { navigator.clipboard && navigator.clipboard.writeText('https://docs.example.com/q4').catch(() => {}); } catch (_) {} t.textContent = 'Link copied ✓'; setTimeout(() => t.textContent = 'Copy link', 1500); });
})();
```
