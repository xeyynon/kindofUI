# Illustration-led

Visual styles · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#illus

Custom drawings give the brand its personality and explain the product before the copy does.

- **Good for:** Onboarding, empty states, explaining abstract products
- **Watch out:** Every screen; it slows production and loading
- **Seen in:** Mailchimp, Slack (older site), Notion, Headspace

## Prompt for an AI assistant

Design this interface in the Illustration-led visual style.

What it is: Custom drawings give the brand its personality and explain the product before the copy does.
Good for: Onboarding, empty states, explaining abstract products.
Watch out: Every screen; it slows production and loading.
Seen in: Mailchimp, Slack (older site), Notion, Headspace

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
<div class="stage s-illus">
    <div><h4 role="none">Send emails people actually open</h4><p>Templates, scheduling and reports in one place.</p><button>Try it free</button></div>
    <svg viewBox="0 0 200 160" aria-hidden="true">
      <circle cx="160" cy="34" r="18" fill="#ffc94d"></circle>
      <path d="M0 130 Q50 95 100 120 T200 110 V160 H0Z" fill="#8fd3a8"></path>
      <path d="M0 145 Q60 120 120 140 T200 135 V160 H0Z" fill="#5fb883"></path>
      <rect x="120" y="92" width="8" height="40" fill="#8a5a3c"></rect>
      <rect x="106" y="70" width="36" height="26" rx="12" fill="#ff7a45"></rect>
      <rect x="114" y="78" width="14" height="4" rx="2" fill="#fff"></rect>
      <circle cx="62" cy="62" r="13" fill="#f2c4a2"></circle>
      <path d="M48 58 Q62 40 76 58 Q70 50 62 50 Q54 50 48 58Z" fill="#2c2340"></path>
      <rect x="47" y="76" width="30" height="40" rx="12" fill="#5b7cfa"></rect>
      <rect x="40" y="114" width="10" height="20" rx="5" fill="#2c2340"></rect>
      <rect x="74" y="114" width="10" height="20" rx="5" fill="#2c2340"></rect>
      <rect x="76" y="84" width="34" height="6" rx="3" fill="#5b7cfa" transform="rotate(-20 76 84)"></rect>
      <rect x="96" y="58" width="22" height="15" rx="2" fill="#fff" stroke="#16324f" stroke-width="1.5" transform="rotate(-12 107 65)"></rect>
      <path d="M96 58 L107 67 L118 58" fill="none" stroke="#16324f" stroke-width="1.5" transform="rotate(-12 107 65)"></path>
    </svg>
  </div>
```

### CSS

```css
:root { --display: "Bricolage Grotesque",system-ui,sans-serif; }
/* fonts used (all on Google Fonts): Bricolage Grotesque */
/* base styles the site gives every demo (scoped to this demo) */
.s-illus, .s-illus *, .s-illus *::before, .s-illus *::after { box-sizing: border-box; }
.s-illus { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-illus button { font: inherit; cursor: pointer; }
.s-illus { background: #e6f2ff; color: #16324f; display: grid; grid-template-columns: 1fr 1fr; align-items: center; padding: 0 18px; gap: 10px; }
.s-illus h4 { font: 800 22px/1.1 var(--display); margin: 0 0 8px; }
.s-illus p { margin: 0 0 12px; font-size: 12px; color: #3d5a7a; }
.s-illus button { border: 0; background: #ff7a45; color: #fff; font-weight: 700; padding: 8px 14px; border-radius: 8px; }
.s-illus svg { width: 100%; height: auto; }
```

No JavaScript needed.
