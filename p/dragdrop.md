# Drag and drop reorder

Components and UX patterns · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#dragdrop

Grab a handle and drag items into a new order. Numbers update as you drop.

- **Good for:** Reordering, kanban, file upload
- **Watch out:** Being the only way to reorder; add keyboard options
- **Seen in:** Spotify playlists, Trello, Notion blocks

## Prompt for an AI assistant

Build this UI pattern for my app: Drag and drop reorder.

What it is: Grab a handle and drag items into a new order. Numbers update as you drop.
Good for: Reordering, kanban, file upload.
Watch out: Being the only way to reorder; add keyboard options.
Seen in: Spotify playlists, Trello, Notion blocks

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
<div class="stage s-dnd">
    <b>Your playlist order</b>
    <ol id="dnd"><li><span class="h">⋮⋮</span><i style="background:#f472b6"></i><span class="ti">Monsoon Letters<small>3:42</small></span></li><li><span class="h">⋮⋮</span><i style="background:#60a5fa"></i><span class="ti">Old City Lights<small>4:05</small></span></li><li><span class="h">⋮⋮</span><i style="background:#fbbf24"></i><span class="ti">Slow Train to Goa<small>3:18</small></span></li><li><span class="h">⋮⋮</span><i style="background:#34d399"></i><span class="ti">Neon Chai<small>2:57</small></span></li><li><span class="h">⋮⋮</span><i style="background:#a78bfa"></i><span class="ti">Hill Station<small>4:21</small></span></li></ol>
    <small>Drag the ⋮⋮ handle to reorder</small>
  </div>
```

### CSS

```css
:root { --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-dnd, .s-dnd *, .s-dnd *::before, .s-dnd *::after { box-sizing: border-box; }
.s-dnd { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-dnd button { font: inherit; cursor: pointer; }
.s-dnd { background: #f3f4f7; color: #1f2430; padding: 10px 18px; display: grid; gap: 6px; align-content: start; font-size: 12px; }
.s-dnd ol { list-style: none; margin: 0; padding: 0; display: grid; gap: 4px; counter-reset: n; }
.s-dnd li { background: #fff; border-radius: 8px; padding: 4px 10px; display: flex; gap: 10px; align-items: center; box-shadow: 0 1px 2px rgba(0,0,0,.06); }
.s-dnd li::before { counter-increment: n; content: counter(n); width: 14px; color: #999; font: 11px var(--mono); }
.s-dnd .h { cursor: grab; color: #9aa0aa; letter-spacing: -2px; touch-action: none; padding: 4px; }
.s-dnd li i { width: 26px; height: 26px; border-radius: 5px; flex: none; }
.s-dnd .ti { display: grid; flex: 1; }
.s-dnd small { color: #888; }
.s-dnd .sortable-ghost { opacity: .4; }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // loads SortableJS (drag and drop) from a CDN, then runs the demo
  const whenSortable = fn => { if (window.Sortable) return fn(); const s = document.createElement('script'); s.src = 'https://cdnjs.cloudflare.com/ajax/libs/Sortable/1.15.2/Sortable.min.js'; s.onload = fn; document.head.append(s); };

  whenSortable(() => {
    const Srt = window.Sortable;

    // drag & drop reorder
    if (Srt && $('#dnd')) new Srt($('#dnd'), { handle: '.h', animation: 150 });
  });
})();
```
