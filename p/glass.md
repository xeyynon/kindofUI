# Glassmorphism

Visual styles · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#glass

Frosted, semi-transparent panels that blur what sits behind them, with a thin light border. Needs a colorful background to work.

- **Good for:** Overlays and controls over rich photos or gradients
- **Watch out:** Plain backgrounds and text-heavy screens; check contrast
- **Seen in:** visionOS, iOS Control Center, Windows 11 Acrylic

## Prompt for an AI assistant

Design this interface in the Glassmorphism visual style.

What it is: Frosted, semi-transparent panels that blur what sits behind them, with a thin light border. Needs a colorful background to work.
Good for: Overlays and controls over rich photos or gradients.
Watch out: Plain backgrounds and text-heavy screens; check contrast.
Seen in: visionOS, iOS Control Center, Windows 11 Acrylic

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
<div class="stage s-glass center">
    <span class="orb o1"></span><span class="orb o2"></span>
    <div class="card">
      <div style="font-size:12px;opacity:.85">Mumbai</div>
      <div class="temp">29°</div>
      <div style="font-size:12px;opacity:.85">Partly cloudy · H 31° L 26°</div>
      <div class="hrs"><span>Now<b>29°</b></span><span>3PM<b>30°</b></span><span>6PM<b>28°</b></span><span>9PM<b>27°</b></span></div>
    </div>
  </div>
```

### CSS

```css
:root { --body: "Figtree",system-ui,sans-serif; }
/* fonts used (all on Google Fonts): Figtree */
/* base styles the site gives every demo (scoped to this demo) */
.s-glass, .s-glass *, .s-glass *::before, .s-glass *::after { box-sizing: border-box; }
.s-glass { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-glass button { font: inherit; cursor: pointer; }
.center { display: grid; place-items: center; }
.s-glass { background: radial-gradient(circle at 18% 28%,#ff6fae 0,transparent 32%),radial-gradient(circle at 82% 18%,#6f8bff 0,transparent 38%),radial-gradient(circle at 62% 88%,#ffcf5c 0,transparent 32%),#191d3a; }
.s-glass .orb { position: absolute; border-radius: 50%; }
.s-glass .o1 { width: 90px; height: 90px; background: #ff9a62; left: 22%; top: 20%; }
.s-glass .o2 { width: 70px; height: 70px; background: #5ee0c8; right: 20%; bottom: 16%; }
.s-glass .card { position: relative; width: min(78%,280px); padding: 18px; border-radius: 20px; background: rgba(255,255,255,.14); border: 1px solid rgba(255,255,255,.4); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); color: #fff; box-shadow: 0 10px 30px rgba(0,0,0,.25); }
.s-glass .temp { font: 300 46px/1 var(--body); }
.s-glass .hrs { display: flex; justify-content: space-between; margin-top: 12px; font-size: 11px; opacity: .9; }
.s-glass .hrs span { display: grid; text-align: center; gap: 2px; }
@supports not ((backdrop-filter:blur(1px)) or (-webkit-backdrop-filter:blur(1px))) {
  .s-glass .card { background: rgba(255,255,255,.3); }
}
```

No JavaScript needed.
