# Live collaboration

Components and UX patterns · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#collab

See who else is here: avatar stack, named cursors, other people's selections and typing carets, all updating live.

- **Good for:** Docs, design tools, whiteboards
- **Watch out:** Single-user tools where presence is noise
- **Seen in:** Figma, Google Docs, Miro, Notion

## Prompt for an AI assistant

Build this UI pattern for my app: Live collaboration.

What it is: See who else is here: avatar stack, named cursors, other people's selections and typing carets, all updating live.
Good for: Docs, design tools, whiteboards.
Watch out: Single-user tools where presence is noise.
Seen in: Figma, Google Docs, Miro, Notion

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
<div class="stage s-collab">
    <div class="tb"><b>Q4 launch plan</b><span class="avs"><i style="background:#f59e0b">AK</i><i style="background:#10b981">RS</i><i style="background:#8b5cf6">ZK</i><em>+2</em></span></div>
    <div class="doc">
      <h5 role="none">Goals</h5>
      <p>Grow paid sign-ups by <mark class="sel">25% in the first quarter</mark> after launch, while keeping support tickets flat.</p>
      <p>Launch in three cities first: Pune, Kochi and Indore.<span class="caret" style="--c:#10b981"></span></p>
      <span class="cur c1" style="--c:#f59e0b"><svg viewBox="0 0 14 14" aria-hidden="true"><path d="M1 1 L13 6 L7 7.5 L5 13 Z"></path></svg><em>Ananya</em></span>
      <span class="cur c2" style="--c:#8b5cf6"><svg viewBox="0 0 14 14" aria-hidden="true"><path d="M1 1 L13 6 L7 7.5 L5 13 Z"></path></svg><em>Zoya</em></span>
    </div>
  </div>
```

### CSS

```css
:root { --display: "Bricolage Grotesque",system-ui,sans-serif; --body: "Figtree",system-ui,sans-serif; }
/* fonts used (all on Google Fonts): Bricolage Grotesque, Figtree */
/* base styles the site gives every demo (scoped to this demo) */
.s-collab, .s-collab *, .s-collab *::before, .s-collab *::after { box-sizing: border-box; }
.s-collab { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-collab button { font: inherit; cursor: pointer; }
.s-collab { background: #f3f4f7; color: #1f2430; font-size: 12px; }
.s-collab .tb { background: #fff; display: flex; justify-content: space-between; align-items: center; padding: 9px 14px; border-bottom: 1px solid #e5e7eb; }
.s-collab .avs { display: flex; align-items: center; }
.s-collab .avs i { width: 24px; height: 24px; border-radius: 50%; border: 2px solid #fff; margin-left: -6px; color: #fff; font: 700 8px var(--body); font-style: normal; display: grid; place-items: center; }
.s-collab .avs em { font-style: normal; margin-left: 6px; color: #666; font-size: 11px; }
.s-collab .doc { margin: 12px; background: #fff; border-radius: 8px; padding: 14px 16px; position: relative; height: calc(100% - 72px); box-shadow: 0 1px 3px rgba(0,0,0,.06); overflow: hidden; }
.s-collab h5 { margin: 0 0 6px; font: 700 15px var(--display); }
.s-collab p { margin: 0 0 8px; line-height: 1.6; color: #374151; }
.s-collab .sel { background: rgba(245,158,11,.25); color: inherit; border-radius: 2px; }
.s-collab .caret { display: inline-block; width: 2px; height: 15px; background: var(--c); vertical-align: -3px; margin-left: 1px; animation: blink 1s steps(2) infinite; }
.s-collab .cur { position: absolute; display: flex; align-items: flex-start; pointer-events: none; }
.s-collab .cur svg { width: 14px; height: 14px; fill: var(--c); }
.s-collab .cur em { font-style: normal; background: var(--c); color: #fff; font: 600 10px var(--body); padding: 1px 6px; border-radius: 0 6px 6px 6px; margin: 10px 0 0 -2px; }
.s-collab .c1 { left: 58%; top: 28%; animation: mv1 6s ease-in-out infinite; }
.s-collab .c2 { left: 18%; top: 66%; animation: mv2 7s ease-in-out infinite; }
@keyframes blink {
  50%{opacity:.25}
}
@keyframes mv1 {
  50%{transform:translate(-90px,40px)}
}
@keyframes mv2 {
  50%{transform:translate(110px,-30px)}
}
```

No JavaScript needed.
