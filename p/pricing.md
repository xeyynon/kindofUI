# Pricing table

Layouts · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#pricing

Plans side by side with the recommended one raised and highlighted.

- **Good for:** Comparing 2 to 4 plans quickly
- **Watch out:** More than four plans, or hidden fees
- **Seen in:** almost every SaaS pricing page

## Prompt for an AI assistant

Build this layout for my page: Pricing table.

What it is: Plans side by side with the recommended one raised and highlighted.
Good for: Comparing 2 to 4 plans quickly.
Watch out: More than four plans, or hidden fees.
Seen in: almost every SaaS pricing page

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
<div class="stage s-price">
    <div class="bill"><button class="on" data-b="m">Monthly</button><button data-b="y">Yearly <em>−20%</em></button></div>
    <div class="tiers">
      <div class="tr"><b>Free</b><strong data-m="₹0" data-y="₹0">₹0</strong><small>/ month</small><span>1 project</span><button>Start</button></div>
      <div class="tr pop"><em class="bd">Most popular</em><b>Pro</b><strong data-m="₹499" data-y="₹399">₹499</strong><small>/ month</small><span>Unlimited projects</span><button>Upgrade</button></div>
      <div class="tr"><b>Team</b><strong data-m="₹1,299" data-y="₹1,039">₹1,299</strong><small>/ month</small><span>10 seats, SSO</span><button>Contact</button></div>
    </div>
  </div>
```

### CSS

```css
:root { --display: "Bricolage Grotesque",system-ui,sans-serif; --body: "Figtree",system-ui,sans-serif; }
/* fonts used (all on Google Fonts): Bricolage Grotesque, Figtree */
/* base styles the site gives every demo (scoped to this demo) */
.s-price, .s-price *, .s-price *::before, .s-price *::after { box-sizing: border-box; }
.s-price { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-price button { font: inherit; cursor: pointer; }
.s-price { background: #f6f7fb; color: #1f2430; padding: 14px; display: grid; grid-template-rows: auto 1fr; gap: 12px; font-size: 11px; }
.s-price .bill { justify-self: center; display: inline-flex; background: #e7e9f0; border-radius: 999px; padding: 3px; }
.s-price .bill button { border: 0; background: none; border-radius: 999px; padding: 5px 12px; font-size: 11px; color: #555; }
.s-price .bill button.on { background: #fff; color: #111; font-weight: 600; box-shadow: 0 1px 3px rgba(0,0,0,.12); }
.s-price .bill em { font-style: normal; color: #16a34a; }
.s-price .tiers { display: grid; grid-template-columns: repeat(3,1fr); gap: 8px; align-items: center; }
.s-price .tr { background: #fff; border: 1px solid #e3e6ec; border-radius: 10px; padding: 12px 6px; display: grid; gap: 6px; justify-items: center; text-align: center; position: relative; min-width: 0; }
.s-price .tr strong { font: 800 19px var(--display); font-variant-numeric: tabular-nums; }
.s-price .tr small { color: #888; }
.s-price .tr button { border: 1px solid #3557e0; color: #3557e0; background: #fff; border-radius: 6px; padding: 5px 10px; font-size: 11px; font-weight: 600; }
.s-price .pop { border: 2px solid #3557e0; padding: 20px 6px; box-shadow: 0 10px 24px rgba(53,87,224,.18); }
.s-price .pop button { background: #3557e0; color: #fff; }
.s-price .bd { position: absolute; top: -9px; background: #3557e0; color: #fff; font: 600 9px var(--body); font-style: normal; padding: 2px 8px; border-radius: 999px; white-space: nowrap; }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // pricing monthly/yearly
  (() => { const b = $$('.s-price .bill button');
    b.forEach(x => x.addEventListener('click', () => { b.forEach(y => y.classList.toggle('on', y === x)); $$('.s-price strong').forEach(s => s.textContent = s.dataset[x.dataset.b]); }));
  })();
})();
```
