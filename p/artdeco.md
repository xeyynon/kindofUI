# Art Deco

Visual styles · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#artdeco

Gold on deep navy or black, fan and sunburst patterns, double borders, symmetry and tall, elegant capitals.

- **Good for:** Hotels, restaurants, luxury, events, invitations
- **Watch out:** Fast utility apps and casual brands
- **Seen in:** hotels, cocktail bars, luxury brands, wedding invitations

## Prompt for an AI assistant

Design this interface in the Art Deco visual style.

What it is: Gold on deep navy or black, fan and sunburst patterns, double borders, symmetry and tall, elegant capitals.
Good for: Hotels, restaurants, luxury, events, invitations.
Watch out: Fast utility apps and casual brands.
Seen in: hotels, cocktail bars, luxury brands, wedding invitations

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
<div class="stage s-deco"><span class="fan"></span><div class="box"><small>EST. 1928</small><h4 role="none">THE GRAND</h4><span>BALLROOM · BAR · SUPPER CLUB</span><button>RESERVE A TABLE</button></div></div>
```

### CSS

```css
:root { --body: "Figtree",system-ui,sans-serif; }
/* fonts used (all on Google Fonts): Figtree, Poiret One */
/* base styles the site gives every demo (scoped to this demo) */
.s-deco, .s-deco *, .s-deco *::before, .s-deco *::after { box-sizing: border-box; }
.s-deco { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-deco button { font: inherit; cursor: pointer; }
.s-deco { background: #0f1b2d; color: #d4af37; display: grid; place-items: center; text-align: center; }
.s-deco .fan { position: absolute; left: 50%; bottom: -170px; width: 400px; height: 400px; margin-left: -200px; border-radius: 50%; background: repeating-conic-gradient(rgba(212,175,55,.45) 0 1.5deg,transparent 1.5deg 10deg); -webkit-mask: radial-gradient(circle,transparent 0 30%,#000 30.5% 70%,transparent 70.5%); mask: radial-gradient(circle,transparent 0 30%,#000 30.5% 70%,transparent 70.5%); }
.s-deco .box { position: relative; background: #0f1b2d; border: 2px solid #d4af37; outline: 1px solid #d4af37; outline-offset: 5px; padding: 16px 24px; display: grid; gap: 6px; justify-items: center; }
.s-deco h4 { margin: 0; font: 400 32px/1 "Poiret One",Georgia,serif; letter-spacing: .22em; }
.s-deco .box small,.s-deco .box span { font: 500 10px var(--body); letter-spacing: .3em; }
.s-deco button { margin-top: 6px; background: #d4af37; color: #0f1b2d; border: 0; padding: 7px 14px; font: 700 10px var(--body); letter-spacing: .2em; }
```

No JavaScript needed.
