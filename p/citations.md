# Inline citations

AI patterns · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#citations

Numbered markers link each claim to its source, with a preview card so people can check the answer.

- **Good for:** AI answers, research, fact-based content
- **Watch out:** Links that do not actually back the claim
- **Seen in:** Perplexity, Claude with web search, Google AI Overviews

## Prompt for an AI assistant

Build this AI interface pattern for my app: Inline citations.

What it is: Numbered markers link each claim to its source, with a preview card so people can check the answer.
Good for: AI answers, research, fact-based content.
Watch out: Links that do not actually back the claim.
Seen in: Perplexity, Claude with web search, Google AI Overviews

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
<div class="stage s-cite">
    <small>Example answer with sources</small>
    <p>Acme's revenue grew 18% year on year<button class="cn">1</button>, driven mostly by subscriptions<button class="cn">2</button>. The team expects growth to slow next quarter<button class="cn">3</button>.</p>
    <div class="src" id="ct-s"></div>
  </div>
```

### CSS

```css
:root { --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-cite, .s-cite *, .s-cite *::before, .s-cite *::after { box-sizing: border-box; }
.s-cite { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-cite button { font: inherit; cursor: pointer; }
.s-cite { background: #fff; color: #1f2430; padding: 18px; display: grid; gap: 10px; align-content: start; font-size: 13px; }
.s-cite small { color: #888; font-size: 10px; text-transform: uppercase; letter-spacing: .08em; }
.s-cite p { margin: 0; line-height: 1.7; }
.s-cite .cn { border: 0; background: #eef1ff; color: #3557e0; font: 600 10px var(--mono); border-radius: 4px; padding: 1px 5px; margin-left: 3px; vertical-align: 2px; cursor: pointer; }
.s-cite .cn.on { background: #3557e0; color: #fff; }
.s-cite .src { border: 1px solid #e3e6ec; border-radius: 10px; padding: 10px 12px; display: grid; gap: 3px; box-shadow: 0 6px 16px rgba(0,0,0,.06); font-size: 12px; }
.s-cite .src span { color: #666; font-size: 11px; }
.s-cite .src em { font-style: normal; color: #3557e0; font: 11px var(--mono); overflow-wrap: anywhere; }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  (() => { const S = [['Q3 2026 results deck', 'acme-example.com/investors/q3.pdf', 'Page 4: revenue up 18% year on year.'], ['Investor call transcript', 'acme-example.com/investors/call', '"Subscriptions were about two thirds of new revenue."'], ['Letter from the CFO', 'acme-example.com/blog/cfo-letter', '"We expect growth to slow next quarter as the festive season ends."']];
    const box = $('#ct-s'), bs = $$('.s-cite .cn'); if (!box) return;
    const show = k => { bs.forEach((b, i) => b.classList.toggle('on', i === k)); box.innerHTML = `<em>[${k + 1}] ${S[k][1]}</em><b>${S[k][0]}</b><span>${S[k][2]}</span>`; };
    bs.forEach((b, i) => { b.addEventListener('click', () => show(i)); b.addEventListener('mouseenter', () => show(i)); }); show(0);
  })();
})();
```
