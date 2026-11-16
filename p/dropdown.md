# Dropdown menu

Navigation · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#dropdown

A button that opens a short list of actions or links, then closes.

- **Good for:** Account menus and short action lists
- **Watch out:** Main navigation with only a few items
- **Seen in:** account menus on GitHub, Google and most web apps

## Prompt for an AI assistant

Build this navigation pattern for my app: Dropdown menu.

What it is: A button that opens a short list of actions or links, then closes.
Good for: Account menus and short action lists.
Watch out: Main navigation with only a few items.
Seen in: account menus on GitHub, Google and most web apps

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
<div class="stage s-dd">
    <div class="nv"><b>Brewly</b><span>Shop</span><span>Learn</span>
      <div class="acct"><button class="ab" id="dd-btn" aria-expanded="true" aria-haspopup="menu">Neha ▾</button>
        <div class="menu" id="dd-menu" role="menu"><span class="who"><b>Neha Kulkarni</b><small>neha@example.com</small></span><button role="menuitem">Profile</button><button role="menuitem">Orders</button><button role="menuitem">Subscriptions</button><hr><button role="menuitem" class="out">Sign out</button></div>
      </div>
    </div>
    <div class="wfb"><div class="ln"></div><div class="ln" style="width:70%"></div><div class="ln" style="width:85%"></div></div>
  </div>
```

### CSS

```css
:root { --display: "Bricolage Grotesque",system-ui,sans-serif; }
/* fonts used (all on Google Fonts): Bricolage Grotesque */
/* base styles the site gives every demo (scoped to this demo) */
.s-dd, .s-dd *, .s-dd *::before, .s-dd *::after { box-sizing: border-box; }
.s-dd { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-dd button { font: inherit; cursor: pointer; }
.ln { height: 6px; border-radius: 3px; background: #d6dbe4; }
.s-dd { background: #f3f4f7; color: #1f2430; font-size: 12px; }
.s-dd .nv { background: #fff; display: flex; gap: 16px; align-items: center; padding: 10px 14px; border-bottom: 1px solid #e5e7eb; }
.s-dd .nv b { font-family: var(--display); font-size: 14px; }
.s-dd .acct { margin-left: auto; position: relative; }
.s-dd .ab { border: 1px solid #d6dae1; background: #fff; border-radius: 999px; padding: 5px 12px; font-size: 12px; }
.s-dd .menu { position: absolute; right: 0; top: calc(100% + 6px); width: 190px; background: #fff; border: 1px solid #e5e7eb; border-radius: 10px; box-shadow: 0 14px 30px rgba(0,0,0,.12); padding: 6px; display: grid; z-index: 2; }
.s-dd .who { display: grid; padding: 6px 8px 8px; border-bottom: 1px solid #eee; margin-bottom: 4px; }
.s-dd .who small { color: #888; }
.s-dd .menu button { border: 0; background: none; text-align: left; padding: 7px 8px; border-radius: 6px; font-size: 12px; color: #1f2430; }
.s-dd .menu button:hover { background: #f1f3f8; }
.s-dd hr { border: 0; border-top: 1px solid #eee; margin: 4px 0; width: 100%; }
.s-dd .menu .out { color: #dc2626; }
.s-dd .wfb { padding: 14px; display: grid; gap: 8px; width: 50%; }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  const on = (sel, ev, fn) => { const el = $(sel); if (el) el.addEventListener(ev, fn); return el; };

  /* ---------- Navigation ---------- */
  on('#dd-btn', 'click', e => { const m = $('#dd-menu'); m.hidden = !m.hidden; e.currentTarget.setAttribute('aria-expanded', !m.hidden); });
})();
```
