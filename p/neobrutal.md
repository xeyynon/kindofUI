# Neo-brutalism

Visual styles · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#neobrutal

Thick black borders, hard offset shadows with no blur, loud flat colors and chunky type.

- **Good for:** Indie SaaS, creator tools, playful brands
- **Watch out:** Banking, healthcare, anything that must feel calm
- **Seen in:** Gumroad, Figma community pages, many indie SaaS sites

## Prompt for an AI assistant

Design this interface in the Neo-brutalism visual style.

What it is: Thick black borders, hard offset shadows with no blur, loud flat colors and chunky type.
Good for: Indie SaaS, creator tools, playful brands.
Watch out: Banking, healthcare, anything that must feel calm.
Seen in: Gumroad, Figma community pages, many indie SaaS sites

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
<div class="stage s-nb">
    <div class="card">
      <h4 role="none">Sell your stuff online.</h4>
      <div class="row"><span class="tag">No code</span><span class="tag" style="background:#7cf5c8">0% setup fee</span></div>
    </div>
    <div class="row"><button>Start selling</button><button class="alt">See pricing</button></div>
  </div>
```

### CSS

```css
:root { --display: "Bricolage Grotesque",system-ui,sans-serif; --body: "Figtree",system-ui,sans-serif; }
/* fonts used (all on Google Fonts): Bricolage Grotesque, Figtree */
/* base styles the site gives every demo (scoped to this demo) */
.s-nb, .s-nb *, .s-nb *::before, .s-nb *::after { box-sizing: border-box; }
.s-nb { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-nb button { font: inherit; cursor: pointer; }
.s-nb { background: #ffe066; color: #000; padding: 22px; display: flex; flex-direction: column; justify-content: center; gap: 14px; font-family: var(--body); }
.s-nb .card { background: #fff; border: 3px solid #000; box-shadow: 7px 7px 0 #000; border-radius: 10px; padding: 14px 16px; }
.s-nb h4 { font: 800 24px/1.05 var(--display); margin: 0 0 6px; }
.s-nb .row { display: flex; gap: 10px; flex-wrap: wrap; }
.s-nb button { border: 3px solid #000; background: #ff6b9d; font-weight: 800; padding: 8px 16px; border-radius: 8px; box-shadow: 4px 4px 0 #000; transition: transform .1s,box-shadow .1s; }
.s-nb button:active { transform: translate(4px,4px); box-shadow: 0 0 0 #000; }
.s-nb button.alt { background: #7cf5c8; }
.s-nb .tag { border: 2px solid #000; padding: 2px 8px; border-radius: 999px; font: 700 11px var(--body); background: #c3b5ff; }
```

No JavaScript needed.
