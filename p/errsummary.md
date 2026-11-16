# Error summary on submit

Components and UX patterns · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#errsummary

When a form fails, a box at the top lists every problem, each one a link to its field, and keyboard focus moves to it. Errors further down a long form are no longer missed, and screen reader users learn that submitting failed.

- **Good for:** Long forms, checkout, government and business forms
- **Watch out:** Summary wording must match the messages at the fields
- **Seen in:** GOV.UK services (GOV.UK Design System)

## Prompt for an AI assistant

Build this UI pattern for my app: Error summary on submit.

What it is: When a form fails, a box at the top lists every problem, each one a link to its field, and keyboard focus moves to it. Errors further down a long form are no longer missed, and screen reader users learn that submitting failed.
Good for: Long forms, checkout, government and business forms.
Watch out: Summary wording must match the messages at the fields.
Seen in: GOV.UK services (GOV.UK Design System)

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
<div class="stage s-esum">
    <div class="seg" role="group" aria-label="Version"><button type="button" aria-pressed="true" data-m="no">Errors at the fields only</button><button type="button" aria-pressed="false" data-m="yes">Error summary on top</button></div>
    <div class="sc" tabindex="-1"><form novalidate="">
      <label data-f="name">Full name<input autocomplete="off" value=""></label>
      <label data-f="email">Email<input autocomplete="off" value="asha@studio"></label>
      <label data-f="phone">Phone<input autocomplete="off" value="98765"></label>
      <label data-f="pin">PIN code<input autocomplete="off" value="560001"></label>
    </form></div>
    <div class="foot"><span class="st">Press Continue with the mistakes left in</span><button class="act" type="button">Continue</button></div>
  </div>
```

### CSS

```css
:root { --body: "Figtree",system-ui,sans-serif; }
/* fonts used (all on Google Fonts): Figtree */
/* base styles the site gives every demo (scoped to this demo) */
.s-esum, .s-esum *, .s-esum *::before, .s-esum *::after { box-sizing: border-box; }
.s-esum { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-esum button { font: inherit; cursor: pointer; }
.s-dly,.s-rsv,.s-esum,.s-lbl,.s-pwd,.s-dbl,.s-deb,.s-inl,.s-fcs,.s-back { background: #fff; color: #1f2430; font-size: 12px; padding: 12px 14px; }
.s-esum .seg,.s-lbl .seg,.s-pwd .seg,.s-fcs .seg,.s-back .seg { display: flex; border: 1px solid #c9ced8; border-radius: 7px; overflow: hidden; margin-bottom: 9px; }
.s-esum .seg button,.s-lbl .seg button,.s-pwd .seg button,.s-fcs .seg button,.s-back .seg button { flex: 1; border: 0; border-left: 1px solid #c9ced8; background: #fff; color: #4a5160; padding: 5px 6px; font: 600 11px var(--body); }
.s-esum .seg button:first-child,.s-lbl .seg button:first-child,.s-pwd .seg button:first-child,.s-fcs .seg button:first-child,.s-back .seg button:first-child { border-left: 0; }
.s-esum .seg [aria-pressed="true"],.s-lbl .seg [aria-pressed="true"],.s-pwd .seg [aria-pressed="true"],.s-fcs .seg [aria-pressed="true"],.s-back .seg [aria-pressed="true"] { background: #1f2430; color: #fff; }
.s-dly .act,.s-rsv .act,.s-esum .act,.s-lbl .act,.s-pwd .act,.s-dbl .act,.s-inl .act,.s-fcs .act,.s-back .act { border: 1px solid #1f2430; background: #1f2430; color: #fff; border-radius: 6px; padding: 6px 12px; font: 600 12px var(--body); }
.s-esum { display: grid; grid-template-rows: auto 1fr auto; gap: 0; }
.s-esum .sc { overflow: auto; border: 1px solid #e3e6ec; border-radius: 8px; padding: 8px 10px; display: grid; gap: 7px; align-content: start; }
.s-esum .sum { border: 2px solid #c2352b; border-radius: 6px; padding: 7px 9px; outline: none; }
.s-esum .sum:focus-visible { box-shadow: 0 0 0 3px #f2c94c; }
.s-esum .sum b { display: block; font-size: 12px; margin-bottom: 3px; }
.s-esum .sum a { display: block; color: #b3261e; font-size: 11.5px; }
.s-esum label { display: grid; gap: 3px; font: 600 11.5px var(--body); }
.s-esum input { border: 1px solid #8a919e; border-radius: 5px; padding: 5px 7px; font: 12px var(--body); }
.s-esum .bad input { border: 2px solid #c2352b; }
.s-esum .msg { color: #b3261e; font-weight: 600; font-size: 11px; }
.s-esum .foot { display: flex; justify-content: space-between; align-items: center; gap: 8px; padding-top: 8px; font-size: 11px; color: #5f6672; }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // parallax
  (() => { const s = $('#plx'); if (!s) return; const ly = $$('#plx [data-f]');
    s.addEventListener('scroll', () => { const t = s.scrollTop; ly.forEach(l => l.style.transform = `translateY(${t * l.dataset.f}px)`); }, { passive: true });
  })();

  $$('nav.index button[data-f]').forEach(b => { const s = collections.find(x => x.id === b.dataset.f); if (s) b.insertAdjacentHTML('beforeend', `<span class="kn">${$$('article.demo', s).length}</span>`); });
})();
```
