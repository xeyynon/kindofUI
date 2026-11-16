# Fluent (Windows style)

Visual styles · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#fluent

Microsoft's design system: soft tinted backgrounds, light cards, a blue accent bar on the selected item and rounded toggles.

- **Good for:** Windows apps and Microsoft-ecosystem tools
- **Watch out:** Brands that need their own identity
- **Seen in:** Windows 11 Settings, Microsoft 365, Teams

## Prompt for an AI assistant

Design this interface in the Fluent (Windows style) visual style.

What it is: Microsoft's design system: soft tinted backgrounds, light cards, a blue accent bar on the selected item and rounded toggles.
Good for: Windows apps and Microsoft-ecosystem tools.
Watch out: Brands that need their own identity.
Seen in: Windows 11 Settings, Microsoft 365, Teams

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
<div class="stage s-flu">
    <div class="nv"><span>⌂ Home</span><span class="on">▭ System</span><span>✱ Bluetooth</span><span>◐ Personalisation</span><span>☰ Apps</span></div>
    <div class="mn"><h4 role="none">Display</h4><div class="fc"><span>Brightness</span><input type="range" id="flu-r" value="70" aria-label="Brightness"></div><div class="fc"><span>Night light<small>Warmer colours at night</small></span><button class="fsw" aria-pressed="true" aria-label="Night light" data-toggle></button></div><div class="fc"><span>HDR<small>Brighter, more vivid video</small></span><button class="fsw" aria-pressed="false" aria-label="HDR" data-toggle></button></div></div>
  </div>
```

### CSS

```css
/* base styles the site gives every demo (scoped to this demo) */
.s-flu, .s-flu *, .s-flu *::before, .s-flu *::after { box-sizing: border-box; }
.s-flu { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-flu button { font: inherit; cursor: pointer; }
.s-flu { background: linear-gradient(135deg,#eef2f7,#f5eff3); color: #1b1b1b; font: 12px "Segoe UI Variable","Segoe UI",system-ui,sans-serif; display: grid; grid-template-columns: 118px 1fr; }
.s-flu .nv { padding: 12px 6px; display: grid; gap: 2px; align-content: start; }
.s-flu .nv span { padding: 6px 8px; border-radius: 5px; position: relative; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.s-flu .nv span.on { background: rgba(0,0,0,.05); }
.s-flu .nv span.on::before { content: ""; position: absolute; left: 0; top: 25%; bottom: 25%; width: 3px; border-radius: 2px; background: #0067c0; }
.s-flu .mn { padding: 12px; display: grid; gap: 6px; align-content: start; min-width: 0; }
.s-flu h4 { margin: 0 0 6px; font-size: 18px; font-weight: 600; }
.s-flu .fc { background: rgba(255,255,255,.75); border: 1px solid #e5e5e5; border-radius: 6px; padding: 9px 12px; display: flex; justify-content: space-between; align-items: center; gap: 8px; }
.s-flu .fc span { display: grid; }
.s-flu small { color: #666; font-size: 10.5px; }
.s-flu input[type=range] { accent-color: #0067c0; width: 90px; min-width: 0; }
.s-flu .fsw { width: 40px; height: 20px; border-radius: 10px; border: 1px solid #868686; background: #fff; position: relative; padding: 0; flex: none; }
.s-flu .fsw::after { content: ""; position: absolute; top: 3px; left: 3px; width: 12px; height: 12px; border-radius: 50%; background: #5d5d5d; transition: left .15s; }
.s-flu .fsw[aria-pressed="true"] { background: #0067c0; border-color: #0067c0; }
.s-flu .fsw[aria-pressed="true"]::after { left: 23px; background: #fff; }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // generic toggles
  $$('[data-toggle]').forEach(b=>b.addEventListener('click',()=>b.setAttribute('aria-pressed',b.getAttribute('aria-pressed')!=='true')));
})();
```
