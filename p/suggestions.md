# Suggested prompts

AI patterns · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#suggestions

Starter cards on an empty screen show what the AI can do and fill the input in one tap.

- **Good for:** Empty AI screens and first-time users
- **Watch out:** Generic prompts unrelated to the user
- **Seen in:** Claude, ChatGPT, Microsoft Copilot

## Prompt for an AI assistant

Build this AI interface pattern for my app: Suggested prompts.

What it is: Starter cards on an empty screen show what the AI can do and fill the input in one tap.
Good for: Empty AI screens and first-time users.
Watch out: Generic prompts unrelated to the user.
Seen in: Claude, ChatGPT, Microsoft Copilot

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
<div class="stage s-sugg">
    <b>What can I help with?</b>
    <div class="gr2"><button><i>✎</i>Write a polite reminder to a client</button><button><i>⌗</i>Explain a SQL join with an example</button><button><i>✈</i>Plan 3 days in Udaipur</button><button><i>▤</i>Summarise a long PDF</button></div>
    <div class="inp"><input id="sg-in" placeholder="Message" aria-label="Message"><span aria-hidden="true">↑</span></div>
  </div>
```

### CSS

```css
:root { --display: "Bricolage Grotesque",system-ui,sans-serif; --body: "Figtree",system-ui,sans-serif; }
/* fonts used (all on Google Fonts): Bricolage Grotesque, Figtree */
/* base styles the site gives every demo (scoped to this demo) */
.s-sugg, .s-sugg *, .s-sugg *::before, .s-sugg *::after { box-sizing: border-box; }
.s-sugg { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-sugg button { font: inherit; cursor: pointer; }
.s-sugg { background: #fff; color: #1f2430; padding: 18px; display: grid; gap: 12px; align-content: center; font-size: 12px; }
.s-sugg > b { font: 700 18px var(--display); text-align: center; }
.s-sugg .gr2 { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
.s-sugg .gr2 button { border: 1px solid #e3e6ec; background: #fafbfc; border-radius: 10px; padding: 10px; text-align: left; display: grid; gap: 6px; font-size: 12px; line-height: 1.35; color: #1f2430; transition: border-color .15s,transform .15s; }
.s-sugg .gr2 button:hover { border-color: #3557e0; transform: translateY(-1px); }
.s-sugg .gr2 i { font-style: normal; color: #3557e0; }
.s-sugg .inp { display: flex; align-items: center; border: 1px solid #d6dae1; border-radius: 999px; padding: 4px 4px 4px 14px; }
.s-sugg .inp input { flex: 1; min-width: 0; border: 0; outline: none; font: 13px var(--body); color: #1f2430; background: none; }
.s-sugg .inp span { width: 28px; height: 28px; border-radius: 50%; background: #1f2430; color: #fff; display: grid; place-items: center; flex: none; }
.s-sugg .inp.fl { border-color: #3557e0; box-shadow: 0 0 0 3px rgba(53,87,224,.15); }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  (() => { const i = $('#sg-in'), w = $('.s-sugg .inp'); if (!i) return;
    $$('.s-sugg .gr2 button').forEach(b => b.addEventListener('click', () => { i.value = b.textContent.replace(/^\S\s*/, '').trim(); w.classList.add('fl'); i.focus(); }));
    i.addEventListener('blur', () => w.classList.remove('fl'));
  })();
})();
```
