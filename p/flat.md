# Flat design

Visual styles · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#flat

Solid colors, no shadows, no gradients, no textures. Simple icons and crisp shapes.

- **Good for:** Icons, dashboards, simple informative UIs
- **Watch out:** Hiding what is clickable; add hover and focus cues
- **Seen in:** Windows 8 Metro, early iOS 7, Microsoft Office icons

## Prompt for an AI assistant

Design this interface in the Flat design visual style.

What it is: Solid colors, no shadows, no gradients, no textures. Simple icons and crisp shapes.
Good for: Icons, dashboards, simple informative UIs.
Watch out: Hiding what is clickable; add hover and focus cues.
Seen in: Windows 8 Metro, early iOS 7, Microsoft Office icons

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
<div class="stage s-flat">
    <div class="w2 h2" style="background:#1e88e5"><i>✉</i><span>Mail · 3 new</span></div>
    <div style="background:#fb8c00"><i>☀</i><span>31°</span></div>
    <div style="background:#43a047"><i>♫</i><span>Music</span></div>
    <div class="w2" style="background:#8e24aa"><i>◷</i><span>Meeting at 10:30</span></div>
    <div style="background:#e53935"><i>⌂</i><span>Home</span></div>
    <div style="background:#00897b"><i>✎</i><span>Notes</span></div>
    <div class="w2" style="background:#3949ab"><i>☷</i><span>Calendar</span></div>
  </div>
```

### CSS

```css
/* base styles the site gives every demo (scoped to this demo) */
.s-flat, .s-flat *, .s-flat *::before, .s-flat *::after { box-sizing: border-box; }
.s-flat { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-flat button { font: inherit; cursor: pointer; }
.s-flat { background: #263238; padding: 12px; display: grid; grid-template-columns: repeat(4,1fr); grid-template-rows: repeat(3,1fr); gap: 6px; color: #fff; font-family: "Segoe UI",system-ui,sans-serif; }
.s-flat div { padding: 8px; display: flex; flex-direction: column; justify-content: space-between; font-size: 11px; }
.s-flat i { font-style: normal; font-size: 22px; line-height: 1; }
.s-flat .w2 { grid-column: span 2; }
.s-flat .h2 { grid-row: span 2; }
```

No JavaScript needed.
