# Modals & toasts

Components and UX patterns · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#modal

A modal blocks the page to ask for a decision. A toast is a short message at the bottom that confirms what happened and disappears.

- **Good for:** Confirming destructive actions
- **Watch out:** Interrupting for things that can wait
- **Seen in:** GitHub delete dialogs, Gmail "Message sent · Undo"

## Prompt for an AI assistant

Build this UI pattern for my app: Modals & toasts.

What it is: A modal blocks the page to ask for a decision. A toast is a short message at the bottom that confirms what happened and disappears.
Good for: Confirming destructive actions.
Watch out: Interrupting for things that can wait.
Seen in: GitHub delete dialogs, Gmail "Message sent · Undo"

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
<div class="stage s-modal">
    <div class="pgc"><b style="font-size:14px">Project settings</b><div class="ln" style="width:80%;background:#d6dbe4"></div><div class="ln" style="width:60%;background:#d6dbe4"></div><button id="mo-open">Delete project</button></div>
    <div class="ov" id="mo-ov">
      <div class="dlg" role="dialog" aria-labelledby="mo-t"><b id="mo-t">Delete "Q4 launch site"?</b><span style="color:#555">This removes all 24 files. You can undo for 10 seconds.</span><div class="acts"><button id="mo-cancel">Cancel</button><button class="del" id="mo-del">Delete</button></div></div>
    </div>
    <div class="toast" id="mo-toast" hidden="">Project deleted<button id="mo-undo">Undo</button></div>
  </div>
```

### CSS

```css
/* base styles the site gives every demo (scoped to this demo) */
.s-modal, .s-modal *, .s-modal *::before, .s-modal *::after { box-sizing: border-box; }
.s-modal { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-modal button { font: inherit; cursor: pointer; }
[hidden] { display: none !important; }
.ln { height: 6px; border-radius: 3px; background: #d6dbe4; }
.s-modal { background: #f3f4f7; font-size: 12px; color: #1f2430; }
.s-modal .pgc { padding: 14px; display: grid; gap: 8px; }
.s-modal .pgc button { justify-self: start; border: 1px solid #dc2626; color: #dc2626; background: #fff; border-radius: 6px; padding: 6px 12px; }
.s-modal .ov { position: absolute; inset: 0; background: rgba(15,23,42,.45); display: grid; place-items: center; padding: 14px; }
.s-modal .dlg { background: #fff; border-radius: 12px; padding: 16px; width: min(100%,260px); display: grid; gap: 8px; box-shadow: 0 20px 40px rgba(0,0,0,.3); }
.s-modal .dlg b { font-size: 14px; }
.s-modal .dlg .acts { display: flex; justify-content: flex-end; gap: 8px; margin-top: 4px; }
.s-modal .dlg button { border: 1px solid #d6dae1; background: #fff; border-radius: 6px; padding: 6px 12px; }
.s-modal .dlg button.del { background: #dc2626; border-color: #dc2626; color: #fff; }
.s-modal .toast { position: absolute; left: 50%; bottom: 14px; transform: translateX(-50%); background: #111827; color: #fff; border-radius: 8px; padding: 8px 14px; display: flex; gap: 12px; align-items: center; white-space: nowrap; box-shadow: 0 8px 20px rgba(0,0,0,.25); }
.s-modal .toast button { background: none; border: 0; color: #93c5fd; font-weight: 600; padding: 0; }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // modal + toast
  const ov=$('#mo-ov'),toast=$('#mo-toast');let tt;
  $('#mo-open').addEventListener('click',()=>{ov.hidden=false;toast.hidden=true});
  $('#mo-cancel').addEventListener('click',()=>ov.hidden=true);
  $('#mo-del').addEventListener('click',()=>{ov.hidden=true;toast.hidden=false;clearTimeout(tt);tt=setTimeout(()=>toast.hidden=true,4000)});
  $('#mo-undo').addEventListener('click',()=>{toast.hidden=true});
})();
```
