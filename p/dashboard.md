# Dashboard

Layouts · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#dashboard

Sidebar navigation, a top bar with filters, summary numbers first and charts below them.

- **Good for:** Monitoring numbers and acting on them
- **Watch out:** Showing every metric; pick the few that matter
- **Seen in:** Stripe Dashboard, Google Analytics, Shopify admin

## Prompt for an AI assistant

Build this layout for my page: Dashboard.

What it is: Sidebar navigation, a top bar with filters, summary numbers first and charts below them.
Good for: Monitoring numbers and acting on them.
Watch out: Showing every metric; pick the few that matter.
Seen in: Stripe Dashboard, Google Analytics, Shopify admin

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
<div class="stage wf s-dash">
    <div class="side"><i class="on"></i><i></i><i></i><i></i><i></i></div>
    <div class="main">
      <div class="tbar"><b>Overview</b><span style="color:#888">Last 30 days ▾</span></div>
      <div class="kpis">
        <div class="kpi bx"><span style="color:#777">Revenue</span><strong>₹4.2L</strong><span class="up">▲ 12%</span></div>
        <div class="kpi bx"><span style="color:#777">Orders</span><strong>1,284</strong><span class="up">▲ 4%</span></div>
        <div class="kpi bx"><span style="color:#777">Refunds</span><strong>0.8%</strong><span class="dn">▲ 0.2%</span></div>
      </div>
      <div class="chart bx"><i style="height:35%"></i><i style="height:50%"></i><i style="height:42%"></i><i style="height:60%"></i><i style="height:55%"></i><i style="height:72%"></i><i style="height:66%"></i><i style="height:80%"></i><i style="height:74%"></i><i style="height:92%"></i></div>
    </div>
  </div>
```

### CSS

```css
:root { --body: "Figtree",system-ui,sans-serif; }
/* fonts used (all on Google Fonts): Figtree */
/* base styles the site gives every demo (scoped to this demo) */
.s-dash, .s-dash *, .s-dash *::before, .s-dash *::after { box-sizing: border-box; }
.s-dash { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-dash button { font: inherit; cursor: pointer; }
.wf { background: #f3f4f7; color: #2b3040; }
.bx { background: #fff; border: 1px solid #dfe3ea; border-radius: 6px; }
.s-dash { display: grid; grid-template-columns: 46px 1fr; font-size: 11px; }
.s-dash .side { background: #1e2230; display: grid; align-content: start; gap: 14px; padding: 14px 0; justify-items: center; }
.s-dash .side i { width: 18px; height: 18px; border-radius: 5px; background: #3a4158; }
.s-dash .side i.on { background: #6c8cff; }
.s-dash .main { padding: 12px; display: grid; gap: 10px; grid-template-rows: auto auto 1fr; min-width: 0; }
.s-dash .tbar { display: flex; justify-content: space-between; align-items: center; }
.s-dash .tbar b { font-size: 14px; }
.s-dash .kpis { display: grid; grid-template-columns: repeat(3,1fr); gap: 8px; }
.s-dash .kpi { padding: 8px; display: grid; gap: 2px; min-width: 0; }
.s-dash .kpi strong { font: 700 16px var(--body); font-variant-numeric: tabular-nums; }
.s-dash .up { color: #16a34a; }
.s-dash .dn { color: #dc2626; }
.s-dash .chart { padding: 10px; display: flex; align-items: end; gap: 6px; min-height: 0; }
.s-dash .chart i { flex: 1; background: #6c8cff; border-radius: 3px 3px 0 0; }
.s-dash .chart i:last-child { background: #2541c9; }
```

No JavaScript needed.
