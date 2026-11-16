# Loaders & progress

Components and UX patterns · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#loaders

Spinners for short unknown waits, progress bars and rings when you know how far along it is, and buttons that show they're working.

- **Good for:** Showing that work is happening
- **Watch out:** Spinners for long tasks; show real progress
- **Seen in:** Google Drive uploads, YouTube, every form submit

## Prompt for an AI assistant

Build this UI pattern for my app: Loaders & progress.

What it is: Spinners for short unknown waits, progress bars and rings when you know how far along it is, and buttons that show they're working.
Good for: Showing that work is happening.
Watch out: Spinners for long tasks; show real progress.
Seen in: Google Drive uploads, YouTube, every form submit

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
<div class="stage s-load">
    <figure><span class="sp1"></span><figcaption>Spinner</figcaption></figure>
    <figure><span class="dts"><i></i><i></i><i></i></span><figcaption>Typing dots</figcaption></figure>
    <figure><span class="ring" id="ld-ring"><b id="ld-pct">0%</b></span><figcaption>Circular progress</figcaption></figure>
    <figure class="wide"><span class="pbar"><i id="ld-bar"></i></span><figcaption id="ld-txt">Uploading report.pdf · 0.0 of 4.2 MB</figcaption></figure>
    <figure class="wide"><button class="lb" id="ld-btn">Save changes</button><figcaption>Button loading state (click it)</figcaption></figure>
  </div>
```

### CSS

```css
:root { --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-load, .s-load *, .s-load *::before, .s-load *::after { box-sizing: border-box; }
.s-load { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-load button { font: inherit; cursor: pointer; }
.s-load { background: #fff; color: #1f2430; display: grid; grid-template-columns: repeat(3,1fr); gap: 14px; padding: 18px; align-content: center; font-size: 11px; }
.s-load figure { margin: 0; display: grid; justify-items: center; gap: 8px; color: #777; }
.s-load .wide { grid-column: 1/-1; justify-items: stretch; text-align: center; }
.s-load .sp1 { width: 28px; height: 28px; border-radius: 50%; border: 3px solid #e3e6ec; border-top-color: #3557e0; animation: spin .8s linear infinite; }
.s-load .dts { display: flex; gap: 4px; height: 28px; align-items: center; }
.s-load .dts i { width: 7px; height: 7px; border-radius: 50%; background: #3557e0; animation: bnc 1s infinite; }
.s-load .dts i:nth-child(2) { animation-delay: .15s; }
.s-load .dts i:nth-child(3) { animation-delay: .3s; }
.s-load .ring { width: 44px; height: 44px; border-radius: 50%; background: conic-gradient(#3557e0 calc(var(--p,0)*1%),#e3e6ec 0); display: grid; place-items: center; position: relative; }
.s-load .ring::before { content: ""; position: absolute; inset: 5px; border-radius: 50%; background: #fff; }
.s-load .ring b { position: relative; font: 600 10px var(--mono); color: #1f2430; font-variant-numeric: tabular-nums; }
.s-load .pbar { height: 8px; background: #eceef2; border-radius: 4px; overflow: hidden; display: block; }
.s-load .pbar i { display: block; height: 100%; width: 0; background: #3557e0; border-radius: 4px; transition: width .2s; }
.s-load .lb { justify-self: center; border: 0; background: #3557e0; color: #fff; border-radius: 7px; padding: 8px 16px; font-weight: 600; min-width: 140px; display: inline-flex; gap: 8px; justify-content: center; align-items: center; }
.s-load .lb.busy { background: #7d93ea; cursor: progress; }
.s-load .lb.busy::before { content: ""; width: 12px; height: 12px; border-radius: 50%; border: 2px solid rgba(255,255,255,.5); border-top-color: #fff; animation: spin .7s linear infinite; }
@keyframes spin {
  to{transform:rotate(1turn)}
}
@keyframes bnc {
  0%,60%,100%{transform:none;opacity:.4}30%{transform:translateY(-6px);opacity:1}
}
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  const on = (sel, ev, fn) => { const el = $(sel); if (el) el.addEventListener(ev, fn); return el; };

  // loaders
  (() => { const ring = $('#ld-ring'), pct = $('#ld-pct'), bar = $('#ld-bar'), txt = $('#ld-txt'); if (!ring) return; let p = 0;
    setInterval(() => { p = p >= 100 ? 0 : p + 2; ring.style.setProperty('--p', p); pct.textContent = p + '%'; bar.style.width = p + '%'; txt.textContent = p >= 100 ? 'Upload complete ✓' : `Uploading report.pdf · ${(p * 4.2 / 100).toFixed(1)} of 4.2 MB`; }, 120);
    on('#ld-btn', 'click', e => { const b = e.currentTarget; if (b.classList.contains('busy')) return; b.classList.add('busy'); b.textContent = 'Saving…';
      setTimeout(() => { b.classList.remove('busy'); b.textContent = 'Saved ✓'; setTimeout(() => b.textContent = 'Save changes', 1500); }, 1600); });
  })();
})();
```
