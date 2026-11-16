# Search-first navigation

Navigation · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#searchfirst

A big search box is the main way to get around, with recent searches and live suggestions.

- **Good for:** Large catalogs: recipes, products, help centers
- **Watch out:** Small sites where browsing is faster
- **Seen in:** Google, Airbnb, Spotlight, recipe and help sites

## Prompt for an AI assistant

Build this navigation pattern for my app: Search-first navigation.

What it is: A big search box is the main way to get around, with recent searches and live suggestions.
Good for: Large catalogs: recipes, products, help centers.
Watch out: Small sites where browsing is faster.
Seen in: Google, Airbnb, Spotlight, recipe and help sites

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
<div class="stage s-sf">
    <b class="lg">find</b>
    <div class="sb"><span>⌕</span><input id="sf-in" placeholder="Search recipes, chefs, ingredients" aria-label="Search recipes" autocomplete="off"></div>
    <div class="rc"><small>Recent:</small><button>paneer</button><button>dal makhani</button><button>chai</button></div>
    <ul id="sf-list"></ul>
  </div>
```

### CSS

```css
:root { --display: "Bricolage Grotesque",system-ui,sans-serif; --body: "Figtree",system-ui,sans-serif; }
/* fonts used (all on Google Fonts): Bricolage Grotesque, Figtree */
/* base styles the site gives every demo (scoped to this demo) */
.s-sf, .s-sf *, .s-sf *::before, .s-sf *::after { box-sizing: border-box; }
.s-sf { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-sf button { font: inherit; cursor: pointer; }
.s-sf { background: #fff; color: #1f2430; padding: 20px; display: grid; align-content: start; justify-items: center; gap: 10px; font-size: 12px; }
.s-sf .lg { font: 800 28px var(--display); letter-spacing: -.03em; color: #e8590c; }
.s-sf .sb { width: 100%; display: flex; align-items: center; gap: 8px; border: 1px solid #dfe3ea; border-radius: 999px; padding: 8px 14px; box-shadow: 0 2px 8px rgba(0,0,0,.06); }
.s-sf .sb input { flex: 1; min-width: 0; border: 0; outline: none; font: 13px var(--body); background: none; color: #1f2430; }
.s-sf .sb:focus-within { border-color: #e8590c; box-shadow: 0 0 0 3px rgba(232,89,12,.15); }
.s-sf .rc { display: flex; flex-wrap: wrap; gap: 6px; align-items: center; justify-content: center; }
.s-sf .rc small { color: #888; }
.s-sf .rc button { border: 1px solid #e3e6ec; background: #f7f8fa; border-radius: 999px; padding: 3px 10px; font-size: 11px; color: #1f2430; }
.s-sf ul { list-style: none; margin: 0; padding: 0; width: 100%; display: grid; gap: 2px; }
.s-sf li { padding: 5px 10px; border-radius: 6px; display: flex; justify-content: space-between; }
.s-sf li span { color: #999; font-size: 10px; }
.s-sf li:hover { background: #f3f4f7; }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // search-first
  (() => { const d = [['Paneer butter masala', 'Recipe'], ['Palak paneer', 'Recipe'], ['Paneer', 'Ingredient'], ['Pav bhaji', 'Recipe'], ['Poha', 'Recipe'], ['Masala chai', 'Recipe'], ['Chef Anita Rao', 'Chef'], ['Dal makhani', 'Recipe'], ['Dosa batter', 'Recipe'], ['Chef Rohan Iyer', 'Chef'], ['Peas', 'Ingredient'], ['Quick breakfast ideas', 'Collection']];
    const i = $('#sf-in'), ul = $('#sf-list'); if (!i) return;
    const r = () => { const q = i.value.trim().toLowerCase(); const f = q ? d.filter(x => x[0].toLowerCase().includes(q)).slice(0, 5) : d.slice(0, 4);
      ul.innerHTML = (q ? '' : '<li style="color:#999;font-size:10px">Trending</li>') + (f.length ? f.map(x => `<li><b style="font-weight:500">${x[0]}</b><span>${x[1]}</span></li>`).join('') : '<li style="color:#999">No results. Try "paneer" or "chai".</li>'); };
    i.addEventListener('input', r); $$('.s-sf .rc button').forEach(b => b.addEventListener('click', () => { i.value = b.textContent; r(); i.focus(); })); r();
  })();
})();
```
