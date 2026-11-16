# Password field done right

Components and UX patterns · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#password

Show the rules before people type and tick them off live, offer a show password button, and let paste and password managers work. Skip rules like "one capital and one symbol".

- **Good for:** Sign up, password change, any new credential
- **Watch out:** Blocking paste or adding symbol rules
- **Based on:** NIST SP 800-63B (no composition rules, allow paste, offer show password); NN/g on password creation (2015); Baymard on password rules (2022)

## Prompt for an AI assistant

Build this UI pattern for my app: Password field done right.

What it is: Show the rules before people type and tick them off live, offer a show password button, and let paste and password managers work. Skip rules like "one capital and one symbol".
Good for: Sign up, password change, any new credential.
Watch out: Blocking paste or adding symbol rules.
Based on: NIST SP 800-63B (no composition rules, allow paste, offer show password); NN/g on password creation (2015); Baymard on password rules (2022)

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
<div class="stage s-pwd">
    <div class="seg" role="group" aria-label="Version"><button type="button" aria-pressed="true" data-m="bad">Hidden rules</button><button type="button" aria-pressed="false" data-m="good">Rules up front</button></div>
    <div class="frm"></div>
  </div>
```

### CSS

```css
:root { --body: "Figtree",system-ui,sans-serif; }
/* fonts used (all on Google Fonts): Figtree */
/* base styles the site gives every demo (scoped to this demo) */
.s-pwd, .s-pwd *, .s-pwd *::before, .s-pwd *::after { box-sizing: border-box; }
.s-pwd { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-pwd button { font: inherit; cursor: pointer; }
.s-dly,.s-rsv,.s-esum,.s-lbl,.s-pwd,.s-dbl,.s-deb,.s-inl,.s-fcs,.s-back { background: #fff; color: #1f2430; font-size: 12px; padding: 12px 14px; }
.s-esum .seg,.s-lbl .seg,.s-pwd .seg,.s-fcs .seg,.s-back .seg { display: flex; border: 1px solid #c9ced8; border-radius: 7px; overflow: hidden; margin-bottom: 9px; }
.s-esum .seg button,.s-lbl .seg button,.s-pwd .seg button,.s-fcs .seg button,.s-back .seg button { flex: 1; border: 0; border-left: 1px solid #c9ced8; background: #fff; color: #4a5160; padding: 5px 6px; font: 600 11px var(--body); }
.s-esum .seg button:first-child,.s-lbl .seg button:first-child,.s-pwd .seg button:first-child,.s-fcs .seg button:first-child,.s-back .seg button:first-child { border-left: 0; }
.s-esum .seg [aria-pressed="true"],.s-lbl .seg [aria-pressed="true"],.s-pwd .seg [aria-pressed="true"],.s-fcs .seg [aria-pressed="true"],.s-back .seg [aria-pressed="true"] { background: #1f2430; color: #fff; }
.s-dly .act,.s-rsv .act,.s-esum .act,.s-lbl .act,.s-pwd .act,.s-dbl .act,.s-inl .act,.s-fcs .act,.s-back .act { border: 1px solid #1f2430; background: #1f2430; color: #fff; border-radius: 6px; padding: 6px 12px; font: 600 12px var(--body); }
.s-pwd { display: grid; grid-template-rows: auto 1fr; gap: 0; }
.s-pwd .frm { display: grid; gap: 7px; align-content: start; }
.s-pwd .row { display: flex; gap: 6px; }
.s-pwd input { flex: 1; min-width: 0; border: 1px solid #8a919e; border-radius: 6px; padding: 7px 9px; font: 13px var(--body); }
.s-pwd .eye { border: 1px solid #c9ced8; background: #fff; border-radius: 6px; width: 34px; display: grid; place-items: center; color: #1f2430; padding: 0; }
.s-pwd .eye svg { width: 16px; height: 16px; }
.s-pwd ul { margin: 0; padding: 0; list-style: none; display: grid; gap: 3px; font-size: 11.5px; }
.s-pwd li { display: flex; gap: 6px; align-items: center; color: #5f6672; }
.s-pwd li::before { content: ""; width: 10px; height: 10px; border-radius: 50%; border: 1.5px solid #8a919e; flex: none; }
.s-pwd li.ok { color: #1f2430; }
.s-pwd li.ok::before { background: #1e7f4f; border-color: #1e7f4f; }
.s-pwd .err { color: #b3261e; font-size: 11.5px; font-weight: 600; min-height: 15px; }
.s-pwd .foot { display: flex; justify-content: space-between; align-items: center; font-size: 11px; color: #5f6672; }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // password: hidden rules one at a time vs rules up front, live ticks, show password, paste allowed
  (() => {
    const st = $('.s-pwd'); if (!st) return;
    const frm = $('.frm', st), HIDDEN = [[v => v.length >= 8, 'Must be at least 8 characters'], [v => /[A-Z]/.test(v), 'Must contain a capital letter'], [v => /\d/.test(v), 'Must contain a number'], [v => /[^A-Za-z0-9]/.test(v), 'Must contain a symbol']];
    const COMMON = ['password', 'password123', '123456789012345', 'qwertyuiopasdfg'], GOOD = [[v => v.length >= 15, '15 or more characters (spaces are fine)'], [v => v && !COMMON.includes(v.toLowerCase()), 'Not a common password']];
    let tries = 0;
    const draw = m => { tries = 0;
      frm.innerHTML = m === 'bad'
        ? '<label style="font:600 11.5px var(--body)">New password</label><div class="row"><input type="password" aria-label="New password" autocomplete="new-password"></div><p class="err" role="alert"></p><div class="foot"><span>Attempts: <b class="t">0</b></span><button class="act" type="button">Create account</button></div>'
        : '<label style="font:600 11.5px var(--body)">New password</label><ul>' + GOOD.map(g => `<li>${g[1]}</li>`).join('') + '</ul><div class="row"><input type="password" aria-label="New password" autocomplete="new-password"><button class="eye" type="button" aria-label="Show password" aria-pressed="false">' + EYE + '</button></div><p class="err" role="alert"></p><div class="foot"><span>Attempts: <b class="t">0</b></span><button class="act" type="button">Create account</button></div>';
      const inp = $('input', frm);
      if (m === 'bad') inp.addEventListener('paste', e => { e.preventDefault(); $('.err', frm).textContent = 'Pasting is not allowed'; });
      else inp.addEventListener('input', () => $$('li', frm).forEach((li, i) => li.classList.toggle('ok', GOOD[i][0](inp.value))));
      const eye = $('.eye', frm); if (eye) eye.addEventListener('click', () => { const on = inp.type === 'password'; inp.type = on ? 'text' : 'password'; eye.setAttribute('aria-pressed', on); eye.setAttribute('aria-label', on ? 'Hide password' : 'Show password'); });
      $('.act', frm).addEventListener('click', () => { $('.t', frm).textContent = ++tries; const v = inp.value, rules = m === 'bad' ? HIDDEN : GOOD, miss = rules.find(r => !r[0](v)); $('.err', frm).textContent = miss ? (m === 'bad' ? miss[1] : 'Check the rules above') : 'Account created'; $('.err', frm).style.color = miss ? '' : '#1e7f4f'; }); };
    const EYE = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M1.5 8S4 3.5 8 3.5 14.5 8 14.5 8 12 12.5 8 12.5 1.5 8 1.5 8Z"/><circle cx="8" cy="8" r="2"/></svg>';
    $$('.seg button', st).forEach(b => b.addEventListener('click', () => { $$('.seg button', st).forEach(x => x.setAttribute('aria-pressed', x === b)); draw(b.dataset.m); }));
    draw('bad');
  })();
})();
```
