# List-detail (master-detail)

Layouts · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#listdetail

A list on one side and the selected item's full content on the other.

- **Good for:** Email, chat, files, settings on wide screens
- **Watch out:** Phones; show list and detail as separate screens
- **Seen in:** Gmail, Outlook, Apple Mail, Finder

## Prompt for an AI assistant

Build this layout for my page: List-detail (master-detail).

What it is: A list on one side and the selected item's full content on the other.
Good for: Email, chat, files, settings on wide screens.
Watch out: Phones; show list and detail as separate screens.
Seen in: Gmail, Outlook, Apple Mail, Finder

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
<div class="stage s-ld"><ul id="ld-list"></ul><div class="dt" id="ld-dt"></div></div>
```

### CSS

```css
:root { --display: "Bricolage Grotesque",system-ui,sans-serif; }
/* fonts used (all on Google Fonts): Bricolage Grotesque */
/* base styles the site gives every demo (scoped to this demo) */
.s-ld, .s-ld *, .s-ld *::before, .s-ld *::after { box-sizing: border-box; }
.s-ld { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-ld button { font: inherit; cursor: pointer; }
.s-ld { display: grid; grid-template-columns: 44% 1fr; background: #fff; color: #1f2430; font-size: 12px; }
.s-ld ul { list-style: none; margin: 0; padding: 0; border-right: 1px solid #eef0f3; overflow-y: auto; }
.s-ld li { border-bottom: 1px solid #f2f3f6; }
.s-ld li button { all: unset; display: grid; gap: 1px; padding: 9px 12px; width: 100%; box-sizing: border-box; cursor: pointer; }
.s-ld li button:focus-visible { outline: 2px solid #3557e0; outline-offset: -2px; }
.s-ld li span { color: #777; font-size: 11px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.s-ld li.on { background: #eef1ff; box-shadow: inset 3px 0 #3557e0; }
.s-ld .dt { padding: 14px; display: grid; gap: 6px; align-content: start; min-width: 0; }
.s-ld .dt h5 { margin: 0; font: 700 15px var(--display); }
.s-ld .dt small { color: #888; }
.s-ld .dt p { margin: 0; color: #555; line-height: 1.5; }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // list-detail
  (() => { const m = [
      ['Ananya Kapoor', 'Design review moved', 'Hi team, the design review is now at 4 PM in Room 3. Please bring the latest pricing page mockups.', '10:42 AM'],
      ['Rohan Shah', 'Final icons', 'Attached are the final icon exports in SVG and PNG at 1x, 2x and 3x.', '9:15 AM'],
      ['Billing', 'Your invoice for October', 'Your invoice of ₹4,720 is ready. It will be charged to the card ending 0926 on 10 Nov.', 'Yesterday'],
      ['Kavya', 'Lunch on Friday?', 'Thinking of the new South Indian place near the office. Does 1 PM work for you?', 'Mon']];
    const ul = $('#ld-list'), dt = $('#ld-dt'); if (!ul) return;
    ul.innerHTML = m.map(x => `<li><button><b>${x[0]}</b><span>${x[1]}</span></button></li>`).join('');
    const show = i => { [...ul.children].forEach((li, j) => li.classList.toggle('on', i === j)); const x = m[i];
      dt.innerHTML = `<small>${x[3]}</small><h5 role="none">${x[1]}</h5><b>${x[0]}</b><p>${x[2]}</p>`; };
    [...ul.children].forEach((li, i) => li.firstChild.addEventListener('click', () => show(i))); show(0);
  })();
})();
```
