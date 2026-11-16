# Prompt box

AI patterns · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#promptbox

A roomy input that grows with your text, holds attachments, shows the model or mode, and only enables Send when there's something to send. Enter sends, Shift+Enter adds a line.

- **Good for:** Any AI chat or generation feature
- **Watch out:** Hiding attachments or options people need
- **Seen in:** Claude, ChatGPT, Gemini

## Prompt for an AI assistant

Build this AI interface pattern for my app: Prompt box.

What it is: A roomy input that grows with your text, holds attachments, shows the model or mode, and only enables Send when there's something to send. Enter sends, Shift+Enter adds a line.
Good for: Any AI chat or generation feature.
Watch out: Hiding attachments or options people need.
Seen in: Claude, ChatGPT, Gemini

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
<div class="stage s-pb">
    <div class="greet">Good evening, Surya</div>
    <form class="box" id="pb-f">
      <div class="att" id="pb-att"><span class="fchip">brief.pdf <button type="button" aria-label="Remove file">×</button></span></div>
      <textarea id="pb-t" rows="2" placeholder="Ask anything…" aria-label="Message">Summarise this brief in 5 bullet points</textarea>
      <div class="tools"><button type="button" class="ic" id="pb-a" aria-label="Attach file">＋</button><span class="model">Fast ▾</span><button class="send" id="pb-s" aria-label="Send">↑</button></div>
    </form>
    <small class="st" id="pb-st"></small>
  </div>
```

### CSS

```css
:root { --display: "Bricolage Grotesque",system-ui,sans-serif; --body: "Figtree",system-ui,sans-serif; }
/* fonts used (all on Google Fonts): Bricolage Grotesque, Figtree */
/* base styles the site gives every demo (scoped to this demo) */
.s-pb, .s-pb *, .s-pb *::before, .s-pb *::after { box-sizing: border-box; }
.s-pb { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-pb button { font: inherit; cursor: pointer; }
.s-pb { background: #faf9f7; color: #1f2430; padding: 20px; display: grid; align-content: center; gap: 10px; font-size: 13px; }
.s-pb .greet { font: 600 20px var(--display); text-align: center; }
.s-pb .box { background: #fff; border: 1px solid #e2e0dc; border-radius: 16px; padding: 10px 12px; box-shadow: 0 4px 14px rgba(0,0,0,.05); display: grid; gap: 6px; }
.s-pb .box:focus-within { border-color: #b9b4ab; }
.s-pb .att { display: flex; gap: 6px; flex-wrap: wrap; }
.s-pb .fchip { display: inline-flex; gap: 6px; align-items: center; background: #f3f1ee; border-radius: 8px; padding: 4px 8px; font-size: 11px; }
.s-pb .fchip button { border: 0; background: none; padding: 0; color: #888; }
.s-pb textarea { border: 0; resize: none; font: 13px/1.45 var(--body); outline: none; background: none; color: #1f2430; }
.s-pb .tools { display: flex; align-items: center; gap: 8px; }
.s-pb .ic { width: 28px; height: 28px; border-radius: 8px; border: 1px solid #e2e0dc; background: #fff; color: #1f2430; }
.s-pb .model { font-size: 11px; color: #777; margin-left: auto; }
.s-pb .send { width: 30px; height: 30px; border-radius: 9px; border: 0; background: #1f2430; color: #fff; font-weight: 700; }
.s-pb .send:disabled { background: #d6d3ce; cursor: default; }
.s-pb .st { text-align: center; color: #16a34a; min-height: 16px; }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  const on = (sel, ev, fn) => { const el = $(sel); if (el) el.addEventListener(ev, fn); return el; };

  /* ---------- AI patterns ---------- */
  (() => { const t = $('#pb-t'), s = $('#pb-s'), st = $('#pb-st'), att = $('#pb-att'), f = $('#pb-f'); if (!f) return;
    const u = () => s.disabled = !t.value.trim(); t.addEventListener('input', u); u();
    att.addEventListener('click', e => { const b = e.target.closest('button'); if (b) b.closest('.fchip').remove(); });
    on('#pb-a', 'click', () => { const c = document.createElement('span'); c.className = 'fchip'; c.innerHTML = 'notes.txt <button type="button" aria-label="Remove file">×</button>'; att.appendChild(c); });
    f.addEventListener('submit', e => { e.preventDefault(); if (!t.value.trim()) return; st.textContent = 'Sent: "' + t.value.trim().slice(0, 40) + '"'; t.value = ''; att.innerHTML = ''; u(); });
    t.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); f.requestSubmit(); } });
  })();
})();
```
