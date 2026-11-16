# Editorial / typography-led

Visual styles · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#editorial

Big expressive type carries the design, laid out like a magazine with kickers, bylines, columns and drop caps.

- **Good for:** Blogs, magazines, case studies, brand stories
- **Watch out:** Dense app screens and forms
- **Seen in:** The New York Times features, Medium, The Verge, Awwwards portfolios

## Prompt for an AI assistant

Design this interface in the Editorial / typography-led visual style.

What it is: Big expressive type carries the design, laid out like a magazine with kickers, bylines, columns and drop caps.
Good for: Blogs, magazines, case studies, brand stories.
Watch out: Dense app screens and forms.
Seen in: The New York Times features, Medium, The Verge, Awwwards portfolios

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
<div class="stage s-edit">
    <span class="kick">THE WEEKEND ESSAY</span>
    <h4 role="none">The slow return of the printed page</h4>
    <div class="by">By Meera Iyer · 8 min read</div>
    <div class="cols">Independent bookshops reported their best year in a decade, and readers say the reason is simple. A book asks for nothing back: no alerts, no feeds, no streaks to protect.</div>
  </div>
```

### CSS

```css
:root { --body: "Figtree",system-ui,sans-serif; }
/* fonts used (all on Google Fonts): Figtree, DM Serif Display */
/* base styles the site gives every demo (scoped to this demo) */
.s-edit, .s-edit *, .s-edit *::before, .s-edit *::after { box-sizing: border-box; }
.s-edit { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-edit button { font: inherit; cursor: pointer; }
.s-edit { background: #fbfbf9; color: #111; padding: 20px 22px; display: grid; gap: 10px; align-content: start; }
.s-edit .kick { font: 700 10px var(--body); letter-spacing: .2em; color: #c0262d; }
.s-edit h4 { font: 400 36px/.98 "DM Serif Display",Georgia,serif; margin: 0; letter-spacing: -.01em; }
.s-edit .by { font: 11px var(--body); color: #666; border-top: 1px solid #111; border-bottom: 1px solid #ddd; padding: 5px 0; }
.s-edit .cols { columns: 2; column-gap: 16px; font: 12px/1.5 Georgia,serif; color: #333; }
.s-edit .cols::first-letter { float: left; font: 400 40px/.8 "DM Serif Display",serif; margin: 4px 6px 0 0; color: #111; }
```

No JavaScript needed.
