# Card layout

Layouts · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#cards

Equal cards in a grid, each a self-contained preview with image, title and key facts. Easy to scan and compare.

- **Good for:** Browsing and comparing similar items
- **Watch out:** Items with very different amounts of content
- **Seen in:** Airbnb, Netflix, Trello, Dribbble

## Prompt for an AI assistant

Build this layout for my page: Card layout.

What it is: Equal cards in a grid, each a self-contained preview with image, title and key facts. Easy to scan and compare.
Good for: Browsing and comparing similar items.
Watch out: Items with very different amounts of content.
Seen in: Airbnb, Netflix, Trello, Dribbble

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
<div class="stage wf s-cards">
    <div class="cd"><div class="im" style="background:linear-gradient(135deg,#fbbf24,#f97316)"></div><div class="tx"><b>Goa beach villa</b><span>★ 4.8</span><span class="pr">₹8,400 / night</span></div></div>
    <div class="cd"><div class="im" style="background:linear-gradient(135deg,#34d399,#0f766e)"></div><div class="tx"><b>Munnar tea estate</b><span>★ 4.9</span><span class="pr">₹5,200 / night</span></div></div>
    <div class="cd"><div class="im" style="background:linear-gradient(135deg,#93c5fd,#4f46e5)"></div><div class="tx"><b>Manali cabin</b><span>★ 4.7</span><span class="pr">₹3,900 / night</span></div></div>
    <div class="cd"><div class="im" style="background:linear-gradient(135deg,#fda4af,#be185d)"></div><div class="tx"><b>Jaipur haveli</b><span>★ 4.6</span><span class="pr">₹6,100 / night</span></div></div>
    <div class="cd"><div class="im" style="background:linear-gradient(135deg,#c4b5fd,#7c3aed)"></div><div class="tx"><b>Udaipur lake room</b><span>★ 4.9</span><span class="pr">₹7,300 / night</span></div></div>
    <div class="cd"><div class="im" style="background:linear-gradient(135deg,#fde68a,#ca8a04)"></div><div class="tx"><b>Rishikesh camp</b><span>★ 4.5</span><span class="pr">₹2,800 / night</span></div></div>
  </div>
```

### CSS

```css
/* base styles the site gives every demo (scoped to this demo) */
.s-cards, .s-cards *, .s-cards *::before, .s-cards *::after { box-sizing: border-box; }
.s-cards { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-cards button { font: inherit; cursor: pointer; }
.wf { background: #f3f4f7; color: #2b3040; }
.s-cards { padding: 10px 12px; display: grid; grid-template-columns: repeat(3,1fr); gap: 8px; align-content: center; }
.s-cards .cd { background: #fff; border-radius: 10px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,.08); font-size: 11px; min-width: 0; }
.s-cards .im { aspect-ratio: 16/9; max-width: 100%; }
.s-cards .tx { padding: 6px 8px; display: grid; gap: 1px; }
.s-cards .tx b { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.s-cards .pr { color: #555; }
```

No JavaScript needed.
