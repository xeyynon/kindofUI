# Parallax scrolling

Layouts · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#parallax

Background layers move slower than the foreground, which creates a feeling of depth.

- **Good for:** Storytelling and brand moments
- **Watch out:** Every page; it can cause motion sickness and lag
- **Seen in:** travel and brand stories, Apple product pages, game sites

## Prompt for an AI assistant

Build this layout for my page: Parallax scrolling.

What it is: Background layers move slower than the foreground, which creates a feeling of depth.
Good for: Storytelling and brand moments.
Watch out: Every page; it can cause motion sickness and lag.
Seen in: travel and brand stories, Apple product pages, game sites

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
<div class="stage s-plx">
    <div class="scr" id="plx" tabindex="0" role="region" aria-label="Parallax scene"><div class="pin">
      <span class="ly sky"></span>
      <svg class="ly" data-f=".15" viewBox="0 0 400 200" preserveAspectRatio="none" aria-hidden="true"><polygon points="0,200 0,120 60,70 120,110 190,50 260,105 330,60 400,100 400,200" fill="#7b8fd1"></polygon></svg>
      <svg class="ly" data-f=".35" viewBox="0 0 400 200" preserveAspectRatio="none" aria-hidden="true"><polygon points="0,200 0,150 80,100 150,140 230,90 310,140 400,110 400,200" fill="#45599a"></polygon></svg>
      <div class="ly tx" data-f="-.4"><b>Into the Himalaya</b><span>scroll inside ↓</span></div>
      <svg class="ly" data-f=".7" viewBox="0 0 400 200" preserveAspectRatio="none" aria-hidden="true"><polygon points="0,200 0,175 100,135 200,170 300,130 400,165 400,200" fill="#1c2a52"></polygon></svg>
    </div><div class="sp"></div></div>
  </div>
```

### CSS

```css
:root { --display: "Bricolage Grotesque",system-ui,sans-serif; --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): Bricolage Grotesque, JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-plx, .s-plx *, .s-plx *::before, .s-plx *::after { box-sizing: border-box; }
.s-plx { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-plx button { font: inherit; cursor: pointer; }
.s-plx { background: #f9d29d; color: #fff; }
.s-plx .scr { position: absolute; inset: 0; overflow-y: auto; scrollbar-width: thin; }
.s-plx .pin { position: sticky; top: 0; height: 290px; overflow: hidden; }
.s-plx .ly { position: absolute; left: 0; width: 100%; }
.s-plx .sky { inset: 0; height: 100%; background: linear-gradient(#f6a96b,#f9d29d 60%,#fbe7c6); }
.s-plx svg.ly { bottom: 0; height: 200px; }
.s-plx .tx { top: 56px; display: grid; justify-items: center; gap: 4px; text-align: center; }
.s-plx .tx b { font: 800 26px var(--display); text-shadow: 0 2px 8px rgba(0,0,0,.25); }
.s-plx .tx span { font: 11px var(--mono); }
.s-plx .sp { height: 520px; }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // parallax
  (() => { const s = $('#plx'); if (!s) return; const ly = $$('#plx [data-f]');
    s.addEventListener('scroll', () => { const t = s.scrollTop; ly.forEach(l => l.style.transform = `translateY(${t * l.dataset.f}px)`); }, { passive: true });
  })();

  $$('nav.index button[data-f]').forEach(b => { const s = collections.find(x => x.id === b.dataset.f); if (s) b.insertAdjacentHTML('beforeend', `<span class="kn">${$$('article.demo', s).length}</span>`); });
})();
```
