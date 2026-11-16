# Sortable data table

Components and UX patterns · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#datatable

Rows of records with a sticky header.

- **Good for:** Comparing many records across columns
- **Watch out:** Phones; switch to cards or a list
- **Seen in:** Google Sheets, Airtable, admin panels, analytics tools

## Prompt for an AI assistant

Build this UI pattern for my app: Sortable data table.

What it is: Rows of records with a sticky header.
Good for: Comparing many records across columns.
Watch out: Phones; switch to cards or a list.
Seen in: Google Sheets, Airtable, admin panels, analytics tools

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
<div class="stage s-tbl"><div class="wrap2"><table id="tbl"><thead><tr><th><button>Name</button></th><th><button>Team</button></th><th class="n"><button>Tasks</button></th><th class="n"><button>On time</button></th></tr></thead><tbody></tbody></table></div></div>
```

### CSS

```css
/* base styles the site gives every demo (scoped to this demo) */
.s-tbl, .s-tbl *, .s-tbl *::before, .s-tbl *::after { box-sizing: border-box; }
.s-tbl { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-tbl button { font: inherit; cursor: pointer; }
.s-tbl { background: #fff; color: #1f2430; padding: 12px; font-size: 12px; }
.s-tbl .wrap2 { overflow: auto; height: 100%; border: 1px solid #e9ebf0; border-radius: 8px; }
.s-tbl table { border-collapse: collapse; width: 100%; font-variant-numeric: tabular-nums; }
.s-tbl th { position: sticky; top: 0; background: #f7f8fa; text-align: left; border-bottom: 1px solid #e9ebf0; padding: 0; }
.s-tbl th button { all: unset; cursor: pointer; display: block; padding: 8px 10px; font-weight: 600; font-size: 11px; width: 100%; box-sizing: border-box; }
.s-tbl th button:focus-visible { outline: 2px solid #3557e0; outline-offset: -2px; }
.s-tbl th.n,.s-tbl td.n { text-align: right; }
.s-tbl th[aria-sort="ascending"] button::after { content: " ▲"; color: #3557e0; }
.s-tbl th[aria-sort="descending"] button::after { content: " ▼"; color: #3557e0; }
.s-tbl td { padding: 7px 10px; border-bottom: 1px solid #f1f2f5; white-space: nowrap; }
.s-tbl tr:hover td { background: #fafbff; }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // sortable table
  (() => { const D = [['Aditi Rao', 'Design', 42, 96], ['Kabir Sen', 'Engineering', 57, 88], ['Meera Iyer', 'Engineering', 38, 92], ['Rohan Shah', 'Product', 21, 99], ['Zoya Khan', 'Design', 33, 85], ['Vikram Das', 'Support', 64, 90]];
    const tb = $('#tbl tbody'), th = $$('#tbl th'); if (!tb) return; let sk = 2, dir = -1;
    const r = () => { const d = D.slice().sort((a, b) => (typeof a[sk] === 'number' ? a[sk] - b[sk] : a[sk].localeCompare(b[sk])) * dir);
      tb.innerHTML = d.map(x => `<tr><td>${x[0]}</td><td>${x[1]}</td><td class="n">${x[2]}</td><td class="n">${x[3]}%</td></tr>`).join('');
      th.forEach((h, i) => h.setAttribute('aria-sort', i === sk ? (dir > 0 ? 'ascending' : 'descending') : 'none')); };
    th.forEach((h, i) => h.querySelector('button').addEventListener('click', () => { dir = i === sk ? -dir : (typeof D[0][i] === 'number' ? -1 : 1); sk = i; r(); })); r();
  })();
})();
```
