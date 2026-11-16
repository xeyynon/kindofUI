# Mega menu

Navigation · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#mega

A wide dropdown that shows many grouped links at once, often with a promo tile. Used when a site has lots of sections.

- **Good for:** Large sites with many categories
- **Watch out:** Small sites; a simple menu is faster
- **Seen in:** Amazon, Adobe, Microsoft, big retail sites

## Prompt for an AI assistant

Build this navigation pattern for my app: Mega menu.

What it is: A wide dropdown that shows many grouped links at once, often with a promo tile. Used when a site has lots of sections.
Good for: Large sites with many categories.
Watch out: Small sites; a simple menu is faster.
Seen in: Amazon, Adobe, Microsoft, big retail sites

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
<div class="stage s-mega">
    <div class="nv"><b>Studio</b><span class="on">Products ▾</span><span>Solutions</span><span>Pricing</span></div>
    <div class="panel">
      <div><h5 role="none">Create</h5><ul><li>Photo editor</li><li>Video editor</li><li>Illustration</li><li>3D</li></ul></div>
      <div><h5 role="none">Share</h5><ul><li>Portfolio</li><li>Stock</li><li>Fonts</li><li>Libraries</li></ul></div>
      <div class="promo"><b>New: AI fill</b><span style="font-size:11px">Remove objects in one click →</span></div>
    </div>
  </div>
```

### CSS

```css
:root { --display: "Bricolage Grotesque",system-ui,sans-serif; --body: "Figtree",system-ui,sans-serif; }
/* fonts used (all on Google Fonts): Bricolage Grotesque, Figtree */
/* base styles the site gives every demo (scoped to this demo) */
.s-mega, .s-mega *, .s-mega *::before, .s-mega *::after { box-sizing: border-box; }
.s-mega { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-mega button { font: inherit; cursor: pointer; }
.s-mega { background: #f6f7f9; font-size: 12px; color: #1f2430; }
.s-mega .nv { background: #fff; display: flex; gap: 16px; align-items: center; padding: 10px 14px; border-bottom: 1px solid #e5e7eb; }
.s-mega .nv b { font-family: var(--display); margin-right: 6px; }
.s-mega .nv span.on { color: #3557e0; font-weight: 600; }
.s-mega .panel { margin: 0 10px; background: #fff; border: 1px solid #e5e7eb; border-top: 0; border-radius: 0 0 10px 10px; box-shadow: 0 14px 30px rgba(0,0,0,.08); display: grid; grid-template-columns: repeat(3,1fr); gap: 12px; padding: 14px; }
.s-mega .panel h5 { margin: 0 0 6px; font: 700 10px var(--body); letter-spacing: .1em; text-transform: uppercase; color: #888; }
.s-mega .panel ul { list-style: none; margin: 0; padding: 0; display: grid; gap: 5px; }
.s-mega .promo { background: linear-gradient(150deg,#3557e0,#7c3aed); color: #fff; border-radius: 8px; padding: 10px; display: flex; flex-direction: column; justify-content: space-between; }
```

No JavaScript needed.
