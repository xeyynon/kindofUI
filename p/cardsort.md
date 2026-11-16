# Card sorting

Process and methods · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#cardsort

Users sort topics into groups that make sense to them, which shows how to structure menus and categories.

- **Good for:** Planning menus and categories with users
- **Watch out:** Deciding navigation alone in a meeting
- **Seen in:** Optimal Workshop studies, navigation redesigns

## Prompt for an AI assistant

Help me use Card sorting on my project.

What it is: Users sort topics into groups that make sense to them, which shows how to structure menus and categories.
Good for: Planning menus and categories with users.
Watch out: Deciding navigation alone in a meeting.
Seen in: Optimal Workshop studies, navigation redesigns

Steps:
1. Ask me the few questions you need about my product and users first.
2. Walk me through the method step by step for my case, not in general.
3. Produce the outputs the method needs (for example notes, a table or a checklist) in plain text I can share.
4. Tell me what to do next and how to know it worked.

The kindofui example below shows the method in a small working demo.

## Code

Copy and adapt. The HTML and CSS are scoped to this demo, so they will not touch the page they are pasted into.

### HTML

```html
<div class="stage s-cs">
    <div class="pile"><b>Cards to sort</b><div class="cl2"><span>Invoices</span><span>Change password</span><span>Team members</span><span>Export data</span><span>Dark mode</span><span>Refunds</span></div></div>
    <div class="grps"><div><b>Billing</b><div class="cl2"><span>Payment methods</span></div></div><div><b>Account</b><div class="cl2"><span>Profile photo</span></div></div><div><b>Data</b><div class="cl2"></div></div></div>
  </div>
```

### CSS

```css
/* base styles the site gives every demo (scoped to this demo) */
.s-cs, .s-cs *, .s-cs *::before, .s-cs *::after { box-sizing: border-box; }
.s-cs { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-cs button { font: inherit; cursor: pointer; }
.s-cs { background: #f3f4f7; color: #1f2430; padding: 12px; display: grid; grid-template-rows: auto 1fr; gap: 10px; font-size: 11px; }
.s-cs b { font-size: 10px; text-transform: uppercase; letter-spacing: .08em; color: #666; }
.s-cs .pile .cl2 { display: flex; flex-wrap: wrap; gap: 5px; min-height: 28px; margin-top: 5px; }
.s-cs .grps { display: grid; grid-template-columns: repeat(3,1fr); gap: 6px; }
.s-cs .grps > div { background: #fff; border: 1.5px dashed #cfd5dd; border-radius: 8px; padding: 6px; display: grid; grid-template-rows: auto 1fr; gap: 5px; min-width: 0; }
.s-cs .grps .cl2 { display: grid; gap: 4px; align-content: start; min-height: 60px; }
.s-cs .cl2 span { background: #fff; border: 1px solid #d6dae1; border-radius: 5px; padding: 4px 7px; cursor: grab; box-shadow: 0 1px 2px rgba(0,0,0,.06); }
.s-cs .pile .cl2 span { background: #fffbeb; border-color: #fde68a; }
.s-cs .sortable-ghost { opacity: .4; }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // loads SortableJS (drag and drop) from a CDN, then runs the demo
  const whenSortable = fn => { if (window.Sortable) return fn(); const s = document.createElement('script'); s.src = 'https://cdnjs.cloudflare.com/ajax/libs/Sortable/1.15.2/Sortable.min.js'; s.onload = fn; document.head.append(s); };

  whenSortable(() => {
    const Srt = window.Sortable;

    /* ---------- Methods ---------- */
    if (Srt) $$('.s-cs .cl2').forEach(el => new Srt(el, { group: 'cs', animation: 150 }));
  });
})();
```
