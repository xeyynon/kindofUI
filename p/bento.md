# Bento grid

Visual styles · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#bento

Rounded tiles of different sizes packed into one grid. The biggest tile holds the headline feature and small tiles hold single facts.

- **Good for:** Feature overviews, portfolios, product pages
- **Watch out:** Long reading or strict step-by-step flows
- **Seen in:** Apple product pages, Linear, Vercel, portfolio sites

## Prompt for an AI assistant

Design this interface in the Bento grid visual style.

What it is: Rounded tiles of different sizes packed into one grid. The biggest tile holds the headline feature and small tiles hold single facts.
Good for: Feature overviews, portfolios, product pages.
Watch out: Long reading or strict step-by-step flows.
Seen in: Apple product pages, Linear, Vercel, portfolio sites

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
<div class="stage s-bento">
    <div class="b1"><span>Pro camera system</span><big>Titanium.<br>Strong. Light.</big></div>
    <div class="b2"><span>Battery</span><big>22h</big></div>
    <div class="b3"><span>Chip</span><big>A18</big></div>
    <div class="b4"><span>48MP Main · 5× Telephoto</span><div class="bars"><i style="height:40%"></i><i style="height:70%"></i><i style="height:55%"></i><i style="height:90%"></i><i style="height:65%"></i><i style="height:100%"></i></div></div>
    <div class="b5"><span>USB‑C</span><big>10Gb/s</big></div>
    <div class="b6"><span>Action button</span><big>One press.</big></div>
    <div class="b7"><span>Colors</span><big>4</big></div>
  </div>
```

### CSS

```css
:root { --display: "Bricolage Grotesque",system-ui,sans-serif; }
/* fonts used (all on Google Fonts): Bricolage Grotesque */
/* base styles the site gives every demo (scoped to this demo) */
.s-bento, .s-bento *, .s-bento *::before, .s-bento *::after { box-sizing: border-box; }
.s-bento { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-bento button { font: inherit; cursor: pointer; }
.s-bento { background: #ebebee; padding: 10px; display: grid; grid-template-columns: repeat(4,1fr); grid-template-rows: repeat(3,1fr); gap: 8px; container-type: inline-size; }
.s-bento > div { background: #fff; border-radius: 14px; padding: 10px; color: #111; display: flex; flex-direction: column; justify-content: space-between; overflow: hidden; font-size: 10.5px; line-height: 1.25; }
.s-bento big { font: 700 20px/1 var(--display); display: block; }
.s-bento .b1 { grid-column: span 2; grid-row: span 2; background: linear-gradient(155deg,#1d1d20,#43444b); color: #fff; }
.s-bento .b1 big { font-size: 24px; }
@container (max-width:380px) {
  .s-bento > div { padding: 8px; }
  .s-bento big { font-size: 15px; }
  .s-bento .b1 big { font-size: 21px; }
}
@container (max-width:300px) {
  .s-bento > div { padding: 7px; }
  .s-bento big { font-size: 12.5px; }
  .s-bento .b1 big { font-size: 18px; }
}
.s-bento .b3 { background: #d9f99d; }
.s-bento .b4 { grid-column: span 2; }
.s-bento .b6 { grid-column: span 2; background: #dbe7ff; }
.s-bento .bars { display: flex; gap: 3px; align-items: end; height: 22px; }
.s-bento .bars i { flex: 1; background: #111; border-radius: 2px; }
```

No JavaScript needed.
