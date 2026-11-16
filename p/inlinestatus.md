# Inline message vs toast

Components and UX patterns · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#inlinestatus

Put errors and results next to where the person acted, and keep them until they are fixed. A toast that slides in at the edge and disappears is easy to miss and impossible to reread. Keep toasts for small, undoable confirmations.

- **Good for:** Save results, form errors, anything people must act on
- **Watch out:** Toasts for errors or anything that cannot be undone
- **Based on:** NN/g on indicators, validations and notifications (2024); WCAG 2.2 Status Messages (4.1.3) and Timing Adjustable (2.2.1); GitHub Primer's saving pattern

## Prompt for an AI assistant

Build this UI pattern for my app: Inline message vs toast.

What it is: Put errors and results next to where the person acted, and keep them until they are fixed. A toast that slides in at the edge and disappears is easy to miss and impossible to reread. Keep toasts for small, undoable confirmations.
Good for: Save results, form errors, anything people must act on.
Watch out: Toasts for errors or anything that cannot be undone.
Based on: NN/g on indicators, validations and notifications (2024); WCAG 2.2 Status Messages (4.1.3) and Timing Adjustable (2.2.1); GitHub Primer's saving pattern

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
<div class="stage s-inl">
    <div class="two">
      <div class="pane" data-k="toast"><span class="cap">Toast<small>gone after 3 seconds</small></span><div class="fld">Display name<span>Asha Kumar</span></div><button class="act" type="button">Save changes</button><div class="toast" role="status" hidden=""></div></div>
      <div class="pane" data-k="inline"><span class="cap">Inline message<small>stays until it is fixed</small></span><div class="fld">Display name<span>Asha Kumar</span></div><button class="act" type="button">Save changes</button><p class="im" role="alert" hidden=""></p></div>
    </div>
    <div class="bar"><span>Both saves fail. Look away for a moment, then back.</span></div>
  </div>
```

### CSS

```css
:root { --body: "Figtree",system-ui,sans-serif; }
/* fonts used (all on Google Fonts): Figtree */
/* base styles the site gives every demo (scoped to this demo) */
.s-inl, .s-inl *, .s-inl *::before, .s-inl *::after { box-sizing: border-box; }
.s-inl { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-inl button { font: inherit; cursor: pointer; }
[hidden] { display: none !important; }
.s-dly,.s-rsv,.s-esum,.s-lbl,.s-pwd,.s-dbl,.s-deb,.s-inl,.s-fcs,.s-back { background: #fff; color: #1f2430; font-size: 12px; padding: 12px 14px; }
.s-dly .two,.s-rsv .two,.s-dbl .two,.s-deb .two,.s-inl .two { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; min-height: 0; }
.s-dly .cap,.s-rsv .cap,.s-dbl .cap,.s-deb .cap,.s-inl .cap { font: 600 11px/1.3 var(--body); color: #1f2430; }
.s-dly .cap small,.s-rsv .cap small,.s-dbl .cap small,.s-deb .cap small,.s-inl .cap small { display: block; font-weight: 400; color: #5f6672; }
.s-dly .act,.s-rsv .act,.s-esum .act,.s-lbl .act,.s-pwd .act,.s-dbl .act,.s-inl .act,.s-fcs .act,.s-back .act { border: 1px solid #1f2430; background: #1f2430; color: #fff; border-radius: 6px; padding: 6px 12px; font: 600 12px var(--body); }
.s-inl { display: grid; grid-template-rows: 1fr auto; gap: 8px; }
.s-inl .pane { position: relative; border: 1px solid #e3e6ec; border-radius: 10px; padding: 10px; display: grid; align-content: start; gap: 8px; overflow: hidden; }
.s-inl .fld { display: grid; gap: 3px; font: 600 11px var(--body); }
.s-inl .fld span { border: 1px solid #c9ced8; border-radius: 5px; padding: 5px 7px; font-weight: 400; font-size: 12px; }
.s-inl .im { color: #b3261e; font-size: 11px; font-weight: 600; }
.s-inl .im button { border: 0; background: none; padding: 0; color: #3557e0; font: 600 11px var(--body); text-decoration: underline; }
.s-inl .toast { position: absolute; left: 8px; right: 8px; bottom: 8px; background: #1f2430; color: #fff; border-radius: 7px; padding: 7px 9px; font-size: 11px; transition: opacity .2s; }
.s-inl .toast[hidden] { display: block; opacity: 0; pointer-events: none; }
.s-inl .bar { display: flex; justify-content: space-between; align-items: center; gap: 8px; font-size: 11px; color: #5f6672; }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // inline message vs toast: both saves fail; one message waits for you, the other does not
  (() => {
    const st = $('.s-inl'); if (!st) return;
    $$('.pane', st).forEach(p => { const btn = $('.act', p), toast = p.dataset.k === 'toast';
      btn.addEventListener('click', () => { btn.textContent = 'Saving…'; btn.disabled = true;
        setTimeout(() => { btn.textContent = 'Save changes'; btn.disabled = false;
          if (toast) { const t = $('.toast', p); t.textContent = "Couldn't save. Try again."; t.hidden = false; clearTimeout(t._t); t._t = setTimeout(() => { t.hidden = true; }, 3000); }
          else { const m = $('.im', p); m.hidden = false; m.innerHTML = 'Couldn\u2019t save your name. <button type="button">Try again</button>'; } }, 700); });
      p.addEventListener('click', e => { if (e.target.closest('.im button')) { $('.im', p).hidden = true; btn.click(); } }); });
  })();
})();
```
