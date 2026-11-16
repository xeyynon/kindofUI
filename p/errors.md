# Error states

Components and UX patterns · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#errors

Good errors say what happened and how to fix it: a plain 404, an offline notice, an inline field error and a failed-payment message with a way to retry.

- **Good for:** Explaining what went wrong and how to fix it
- **Watch out:** Blaming the user, or "Something went wrong"
- **Seen in:** GitHub 404, Stripe form errors, Gmail offline banner

## Prompt for an AI assistant

Build this UI pattern for my app: Error states.

What it is: Good errors say what happened and how to fix it: a plain 404, an offline notice, an inline field error and a failed-payment message with a way to retry.
Good for: Explaining what went wrong and how to fix it.
Watch out: Blaming the user, or "Something went wrong".
Seen in: GitHub 404, Stripe form errors, Gmail offline banner

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
<div class="stage s-err">
    <div class="nf"><b>404</b><span>This page could not be found.</span><button type="button" class="lk">Back to home</button></div>
    <div class="fm"><div class="ban" role="status"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><path d="M1.5 6a9 9 0 0 1 4-2.2M14.5 6a9 9 0 0 0-3.2-1.9M4 8.6a5.5 5.5 0 0 1 2-1.2M12 8.6a5.5 5.5 0 0 0-1.4-1M8 12h.01M2 2l12 12"></path></svg><span>You're offline. Changes will sync when you reconnect.</span></div><label for="er-c">Card number</label><input id="er-c" value="4821 0000 1234" aria-invalid="true" aria-describedby="er-m"><span class="m" id="er-m"><svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm-.75-10.5h1.5v4.5h-1.5V4.5Zm0 6h1.5V12h-1.5v-1.5Z"></path></svg><span>Your card number is incomplete.</span></span><div class="fb2" role="alert"><svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm-.75-10.5h1.5v4.5h-1.5V4.5Zm0 6h1.5V12h-1.5v-1.5Z"></path></svg><div><b>Card declined</b><span>Your bank declined this payment. Try another card.</span><div class="ac"><button type="button" class="lk">Try again</button><button type="button" class="lk">Use UPI</button></div></div></div></div>
  </div>
```

### CSS

```css
:root { --display: "Bricolage Grotesque",system-ui,sans-serif; --body: "Figtree",system-ui,sans-serif; }
/* fonts used (all on Google Fonts): Bricolage Grotesque, Figtree */
/* base styles the site gives every demo (scoped to this demo) */
.s-err, .s-err *, .s-err *::before, .s-err *::after { box-sizing: border-box; }
.s-err { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-err button { font: inherit; cursor: pointer; }
.s-err { background: #fff; color: #1a1f36; display: grid; grid-template-columns: .8fr 1.7fr; font-size: 11px; }
.s-err .nf { display: grid; align-content: center; justify-items: start; gap: 6px; padding: 12px; border-right: 1px solid #e3e8ee; }
.s-err .nf b { font: 600 38px/1 var(--display); letter-spacing: -.03em; color: #1a1f36; }
.s-err .nf span { color: #697386; line-height: 1.4; }
.s-err .lk { border: 0; background: none; padding: 0; color: #0969da; font: 600 11.5px var(--body); cursor: pointer; }
.s-err .lk:hover { text-decoration: underline; }
.s-err .fm { padding: 10px; display: grid; gap: 5px; align-content: start; min-width: 0; }
.s-err svg { width: 14px; height: 14px; flex: none; margin-top: 1px; }
.s-err .ban { background: #1f2328; color: #fff; border-radius: 6px; padding: 7px 9px; display: flex; gap: 7px; align-items: flex-start; line-height: 1.35; }
.s-err label { font-weight: 600; margin-top: 4px; }
.s-err input { border: 1px solid #df1b41; background: #fff; border-radius: 6px; padding: 7px 9px; font: 12.5px var(--body); font-variant-numeric: tabular-nums; color: #1a1f36; min-width: 0; box-shadow: 0 0 0 3px rgba(223,27,65,.12); }
.s-err .m { color: #df1b41; display: flex; gap: 5px; align-items: flex-start; line-height: 1.35; }
.s-err .fb2 { border: 1px solid #e3e8ee; border-radius: 8px; padding: 9px 10px; display: flex; gap: 8px; align-items: flex-start; background: #fff; box-shadow: 0 1px 2px rgba(16,24,40,.06); margin-top: 2px; }
.s-err .fb2 > svg { color: #df1b41; }
.s-err .fb2 > div { display: grid; gap: 2px; min-width: 0; }
.s-err .fb2 b { font-size: 12px; }
.s-err .fb2 span { color: #697386; line-height: 1.4; }
.s-err .ac { display: flex; gap: 12px; margin-top: 4px; }
```

No JavaScript needed.
