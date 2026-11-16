# Login & OTP verification

Components and UX patterns · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#auth

One-time code boxes that jump to the next box as you type and accept a pasted code, plus passwordless options.

- **Good for:** Sign-in and two-step verification
- **Watch out:** Blocking paste in code fields
- **Seen in:** banking apps, WhatsApp, Google 2-step verification

## Prompt for an AI assistant

Build this UI pattern for my app: Login & OTP verification.

What it is: One-time code boxes that jump to the next box as you type and accept a pasted code, plus passwordless options.
Good for: Sign-in and two-step verification.
Watch out: Blocking paste in code fields.
Seen in: banking apps, WhatsApp, Google 2-step verification

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
<div class="stage s-auth">
    <b>Verify it's you</b><span class="sub">We sent a 6-digit code to +91 98•••• 4210</span>
    <div class="otp" id="otp"><input id="otp1" inputmode="numeric" maxlength="1" aria-label="Digit 1" value="4" autocomplete="one-time-code"><input id="otp2" inputmode="numeric" maxlength="1" aria-label="Digit 2" value="8"><input id="otp3" inputmode="numeric" maxlength="1" aria-label="Digit 3"><input id="otp4" inputmode="numeric" maxlength="1" aria-label="Digit 4"><input id="otp5" inputmode="numeric" maxlength="1" aria-label="Digit 5"><input id="otp6" inputmode="numeric" maxlength="1" aria-label="Digit 6"></div>
    <span class="st" id="otp-s">Resend code in 0:24</span>
    <div class="or">or</div>
    <button class="alt">Use a passkey instead</button><button class="alt">Email me a sign-in link</button>
  </div>
```

### CSS

```css
:root { --display: "Bricolage Grotesque",system-ui,sans-serif; --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): Bricolage Grotesque, JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-auth, .s-auth *, .s-auth *::before, .s-auth *::after { box-sizing: border-box; }
.s-auth { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-auth button { font: inherit; cursor: pointer; }
.s-auth { background: #fff; color: #1f2430; padding: 16px 20px; display: grid; gap: 8px; align-content: center; justify-items: center; text-align: center; font-size: 12px; }
.s-auth > b { font: 700 17px var(--display); }
.s-auth .sub { color: #666; }
.s-auth .otp { display: flex; gap: 6px; margin: 2px 0; }
.s-auth .otp input { width: 36px; height: 42px; text-align: center; font: 600 18px var(--mono); border: 1.5px solid #cfd5dd; border-radius: 8px; color: #1f2430; padding: 0; }
.s-auth .otp input:focus { border-color: #3557e0; outline: none; box-shadow: 0 0 0 3px rgba(53,87,224,.18); }
.s-auth .otp.ok input { border-color: #16a34a; background: #f0fdf4; }
.s-auth .st { color: #888; font-size: 11px; }
.s-auth .st.ok { color: #16a34a; font-weight: 600; }
.s-auth .or { width: 100%; max-width: 260px; display: flex; align-items: center; gap: 8px; color: #aaa; font-size: 10px; }
.s-auth .or::before,.s-auth .or::after { content: ""; flex: 1; height: 1px; background: #eee; }
.s-auth .alt { width: 100%; max-width: 260px; border: 1px solid #d6dae1; background: #fff; border-radius: 8px; padding: 8px; font-weight: 600; color: #1f2430; }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // OTP
  (() => { const ins = $$('#otp input'), s = $('#otp-s'), w = $('#otp'); if (!w) return;
    const chk = () => { const v = ins.map(i => i.value).join(''); const ok = v.length === 6; w.classList.toggle('ok', ok); s.classList.toggle('ok', ok); s.textContent = ok ? 'Code verified ✓' : 'Resend code in 0:24'; };
    ins.forEach((i, k) => {
      i.addEventListener('input', () => { i.value = i.value.replace(/\D/g, '').slice(-1); if (i.value && ins[k + 1]) ins[k + 1].focus(); chk(); });
      i.addEventListener('keydown', e => { if (e.key === 'Backspace' && !i.value && ins[k - 1]) ins[k - 1].focus(); });
      i.addEventListener('paste', e => { e.preventDefault(); const d = (e.clipboardData.getData('text') || '').replace(/\D/g, '').slice(0, 6); d.split('').forEach((c, j) => { if (ins[k + j]) ins[k + j].value = c; }); ins[Math.min(5, k + d.length)].focus(); chk(); });
    });
  })();
})();
```
