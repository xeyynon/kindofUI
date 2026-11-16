# A/B testing

Process and methods · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#abtest

Show two versions to similar groups of real users and keep the one that performs better, only once the result is statistically reliable.

- **Good for:** Choosing between two options with real data
- **Watch out:** Small samples or stopping tests early
- **Seen in:** Booking.com, Amazon, Optimizely, GrowthBook

## Prompt for an AI assistant

Help me use A/B testing on my project.

What it is: Show two versions to similar groups of real users and keep the one that performs better, only once the result is statistically reliable.
Good for: Choosing between two options with real data.
Watch out: Small samples or stopping tests early.
Seen in: Booking.com, Amazon, Optimizely, GrowthBook

Steps:
1. Ask me the few questions you need about my product and users first.
2. Walk me through the method step by step for my case, not in general.
3. Produce the outputs the method needs (for example notes, a table or a checklist) in plain text I can share.
4. Tell me what to do next and how to know it worked.

The kindofui example below shows the method in a small working demo.

## Code

Copy and adapt. The HTML and CSS are scoped to this demo, so they will not touch the page they are pasted into.

### HTML

```html
<div class="stage s-ab">
    <div class="vr"><div class="hd3"><b>A · Control</b></div><button class="ba">Sign up</button><div class="mt3"><span>5,000 visitors</span><span>210 sign-ups</span></div><div class="cr2"><i style="width:42%"></i><b>4.2%</b></div></div>
    <div class="vr win"><div class="hd3"><b>B · Variant</b><em>Winner</em></div><button class="bb">Start free, no card needed</button><div class="mt3"><span>5,000 visitors</span><span>260 sign-ups</span></div><div class="cr2"><i style="width:52%"></i><b>5.2%</b></div></div>
    <div class="res"><b>+23.8% lift</b> · about 98% confidence (two-sided z-test)</div>
  </div>
```

### CSS

```css
:root { --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-ab, .s-ab *, .s-ab *::before, .s-ab *::after { box-sizing: border-box; }
.s-ab { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-ab button { font: inherit; cursor: pointer; }
.s-ab { background: #fff; color: #1f2430; padding: 14px; display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr auto; gap: 10px; font-size: 11px; }
.s-ab .vr { border: 1px solid #e3e6ec; border-radius: 10px; padding: 10px; display: grid; gap: 8px; align-content: start; min-width: 0; }
.s-ab .vr.win { border: 2px solid #16a34a; }
.s-ab .hd3 { display: flex; justify-content: space-between; align-items: center; gap: 4px; }
.s-ab .hd3 span { color: #888; }
.s-ab em { font-style: normal; background: #16a34a; color: #fff; border-radius: 999px; padding: 1px 7px; font-size: 9px; font-weight: 700; }
.s-ab .ba,.s-ab .bb { border: 0; border-radius: 6px; padding: 8px; font-weight: 600; font-size: 11px; color: #fff; }
.s-ab .ba { background: #9ca3af; }
.s-ab .bb { background: #16a34a; }
.s-ab .mt3 { display: grid; color: #666; font-variant-numeric: tabular-nums; }
.s-ab .cr2 { display: flex; align-items: center; gap: 6px; }
.s-ab .cr2 i { height: 8px; background: #3557e0; border-radius: 4px; }
.s-ab .win .cr2 i { background: #16a34a; }
.s-ab .cr2 b { font: 700 13px var(--mono); }
.s-ab .res { grid-column: 1/-1; background: #f0fdf4; color: #166534; border-radius: 8px; padding: 8px 10px; text-align: center; }
```

No JavaScript needed.
