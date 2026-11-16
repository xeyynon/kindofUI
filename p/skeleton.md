# Skeleton loading

Components and UX patterns · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#skeleton

Grey shimmering shapes stand in for content while it loads, so the page feels faster and doesn't jump.

- **Good for:** Content that loads within a few seconds
- **Watch out:** Very short loads, and screens that already show data (keep the last known value)
- **Seen in:** YouTube, Facebook, LinkedIn, Swiggy

## Prompt for an AI assistant

Build this UI pattern for my app: Skeleton loading.

What it is: Grey shimmering shapes stand in for content while it loads, so the page feels faster and doesn't jump.
Good for: Content that loads within a few seconds.
Watch out: Very short loads, and screens that already show data (keep the last known value).
Seen in: YouTube, Facebook, LinkedIn, Swiggy

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
<div class="stage s-skel">
    <div class="col"><span class="lbl">Loading</span>
      <div class="post"><div class="row"><span class="sk av"></span><span class="sk" style="height:8px;width:60%"></span></div><span class="sk ph"></span><span class="sk" style="height:8px;width:80%"></span></div>
      <div class="post"><div class="row"><span class="sk av"></span><span class="sk" style="height:8px;width:50%"></span></div><span class="sk ph"></span></div>
    </div>
    <div class="col" id="skel-r"></div>
    <button class="rp" id="skel-btn">Reload</button>
  </div>
```

### CSS

```css
:root { --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-skel, .s-skel *, .s-skel *::before, .s-skel *::after { box-sizing: border-box; }
.s-skel { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-skel button { font: inherit; cursor: pointer; }
.s-skel { background: #fff; display: grid; grid-template-columns: 1fr 1fr; gap: 12px; padding: 14px; font-size: 11px; color: #1f2430; }
.s-skel .col { display: grid; gap: 8px; align-content: start; }
.s-skel .lbl { font: 10px var(--mono); color: #999; text-transform: uppercase; }
.s-skel .post { border: 1px solid #eef0f3; border-radius: 8px; padding: 8px; display: grid; gap: 6px; }
.s-skel .row { display: flex; gap: 6px; align-items: center; }
.sk { background: linear-gradient(90deg,#eceef2 25%,#f7f8fa 50%,#eceef2 75%); background-size: 200% 100%; animation: shim 1.3s linear infinite; border-radius: 4px; }
.s-skel .av { width: 24px; height: 24px; border-radius: 50%; flex: none; }
.s-skel .ph { height: 44px; border-radius: 6px; }
.s-skel .rp { position: absolute; right: 12px; bottom: 10px; border: 1px solid #d6dae1; background: #fff; border-radius: 6px; padding: 4px 10px; font-size: 11px; }
@keyframes shim {
  to{background-position:-200% 0}
}
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // skeleton
  const sr=$('#skel-r');
  const loaded=`<span class="lbl">Loaded</span>
    <div class="post"><div class="row"><span class="av" style="background:#f59e0b;border-radius:50%;width:24px;height:24px"></span><b>Aditi Rao</b></div><span class="ph" style="background:linear-gradient(135deg,#60a5fa,#a78bfa)"></span><span>Sunset at Marine Drive</span></div>
    <div class="post"><div class="row"><span class="av" style="background:#10b981;border-radius:50%;width:24px;height:24px"></span><b>Kabir Sen</b></div><span class="ph" style="background:linear-gradient(135deg,#fbbf24,#f87171)"></span></div>`;
  const skel=$('.s-skel .col').innerHTML.replace('Loading','Loading…');
  sr.innerHTML=loaded;
  $('#skel-btn').addEventListener('click',()=>{sr.innerHTML=skel;setTimeout(()=>sr.innerHTML=loaded,1500)});
})();
```
