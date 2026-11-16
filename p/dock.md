# Dock

Navigation · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#dock

A row of app icons that grow under the pointer, with dots under running apps.

- **Good for:** Launching favorite apps or tools
- **Watch out:** Deep navigation with many levels
- **Seen in:** macOS Dock, iPadOS dock, Windows taskbar

## Prompt for an AI assistant

Build this navigation pattern for my app: Dock.

What it is: A row of app icons that grow under the pointer, with dots under running apps.
Good for: Launching favorite apps or tools.
Watch out: Deep navigation with many levels.
Seen in: macOS Dock, iPadOS dock, Windows taskbar

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
<div class="stage s-dock">
    <div class="mb"><b>Files</b><span>File</span><span>Edit</span><span>View</span></div>
    <div class="dk"><i class="run" data-n="Home" style="background:linear-gradient(#5ac8fa,#007aff)">⌂</i><i class="run" data-n="Mail" style="background:linear-gradient(#64d2ff,#0a84ff)">✉</i><i data-n="Music" style="background:linear-gradient(#ff6b8b,#ff2d55)">♫</i><i class="run" data-n="Photos" style="background:linear-gradient(#ffd60a,#ff9f0a)">✿</i><i data-n="Notes" style="background:linear-gradient(#ffe082,#ffc107)">✎</i><i data-n="Settings" style="background:linear-gradient(#a1a1aa,#52525b)">⚙</i></div>
  </div>
```

### CSS

```css
/* base styles the site gives every demo (scoped to this demo) */
.s-dock, .s-dock *, .s-dock *::before, .s-dock *::after { box-sizing: border-box; }
.s-dock { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-dock button { font: inherit; cursor: pointer; }
.s-dock { background: linear-gradient(160deg,#ee9ca7,#6a82fb 60%,#1c2551); color: #fff; display: grid; align-content: end; justify-items: center; padding-bottom: 14px; }
.s-dock .mb { position: absolute; top: 0; left: 0; right: 0; padding: 4px 12px; background: rgba(255,255,255,.25); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); font-size: 11px; display: flex; gap: 14px; }
.s-dock .dk { display: flex; align-items: flex-end; gap: 6px; padding: 6px 8px; border-radius: 18px; background: rgba(255,255,255,.22); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); border: 1px solid rgba(255,255,255,.35); height: 58px; }
.s-dock .dk i { font-style: normal; width: 40px; height: 40px; border-radius: 10px; display: grid; place-items: center; font-size: 18px; color: #fff; transform-origin: 50% 100%; transition: transform .15s; box-shadow: 0 2px 6px rgba(0,0,0,.2); cursor: pointer; position: relative; }
.s-dock .dk i:hover { transform: scale(1.55); }
.s-dock .dk i:hover + i,.s-dock .dk i:has(+ i:hover) { transform: scale(1.25); }
.s-dock .dk i::after { content: attr(data-n); position: absolute; bottom: calc(100% + 6px); background: rgba(30,30,30,.85); font-size: 8px; padding: 2px 5px; border-radius: 4px; white-space: nowrap; opacity: 0; transition: opacity .15s; pointer-events: none; }
.s-dock .dk i:hover::after { opacity: 1; }
.s-dock .dk i.run::before { content: ""; position: absolute; bottom: -5px; width: 4px; height: 4px; border-radius: 50%; background: #fff; }
@supports not ((backdrop-filter:blur(1px)) or (-webkit-backdrop-filter:blur(1px))) {
  .s-dock .mb { background: rgba(255,255,255,.6); }
  .s-dock .dk { background: rgba(255,255,255,.5); }
}
```

No JavaScript needed.
