# Apple HIG (iOS style)

Visual styles · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#ios

Apple's Human Interface Guidelines: large titles, grouped rounded lists, colored icon squares, chevrons and green switches.

- **Good for:** Native iPhone and iPad apps
- **Watch out:** Android apps, where Material feels more at home
- **Seen in:** iPhone Settings, Apple's own apps, most native iOS apps

## Prompt for an AI assistant

Design this interface in the Apple HIG (iOS style) visual style.

What it is: Apple's Human Interface Guidelines: large titles, grouped rounded lists, colored icon squares, chevrons and green switches.
Good for: Native iPhone and iPad apps.
Watch out: Android apps, where Material feels more at home.
Seen in: iPhone Settings, Apple's own apps, most native iOS apps

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
<div class="stage s-ios">
    <h4 role="none">Settings</h4><div class="sr">⌕ Search</div>
    <div class="grp"><div class="row"><i style="background:#ff9500">✈</i><span>Airplane Mode</span><button class="isw" aria-pressed="false" aria-label="Airplane Mode" data-toggle></button></div><div class="row"><i style="background:#007aff">≋</i><span>Wi‑Fi</span><em>Home_5G</em><b>›</b></div><div class="row"><i style="background:#34c759">◉</i><span>Mobile Data</span><b>›</b></div></div>
    <div class="grp"><div class="row"><i style="background:#ff3b30">◔</i><span>Notifications</span><b>›</b></div></div>
  </div>
```

### CSS

```css
/* base styles the site gives every demo (scoped to this demo) */
.s-ios, .s-ios *, .s-ios *::before, .s-ios *::after { box-sizing: border-box; }
.s-ios { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-ios button { font: inherit; cursor: pointer; }
.s-ios { background: #f2f2f7; color: #000; font: 13px -apple-system,"SF Pro Text",system-ui,sans-serif; padding: 14px 16px; display: grid; gap: 8px; align-content: start; }
.s-ios h4 { margin: 0; font-size: 26px; font-weight: 700; }
.s-ios .sr { background: #e3e3e8; border-radius: 10px; padding: 6px 10px; color: #8e8e93; }
.s-ios .grp { background: #fff; border-radius: 10px; overflow: hidden; }
.s-ios .row { display: flex; align-items: center; gap: 10px; padding: 6px 12px; border-bottom: .5px solid #d1d1d6; min-height: 38px; }
.s-ios .row:last-child { border: 0; }
.s-ios .row i { width: 26px; height: 26px; border-radius: 7px; color: #fff; font-style: normal; display: grid; place-items: center; font-size: 13px; flex: none; }
.s-ios .row span { flex: 1; }
.s-ios em { font-style: normal; color: #8e8e93; }
.s-ios .row b { color: #c4c4c7; font-size: 18px; font-weight: 400; line-height: 1; }
.s-ios .isw { width: 46px; height: 28px; border-radius: 14px; border: 0; background: #e9e9ea; position: relative; padding: 0; transition: background .2s; flex: none; }
.s-ios .isw::after { content: ""; position: absolute; top: 2px; left: 2px; width: 24px; height: 24px; border-radius: 50%; background: #fff; box-shadow: 0 2px 4px rgba(0,0,0,.2); transition: left .2s; }
.s-ios .isw[aria-pressed="true"] { background: #34c759; }
.s-ios .isw[aria-pressed="true"]::after { left: 20px; }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // generic toggles
  $$('[data-toggle]').forEach(b=>b.addEventListener('click',()=>b.setAttribute('aria-pressed',b.getAttribute('aria-pressed')!=='true')));
})();
```
