# Dark UI

Visual styles · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#darkui

Light text on near-black surfaces. Depth comes from slightly lighter layers instead of shadows, and color is saved for accents and artwork.

- **Good for:** Media, coding tools, long sessions at night
- **Watch out:** Pure black with pure white text; it causes glare
- **Seen in:** Spotify, Discord, Netflix, VS Code

## Prompt for an AI assistant

Design this interface in the Dark UI visual style.

What it is: Light text on near-black surfaces. Depth comes from slightly lighter layers instead of shadows, and color is saved for accents and artwork.
Good for: Media, coding tools, long sessions at night.
Watch out: Pure black with pure white text; it causes glare.
Seen in: Spotify, Discord, Netflix, VS Code

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
<div class="stage s-dark">
    <div class="art"></div>
    <div>
      <div class="t">Midnight Drive</div><div class="a">Lofi Collective</div>
      <div class="prog"><i></i></div><div class="time"><span>1:24</span><span>3:18</span></div>
      <div class="ctl"><button aria-label="Previous">⏮</button><button class="play" aria-label="Pause">❚❚</button><button aria-label="Next">⏭</button></div>
    </div>
    <div class="list"><span>Up next: Neon Rain <b>2:56</b></span><span>Slow Tide <b>4:02</b></span></div>
  </div>
```

### CSS

```css
:root { --body: "Figtree",system-ui,sans-serif; --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): Figtree, JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-dark, .s-dark *, .s-dark *::before, .s-dark *::after { box-sizing: border-box; }
.s-dark { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-dark button { font: inherit; cursor: pointer; }
.s-dark { background: #0c0e12; color: #e8eaf0; padding: 18px; display: grid; grid-template-columns: 110px 1fr; gap: 16px; align-items: center; }
.s-dark .art { width: 110px; aspect-ratio: 1; max-width: 100%; border-radius: 12px; background: conic-gradient(from 210deg,#ff5f6d,#ffc371,#47cacc,#7f5af0,#ff5f6d); box-shadow: 0 10px 30px rgba(127,90,240,.35); }
.s-dark .t { font: 700 17px var(--body); }
.s-dark .a { color: #8b93a5; font-size: 12px; }
.s-dark .prog { height: 4px; background: #2a2e38; border-radius: 2px; margin: 14px 0 4px; }
.s-dark .prog i { display: block; height: 100%; width: 42%; background: #e8eaf0; border-radius: 2px; }
.s-dark .time { display: flex; justify-content: space-between; font: 11px var(--mono); color: #8b93a5; }
.s-dark .ctl { display: flex; gap: 18px; align-items: center; margin-top: 10px; }
.s-dark .ctl button { background: none; border: 0; color: #e8eaf0; font-size: 16px; }
.s-dark .ctl .play { width: 42px; height: 42px; border-radius: 50%; background: #e8eaf0; color: #0c0e12; }
.s-dark .list { grid-column: 1/-1; display: grid; gap: 6px; font-size: 12px; color: #8b93a5; border-top: 1px solid #20242d; padding-top: 10px; }
.s-dark .list span { display: flex; justify-content: space-between; }
```

No JavaScript needed.
