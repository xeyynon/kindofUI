# Tabs & segmented control

Navigation · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#tabs

Switch between views of the same thing without leaving the page.

- **Good for:** Switching views of the same item
- **Watch out:** Steps in a sequence; use a stepper
- **Seen in:** product pages, browser tabs, iOS Settings, fitness apps

## Prompt for an AI assistant

Build this navigation pattern for my app: Tabs & segmented control.

What it is: Switch between views of the same thing without leaving the page.
Good for: Switching views of the same item.
Watch out: Steps in a sequence; use a stepper.
Seen in: product pages, browser tabs, iOS Settings, fitness apps

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
<div class="stage s-tabs">
    <span class="lbl">Underline tabs</span>
    <div data-tabs="">
      <div class="ul"><button class="on" data-tab="o">Overview</button><button data-tab="s">Specs</button><button data-tab="r">Reviews (214)</button></div>
      <p data-panel="o" style="margin:10px 0 0">Noise-cancelling headphones with 40 hours of battery.</p>
      <p data-panel="s" hidden="" style="margin:10px 0 0">Bluetooth 5.3 · 250 g · USB‑C fast charge</p>
      <p data-panel="r" hidden="" style="margin:10px 0 0">★★★★½ "Best I've owned for the price."</p>
    </div>
    <span class="lbl">Segmented control</span>
    <div data-tabs="" style="display:grid;gap:8px">
      <div class="seg"><button data-tab="d">Day</button><button class="on" data-tab="w">Week</button><button data-tab="m">Month</button></div>
      <span data-panel="d" hidden="">6,240 steps today</span><span data-panel="w">41,880 steps this week</span><span data-panel="m" hidden="">182,400 steps this month</span>
    </div>
  </div>
```

### CSS

```css
:root { --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-tabs, .s-tabs *, .s-tabs *::before, .s-tabs *::after { box-sizing: border-box; }
.s-tabs { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-tabs button { font: inherit; cursor: pointer; }
[hidden] { display: none !important; }
.s-tabs { background: #fff; color: #1f2430; padding: 18px; display: grid; gap: 18px; align-content: start; font-size: 13px; }
.s-tabs .ul { display: flex; gap: 18px; border-bottom: 1px solid #e3e6ec; }
.s-tabs .ul button { border: 0; background: none; padding: 8px 0; color: #777; border-bottom: 2px solid transparent; margin-bottom: -1px; }
.s-tabs .ul button.on { color: #3557e0; border-color: #3557e0; font-weight: 600; }
.s-tabs .seg { display: inline-flex; background: #eef0f4; border-radius: 9px; padding: 3px; gap: 2px; justify-self: start; }
.s-tabs .seg button { border: 0; background: none; padding: 5px 14px; border-radius: 7px; font-size: 12px; color: #555; }
.s-tabs .seg button.on { background: #fff; box-shadow: 0 1px 3px rgba(0,0,0,.15); color: #111; font-weight: 600; }
.s-tabs .lbl { font: 10px var(--mono); color: #999; text-transform: uppercase; letter-spacing: .08em; }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // generic tabs
  $$('[data-tabs]').forEach(g=>{
    const tabs=$$('[data-tab]',g);
    tabs.forEach(b=>b.addEventListener('click',()=>{
      tabs.forEach(x=>x.classList.toggle('on',x===b));
      $$('[data-panel]',g).forEach(p=>p.hidden=p.dataset.panel!==b.dataset.tab);
    }));
  });
})();
```
