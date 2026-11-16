# Easing curves

Accessibility and motion · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#easing

Easing controls how motion speeds up and slows down. Ease-out feels natural for things entering, and a little overshoot feels springy.

- **Good for:** Natural motion: ease-out entering, ease-in leaving
- **Watch out:** Linear motion for UI; it feels mechanical
- **Seen in:** Material motion, Apple spring animations

## Prompt for an AI assistant

Make my UI follow this accessibility and motion practice: Easing curves.

What it is: Easing controls how motion speeds up and slows down. Ease-out feels natural for things entering, and a little overshoot feels springy.
Good for: Natural motion: ease-out entering, ease-in leaving.
Watch out: Linear motion for UI; it feels mechanical.
Seen in: Material motion, Apple spring animations

Steps:
1. Audit every page and component I share against this practice and list each problem with its element.
2. Fix the problems in code without changing the visual design more than needed.
3. Follow WCAG 2.2 AA and say which success criterion each fix covers.
4. Tell me how to test it myself: keyboard only, a screen reader, 200% zoom and reduced motion.

The kindofui example below shows the practice in a small working demo.

## Code

Copy and adapt. The HTML and CSS are scoped to this demo, so they will not touch the page they are pasted into.

### HTML

```html
<div class="stage s-ease go" id="ease">
    <div class="tk3"><span>linear</span><i style="--e:linear"></i></div>
    <div class="tk3"><span>ease-out</span><i style="--e:cubic-bezier(0,0,.2,1)"></i></div>
    <div class="tk3"><span>ease-in-out</span><i style="--e:cubic-bezier(.4,0,.2,1)"></i></div>
    <div class="tk3"><span>spring</span><i style="--e:cubic-bezier(.34,1.56,.64,1)"></i></div>
    <button id="ease-b">Replay</button>
  </div>
```

### CSS

```css
:root { --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-ease, .s-ease *, .s-ease *::before, .s-ease *::after { box-sizing: border-box; }
.s-ease { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-ease button { font: inherit; cursor: pointer; }
.s-ease { background: #fff; color: #1f2430; padding: 16px 18px; display: grid; gap: 12px; align-content: center; font-size: 11px; }
.s-ease .tk3 { display: grid; grid-template-columns: 76px 1fr; align-items: center; gap: 10px; }
.s-ease .tk3 span { font: 11px var(--mono); color: #555; }
.s-ease .tk3 i { display: block; height: 26px; background: #f3f4f7; border-radius: 13px; position: relative; }
.s-ease .tk3 i::after { content: ""; position: absolute; left: 3px; top: 3px; width: 20px; height: 20px; border-radius: 50%; background: #3557e0; }
.s-ease.go .tk3 i::after { animation: slide 1.2s var(--e) forwards; }
.s-ease button { justify-self: start; border: 1px solid #cfd5dd; background: #fff; border-radius: 6px; padding: 5px 12px; color: #1f2430; }
@keyframes slide {
  to{left:calc(100% - 23px)}
}
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  const on = (sel, ev, fn) => { const el = $(sel); if (el) el.addEventListener(ev, fn); return el; };

  on('#ease-b', 'click', () => { const s = $('#ease'); s.classList.remove('go'); void s.offsetWidth; s.classList.add('go'); });
})();
```
