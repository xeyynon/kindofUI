# 3D / hyperrealism

Visual styles · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#threed

Objects with real depth, lighting and reflections that tilt as you move.

- **Good for:** Product showcases, cards, hero moments
- **Watch out:** Every element; heavy 3D hurts speed and focus
- **Seen in:** credit card sites, Apple product pages, Spline scenes

## Prompt for an AI assistant

Design this interface in the 3D / hyperrealism visual style.

What it is: Objects with real depth, lighting and reflections that tilt as you move.
Good for: Product showcases, cards, hero moments.
Watch out: Every element; heavy 3D hurts speed and focus.
Seen in: credit card sites, Apple product pages, Spline scenes

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
<div class="stage s-3d"><div class="cd"><span class="chip"></span><span class="num">4821 •••• •••• 0926</span><span class="nm">PRIYA MENON <em>09/29</em></span></div><span class="hint3">move your pointer over the card</span></div>
```

### CSS

```css
:root { --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-3d, .s-3d *, .s-3d *::before, .s-3d *::after { box-sizing: border-box; }
.s-3d { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-3d button { font: inherit; cursor: pointer; }
.s-3d { background: radial-gradient(circle at 50% 30%,#2b2f45,#0d0f18); display: grid; place-items: center; perspective: 700px; color: #fff; }
.s-3d .cd { width: 220px; height: 138px; border-radius: 16px; padding: 16px; display: flex; flex-direction: column; justify-content: space-between; background: linear-gradient(135deg,#ffd194,#d1913c 55%,#8a5a19); color: #3b2508; font: 600 12px var(--mono); transform: rotateX(14deg) rotateY(-20deg); transform-style: preserve-3d; transition: transform .15s; box-shadow: 0 30px 40px rgba(0,0,0,.5); position: relative; }
.s-3d .cd::after { content: ""; position: absolute; inset: 0; border-radius: 16px; background: linear-gradient(115deg,transparent 35%,rgba(255,255,255,.5) 48%,transparent 62%); background-size: 250% 100%; background-position: var(--gx,40%) 0; pointer-events: none; }
.s-3d .chip { width: 36px; height: 27px; border-radius: 5px; background: linear-gradient(135deg,#fef3c7,#b8860b); transform: translateZ(30px); }
.s-3d .num { transform: translateZ(24px); font-size: 13px; letter-spacing: .06em; }
.s-3d .nm { display: flex; justify-content: space-between; transform: translateZ(18px); font-size: 10px; }
.s-3d em { font-style: normal; }
.s-3d .hint3 { position: absolute; bottom: 12px; font: 10px var(--mono); color: #8b93a5; }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // 3D card tilt
  (() => { const st = $('.s-3d'), cd = $('.s-3d .cd'); if (!st) return;
    st.addEventListener('pointermove', e => { const r = st.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      cd.style.transform = `rotateX(${(-y * 34).toFixed(1)}deg) rotateY(${(x * 40).toFixed(1)}deg)`; cd.style.setProperty('--gx', ((x + .5) * 100).toFixed(0) + '%'); });
    st.addEventListener('pointerleave', () => { cd.style.transform = ''; cd.style.removeProperty('--gx'); });
  })();
})();
```
