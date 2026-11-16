# Jakob's law

UX laws · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#jakob

People spend most of their time on other sites, so they expect yours to work the same way. Use familiar patterns.

- **Good for:** Navigation, carts, search, forms
- **Watch out:** Reinventing patterns people already know
- **Seen in:** almost every online store header

## Prompt for an AI assistant

Review my UI against Jakob's law.

What it is: People spend most of their time on other sites, so they expect yours to work the same way. Use familiar patterns.
Good for: Navigation, carts, search, forms.
Watch out: Reinventing patterns people already know.
Seen in: almost every online store header

For each screen or component I share:
1. Point to the exact places where it breaks this law and say why it matters to the user.
2. Suggest a concrete fix for each one, smallest change first.
3. Apply the fixes in code when I say so, keeping my existing styles.
4. Tell me how to check the result, for example with a quick user test or a measurement.

The kindofui example below shows the law in a small working demo.

## Code

Copy and adapt. The HTML and CSS are scoped to this demo, so they will not touch the page they are pasted into.

### HTML

```html
<div class="stage s-jakob"><div class="vs2">
    <div><span class="lb2 b">Reinvented</span><div class="sh2 w"><span class="cart">Bag (2)</span><span class="srch">?</span><b>Shopr</b></div><div class="pg3"><i></i><i></i><i></i><i></i></div><small>Logo on the right, cart on the left, search hidden behind "?"</small></div>
    <div><span class="lb2 g">Familiar</span><div class="sh2"><b>Shopr</b><span class="srch">⌕ Search products</span><span class="cart">Cart (2)</span></div><div class="pg3"><i></i><i></i><i></i><i></i></div><small>Logo left, search in the middle, cart top right, like the stores people already use</small></div>
  </div></div>
```

### CSS

```css
:root { --display: "Bricolage Grotesque",system-ui,sans-serif; --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): Bricolage Grotesque, JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-jakob, .s-jakob *, .s-jakob *::before, .s-jakob *::after { box-sizing: border-box; }
.s-jakob { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-jakob button { font: inherit; cursor: pointer; }
[hidden] { display: none !important; }
.vs2 { display: grid; grid-template-columns: 1fr 1fr; height: 100%; font-size: 11px; color: #1f2430; }
.vs2 > div { padding: 10px 12px; display: grid; gap: 8px; align-content: start; position: relative; min-width: 0; }
.vs2 > div:first-child { background: #fff; border-right: 1px solid #e5e7eb; }
.vs2 > div:last-child { background: #fafafa; }
.vs2 .lb2 { font: 700 10px var(--mono); letter-spacing: .06em; text-transform: uppercase; }
.vs2 .lb2.b { color: #b42318; }
.vs2 .lb2.g { color: #067647; }
.s-jakob .sh2 { display: flex; gap: 6px; align-items: center; background: #fff; border: 1px solid #e5e7eb; border-radius: 6px; padding: 6px; font-size: 10px; }
.s-jakob .sh2 b { font-family: var(--display); font-size: 12px; }
.s-jakob .vs2>div { min-width: 0; grid-template-columns: minmax(0,1fr); }
.s-jakob .sh2 b,.s-jakob .sh2 .cart { flex: none; }
.s-jakob .sh2 .srch { flex: 1; min-width: 0; border: 1px solid #e3e6ec; border-radius: 4px; padding: 3px 5px; color: #999; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.s-jakob .sh2.w .srch { flex: none; }
.s-jakob .sh2.w b { margin-left: auto; }
.s-jakob .sh2 .cart { background: #111827; color: #fff; border-radius: 4px; padding: 3px 5px; white-space: nowrap; }
.s-jakob .pg3 { display: grid; grid-template-columns: 1fr 1fr; gap: 4px; }
.s-jakob .pg3 i { aspect-ratio: 8/5; background: #e5e7eb; border-radius: 4px; max-width: 100%; }
.s-jakob small { color: #666; font-size: 10.5px; line-height: 1.4; }
```

No JavaScript needed.
