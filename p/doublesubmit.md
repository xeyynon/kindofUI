# Double-submit protection

Components and UX patterns · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#doublesubmit

Make Pay and Submit safe to click twice: show the pressed state at once, ignore repeat clicks while the request runs, and let the server drop duplicates with an idempotency key. Slow networks and double-click habits otherwise create two orders and two charges.

- **Good for:** Payments, orders, sending messages, creating records
- **Watch out:** Blocking clicks in the browser alone; dedupe on the server too
- **Seen in:** Stripe API (idempotency keys), GOV.UK Design System (prevent double click)

## Prompt for an AI assistant

Build this UI pattern for my app: Double-submit protection.

What it is: Make Pay and Submit safe to click twice: show the pressed state at once, ignore repeat clicks while the request runs, and let the server drop duplicates with an idempotency key. Slow networks and double-click habits otherwise create two orders and two charges.
Good for: Payments, orders, sending messages, creating records.
Watch out: Blocking clicks in the browser alone; dedupe on the server too.
Seen in: Stripe API (idempotency keys), GOV.UK Design System (prevent double click)

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
<div class="stage s-dbl">
    <p class="tip" style="margin:0">Click Pay three times quickly on each side.</p>
    <div class="two">
      <div class="pane"><span class="cap">Unprotected<small>every click sends an order</small></span><button class="act" type="button" data-k="no">Pay ₹499</button><ol aria-label="Orders created, unprotected"></ol></div>
      <div class="pane"><span class="cap">Protected<small>pressed at once, repeats ignored</small></span><button class="act" type="button" data-k="yes">Pay ₹499</button><ol aria-label="Orders created, protected"></ol></div>
    </div>
  </div>
```

### CSS

```css
:root { --body: "Figtree",system-ui,sans-serif; --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): Figtree, JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-dbl, .s-dbl *, .s-dbl *::before, .s-dbl *::after { box-sizing: border-box; }
.s-dbl { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-dbl button { font: inherit; cursor: pointer; }
.s-dly,.s-rsv,.s-esum,.s-lbl,.s-pwd,.s-dbl,.s-deb,.s-inl,.s-fcs,.s-back { background: #fff; color: #1f2430; font-size: 12px; padding: 12px 14px; }
.s-dly .two,.s-rsv .two,.s-dbl .two,.s-deb .two,.s-inl .two { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; min-height: 0; }
.s-dly .cap,.s-rsv .cap,.s-dbl .cap,.s-deb .cap,.s-inl .cap { font: 600 11px/1.3 var(--body); color: #1f2430; }
.s-dly .cap small,.s-rsv .cap small,.s-dbl .cap small,.s-deb .cap small,.s-inl .cap small { display: block; font-weight: 400; color: #5f6672; }
.s-dly .act,.s-rsv .act,.s-esum .act,.s-lbl .act,.s-pwd .act,.s-dbl .act,.s-inl .act,.s-fcs .act,.s-back .act { border: 1px solid #1f2430; background: #1f2430; color: #fff; border-radius: 6px; padding: 6px 12px; font: 600 12px var(--body); }
.s-dbl { display: grid; grid-template-rows: auto 1fr; gap: 8px; }
.s-dbl .tip { font-size: 11px; color: #5f6672; }
.s-dbl .pane { display: grid; grid-template-rows: auto auto 1fr; gap: 6px; min-height: 0; }
.s-dbl .act:disabled { opacity: .7; cursor: progress; }
.s-dbl ol { margin: 0; padding: 6px 8px 6px 24px; border: 1px solid #e3e6ec; border-radius: 7px; font: 11px/1.5 var(--mono); overflow: auto; min-height: 0; }
.s-dbl .n { font: 600 11.5px var(--body); }
.s-dbl .n.bad { color: #b3261e; }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // double submit: three quick clicks on each side, a ledger of orders
  (() => {
    const st = $('.s-dbl'); if (!st) return;
    $$('.act', st).forEach(btn => { const ol = btn.nextElementSibling, safe = btn.dataset.k === 'yes'; let n = 0, busy = false;
      btn.addEventListener('click', () => {
        if (safe) { if (busy) return; busy = true; btn.disabled = true; btn.textContent = 'Paying…'; }
        setTimeout(() => { n++; const li = document.createElement('li'); li.textContent = `Order ${1040 + n}, ₹499 charged`; ol.append(li); ol.setAttribute('aria-label', `${n} orders created`);
          if (safe) { busy = false; btn.disabled = false; btn.textContent = 'Pay ₹499'; } }, 1500); }); });
  })();
})();
```
