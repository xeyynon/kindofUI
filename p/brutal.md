# Brutalism

Visual styles · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#brutal

Raw, default-browser look: system serif fonts, blue underlined links, plain tables, no polish on purpose.

- **Good for:** Art, portfolios, statements, raw data sites
- **Watch out:** Mainstream shopping or non-technical users
- **Seen in:** Craigslist, Hacker News, Berkshire Hathaway, art portfolios

## Prompt for an AI assistant

Design this interface in the Brutalism visual style.

What it is: Raw, default-browser look: system serif fonts, blue underlined links, plain tables, no polish on purpose.
Good for: Art, portfolios, statements, raw data sites.
Watch out: Mainstream shopping or non-technical users.
Seen in: Craigslist, Hacker News, Berkshire Hathaway, art portfolios

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
<div class="stage s-bru">
    <h4 role="none">RAW DATA ARCHIVE</h4>
    <a href="#brutal">index</a> | <a href="#brutal">about</a> | <a href="#brutal">contact</a>
    <hr>
    <table><tbody><tr><th>file</th><th>size</th><th>date</th></tr><tr><td><a href="#brutal">report_q3.txt</a></td><td>12 KB</td><td>2026-10-02</td></tr><tr><td><a href="#brutal">notes.txt</a></td><td>3 KB</td><td>2026-09-14</td></tr><tr><td><a href="#brutal">photos/</a></td><td>-</td><td>2026-08-30</td></tr></tbody></table>
    <hr>
    <code>last updated 2026-11-07</code>
  </div>
```

### CSS

```css
/* base styles the site gives every demo (scoped to this demo) */
.s-bru, .s-bru *, .s-bru *::before, .s-bru *::after { box-sizing: border-box; }
.s-bru { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-bru button { font: inherit; cursor: pointer; }
.s-bru { background: #fff; color: #000; font-family: "Times New Roman",Times,serif; padding: 14px 16px; font-size: 14px; overflow: auto; }
.s-bru h4 { font-size: 26px; margin: 0 0 4px; font-weight: 700; }
.s-bru a { color: #00e; }
.s-bru hr { border: 0; border-top: 1px solid #000; margin: 8px 0; }
.s-bru table { border-collapse: collapse; font-size: 12px; width: 100%; }
.s-bru td,.s-bru th { border: 1px solid #000; padding: 2px 5px; text-align: left; }
.s-bru code { font-family: "Courier New",monospace; }
```

No JavaScript needed.
