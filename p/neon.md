# Cyberpunk / synthwave neon

Visual styles · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#neon

Glowing cyan and magenta text on black, neon outlines and a retro perspective grid.

- **Good for:** Games, music, night-life, launches
- **Watch out:** Long text and readability-critical screens
- **Seen in:** game launchers, crypto and Web3 sites, music visualizers

## Prompt for an AI assistant

Design this interface in the Cyberpunk / synthwave neon visual style.

What it is: Glowing cyan and magenta text on black, neon outlines and a retro perspective grid.
Good for: Games, music, night-life, launches.
Watch out: Long text and readability-critical screens.
Seen in: game launchers, crypto and Web3 sites, music visualizers

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
<div class="stage s-neon">
    <span class="sun"></span><span class="floor"></span>
    <div class="in"><h4 role="none">NIGHT CITY</h4><button>ENTER</button></div>
  </div>
```

### CSS

```css
:root { --display: "Bricolage Grotesque",system-ui,sans-serif; --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): Bricolage Grotesque, JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-neon, .s-neon *, .s-neon *::before, .s-neon *::after { box-sizing: border-box; }
.s-neon { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-neon button { font: inherit; cursor: pointer; }
.s-neon { background: #08000f; color: #fff; display: grid; place-items: center; text-align: center; font-family: var(--display); }
.s-neon .floor { position: absolute; left: -50%; right: -50%; bottom: -40px; height: 150px; background-image: linear-gradient(#ff2bd6 1px,transparent 1px),linear-gradient(90deg,#ff2bd6 1px,transparent 1px); background-size: 30px 30px; transform: perspective(200px) rotateX(60deg); opacity: .55; }
.s-neon .sun { position: absolute; width: 140px; height: 140px; border-radius: 50%; top: 46px; background: linear-gradient(#ffe259,#ff2bd6); opacity: .85; -webkit-mask: repeating-linear-gradient(#000 0 10px,transparent 10px 14px); mask: repeating-linear-gradient(#000 0 10px,transparent 10px 14px); }
.s-neon .in { position: relative; display: grid; gap: 10px; justify-items: center; margin-top: -30px; }
.s-neon h4 { margin: 0; font-size: 34px; font-weight: 800; letter-spacing: .08em; color: #e8fdff; text-shadow: 0 0 6px #00f0ff,0 0 18px #00f0ff,0 0 36px #00a2ff; }
.s-neon button { background: transparent; color: #ff7ae9; border: 2px solid #ff2bd6; padding: 7px 18px; border-radius: 4px; font: 700 12px var(--mono); letter-spacing: .15em; box-shadow: 0 0 12px #ff2bd6,inset 0 0 10px #ff2bd6; text-shadow: 0 0 6px #ff2bd6; }
```

No JavaScript needed.
