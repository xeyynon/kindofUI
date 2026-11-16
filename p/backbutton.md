# Back button closes overlays

Navigation · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#backbutton

People expect Back to undo what looks like a new page: a photo opened full screen, a filter, a step. Add a history entry for those views, so Back closes the photo instead of leaving the whole page and losing their place.

- **Good for:** Photo viewers, filters, multi-step flows, single-page apps
- **Watch out:** Adding history for tiny toggles; Back then feels stuck
- **Based on:** Baymard on Back button expectations (2020): 59% of e-commerce sites break at least one; 37% get overlays wrong

## Prompt for an AI assistant

Build this navigation pattern for my app: Back button closes overlays.

What it is: People expect Back to undo what looks like a new page: a photo opened full screen, a filter, a step. Add a history entry for those views, so Back closes the photo instead of leaving the whole page and losing their place.
Good for: Photo viewers, filters, multi-step flows, single-page apps.
Watch out: Adding history for tiny toggles; Back then feels stuck.
Based on: Baymard on Back button expectations (2020): 59% of e-commerce sites break at least one; 37% get overlays wrong

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
<div class="stage s-back">
    <div class="seg" role="group" aria-label="Version"><button type="button" aria-pressed="true" data-m="no">Back leaves the page</button><button type="button" aria-pressed="false" data-m="yes">Back closes the photo</button></div>
    <div class="win"><div class="chrome"><button type="button" class="bk" aria-label="Back"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 3 5 8l5 5"></path></svg></button><span class="url">shop.example/lamps</span></div><div class="page"></div></div>
    <p class="res">Open a photo, then press the Back arrow.</p>
  </div>
