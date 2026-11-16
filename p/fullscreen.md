# Full-screen sections (scroll snap)

Layouts · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#fullscreen

Each section fills the screen and scrolling snaps from one to the next, like slides.

- **Good for:** Short product pages, presentations, app intros
- **Watch out:** Long content; snapping fights free scrolling
- **Seen in:** app launch pages, product reveals, presentations

## Prompt for an AI assistant

Build this layout for my page: Full-screen sections (scroll snap).

What it is: Each section fills the screen and scrolling snaps from one to the next, like slides.
Good for: Short product pages, presentations, app intros.
Watch out: Long content; snapping fights free scrolling.
Seen in: app launch pages, product reveals, presentations

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
<div class="stage s-fs">
    <div class="scr" id="fs" tabindex="0" role="region" aria-label="Full-screen sections"><div style="background:#0f172a"><b>Fast</b><span>Loads in under a second</span></div><div style="background:#3557e0"><b>Private</b><span>Your data stays on your phone</span></div><div style="background:#15803d"><b>Free</b><span>No ads, no trials</span></div><div style="background:#b45309"><b>Get the app</b><span>iOS and Android</span></div></div>
    <div class="dots" id="fs-d"></div>
  </div>
```

### CSS

```css
:root { --display: "Bricolage Grotesque",system-ui,sans-serif; }
/* fonts used (all on Google Fonts): Bricolage Grotesque */
/* base styles the site gives every demo (scoped to this demo) */
.s-fs, .s-fs *, .s-fs *::before, .s-fs *::after { box-sizing: border-box; }
.s-fs { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-fs button { font: inherit; cursor: pointer; }
.s-fs { color: #fff; }
.s-fs .scr { position: absolute; inset: 0; overflow-y: auto; scroll-snap-type: y mandatory; scrollbar-width: none; }
.s-fs .scr::-webkit-scrollbar { display: none; }
.s-fs .scr > div { height: 100%; scroll-snap-align: start; display: grid; place-content: center; justify-items: center; gap: 4px; text-align: center; }
.s-fs .scr b { font: 800 34px var(--display); }
.s-fs .scr span { font-size: 13px; opacity: .85; }
.s-fs .dots { position: absolute; right: 12px; top: 50%; transform: translateY(-50%); display: grid; gap: 18px; }
.s-fs .dots button { width: 8px; height: 8px; border-radius: 4px; border: 0; padding: 0; background: rgba(255,255,255,.45); transition: height .2s; }
.s-fs .dots button.on { background: #fff; height: 20px; }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // full-screen snap sections
  (() => { const s = $('#fs'), d = $('#fs-d'); if (!s) return; const n = s.children.length;
    d.innerHTML = Array.from({ length: n }, (_, i) => `<button aria-label="Section ${i + 1}"></button>`).join(''); const b = [...d.children];
    const upd = () => { const i = Math.round(s.scrollTop / s.clientHeight); b.forEach((x, j) => x.classList.toggle('on', i === j)); };
    s.addEventListener('scroll', upd, { passive: true }); b.forEach((x, i) => x.addEventListener('click', () => s.scrollTo({ top: i * s.clientHeight, behavior: 'smooth' }))); upd();
  })();
})();
```
