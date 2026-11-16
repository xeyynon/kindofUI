# Floating action button (speed dial)

Navigation · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#fab

One round button for the main action, floating above the content. It can expand into a few related actions.

- **Good for:** One primary action on a mobile screen
- **Watch out:** Several equal actions, or covering content
- **Seen in:** Gmail compose, Google Keep, Google Maps

## Prompt for an AI assistant

Build this navigation pattern for my app: Floating action button (speed dial).

What it is: One round button for the main action, floating above the content. It can expand into a few related actions.
Good for: One primary action on a mobile screen.
Watch out: Several equal actions, or covering content.
Seen in: Gmail compose, Google Keep, Google Maps

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
<div class="stage s-fab center">
    <div class="phone open" id="fabph">
      <div class="hd2">Notes</div><div class="lst"><div></div><div></div><div></div><div></div></div>
      <span class="scrim"></span>
      <div class="sd"><div class="act"><span>Photo</span><button aria-label="Photo">◉</button></div><div class="act"><span>Checklist</span><button aria-label="Checklist">☑</button></div><div class="act"><span>Voice note</span><button aria-label="Voice note">♪</button></div><button class="main" aria-expanded="true" aria-label="Create">+</button></div>
    </div>
  </div>
```

### CSS

```css
:root { --display: "Bricolage Grotesque",system-ui,sans-serif; }
/* fonts used (all on Google Fonts): Bricolage Grotesque */
/* base styles the site gives every demo (scoped to this demo) */
.s-fab, .s-fab *, .s-fab *::before, .s-fab *::after { box-sizing: border-box; }
.s-fab { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-fab button { font: inherit; cursor: pointer; }
.center { display: grid; place-items: center; }
.phone { width: 172px; height: 262px; border-radius: 26px; border: 6px solid #1b1d22; background: #fff; position: relative; overflow: hidden; color: #1b1d22; font-size: 11px; }
.s-fab { background: #e9ecf1; }
.s-fab .hd2 { padding: 12px; font: 700 16px var(--display); }
.s-fab .lst { padding: 0 12px; display: grid; gap: 8px; }
.s-fab .lst div { background: #f3f4f7; border-radius: 8px; height: 34px; }
.s-fab .scrim { position: absolute; inset: 0; background: rgba(255,255,255,.75); opacity: 0; pointer-events: none; transition: opacity .2s; }
.s-fab .phone.open .scrim { opacity: 1; }
.s-fab .sd { position: absolute; right: 12px; bottom: 12px; display: grid; justify-items: end; gap: 10px; z-index: 2; }
.s-fab .act { display: flex; align-items: center; gap: 8px; opacity: 0; transform: translateY(10px); transition: .2s; pointer-events: none; }
.s-fab .phone.open .act { opacity: 1; transform: none; pointer-events: auto; }
.s-fab .act span { background: #fff; box-shadow: 0 1px 4px rgba(0,0,0,.2); border-radius: 4px; padding: 2px 6px; font-size: 10px; }
.s-fab .act button { width: 36px; height: 36px; border-radius: 50%; border: 0; background: #fff; box-shadow: 0 2px 6px rgba(0,0,0,.25); font-size: 14px; margin-right: 6px; color: #1f2430; }
.s-fab .main { width: 48px; height: 48px; border-radius: 16px; border: 0; background: #3557e0; color: #fff; font-size: 26px; box-shadow: 0 4px 10px rgba(53,87,224,.4); transition: transform .2s; }
.s-fab .phone.open .main { transform: rotate(45deg); }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  const on = (sel, ev, fn) => { const el = $(sel); if (el) el.addEventListener(ev, fn); return el; };

  on('#fabph .main', 'click', e => { const o = $('#fabph').classList.toggle('open'); e.currentTarget.setAttribute('aria-expanded', o); });
})();
```
