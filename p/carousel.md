# Carousel / slider

Layouts · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#carousel

One slide at a time with arrows and dots.

- **Good for:** A few equally important visual items
- **Watch out:** Hiding key content; most people never see slide 3
- **Seen in:** e-commerce homepages, app stores, news sites

## Prompt for an AI assistant

Build this layout for my page: Carousel / slider.

What it is: One slide at a time with arrows and dots.
Good for: A few equally important visual items.
Watch out: Hiding key content; most people never see slide 3.
Seen in: e-commerce homepages, app stores, news sites

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
<div class="stage s-car">
    <div class="tr" id="car-tr" tabindex="0" role="region" aria-label="Carousel slides"><div class="sl" style="background:linear-gradient(135deg,#f6d365,#fda085)"><b>Summer sale</b><span>Up to 40% off sandals</span></div><div class="sl" style="background:linear-gradient(135deg,#43cea2,#185a9d)"><b>New: Trail series</b><span>Built for monsoon hikes</span></div><div class="sl" style="background:linear-gradient(135deg,#a18cd1,#7b4397)"><b>Members get more</b><span>Free delivery, always</span></div><div class="sl" style="background:linear-gradient(135deg,#30cfd0,#330867)"><b>Gift cards</b><span>From ₹500</span></div></div>
    <button class="ar l" id="car-p" aria-label="Previous slide">‹</button><button class="ar r" id="car-n" aria-label="Next slide">›</button>
    <div class="dots" id="car-d"></div>
  </div>
```

### CSS

```css
:root { --display: "Bricolage Grotesque",system-ui,sans-serif; }
/* fonts used (all on Google Fonts): Bricolage Grotesque */
/* base styles the site gives every demo (scoped to this demo) */
.s-car, .s-car *, .s-car *::before, .s-car *::after { box-sizing: border-box; }
.s-car { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-car button { font: inherit; cursor: pointer; }
.s-car { background: #fff; padding: 14px; display: grid; grid-template-rows: 1fr auto; gap: 10px; color: #1f2430; }
.s-car .tr { display: flex; gap: 10px; overflow-x: auto; scroll-snap-type: x mandatory; scrollbar-width: none; border-radius: 12px; }
.s-car .tr::-webkit-scrollbar { display: none; }
.s-car .sl { flex: 0 0 100%; scroll-snap-align: center; border-radius: 12px; padding: 18px; display: flex; flex-direction: column; justify-content: flex-end; color: #fff; text-shadow: 0 1px 4px rgba(0,0,0,.25); }
.s-car .sl b { font: 800 22px var(--display); }
.s-car .ar { position: absolute; top: calc(50% - 28px); width: 32px; height: 32px; border-radius: 50%; border: 0; background: rgba(255,255,255,.92); box-shadow: 0 2px 6px rgba(0,0,0,.2); font-size: 18px; line-height: 1; color: #1f2430; }
.s-car .ar.l { left: 22px; }
.s-car .ar.r { right: 22px; }
.s-car .dots { display: flex; gap: 16px; justify-content: center; }
.s-car .dots button { width: 8px; height: 8px; border-radius: 4px; border: 0; background: #d1d5db; padding: 0; transition: width .2s; }
.s-car .dots button.on { width: 22px; background: #3557e0; }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  const on = (sel, ev, fn) => { const el = $(sel); if (el) el.addEventListener(ev, fn); return el; };

  // carousel
  (() => { const tr = $('#car-tr'), d = $('#car-d'); if (!tr) return; const n = tr.children.length;
    d.innerHTML = Array.from({ length: n }, (_, i) => `<button aria-label="Slide ${i + 1}"></button>`).join(''); const dots = [...d.children];
    const cur = () => Math.round(tr.scrollLeft / (tr.clientWidth + 10));
    const go = i => tr.scrollTo({ left: Math.max(0, Math.min(n - 1, i)) * (tr.clientWidth + 10), behavior: 'smooth' });
    const upd = () => { const i = cur(); dots.forEach((b, j) => b.classList.toggle('on', i === j)); };
    tr.addEventListener('scroll', upd, { passive: true }); dots.forEach((b, i) => b.addEventListener('click', () => go(i)));
    on('#car-p', 'click', () => go(cur() - 1)); on('#car-n', 'click', () => go(cur() + 1)); upd();
  })();
})();
```
