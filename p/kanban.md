# Kanban board

Layouts · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#kanban

Columns for each stage of work, with cards that move left to right.

- **Good for:** Tasks moving through stages
- **Watch out:** Data with no clear stages, or hundreds of items
- **Seen in:** Trello, Jira, Linear, GitHub Projects

## Prompt for an AI assistant

Build this layout for my page: Kanban board.

What it is: Columns for each stage of work, with cards that move left to right.
Good for: Tasks moving through stages.
Watch out: Data with no clear stages, or hundreds of items.
Seen in: Trello, Jira, Linear, GitHub Projects

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
<div class="stage s-kb">
    <div class="col"><h5 role="none">To do <em>3</em></h5><div class="cards"><div class="kc">Write onboarding copy<span class="tg2 y">Content</span></div><div class="kc">Fix login timeout<span class="tg2 r">Bug</span></div><div class="kc">Plan Q1 survey<span class="tg2 b">Research</span></div></div></div>
    <div class="col"><h5 role="none">Doing <em>2</em></h5><div class="cards"><div class="kc">Pricing page design<span class="tg2 p">Design</span></div><div class="kc">Dark mode tokens<span class="tg2 p">Design</span></div></div></div>
    <div class="col"><h5 role="none">Done <em>1</em></h5><div class="cards"><div class="kc">Logo refresh<span class="tg2 g">Brand</span></div></div></div>
  </div>
```

### CSS

```css
:root { --body: "Figtree",system-ui,sans-serif; }
/* fonts used (all on Google Fonts): Figtree */
/* base styles the site gives every demo (scoped to this demo) */
.s-kb, .s-kb *, .s-kb *::before, .s-kb *::after { box-sizing: border-box; }
.s-kb { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-kb button { font: inherit; cursor: pointer; }
.s-kb { background: #f3f4f7; color: #1f2430; display: grid; grid-template-columns: repeat(3,1fr); gap: 8px; padding: 12px; font-size: 11px; }
.s-kb .col { background: #e7e9ee; border-radius: 8px; padding: 6px; display: grid; grid-template-rows: auto 1fr; gap: 6px; min-width: 0; }
.s-kb h5 { margin: 2px 4px; font: 700 11px var(--body); display: flex; justify-content: space-between; }
.s-kb h5 em { font-style: normal; color: #888; }
.s-kb .cards { display: grid; gap: 6px; align-content: start; min-height: 40px; }
.s-kb .kc { background: #fff; border-radius: 6px; padding: 7px; box-shadow: 0 1px 2px rgba(0,0,0,.08); display: grid; gap: 5px; cursor: grab; }
.s-kb .tg2 { justify-self: start; font-size: 9px; font-weight: 600; padding: 1px 6px; border-radius: 4px; }
.s-kb .tg2.y { background: #fef3c7; color: #92400e; }
.s-kb .tg2.r { background: #fee2e2; color: #991b1b; }
.s-kb .tg2.b { background: #dbeafe; color: #1e40af; }
.s-kb .tg2.p { background: #ede9fe; color: #5b21b6; }
.s-kb .tg2.g { background: #dcfce7; color: #166534; }
.s-kb .sortable-ghost { opacity: .4; }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // loads SortableJS (drag and drop) from a CDN, then runs the demo
  const whenSortable = fn => { if (window.Sortable) return fn(); const s = document.createElement('script'); s.src = 'https://cdnjs.cloudflare.com/ajax/libs/Sortable/1.15.2/Sortable.min.js'; s.onload = fn; document.head.append(s); };

  whenSortable(() => {
    const Srt = window.Sortable;

    function kbCount(){ $$('.s-kb .col').forEach(c => { $('h5 em', c).textContent = $$('.kc', c).length; }); }

    // kanban
    if (Srt) $$('.s-kb .cards').forEach(el => new Srt(el, { group: 'kb', animation: 150, onSort: kbCount }));
  });
})();
```
