# Notification center

Components and UX patterns · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#notifications

A bell with an unread count opens a panel of recent activity. Unread items are tinted and dotted.

- **Good for:** Updates people need to act on
- **Watch out:** Marketing noise; respect quiet hours
- **Seen in:** GitHub, LinkedIn, Slack, Figma

## Prompt for an AI assistant

Build this UI pattern for my app: Notification center.

What it is: A bell with an unread count opens a panel of recent activity. Unread items are tinted and dotted.
Good for: Updates people need to act on.
Watch out: Marketing noise; respect quiet hours.
Seen in: GitHub, LinkedIn, Slack, Figma

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
<div class="stage s-ntf">
    <div class="tb"><b>Workspace</b><button class="bell" id="ntf-b" aria-expanded="true" aria-label="Notifications, 3 unread"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4z"></path><path d="M10 20a2 2 0 0 0 4 0"></path></svg><span class="bdg" id="ntf-c">3</span></button></div>
    <div class="pnl" id="ntf-p">
      <div class="ph"><b>Notifications</b><button id="ntf-r">Mark all as read</button></div>
      <div class="nt un"><i style="background:#f59e0b">AK</i><span><span><b>Ananya</b> commented on <b>Pricing page</b></span><small>2 min ago</small></span></div>
      <div class="nt un"><i style="background:#10b981">RS</i><span><span><b>Rohan</b> assigned you <b>Fix login timeout</b></span><small>18 min ago</small></span></div>
      <div class="nt un"><i style="background:#8b5cf6">ZK</i><span><span><b>Zoya</b> mentioned you in <b># design</b></span><small>1 hr ago</small></span></div>
      <div class="nt"><i style="background:#64748b">KS</i><span><span><b>Kabir</b> shared <b>Q4 plan</b></span><small>Yesterday</small></span></div>
    </div>
  </div>
```

### CSS

```css
:root { --body: "Figtree",system-ui,sans-serif; }
/* fonts used (all on Google Fonts): Figtree */
/* base styles the site gives every demo (scoped to this demo) */
.s-ntf, .s-ntf *, .s-ntf *::before, .s-ntf *::after { box-sizing: border-box; }
.s-ntf { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-ntf button { font: inherit; cursor: pointer; }
.s-ntf { background: #f3f4f7; color: #1f2430; font-size: 12px; }
.s-ntf .tb { background: #fff; display: flex; justify-content: space-between; align-items: center; padding: 8px 14px; border-bottom: 1px solid #e5e7eb; }
.s-ntf .bell { position: relative; border: 0; background: none; padding: 4px; color: #1f2430; display: grid; }
.s-ntf .bdg { position: absolute; top: -2px; right: -4px; background: #dc2626; color: #fff; font: 700 9px var(--body); min-width: 16px; height: 16px; border-radius: 8px; display: grid; place-items: center; padding: 0 3px; }
.s-ntf .pnl { position: absolute; right: 10px; top: 46px; width: min(280px,calc(100% - 20px)); background: #fff; border: 1px solid #e5e7eb; border-radius: 10px; box-shadow: 0 14px 30px rgba(0,0,0,.12); overflow: hidden; }
.s-ntf .ph { display: flex; justify-content: space-between; align-items: center; padding: 9px 12px; border-bottom: 1px solid #eee; }
.s-ntf .ph button { border: 0; background: none; color: #3557e0; font-size: 11px; font-weight: 600; }
.s-ntf .nt { display: flex; gap: 8px; padding: 8px 12px; position: relative; border-bottom: 1px solid #f4f5f7; }
.s-ntf .nt.un { background: #f5f7ff; }
.s-ntf .nt.un::after { content: ""; position: absolute; right: 12px; top: 14px; width: 7px; height: 7px; border-radius: 50%; background: #3557e0; }
.s-ntf .nt i { width: 26px; height: 26px; border-radius: 50%; flex: none; color: #fff; font: 700 9px var(--body); font-style: normal; display: grid; place-items: center; }
.s-ntf .nt span { display: grid; padding-right: 14px; }
.s-ntf small { color: #888; font-size: 10px; }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  const on = (sel, ev, fn) => { const el = $(sel); if (el) el.addEventListener(ev, fn); return el; };

  // notifications
  on('#ntf-b', 'click', e => { const p = $('#ntf-p'); p.hidden = !p.hidden; e.currentTarget.setAttribute('aria-expanded', !p.hidden); });

  on('#ntf-r', 'click', () => { $$('.s-ntf .nt.un').forEach(n => n.classList.remove('un')); $('#ntf-c').hidden = true; $('#ntf-b').setAttribute('aria-label', 'Notifications, none unread'); });
})();
```
