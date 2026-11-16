# Dark patterns

Components and UX patterns · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#darkpat

Tricks that push people into choices they didn't intend: fake timers, pre-ticked add-ons, fees revealed late, and guilt-trip opt-out links. Know them so you never ship them.

- **Good for:** Spotting and removing them in design reviews
- **Watch out:** Ever shipping them; they break trust and often the law
- **Seen in:** some travel and ticketing checkouts, hard-to-cancel subscriptions

## Prompt for an AI assistant

Build this UI pattern for my app: Dark patterns.

What it is: Tricks that push people into choices they didn't intend: fake timers, pre-ticked add-ons, fees revealed late, and guilt-trip opt-out links. Know them so you never ship them.
Good for: Spotting and removing them in design reviews.
Watch out: Ever shipping them; they break trust and often the law.
Seen in: some travel and ticketing checkouts, hard-to-cancel subscriptions

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
<div class="stage s-dark-p">
    <div class="timer"><span>Offer ends in<span class="flag">FAKE URGENCY</span></span><span id="dp-t">04:59</span></div>
    <div class="row"><span>Flight DEL → BOM</span><b>₹5,480</b></div>
    <label class="chk" for="dp-ins"><input type="checkbox" id="dp-ins" checked=""> Add travel insurance ₹499<span class="flag">PRE-CHECKED</span></label>
    <div class="row"><span>Convenience fee<span class="flag">HIDDEN COST</span></span><b>₹349</b></div>
    <button class="pay">Pay ₹6,328</button>
    <span class="shame">No thanks, I don't care about my safety<span class="flag">CONFIRMSHAMING</span></span>
  </div>
```

### CSS

```css
:root { --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-dark-p, .s-dark-p *, .s-dark-p *::before, .s-dark-p *::after { box-sizing: border-box; }
.s-dark-p { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-dark-p button { font: inherit; cursor: pointer; }
.s-dark-p { background: #fff; color: #1f2430; padding: 14px 16px; display: grid; gap: 8px; align-content: start; font-size: 12px; }
.s-dark-p .timer { background: #fef2f2; color: #b91c1c; border-radius: 6px; padding: 6px 10px; font-weight: 700; display: flex; justify-content: space-between; font-variant-numeric: tabular-nums; }
.s-dark-p .row { display: flex; justify-content: space-between; border-bottom: 1px solid #f0f1f4; padding: 5px 0; }
.s-dark-p .chk { display: flex; gap: 6px; align-items: center; }
.s-dark-p .pay { background: #16a34a; color: #fff; border: 0; border-radius: 8px; padding: 9px; font-weight: 700; font-size: 13px; }
.s-dark-p .shame { text-align: center; font-size: 10px; color: #9ca3af; text-decoration: underline; }
.s-dark-p .flag { font: 700 9px var(--mono); color: #fff; background: #dc2626; border-radius: 3px; padding: 1px 5px; margin-left: 6px; vertical-align: middle; letter-spacing: .04em; }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // fake countdown
  let s=299;const dt=$('#dp-t');setInterval(()=>{s=s<=0?299:s-1;dt.textContent=String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0')},1000);
})();
```
