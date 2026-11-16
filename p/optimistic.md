# Optimistic UI

Components and UX patterns · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#optimistic

The change shows up instantly while it saves in the background, and only asks you to retry if saving fails.

- **Good for:** Likes, messages, small edits that rarely fail
- **Watch out:** Payments and actions that must be confirmed
- **Seen in:** WhatsApp messages, Instagram likes, Linear, Todoist

## Prompt for an AI assistant

Build this UI pattern for my app: Optimistic UI.

What it is: The change shows up instantly while it saves in the background, and only asks you to retry if saving fails.
Good for: Likes, messages, small edits that rarely fail.
Watch out: Payments and actions that must be confirmed.
Seen in: WhatsApp messages, Instagram likes, Linear, Todoist

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
<div class="stage s-opt">
    <form id="opt-f"><input id="opt-in" value="Book flight to Kochi" aria-label="New task"><button>Add</button></form>
    <label class="fail" for="opt-fail"><input type="checkbox" id="opt-fail"> Simulate network failure</label>
    <ul id="opt-l"><li><span>Send invoice to client</span><em>Saved ✓</em></li><li><span>Renew domain</span><em>Saved ✓</em></li></ul>
  </div>
```

### CSS

```css
:root { --body: "Figtree",system-ui,sans-serif; }
/* fonts used (all on Google Fonts): Figtree */
/* base styles the site gives every demo (scoped to this demo) */
.s-opt, .s-opt *, .s-opt *::before, .s-opt *::after { box-sizing: border-box; }
.s-opt { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-opt button { font: inherit; cursor: pointer; }
.s-opt { background: #fff; color: #1f2430; padding: 16px 18px; display: grid; gap: 8px; align-content: start; font-size: 12px; }
.s-opt form { display: flex; gap: 6px; }
.s-opt form input { flex: 1; min-width: 0; border: 1px solid #cfd5dd; border-radius: 7px; padding: 8px 10px; font: 13px var(--body); color: #1f2430; }
.s-opt form button { border: 0; background: #3557e0; color: #fff; border-radius: 7px; padding: 0 14px; font-weight: 600; }
.s-opt .fail { display: flex; gap: 6px; align-items: center; color: #666; font-size: 11px; }
.s-opt ul { list-style: none; margin: 0; padding: 0; display: grid; gap: 5px; }
.s-opt li { display: flex; justify-content: space-between; align-items: center; gap: 8px; border: 1px solid #eef0f3; border-radius: 7px; padding: 7px 10px; animation: fadeIn .25s; }
.s-opt li em { font-style: normal; font-size: 10px; color: #16a34a; white-space: nowrap; }
.s-opt li.pend { color: #888; }
.s-opt li.pend em { color: #888; }
.s-opt li.err { border-color: #fecaca; background: #fef2f2; }
.s-opt li.err em { color: #dc2626; }
.s-opt li em button { border: 0; background: none; color: #3557e0; font-weight: 600; font-size: 11px; padding: 0; margin-left: 6px; }
@keyframes fadeIn {
  from{opacity:0;transform:translateY(-4px)}
}
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // optimistic UI
  (() => { const f = $('#opt-f'), i = $('#opt-in'), l = $('#opt-l'), fail = $('#opt-fail'); if (!f) return;
    const save = li => { li.className = 'pend'; $('em', li).textContent = 'Saving…';
      setTimeout(() => { if (fail.checked) { li.className = 'err'; $('em', li).innerHTML = 'Not saved<button type="button">Retry</button>'; $('em button', li).addEventListener('click', () => save(li)); }
        else { li.className = ''; $('em', li).textContent = 'Saved ✓'; } }, 900); };
    f.addEventListener('submit', e => { e.preventDefault(); const t = i.value.trim(); if (!t) return; const li = document.createElement('li'); li.innerHTML = '<span></span><em></em>'; li.firstChild.textContent = t; l.prepend(li); save(li); i.value = ''; });
  })();
})();
```
