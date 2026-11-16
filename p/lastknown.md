# Last known value (stale-while-revalidate)

Components and UX patterns · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#lastknown

While fresh data loads, keep showing the data from last time with a small "Updating" note and when it was last updated, then change the numbers in place. People keep reading instead of waiting, and nothing jumps.

- **Good for:** Dashboards, inboxes and lists that refresh data people already see
- **Watch out:** First load, when there is nothing to show yet; use a skeleton
- **Seen in:** email inboxes, analytics dashboards, apps built with SWR or TanStack Query

## Prompt for an AI assistant

Build this UI pattern for my app: Last known value (stale-while-revalidate).

What it is: While fresh data loads, keep showing the data from last time with a small "Updating" note and when it was last updated, then change the numbers in place. People keep reading instead of waiting, and nothing jumps.
Good for: Dashboards, inboxes and lists that refresh data people already see.
Watch out: First load, when there is nothing to show yet; use a skeleton.
Seen in: email inboxes, analytics dashboards, apps built with SWR or TanStack Query

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
<div class="stage s-lkv">
    <div class="lk-row" data-lk="spin"><span class="lk-lbl">Spinner<small>nothing to read<b>0 s</b></small></span><div class="lk-tile"><div class="lk-top"><span>Orders today</span><span class="lk-when"></span></div><div class="lk-num">1,284</div><div class="lk-sub">₹4.21L revenue</div></div></div>
    <div class="lk-row" data-lk="skel"><span class="lk-lbl">Skeleton<small>nothing to read<b>0 s</b></small></span><div class="lk-tile"><div class="lk-top"><span>Orders today</span><span class="lk-when"></span></div><div class="lk-num">1,284</div><div class="lk-sub">₹4.21L revenue</div></div></div>
    <div class="lk-row" data-lk="last"><span class="lk-lbl">Last known value<small>nothing to read<b>0 s</b></small></span><div class="lk-tile"><div class="lk-top"><span>Orders today</span><span class="lk-when">2 min ago</span></div><div class="lk-num">1,284</div><div class="lk-sub">₹4.21L revenue</div></div></div>
    <div class="lk-bar"><span>Slow network: each refresh takes 1.6 s</span><button class="lk-btn" type="button">Refresh</button></div>
  </div>
