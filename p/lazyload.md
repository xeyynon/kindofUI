# Lazy loading (blur-up)

Components and UX patterns · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#lazyload

Images load only when they scroll into view, starting as a blurry preview and sharpening when ready.

- **Good for:** Long image galleries and feeds
- **Watch out:** Images in the first screen; load those at once
- **Seen in:** Pinterest, Medium, Unsplash

## Prompt for an AI assistant

Build this UI pattern for my app: Lazy loading (blur-up).

What it is: Images load only when they scroll into view, starting as a blurry preview and sharpening when ready.
Good for: Long image galleries and feeds.
Watch out: Images in the first screen; load those at once.
Seen in: Pinterest, Medium, Unsplash

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
<div class="stage s-lazy"><div class="scr" id="lz" tabindex="0" role="region" aria-label="Photo grid"></div><button class="rp" id="lz-r">Reset</button></div>
```

### CSS

```css
:root { --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-lazy, .s-lazy *, .s-lazy *::before, .s-lazy *::after { box-sizing: border-box; }
.s-lazy { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-lazy button { font: inherit; cursor: pointer; }
.s-lazy { background: #fff; color: #1f2430; font-size: 11px; }
.s-lazy .scr { position: absolute; inset: 0; overflow-y: auto; padding: 12px; display: grid; grid-template-columns: 1fr 1fr; gap: 8px; align-content: start; }
.s-lazy .im { aspect-ratio: 4/3; border-radius: 8px; background: #e5e7eb; position: relative; overflow: hidden; max-width: 100%; }
.s-lazy .im::before { content: ""; position: absolute; inset: -12px; background: var(--bg2); filter: blur(12px); opacity: .45; transition: filter .6s,opacity .6s; }
.s-lazy .im.ld::before { filter: blur(0); opacity: 1; }
.s-lazy .im span { position: absolute; left: 6px; bottom: 5px; font: 10px var(--mono); color: #fff; background: rgba(0,0,0,.45); padding: 1px 5px; border-radius: 3px; }
.s-lazy .rp { position: absolute; right: 12px; bottom: 10px; border: 1px solid #d6dae1; background: #fff; border-radius: 6px; padding: 4px 10px; font-size: 11px; color: #1f2430; }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  const on = (sel, ev, fn) => { const el = $(sel); if (el) el.addEventListener(ev, fn); return el; };

  // lazy loading (blur-up)
  (() => { const s = $('#lz'); if (!s) return; let io;
    const g = ['#f6d365,#fda085', '#84fab0,#8fd3f4', '#a18cd1,#fbc2eb', '#fccb90,#d57eeb', '#e0c3fc,#8ec5fc', '#f093fb,#f5576c', '#4facfe,#00f2fe', '#43e97b,#38f9d7', '#fa709a,#fee140', '#30cfd0,#330867', '#ff9a9e,#fecfef', '#667eea,#764ba2'];
    const build = () => { s.innerHTML = g.map((c, i) => `<div class="im" style="--bg2:linear-gradient(135deg,${c})"><span>photo_${String(i + 1).padStart(2, '0')}.jpg</span></div>`).join(''); s.scrollTop = 0;
      if ('IntersectionObserver' in window) { io && io.disconnect(); io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { const t = en.target; io.unobserve(t); setTimeout(() => t.classList.add('ld'), 500 + Math.random() * 500); } }), { root: s }); $$('.im', s).forEach(x => io.observe(x)); }
      else $$('.im', s).forEach(x => x.classList.add('ld')); };
    build(); on('#lz-r', 'click', build);
  })();
})();
```
