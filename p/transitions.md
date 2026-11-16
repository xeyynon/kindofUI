# Page transitions

Accessibility and motion · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#transitions

Motion between screens shows where you came from and where you went.

- **Good for:** Showing where content came from and went
- **Watch out:** Slow transitions that delay every tap
- **Seen in:** iOS navigation, Material container transform

## Prompt for an AI assistant

Make my UI follow this accessibility and motion practice: Page transitions.

What it is: Motion between screens shows where you came from and where you went.
Good for: Showing where content came from and went.
Watch out: Slow transitions that delay every tap.
Seen in: iOS navigation, Material container transform

Steps:
1. Audit every page and component I share against this practice and list each problem with its element.
2. Fix the problems in code without changing the visual design more than needed.
3. Follow WCAG 2.2 AA and say which success criterion each fix covers.
4. Tell me how to test it myself: keyboard only, a screen reader, 200% zoom and reduced motion.

The kindofui example below shows the practice in a small working demo.

## Code

Copy and adapt. The HTML and CSS are scoped to this demo, so they will not touch the page they are pasted into.

### HTML

```html
<div class="stage s-pt">
    <div class="mode"><span>Transition:</span><button class="on" data-m="slide">Slide</button><button data-m="fade">Fade</button><button data-m="scale">Zoom</button></div>
    <div class="vw"><div class="pg2 ls" id="pt-list"><button data-i="0"><i style="background:linear-gradient(135deg,#f6d365,#fda085)"></i>Goa</button><button data-i="1"><i style="background:linear-gradient(135deg,#84fab0,#8fd3f4)"></i>Munnar</button><button data-i="2"><i style="background:linear-gradient(135deg,#a18cd1,#fbc2eb)"></i>Jaipur</button></div><div class="pg2 det" id="pt-det" hidden=""><button class="bk" id="pt-bk">‹ Back</button><i id="pt-img"></i><b id="pt-tt">Goa</b><span>3 nights · from ₹12,400</span></div></div>
  </div>
```

### CSS

```css
:root { --display: "Bricolage Grotesque",system-ui,sans-serif; }
/* fonts used (all on Google Fonts): Bricolage Grotesque */
/* base styles the site gives every demo (scoped to this demo) */
.s-pt, .s-pt *, .s-pt *::before, .s-pt *::after { box-sizing: border-box; }
.s-pt { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-pt button { font: inherit; cursor: pointer; }
[hidden] { display: none !important; }
.s-pt { background: #f3f4f7; color: #1f2430; padding: 12px; display: grid; grid-template-rows: auto 1fr; gap: 8px; font-size: 12px; }
.s-pt .mode { display: flex; gap: 4px; align-items: center; flex-wrap: wrap; }
.s-pt .mode span { color: #666; margin-right: 4px; }
.s-pt .mode button { border: 1px solid #d6dae1; background: #fff; border-radius: 999px; padding: 3px 10px; font-size: 11px; color: #1f2430; }
.s-pt .mode button.on { background: #1f2430; color: #fff; border-color: #1f2430; }
.s-pt .vw { position: relative; overflow: hidden; background: #fff; border-radius: 10px; }
.s-pt .pg2 { position: absolute; inset: 0; padding: 10px; display: grid; gap: 8px; align-content: start; background: #fff; }
.s-pt .ls button { display: flex; gap: 10px; align-items: center; border: 1px solid #eef0f3; background: #fff; border-radius: 8px; padding: 6px; font-weight: 600; text-align: left; color: #1f2430; width: 100%; }
.s-pt .ls i { width: 40px; height: 30px; border-radius: 5px; flex: none; }
.s-pt .det i { display: block; height: 90px; border-radius: 8px; }
.s-pt .det b { font: 700 18px var(--display); }
.s-pt .det span { color: #666; }
.s-pt .bk { justify-self: start; border: 0; background: none; color: #3557e0; font-weight: 600; padding: 0; }
.s-pt .anim-slide { animation: ptin .35s cubic-bezier(.2,.8,.2,1); }
.s-pt .anim-back { animation: ptback .35s cubic-bezier(.2,.8,.2,1); }
.s-pt .anim-fade { animation: ptfade .3s ease; }
.s-pt .anim-scale { animation: ptzoom .3s cubic-bezier(.2,.8,.2,1); }
@keyframes ptin {
  from{transform:translateX(100%)}
}
@keyframes ptback {
  from{transform:translateX(-100%)}
}
@keyframes ptfade {
  from{opacity:0}
}
@keyframes ptzoom {
  from{transform:scale(.85);opacity:0}
}
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  const on = (sel, ev, fn) => { const el = $(sel); if (el) el.addEventListener(ev, fn); return el; };

  (() => { let mode = 'slide'; const L = $('#pt-list'), D = $('#pt-det'); if (!L) return; const T = ['Goa', 'Munnar', 'Jaipur'], G = ['#f6d365,#fda085', '#84fab0,#8fd3f4', '#a18cd1,#fbc2eb'];
    const mb = $$('.s-pt .mode button'); mb.forEach(b => b.addEventListener('click', () => { mode = b.dataset.m; mb.forEach(x => x.classList.toggle('on', x === b)); }));
    const anim = (el, c) => { el.classList.remove('anim-slide', 'anim-back', 'anim-fade', 'anim-scale'); void el.offsetWidth; el.classList.add(c); };
    $$('#pt-list button').forEach(b => b.addEventListener('click', () => { const i = +b.dataset.i; $('#pt-tt').textContent = T[i]; $('#pt-img').style.background = `linear-gradient(135deg,${G[i]})`; L.hidden = true; D.hidden = false; anim(D, 'anim-' + mode); }));
    on('#pt-bk', 'click', () => { D.hidden = true; L.hidden = false; anim(L, mode === 'slide' ? 'anim-back' : 'anim-' + mode); });
  })();
})();
```
