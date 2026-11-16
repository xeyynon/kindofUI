# Memphis

Visual styles · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#memphis

1980s-inspired chaos: squiggles, triangles, dot patterns and clashing bright colors. Fun and attention-grabbing.

- **Good for:** Events, festivals, youth campaigns
- **Watch out:** Long-term product UI; it tires the eye
- **Seen in:** event posters, music festival sites, youth brands

## Prompt for an AI assistant

Design this interface in the Memphis visual style.

What it is: 1980s-inspired chaos: squiggles, triangles, dot patterns and clashing bright colors. Fun and attention-grabbing.
Good for: Events, festivals, youth campaigns.
Watch out: Long-term product UI; it tires the eye.
Seen in: event posters, music festival sites, youth brands

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
<div class="stage s-memphis">
    <svg viewBox="0 0 400 290" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <path d="M20 60 q15 -20 30 0 t30 0 t30 0 t30 0" fill="none" stroke="#ff5c8a" stroke-width="6" stroke-linecap="round"></path>
      <polygon points="320,30 360,95 280,95" fill="#3ec1d3"></polygon>
      <circle cx="70" cy="220" r="34" fill="#ffd23f"></circle>
      <rect x="300" y="190" width="60" height="60" fill="none" stroke="#111" stroke-width="5" transform="rotate(20 330 220)"></rect>
      <path d="M150 260 l20 -20 l20 20 l20 -20 l20 20" fill="none" stroke="#6a4cff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"></path>
      <rect x="230" y="20" width="10" height="60" fill="#111" transform="rotate(35 235 50)"></rect>
    </svg>
    <div class="box"><h4 role="none">Party Mode</h4><p>Fri 14 Nov · Doors 8 PM</p></div>
  </div>
```

### CSS

```css
:root { --display: "Bricolage Grotesque",system-ui,sans-serif; --body: "Figtree",system-ui,sans-serif; }
/* fonts used (all on Google Fonts): Bricolage Grotesque, Figtree */
/* base styles the site gives every demo (scoped to this demo) */
.s-memphis, .s-memphis *, .s-memphis *::before, .s-memphis *::after { box-sizing: border-box; }
.s-memphis { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-memphis button { font: inherit; cursor: pointer; }
.s-memphis { background: #fff4e6; display: grid; place-items: center; color: #111; background-image: radial-gradient(#111 1.2px,transparent 1.4px); background-size: 16px 16px; }
.s-memphis svg { position: absolute; inset: 0; width: 100%; height: 100%; }
.s-memphis .box { position: relative; background: #fff; border: 3px solid #111; padding: 14px 22px; text-align: center; transform: rotate(-3deg); box-shadow: 8px 8px 0 #ff5c8a; }
.s-memphis h4 { font: 800 28px/1 var(--display); margin: 0; }
.s-memphis p { margin: 4px 0 0; font: 600 12px var(--body); }
```

No JavaScript needed.
