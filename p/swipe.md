# Gesture-based UI

Components and UX patterns · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#swipe

Swipe, drag, pinch, long-press and pull-to-refresh instead of buttons.

- **Good for:** Fast yes/no choices and list actions on touch
- **Watch out:** Being the only way to act; add buttons too
- **Seen in:** Tinder, Bumble, iOS mail swipe actions, Google Photos pinch zoom

## Prompt for an AI assistant

Build this UI pattern for my app: Gesture-based UI.

What it is: Swipe, drag, pinch, long-press and pull-to-refresh instead of buttons.
Good for: Fast yes/no choices and list actions on touch.
Watch out: Being the only way to act; add buttons too.
Seen in: Tinder, Bumble, iOS mail swipe actions, Google Photos pinch zoom

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
<div class="stage s-swipe">
    <span class="hint">drag a card left or right</span>
    <div class="deck" id="deck"></div>
    <div class="acts"><button id="sw-no" aria-label="Skip">✕</button><button id="sw-yes" aria-label="Like" style="color:#e11d48">♥</button></div>
  </div>
```

### CSS

```css
:root { --body: "Figtree",system-ui,sans-serif; --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): Figtree, JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-swipe, .s-swipe *, .s-swipe *::before, .s-swipe *::after { box-sizing: border-box; }
.s-swipe { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-swipe button { font: inherit; cursor: pointer; }
.s-swipe { background: linear-gradient(#fff1f2,#ffe4e6); display: grid; place-items: center; }
.s-swipe .deck { position: relative; width: 170px; height: 210px; }
.s-swipe .sc { position: absolute; inset: 0; border-radius: 16px; box-shadow: 0 8px 20px rgba(0,0,0,.18); display: flex; flex-direction: column; justify-content: flex-end; padding: 12px; color: #fff; font: 700 16px var(--body); touch-action: pan-y; user-select: none; cursor: grab; transition: transform .3s; }
.s-swipe .sc small { font-weight: 500; font-size: 11px; opacity: .9; }
.s-swipe .sc.drag { transition: none; cursor: grabbing; }
.s-swipe .acts { position: absolute; bottom: 10px; left: 0; right: 0; display: flex; justify-content: center; gap: 14px; }
.s-swipe .acts button { width: 38px; height: 38px; border-radius: 50%; border: 0; background: #fff; box-shadow: 0 3px 8px rgba(0,0,0,.15); font-size: 16px; }
.s-swipe .hint { position: absolute; top: 8px; left: 0; right: 0; text-align: center; font: 10px var(--mono); color: #9f1239; }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // swipe deck
  const people=[['Ishita, 26','Loves trekking',"#f472b6,#be185d"],['Aarav, 28','Coffee and code',"#60a5fa,#1d4ed8"],['Zoya, 25','Painter',"#fbbf24,#ea580c"],['Vikram, 29','Plays the tabla',"#34d399,#047857"]];
  const deck=$('#deck');
  function fill(){deck.innerHTML='';people.slice().reverse().forEach(p=>{const c=document.createElement('div');c.className='sc';c.style.background=`linear-gradient(160deg,${p[2]})`;c.innerHTML=`${p[0]}<small>${p[1]}</small>`;deck.appendChild(c);drag(c)})}
  function top(){return deck.lastElementChild}
  function fly(c,dir){c.style.transform=`translateX(${dir*260}px) rotate(${dir*25}deg)`;c.style.opacity='0';setTimeout(()=>{c.remove();if(!deck.children.length)setTimeout(fill,400)},300)}
  function drag(c){let x0=null,dx=0;
    c.addEventListener('pointerdown',e=>{if(c!==top())return;x0=e.clientX;c.classList.add('drag');c.setPointerCapture(e.pointerId)});
    c.addEventListener('pointermove',e=>{if(x0===null)return;dx=e.clientX-x0;c.style.transform=`translateX(${dx}px) rotate(${dx/12}deg)`});
    const end=()=>{if(x0===null)return;c.classList.remove('drag');x0=null;if(Math.abs(dx)>70)fly(c,Math.sign(dx));else c.style.transform='';dx=0};
    c.addEventListener('pointerup',end);c.addEventListener('pointercancel',end)}
  $('#sw-no').addEventListener('click',()=>top()&&fly(top(),-1));$('#sw-yes').addEventListener('click',()=>top()&&fly(top(),1));fill();
})();
```
