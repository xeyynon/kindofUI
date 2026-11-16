# Bauhaus

Visual styles · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#bauhaus

Primary colors, pure circles, squares and triangles, bold sans-serif type and strong asymmetric balance.

- **Good for:** Posters, art and design brands, education
- **Watch out:** Dense dashboards and long forms
- **Seen in:** posters, design schools, art exhibitions

## Prompt for an AI assistant

Design this interface in the Bauhaus visual style.

What it is: Primary colors, pure circles, squares and triangles, bold sans-serif type and strong asymmetric balance.
Good for: Posters, art and design brands, education.
Watch out: Dense dashboards and long forms.
Seen in: posters, design schools, art exhibitions

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
<div class="stage s-bau"><span class="sq"></span><span class="ci"></span><span class="tr"></span><span class="bk"></span><div class="tx">bauhaus<br>ausstellung<small>weimar · juli–sept 1923</small></div></div>
```

### CSS

```css
/* base styles the site gives every demo (scoped to this demo) */
.s-bau, .s-bau *, .s-bau *::before, .s-bau *::after { box-sizing: border-box; }
.s-bau { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-bau button { font: inherit; cursor: pointer; }
.s-bau { background: #f2ece0; color: #111; display: grid; grid-template-columns: repeat(4,1fr); grid-template-rows: repeat(4,1fr); font-family: "Helvetica Neue",Arial,sans-serif; }
.s-bau .sq { grid-area: 1/1/3/3; background: #d62828; }
.s-bau .ci { grid-area: 1/3/3/5; background: #003f88; border-radius: 50%; width: min(100%,136px); aspect-ratio: 1; max-width: 100%; justify-self: center; align-self: center; }
.s-bau .tr { grid-area: 3/1/5/2; background: #fcbf49; clip-path: polygon(0 100%,100% 100%,50% 0); }
.s-bau .bk { grid-area: 3/2/5/3; background: #111; width: 30%; justify-self: center; }
.s-bau .tx { grid-area: 3/3/5/5; padding: 10px; font: 700 22px/1 "Helvetica Neue",Arial,sans-serif; align-self: end; letter-spacing: -.02em; }
.s-bau small { display: block; font: 500 10px/1.3 "Helvetica Neue",Arial,sans-serif; margin-top: 6px; letter-spacing: .04em; }
```

No JavaScript needed.
