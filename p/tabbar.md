# Bottom tab bar

Navigation · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#tabbar

Three to five main sections pinned to the bottom of a phone screen, within easy reach of the thumb.

- **Good for:** 3 to 5 top-level sections on mobile
- **Watch out:** More than five items or rarely used pages
- **Seen in:** Instagram, YouTube, WhatsApp, most iOS apps

## Prompt for an AI assistant

Build this navigation pattern for my app: Bottom tab bar.

What it is: Three to five main sections pinned to the bottom of a phone screen, within easy reach of the thumb.
Good for: 3 to 5 top-level sections on mobile.
Watch out: More than five items or rarely used pages.
Seen in: Instagram, YouTube, WhatsApp, most iOS apps

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
<div class="stage s-tabbar center">
    <div class="phone" data-tabs="">
      <div class="scr" data-panel="home"><h5 role="none">Home</h5><div style="height:90px;border-radius:8px;background:linear-gradient(135deg,#f58529,#dd2a7b,#8134af)"></div><div class="ln" style="width:70%"></div></div>
      <div class="scr" data-panel="search" hidden=""><h5 role="none">Search</h5><div style="border:1px solid #ddd;border-radius:8px;padding:6px;color:#999">Search</div><div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:3px"><div style="aspect-ratio:1;background:#fbcfe8"></div><div style="aspect-ratio:1;background:#bfdbfe"></div><div style="aspect-ratio:1;background:#bbf7d0"></div><div style="aspect-ratio:1;background:#fde68a"></div><div style="aspect-ratio:1;background:#ddd6fe"></div><div style="aspect-ratio:1;background:#fecaca"></div></div></div>
      <div class="scr" data-panel="add" hidden=""><h5 role="none">New post</h5><div style="height:110px;border:2px dashed #ccc;border-radius:8px;display:grid;place-items:center;color:#999">Add photo</div></div>
      <div class="scr" data-panel="likes" hidden=""><h5 role="none">Activity</h5><span>Priya liked your photo</span><span>Arjun followed you</span></div>
      <div class="scr" data-panel="me" hidden=""><h5 role="none">Profile</h5><div style="width:50px;height:50px;border-radius:50%;background:#ddd"></div><span>128 posts · 2.4k followers</span></div>
      <div class="tb">
        <button class="on" data-tab="home"><span>⌂</span>Home</button><button data-tab="search"><span>⌕</span>Search</button><button data-tab="add"><span>＋</span>Post</button><button data-tab="likes"><span>♡</span>Activity</button><button data-tab="me"><span>◯</span>Profile</button>
      </div>
    </div>
  </div>
```

### CSS

```css
:root { --display: "Bricolage Grotesque",system-ui,sans-serif; }
/* fonts used (all on Google Fonts): Bricolage Grotesque */
/* base styles the site gives every demo (scoped to this demo) */
.s-tabbar, .s-tabbar *, .s-tabbar *::before, .s-tabbar *::after { box-sizing: border-box; }
.s-tabbar { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-tabbar button { font: inherit; cursor: pointer; }
[hidden] { display: none !important; }
.center { display: grid; place-items: center; }
.phone { width: 172px; height: 262px; border-radius: 26px; border: 6px solid #1b1d22; background: #fff; position: relative; overflow: hidden; color: #1b1d22; font-size: 11px; }
.ln { height: 6px; border-radius: 3px; background: #d6dbe4; }
.s-tabbar { background: #e9ecf1; }
.s-tabbar .scr { padding: 10px; display: grid; gap: 8px; }
.s-tabbar .scr h5 { margin: 0; font: 700 15px var(--display); }
.s-tabbar .tb { position: absolute; bottom: 0; left: 0; right: 0; display: flex; border-top: 1px solid #e5e7eb; background: #fff; padding: 5px 0 7px; }
.s-tabbar .tb button { flex: 1; min-width: 0; padding: 0 1px; border: 0; background: none; display: grid; justify-items: center; gap: 1px; font-size: 9px; color: #9aa0aa; }
.s-tabbar .tb button span { font-size: 16px; line-height: 1; }
.s-tabbar .tb button.on { color: #e1306c; }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // generic tabs
  $$('[data-tabs]').forEach(g=>{
    const tabs=$$('[data-tab]',g);
    tabs.forEach(b=>b.addEventListener('click',()=>{
      tabs.forEach(x=>x.classList.toggle('on',x===b));
      $$('[data-panel]',g).forEach(p=>p.hidden=p.dataset.panel!==b.dataset.tab);
    }));
  });
})();
```
