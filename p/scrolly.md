# Scrollytelling

Layouts · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#scrolly

A visual stays pinned while text scrolls past it, and the visual changes with each step of the story.

- **Good for:** Data stories, product launches, explainers
- **Watch out:** Reference content people scan or revisit
- **Seen in:** NYT and Guardian data stories, Apple AirPods pages

## Prompt for an AI assistant

Build this layout for my page: Scrollytelling.

What it is: A visual stays pinned while text scrolls past it, and the visual changes with each step of the story.
Good for: Data stories, product launches, explainers.
Watch out: Reference content people scan or revisit.
Seen in: NYT and Guardian data stories, Apple AirPods pages

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
<div class="stage s-scrolly">
    <div class="vis"><div class="dot" id="sc-dot">2015</div></div>
    <div class="steps" id="sc-steps" tabindex="0" role="region" aria-label="Story steps">
      <div class="step on" data-c="#38bdf8" data-s="70" data-l="2015">In 2015, the city had 40 km of metro line.</div>
      <div class="step" data-c="#a78bfa" data-s="100" data-l="2020">By 2020 it had doubled, and daily riders crossed one million.</div>
      <div class="step" data-c="#f472b6" data-s="130" data-l="2025">Today 160 km of track carry three million people a day.</div>
    </div>
    <span class="hint">scroll the right side →</span>
  </div>
```

### CSS

```css
:root { --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-scrolly, .s-scrolly *, .s-scrolly *::before, .s-scrolly *::after { box-sizing: border-box; }
.s-scrolly { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-scrolly button { font: inherit; cursor: pointer; }
.s-scrolly { display: grid; grid-template-columns: 1fr 1fr; background: #0f172a; color: #e2e8f0; }
.s-scrolly .vis { display: grid; place-items: center; border-right: 1px solid #1e293b; }
.s-scrolly .dot { width: 70px; height: 70px; border-radius: 50%; background: #38bdf8; transition: all .5s; display: grid; place-items: center; font: 700 12px var(--mono); color: #0f172a; }
.s-scrolly .steps { overflow-y: auto; padding: 0 14px; }
.s-scrolly .step { min-height: 200px; display: flex; align-items: center; font-size: 13px; color: #64748b; transition: color .3s; }
.s-scrolly .step.on { color: #fff; }
.s-scrolly .step:first-child { min-height: 150px; }
.s-scrolly .step:last-child { min-height: 240px; }
.s-scrolly .hint { position: absolute; bottom: 8px; left: 0; width: 50%; text-align: center; white-space: nowrap; font: 9.5px var(--mono); color: #64748b; }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // scrollytelling
  const steps=$$('#sc-steps .step'),dot=$('#sc-dot'),box=$('#sc-steps');
  function upd(){
    const mid=box.getBoundingClientRect().top+box.clientHeight/2;let best=steps[0],d=1e9;
    steps.forEach(s=>{const r=s.getBoundingClientRect();const dd=Math.abs(r.top+r.height/2-mid);if(dd<d){d=dd;best=s}});
    steps.forEach(s=>s.classList.toggle('on',s===best));
    dot.style.background=best.dataset.c;dot.style.width=dot.style.height=best.dataset.s+'px';dot.textContent=best.dataset.l;
  }
  box.addEventListener('scroll',upd,{passive:true});
})();
```
