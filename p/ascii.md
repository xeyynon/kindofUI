# ASCII / dithering

Visual styles · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#ascii

Pictures made of text characters and dot patterns, monospaced type and terminal colors. Dithering fakes shades with patterns of dots.

- **Good for:** Developer tools, terminals, retro tech brands
- **Watch out:** Mass-market consumer apps
- **Seen in:** developer tools, terminal-style portfolios, retro tech brands

## Prompt for an AI assistant

Design this interface in the ASCII / dithering visual style.

What it is: Pictures made of text characters and dot patterns, monospaced type and terminal colors. Dithering fakes shades with patterns of dots.
Good for: Developer tools, terminals, retro tech brands.
Watch out: Mass-market consumer apps.
Seen in: developer tools, terminal-style portfolios, retro tech brands

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
<div class="stage s-asc">
<pre aria-label="ASCII art of a sun over mountains">     \   |   /
   --  .---.  --
      (     )
   --  '---'  --
     /   |   \
        /\
   /\  /  \  /\
  /  \/    \/  \
 /    \     \   \
</pre>
    <div class="dth" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>
    <span class="bar3">LOADING [######----] 62%</span>
  </div>
```

### CSS

```css
:root { --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-asc, .s-asc *, .s-asc *::before, .s-asc *::after { box-sizing: border-box; }
.s-asc { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-asc button { font: inherit; cursor: pointer; }
.s-asc { background: #0b0b0b; color: #d4d4d4; font: 11px/1.15 var(--mono); display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr auto; gap: 12px; padding: 16px; align-items: center; }
.s-asc pre { margin: 0; color: #9cff8f; font: inherit; overflow: hidden; }
.s-asc .dth { display: grid; height: 150px; border: 1px solid #333; }
.s-asc .dth i:nth-child(1) { background: #d4d4d4; }
.s-asc .dth i:nth-child(2) { background: repeating-conic-gradient(#d4d4d4 0 25%,#0b0b0b 0 50%) 0 0/4px 4px; }
.s-asc .dth i:nth-child(3) { background: radial-gradient(#d4d4d4 1px,transparent 1.3px) 0 0/4px 4px; }
.s-asc .dth i:nth-child(4) { background: radial-gradient(#d4d4d4 .9px,transparent 1.1px) 0 0/6px 6px; }
.s-asc .dth i:nth-child(5) { background: #0b0b0b; }
.s-asc .bar3 { grid-column: 1/-1; color: #9cff8f; }
```

No JavaScript needed.
