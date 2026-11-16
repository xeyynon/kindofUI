# F-pattern & Z-pattern

Layouts · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#fz

How eyes scan a screen. On text-heavy pages people read the top lines, then skim down the left (F). On simple pages the eye zig-zags from logo to menu to call to action (Z).

- **Good for:** Placing headlines, key info and calls to action
- **Watch out:** Assuming everyone scans the same way; test it
- **Seen in:** search results and blogs (F), landing pages and ads (Z)

## Prompt for an AI assistant

Build this layout for my page: F-pattern & Z-pattern.

What it is: How eyes scan a screen. On text-heavy pages people read the top lines, then skim down the left (F). On simple pages the eye zig-zags from logo to menu to call to action (Z).
Good for: Placing headlines, key info and calls to action.
Watch out: Assuming everyone scans the same way; test it.
Seen in: search results and blogs (F), landing pages and ads (Z)

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
<div class="stage wf s-fz">
    <div class="pg bx">
      <span class="lbl">F-pattern · text page</span>
      <div class="ln" style="width:95%"></div><div class="ln" style="width:90%"></div><div class="ln" style="width:60%"></div><div class="ln" style="width:55%"></div><div class="ln" style="width:30%"></div><div class="ln" style="width:35%"></div><div class="ln" style="width:25%"></div><div class="ln" style="width:28%"></div>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><polyline points="10,20 90,20 10,20 10,42 60,42 10,42 10,95" fill="none" stroke="#e5484d" stroke-width="2" vector-effect="non-scaling-stroke" stroke-dasharray="4 3"></polyline></svg>
    </div>
    <div class="pg bx">
      <span class="lbl">Z-pattern · landing page</span>
      <div style="display:flex;justify-content:space-between"><div class="ln" style="width:30%"></div><div class="ln" style="width:30%"></div></div>
      <div style="height:60px"></div>
      <div style="display:flex;justify-content:space-between;align-items:center"><div class="ln" style="width:40%"></div><span style="background:#3557e0;color:#fff;border-radius:4px;padding:3px 8px;font-size:10px">CTA</span></div>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><polyline points="12,24 88,24 12,82 88,82" fill="none" stroke="#e5484d" stroke-width="2" vector-effect="non-scaling-stroke" stroke-dasharray="4 3"></polyline></svg>
    </div>
  </div>
```

### CSS

```css
:root { --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-fz, .s-fz *, .s-fz *::before, .s-fz *::after { box-sizing: border-box; }
.s-fz { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-fz button { font: inherit; cursor: pointer; }
.wf { background: #f3f4f7; color: #2b3040; }
.bx { background: #fff; border: 1px solid #dfe3ea; border-radius: 6px; }
.ln { height: 6px; border-radius: 3px; background: #d6dbe4; }
.s-fz { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; padding: 14px; }
.s-fz .pg { position: relative; padding: 10px; display: grid; gap: 7px; align-content: start; }
.s-fz .pg svg { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; }
.s-fz .lbl { font: 700 11px var(--mono); margin-bottom: 2px; }
```

No JavaScript needed.
