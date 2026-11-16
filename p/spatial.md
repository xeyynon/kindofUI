# Spatial UI

Visual styles · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#spatial

Floating glass windows placed in a real room, with side "ornaments" for tabs and a grab bar to move the window.

- **Good for:** AR/VR apps and immersive experiences
- **Watch out:** Flat screens, where depth effects only add blur
- **Seen in:** Apple visionOS, Meta Quest apps

## Prompt for an AI assistant

Design this interface in the Spatial UI visual style.

What it is: Floating glass windows placed in a real room, with side "ornaments" for tabs and a grab bar to move the window.
Good for: AR/VR apps and immersive experiences.
Watch out: Flat screens, where depth effects only add blur.
Seen in: Apple visionOS, Meta Quest apps

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
<div class="stage s-sp"><div class="win"><div class="orn"><i>◫</i><i class="on">▤</i><i>♡</i></div><b>Photos</b><div class="ph3"><i style="background:linear-gradient(135deg,#f6d365,#fda085)"></i><i style="background:linear-gradient(135deg,#84fab0,#8fd3f4)"></i><i style="background:linear-gradient(135deg,#a18cd1,#fbc2eb)"></i><i style="background:linear-gradient(135deg,#fccb90,#d57eeb)"></i></div><span class="grab"></span></div></div>
```

### CSS

```css
/* base styles the site gives every demo (scoped to this demo) */
.s-sp, .s-sp *, .s-sp *::before, .s-sp *::after { box-sizing: border-box; }
.s-sp { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-sp button { font: inherit; cursor: pointer; }
.s-sp { background: linear-gradient(#cfd9df 0,#b4c2cc 58%,#8d7b6a 58%,#6f604f); display: grid; place-items: center; color: #fff; }
.s-sp::before { content: ""; position: absolute; left: 8%; top: 12%; width: 70px; height: 90px; background: #e9eef2; border: 6px solid #a0aeb8; opacity: .7; filter: blur(1.5px); }
.s-sp .win { width: min(60%,220px); margin-left: 40px; padding: 14px; border-radius: 24px; background: rgba(235,235,245,.3); backdrop-filter: blur(20px) saturate(160%); -webkit-backdrop-filter: blur(20px) saturate(160%); border: 1px solid rgba(255,255,255,.5); box-shadow: 0 30px 50px rgba(0,0,0,.25); display: grid; gap: 10px; position: relative; font-size: 13px; text-shadow: 0 1px 2px rgba(0,0,0,.2); }
.s-sp .orn { position: absolute; left: -46px; top: 50%; transform: translateY(-50%); display: grid; gap: 6px; padding: 6px; border-radius: 22px; background: rgba(235,235,245,.3); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,.5); }
.s-sp .orn i { font-style: normal; width: 28px; height: 28px; display: grid; place-items: center; border-radius: 50%; font-size: 13px; }
.s-sp .orn i.on { background: rgba(255,255,255,.4); }
.s-sp .ph3 { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
.s-sp .ph3 i { aspect-ratio: 4/3; border-radius: 10px; max-width: 100%; }
.s-sp .grab { position: absolute; bottom: -14px; left: 50%; width: 56px; height: 5px; margin-left: -28px; border-radius: 3px; background: rgba(255,255,255,.8); }
@supports not ((backdrop-filter:blur(1px)) or (-webkit-backdrop-filter:blur(1px))) {
  .s-sp .win,.s-sp .orn { background: rgba(235,235,245,.72); color: #1d1b20; text-shadow: none; }
}
```

No JavaScript needed.
