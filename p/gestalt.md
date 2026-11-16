# Gestalt principles

UX laws · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#gestalt

How the eye groups things: by closeness, by similar looks, by filling gaps, and by shared containers. Use them to group content without extra lines.

- **Good for:** Grouping with space, color and shared boxes
- **Watch out:** Random spacing that groups the wrong things
- **Seen in:** every well-spaced form, card and dashboard

## Prompt for an AI assistant

Review my UI against Gestalt principles.

What it is: How the eye groups things: by closeness, by similar looks, by filling gaps, and by shared containers. Use them to group content without extra lines.
Good for: Grouping with space, color and shared boxes.
Watch out: Random spacing that groups the wrong things.
Seen in: every well-spaced form, card and dashboard

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
<div class="stage s-gest">
    <figure><div class="px"><span><i></i><i></i><i></i><i></i></span><span><i></i><i></i><i></i><i></i></span></div><figcaption><b>Proximity</b>Close items read as a group</figcaption></figure>
    <figure><div class="sim"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><figcaption><b>Similarity</b>Same look = same kind</figcaption></figure>
    <figure><div class="cl"></div><figcaption><b>Closure</b>We see a full circle</figcaption></figure>
    <figure><div class="cr"><i></i><i></i><i></i><i></i></div><figcaption><b>Common region</b>A shared box groups items</figcaption></figure>
  </div>
```

### CSS

```css
/* base styles the site gives every demo (scoped to this demo) */
.s-gest, .s-gest *, .s-gest *::before, .s-gest *::after { box-sizing: border-box; }
.s-gest { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-gest button { font: inherit; cursor: pointer; }
.s-gest { background: #fff; color: #1f2430; display: grid; grid-template-columns: 1fr 1fr; gap: 10px; padding: 14px; font-size: 10.5px; }
.s-gest figure { margin: 0; display: grid; justify-items: center; align-content: center; gap: 8px; text-align: center; background: #f7f8fa; border-radius: 8px; padding: 8px; }
.s-gest figcaption { display: grid; color: #666; }
.s-gest figcaption b { color: #1f2430; font-size: 11px; }
.s-gest .px { display: flex; gap: 20px; }
.s-gest .px span { display: grid; grid-template-columns: repeat(2,10px); gap: 4px; }
.s-gest .px i,.s-gest .cr i { width: 10px; height: 10px; border-radius: 50%; background: #3557e0; }
.s-gest .sim { display: grid; grid-template-columns: repeat(4,10px); gap: 6px; }
.s-gest .sim i { width: 10px; height: 10px; border-radius: 50%; background: #cbd5e1; }
.s-gest .sim i:nth-child(2n) { background: #f59e0b; border-radius: 2px; }
.s-gest .cl { width: 42px; height: 42px; border-radius: 50%; border: 5px dashed #3557e0; }
.s-gest .cr { display: grid; grid-template-columns: repeat(4,10px); gap: 8px; position: relative; }
.s-gest .cr::before { content: ""; position: absolute; left: -5px; top: -5px; width: 38px; height: 20px; border: 1.5px solid #3557e0; border-radius: 6px; }
```

No JavaScript needed.
