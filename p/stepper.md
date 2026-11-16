# Stepper / wizard

Navigation · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#stepper

Breaks a long task into ordered steps and shows progress.

- **Good for:** Long tasks split into steps: checkout, sign-up
- **Watch out:** Short forms that fit on one screen
- **Seen in:** checkout flows, account sign-up, insurance and loan forms

## Prompt for an AI assistant

Build this navigation pattern for my app: Stepper / wizard.

What it is: Breaks a long task into ordered steps and shows progress.
Good for: Long tasks split into steps: checkout, sign-up.
Watch out: Short forms that fit on one screen.
Seen in: checkout flows, account sign-up, insurance and loan forms

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
<div class="stage s-step" id="stp">
    <ol><li><i>1</i>Cart</li><li><i>2</i>Address</li><li><i>3</i>Payment</li><li><i>4</i>Done</li></ol>
    <div class="pane" id="stp-pane"></div>
    <div class="acts"><button id="stp-back">Back</button><button class="pri" id="stp-next">Next</button></div>
  </div>
```

### CSS

```css
/* base styles the site gives every demo (scoped to this demo) */
.s-step, .s-step *, .s-step *::before, .s-step *::after { box-sizing: border-box; }
.s-step { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-step button { font: inherit; cursor: pointer; }
.s-step { background: #fff; color: #1f2430; padding: 22px 18px; display: grid; gap: 22px; align-content: center; font-size: 12px; }
.s-step ol { list-style: none; margin: 0; padding: 0; display: flex; justify-content: space-between; position: relative; }
.s-step ol::before { content: ""; position: absolute; top: 13px; left: 12%; right: 12%; height: 2px; background: #e3e6ec; }
.s-step li { position: relative; display: grid; justify-items: center; gap: 5px; flex: 1; color: #888; }
.s-step li i { width: 28px; height: 28px; border-radius: 50%; background: #fff; border: 2px solid #d0d5de; display: grid; place-items: center; font-style: normal; font-weight: 700; font-size: 12px; }
.s-step li.done i { background: #16a34a; border-color: #16a34a; color: #fff; }
.s-step li.cur { color: #1f2430; font-weight: 600; }
.s-step li.cur i { border-color: #3557e0; color: #3557e0; }
.s-step .pane { border: 1px solid #e3e6ec; border-radius: 8px; padding: 12px; min-height: 56px; }
.s-step .acts { display: flex; justify-content: space-between; }
.s-step .acts button { border: 1px solid #cfd5de; background: #fff; border-radius: 6px; padding: 6px 14px; }
.s-step .acts button.pri { background: #3557e0; border-color: #3557e0; color: #fff; }
.s-step .acts button:disabled { opacity: .4; cursor: default; }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // stepper
  const sp=['Cart: 2 items · ₹1,840','Deliver to: 14 MG Road, Pune 411001','Pay with: UPI · name@okbank','Order placed. Arriving Thursday.'];
  let si=1;const sli=$$('#stp li'),pane=$('#stp-pane'),bk=$('#stp-back'),nx=$('#stp-next');
  function rs(){sli.forEach((l,i)=>{l.className=i<si?'done':i===si?'cur':'';l.querySelector('i').textContent=i<si?'✓':i+1});pane.textContent=sp[si];bk.disabled=si===0;nx.textContent=si===3?'Start over':si===2?'Place order':'Next'}
  nx.addEventListener('click',()=>{si=si===3?0:si+1;rs()});bk.addEventListener('click',()=>{if(si>0){si--;rs()}});rs();
})();
```
