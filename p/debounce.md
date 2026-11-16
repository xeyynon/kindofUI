# Search as you type, done right

Components and UX patterns · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#debounce

Wait for a short pause in typing before searching, and cancel or ignore older requests. Otherwise every key sends a request, and a slow reply for "la" can arrive after the one for "lamp" and replace the right results.

- **Good for:** Search boxes, autocomplete and live filters
- **Watch out:** Enter must still search; announce result counts
- **Based on:** MDN on debouncing and AbortController; NN/g on search suggestions (2018). The pause length is convention, not research.

## Prompt for an AI assistant

Build this UI pattern for my app: Search as you type, done right.

What it is: Wait for a short pause in typing before searching, and cancel or ignore older requests. Otherwise every key sends a request, and a slow reply for "la" can arrive after the one for "lamp" and replace the right results.
Good for: Search boxes, autocomplete and live filters.
Watch out: Enter must still search; announce result counts.
Based on: MDN on debouncing and AbortController; NN/g on search suggestions (2018). The pause length is convention, not research.

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
<div class="stage s-deb">
    <input type="search" aria-label="Search products" placeholder="Type lamp quickly">
    <div class="two">
      <div class="pane"><span class="cap">A request per key<small>slow replies can arrive last</small></span><span class="shown">Showing: <b>nothing yet</b></span><ul class="log" aria-label="Requests, every key"></ul></div>
      <div class="pane"><span class="cap">Wait for a pause<small>older requests cancelled</small></span><span class="shown">Showing: <b>nothing yet</b></span><ul class="log" aria-label="Requests, after a pause"></ul></div>
    </div>
  </div>
```

### CSS

```css
:root { --body: "Figtree",system-ui,sans-serif; --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): Figtree, JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-deb, .s-deb *, .s-deb *::before, .s-deb *::after { box-sizing: border-box; }
.s-deb { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-deb button { font: inherit; cursor: pointer; }
.s-dly,.s-rsv,.s-esum,.s-lbl,.s-pwd,.s-dbl,.s-deb,.s-inl,.s-fcs,.s-back { background: #fff; color: #1f2430; font-size: 12px; padding: 12px 14px; }
.s-dly .two,.s-rsv .two,.s-dbl .two,.s-deb .two,.s-inl .two { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; min-height: 0; }
.s-dly .cap,.s-rsv .cap,.s-dbl .cap,.s-deb .cap,.s-inl .cap { font: 600 11px/1.3 var(--body); color: #1f2430; }
.s-dly .cap small,.s-rsv .cap small,.s-dbl .cap small,.s-deb .cap small,.s-inl .cap small { display: block; font-weight: 400; color: #5f6672; }
.s-deb { display: grid; grid-template-rows: auto 1fr; gap: 8px; }
.s-deb input { width: 100%; border: 1px solid #8a919e; border-radius: 6px; padding: 7px 9px; font: 13px var(--body); }
.s-deb .pane { display: grid; grid-template-rows: auto auto 1fr; gap: 5px; min-height: 0; }
.s-deb .shown { font-size: 11px; }
.s-deb .shown b { font-family: var(--mono); }
.s-deb .shown.stale b { color: #b3261e; }
.s-deb .log { margin: 0; padding: 6px 8px; border: 1px solid #e3e6ec; border-radius: 7px; font: 10.5px/1.5 var(--mono); color: #4a5160; overflow: auto; min-height: 0; list-style: none; }
.s-deb .log .x { text-decoration: line-through; color: #8a919e; }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // search as you type: slow replies for short queries arrive last; a pause plus cancelling keeps the right results
  (() => {
    const st = $('.s-deb'); if (!st) return;
    const inp = $('input', st), panes = $$('.pane', st); let timer = 0, latest = 0, seq = 0;
    const fake = q => new Promise(res => setTimeout(() => res(q), Math.max(120, 900 - q.length * 170)));   // shorter queries are slower here, like a busy index
    const log = (pane, txt, cls) => { const li = document.createElement('li'); li.textContent = txt; if (cls) li.className = cls; $('.log', pane).append(li); $('.log', pane).scrollTop = 1e6; return li; };
    const show = (pane, q) => { const s = $('.shown', pane); s.innerHTML = `Showing: <b>${q || 'nothing'}</b>`; s.classList.toggle('stale', q !== inp.value.trim()); };
    inp.addEventListener('input', () => {
      const q = inp.value.trim(); if (!q) return;
      const li = log(panes[0], 'GET ?q=' + q); fake(q).then(r => { li.textContent += '  done'; show(panes[0], r); });
      clearTimeout(timer); timer = setTimeout(() => { const id = ++seq; latest = id; $$('.log li', panes[1]).forEach(x => { if (/pending/.test(x.textContent)) { x.textContent = x.textContent.replace('pending', 'cancelled'); x.className = 'x'; } });
        const l2 = log(panes[1], 'GET ?q=' + q + '  pending'); fake(q).then(r => { if (id !== latest) return; l2.textContent = 'GET ?q=' + q + '  done'; show(panes[1], r); }); }, 300);
    });
    inp.addEventListener('input', () => panes.forEach(p => { const s = $('.shown', p); s.classList.toggle('stale', !!$('b', s) && $('b', s).textContent !== 'nothing yet' && $('b', s).textContent !== inp.value.trim()); }));
  })();
})();
```
