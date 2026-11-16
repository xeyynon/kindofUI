# Von Restorff effect

UX laws · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#vonrestorff

The item that looks different from the rest is the one people remember and notice first. Highlight only what matters most.

- **Good for:** Highlighting the one thing that matters most
- **Watch out:** Highlighting everything, so nothing stands out
- **Seen in:** "Most popular" pricing plans, primary buttons

## Prompt for an AI assistant

Review my UI against Von Restorff effect.

What it is: The item that looks different from the rest is the one people remember and notice first. Highlight only what matters most.
Good for: Highlighting the one thing that matters most.
Watch out: Highlighting everything, so nothing stands out.
Seen in: "Most popular" pricing plans, primary buttons

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
<div class="stage s-vr"><div class="vs2">
    <div><span class="lb2 b">All the same</span><div class="pl"><span>Basic <b>₹199</b></span><span>Plus <b>₹499</b></span><span>Pro <b>₹999</b></span></div></div>
    <div><span class="lb2 g">One stands out</span><div class="pl"><span>Basic <b>₹199</b></span><span class="hl">Plus <em>Best value</em><b>₹499</b></span><span>Pro <b>₹999</b></span></div></div>
  </div></div>
```

### CSS

```css
:root { --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-vr, .s-vr *, .s-vr *::before, .s-vr *::after { box-sizing: border-box; }
.s-vr { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-vr button { font: inherit; cursor: pointer; }
.vs2 { display: grid; grid-template-columns: 1fr 1fr; height: 100%; font-size: 11px; color: #1f2430; }
.vs2 > div { padding: 10px 12px; display: grid; gap: 8px; align-content: start; position: relative; min-width: 0; }
.vs2 > div:first-child { background: #fff; border-right: 1px solid #e5e7eb; }
.vs2 > div:last-child { background: #fafafa; }
.vs2 .lb2 { font: 700 10px var(--mono); letter-spacing: .06em; text-transform: uppercase; }
.vs2 .lb2.b { color: #b42318; }
.vs2 .lb2.g { color: #067647; }
.s-vr .vs2 > div { align-content: center; }
.s-vr .pl { display: grid; gap: 6px; }
.s-vr .pl span { background: #fff; border: 1px solid #e3e6ec; border-radius: 6px; padding: 9px 10px; font-weight: 600; display: flex; justify-content: space-between; align-items: center; gap: 4px; }
.s-vr .pl .hl { background: #3557e0; color: #fff; border-color: #3557e0; transform: scale(1.05); box-shadow: 0 6px 14px rgba(53,87,224,.3); }
.s-vr .pl em { font-style: normal; font-size: 9px; background: #fff; color: #3557e0; border-radius: 999px; padding: 1px 6px; white-space: nowrap; }
```

No JavaScript needed.
