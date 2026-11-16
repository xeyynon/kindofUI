# Vaporwave

Visual styles · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#vaporwave

Pink and teal sunsets, striped suns, checkerboard floors, wide-spaced letters and 90s computer nostalgia.

- **Good for:** Music, art projects, nostalgia campaigns
- **Watch out:** Anything that must feel trustworthy
- **Seen in:** album art, music visualizers, art and fashion campaigns

## Prompt for an AI assistant

Design this interface in the Vaporwave visual style.

What it is: Pink and teal sunsets, striped suns, checkerboard floors, wide-spaced letters and 90s computer nostalgia.
Good for: Music, art projects, nostalgia campaigns.
Watch out: Anything that must feel trustworthy.
Seen in: album art, music visualizers, art and fashion campaigns

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
<div class="stage s-vap"><span class="sky"></span><span class="sun"></span><span class="fl"></span><h4 role="none">ＶＡＰＯＲＷＡＶＥ</h4><span class="sub">ｍａｌｌ ｓｏｆｔ ９５</span></div>
```

### CSS

```css
/* fonts used (all on Google Fonts): VT323 */
/* base styles the site gives every demo (scoped to this demo) */
.s-vap, .s-vap *, .s-vap *::before, .s-vap *::after { box-sizing: border-box; }
.s-vap { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-vap button { font: inherit; cursor: pointer; }
.s-vap { background: #1a0933; color: #fff; }
.s-vap .sky { position: absolute; inset: 0 0 40% 0; background: linear-gradient(#2b1055,#7597de 45%,#ff71ce); }
.s-vap .sun { position: absolute; left: 50%; top: 12%; width: 120px; height: 120px; margin-left: -60px; border-radius: 50%; background: linear-gradient(#fffb96,#ff71ce 80%); -webkit-mask: linear-gradient(#000 55%,transparent 55% 60%,#000 60% 68%,transparent 68% 72%,#000 72% 80%,transparent 80% 84%,#000 84%); mask: linear-gradient(#000 55%,transparent 55% 60%,#000 60% 68%,transparent 68% 72%,#000 72% 80%,transparent 80% 84%,#000 84%); }
.s-vap .fl { position: absolute; left: -40%; right: -40%; top: 60%; bottom: -20%; background: repeating-conic-gradient(#ff71ce 0 25%,#1a0933 0 50%) 0 0/36px 36px; transform: perspective(140px) rotateX(50deg); transform-origin: top; }
.s-vap h4 { position: absolute; left: 0; right: 0; top: 47%; margin: 0; text-align: center; font: 400 30px/1 "VT323",monospace; letter-spacing: .04em; color: #fff; text-shadow: 3px 3px 0 #01cdfe,-2px -2px 0 #ff71ce; }
.s-vap .sub { position: absolute; left: 0; right: 0; bottom: 16px; text-align: center; font: 400 18px "VT323",monospace; color: #fffb96; text-shadow: 0 0 6px #ff71ce; }
```

No JavaScript needed.
