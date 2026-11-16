# Back-to-top button

Navigation · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#backtotop

A small button that appears after you scroll down and takes you back to the top.

- **Good for:** Very long pages and feeds
- **Watch out:** Short pages, where it only adds clutter
- **Seen in:** long blogs, shopping listings, news sites

## Prompt for an AI assistant

Build this navigation pattern for my app: Back-to-top button.

What it is: A small button that appears after you scroll down and takes you back to the top.
Good for: Very long pages and feeds.
Watch out: Short pages, where it only adds clutter.
Seen in: long blogs, shopping listings, news sites

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
<div class="stage s-btt">
    <div class="scr" id="btt-s" tabindex="0" role="region" aria-label="Product list"><h5 role="none">All products</h5><div class="gr" id="btt-l"></div></div>
    <button class="up" id="btt" hidden="" aria-label="Back to top">↑</button><span class="hint">scroll down ↓</span>
  </div>
```

### CSS

```css
:root { --display: "Bricolage Grotesque",system-ui,sans-serif; --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): Bricolage Grotesque, JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-btt, .s-btt *, .s-btt *::before, .s-btt *::after { box-sizing: border-box; }
.s-btt { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-btt button { font: inherit; cursor: pointer; }
[hidden] { display: none !important; }
.s-btt { background: #fff; color: #1f2430; font-size: 12px; }
.s-btt .scr { position: absolute; inset: 0; overflow-y: auto; padding: 14px; }
.s-btt h5 { margin: 0 0 10px; font: 700 15px var(--display); }
.s-btt .gr { display: grid; grid-template-columns: repeat(3,1fr); gap: 8px; }
.s-btt .gr div { aspect-ratio: 1; border-radius: 8px; display: flex; align-items: flex-end; padding: 5px; font-size: 10px; color: #fff; font-weight: 600; max-width: 100%; }
.s-btt .up { position: absolute; right: 14px; bottom: 14px; width: 40px; height: 40px; border-radius: 50%; border: 0; background: #111827; color: #fff; font-size: 16px; box-shadow: 0 4px 10px rgba(0,0,0,.3); }
.s-btt .hint { position: absolute; right: 12px; bottom: 10px; font: 10px var(--mono); color: #555; background: #fff; padding: 3px 7px; border-radius: 4px; box-shadow: 0 1px 4px rgba(0,0,0,.15); }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // back to top
  (() => { const s = $('#btt-s'), l = $('#btt-l'), b = $('#btt'), h = $('.s-btt .hint'); if (!s) return;
    const n = ['Kurta', 'Sneakers', 'Tote', 'Watch', 'Scarf', 'Jeans', 'Shirt', 'Cap', 'Wallet', 'Sandals', 'Jacket', 'Saree', 'Belt', 'Mug', 'Lamp', 'Rug', 'Vase', 'Pillow', 'Bottle', 'Backpack', 'Hoodie', 'Socks', 'Earrings', 'Planter'];
    l.innerHTML = n.map((x, i) => `<div style="background:hsl(${i * 37 % 360} 50% 45%)">${x}</div>`).join('');
    s.addEventListener('scroll', () => { b.hidden = s.scrollTop < 120; h.hidden = s.scrollTop >= 120; }, { passive: true });
    b.addEventListener('click', () => s.scrollTo({ top: 0, behavior: 'smooth' }));
  })();
})();
```
