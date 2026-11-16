# Horizontal scroll rows (shelves)

Layouts · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#shelf

Rows of items that scroll sideways, one row per category. Lets people browse a lot without long pages.

- **Good for:** Browsing many items by category: media, shops
- **Watch out:** Content that needs side-by-side comparison
- **Seen in:** Netflix, Prime Video, App Store, Spotify

## Prompt for an AI assistant

Build this layout for my page: Horizontal scroll rows (shelves).

What it is: Rows of items that scroll sideways, one row per category. Lets people browse a lot without long pages.
Good for: Browsing many items by category: media, shops.
Watch out: Content that needs side-by-side comparison.
Seen in: Netflix, Prime Video, App Store, Spotify

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
<div class="stage s-shelf">
    <div><div class="rh"><b>Continue watching</b><span>See all</span></div><div class="tk"></div></div>
    <div><div class="rh"><b>Top picks for you</b><span>See all</span></div><div class="tk p"></div></div>
  </div>
```

### CSS

```css
/* base styles the site gives every demo (scoped to this demo) */
.s-shelf, .s-shelf *, .s-shelf *::before, .s-shelf *::after { box-sizing: border-box; }
.s-shelf { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-shelf button { font: inherit; cursor: pointer; }
.s-shelf { background: #141414; color: #fff; padding: 12px 0 12px 14px; display: grid; gap: 12px; align-content: start; font-size: 12px; }
.s-shelf .rh { display: flex; justify-content: space-between; padding-right: 14px; margin-bottom: 6px; }
.s-shelf .rh span { color: #aaa; font-size: 11px; }
.s-shelf .tk { display: flex; gap: 8px; overflow-x: auto; scroll-snap-type: x mandatory; scrollbar-width: none; padding-right: 14px; }
.s-shelf .tk::-webkit-scrollbar { display: none; }
.s-shelf .t { flex: 0 0 132px; aspect-ratio: 16/9; border-radius: 6px; scroll-snap-align: start; position: relative; display: flex; align-items: flex-end; padding: 6px; font-weight: 700; font-size: 11px; max-width: 100%; overflow: hidden; }
.s-shelf .t i { position: absolute; left: 0; bottom: 0; height: 3px; background: #e50914; }
.s-shelf .tk.p .t { flex-basis: 92px; aspect-ratio: 2/3; }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // shelves
  (() => { const r = $$('.s-shelf .tk'); if (r.length < 2) return;
    const a = [['Monsoon Diaries', 62, '#7c3aed,#db2777'], ['The Last Over', 30, '#0ea5e9,#1e3a8a'], ['Spice Route', 85, '#f59e0b,#b91c1c'], ['Night Shift', 12, '#10b981,#064e3b'], ['Hill Station', 50, '#64748b,#0f172a'], ['Old City', 70, '#f97316,#7c2d12']];
    r[0].innerHTML = a.map(x => `<div class="t" style="background:linear-gradient(135deg,${x[2]})">${x[0]}<i style="width:${x[1]}%"></i></div>`).join('');
    r[1].innerHTML = a.slice().reverse().map(x => `<div class="t" style="background:linear-gradient(160deg,${x[2]})">${x[0]}</div>`).join('');
  })();
})();
```
