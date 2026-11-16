# Streaming response

AI patterns · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#streaming

The answer appears word by word so people can start reading at once, with a Stop button while it writes.

- **Good for:** Long AI answers, so reading starts at once
- **Watch out:** Very short answers
- **Seen in:** Claude, ChatGPT, Perplexity

## Prompt for an AI assistant

Build this AI interface pattern for my app: Streaming response.

What it is: The answer appears word by word so people can start reading at once, with a Stop button while it writes.
Good for: Long AI answers, so reading starts at once.
Watch out: Very short answers.
Seen in: Claude, ChatGPT, Perplexity

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
<div class="stage s-strm">
    <div class="q">What should I pack for Ladakh in June?</div>
    <div class="a"><span id="st-t"></span><span class="crt" id="st-c"></span></div>
    <div class="ctl"><button id="st-go">↻ Regenerate</button><button id="st-stop" hidden="">■ Stop</button><button id="st-cp">Copy</button></div>
  </div>
```

### CSS

```css
/* base styles the site gives every demo (scoped to this demo) */
.s-strm, .s-strm *, .s-strm *::before, .s-strm *::after { box-sizing: border-box; }
.s-strm { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-strm button { font: inherit; cursor: pointer; }
[hidden] { display: none !important; }
.s-strm { background: #fff; color: #1f2430; padding: 16px 18px; display: grid; grid-template-rows: auto 1fr auto; gap: 10px; font-size: 13px; }
.s-strm .q { justify-self: end; background: #f1f3f8; border-radius: 14px 14px 4px 14px; padding: 7px 12px; max-width: 85%; }
.s-strm .a { line-height: 1.55; overflow: auto; }
.s-strm .crt { display: inline-block; width: 8px; height: 14px; background: #3557e0; vertical-align: -2px; margin-left: 2px; animation: blink 1s steps(2) infinite; }
.s-strm .crt.off { display: none; }
.s-strm .ctl { display: flex; gap: 6px; }
.s-strm .ctl button { border: 1px solid #e3e6ec; background: #fff; border-radius: 7px; padding: 5px 10px; font-size: 11px; color: #1f2430; }
@keyframes blink {
  50%{opacity:.25}
}
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  const on = (sel, ev, fn) => { const el = $(sel); if (el) el.addEventListener(ev, fn); return el; };

  (() => { const A = 'Layers matter most. Days in Leh are often around 20 to 25°C, but nights get cold and high passes can drop below freezing. Pack a fleece, a down jacket and thermal innerwear. Add sunscreen and sunglasses, since UV is strong at 3,500 m, and carry a refillable bottle to help with the altitude.';
    const out = $('#st-t'), c = $('#st-c'), go = $('#st-go'), stop = $('#st-stop'); if (!out) return; let tm;
    out.textContent = A; c.classList.add('off');
    const fin = () => { clearInterval(tm); c.classList.add('off'); stop.hidden = true; go.hidden = false; };
    go.addEventListener('click', () => { const w = A.split(' '); let i = 0; out.textContent = ''; c.classList.remove('off'); go.hidden = true; stop.hidden = false; clearInterval(tm);
      tm = setInterval(() => { out.textContent += (i ? ' ' : '') + w[i++]; if (i >= w.length) fin(); }, 70); });
    stop.addEventListener('click', fin);
    on('#st-cp', 'click', e => { const b = e.currentTarget; try { navigator.clipboard && navigator.clipboard.writeText(out.textContent).catch(() => {}); } catch (_) {} b.textContent = 'Copied ✓'; setTimeout(() => b.textContent = 'Copy', 1400); });
  })();
})();
```
