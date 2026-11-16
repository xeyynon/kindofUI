# Ratings & reviews

Components and UX patterns · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#ratings

An average score, a breakdown bar for each star level, and a star input that previews on hover.

- **Good for:** Product reviews and quick feedback
- **Watch out:** Asking before people have used it
- **Seen in:** Amazon, Google Play, Flipkart, App Store

## Prompt for an AI assistant

Build this UI pattern for my app: Ratings & reviews.

What it is: An average score, a breakdown bar for each star level, and a star input that previews on hover.
Good for: Product reviews and quick feedback.
Watch out: Asking before people have used it.
Seen in: Amazon, Google Play, Flipkart, App Store

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
<div class="stage s-rate">
    <div class="sum"><b>4.3</b><span class="st5" aria-hidden="true">★★★★☆</span><small>1,284 ratings</small></div>
    <div class="hist"><span>5★</span><i><b style="width:62%"></b></i><em>62%</em><span>4★</span><i><b style="width:20%"></b></i><em>20%</em><span>3★</span><i><b style="width:9%"></b></i><em>9%</em><span>2★</span><i><b style="width:4%"></b></i><em>4%</em><span>1★</span><i><b style="width:5%"></b></i><em>5%</em></div>
    <div class="you"><span>Rate this product</span><div class="stars" id="stars" role="group" aria-label="Your rating"><button aria-label="1 star">★</button><button aria-label="2 stars">★</button><button aria-label="3 stars">★</button><button aria-label="4 stars">★</button><button aria-label="5 stars">★</button></div><small id="star-t">Tap a star</small></div>
  </div>
```

### CSS

```css
:root { --display: "Bricolage Grotesque",system-ui,sans-serif; }
/* fonts used (all on Google Fonts): Bricolage Grotesque */
/* base styles the site gives every demo (scoped to this demo) */
.s-rate, .s-rate *, .s-rate *::before, .s-rate *::after { box-sizing: border-box; }
.s-rate { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-rate button { font: inherit; cursor: pointer; }
.s-rate { background: #fff; color: #1f2430; padding: 16px 18px; display: grid; grid-template-columns: auto 1fr; gap: 10px 18px; align-content: center; font-size: 11px; }
.s-rate .sum { display: grid; justify-items: center; gap: 2px; }
.s-rate .sum b { font: 800 36px/1 var(--display); }
.s-rate .st5 { color: #f59e0b; font-size: 14px; letter-spacing: 1px; }
.s-rate small { color: #888; }
.s-rate .hist { display: grid; grid-template-columns: auto 1fr auto; gap: 5px 8px; align-items: center; font-variant-numeric: tabular-nums; }
.s-rate .hist i { height: 7px; background: #f1f2f5; border-radius: 4px; overflow: hidden; display: block; }
.s-rate .hist i b { display: block; height: 100%; background: #f59e0b; }
.s-rate .hist em { font-style: normal; color: #888; text-align: right; }
.s-rate .you { grid-column: 1/-1; border-top: 1px solid #eef0f3; padding-top: 12px; display: grid; justify-items: center; gap: 4px; }
.s-rate .stars { display: flex; gap: 2px; }
.s-rate .stars button { border: 0; background: none; font-size: 28px; line-height: 1; color: #d1d5db; padding: 0 2px; transition: transform .1s; }
.s-rate .stars button.on { color: #f59e0b; }
.s-rate .stars button:hover { transform: scale(1.15); }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // ratings
  (() => { const bs = $$('#stars button'), t = $('#star-t'); if (!bs.length) return; let v = 0; const L = ['', 'Poor', 'Fair', 'Good', 'Very good', 'Excellent'];
    const paint = n => bs.forEach((b, i) => b.classList.toggle('on', i < n));
    bs.forEach((b, i) => { b.addEventListener('mouseenter', () => paint(i + 1)); b.addEventListener('focus', () => paint(i + 1));
      b.addEventListener('click', () => { v = i + 1; paint(v); bs.forEach((x, j) => x.setAttribute('aria-pressed', j < v)); t.textContent = `You rated ${v} of 5 · ${L[v]}. Thanks!`; }); });
    $('#stars').addEventListener('mouseleave', () => paint(v));
  })();
})();
```
