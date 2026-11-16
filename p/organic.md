# Organic / biophilic

Visual styles · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#organic

Soft blob shapes, earthy greens and clay tones, gentle serifs and slow natural movement inspired by plants and nature.

- **Good for:** Wellness, food, plants, sustainability brands
- **Watch out:** Technical tools that need precise grids
- **Seen in:** plant shops, wellness, food and sustainability brands

## Prompt for an AI assistant

Design this interface in the Organic / biophilic visual style.

What it is: Soft blob shapes, earthy greens and clay tones, gentle serifs and slow natural movement inspired by plants and nature.
Good for: Wellness, food, plants, sustainability brands.
Watch out: Technical tools that need precise grids.
Seen in: plant shops, wellness, food and sustainability brands

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
<div class="stage s-org">
    <div class="blob"><svg viewBox="0 0 100 100" aria-hidden="true"><path d="M50 92 C50 62 50 40 50 14" stroke="#2f5d3a" stroke-width="3" fill="none"></path><path d="M50 56 C30 51 20 36 22 22 C38 24 48 38 50 56Z" fill="#3e7c4f"></path><path d="M50 42 C68 38 78 24 76 12 C60 14 52 26 50 42Z" fill="#4f9461"></path><path d="M50 72 C70 70 82 58 82 46 C66 46 54 56 50 72Z" fill="#3e7c4f"></path></svg></div>
    <div><small>Indoor plants</small><h4 role="none">Monstera Deliciosa</h4><p>Loves bright, indirect light. Water once a week.</p><span class="row"><b>₹1,249</b><button>Add to basket</button></span></div>
  </div>
```

### CSS

```css
:root { --body: "Figtree",system-ui,sans-serif; }
/* fonts used (all on Google Fonts): Figtree, DM Serif Display */
/* base styles the site gives every demo (scoped to this demo) */
.s-org, .s-org *, .s-org *::before, .s-org *::after { box-sizing: border-box; }
.s-org { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-org button { font: inherit; cursor: pointer; }
.s-org { background: #f1efe4; color: #2f3e2c; display: grid; grid-template-columns: auto 1fr; align-items: center; gap: 16px; padding: 0 20px; }
.s-org .blob { width: 130px; height: 150px; background: #c9d8b6; border-radius: 63% 37% 54% 46%/55% 48% 52% 45%; display: grid; place-items: center; animation: morph 8s ease-in-out infinite; max-width: 100%; }
.s-org .blob svg { width: 90px; height: 90px; }
.s-org small { font: 600 10px var(--body); letter-spacing: .14em; text-transform: uppercase; color: #7a8a63; }
.s-org h4 { font: 400 24px/1.05 "DM Serif Display",Georgia,serif; margin: 4px 0 6px; }
.s-org p { margin: 0 0 12px; font-size: 12px; color: #5b6650; }
.s-org .row { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; }
.s-org button { border: 0; background: #c46d3b; color: #fff; border-radius: 999px; padding: 8px 14px; font-weight: 600; }
@keyframes morph {
  50%{border-radius:40% 60% 38% 62%/60% 40% 58% 42%}
}
```

No JavaScript needed.
