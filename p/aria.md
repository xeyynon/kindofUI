# Semantic HTML & ARIA

Accessibility and motion · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#aria

Use real buttons, labels and alt text so screen readers can announce what things are. Add ARIA only when native HTML can't do it.

- **Good for:** Custom controls and icon-only buttons
- **Watch out:** Adding ARIA where a native element would do
- **Seen in:** every accessible website and app

## Prompt for an AI assistant

Make my UI follow this accessibility and motion practice: Semantic HTML & ARIA.

What it is: Use real buttons, labels and alt text so screen readers can announce what things are. Add ARIA only when native HTML can't do it.
Good for: Custom controls and icon-only buttons.
Watch out: Adding ARIA where a native element would do.
Seen in: every accessible website and app

Steps:
1. Audit every page and component I share against this practice and list each problem with its element.
2. Fix the problems in code without changing the visual design more than needed.
3. Follow WCAG 2.2 AA and say which success criterion each fix covers.
4. Tell me how to test it myself: keyboard only, a screen reader, 200% zoom and reduced motion.

The kindofui example below shows the practice in a small working demo.

## Code

Copy and adapt. The HTML and CSS are scoped to this demo, so they will not touch the page they are pasted into.

### HTML

```html
<div class="stage s-aria"><div class="vs2">
    <div><span class="lb2 b">No meaning</span><code>&lt;div class="icon"&gt;⌕&lt;/div&gt;</code><div class="sr"><small>Screen reader says</small><b>Nothing useful, and it can't be reached with Tab</b></div><code>&lt;img src="shoe.jpg"&gt;</code><div class="sr"><small>Screen reader says</small><b>"shoe dot jpg, image"</b></div></div>
    <div><span class="lb2 g">Real meaning</span><code>&lt;button aria-label="Search"&gt;⌕&lt;/button&gt;</code><div class="sr"><small>Screen reader says</small><b>"Search, button"</b></div><code>&lt;img alt="Red running shoe, side view"&gt;</code><div class="sr"><small>Screen reader says</small><b>"Red running shoe, side view, image"</b></div></div>
  </div></div>
```

### CSS

```css
:root { --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-aria, .s-aria *, .s-aria *::before, .s-aria *::after { box-sizing: border-box; }
.s-aria { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-aria button { font: inherit; cursor: pointer; }
.vs2 { display: grid; grid-template-columns: 1fr 1fr; height: 100%; font-size: 11px; color: #1f2430; }
.vs2 > div { padding: 10px 12px; display: grid; gap: 8px; align-content: start; position: relative; min-width: 0; }
.vs2 > div:first-child { background: #fff; border-right: 1px solid #e5e7eb; }
.vs2 > div:last-child { background: #fafafa; }
.vs2 .lb2 { font: 700 10px var(--mono); letter-spacing: .06em; text-transform: uppercase; }
.vs2 .lb2.b { color: #b42318; }
.vs2 .lb2.g { color: #067647; }
.s-aria code { font: 10px/1.4 var(--mono); background: #1f2430; color: #e5e7eb; border-radius: 6px; padding: 6px 8px; overflow-wrap: anywhere; display: block; }
.s-aria .sr { display: grid; gap: 2px; background: #fff; border: 1px dashed #cfd5dd; border-radius: 6px; padding: 5px 7px; }
.s-aria .sr small { color: #888; font-size: 9px; text-transform: uppercase; letter-spacing: .06em; }
.s-aria .sr b { font-weight: 600; font-size: 10.5px; }
```

No JavaScript needed.
