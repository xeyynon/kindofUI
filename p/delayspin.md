# Delayed spinner (no flash of loading)

Components and UX patterns · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#delayspin

Fast requests show no loader at all. A spinner appears only if the wait passes a short delay, and once shown it stays a minimum time, so quick loads never flash.

- **Good for:** Buttons, refreshes and requests that are usually fast
- **Watch out:** Delay plus minimum adds time; tune both together
- **Based on:** NN/g on progress indicators (no looped animation under 1 second); the spin-delay library's defaults. The exact numbers are common practice, not research.

## Prompt for an AI assistant

Build this UI pattern for my app: Delayed spinner (no flash of loading).

What it is: Fast requests show no loader at all. A spinner appears only if the wait passes a short delay, and once shown it stays a minimum time, so quick loads never flash.
Good for: Buttons, refreshes and requests that are usually fast.
Watch out: Delay plus minimum adds time; tune both together.
Based on: NN/g on progress indicators (no looped animation under 1 second); the spin-delay library's defaults. The exact numbers are common practice, not research.

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
<div class="stage s-dly">
    <label class="ctl">Response time <input type="range" min="100" max="3000" step="50" value="150" aria-label="Response time in milliseconds"><output>150 ms</output></label>
    <div class="two">
      <div class="pane"><span class="cap">Spinner at once<small>shown for every request</small></span><div class="box" data-k="now"><b>Orders</b><i style="width:80%"></i><i style="width:60%"></i><i style="width:70%"></i><div class="ov" hidden=""><span class="ring"></span></div></div><span class="cnt">flashes: <b>0</b></span></div>
      <div class="pane"><span class="cap">Delayed spinner<small>after 300 ms, kept 500 ms</small></span><div class="box" data-k="late"><b>Orders</b><i style="width:80%"></i><i style="width:60%"></i><i style="width:70%"></i><div class="ov" hidden=""><span class="ring"></span></div></div><span class="cnt">flashes: <b>0</b></span></div>
    </div>
    <div class="bar"><span>A flash is a spinner seen for under 300 ms</span><button class="act" type="button">Refresh</button></div>
  </div>
```

### CSS

```css
:root { --display: "Bricolage Grotesque",system-ui,sans-serif; --body: "Figtree",system-ui,sans-serif; --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): Bricolage Grotesque, Figtree, JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-dly, .s-dly *, .s-dly *::before, .s-dly *::after { box-sizing: border-box; }
.s-dly { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-dly button { font: inherit; cursor: pointer; }
[hidden] { display: none !important; }
.s-dly,.s-rsv,.s-esum,.s-lbl,.s-pwd,.s-dbl,.s-deb,.s-inl,.s-fcs,.s-back { background: #fff; color: #1f2430; font-size: 12px; padding: 12px 14px; }
.s-dly .two,.s-rsv .two,.s-dbl .two,.s-deb .two,.s-inl .two { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; min-height: 0; }
.s-dly .cap,.s-rsv .cap,.s-dbl .cap,.s-deb .cap,.s-inl .cap { font: 600 11px/1.3 var(--body); color: #1f2430; }
.s-dly .cap small,.s-rsv .cap small,.s-dbl .cap small,.s-deb .cap small,.s-inl .cap small { display: block; font-weight: 400; color: #5f6672; }
.s-dly .act,.s-rsv .act,.s-esum .act,.s-lbl .act,.s-pwd .act,.s-dbl .act,.s-inl .act,.s-fcs .act,.s-back .act { border: 1px solid #1f2430; background: #1f2430; color: #fff; border-radius: 6px; padding: 6px 12px; font: 600 12px var(--body); }
.s-dly .ghost,.s-rsv .ghost,.s-fcs .ghost,.s-back .ghost { border: 1px solid #c9ced8; background: #fff; color: #1f2430; border-radius: 6px; padding: 5px 10px; font: 600 11px var(--body); }
.s-dly { display: grid; grid-template-rows: auto 1fr auto; gap: 8px; }
.s-dly .ctl { display: flex; align-items: center; gap: 8px; font-size: 11.5px; }
.s-dly .ctl input { flex: 1; min-width: 0; accent-color: #3557e0; }
.s-dly .ctl output { font: 600 11.5px var(--mono); min-width: 52px; text-align: right; }
.s-dly .pane { display: grid; grid-template-rows: auto 1fr auto; gap: 5px; min-height: 0; }
.s-dly .box { position: relative; border: 1px solid #e3e6ec; border-radius: 8px; padding: 7px 9px; display: grid; gap: 5px; align-content: start; overflow: hidden; }
.s-dly .box i { display: block; height: 7px; border-radius: 4px; background: #e3e6ec; }
.s-dly .box b { font: 700 13px var(--display); }
.s-dly .ov { position: absolute; inset: 0; display: grid; place-items: center; background: rgba(255,255,255,.88); }
.s-dly .ov[hidden] { display: none; }
.s-dly .ring { width: 18px; height: 18px; border: 2px solid #d3d7df; border-top-color: #3557e0; border-radius: 50%; animation: s2spin .8s linear infinite; }
.s-dly .cnt { font: 11px var(--mono); color: #5f6672; }
.s-dly .bar { display: flex; justify-content: space-between; align-items: center; gap: 8px; color: #5f6672; font-size: 11px; }
@media (prefers-reduced-motion:reduce) {
  .s-dly .ring { animation: none; }
}
@keyframes s2spin {
  to{transform:rotate(360deg)}
}
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // delayed spinner: same response time, two loading policies, real flash count
  (() => {
    const st = $('.s-dly'); if (!st) return;
    const range = $('input', st), out = $('output', st), go = $('.act', st), boxes = $$('.box', st), cnt = $$('.cnt b', st), flashes = [0, 0];
    range.addEventListener('input', () => { out.textContent = range.value + ' ms'; });
    go.addEventListener('click', () => {
      const d = +range.value; go.disabled = true;
      boxes.forEach((box, i) => { const ov = $('.ov', box), t0 = performance.now();
        if (i === 0) { ov.hidden = false; setTimeout(() => { ov.hidden = true; if (performance.now() - t0 < 300) cnt[0].textContent = ++flashes[0]; }, d); }
        else if (d > 300) { setTimeout(() => { ov.hidden = false; const shownAt = performance.now(); setTimeout(() => { ov.hidden = true; if (performance.now() - shownAt < 300) cnt[1].textContent = ++flashes[1]; }, Math.max(d - 300, 500)); }, 300); } });
      setTimeout(() => { go.disabled = false; }, Math.max(d, d > 300 ? 800 : 0) + 50);
    });
  })();
})();
```
