# Masonry grid

Layouts · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#masonry

Columns of items with different heights that stack tightly with no gaps, like a brick wall.

- **Good for:** Image-led browsing: photos, recipes, inspiration
- **Watch out:** Content where order matters
- **Seen in:** Pinterest, Unsplash, Behance

## Prompt for an AI assistant

Build this layout for my page: Masonry grid.

What it is: Columns of items with different heights that stack tightly with no gaps, like a brick wall.
Good for: Image-led browsing: photos, recipes, inspiration.
Watch out: Content where order matters.
Seen in: Pinterest, Unsplash, Behance

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
<div class="stage wf s-mason">
    <div style="height:90px;background:#fca5a5"></div><div style="height:140px;background:#fdba74"></div><div style="height:70px;background:#fde047"></div>
    <div style="height:120px;background:#86efac"></div><div style="height:80px;background:#67e8f9"></div><div style="height:150px;background:#93c5fd"></div>
    <div style="height:100px;background:#c4b5fd"></div><div style="height:65px;background:#f9a8d4"></div><div style="height:130px;background:#a7f3d0"></div>
    <div style="height:85px;background:#fcd34d"></div><div style="height:110px;background:#bfdbfe"></div><div style="height:95px;background:#fecaca"></div>
  </div>
```

### CSS

```css
/* base styles the site gives every demo (scoped to this demo) */
.s-mason, .s-mason *, .s-mason *::before, .s-mason *::after { box-sizing: border-box; }
.s-mason { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-mason button { font: inherit; cursor: pointer; }
.wf { background: #f3f4f7; color: #2b3040; }
.s-mason { padding: 12px; columns: 4; column-gap: 8px; overflow: hidden; }
.s-mason div { break-inside: avoid; margin-bottom: 8px; border-radius: 8px; }
```

No JavaScript needed.
