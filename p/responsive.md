# Mobile-first & responsive

Process and methods · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#responsive

Design for the smallest screen first, then let the same content reflow into more columns as space grows.

- **Good for:** Every website and web app
- **Watch out:** Designing desktop first and squeezing it later
- **Seen in:** every modern website; this page reflows the same way

## Prompt for an AI assistant

Help me use Mobile-first & responsive on my project.

What it is: Design for the smallest screen first, then let the same content reflow into more columns as space grows.
Good for: Every website and web app.
Watch out: Designing desktop first and squeezing it later.
Seen in: every modern website; this page reflows the same way

Steps:
1. Ask me the few questions you need about my product and users first.
2. Walk me through the method step by step for my case, not in general.
3. Produce the outputs the method needs (for example notes, a table or a checklist) in plain text I can share.
4. Tell me what to do next and how to know it worked.

The kindofui example below shows the method in a small working demo.

## Code

Copy and adapt. The HTML and CSS are scoped to this demo, so they will not touch the page they are pasted into.

### HTML

```html
<div class="stage s-resp">
    <figure><div class="dv ph"><div class="ln" style="background:#2b3040;width:60%"></div><div class="g"><div class="c"></div><div class="c"></div><div class="c"></div></div></div><figcaption>Phone · 1 col</figcaption></figure>
    <figure><div class="dv tb"><div class="ln" style="background:#2b3040;width:50%"></div><div class="g"><div class="c"></div><div class="c"></div><div class="c"></div><div class="c"></div></div></div><figcaption>Tablet · 2 col</figcaption></figure>
    <figure><div class="dv ds"><div class="ln" style="background:#2b3040;width:35%"></div><div class="g"><div class="c"></div><div class="c"></div><div class="c"></div><div class="c"></div><div class="c"></div><div class="c"></div></div></div><figcaption>Desktop · 3 col</figcaption></figure>
  </div>
```

### CSS

```css
:root { --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-resp, .s-resp *, .s-resp *::before, .s-resp *::after { box-sizing: border-box; }
.s-resp { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-resp button { font: inherit; cursor: pointer; }
.ln { height: 6px; border-radius: 3px; background: #d6dbe4; }
.s-resp { background: #f3f4f7; display: flex; align-items: flex-end; justify-content: center; gap: 12px; padding: 14px; color: #2b3040; container-type: inline-size; }
.s-resp .dv { background: #fff; border: 3px solid #2b3040; border-radius: 8px; padding: 6px; display: grid; gap: 5px; align-content: start; overflow: hidden; }
.s-resp .ph { width: 62px; height: 120px; border-radius: 12px; }
.s-resp .tb { width: 110px; height: 150px; }
.s-resp .ds { width: 170px; height: 115px; border-bottom-width: 10px; }
.s-resp .g { display: grid; gap: 4px; }
.s-resp .tb .g { grid-template-columns: 1fr 1fr; }
.s-resp .ds .g { grid-template-columns: repeat(3,1fr); }
.s-resp .c { height: 26px; background: #c7d2fe; border-radius: 3px; }
.s-resp .ds .c { height: 30px; }
.s-resp figure { margin: 0; display: grid; justify-items: center; gap: 6px; font: 10px var(--mono); color: #6b7280; }
@container (max-width:380px) {
  .s-resp { gap: 8px; padding: 10px; }
  .s-resp .dv { padding: 5px; gap: 4px; border-width: 2px; }
  .s-resp .ph { width: 46px; height: 96px; }
  .s-resp .tb { width: 84px; height: 122px; }
  .s-resp .ds { width: 120px; height: 92px; border-bottom-width: 8px; }
  .s-resp .c { height: 20px; }
  .s-resp .ds .c { height: 22px; }
}
@container (max-width:300px) {
  .s-resp { gap: 6px; padding: 8px; }
  .s-resp .ph { width: 38px; height: 84px; }
  .s-resp .tb { width: 66px; height: 108px; }
  .s-resp .ds { width: 96px; height: 80px; }
  .s-resp figure { font-size: 9px; }
  .s-resp .c { height: 16px; }
  .s-resp .ds .c { height: 18px; }
}
```

No JavaScript needed.
