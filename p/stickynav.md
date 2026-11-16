# Top navbar (sticky header)

Navigation · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#stickynav

A horizontal menu at the top that stays pinned while the page scrolls under it.

- **Good for:** Most websites and long pages
- **Watch out:** Tall headers that eat small screens
- **Seen in:** nearly every website, GitHub, Shopify stores

## Prompt for an AI assistant

Build this navigation pattern for my app: Top navbar (sticky header).

What it is: A horizontal menu at the top that stays pinned while the page scrolls under it.
Good for: Most websites and long pages.
Watch out: Tall headers that eat small screens.
Seen in: nearly every website, GitHub, Shopify stores

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
<div class="stage s-sticky" style="background:#fff;color:#1f2430">
    <div class="scr" tabindex="0" role="region" aria-label="Page content">
      <div class="hd"><b>Brewly</b><span><span>Shop</span><span>Learn</span><span>Cart (2)</span></span></div>
      <div class="body wf" style="background:#fff">
        <b style="font:700 18px var(--display)">Single-origin coffee, roasted weekly</b>
        <div class="ln"></div><div class="ln" style="width:85%"></div><div class="ln" style="width:92%"></div><div class="ln" style="width:70%"></div>
        <div style="height:60px;border-radius:8px;background:linear-gradient(135deg,#a16207,#451a03)"></div>
        <div class="ln"></div><div class="ln" style="width:80%"></div><div class="ln" style="width:88%"></div><div class="ln" style="width:60%"></div>
        <div style="height:60px;border-radius:8px;background:linear-gradient(135deg,#d97706,#78350f)"></div>
        <div class="ln"></div><div class="ln" style="width:75%"></div><div class="ln" style="width:90%"></div>
        <div style="height:60px;border-radius:8px;background:linear-gradient(135deg,#92400e,#1c1917)"></div>
        <div class="ln"></div><div class="ln" style="width:65%"></div>
      </div>
    </div>
  </div>
```

### CSS

```css
:root { --display: "Bricolage Grotesque",system-ui,sans-serif; }
/* fonts used (all on Google Fonts): Bricolage Grotesque */
/* base styles the site gives every demo (scoped to this demo) */
.s-sticky, .s-sticky *, .s-sticky *::before, .s-sticky *::after { box-sizing: border-box; }
.s-sticky { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-sticky button { font: inherit; cursor: pointer; }
.wf { background: #f3f4f7; color: #2b3040; }
.ln { height: 6px; border-radius: 3px; background: #d6dbe4; }
.s-sticky .scr { position: absolute; inset: 0; overflow-y: auto; }
.s-sticky .hd { position: sticky; top: 0; background: rgba(255,255,255,.9); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); border-bottom: 1px solid #e5e7eb; display: flex; justify-content: space-between; align-items: center; padding: 10px 14px; font-size: 12px; z-index: 1; }
.s-sticky .hd span { display: flex; gap: 12px; color: #555; }
.s-sticky .hd b { font-family: var(--display); font-size: 15px; }
.s-sticky .body { padding: 14px; display: grid; gap: 9px; }
```

No JavaScript needed.
