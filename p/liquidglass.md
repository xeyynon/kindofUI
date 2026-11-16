# Liquid Glass

Visual styles · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#liquidglass

Apple's newer take on glass: clear, lens-like controls with bright edge highlights that bend the colors behind them. Controls float above the content instead of sitting in solid bars.

- **Good for:** Floating toolbars and controls over rich content
- **Watch out:** Busy or low-contrast backgrounds; test legibility
- **Seen in:** iOS 26, macOS Tahoe, Apple Music

## Prompt for an AI assistant

Design this interface in the Liquid Glass visual style.

What it is: Apple's newer take on glass: clear, lens-like controls with bright edge highlights that bend the colors behind them. Controls float above the content instead of sitting in solid bars.
Good for: Floating toolbars and controls over rich content.
Watch out: Busy or low-contrast backgrounds; test legibility.
Seen in: iOS 26, macOS Tahoe, Apple Music

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
<div class="stage s-lg">
    <div class="hd"><small>Lisbon · 6:42 PM</small><b>Golden hour at the Miradouro</b></div>
    <div class="gl np"><i class="art"></i><span class="ti"><b>Harbour Lights</b><small>The Tram Line</small></span><span>❚❚</span></div>
    <div class="gl bar2"><span class="on">⌂<small>Home</small></span><span>♫<small>Library</small></span><span>◎<small>Radio</small></span></div>
    <div class="gl srch">⌕</div>
  </div>
```

### CSS

```css
:root { --display: "Bricolage Grotesque",system-ui,sans-serif; }
/* fonts used (all on Google Fonts): Bricolage Grotesque */
/* base styles the site gives every demo (scoped to this demo) */
.s-lg, .s-lg *, .s-lg *::before, .s-lg *::after { box-sizing: border-box; }
.s-lg { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-lg button { font: inherit; cursor: pointer; }
.s-lg { background: repeating-linear-gradient(60deg,rgba(255,255,255,.1) 0 14px,transparent 14px 28px),linear-gradient(150deg,#ff9966,#ff5e62 35%,#8e2de2 70%,#00c6ff); color: #fff; }
.s-lg .hd { position: absolute; left: 18px; top: 18px; display: grid; gap: 2px; text-shadow: 0 1px 6px rgba(0,0,0,.3); }
.s-lg .hd b { font: 700 22px/1.1 var(--display); max-width: 14ch; }
.s-lg small { font-size: 10px; opacity: .85; }
.s-lg .gl { position: absolute; background: rgba(255,255,255,.1); backdrop-filter: blur(3px) saturate(190%); -webkit-backdrop-filter: blur(3px) saturate(190%); border-radius: 999px; box-shadow: inset 1.5px 1.5px 0 rgba(255,255,255,.8),inset -1px -1px 0 rgba(255,255,255,.3),inset 0 0 20px rgba(255,255,255,.2),0 10px 26px rgba(0,0,0,.22); }
.s-lg .np { left: 16px; right: 16px; bottom: 78px; display: flex; align-items: center; gap: 10px; padding: 7px 14px 7px 7px; font-size: 12px; }
.s-lg .np .art { width: 34px; height: 34px; border-radius: 50%; background: conic-gradient(#ffd166,#ef476f,#118ab2,#ffd166); flex: none; }
.s-lg .np .ti { flex: 1; display: grid; }
.s-lg .bar2 { left: 16px; bottom: 16px; display: flex; gap: 2px; padding: 5px; }
.s-lg .bar2 span { padding: 5px 14px; border-radius: 999px; display: grid; justify-items: center; font-size: 16px; line-height: 1.1; }
.s-lg .bar2 span.on { background: rgba(255,255,255,.28); }
.s-lg .srch { right: 16px; bottom: 16px; width: 54px; height: 54px; display: grid; place-items: center; font-size: 20px; }
@supports not ((backdrop-filter:blur(1px)) or (-webkit-backdrop-filter:blur(1px))) {
  .s-lg .gl { background: rgba(255,255,255,.28); }
}
```

No JavaScript needed.