```

### CSS

```css
:root { --display: "Bricolage Grotesque",system-ui,sans-serif; --body: "Figtree",system-ui,sans-serif; --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): Bricolage Grotesque, Figtree, JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-lkv, .s-lkv *, .s-lkv *::before, .s-lkv *::after { box-sizing: border-box; }
.s-lkv { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-lkv button { font: inherit; cursor: pointer; }
.s-lkv { background: #fff; color: #1f2430; display: grid; grid-template-rows: repeat(3,minmax(0,1fr)) auto; gap: 8px; padding: 12px 14px; font-size: 12px; }
.s-lkv .lk-row { display: grid; grid-template-columns: 84px minmax(0,1fr); gap: 10px; align-items: center; min-height: 0; }
.s-lkv .lk-lbl { display: grid; gap: 2px; font-weight: 600; font-size: 12px; line-height: 1.25; }
.s-lkv .lk-lbl small { display: grid; font: 10px/1.3 var(--mono); color: #5f6672; font-weight: 400; }
.s-lkv .lk-lbl small b { color: #1f2430; font-weight: 600; }
@media (max-width:420px) {
  .s-lkv .lk-row { grid-template-columns: 72px minmax(0,1fr); gap: 8px; }
  .s-lkv .lk-tile { padding: 6px 8px; }
  .s-lkv .lk-top { font-size: 10px; }
}
.s-lkv .lk-tile { border: 1px solid #e3e6ec; border-radius: 8px; padding: 6px 10px; height: 60px; display: grid; align-content: center; gap: 1px; overflow: hidden; }
.s-lkv .lk-top { display: flex; justify-content: space-between; align-items: center; gap: 8px; color: #5f6672; font-size: 10.5px; white-space: nowrap; }
.s-lkv .lk-num { font: 700 18px/1.15 var(--display); font-variant-numeric: tabular-nums; transition: color 1.2s; }
.s-lkv .lk-num.chg { color: #3557e0; transition: none; }
.s-lkv .lk-sub { color: #5f6672; font-size: 10.5px; font-variant-numeric: tabular-nums; }
.s-lkv .lk-mid { display: grid; place-items: center; height: 100%; }
.s-lkv .lk-ring { display: inline-block; width: 16px; height: 16px; border: 2px solid #d3d7df; border-top-color: #3557e0; border-radius: 50%; animation: lkspin .8s linear infinite; }
.s-lkv .lk-top .lk-ring { width: 10px; height: 10px; border-width: 1.5px; margin-right: 4px; vertical-align: -1px; }
.s-lkv .lk-sk { display: block; height: 8px; border-radius: 4px; background: linear-gradient(90deg,#eceef2 25%,#f6f7f9 50%,#eceef2 75%); background-size: 200% 100%; animation: lkshine 1.2s linear infinite; }
.s-lkv .lk-bar { display: flex; justify-content: space-between; align-items: center; gap: 10px; color: #5f6672; font-size: 10.5px; }
.s-lkv .lk-btn { border: 1px solid #c9ced8; background: #fff; color: #1f2430; border-radius: 6px; padding: 5px 12px; font: 600 12px var(--body); flex: none; }
.s-lkv .lk-btn:disabled { opacity: .55; cursor: progress; }
@media (prefers-reduced-motion:reduce) {
  .s-lkv .lk-ring,.s-lkv .lk-sk { animation: none; }
  .s-lkv .lk-num { transition: none; }
}
@keyframes lkspin {
  to{transform:rotate(360deg)}
}
@keyframes lkshine {
  to{background-position:-200% 0}
}
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // last known value vs spinner vs skeleton: same data, same slow network, measured time with nothing to read
  (() => {
    const st = $('.s-lkv'); if (!st) return;
    const btn = $('.lk-btn', st), rows = $$('.lk-row', st), DELAY = 1600;
    const calm = matchMedia('(prefers-reduced-motion: reduce)');
    let orders = 1284, rev = 4.21, busy = false;
    const fmt = n => n.toLocaleString('en-IN');
    const tile = (r, o, v, when) => { $('.lk-tile', r).innerHTML = `<div class="lk-top"><span>Orders today</span><span class="lk-when">${when}</span></div><div class="lk-num">${fmt(o)}</div><div class="lk-sub">₹${v.toFixed(2)}L revenue</div>`; };
    const blank = (r, ms) => { $('.lk-lbl small b', r).textContent = ms ? (ms / 1000).toFixed(1) + ' s' : '0 s'; };
    btn.addEventListener('click', () => {
      if (busy) return; busy = true; btn.disabled = true; btn.textContent = 'Refreshing';
      const t0 = performance.now(), next = [orders + 13 + Math.floor(Math.random() * 9), rev + 0.04 + Math.random() * 0.04];
      rows.forEach(r => {
        const k = r.dataset.lk, t = $('.lk-tile', r);
        if (k === 'spin') t.innerHTML = '<div class="lk-mid"><span class="lk-ring" role="img" aria-label="Loading"></span></div>';
        if (k === 'skel') t.innerHTML = '<span class="lk-sk" style="width:40%"></span><span class="lk-sk" style="width:55%;height:14px"></span><span class="lk-sk" style="width:35%"></span>';
        if (k === 'last') $('.lk-when', r).innerHTML = '<span class="lk-ring" aria-hidden="true"></span>Updating';
      });
      setTimeout(() => {
        const ms = performance.now() - t0; [orders, rev] = next;
        rows.forEach(r => {
          const k = r.dataset.lk;
          if (k === 'last') {
            const n = $('.lk-num', r); n.textContent = fmt(orders); $('.lk-sub', r).textContent = '₹' + rev.toFixed(2) + 'L revenue'; $('.lk-when', r).textContent = 'Just updated';
            if (!calm.matches) { n.classList.add('chg'); requestAnimationFrame(() => requestAnimationFrame(() => n.classList.remove('chg'))); }
            blank(r, 0);
          } else { tile(r, orders, rev, ''); blank(r, ms); }
        });
        busy = false; btn.disabled = false; btn.textContent = 'Refresh';
      }, DELAY);
    });
  })();
})();
```
