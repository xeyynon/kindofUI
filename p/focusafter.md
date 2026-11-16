# Focus after actions

Accessibility and motion · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#focusafter

After a delete, a closed dialog or a new view, put keyboard focus somewhere sensible: the next item, or the button that opened the dialog. When focus drops back to the page, keyboard and screen reader users are sent back to the top.

- **Good for:** Deletes, dialogs, inline edits and single-page apps
- **Watch out:** Moving focus on every update; only after the person acts
- **Based on:** WAI-ARIA Authoring Practices, modal dialog pattern; Gatsby and Fable user testing of client-side routing (2019)

## Prompt for an AI assistant

Make my UI follow this accessibility and motion practice: Focus after actions.

What it is: After a delete, a closed dialog or a new view, put keyboard focus somewhere sensible: the next item, or the button that opened the dialog. When focus drops back to the page, keyboard and screen reader users are sent back to the top.
Good for: Deletes, dialogs, inline edits and single-page apps.
Watch out: Moving focus on every update; only after the person acts.
Based on: WAI-ARIA Authoring Practices, modal dialog pattern; Gatsby and Fable user testing of client-side routing (2019)

Steps:
1. Audit every page and component I share against this practice and list each problem with its element.
2. Fix the problems in code without changing the visual design more than needed.
3. Follow WCAG 2.2 AA and say which success criterion each fix covers.
4. Tell me how to test it myself: keyboard only, a screen reader, 200% zoom and reduced motion.

The kindofui example below shows the practice in a small working demo.

## Code

Copy and adapt. The HTML and CSS are scoped to this demo, so they will not touch the page they are pasted into.

### HTML

```html
<div class="stage s-fcs">
    <div class="seg" role="group" aria-label="Version"><button type="button" aria-pressed="true" data-m="lost">Focus is lost</button><button type="button" aria-pressed="false" data-m="kept">Focus moves on</button></div>
    <p class="tip">Use Tab to reach a Delete button and press Enter.</p>
    <ul></ul>
    <div class="now"><span>Focus is on: <b>nothing yet</b></span><button class="ghost" type="button">Reset</button></div>
  </div>
```

### CSS

```css
:root { --body: "Figtree",system-ui,sans-serif; }
/* fonts used (all on Google Fonts): Figtree */
/* base styles the site gives every demo (scoped to this demo) */
.s-fcs, .s-fcs *, .s-fcs *::before, .s-fcs *::after { box-sizing: border-box; }
.s-fcs { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-fcs button { font: inherit; cursor: pointer; }
.s-dly,.s-rsv,.s-esum,.s-lbl,.s-pwd,.s-dbl,.s-deb,.s-inl,.s-fcs,.s-back { background: #fff; color: #1f2430; font-size: 12px; padding: 12px 14px; }
.s-esum .seg,.s-lbl .seg,.s-pwd .seg,.s-fcs .seg,.s-back .seg { display: flex; border: 1px solid #c9ced8; border-radius: 7px; overflow: hidden; margin-bottom: 9px; }
.s-esum .seg button,.s-lbl .seg button,.s-pwd .seg button,.s-fcs .seg button,.s-back .seg button { flex: 1; border: 0; border-left: 1px solid #c9ced8; background: #fff; color: #4a5160; padding: 5px 6px; font: 600 11px var(--body); }
.s-esum .seg button:first-child,.s-lbl .seg button:first-child,.s-pwd .seg button:first-child,.s-fcs .seg button:first-child,.s-back .seg button:first-child { border-left: 0; }
.s-esum .seg [aria-pressed="true"],.s-lbl .seg [aria-pressed="true"],.s-pwd .seg [aria-pressed="true"],.s-fcs .seg [aria-pressed="true"],.s-back .seg [aria-pressed="true"] { background: #1f2430; color: #fff; }
.s-dly .act,.s-rsv .act,.s-esum .act,.s-lbl .act,.s-pwd .act,.s-dbl .act,.s-inl .act,.s-fcs .act,.s-back .act { border: 1px solid #1f2430; background: #1f2430; color: #fff; border-radius: 6px; padding: 6px 12px; font: 600 12px var(--body); }
.s-dly .ghost,.s-rsv .ghost,.s-fcs .ghost,.s-back .ghost { border: 1px solid #c9ced8; background: #fff; color: #1f2430; border-radius: 6px; padding: 5px 10px; font: 600 11px var(--body); }
.s-fcs { display: grid; grid-template-rows: auto auto 1fr auto; gap: 0; }
.s-fcs .tip { font-size: 11px; color: #5f6672; margin-bottom: 7px; }
.s-fcs ul { margin: 0; padding: 0; list-style: none; border: 1px solid #e3e6ec; border-radius: 8px; overflow: hidden; }
.s-fcs li { display: flex; justify-content: space-between; align-items: center; padding: 6px 9px; border-top: 1px solid #eef0f3; font-size: 12px; }
.s-fcs li:first-child { border-top: 0; }
.s-fcs .ghost:focus-visible,.s-fcs .act:focus-visible { outline: 3px solid #3557e0; outline-offset: 2px; }
.s-fcs .now { display: flex; justify-content: space-between; align-items: center; gap: 8px; padding-top: 8px; font-size: 11px; color: #5f6672; }
.s-fcs .now b { color: #1f2430; }
.s-fcs .now b.lost { color: #b3261e; }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // focus after actions: delete with the keyboard and see where focus goes
  (() => {
    const st = $('.s-fcs'); if (!st) return;
    const ul = $('ul', st), now = $('.now b', st); let mode = 'lost';
    const reset = () => { ul.innerHTML = ['Invoice 1042', 'Invoice 1041', 'Invoice 1040', 'Invoice 1039'].map(n => `<li><span>${n}</span><button class="ghost" type="button" aria-label="Delete ${n}">Delete</button></li>`).join(''); now.textContent = 'nothing yet'; now.className = ''; };
    const where = () => { const a = document.activeElement; if (a && st.contains(a)) { now.textContent = a.getAttribute('aria-label') || a.textContent; now.className = ''; } else { now.textContent = 'the page (lost)'; now.className = 'lost'; } };
    ul.addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; const li = b.closest('li'), next = li.nextElementSibling || li.previousElementSibling; li.remove();
      if (mode === 'kept' && next) $('button', next).focus(); else b.blur(); setTimeout(where, 30); });
    st.addEventListener('focusin', where);
    $$('.seg button', st).forEach(b => b.addEventListener('click', () => { mode = b.dataset.m; $$('.seg button', st).forEach(x => x.setAttribute('aria-pressed', x === b)); reset(); }));
    $('.now .ghost', st).addEventListener('click', reset); reset();
  })();
})();
```
