# HUD / sci-fi interface

Visual styles · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#hud

Thin glowing lines, corner brackets, radar sweeps and monospaced readouts, like a cockpit or a film's computer screen.

- **Good for:** Games, monitoring, sci-fi themed dashboards
- **Watch out:** Everyday apps; thin glowing text strains the eyes
- **Seen in:** game interfaces, sci-fi films, monitoring tools

## Prompt for an AI assistant

Design this interface in the HUD / sci-fi interface visual style.

What it is: Thin glowing lines, corner brackets, radar sweeps and monospaced readouts, like a cockpit or a film's computer screen.
Good for: Games, monitoring, sci-fi themed dashboards.
Watch out: Everyday apps; thin glowing text strains the eyes.
Seen in: game interfaces, sci-fi films, monitoring tools

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
<div class="stage s-hud">
    <div class="rad"><i class="bl" style="left:30%;top:28%"></i><i class="bl" style="left:68%;top:60%"></i></div>
    <div class="pan"><span class="t">TARGET LOCK · SECTOR 7G</span><span>ALT <b>12,400 m</b></span><span>SPD <b>842 km/h</b></span><span>HDG <b>274°</b></span><span class="mt"><i></i></span><span class="warn">⚠ FUEL 28%</span></div>
  </div>
```

### CSS

```css
:root { --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-hud, .s-hud *, .s-hud *::before, .s-hud *::after { box-sizing: border-box; }
.s-hud { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-hud button { font: inherit; cursor: pointer; }
.s-hud { background: #03121a; color: #5ff5ff; font: 11px/1.4 var(--mono); padding: 16px; display: grid; grid-template-columns: 130px 1fr; gap: 16px; align-items: center; text-shadow: 0 0 6px rgba(95,245,255,.5); }
.s-hud .rad { width: 130px; height: 130px; border-radius: 50%; border: 1px solid rgba(95,245,255,.6); background: linear-gradient(rgba(95,245,255,.3),rgba(95,245,255,.3)) center/1px 100% no-repeat,linear-gradient(rgba(95,245,255,.3),rgba(95,245,255,.3)) center/100% 1px no-repeat,repeating-radial-gradient(circle,transparent 0 21px,rgba(95,245,255,.25) 21px 22px); position: relative; overflow: hidden; }
.s-hud .rad::before { content: ""; position: absolute; inset: 0; border-radius: 50%; background: conic-gradient(rgba(95,245,255,.5),transparent 22%); animation: spin 3s linear infinite; }
.s-hud .bl { position: absolute; width: 6px; height: 6px; border-radius: 50%; background: #ff5f5f; box-shadow: 0 0 8px #ff5f5f; }
.s-hud .pan { display: grid; gap: 6px; padding: 12px; min-width: 0; background: linear-gradient(#5ff5ff,#5ff5ff) 0 0/14px 2px,linear-gradient(#5ff5ff,#5ff5ff) 0 0/2px 14px,linear-gradient(#5ff5ff,#5ff5ff) 100% 0/14px 2px,linear-gradient(#5ff5ff,#5ff5ff) 100% 0/2px 14px,linear-gradient(#5ff5ff,#5ff5ff) 0 100%/14px 2px,linear-gradient(#5ff5ff,#5ff5ff) 0 100%/2px 14px,linear-gradient(#5ff5ff,#5ff5ff) 100% 100%/14px 2px,linear-gradient(#5ff5ff,#5ff5ff) 100% 100%/2px 14px,rgba(95,245,255,.05); background-repeat: no-repeat; }
.s-hud .t { font-size: 10px; letter-spacing: .12em; opacity: .8; }
.s-hud .pan > span { display: flex; justify-content: space-between; gap: 6px; }
.s-hud .mt { height: 6px; border: 1px solid rgba(95,245,255,.5); }
.s-hud .mt i { display: block; height: 100%; width: 72%; background: #5ff5ff; }
.s-hud .warn { color: #ffb547; animation: blink 1s steps(2) infinite; }
@keyframes spin {
  to{transform:rotate(1turn)}
}
@keyframes blink {
  50%{opacity:.25}
}
```

No JavaScript needed.
