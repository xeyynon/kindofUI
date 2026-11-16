# Nielsen's 10 heuristics

UX laws · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#nielsen

Jakob Nielsen's ten rules of thumb for usable interfaces. Teams use them as a checklist for quick design reviews.

- **Good for:** Quick heuristic reviews of any interface
- **Watch out:** Replacing testing with real users
- **Seen in:** UX audits and design reviews everywhere

## Prompt for an AI assistant

Review my UI against Nielsen's 10 heuristics.

What it is: Jakob Nielsen's ten rules of thumb for usable interfaces. Teams use them as a checklist for quick design reviews.
Good for: Quick heuristic reviews of any interface.
Watch out: Replacing testing with real users.
Seen in: UX audits and design reviews everywhere

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
<div class="stage s-nh"><ol>
    <li><b>Visibility of system status</b>Keep people informed</li><li><b>Match the real world</b>Use their words</li>
    <li><b>User control and freedom</b>Easy undo and exit</li><li><b>Consistency and standards</b>Same thing, same look</li>
    <li><b>Error prevention</b>Stop mistakes early</li><li><b>Recognition over recall</b>Show options, don't make them remember</li>
    <li><b>Flexibility and efficiency</b>Shortcuts for experts</li><li><b>Minimalist design</b>Only what's needed</li>
    <li><b>Help users recover from errors</b>Plain-language fixes</li><li><b>Help and documentation</b>Easy to search</li>
  </ol></div>
```

### CSS

```css
:root { --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-nh, .s-nh *, .s-nh *::before, .s-nh *::after { box-sizing: border-box; }
.s-nh { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-nh button { font: inherit; cursor: pointer; }
.s-nh { background: #fff; color: #1f2430; padding: 9px; font-size: 10px; container-type: inline-size; }
.s-nh ol { margin: 0; padding: 0; list-style: none; display: grid; grid-template-columns: 1fr 1fr; gap: 4px; counter-reset: h; }
.s-nh li { counter-increment: h; background: #f7f8fa; border-radius: 6px; padding: 3px 6px 3px 21px; position: relative; display: grid; align-content: center; color: #666; line-height: 1.2; }
.s-nh li::before { content: counter(h); position: absolute; left: 6px; top: 3px; font: 700 11px var(--mono); color: #3557e0; }
.s-nh li b { color: #1f2430; font-size: 11px; }
@container (max-width:300px) {
  .s-nh li { font-size: 0; line-height: 0; padding-block: 4px; }
  .s-nh li b { font-size: 10.5px; line-height: 1.2; }
  .s-nh li::before { top: 4px; }
}
```

No JavaScript needed.
