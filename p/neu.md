# Neumorphism

Visual styles · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#neu

Elements look pushed out of, or pressed into, the same-colored surface using one light and one dark shadow. Low contrast makes it hard to use for real products.

- **Good for:** Concepts, small widgets, a few toggles
- **Watch out:** Real products: low contrast fails accessibility
- **Seen in:** Dribbble concepts, smart-home and calculator apps

## Prompt for an AI assistant

Design this interface in the Neumorphism visual style.

What it is: Elements look pushed out of, or pressed into, the same-colored surface using one light and one dark shadow. Low contrast makes it hard to use for real products.
Good for: Concepts, small widgets, a few toggles.
Watch out: Real products: low contrast fails accessibility.
Seen in: Dribbble concepts, smart-home and calculator apps

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
<div class="stage s-neu">
    <div class="knob"><div>72%</div></div>
    <div class="col">
      <button class="nb" aria-pressed="true" data-toggle>Bass boost</button>
      <button class="nb" aria-pressed="false" data-toggle>Night mode</button>
      <button class="nb" aria-pressed="false" data-toggle>Shuffle</button>
    </div>
  </div>
```

### CSS

```css
:root { --body: "Figtree",system-ui,sans-serif; }
/* fonts used (all on Google Fonts): Figtree */
/* base styles the site gives every demo (scoped to this demo) */
.s-neu, .s-neu *, .s-neu *::before, .s-neu *::after { box-sizing: border-box; }
.s-neu { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-neu button { font: inherit; cursor: pointer; }
.s-neu { background: #e2e7ee; display: flex; align-items: center; justify-content: center; gap: 28px; flex-wrap: wrap; color: #6b7686; padding: 12px; }
.s-neu .knob { width: 110px; height: 110px; border-radius: 50%; box-shadow: 9px 9px 18px #bec4ce,-9px -9px 18px #fff; display: grid; place-items: center; }
.s-neu .knob div { width: 76px; height: 76px; border-radius: 50%; box-shadow: inset 6px 6px 12px #c3c9d3,inset -6px -6px 12px #fff; display: grid; place-items: center; font: 700 18px var(--body); }
.s-neu .col { display: grid; gap: 14px; }
.s-neu .nb { border: 0; background: #e2e7ee; color: #6b7686; width: 110px; height: 40px; border-radius: 12px; box-shadow: 6px 6px 12px #c3c9d3,-6px -6px 12px #fff; font-weight: 600; }
.s-neu .nb[aria-pressed="true"] { box-shadow: inset 5px 5px 10px #c3c9d3,inset -5px -5px 10px #fff; color: #3b82f6; }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // generic toggles
  $$('[data-toggle]').forEach(b=>b.addEventListener('click',()=>b.setAttribute('aria-pressed',b.getAttribute('aria-pressed')!=='true')));
})();
```
