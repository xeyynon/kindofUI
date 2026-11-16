# WCAG POUR principles

Accessibility and motion · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#pour

The four principles the Web Content Accessibility Guidelines are built on. Every WCAG rule fits under one of them.

- **Good for:** Structuring accessibility reviews
- **Watch out:** Relying only on automated checkers
- **Seen in:** WCAG 2.2, accessibility audits and laws worldwide

## Prompt for an AI assistant

Make my UI follow this accessibility and motion practice: WCAG POUR principles.

What it is: The four principles the Web Content Accessibility Guidelines are built on. Every WCAG rule fits under one of them.
Good for: Structuring accessibility reviews.
Watch out: Relying only on automated checkers.
Seen in: WCAG 2.2, accessibility audits and laws worldwide

Steps:
1. Audit every page and component I share against this practice and list each problem with its element.
2. Fix the problems in code without changing the visual design more than needed.
3. Follow WCAG 2.2 AA and say which success criterion each fix covers.
4. Tell me how to test it myself: keyboard only, a screen reader, 200% zoom and reduced motion.

The kindofui example below shows the practice in a small working demo.

## Code

Copy and adapt. The HTML and CSS are scoped to this demo, so they will not touch the page they are pasted into.

### HTML

```html
<div class="stage s-pour">
    <div><b>P</b><strong>Perceivable</strong><span>Text alternatives, captions, enough contrast</span></div>
    <div><b>O</b><strong>Operable</strong><span>Works with a keyboard, enough time, nothing that flashes</span></div>
    <div><b>U</b><strong>Understandable</strong><span>Clear words, predictable behaviour, helpful errors</span></div>
    <div><b>R</b><strong>Robust</strong><span>Clean markup that works with assistive technology</span></div>
  </div>
```

### CSS

```css
:root { --display: "Bricolage Grotesque",system-ui,sans-serif; }
/* fonts used (all on Google Fonts): Bricolage Grotesque */
/* base styles the site gives every demo (scoped to this demo) */
.s-pour, .s-pour *, .s-pour *::before, .s-pour *::after { box-sizing: border-box; }
.s-pour { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-pour button { font: inherit; cursor: pointer; }
.s-pour { background: #fff; color: #1f2430; display: grid; grid-template-columns: 1fr 1fr; gap: 8px; padding: 14px; font-size: 11px; }
.s-pour > div { border-radius: 10px; padding: 12px; display: grid; gap: 4px; align-content: start; }
.s-pour > div:nth-child(1) { background: #eff6ff; }
.s-pour > div:nth-child(2) { background: #f0fdf4; }
.s-pour > div:nth-child(3) { background: #fefce8; }
.s-pour > div:nth-child(4) { background: #fdf2f8; }
.s-pour b { font: 800 26px/1 var(--display); color: #3557e0; }
.s-pour strong { font-size: 13px; }
.s-pour span { color: #555; line-height: 1.4; }
```

No JavaScript needed.
