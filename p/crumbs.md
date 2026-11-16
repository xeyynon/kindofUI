# Breadcrumbs

Navigation · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#crumbs

A trail that shows where you are in a hierarchy and lets you jump back up a level. Two styles shown: slash and chevron.

- **Good for:** Deep hierarchies: shops, docs, file systems
- **Watch out:** Flat sites with one or two levels
- **Seen in:** Amazon, Flipkart, file managers, documentation

## Prompt for an AI assistant

Build this navigation pattern for my app: Breadcrumbs.

What it is: A trail that shows where you are in a hierarchy and lets you jump back up a level. Two styles shown: slash and chevron.
Good for: Deep hierarchies: shops, docs, file systems.
Watch out: Flat sites with one or two levels.
Seen in: Amazon, Flipkart, file managers, documentation

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
<div class="stage s-crumb">
    <nav aria-label="Breadcrumb"><a href="#crumbs">Home</a>/<a href="#crumbs">Electronics</a>/<a href="#crumbs">Laptops</a>/<span>ThinkPad X1 Carbon</span></nav>
    <h5 role="none">ThinkPad X1 Carbon</h5>
    <div class="chev"><span>Account</span><span>Settings</span><span class="on">Privacy</span></div>
  </div>
```

### CSS

```css
:root { --display: "Bricolage Grotesque",system-ui,sans-serif; }
/* fonts used (all on Google Fonts): Bricolage Grotesque */
/* base styles the site gives every demo (scoped to this demo) */
.s-crumb, .s-crumb *, .s-crumb *::before, .s-crumb *::after { box-sizing: border-box; }
.s-crumb { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-crumb button { font: inherit; cursor: pointer; }
.s-crumb { background: #fff; color: #1f2430; padding: 22px; display: grid; gap: 22px; align-content: center; font-size: 13px; }
.s-crumb nav { display: flex; flex-wrap: wrap; gap: 6px; align-items: center; color: #666; }
.s-crumb nav a { color: #3557e0; text-decoration: none; }
.s-crumb nav a:hover { text-decoration: underline; }
.s-crumb .chev { display: flex; flex-wrap: wrap; }
.s-crumb .chev span { background: #e8ecf4; padding: 6px 14px 6px 18px; clip-path: polygon(0 0,calc(100% - 10px) 0,100% 50%,calc(100% - 10px) 100%,0 100%,10px 50%); margin-right: -6px; font-size: 12px; }
.s-crumb .chev span:first-child { clip-path: polygon(0 0,calc(100% - 10px) 0,100% 50%,calc(100% - 10px) 100%,0 100%); padding-left: 12px; }
.s-crumb .chev span.on { background: #3557e0; color: #fff; }
.s-crumb h5 { margin: 0; font: 700 20px var(--display); }
```

No JavaScript needed.
