# Holy grail layout

Layouts · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#holygrail

Header on top, footer at the bottom, and three columns between them: navigation, main content and a side panel.

- **Good for:** Docs, news, admin panels, wikis
- **Watch out:** Phones; collapse the side columns
- **Seen in:** MDN docs, Wikipedia, news sites, admin panels

## Prompt for an AI assistant

Build this layout for my page: Holy grail layout.

What it is: Header on top, footer at the bottom, and three columns between them: navigation, main content and a side panel.
Good for: Docs, news, admin panels, wikis.
Watch out: Phones; collapse the side columns.
Seen in: MDN docs, Wikipedia, news sites, admin panels

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
<div class="stage wf s-hg"><div class="h">Header</div><div class="n">Nav</div><div class="m">Main content</div><div class="a">Aside</div><div class="f">Footer</div></div>
```

### CSS

```css
:root { --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-hg, .s-hg *, .s-hg *::before, .s-hg *::after { box-sizing: border-box; }
.s-hg { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-hg button { font: inherit; cursor: pointer; }
.wf { background: #f3f4f7; color: #2b3040; }
.s-hg { padding: 12px; display: grid; gap: 6px; grid-template: "h h h" 34px "n m a" 1fr "f f f" 28px/60px 1fr 70px; font: 600 11px var(--mono); color: #4b5568; }
.s-hg > div { display: grid; place-items: center; border-radius: 6px; }
.s-hg .h { grid-area: h; background: #c7d2fe; }
.s-hg .n { grid-area: n; background: #ddd6fe; }
.s-hg .m { grid-area: m; background: #fff; border: 1px solid #dfe3ea; }
.s-hg .a { grid-area: a; background: #fde68a; }
.s-hg .f { grid-area: f; background: #cbd5e1; }
```

No JavaScript needed.
