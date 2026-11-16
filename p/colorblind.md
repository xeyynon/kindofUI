# Color-blind safe design

Accessibility and motion · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#colorblind

About 1 in 12 men has some color blindness. Never use color alone; add labels, patterns or icons. Turn on the simulation to see the difference.

- **Good for:** Charts, status colors, maps
- **Watch out:** Red vs green as the only signal
- **Seen in:** GitHub color-blind themes, Tableau palettes, transit maps

## Prompt for an AI assistant

Make my UI follow this accessibility and motion practice: Color-blind safe design.

What it is: About 1 in 12 men has some color blindness. Never use color alone; add labels, patterns or icons. Turn on the simulation to see the difference.
Good for: Charts, status colors, maps.
Watch out: Red vs green as the only signal.
Seen in: GitHub color-blind themes, Tableau palettes, transit maps

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
<div class="stage s-cb"><div class="vs2">
    <div><span class="lb2 b">Red vs green only</span><div class="ch rg"><i style="height:70%"></i><i style="height:45%"></i><i style="height:85%"></i><i style="height:55%"></i></div><small>Profit / loss by color only</small></div>
    <div><span class="lb2 g">Blue vs orange + labels</span><div class="ch bo"><i style="height:70%"><em>+70</em></i><i style="height:45%"><em>−45</em></i><i style="height:85%"><em>+85</em></i><i style="height:55%"><em>−55</em></i></div><small>Color, pattern and labels</small></div>
  </div><button class="sim" id="cb-b" aria-pressed="false">Simulate deuteranopia</button></div>
```

### CSS

```css
:root { --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-cb, .s-cb *, .s-cb *::before, .s-cb *::after { box-sizing: border-box; }
.s-cb { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-cb button { font: inherit; cursor: pointer; }
.vs2 { display: grid; grid-template-columns: 1fr 1fr; height: 100%; font-size: 11px; color: #1f2430; }
.vs2 > div { padding: 10px 12px; display: grid; gap: 8px; align-content: start; position: relative; min-width: 0; }
.vs2 > div:first-child { background: #fff; border-right: 1px solid #e5e7eb; }
.vs2 > div:last-child { background: #fafafa; }
.vs2 .lb2 { font: 700 10px var(--mono); letter-spacing: .06em; text-transform: uppercase; }
.vs2 .lb2.b { color: #b42318; }
.vs2 .lb2.g { color: #067647; }
.s-cb .vs2 > div { padding-bottom: 44px; }
.s-cb .ch { display: flex; gap: 6px; align-items: flex-end; height: 120px; border-bottom: 1px solid #ccc; padding: 14px 4px 0; }
.s-cb .ch i { flex: 1; position: relative; border-radius: 3px 3px 0 0; }
.s-cb .rg i:nth-child(odd) { background: #2fbf4a; }
.s-cb .rg i:nth-child(even) { background: #e5484d; }
.s-cb .bo i:nth-child(odd) { background: #2563eb; }
.s-cb .bo i:nth-child(even) { background: #f59e0b repeating-linear-gradient(45deg,rgba(255,255,255,.45) 0 3px,transparent 3px 6px); }
.s-cb .ch em { position: absolute; top: -14px; left: 0; right: 0; text-align: center; font: 9px var(--mono); font-style: normal; color: #333; }
.s-cb small { color: #555; }
.s-cb .sim { position: absolute; left: 50%; bottom: 12px; transform: translateX(-50%); border: 1px solid #cfd5dd; background: #fff; border-radius: 6px; padding: 5px 12px; font-size: 11px; z-index: 1; color: #1f2430; white-space: nowrap; }
.s-cb .sim[aria-pressed="true"] { background: #1f2430; color: #fff; }
.s-cb.cbs .ch { filter: url(#deut); }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  const on = (sel, ev, fn) => { const el = $(sel); if (el) el.addEventListener(ev, fn); return el; };

  /* ---------- Accessibility & motion ---------- */
  on('#cb-b', 'click', e => { const b = e.currentTarget, st = b.closest('.stage'), v = st.classList.toggle('cbs'); b.setAttribute('aria-pressed', v); b.textContent = v ? 'Show normal vision' : 'Simulate deuteranopia'; });
})();
```
