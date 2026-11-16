# Gen Z maximalism / anti-design

Visual styles · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#genz

Deliberate chaos: clashing fonts, rotated stickers, starbursts, scrolling strips and loud neon. Breaks the rules on purpose.

- **Good for:** Fashion drops, youth brands, social campaigns
- **Watch out:** Checkout, forms and accessibility-critical flows
- **Seen in:** streetwear drops, youth brands, social campaigns

## Prompt for an AI assistant

Design this interface in the Gen Z maximalism / anti-design visual style.

What it is: Deliberate chaos: clashing fonts, rotated stickers, starbursts, scrolling strips and loud neon. Breaks the rules on purpose.
Good for: Fashion drops, youth brands, social campaigns.
Watch out: Checkout, forms and accessibility-critical flows.
Seen in: streetwear drops, youth brands, social campaigns

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
<div class="stage s-genz">
    <div class="strip"><span>✦ FREE SHIPPING ✦ NO CAP ✦ FREE SHIPPING ✦ NO CAP ✦ FREE SHIPPING ✦ NO CAP ✦ FREE SHIPPING ✦ NO CAP ✦</span></div>
    <b class="t1">no thoughts,</b><i class="t2">just fits</i><span class="burst">NEW<br>DROP</span><span class="stk s1">★ 4.9 from 2k+</span><span class="stk s2">limited!!</span><span class="note">trust me lol</span><button class="cta">SHOP THE DROP</button>
  </div>
```

### CSS

```css
:root { --display: "Bricolage Grotesque",system-ui,sans-serif; --body: "Figtree",system-ui,sans-serif; --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): Bricolage Grotesque, Figtree, JetBrains Mono, VT323, DM Serif Display, Caveat */
/* base styles the site gives every demo (scoped to this demo) */
.s-genz, .s-genz *, .s-genz *::before, .s-genz *::after { box-sizing: border-box; }
.s-genz { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-genz button { font: inherit; cursor: pointer; }
.s-genz { background: #c6ff00; color: #111; container-type: inline-size; }
.s-genz .strip { background: #111; color: #c6ff00; font: 700 11px var(--mono); padding: 5px 0; white-space: nowrap; overflow: hidden; }
.s-genz .strip span { display: inline-block; animation: mq 12s linear infinite; }
.s-genz .t1 { position: absolute; left: 18px; top: 46px; font: 800 34px/1 var(--display); transform: rotate(-4deg); }
.s-genz .t2 { position: absolute; left: 56px; top: 92px; font: 400 36px/1 "DM Serif Display",serif; font-style: italic; color: #ff3ea5; transform: rotate(3deg); }
.s-genz .burst { position: absolute; right: 18px; top: 40px; width: 80px; height: 80px; display: grid; place-items: center; text-align: center; background: #ff3ea5; color: #fff; font: 800 13px/1 var(--display); clip-path: polygon(50% 0,61% 15%,79% 8%,80% 27%,98% 32%,88% 50%,98% 68%,80% 73%,79% 92%,61% 85%,50% 100%,39% 85%,21% 92%,20% 73%,2% 68%,12% 50%,2% 32%,20% 27%,21% 8%,39% 15%); animation: spin 10s linear infinite; }
.s-genz .stk { position: absolute; padding: 5px 10px; border: 2px solid #111; font: 700 12px var(--body); border-radius: 999px; }
.s-genz .s1 { left: 20px; bottom: 60px; background: #7cc7ff; transform: rotate(-6deg); }
.s-genz .s2 { right: 28px; bottom: 96px; background: #fff; transform: rotate(8deg); font: 400 18px "VT323",monospace; }
.s-genz .note { position: absolute; left: 24px; bottom: 18px; font: 500 20px "Caveat",cursive; transform: rotate(-3deg); }
@container (max-width:300px) {
  .s-genz .t1 { left: 14px; font-size: 27px; }
  .s-genz .t2 { left: 46px; font-size: 30px; }
  .s-genz .burst { width: 62px; height: 62px; right: 10px; top: 52px; font-size: 11px; }
}
.s-genz .cta { position: absolute; right: 18px; bottom: 18px; border: 2px solid #111; background: #111; color: #c6ff00; font: 800 12px var(--mono); padding: 9px 12px; box-shadow: 4px 4px 0 #ff3ea5; }
@keyframes spin {
  to{transform:rotate(1turn)}
}
@keyframes mq {
  to{transform:translateX(-50%)}
}
```

No JavaScript needed.
