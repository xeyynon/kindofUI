# Pixel art

Visual styles · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#pixel

Chunky square pixels, limited palettes, pixel fonts and stepped button edges, like 8-bit and 16-bit games.

- **Good for:** Games, gamified apps, playful landing pages
- **Watch out:** Body text; pixel fonts are hard to read at length
- **Seen in:** indie games, retro game sites, gamified learning apps

## Prompt for an AI assistant

Design this interface in the Pixel art visual style.

What it is: Chunky square pixels, limited palettes, pixel fonts and stepped button edges, like 8-bit and 16-bit games.
Good for: Games, gamified apps, playful landing pages.
Watch out: Body text; pixel fonts are hard to read at length.
Seen in: indie games, retro game sites, gamified learning apps

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
<div class="stage s-pix">
    <div class="hud"><span><i class="ht"></i><i class="ht"></i><i class="ht e"></i></span><span>◉ ×042</span></div>
    <b class="ttl">WORLD 1-2</b>
    <div class="menu"><button class="pb on">▶ CONTINUE</button><button class="pb">NEW GAME</button><button class="pb">OPTIONS</button></div>
  </div>
```

### CSS

```css
/* fonts used (all on Google Fonts): Press Start 2P */
/* base styles the site gives every demo (scoped to this demo) */
.s-pix, .s-pix *, .s-pix *::before, .s-pix *::after { box-sizing: border-box; }
.s-pix { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-pix button { font: inherit; cursor: pointer; }
.s-pix { background: #1a1c2c; color: #f4f4f4; font: 9px/1.6 "Press Start 2P",monospace; padding: 16px; display: grid; grid-template-rows: auto 1fr auto; justify-items: center; gap: 10px; }
.s-pix .hud { display: flex; justify-content: space-between; align-items: center; width: 100%; color: #ffcd75; }
.s-pix .ht { display: inline-block; width: 21px; height: 18px; position: relative; margin-right: 4px; color: #e43b44; }
.s-pix .ht.e { color: #3b3f5c; }
.s-pix .ht::before { content: ""; position: absolute; left: 0; top: 0; width: 3px; height: 3px; box-shadow: 3px 0,6px 0,12px 0,15px 0,0 3px,3px 3px,6px 3px,9px 3px,12px 3px,15px 3px,18px 3px,0 6px,3px 6px,6px 6px,9px 6px,12px 6px,15px 6px,18px 6px,3px 9px,6px 9px,9px 9px,12px 9px,15px 9px,6px 12px,9px 12px,12px 12px,9px 15px; }
.s-pix .ttl { font-size: 18px; color: #73eff7; align-self: center; text-shadow: 3px 3px 0 #29366f; }
.s-pix .menu { display: grid; gap: 12px; justify-items: center; }
.s-pix .pb { font: inherit; color: #f4f4f4; background: #3b5dc9; border: 0; padding: 8px 12px; min-width: 150px; box-shadow: 0 3px #000,0 -3px #000,3px 0 #000,-3px 0 #000,inset -3px -3px 0 #29366f; }
.s-pix .pb.on { background: #38b764; box-shadow: 0 3px #000,0 -3px #000,3px 0 #000,-3px 0 #000,inset -3px -3px 0 #257179; }
.s-pix .pb:hover { background: #41a6f6; }
```

No JavaScript needed.
