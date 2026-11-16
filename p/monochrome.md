# Monochrome

Visual styles · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#monochrome

Only black, white and greys. Contrast, size and space do all the work, which makes the product the hero.

- **Good for:** Fashion, photography, premium minimal products
- **Watch out:** Status-heavy UIs that need color for errors
- **Seen in:** fashion labels, photography portfolios, premium tech

## Prompt for an AI assistant

Design this interface in the Monochrome visual style.

What it is: Only black, white and greys. Contrast, size and space do all the work, which makes the product the hero.
Good for: Fashion, photography, premium minimal products.
Watch out: Status-heavy UIs that need color for errors.
Seen in: fashion labels, photography portfolios, premium tech

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
<div class="stage s-mono">
    <div class="l"><svg viewBox="0 0 120 70" aria-hidden="true"><path d="M8 52 C20 50 34 40 44 26 L58 30 C64 40 80 44 104 46 C112 47 114 56 108 60 L14 62 C8 62 6 56 8 52Z" fill="#fff"></path><path d="M14 62 L108 60" stroke="#000" stroke-width="3"></path><path d="M50 34 l6 2 M54 38 l6 2 M58 42 l6 2" stroke="#000" stroke-width="2"></path></svg></div>
    <div class="r"><small>MODEL 01</small><h4 role="none">Everyday Runner</h4><p>One colour. Zero noise.</p><b>₹6,999</b><button>Add to bag</button></div>
  </div>
```

### CSS

```css
:root { --display: "Bricolage Grotesque",system-ui,sans-serif; --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): Bricolage Grotesque, JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-mono, .s-mono *, .s-mono *::before, .s-mono *::after { box-sizing: border-box; }
.s-mono { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-mono button { font: inherit; cursor: pointer; }
.s-mono { background: #fff; color: #000; display: grid; grid-template-columns: 1fr 1fr; }
.s-mono .l { background: #000; display: grid; place-items: center; padding: 16px; }
.s-mono .l svg { width: 100%; max-width: 150px; }
.s-mono .r { padding: 18px; display: grid; gap: 6px; align-content: center; }
.s-mono small { font: 600 10px var(--mono); letter-spacing: .2em; }
.s-mono h4 { margin: 0; font: 800 24px/1 var(--display); }
.s-mono p { margin: 0; font-size: 12px; color: #555; }
.s-mono button { justify-self: start; background: #000; color: #fff; border: 0; padding: 8px 16px; font-weight: 600; }
```

No JavaScript needed.
