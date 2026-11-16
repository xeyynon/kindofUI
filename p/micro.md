# Microinteractions

Components and UX patterns · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#micro

Small animations that confirm an action happened: a heart that pops, a switch that slides, a button that says "Copied".

- **Good for:** Confirming actions and adding delight
- **Watch out:** Slow or flashy effects that delay the task
- **Seen in:** Twitter/X like, iOS switches, Stripe copy buttons

## Prompt for an AI assistant

Build this UI pattern for my app: Microinteractions.

What it is: Small animations that confirm an action happened: a heart that pops, a switch that slides, a button that says "Copied".
Good for: Confirming actions and adding delight.
Watch out: Slow or flashy effects that delay the task.
Seen in: Twitter/X like, iOS switches, Stripe copy buttons

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
<div class="stage s-micro">
    <figure><button class="like" id="like" aria-pressed="false"><svg viewBox="0 0 24 24"><path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z"></path></svg><span id="like-n">128</span></button><figcaption>Like</figcaption></figure>
    <figure><button class="tg" aria-pressed="false" aria-label="Notifications" data-toggle></button><figcaption>Toggle</figcaption></figure>
    <figure><button class="cp" id="copy">Copy link</button><figcaption>Feedback</figcaption></figure>
  </div>
```

### CSS

```css
:root { --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-micro, .s-micro *, .s-micro *::before, .s-micro *::after { box-sizing: border-box; }
.s-micro { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-micro button { font: inherit; cursor: pointer; }
.s-micro { background: #fff; color: #1f2430; display: flex; align-items: center; justify-content: center; gap: 26px; flex-wrap: wrap; padding: 14px; }
.s-micro .like { border: 1px solid #e5e7eb; background: #fff; border-radius: 999px; padding: 8px 16px; display: flex; gap: 8px; align-items: center; font-weight: 600; font-variant-numeric: tabular-nums; }
.s-micro .like svg { width: 20px; height: 20px; fill: none; stroke: #555; stroke-width: 2; transition: transform .2s; }
.s-micro .like.on svg { fill: #f43f5e; stroke: #f43f5e; animation: pop .35s; }
.s-micro .tg { width: 50px; height: 28px; border-radius: 14px; background: #d1d5db; border: 0; position: relative; transition: background .2s; }
.s-micro .tg::after { content: ""; position: absolute; top: 3px; left: 3px; width: 22px; height: 22px; border-radius: 50%; background: #fff; box-shadow: 0 1px 3px rgba(0,0,0,.3); transition: left .2s; }
.s-micro .tg[aria-pressed="true"] { background: #22c55e; }
.s-micro .tg[aria-pressed="true"]::after { left: 25px; }
.s-micro .cp { border: 0; background: #111827; color: #fff; border-radius: 8px; padding: 9px 16px; min-width: 110px; transition: background .2s; }
.s-micro .cp.ok { background: #16a34a; }
.s-micro figure { margin: 0; display: grid; gap: 8px; justify-items: center; font: 11px var(--mono); color: #777; }
@keyframes pop {
  40%{transform:scale(1.45)}
}
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // generic toggles
  $$('[data-toggle]').forEach(b=>b.addEventListener('click',()=>b.setAttribute('aria-pressed',b.getAttribute('aria-pressed')!=='true')));

  // like / copy
  const like=$('#like'),ln=$('#like-n');
  like.addEventListener('click',()=>{const on=!like.classList.contains('on');like.classList.toggle('on',on);like.setAttribute('aria-pressed',on);ln.textContent=128+(on?1:0)});
  const cp=$('#copy');
  cp.addEventListener('click',()=>{try{navigator.clipboard&&navigator.clipboard.writeText('https://suryapratik.vercel.app/').catch(()=>{})}catch(e){}cp.textContent='Copied ✓';cp.classList.add('ok');setTimeout(()=>{cp.textContent='Copy link';cp.classList.remove('ok')},1500)});
})();
```
