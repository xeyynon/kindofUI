# Pull to refresh

Components and UX patterns · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#pulltorefresh

Drag a list down past the top and let go to load new items, with a spinner while it works.

- **Good for:** Feeds and inboxes on mobile
- **Watch out:** Desktop, or content that updates by itself
- **Seen in:** Instagram, Gmail mobile, X, most feeds

## Prompt for an AI assistant

Build this UI pattern for my app: Pull to refresh.

What it is: Drag a list down past the top and let go to load new items, with a spinner while it works.
Good for: Feeds and inboxes on mobile.
Watch out: Desktop, or content that updates by itself.
Seen in: Instagram, Gmail mobile, X, most feeds

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
<div class="stage s-ptr center">
    <div class="phone"><div class="ind" id="ptr-i"><span class="spin"></span></div>
      <div class="lst" id="ptr-l"><div class="hd2">Inbox</div><div class="it4"><b>Priya</b><span>Lunch tomorrow?</span></div><div class="it4"><b>Bank</b><span>Statement for October</span></div><div class="it4"><b>Kabir</b><span>Slides attached</span></div><div class="it4"><b>Delivery</b><span>Arriving today</span></div></div>
    </div>
    <small class="hint">drag the list down</small>
  </div>
```

### CSS

```css
:root { --display: "Bricolage Grotesque",system-ui,sans-serif; --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): Bricolage Grotesque, JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-ptr, .s-ptr *, .s-ptr *::before, .s-ptr *::after { box-sizing: border-box; }
.s-ptr { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-ptr button { font: inherit; cursor: pointer; }
.center { display: grid; place-items: center; }
.phone { width: 172px; height: 262px; border-radius: 26px; border: 6px solid #1b1d22; background: #fff; position: relative; overflow: hidden; color: #1b1d22; font-size: 11px; }
.s-ptr { background: #e9ecf1; }
.s-ptr .ind { position: absolute; top: 8px; left: 50%; margin-left: -14px; width: 28px; height: 28px; border-radius: 50%; background: #fff; box-shadow: 0 2px 6px rgba(0,0,0,.2); display: grid; place-items: center; transform: translateY(-50px); z-index: 2; }
.s-ptr .spin { width: 14px; height: 14px; border-radius: 50%; border: 2px solid #3557e0; border-right-color: transparent; }
.s-ptr .ind.go .spin { animation: spin .7s linear infinite; }
.s-ptr .lst { touch-action: pan-y; cursor: grab; background: #fff; position: absolute; inset: 0; user-select: none; -webkit-user-select: none; }
.s-ptr .hd2 { padding: 10px 12px; font: 700 15px var(--display); }
.s-ptr .it4 { padding: 7px 12px; border-bottom: 1px solid #f1f2f5; display: grid; }
.s-ptr .it4 span { color: #777; font-size: 10px; }
.s-ptr .it4.new { background: #eef1ff; }
.s-ptr .hint { position: absolute; right: 10px; bottom: 10px; max-width: 72px; font: 10px/1.3 var(--mono); color: #555; text-align: right; }
@keyframes spin {
  to{transform:rotate(1turn)}
}
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // pull to refresh
  (() => { const l = $('#ptr-l'), ind = $('#ptr-i'); if (!l) return; let y0 = null, dy = 0, busy = false, k = 0;
    const nm = [['Arjun', 'Tickets are booked'], ['Mom', 'Call when free'], ['HR', 'Holiday list for 2027'], ['Ishita', 'Sent the photos']];
    const begin = y => { if (busy) return; y0 = y; dy = 0; l.style.transition = ind.style.transition = 'none'; };
    const pull = y => { dy = Math.max(0, Math.min(90, (y - y0) * .6)); l.style.transform = `translateY(${dy}px)`; ind.style.transform = `translateY(${dy - 40}px) rotate(${dy * 4}deg)`; };
    const end = () => { if (y0 === null) return; y0 = null; l.style.transition = ind.style.transition = 'transform .25s';
      if (dy > 55) { busy = true; l.style.transform = 'translateY(48px)'; ind.style.transform = 'translateY(8px)'; ind.classList.add('go');
        setTimeout(() => { const x = nm[k++ % nm.length]; const d = document.createElement('div'); d.className = 'it4 new'; d.innerHTML = `<b>${x[0]}</b><span>${x[1]}</span>`; $('.hd2', l).after(d);
          ind.classList.remove('go'); l.style.transform = ''; ind.style.transform = ''; busy = false; }, 1000); }
      else { l.style.transform = ''; ind.style.transform = ''; } dy = 0; };
    // mouse and pen: pointer events
    l.addEventListener('pointerdown', e => { if (e.pointerType === 'touch') return; begin(e.clientY); if (y0 !== null) l.setPointerCapture(e.pointerId); });
    l.addEventListener('pointermove', e => { if (e.pointerType !== 'touch' && y0 !== null) pull(e.clientY); });
    l.addEventListener('pointerup', e => { if (e.pointerType !== 'touch') end(); }); l.addEventListener('pointercancel', e => { if (e.pointerType !== 'touch') end(); });
    // touch: take over only a downward pull; an upward drag or a scroll already under way stays with the page
    l.addEventListener('touchstart', e => begin(e.touches[0].clientY), { passive: true });
    l.addEventListener('touchmove', e => { if (y0 === null) return; const y = e.touches[0].clientY;
      if (y > y0 && e.cancelable) { e.preventDefault(); pull(y); } else { dy = 0; end(); } }, { passive: false });
    l.addEventListener('touchend', end); l.addEventListener('touchcancel', end);
  })();
})();
```
