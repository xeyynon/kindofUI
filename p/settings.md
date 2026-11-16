# Settings page

Components and UX patterns · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#settings

Preferences grouped under clear headings, with switches that act right away and risky actions set apart in a danger zone.

- **Good for:** Preferences people change rarely
- **Watch out:** Hiding core features in settings
- **Seen in:** GitHub, Slack, iOS Settings

## Prompt for an AI assistant

Build this UI pattern for my app: Settings page.

What it is: Preferences grouped under clear headings, with switches that act right away and risky actions set apart in a danger zone.
Good for: Preferences people change rarely.
Watch out: Hiding core features in settings.
Seen in: GitHub, Slack, iOS Settings

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
<div class="stage s-set">
    <h5 role="none">Notifications</h5>
    <div class="grp"><div class="rw"><span><b>Email digest</b><small>A summary every Monday</small></span><button class="sw3" aria-pressed="true" data-toggle aria-label="Email digest"></button></div><div class="rw"><span><b>Push notifications</b><small>Mentions and replies only</small></span><button class="sw3" aria-pressed="false" data-toggle aria-label="Push notifications"></button></div><div class="rw"><span><b>Language</b></span><select id="set-lang" aria-label="Language"><option>English</option><option>हिन्दी</option><option>தமிழ்</option><option>বাংলা</option></select></div></div>
    <h5 role="none" class="dz">Danger zone</h5>
    <div class="grp dz"><div class="rw"><span><b>Delete account</b><small>This can't be undone</small></span><button class="del">Delete</button></div></div>
  </div>
```

### CSS

```css
:root { --body: "Figtree",system-ui,sans-serif; }
/* fonts used (all on Google Fonts): Figtree */
/* base styles the site gives every demo (scoped to this demo) */
.s-set, .s-set *, .s-set *::before, .s-set *::after { box-sizing: border-box; }
.s-set { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-set button { font: inherit; cursor: pointer; }
.s-set { background: #f7f8fa; color: #1f2430; padding: 14px 16px; display: grid; gap: 6px; align-content: start; font-size: 12px; }
.s-set h5 { margin: 4px 0 0; font: 700 11px var(--body); text-transform: uppercase; letter-spacing: .08em; color: #666; }
.s-set h5.dz { color: #dc2626; }
.s-set .grp { background: #fff; border: 1px solid #e9ebf0; border-radius: 10px; }
.s-set .grp.dz { border-color: #fecaca; }
.s-set .rw { display: flex; justify-content: space-between; align-items: center; gap: 10px; padding: 8px 12px; border-bottom: 1px solid #f1f2f5; }
.s-set .rw:last-child { border: 0; }
.s-set .rw span { display: grid; }
.s-set small { color: #888; font-size: 10.5px; }
.s-set select { border: 1px solid #d6dae1; border-radius: 6px; padding: 4px 6px; font: 12px var(--body); background: #fff; color: #1f2430; }
.s-set .sw3 { width: 38px; height: 22px; border-radius: 11px; border: 0; background: #d1d5db; position: relative; padding: 0; flex: none; transition: background .2s; }
.s-set .sw3::after { content: ""; position: absolute; top: 2px; left: 2px; width: 18px; height: 18px; border-radius: 50%; background: #fff; box-shadow: 0 1px 2px rgba(0,0,0,.3); transition: left .2s; }
.s-set .sw3[aria-pressed="true"] { background: #3557e0; }
.s-set .sw3[aria-pressed="true"]::after { left: 18px; }
.s-set .del { border: 1px solid #dc2626; background: #fff; color: #dc2626; border-radius: 6px; padding: 5px 10px; font-weight: 600; font-size: 11px; }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // generic toggles
  $$('[data-toggle]').forEach(b=>b.addEventListener('click',()=>b.setAttribute('aria-pressed',b.getAttribute('aria-pressed')!=='true')));
})();
```
