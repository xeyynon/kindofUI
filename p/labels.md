# Label placement

Components and UX patterns · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#labels

Where a field's name lives. A placeholder disappears as soon as there is text, so filled and autofilled forms can't be checked. A floating label stays but is tiny. A label above the field is always readable.

- **Good for:** Every form; labels above fields work best on phones
- **Watch out:** Floating labels: check error states, contrast and autofill
- **Based on:** NN/g on placeholders (2014); Baymard on inline labels (2013); Google research on form guidelines (Seckler et al., CHI 2014)

## Prompt for an AI assistant

Build this UI pattern for my app: Label placement.

What it is: Where a field's name lives. A placeholder disappears as soon as there is text, so filled and autofilled forms can't be checked. A floating label stays but is tiny. A label above the field is always readable.
Good for: Every form; labels above fields work best on phones.
Watch out: Floating labels: check error states, contrast and autofill.
Based on: NN/g on placeholders (2014); Baymard on inline labels (2013); Google research on form guidelines (Seckler et al., CHI 2014)

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
<div class="stage s-lbl">
    <div class="seg" role="group" aria-label="Label style"><button type="button" aria-pressed="true" data-m="ph">Placeholder only</button><button type="button" aria-pressed="false" data-m="fl">Floating</button><button type="button" aria-pressed="false" data-m="top">Above the field</button></div>
    <div class="frm"></div>
  </div>
```

### CSS

```css
:root { --body: "Figtree",system-ui,sans-serif; }
/* fonts used (all on Google Fonts): Figtree */
/* base styles the site gives every demo (scoped to this demo) */
.s-lbl, .s-lbl *, .s-lbl *::before, .s-lbl *::after { box-sizing: border-box; }
.s-lbl { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-lbl button { font: inherit; cursor: pointer; }
.s-dly,.s-rsv,.s-esum,.s-lbl,.s-pwd,.s-dbl,.s-deb,.s-inl,.s-fcs,.s-back { background: #fff; color: #1f2430; font-size: 12px; padding: 12px 14px; }
.s-esum .seg,.s-lbl .seg,.s-pwd .seg,.s-fcs .seg,.s-back .seg { display: flex; border: 1px solid #c9ced8; border-radius: 7px; overflow: hidden; margin-bottom: 9px; }
.s-esum .seg button,.s-lbl .seg button,.s-pwd .seg button,.s-fcs .seg button,.s-back .seg button { flex: 1; border: 0; border-left: 1px solid #c9ced8; background: #fff; color: #4a5160; padding: 5px 6px; font: 600 11px var(--body); }
.s-esum .seg button:first-child,.s-lbl .seg button:first-child,.s-pwd .seg button:first-child,.s-fcs .seg button:first-child,.s-back .seg button:first-child { border-left: 0; }
.s-esum .seg [aria-pressed="true"],.s-lbl .seg [aria-pressed="true"],.s-pwd .seg [aria-pressed="true"],.s-fcs .seg [aria-pressed="true"],.s-back .seg [aria-pressed="true"] { background: #1f2430; color: #fff; }
.s-dly .act,.s-rsv .act,.s-esum .act,.s-lbl .act,.s-pwd .act,.s-dbl .act,.s-inl .act,.s-fcs .act,.s-back .act { border: 1px solid #1f2430; background: #1f2430; color: #fff; border-radius: 6px; padding: 6px 12px; font: 600 12px var(--body); }
.s-lbl { display: grid; grid-template-rows: auto 1fr; gap: 0; }
.s-lbl .frm { display: grid; gap: 10px; align-content: start; }
.s-lbl .f { position: relative; display: grid; gap: 4px; }
.s-lbl .f > span { font: 600 11.5px var(--body); color: #1f2430; }
.s-lbl input { border: 1px solid #8a919e; border-radius: 6px; padding: 8px 9px; font: 13px var(--body); color: #1f2430; width: 100%; }
.s-lbl input::placeholder { color: #8a919e; }
.s-lbl .float > span { position: absolute; left: 10px; top: 3px; font-size: 9px; font-weight: 600; color: #5f6672; }
.s-lbl .float input { padding: 15px 9px 4px; }
.s-lbl .err { color: #b3261e; font-size: 11px; font-weight: 600; }
.s-lbl .note { color: #5f6672; font-size: 11px; }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // label placement: the same filled form three ways, then a check
  (() => {
    const st = $('.s-lbl'); if (!st) return;
    const frm = $('.frm', st), F = [['Email', 'asha@studio', 'email'], ['Phone', '', 'tel']];
    const draw = m => { frm.innerHTML = F.map(([l, v, t]) => m === 'ph' ? `<div class="f"><input type="${t}" aria-label="${l}" placeholder="${l}" value="${v}"></div>` : `<label class="f${m === 'fl' ? ' float' : ''}"><span>${l}</span><input type="${t}" ${m === 'fl' ? '' : ''}value="${v}"></label>`).join('')
      + '<div><button class="act" type="button">Check</button></div><p class="note"></p>'; };
    frm.addEventListener('click', e => { if (!e.target.closest('.act')) return; const box = $('.f', frm), ok = /\S+@\S+\.\S+/.test($('input', box).value); $$('.err', frm).forEach(x => x.remove());
      if (!ok) { const er = document.createElement('span'); er.className = 'err'; er.textContent = 'Enter a valid email address'; box.append(er); }
      const m = $('.seg [aria-pressed="true"]', st).dataset.m; $('.note', frm).textContent = m === 'ph' ? 'Which field is wrong? The label vanished when the text went in.' : m === 'fl' ? 'The label is there, but small and faint.' : 'Label, value and error all readable.'; });
    $$('.seg button', st).forEach(b => b.addEventListener('click', () => { $$('.seg button', st).forEach(x => x.setAttribute('aria-pressed', x === b)); draw(b.dataset.m); }));
    draw('ph');
  })();
})();
```
