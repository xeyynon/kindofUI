# Faceted search & filters

Components and UX patterns · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#facets

Checkboxes narrow a list by several attributes at once, with a live result count and removable filter chips. Tick some filters.

- **Good for:** Large catalogs and search results
- **Watch out:** Small lists that fit on one screen
- **Seen in:** Amazon, Flipkart, Myntra, Airbnb

## Prompt for an AI assistant

Build this UI pattern for my app: Faceted search & filters.

What it is: Checkboxes narrow a list by several attributes at once, with a live result count and removable filter chips. Tick some filters.
Good for: Large catalogs and search results.
Watch out: Small lists that fit on one screen.
Seen in: Amazon, Flipkart, Myntra, Airbnb

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
<div class="stage s-fac">
    <div class="fl"><b>Brand</b><label for="fac-b1"><input type="checkbox" id="fac-b1" value="Aero" data-k="brand">Aero</label><label for="fac-b2"><input type="checkbox" id="fac-b2" value="Stride" data-k="brand">Stride</label><label for="fac-b3"><input type="checkbox" id="fac-b3" value="Kora" data-k="brand">Kora</label><b>Price</b><label for="fac-p"><input type="checkbox" id="fac-p">Under ₹3,000</label><b>Rating</b><label for="fac-r"><input type="checkbox" id="fac-r" checked="">4★ &amp; up</label></div>
    <div class="rs"><div class="ct"><b id="fac-n">4</b> results <button id="fac-clr">Clear all</button></div><div class="chips" id="fac-chips"></div><ul id="fac-list"></ul></div>
  </div>
```

### CSS

```css
/* base styles the site gives every demo (scoped to this demo) */
.s-fac, .s-fac *, .s-fac *::before, .s-fac *::after { box-sizing: border-box; }
.s-fac { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-fac button { font: inherit; cursor: pointer; }
.s-fac { background: #fff; color: #1f2430; display: grid; grid-template-columns: 120px 1fr; font-size: 12px; }
.s-fac .fl { padding: 12px; border-right: 1px solid #eef0f3; display: grid; gap: 4px; align-content: start; }
.s-fac .fl b { font-size: 10px; text-transform: uppercase; letter-spacing: .08em; color: #888; margin-top: 6px; }
.s-fac label { display: flex; gap: 6px; align-items: center; }
.s-fac .rs { padding: 12px; display: grid; gap: 8px; align-content: start; min-width: 0; }
.s-fac .ct { display: flex; gap: 4px; align-items: center; }
.s-fac .ct button { margin-left: auto; border: 0; background: none; color: #3557e0; font-size: 11px; font-weight: 600; }
.s-fac .chips { display: flex; flex-wrap: wrap; gap: 4px; }
.s-fac .chips span { background: #eef1ff; color: #3557e0; border-radius: 999px; padding: 2px 8px; font-size: 10px; }
.s-fac ul { list-style: none; margin: 0; padding: 0; display: grid; gap: 5px; }
.s-fac li { display: flex; justify-content: space-between; gap: 6px; border: 1px solid #eef0f3; border-radius: 6px; padding: 6px 8px; }
.s-fac li span { color: #777; white-space: nowrap; }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  const on = (sel, ev, fn) => { const el = $(sel); if (el) el.addEventListener(ev, fn); return el; };

  // faceted filters
  (() => { const P = [['Aero Run 2', 'Aero', 2799, 4.5], ['Aero Glide', 'Aero', 4499, 4.2], ['Stride Lite', 'Stride', 1999, 3.9], ['Stride Pro', 'Stride', 3599, 4.6], ['Kora Trail', 'Kora', 3299, 4.1], ['Kora Flex', 'Kora', 2499, 3.8]];
    const cb = $$('.s-fac input'), ul = $('#fac-list'), n = $('#fac-n'), ch = $('#fac-chips'); if (!ul) return;
    const fmt = x => '₹' + x.toLocaleString('en-IN');
    const r = () => { const br = cb.filter(c => c.dataset.k === 'brand' && c.checked).map(c => c.value), cheap = $('#fac-p').checked, top = $('#fac-r').checked;
      const f = P.filter(p => (!br.length || br.includes(p[1])) && (!cheap || p[2] < 3000) && (!top || p[3] >= 4));
      n.textContent = f.length; ch.innerHTML = cb.filter(c => c.checked).map(c => `<span>${c.parentNode.textContent.trim()}</span>`).join('');
      ul.innerHTML = f.map(p => `<li><b>${p[0]}</b><span>${fmt(p[2])} · ★${p[3]}</span></li>`).join('') || '<li>No shoes match. Remove a filter.</li>'; };
    cb.forEach(c => c.addEventListener('change', r)); on('#fac-clr', 'click', () => { cb.forEach(c => c.checked = false); r(); }); r();
  })();
})();
```
