# Holographic / iridescent

Visual styles · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#holographic

Shifting rainbow pastels with shiny streaks, like a hologram sticker or foil card.

- **Good for:** Membership cards, rewards, premium highlights
- **Watch out:** Large areas; it gets tacky and hard to read
- **Seen in:** membership cards, collectibles, packaging, event passes

## Prompt for an AI assistant

Design this interface in the Holographic / iridescent visual style.

What it is: Shifting rainbow pastels with shiny streaks, like a hologram sticker or foil card.
Good for: Membership cards, rewards, premium highlights.
Watch out: Large areas; it gets tacky and hard to read.
Seen in: membership cards, collectibles, packaging, event passes

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
<div class="stage s-holo"><div class="cd"><span>MEMBER · 2026</span><b>GOLD PASS</b><span class="nm">ADITI RAO <em>Nº 004821</em></span></div></div>
```

### CSS

```css
:root { --display: "Bricolage Grotesque",system-ui,sans-serif; --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): Bricolage Grotesque, JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-holo, .s-holo *, .s-holo *::before, .s-holo *::after { box-sizing: border-box; }
.s-holo { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-holo button { font: inherit; cursor: pointer; }
.s-holo { background: #e9e7f5; display: grid; place-items: center; color: #3a2f5c; }
.s-holo .cd { width: 230px; height: 144px; border-radius: 14px; padding: 16px; display: flex; flex-direction: column; justify-content: space-between; position: relative; overflow: hidden; background: linear-gradient(115deg,#ffd6e8,#c1f0ff,#e2ffd1,#fff1b8,#e3d1ff,#ffd6e8); background-size: 300% 300%; animation: holo 6s ease-in-out infinite; box-shadow: 0 14px 30px rgba(80,60,140,.25); font: 600 11px var(--mono); color: #3a2f5c; }
.s-holo .cd::after { content: ""; position: absolute; inset: 0; background: repeating-linear-gradient(115deg,transparent 0 7px,rgba(255,255,255,.45) 7px 9px); mix-blend-mode: overlay; pointer-events: none; }
.s-holo b { font: 800 24px var(--display); letter-spacing: .04em; }
.s-holo .nm { display: flex; justify-content: space-between; }
.s-holo em { font-style: normal; }
@keyframes holo {
  50%{background-position:100% 50%}
}
```

No JavaScript needed.