```

### CSS

```css
:root { --body: "Figtree",system-ui,sans-serif; --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): Figtree, JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-back, .s-back *, .s-back *::before, .s-back *::after { box-sizing: border-box; }
.s-back { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-back button { font: inherit; cursor: pointer; }
.s-dly,.s-rsv,.s-esum,.s-lbl,.s-pwd,.s-dbl,.s-deb,.s-inl,.s-fcs,.s-back { background: #fff; color: #1f2430; font-size: 12px; padding: 12px 14px; }
.s-esum .seg,.s-lbl .seg,.s-pwd .seg,.s-fcs .seg,.s-back .seg { display: flex; border: 1px solid #c9ced8; border-radius: 7px; overflow: hidden; margin-bottom: 9px; }
.s-esum .seg button,.s-lbl .seg button,.s-pwd .seg button,.s-fcs .seg button,.s-back .seg button { flex: 1; border: 0; border-left: 1px solid #c9ced8; background: #fff; color: #4a5160; padding: 5px 6px; font: 600 11px var(--body); }
.s-esum .seg button:first-child,.s-lbl .seg button:first-child,.s-pwd .seg button:first-child,.s-fcs .seg button:first-child,.s-back .seg button:first-child { border-left: 0; }
.s-esum .seg [aria-pressed="true"],.s-lbl .seg [aria-pressed="true"],.s-pwd .seg [aria-pressed="true"],.s-fcs .seg [aria-pressed="true"],.s-back .seg [aria-pressed="true"] { background: #1f2430; color: #fff; }
.s-dly .act,.s-rsv .act,.s-esum .act,.s-lbl .act,.s-pwd .act,.s-dbl .act,.s-inl .act,.s-fcs .act,.s-back .act { border: 1px solid #1f2430; background: #1f2430; color: #fff; border-radius: 6px; padding: 6px 12px; font: 600 12px var(--body); }
.s-dly .ghost,.s-rsv .ghost,.s-fcs .ghost,.s-back .ghost { border: 1px solid #c9ced8; background: #fff; color: #1f2430; border-radius: 6px; padding: 5px 10px; font: 600 11px var(--body); }
.s-back { display: grid; grid-template-rows: auto 1fr auto; gap: 0; }
.s-back .win { border: 1px solid #c9ced8; border-radius: 9px; overflow: hidden; display: grid; grid-template-rows: auto 1fr; min-height: 0; }
.s-back .chrome { display: flex; align-items: center; gap: 6px; padding: 5px 7px; background: #eef0f3; border-bottom: 1px solid #d6dae1; font: 11px var(--mono); color: #4a5160; }
.s-back .chrome button { border: 1px solid #c9ced8; background: #fff; border-radius: 5px; width: 26px; height: 22px; display: grid; place-items: center; padding: 0; color: #1f2430; }
.s-back .chrome svg { width: 13px; height: 13px; }
.s-back .page { position: relative; padding: 8px; display: grid; grid-template-columns: repeat(3,1fr); gap: 6px; align-content: start; min-height: 0; overflow: hidden; }
.s-back .page h5 { grid-column: 1/-1; margin: 0; font: 700 12px var(--body); }
.s-back .th { height: 46px; border: 0; border-radius: 6px; padding: 0; background: linear-gradient(135deg,#c9d4f2,#eef0f3); }
.s-back .th:nth-child(3) { background: linear-gradient(135deg,#f2d9c9,#eef0f3); }
.s-back .th:nth-child(4) { background: linear-gradient(135deg,#cfe8d8,#eef0f3); }
.s-back .lb { position: absolute; inset: 0; background: rgba(20,22,30,.82); display: grid; place-items: center; color: #fff; font: 600 12px var(--body); }
.s-back .lb[hidden] { display: none; }
.s-back .lb div { width: 60%; aspect-ratio: 1.3; border-radius: 8px; background: linear-gradient(135deg,#c9d4f2,#8aa2ff); }
.s-back .away { grid-column: 1/-1; display: grid; gap: 6px; color: #4a5160; }
.s-back .away i { display: block; height: 8px; border-radius: 4px; background: #e3e6ec; }
.s-back .res { padding-top: 7px; font-size: 11px; color: #5f6672; min-height: 24px; }
.s-back .res b { color: #1f2430; }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // back button: a mini browser with its own history
  (() => {
    const st = $('.s-back'); if (!st) return;
    const page = $('.page', st), url = $('.url', st), res = $('.res', st); let mode = 'no', stack = [];
    const shop = () => { page.innerHTML = '<h5>Desk lamps</h5>' + [1, 2, 3, 4, 5, 6].map(i => `<button class="th" type="button" aria-label="Open photo ${i}"></button>`).join('') + '<div class="lb" hidden><div></div></div>'; url.textContent = 'shop.example/lamps'; };
    const away = () => { page.innerHTML = '<div class="away"><b style="color:#1f2430">Search results</b><i style="width:90%"></i><i style="width:70%"></i><i style="width:80%"></i></div>'; url.textContent = 'shop.example/search?q=lamp'; };
    const reset = () => { stack = ['search']; shop(); res.textContent = 'Open a photo, then press the Back arrow.'; };
    page.addEventListener('click', e => { const t = e.target.closest('.th'); if (!t) return; $('.lb', page).hidden = false; if (mode === 'yes') { stack.push('photo'); url.textContent = 'shop.example/lamps#photo'; } res.textContent = 'Photo open. Now press the Back arrow.'; });
    $('.bk', st).addEventListener('click', () => { const lb = $('.lb', page);
      if (mode === 'yes' && stack[stack.length - 1] === 'photo') { stack.pop(); lb.hidden = true; url.textContent = 'shop.example/lamps'; res.innerHTML = 'Back <b>closed the photo</b>. You are still on the lamps page.'; }
      else if (page.querySelector('.th')) { away(); res.innerHTML = 'Back <b>left the page</b>. The lamps and your place are gone.'; setTimeout(reset, 2600); } });
    $$('.seg button', st).forEach(b => b.addEventListener('click', () => { mode = b.dataset.m; $$('.seg button', st).forEach(x => x.setAttribute('aria-pressed', x === b)); reset(); }));
    reset();
  })();
})();
```
