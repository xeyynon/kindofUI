# Kinetic typography

Visual styles · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#kinetic

Type that moves: letters stretch, squash and scroll so the words themselves become the animation.

- **Good for:** Hero headlines, intros, music and event sites
- **Watch out:** Body text and anything people must read fast
- **Seen in:** music festival sites, film title sequences, brand launches

## Prompt for an AI assistant

Design this interface in the Kinetic typography visual style.

What it is: Type that moves: letters stretch, squash and scroll so the words themselves become the animation.
Good for: Hero headlines, intros, music and event sites.
Watch out: Body text and anything people must read fast.
Seen in: music festival sites, film title sequences, brand launches

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
<div class="stage s-kin">
    <div class="mq"><span>NEW SEASON · NEW SOUND · NEW SEASON · NEW SOUND ·&nbsp;</span><span>NEW SEASON · NEW SOUND · NEW SEASON · NEW SOUND ·&nbsp;</span></div>
    <div class="w"><span style="--d:0s">M</span><span style="--d:.1s">O</span><span style="--d:.2s">V</span><span style="--d:.3s">E</span></div>
    <div class="mq r"><span>LIVE 14 NOV · TICKETS OUT NOW · LIVE 14 NOV · TICKETS OUT NOW ·&nbsp;</span><span>LIVE 14 NOV · TICKETS OUT NOW · LIVE 14 NOV · TICKETS OUT NOW ·&nbsp;</span></div>
  </div>
```

### CSS

```css
:root { --display: "Bricolage Grotesque",system-ui,sans-serif; --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): Bricolage Grotesque, JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-kin, .s-kin *, .s-kin *::before, .s-kin *::after { box-sizing: border-box; }
.s-kin { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-kin button { font: inherit; cursor: pointer; }
.s-kin { background: #111; color: #f5f5f0; display: grid; align-content: center; gap: 8px; }
.s-kin .mq { display: flex; white-space: nowrap; font: 700 13px var(--mono); color: #ffde59; width: max-content; justify-self: start; animation: mq 10s linear infinite; }
.s-kin .mq.r { animation-direction: reverse; color: #ff5ca8; }
.s-kin .w { display: flex; justify-content: center; font: 800 88px/1 var(--display); letter-spacing: -.03em; }
.s-kin .w span { display: inline-block; transform-origin: 50% 100%; animation: kin 1.4s cubic-bezier(.6,0,.4,1) infinite; animation-delay: var(--d); }
@keyframes mq {
  to{transform:translateX(-50%)}
}
@keyframes kin {
  0%,100%{transform:scaleY(1)}50%{transform:scaleY(.55);color:#ff5ca8}
}
```

No JavaScript needed.
