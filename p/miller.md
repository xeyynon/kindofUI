# Miller's law (chunking)

UX laws · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#miller

Short-term memory holds only a handful of items, often given as 7 ± 2. Break long numbers and lists into small groups.

- **Good for:** Phone and card numbers, codes, long lists
- **Watch out:** Treating 7 as a hard rule; just chunk and group
- **Seen in:** phone and card number fields, OTP boxes, IFSC and PIN codes

## Prompt for an AI assistant

Review my UI against Miller's law (chunking).

What it is: Short-term memory holds only a handful of items, often given as 7 ± 2. Break long numbers and lists into small groups.
Good for: Phone and card numbers, codes, long lists.
Watch out: Treating 7 as a hard rule; just chunk and group.
Seen in: phone and card number fields, OTP boxes, IFSC and PIN codes

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
<div class="stage s-miller"><div class="vs2">
    <div><span class="lb2 b">One long string</span><code>9876543210</code><code>4821000012345678</code><code>ABCD0001234</code><small>Hard to read back or check</small></div>
    <div><span class="lb2 g">Chunked</span><code>98765 43210</code><code>4821 0000 1234 5678</code><code>ABCD 0001 234</code><small>Small groups are easy to hold in memory</small></div>
  </div></div>
```

### CSS

```css
:root { --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-miller, .s-miller *, .s-miller *::before, .s-miller *::after { box-sizing: border-box; }
.s-miller { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-miller button { font: inherit; cursor: pointer; }
.vs2 { display: grid; grid-template-columns: 1fr 1fr; height: 100%; font-size: 11px; color: #1f2430; }
.vs2 > div { padding: 10px 12px; display: grid; gap: 8px; align-content: start; position: relative; min-width: 0; }
.vs2 > div:first-child { background: #fff; border-right: 1px solid #e5e7eb; }
.vs2 > div:last-child { background: #fafafa; }
.vs2 .lb2 { font: 700 10px var(--mono); letter-spacing: .06em; text-transform: uppercase; }
.vs2 .lb2.b { color: #b42318; }
.vs2 .lb2.g { color: #067647; }
.s-miller .vs2 > div { align-content: center; }
.s-miller code { font: 600 14px var(--mono); background: #fff; border: 1px solid #eee; border-radius: 6px; padding: 8px; overflow-wrap: anywhere; }
.s-miller small { color: #666; font-size: 10px; }
```

No JavaScript needed.
