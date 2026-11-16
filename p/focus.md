# Visible focus states

Accessibility and motion · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#focus

Keyboard users need to see where they are. Removing the focus outline without a replacement makes a site unusable for them.

- **Good for:** Every interactive element
- **Watch out:** Removing outlines without a visible replacement
- **Seen in:** GOV.UK, GitHub, Apple

## Prompt for an AI assistant

Make my UI follow this accessibility and motion practice: Visible focus states.

What it is: Keyboard users need to see where they are. Removing the focus outline without a replacement makes a site unusable for them.
Good for: Every interactive element.
Watch out: Removing outlines without a visible replacement.
Seen in: GOV.UK, GitHub, Apple

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
<div class="stage s-foc"><div class="vs2">
    <div class="nofocus"><span class="lb2 b">outline: none</span><button>Save</button><button>Cancel</button><button>Learn more</button></div>
    <div class="okfocus"><span class="lb2 g">Visible focus ring</span><button>Save</button><button>Cancel</button><button>Learn more</button></div>
  </div><p class="hint">Click a button, then press <kbd>Tab</kbd> to move</p></div>
```

### CSS

```css
:root { --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-foc, .s-foc *, .s-foc *::before, .s-foc *::after { box-sizing: border-box; }
.s-foc { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-foc button { font: inherit; cursor: pointer; }
.vs2 { display: grid; grid-template-columns: 1fr 1fr; height: 100%; font-size: 11px; color: #1f2430; }
.vs2 > div { padding: 10px 12px; display: grid; gap: 8px; align-content: start; position: relative; min-width: 0; }
.vs2 > div:first-child { background: #fff; border-right: 1px solid #e5e7eb; }
.vs2 > div:last-child { background: #fafafa; }
.vs2 .lb2 { font: 700 10px var(--mono); letter-spacing: .06em; text-transform: uppercase; }
.vs2 .lb2.b { color: #b42318; }
.vs2 .lb2.g { color: #067647; }
.s-foc .vs2 > div { padding-bottom: 36px; }
.s-foc button,.s-foc a { border: 1px solid #cfd5dd; background: #fff; border-radius: 6px; padding: 7px; font-size: 12px; color: #1f2430; text-align: center; text-decoration: none; }
.s-foc .nofocus :focus,.s-foc .nofocus :focus-visible { outline: none; }
.s-foc .okfocus :focus-visible { outline: 3px solid #3557e0; outline-offset: 2px; }
.s-foc .hint { position: absolute; left: 0; right: 0; bottom: 10px; margin: 0; text-align: center; font-size: 11px; color: #555; z-index: 1; }
.s-foc kbd { font: 10px var(--mono); border: 1px solid #ccc; border-radius: 3px; padding: 0 4px; background: #fff; }
```

No JavaScript needed.
