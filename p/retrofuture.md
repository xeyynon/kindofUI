# Retro-futurism

Visual styles · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#retrofuture

The future as imagined in the 1950s and 60s: atoms, starbursts, boomerang shapes, cream, orange and teal.

- **Good for:** Travel, events, brand campaigns with a story
- **Watch out:** Utility apps where the theme gets in the way
- **Seen in:** travel posters, theme parks, brand campaigns

## Prompt for an AI assistant

Design this interface in the Retro-futurism visual style.

What it is: The future as imagined in the 1950s and 60s: atoms, starbursts, boomerang shapes, cream, orange and teal.
Good for: Travel, events, brand campaigns with a story.
Watch out: Utility apps where the theme gets in the way.
Seen in: travel posters, theme parks, brand campaigns

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
<div class="stage s-rf">
    <svg class="atom" viewBox="0 0 120 120" aria-hidden="true"><g fill="none" stroke="#1d3c45" stroke-width="3"><ellipse cx="60" cy="60" rx="54" ry="18"></ellipse><ellipse cx="60" cy="60" rx="54" ry="18" transform="rotate(60 60 60)"></ellipse><ellipse cx="60" cy="60" rx="54" ry="18" transform="rotate(120 60 60)"></ellipse></g><circle cx="60" cy="60" r="10" fill="#e8743b"></circle></svg>
    <div><small>WORLD'S FAIR · 1962</small><h4 role="none">The Home of Tomorrow</h4><p>Push-button kitchens. Rocket-speed travel. Living, made modern.</p><button>Book a tour</button></div>
    <span class="star"></span>
  </div>
```

### CSS

```css
:root { --display: "Bricolage Grotesque",system-ui,sans-serif; --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): Bricolage Grotesque, JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-rf, .s-rf *, .s-rf *::before, .s-rf *::after { box-sizing: border-box; }
.s-rf { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-rf button { font: inherit; cursor: pointer; }
.s-rf { background: #f3e9d2; color: #1d3c45; display: grid; grid-template-columns: 110px 1fr; align-items: center; gap: 16px; padding: 0 20px; }
.s-rf .atom { width: 110px; height: 110px; animation: spin 14s linear infinite; }
.s-rf small { font: 700 10px var(--mono); letter-spacing: .15em; color: #e8743b; }
.s-rf h4 { font: 800 26px/1 var(--display); font-style: italic; margin: 4px 0 6px; }
.s-rf p { margin: 0 0 10px; font-size: 12px; }
.s-rf button { border: 0; background: #2a9d8f; color: #fff; font-weight: 700; padding: 8px 16px; border-radius: 999px 999px 999px 4px; }
.s-rf .star { position: absolute; right: 18px; top: 18px; width: 40px; height: 40px; background: #e8743b; clip-path: polygon(50% 0,58% 40%,100% 50%,58% 60%,50% 100%,42% 60%,0 50%,42% 40%); }
@keyframes spin {
  to{transform:rotate(1turn)}
}
```

No JavaScript needed.
