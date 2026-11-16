# Navigation rail

Navigation · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#navrail

A slim vertical bar of icons with labels, made for tablets and desktop. The selected item gets a pill.

- **Good for:** Tablets and desktop apps with 3 to 7 destinations
- **Watch out:** Phones; use a bottom tab bar
- **Seen in:** Gmail on tablets, Google Drive, Android tablet apps

## Prompt for an AI assistant

Build this navigation pattern for my app: Navigation rail.

What it is: A slim vertical bar of icons with labels, made for tablets and desktop. The selected item gets a pill.
Good for: Tablets and desktop apps with 3 to 7 destinations.
Watch out: Phones; use a bottom tab bar.
Seen in: Gmail on tablets, Google Drive, Android tablet apps

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
<div class="stage s-rail" data-tabs="">
    <div class="rl"><button class="fb" aria-label="Compose">✎</button><button class="on" data-tab="m"><i>✉</i>Mail</button><button data-tab="c"><i>☷</i>Chat</button><button data-tab="s"><i>◫</i>Spaces</button><button data-tab="v"><i>◉</i>Meet</button></div>
    <div class="pn">
      <div data-panel="m"><h5 role="none">Inbox</h5><div class="it3"><b>Ravi Menon</b><span>Invoice for October</span></div><div class="it3"><b>Design team</b><span>Crit notes from Thursday</span></div><div class="it3"><b>Neha</b><span>Coffee on Friday?</span></div></div>
      <div data-panel="c" hidden=""><h5 role="none">Chat</h5><div class="it3"><b>Arjun</b><span>Pushed the fix 👍</span></div><div class="it3"><b>Zoya</b><span>Can you review my PR?</span></div></div>
      <div data-panel="s" hidden=""><h5 role="none">Spaces</h5><div class="it3"><b># launch</b><span>12 new messages</span></div><div class="it3"><b># research</b><span>3 new messages</span></div></div>
      <div data-panel="v" hidden=""><h5 role="none">Meet</h5><div class="it3"><b>Start a meeting</b><span>Get a link to share</span></div><div class="it3"><b>Join with a code</b><span>abc-defg-hij</span></div></div>
    </div>
  </div>
```

### CSS

```css
/* base styles the site gives every demo (scoped to this demo) */
.s-rail, .s-rail *, .s-rail *::before, .s-rail *::after { box-sizing: border-box; }
.s-rail { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-rail button { font: inherit; cursor: pointer; }
[hidden] { display: none !important; }
.s-rail { background: #fef7ff; color: #1d1b20; display: grid; grid-template-columns: 76px 1fr; font: 11px Roboto,system-ui,sans-serif; }
.s-rail .rl { display: grid; align-content: start; justify-items: center; gap: 6px; padding: 8px 0; border-right: 1px solid #ece6f0; }
.s-rail .fb { width: 44px; height: 44px; border-radius: 14px; border: 0; background: #ffd8e4; font-size: 18px; margin-bottom: 4px; color: #31111d; }
.s-rail .rl button[data-tab] { border: 0; background: none; display: grid; justify-items: center; gap: 3px; font-size: 11px; color: #49454f; }
.s-rail .rl button i { font-style: normal; width: 52px; height: 30px; border-radius: 15px; display: grid; place-items: center; font-size: 15px; }
.s-rail .rl button.on i { background: #e8def8; color: #1d192b; }
.s-rail .rl button.on { font-weight: 700; color: #1d1b20; }
.s-rail .pn { padding: 14px; min-width: 0; }
.s-rail .pn > div { display: grid; gap: 8px; }
.s-rail h5 { margin: 0; font-size: 18px; font-weight: 500; }
.s-rail .it3 { background: #fff; border-radius: 12px; padding: 8px 10px; display: grid; gap: 2px; }
.s-rail .it3 span { color: #666; }
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
