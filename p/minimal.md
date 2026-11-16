# Minimalism

Visual styles · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#minimal

Lots of white space, one or two colors and only the elements the task needs. Hierarchy comes from size and spacing instead of decoration.

- **Good for:** Content-first products, writing and reading tools
- **Watch out:** Feature-dense apps that need visible options
- **Seen in:** Google Search, Notion, Apple, Muji

## Prompt for an AI assistant

Design this interface in the Minimalism visual style.

What it is: Lots of white space, one or two colors and only the elements the task needs. Hierarchy comes from size and spacing instead of decoration.
Good for: Content-first products, writing and reading tools.
Watch out: Feature-dense apps that need visible options.
Seen in: Google Search, Notion, Apple, Muji

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
<div class="stage s-min">
    <small>Notes</small>
    <h4 role="none">Write less.<br>Mean more.</h4>
    <p>A blank page, a blinking cursor and nothing else in your way.</p>
    <a href="#minimal">Start writing →</a>
  </div>
```

### CSS

```css
:root { --body: "Figtree",system-ui,sans-serif; }
/* fonts used (all on Google Fonts): Figtree */
/* base styles the site gives every demo (scoped to this demo) */
.s-min, .s-min *, .s-min *::before, .s-min *::after { box-sizing: border-box; }
.s-min { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-min button { font: inherit; cursor: pointer; }
.s-min { background: #fff; color: #111; padding: 36px 34px; display: flex; flex-direction: column; justify-content: center; gap: 12px; }
.s-min small { font: 500 11px var(--body); letter-spacing: .14em; text-transform: uppercase; color: #888; }
.s-min h4 { font: 500 30px/1.1 var(--body); margin: 0; letter-spacing: -.02em; }
.s-min p { margin: 0; color: #777; font-size: 13px; max-width: 30ch; }
.s-min a { color: #111; font-size: 13px; }
```

No JavaScript needed.
