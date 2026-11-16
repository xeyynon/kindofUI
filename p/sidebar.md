# Sidebar / drawer

Navigation · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#sidebar

A vertical panel on the left listing sections or channels. Good when there are many destinations and a wide screen.

- **Good for:** Apps with many sections or channels
- **Watch out:** Simple sites with only a few pages
- **Seen in:** Slack, Discord, Notion, Gmail desktop

## Prompt for an AI assistant

Build this navigation pattern for my app: Sidebar / drawer.

What it is: A vertical panel on the left listing sections or channels. Good when there are many destinations and a wide screen.
Good for: Apps with many sections or channels.
Watch out: Simple sites with only a few pages.
Seen in: Slack, Discord, Notion, Gmail desktop

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
<div class="stage s-side">
    <div class="sb"><b>Acme team ▾</b><span>Threads</span><span>Mentions</span><small>Channels</small><span># general</span><span class="on"># design</span><span># launch</span><small>Direct</small><span>Kavya</span><span>Dev</span></div>
    <div class="mn"><b># design</b>
      <div class="msg"><i style="background:#f59e0b"></i><div><b>Kavya</b> <span style="color:#999;font-size:10px">10:42</span><br>New icons are in Figma</div></div>
      <div class="msg"><i style="background:#10b981"></i><div><b>Dev</b> <span style="color:#999;font-size:10px">10:45</span><br>Looks great, shipping today</div></div>
    </div>
  </div>
```

### CSS

```css
/* base styles the site gives every demo (scoped to this demo) */
.s-side, .s-side *, .s-side *::before, .s-side *::after { box-sizing: border-box; }
.s-side { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-side button { font: inherit; cursor: pointer; }
.s-side { display: grid; grid-template-columns: 130px 1fr; font-size: 12px; }
.s-side .sb { background: #3f0e40; color: #d7c6d8; padding: 12px 10px; display: grid; align-content: start; gap: 3px; }
.s-side .sb b { color: #fff; font-size: 13px; margin-bottom: 8px; }
.s-side .sb small { font-size: 10px; text-transform: uppercase; letter-spacing: .08em; opacity: .7; margin-top: 8px; }
.s-side .sb span { padding: 3px 6px; border-radius: 4px; }
.s-side .sb span.on { background: #1164a3; color: #fff; }
.s-side .mn { background: #fff; color: #1d1c1d; padding: 12px; display: grid; align-content: start; gap: 12px; min-width: 0; }
.s-side .msg { display: flex; gap: 8px; }
.s-side .msg i { width: 26px; height: 26px; border-radius: 5px; flex: none; }
```

No JavaScript needed.
