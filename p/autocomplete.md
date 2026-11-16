# Autocomplete

Components and UX patterns · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#autocomplete

Suggestions appear as you type, with the matching letters highlighted and keyboard support.

- **Good for:** Cities, addresses, products, people
- **Watch out:** Fields with few options; use a select
- **Seen in:** Google Maps, food delivery address fields, Uber

## Prompt for an AI assistant

Build this UI pattern for my app: Autocomplete.

What it is: Suggestions appear as you type, with the matching letters highlighted and keyboard support.
Good for: Cities, addresses, products, people.
Watch out: Fields with few options; use a select.
Seen in: Google Maps, food delivery address fields, Uber

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
<div class="stage s-ac"><label for="ac-in">Deliver to city</label><div><input id="ac-in" value="Ba" autocomplete="off" role="combobox" aria-expanded="true" aria-controls="ac-list" aria-autocomplete="list"><ul id="ac-list" role="listbox" aria-label="City suggestions"></ul></div><small>Type to search · ↑ ↓ to move · Enter to pick</small></div>
```

### CSS

```css
:root { --body: "Figtree",system-ui,sans-serif; }
/* fonts used (all on Google Fonts): Figtree */
/* base styles the site gives every demo (scoped to this demo) */
.s-ac, .s-ac *, .s-ac *::before, .s-ac *::after { box-sizing: border-box; }
.s-ac { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-ac button { font: inherit; cursor: pointer; }
.s-ac { background: #fff; color: #1f2430; padding: 20px; display: grid; gap: 6px; align-content: start; font-size: 12px; }
.s-ac label { font-weight: 600; }
.s-ac input { width: 100%; border: 1.5px solid #3557e0; border-radius: 8px; padding: 9px 11px; font: 13px var(--body); box-shadow: 0 0 0 3px rgba(53,87,224,.15); outline: none; color: #1f2430; }
.s-ac ul { list-style: none; margin: 4px 0 0; padding: 4px; border: 1px solid #e3e6ec; border-radius: 8px; box-shadow: 0 10px 24px rgba(0,0,0,.1); max-height: 150px; overflow: auto; background: #fff; }
.s-ac li { padding: 6px 8px; border-radius: 5px; cursor: pointer; display: flex; justify-content: space-between; gap: 8px; }
.s-ac li b { font-weight: 400; }
.s-ac li span { color: #999; font-size: 10px; }
.s-ac li.on,.s-ac li:hover { background: #eef1ff; }
.s-ac mark { background: none; color: #3557e0; font-weight: 700; }
.s-ac small { color: #888; }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // autocomplete
  (() => { const C = [['Bengaluru', 'Karnataka'], ['Bhopal', 'Madhya Pradesh'], ['Bhubaneswar', 'Odisha'], ['Bareilly', 'Uttar Pradesh'], ['Bathinda', 'Punjab'], ['Chennai', 'Tamil Nadu'], ['Coimbatore', 'Tamil Nadu'], ['Dehradun', 'Uttarakhand'], ['Delhi', 'Delhi'], ['Hyderabad', 'Telangana'], ['Indore', 'Madhya Pradesh'], ['Jaipur', 'Rajasthan'], ['Kochi', 'Kerala'], ['Kolkata', 'West Bengal'], ['Lucknow', 'Uttar Pradesh'], ['Mumbai', 'Maharashtra'], ['Mysuru', 'Karnataka'], ['Nagpur', 'Maharashtra'], ['Patna', 'Bihar'], ['Pune', 'Maharashtra'], ['Surat', 'Gujarat'], ['Vadodara', 'Gujarat'], ['Varanasi', 'Uttar Pradesh'], ['Visakhapatnam', 'Andhra Pradesh']];
    const i = $('#ac-in'), ul = $('#ac-list'); if (!i) return; let k = 0, f = [];
    const esc = s => s.replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
    const r = () => { const q = i.value.trim().toLowerCase();
      f = q ? C.filter(c => c[0].toLowerCase().includes(q)).sort((a, b) => a[0].toLowerCase().indexOf(q) - b[0].toLowerCase().indexOf(q)) : []; k = 0;
      ul.hidden = !q; i.setAttribute('aria-expanded', f.length > 0);
      ul.innerHTML = f.length ? f.map((c, j) => { const s = c[0].toLowerCase().indexOf(q);
        return `<li role="option" class="${j === k ? 'on' : ''}"><b>${esc(c[0].slice(0, s))}<mark>${esc(c[0].slice(s, s + q.length))}</mark>${esc(c[0].slice(s + q.length))}</b><span>${c[1]}</span></li>`; }).join('') : (q ? '<li>No city found. Check the spelling.</li>' : ''); };
    const pick = j => { if (!f[j]) return; i.value = f[j][0]; ul.hidden = true; i.setAttribute('aria-expanded', 'false'); };
    ul.addEventListener('click', e => { const li = e.target.closest('li'); if (li) pick([...ul.children].indexOf(li)); });
    i.addEventListener('keydown', e => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); if (!f.length) return; k = (k + (e.key === 'ArrowDown' ? 1 : -1) + f.length) % f.length; [...ul.children].forEach((l, j) => l.classList.toggle('on', j === k)); }
      else if (e.key === 'Enter') { e.preventDefault(); pick(k); } else if (e.key === 'Escape') ul.hidden = true; });
    i.addEventListener('input', r); r();
  })();
})();
```
