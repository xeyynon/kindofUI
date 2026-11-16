# Accordion

Navigation · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#accordion

Stacked headers that expand to show their content. Opening one closes the others here.

- **Good for:** FAQs and optional details
- **Watch out:** Content most people need; it hides it
- **Seen in:** FAQ pages, product specs, mobile settings

## Prompt for an AI assistant

Build this navigation pattern for my app: Accordion.

What it is: Stacked headers that expand to show their content. Opening one closes the others here.
Good for: FAQs and optional details.
Watch out: Content most people need; it hides it.
Seen in: FAQ pages, product specs, mobile settings

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
<div class="stage s-acc">
    <h5 role="none">Frequently asked questions</h5>
    <details name="faq" open=""><summary>How long does delivery take?</summary><p>2 to 4 working days in metro cities and 5 to 7 days elsewhere.</p></details>
    <details name="faq"><summary>Can I return an opened product?</summary><p>Yes, within 30 days, as long as it isn't damaged.</p></details>
    <details name="faq"><summary>Do you ship outside India?</summary><p>Not yet. We'll email you when we do.</p></details>
    <details name="faq"><summary>How do I cancel my subscription?</summary><p>Go to Account › Subscriptions and choose Cancel. No calls needed.</p></details>
  </div>
```

### CSS

```css
:root { --display: "Bricolage Grotesque",system-ui,sans-serif; }
/* fonts used (all on Google Fonts): Bricolage Grotesque */
/* base styles the site gives every demo (scoped to this demo) */
.s-acc, .s-acc *, .s-acc *::before, .s-acc *::after { box-sizing: border-box; }
.s-acc { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-acc button { font: inherit; cursor: pointer; }
.s-acc { background: #fff; color: #1f2430; padding: 16px 18px; display: grid; align-content: start; font-size: 13px; overflow: auto; }
.s-acc h5 { margin: 0 0 8px; font: 700 15px var(--display); }
.s-acc details { border-bottom: 1px solid #e9ebf0; }
.s-acc summary { list-style: none; cursor: pointer; padding: 10px 0; display: flex; justify-content: space-between; gap: 8px; font-weight: 600; }
.s-acc summary::-webkit-details-marker { display: none; }
.s-acc summary::after { content: "+"; font-size: 18px; line-height: 1; color: #3557e0; transition: transform .2s; }
.s-acc details[open] summary::after { transform: rotate(45deg); }
.s-acc details p { margin: 0 0 10px; color: #555; }
```

No JavaScript needed.
