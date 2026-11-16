# Skeuomorphism

Visual styles · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#skeuo

Digital objects copy real materials: leather, wood, paper, brushed metal. The switch flips like a physical one.

- **Good for:** Music tools, games, kids apps, familiar metaphors
- **Watch out:** General apps; it dates quickly and adds noise
- **Seen in:** iOS 1 to 6, old Notes and Calendar apps, audio plugins

## Prompt for an AI assistant

Design this interface in the Skeuomorphism visual style.

What it is: Digital objects copy real materials: leather, wood, paper, brushed metal. The switch flips like a physical one.
Good for: Music tools, games, kids apps, familiar metaphors.
Watch out: General apps; it dates quickly and adds noise.
Seen in: iOS 1 to 6, old Notes and Calendar apps, audio plugins

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
<div class="stage s-skeu">
    <div class="pad"><div class="lea">Notes</div><div class="paper">Groceries<br>Milk, eggs<br>Call Priya at 6</div></div>
    <label>Wi‑Fi<button class="sw" aria-pressed="true" aria-label="Wi-Fi" data-toggle></button></label>
  </div>
```

### CSS

```css
/* fonts used (all on Google Fonts): Caveat */
/* base styles the site gives every demo (scoped to this demo) */
.s-skeu, .s-skeu *, .s-skeu *::before, .s-skeu *::after { box-sizing: border-box; }
.s-skeu { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-skeu button { font: inherit; cursor: pointer; }
.s-skeu { background: repeating-linear-gradient(90deg,#8a5a34 0 14px,#7d5030 14px 28px,#94633b 28px 40px); display: flex; align-items: center; justify-content: center; gap: 22px; padding: 14px; }
.s-skeu .pad { width: 190px; border-radius: 8px; overflow: hidden; box-shadow: 0 12px 24px rgba(0,0,0,.45); }
.s-skeu .lea { background: linear-gradient(#6b3a1f,#4e2913); height: 38px; position: relative; color: #f0d9b5; font: 600 13px Georgia,serif; display: grid; place-items: center; text-shadow: 0 -1px 0 #2a1408; }
.s-skeu .lea::after { content: ""; position: absolute; inset: 5px; border: 1.5px dashed #c99a62; border-radius: 4px; }
.s-skeu .paper { background: #fff7c2; background-image: repeating-linear-gradient(#fff7c2 0 21px,#b9cde4 21px 22px); padding: 6px 12px 10px 26px; font: 500 18px/22px "Caveat",cursive; color: #2c3e67; border-left: 2px solid #e8a6a6; min-height: 150px; }
.s-skeu .sw { width: 72px; height: 34px; border-radius: 17px; background: linear-gradient(#5a5f66,#9aa0a8); box-shadow: inset 0 2px 5px rgba(0,0,0,.6),0 1px 0 rgba(255,255,255,.3); position: relative; border: 0; padding: 0; }
.s-skeu .sw::after { content: ""; position: absolute; top: 2px; left: 2px; width: 30px; height: 30px; border-radius: 50%; background: radial-gradient(circle at 35% 30%,#fff,#c9ccd1 55%,#8e939b); box-shadow: 0 2px 4px rgba(0,0,0,.5); transition: left .2s; }
.s-skeu .sw[aria-pressed="true"] { background: linear-gradient(#2f7d32,#5cbf60); }
.s-skeu .sw[aria-pressed="true"]::after { left: 40px; }
.s-skeu label { color: #f3e2c7; font: 600 11px Georgia,serif; display: grid; gap: 6px; justify-items: center; text-shadow: 0 1px 1px #000; }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // generic toggles
  $$('[data-toggle]').forEach(b=>b.addEventListener('click',()=>b.setAttribute('aria-pressed',b.getAttribute('aria-pressed')!=='true')));
})();
```
