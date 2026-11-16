# Inline form validation

Components and UX patterns · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#validation

Fields check themselves as you type and say exactly how to fix the problem, with a live password strength meter.

- **Good for:** Sign-up, checkout, any important form
- **Watch out:** Showing errors before someone finishes typing
- **Seen in:** Stripe checkout, Google account sign-up

## Prompt for an AI assistant

Build this UI pattern for my app: Inline form validation.

What it is: Fields check themselves as you type and say exactly how to fix the problem, with a live password strength meter.
Good for: Sign-up, checkout, any important form.
Watch out: Showing errors before someone finishes typing.
Seen in: Stripe checkout, Google account sign-up

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
<div class="stage s-val">
    <form id="val" novalidate="">
      <label for="v-email">Email</label><input id="v-email" type="email" value="neha@brewly" autocomplete="off"><span class="msg" id="v-em"></span>
      <label for="v-pw">Password</label><input id="v-pw" type="password" value="Coffee1" autocomplete="off"><div class="mt"><i id="v-bar"></i></div><span class="msg" id="v-pm"></span>
      <button type="submit">Create account</button>
    </form>
  </div>
```

### CSS

```css
:root { --body: "Figtree",system-ui,sans-serif; }
/* fonts used (all on Google Fonts): Figtree */
/* base styles the site gives every demo (scoped to this demo) */
.s-val, .s-val *, .s-val *::before, .s-val *::after { box-sizing: border-box; }
.s-val { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-val button { font: inherit; cursor: pointer; }
.s-val { background: #fff; color: #1f2430; padding: 14px 20px; font-size: 12px; overflow: auto; }
.s-val form { display: grid; gap: 4px; }
.s-val label { font-weight: 600; margin-top: 4px; }
.s-val input { border: 1.5px solid #cfd5dd; border-radius: 7px; padding: 8px 10px; font: 13px var(--body); color: #1f2430; }
.s-val input.bad { border-color: #dc2626; background: #fef2f2; }
.s-val input.ok { border-color: #16a34a; }
.s-val .msg { font-size: 11px; min-height: 15px; }
.s-val .msg.bad { color: #dc2626; }
.s-val .msg.ok { color: #16a34a; }
.s-val .mt { height: 5px; background: #eceef2; border-radius: 3px; overflow: hidden; }
.s-val .mt i { display: block; height: 100%; width: 0; transition: width .2s,background .2s; }
.s-val button { margin-top: 6px; border: 0; background: #3557e0; color: #fff; border-radius: 7px; padding: 9px; font-weight: 600; }
.s-val button:disabled { background: #a9b6ec; cursor: not-allowed; }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // inline validation
  (() => { const e = $('#v-email'), p = $('#v-pw'), em = $('#v-em'), pm = $('#v-pm'), bar = $('#v-bar'), btn = $('#val button'); if (!e) return;
    const set = (inp, msg, ok, t) => { inp.classList.toggle('bad', !ok); inp.classList.toggle('ok', ok); msg.className = 'msg ' + (ok ? 'ok' : 'bad'); msg.textContent = t; };
    const ve = () => { const v = e.value.trim();
      if (!v) { set(e, em, false, 'Enter your email address.'); return false; }
      if (!/^[^@\s]+@[^@\s]+$/.test(v)) { set(e, em, false, 'An email needs an @, like name@example.com.'); return false; }
      if (!/^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(v)) { set(e, em, false, 'Add a domain ending, like .com or .in.'); return false; }
      set(e, em, true, 'Looks good.'); return true; };
    const vp = () => { const v = p.value; let s = 0; if (v.length >= 8) s++; if (/\d/.test(v)) s++; if (/[A-Z]/.test(v)) s++; if (/[^A-Za-z0-9]/.test(v)) s++;
      bar.style.width = (s * 25 || 6) + '%'; bar.style.background = ['#dc2626', '#f97316', '#eab308', '#22c55e', '#16a34a'][s];
      const miss = []; if (v.length < 8) miss.push(`${8 - v.length} more character${8 - v.length > 1 ? 's' : ''}`); if (!/\d/.test(v)) miss.push('a number');
      const ok = !miss.length; set(p, pm, ok, ok ? (s >= 4 ? 'Strong password.' : 'Good. A symbol or capital letter makes it stronger.') : 'Add ' + miss.join(' and ') + '.'); return ok; };
    const all = () => { const a = ve(), b = vp(); btn.disabled = !(a && b); };
    e.addEventListener('input', all); p.addEventListener('input', all);
    $('#val').addEventListener('submit', ev => { ev.preventDefault(); btn.textContent = 'Account created ✓'; }); all();
  })();
})();
```
