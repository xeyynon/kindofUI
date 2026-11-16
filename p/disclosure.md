# Progressive disclosure

Components and UX patterns · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#disclosure

Show the few options most people need, and hide the rest behind "Advanced" or "Show more" until someone asks.

- **Good for:** Advanced settings and long forms
- **Watch out:** Hiding options most people need
- **Seen in:** Vercel and Netlify setup, print dialogs, FAQ accordions

## Prompt for an AI assistant

Build this UI pattern for my app: Progressive disclosure.

What it is: Show the few options most people need, and hide the rest behind "Advanced" or "Show more" until someone asks.
Good for: Advanced settings and long forms.
Watch out: Hiding options most people need.
Seen in: Vercel and Netlify setup, print dialogs, FAQ accordions

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
<div class="stage s-prog">
    <label for="pd-name">Project name<input id="pd-name" value="Q4 launch site"></label>
    <label for="pd-vis">Visibility<select id="pd-vis"><option>Private</option><option>Team</option><option>Public</option></select></label>
    <details>
      <summary>Advanced settings</summary>
      <div style="display:grid;gap:8px">
        <div class="two"><label for="pd-region">Region<select id="pd-region"><option>Mumbai</option><option>Singapore</option></select></label><label for="pd-node">Node version<select id="pd-node"><option>22</option><option>20</option></select></label></div>
        <label class="chk" for="pd-cache"><input type="checkbox" id="pd-cache" checked=""> Enable build cache</label>
      </div>
    </details>
  </div>
```

### CSS

```css
:root { --body: "Figtree",system-ui,sans-serif; }
/* fonts used (all on Google Fonts): Figtree */
/* base styles the site gives every demo (scoped to this demo) */
.s-prog, .s-prog *, .s-prog *::before, .s-prog *::after { box-sizing: border-box; }
.s-prog { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-prog button { font: inherit; cursor: pointer; }
.s-prog { background: #fff; color: #1f2430; padding: 16px 18px; display: grid; gap: 9px; align-content: start; font-size: 12px; overflow: auto; }
.s-prog label { display: grid; gap: 3px; font-weight: 600; }
.s-prog input,.s-prog select { border: 1px solid #cfd5dd; border-radius: 6px; padding: 6px 8px; font: 400 12px var(--body); width: 100%; }
.s-prog details { border: 1px solid #e3e6ec; border-radius: 8px; padding: 8px 10px; }
.s-prog summary { cursor: pointer; color: #3557e0; font-weight: 600; }
.s-prog details[open] summary { margin-bottom: 8px; }
.s-prog .two { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
.s-prog .chk { display: flex; gap: 6px; align-items: center; font-weight: 400; }
.s-prog .chk input { width: auto; }
```

No JavaScript needed.
