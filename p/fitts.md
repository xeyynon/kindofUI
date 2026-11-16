# Fitts's law

UX laws · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#fitts

The bigger and closer a target is, the faster people can hit it.

- **Good for:** Sizing and placing primary buttons and touch targets
- **Watch out:** Tiny targets far from where the hand already is
- **Seen in:** big checkout buttons, bottom-of-screen mobile actions

## Prompt for an AI assistant

Review my UI against Fitts's law.

What it is: The bigger and closer a target is, the faster people can hit it.
Good for: Sizing and placing primary buttons and touch targets.
Watch out: Tiny targets far from where the hand already is.
Seen in: big checkout buttons, bottom-of-screen mobile actions

For each screen or component I share:
1. Point to the exact places where it breaks this law and say why it matters to the user.
2. Suggest a concrete fix for each one, smallest change first.
3. Apply the fixes in code when I say so, keeping my existing styles.
4. Tell me how to check the result, for example with a quick user test or a measurement.

The kindofui example below shows the law in a small working demo.

## Code

Copy and adapt. The HTML and CSS are scoped to this demo, so they will not touch the page they are pasted into.

### HTML

```html
<div class="stage s-fitts"><div class="vs2">
    <div><span class="lb2 b">Small &amp; far</span><button class="go" data-p="a">Start</button><button class="tg3 sm" data-p="a">OK</button><span class="rs" id="ft-a">Click Start, then OK</span></div>
    <div><span class="lb2 g">Big &amp; near</span><button class="go" data-p="b">Start</button><button class="tg3 bg" data-p="b">OK</button><span class="rs" id="ft-b">Click Start, then OK</span></div>
  </div></div>
```

### CSS

```css
:root { --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-fitts, .s-fitts *, .s-fitts *::before, .s-fitts *::after { box-sizing: border-box; }
.s-fitts { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-fitts button { font: inherit; cursor: pointer; }
.vs2 { display: grid; grid-template-columns: 1fr 1fr; height: 100%; font-size: 11px; color: #1f2430; }
.vs2 > div { padding: 10px 12px; display: grid; gap: 8px; align-content: start; position: relative; min-width: 0; }
.vs2 > div:first-child { background: #fff; border-right: 1px solid #e5e7eb; }
.vs2 > div:last-child { background: #fafafa; }
.vs2 .lb2 { font: 700 10px var(--mono); letter-spacing: .06em; text-transform: uppercase; }
.vs2 .lb2.b { color: #b42318; }
.vs2 .lb2.g { color: #067647; }
.s-fitts .vs2 > div { display: block; }
.s-fitts .go { position: absolute; left: 12px; bottom: 14px; border: 1px solid #cfd5dd; background: #fff; border-radius: 6px; padding: 5px 10px; font-size: 11px; color: #1f2430; }
.s-fitts .tg3 { position: absolute; border: 0; background: #3557e0; color: #fff; border-radius: 5px; font-weight: 700; }
.s-fitts .sm { right: 10px; top: 34px; width: 26px; height: 18px; font-size: 8px; padding: 0; }
.s-fitts .bg { left: 12px; right: 12px; bottom: 50px; height: 44px; font-size: 13px; }
.s-fitts .rs { position: absolute; left: 12px; top: 36px; right: 44px; font: 11px var(--mono); color: #444; }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* ---------- UX laws ---------- */
  (() => { const t0 = {};
    $$('.s-fitts .go').forEach(b => b.addEventListener('click', () => { t0[b.dataset.p] = performance.now(); $('#ft-' + b.dataset.p).textContent = 'Now click OK…'; }));
    $$('.s-fitts .tg3').forEach(b => b.addEventListener('click', () => { const p = b.dataset.p; if (!t0[p]) return; const ms = Math.round(performance.now() - t0[p]); t0[p] = 0; $('#ft-' + p).textContent = `${ms} ms`; }));
  })();
})();
```
