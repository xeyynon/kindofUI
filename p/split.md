# Split screen

Layouts · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#split

Two halves with different jobs: one sells or shows a picture, the other holds the action, often a form.

- **Good for:** Login, sign-up, before/after, two-option choices
- **Watch out:** Content that needs full width, especially on phones
- **Seen in:** login and sign-up pages, product comparison pages

## Prompt for an AI assistant

Build this layout for my page: Split screen.

What it is: Two halves with different jobs: one sells or shows a picture, the other holds the action, often a form.
Good for: Login, sign-up, before/after, two-option choices.
Watch out: Content that needs full width, especially on phones.
Seen in: login and sign-up pages, product comparison pages

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
<div class="stage s-split">
    <div class="l"><b style="font-family:var(--display)">Ledgerly</b><q>We closed our books three days faster in the first month.</q><span style="font-size:11px;opacity:.8">Neha, Finance lead</span></div>
    <form class="r" onsubmit="event.preventDefault()">
      <b style="font-size:16px">Welcome back</b>
      <input id="sp-email" type="email" placeholder="Email" value="neha@company.in" aria-label="Email">
      <input id="sp-pass" type="password" placeholder="Password" value="password" aria-label="Password">
      <button type="submit">Sign in</button>
      <span style="color:#666;text-align:center">New here? <u>Create an account</u></span>
    </form>
  </div>
```

### CSS

```css
:root { --display: "Bricolage Grotesque",system-ui,sans-serif; }
/* fonts used (all on Google Fonts): Bricolage Grotesque */
/* base styles the site gives every demo (scoped to this demo) */
.s-split, .s-split *, .s-split *::before, .s-split *::after { box-sizing: border-box; }
.s-split { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-split button { font: inherit; cursor: pointer; }
.s-split { display: grid; grid-template-columns: 1fr 1fr; }
.s-split .l { background: linear-gradient(160deg,#0f766e,#134e4a); color: #e6fffa; padding: 20px; display: flex; flex-direction: column; justify-content: space-between; }
.s-split .l q { font: 600 15px/1.35 var(--display); }
.s-split .r { background: #fff; padding: 18px; display: grid; gap: 8px; align-content: center; color: #111; font-size: 12px; }
.s-split input { width: 100%; border: 1px solid #cfd5dd; border-radius: 6px; padding: 7px 8px; font: inherit; }
.s-split button { background: #0f766e; color: #fff; border: 0; border-radius: 6px; padding: 8px; font-weight: 700; }
```

No JavaScript needed.
