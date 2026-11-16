# Reserve space (no layout shift)

Components and UX patterns · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#reserve

Give images, ads, banners and anything that loads late a fixed slot, so the page never jumps. A jump right before a tap sends the finger to the wrong button.

- **Good for:** Feeds, product pages, anything with images, ads or banners
- **Watch out:** A slot of the wrong size still makes the page move
- **Based on:** web.dev Cumulative Layout Shift (good is 0.1 or less, poor above 0.25)

## Prompt for an AI assistant

Build this UI pattern for my app: Reserve space (no layout shift).

What it is: Give images, ads, banners and anything that loads late a fixed slot, so the page never jumps. A jump right before a tap sends the finger to the wrong button.
Good for: Feeds, product pages, anything with images, ads or banners.
Watch out: A slot of the wrong size still makes the page move.
Based on: web.dev Cumulative Layout Shift (good is 0.1 or less, poor above 0.25)

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
<div class="stage s-rsv">
    <div class="two">
      <div><span class="cap">Nothing reserved<small>the banner pushes the page</small></span><div class="ph" data-k="no"><div class="slot"></div><button class="opt buy" type="button">Buy again</button><button class="opt" type="button">Cancel order</button><span class="tap" aria-hidden="true"></span></div><p class="res"></p></div>
      <div><span class="cap">Space reserved<small>a slot waits for the banner</small></span><div class="ph" data-k="yes"><div class="slot keep"></div><button class="opt buy" type="button">Buy again</button><button class="opt" type="button">Cancel order</button><span class="tap" aria-hidden="true"></span></div><p class="res"></p></div>
    </div>
    <div class="bar"><button class="act" type="button">Load the page</button></div>
  </div>
```

### CSS

```css
:root { --body: "Figtree",system-ui,sans-serif; }
/* fonts used (all on Google Fonts): Figtree */
/* base styles the site gives every demo (scoped to this demo) */
.s-rsv, .s-rsv *, .s-rsv *::before, .s-rsv *::after { box-sizing: border-box; }
.s-rsv { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-rsv button { font: inherit; cursor: pointer; }
.s-dly,.s-rsv,.s-esum,.s-lbl,.s-pwd,.s-dbl,.s-deb,.s-inl,.s-fcs,.s-back { background: #fff; color: #1f2430; font-size: 12px; padding: 12px 14px; }
.s-dly .two,.s-rsv .two,.s-dbl .two,.s-deb .two,.s-inl .two { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; min-height: 0; }
.s-dly .cap,.s-rsv .cap,.s-dbl .cap,.s-deb .cap,.s-inl .cap { font: 600 11px/1.3 var(--body); color: #1f2430; }
.s-dly .cap small,.s-rsv .cap small,.s-dbl .cap small,.s-deb .cap small,.s-inl .cap small { display: block; font-weight: 400; color: #5f6672; }
.s-dly .act,.s-rsv .act,.s-esum .act,.s-lbl .act,.s-pwd .act,.s-dbl .act,.s-inl .act,.s-fcs .act,.s-back .act { border: 1px solid #1f2430; background: #1f2430; color: #fff; border-radius: 6px; padding: 6px 12px; font: 600 12px var(--body); }
.s-dly .ghost,.s-rsv .ghost,.s-fcs .ghost,.s-back .ghost { border: 1px solid #c9ced8; background: #fff; color: #1f2430; border-radius: 6px; padding: 5px 10px; font: 600 11px var(--body); }
.s-rsv { display: grid; grid-template-rows: 1fr auto; gap: 8px; }
.s-rsv .ph { position: relative; border: 1px solid #e3e6ec; border-radius: 10px; padding: 8px; display: grid; align-content: start; gap: 6px; overflow: hidden; height: 136px; }
.s-rsv .slot { height: 0; border-radius: 6px; overflow: hidden; }
.s-rsv .slot.keep { height: 34px; background: #eef0f3; }
.s-rsv .ban { height: 34px; border-radius: 6px; background: #1f2430; color: #fff; display: grid; place-items: center; font: 600 11px var(--body); }
.s-rsv .opt { height: 34px; border: 1px solid #c9ced8; background: #fff; border-radius: 6px; padding: 0 8px; text-align: left; font: 600 11.5px var(--body); color: #1f2430; }
.s-rsv .opt.buy { border-color: #1f2430; }
.s-rsv .tap { position: absolute; left: 50%; width: 18px; height: 18px; margin: -9px 0 0 -9px; border-radius: 50%; border: 2px solid #c2352b; background: rgba(194,53,43,.15); pointer-events: none; }
.s-rsv .res { margin: 5px 0 0; font-size: 11px; line-height: 1.35; color: #5f6672; min-height: 30px; }
.s-rsv .res b { color: #1f2430; }
.s-rsv .bar { display: flex; justify-content: flex-end; }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // reserve space: a banner arrives late; a tap aimed at Cancel lands wherever the page has moved to
  (() => {
    const st = $('.s-rsv'); if (!st) return;
    const go = $('.act', st), phones = $$('.ph', st);
    const target = ph => $$('.opt', ph)[1];
    const reset = ph => { const sl = $('.slot', ph); sl.innerHTML = ''; sl.style.height = ''; $('.tap', ph).style.top = (target(ph).offsetTop + 17) + 'px'; $('.tap', ph).hidden = true; ph.nextElementSibling.textContent = ''; };
    phones.forEach(reset);
    go.addEventListener('click', () => {
      go.disabled = true; phones.forEach(reset);
      phones.forEach(ph => { const y0 = target(ph).offsetTop, tap = $('.tap', ph); tap.style.top = (y0 + 17) + 'px';
        setTimeout(() => { const sl = $('.slot', ph); sl.innerHTML = '<div class="ban">Free delivery this week</div>'; if (!sl.classList.contains('keep')) sl.style.height = '34px'; }, 900);
        setTimeout(() => { tap.hidden = false; const r = tap.getBoundingClientRect(), hit = document.elementFromPoint(r.left + r.width / 2, r.top + r.height / 2), b = hit && hit.closest('.opt'), moved = target(ph).offsetTop - y0;
          ph.nextElementSibling.innerHTML = `Aimed at Cancel order, tapped: <b>${b ? b.textContent : 'the banner'}</b>. Page moved ${moved} px.`; go.disabled = false; }, 980); });
    });
  })();
})();
```
