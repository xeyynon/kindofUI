# Timeline

Layouts · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#timeline

Events in order along a line, with done, current and upcoming steps clearly marked.

- **Good for:** Order tracking, history, changelogs, processes
- **Watch out:** Non-chronological content
- **Seen in:** order tracking, changelogs, history pages, Git logs

## Prompt for an AI assistant

Build this layout for my page: Timeline.

What it is: Events in order along a line, with done, current and upcoming steps clearly marked.
Good for: Order tracking, history, changelogs, processes.
Watch out: Non-chronological content.
Seen in: order tracking, changelogs, history pages, Git logs

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
<div class="stage s-tl"><ol><li class="done"><b>Order placed</b><span>Mon 3 Nov, 10:14 AM</span></li><li class="done"><b>Packed at warehouse</b><span>Mon 3 Nov, 6:40 PM</span></li><li class="done"><b>Shipped</b><span>Tue 4 Nov, 9:05 AM · Tracking 7731 0042</span></li><li class="cur"><b>Out for delivery</b><span>Today, 8:12 AM</span></li><li><b>Delivered</b><span>Expected by 7 PM</span></li></ol></div>
```

### CSS

```css
/* base styles the site gives every demo (scoped to this demo) */
.s-tl, .s-tl *, .s-tl *::before, .s-tl *::after { box-sizing: border-box; }
.s-tl { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-tl button { font: inherit; cursor: pointer; }
.s-tl { background: #fff; color: #1f2430; padding: 18px 20px; font-size: 12px; }
.s-tl ol { list-style: none; margin: 0; padding: 0; display: grid; gap: 14px; position: relative; }
.s-tl ol::before { content: ""; position: absolute; left: 7px; top: 6px; bottom: 6px; width: 2px; background: #e3e6ec; }
.s-tl li { position: relative; padding-left: 28px; display: grid; gap: 1px; color: #9aa0aa; }
.s-tl li::before { content: ""; position: absolute; left: 0; top: 2px; width: 16px; height: 16px; border-radius: 50%; background: #fff; border: 2px solid #d0d5de; box-sizing: border-box; }
.s-tl li.done,.s-tl li.cur { color: #1f2430; }
.s-tl li.done::before { background: #16a34a; border-color: #16a34a; }
.s-tl li.cur::before { border-color: #3557e0; box-shadow: 0 0 0 4px rgba(53,87,224,.2); }
.s-tl li span { font-size: 11px; color: #888; }
```

No JavaScript needed.
