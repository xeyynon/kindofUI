# Claymorphism

Visual styles · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#clay

Puffy, inflated shapes with big rounded corners, soft outer shadows and inner highlights so they look like soft clay. Friendly and playful.

- **Good for:** Kids, education, onboarding, friendly consumer apps
- **Watch out:** Serious B2B tools and data-heavy screens
- **Seen in:** kids' learning apps, onboarding screens, 3D icon packs

## Prompt for an AI assistant

Design this interface in the Claymorphism visual style.

What it is: Puffy, inflated shapes with big rounded corners, soft outer shadows and inner highlights so they look like soft clay. Friendly and playful.
Good for: Kids, education, onboarding, friendly consumer apps.
Watch out: Serious B2B tools and data-heavy screens.
Seen in: kids' learning apps, onboarding screens, 3D icon packs

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
<div class="stage s-clay">
    <div class="c"><span class="ic" style="background:#ffb4c6"></span>Lessons<small>12 left</small></div>
    <div class="c"><span class="ic" style="background:#9fe0c8"></span>Streak<small>7 days</small></div>
    <div class="c"><span class="ic" style="background:#ffd98a"></span>Badges<small>5 earned</small></div>
  </div>
```

### CSS

```css
:root { --body: "Figtree",system-ui,sans-serif; }
/* fonts used (all on Google Fonts): Figtree */
/* base styles the site gives every demo (scoped to this demo) */
.s-clay, .s-clay *, .s-clay *::before, .s-clay *::after { box-sizing: border-box; }
.s-clay { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-clay button { font: inherit; cursor: pointer; }
.s-clay { background: #efe4ff; display: flex; gap: 14px; align-items: center; justify-content: center; flex-wrap: wrap; align-content: center; padding: 12px; font-family: var(--body); color: #3b2a5c; container-type: inline-size; }
.s-clay .c { width: 118px; padding: 12px 12px; border-radius: 30px; background: #fff; text-align: center; box-shadow: 12px 14px 26px rgba(138,99,210,.35),inset -6px -6px 14px rgba(160,120,220,.25),inset 6px 6px 12px #fff; display: grid; gap: 6px; justify-items: center; font-weight: 700; font-size: 13px; }
.s-clay .ic { width: 44px; height: 44px; border-radius: 18px; box-shadow: inset -5px -5px 10px rgba(0,0,0,.15),inset 5px 5px 10px rgba(255,255,255,.6); }
.s-clay small { font-weight: 500; font-size: 11px; color: #7a6a99; }
@container (max-width:300px) {
  .s-clay { gap: 10px; padding: 8px; }
  .s-clay .c { width: 100px; padding: 9px 8px; gap: 4px; font-size: 12px; }
  .s-clay .ic { width: 34px; height: 34px; border-radius: 14px; }
}
```

No JavaScript needed.
