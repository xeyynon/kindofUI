# Hero + sections

Layouts · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#hero

The classic landing page: navigation, a big headline with one call to action, then feature blocks as you scroll.

- **Good for:** Marketing and landing pages
- **Watch out:** Logged-in apps where people come to work
- **Seen in:** almost every SaaS and startup site

## Prompt for an AI assistant

Build this layout for my page: Hero + sections.

What it is: The classic landing page: navigation, a big headline with one call to action, then feature blocks as you scroll.
Good for: Marketing and landing pages.
Watch out: Logged-in apps where people come to work.
Seen in: almost every SaaS and startup site

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
<div class="stage wf s-hero">
    <div class="nav"><b style="font-family:var(--display)">Taskly</b><span><span>Features</span><span>Pricing</span><span>Docs</span></span></div>
    <div class="h"><b>Plan your week in five minutes</b><span style="font-size:11px;color:#666">Tasks, calendar and notes in one place.</span><button>Start free</button></div>
    <div class="feat"><div class="bx"><b>Smart lists</b><div class="ln"></div><div class="ln" style="width:70%"></div></div><div class="bx"><b>Calendar sync</b><div class="ln"></div><div class="ln" style="width:60%"></div></div><div class="bx"><b>Reminders</b><div class="ln"></div><div class="ln" style="width:80%"></div></div></div>
  </div>
```

### CSS

```css
:root { --display: "Bricolage Grotesque",system-ui,sans-serif; }
/* fonts used (all on Google Fonts): Bricolage Grotesque */
/* base styles the site gives every demo (scoped to this demo) */
.s-hero, .s-hero *, .s-hero *::before, .s-hero *::after { box-sizing: border-box; }
.s-hero { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-hero button { font: inherit; cursor: pointer; }
.wf { background: #f3f4f7; color: #2b3040; }
.bx { background: #fff; border: 1px solid #dfe3ea; border-radius: 6px; }
.ln { height: 6px; border-radius: 3px; background: #d6dbe4; }
.s-hero { padding: 10px; display: grid; gap: 8px; grid-template-rows: auto 1fr auto; }
.s-hero .nav { display: flex; justify-content: space-between; align-items: center; font-size: 11px; }
.s-hero .nav span { display: flex; gap: 10px; color: #666; }
.s-hero .h { display: grid; justify-items: center; text-align: center; gap: 8px; align-content: center; background: linear-gradient(#fff,#eef2ff); border-radius: 10px; padding: 10px; }
.s-hero .h b { font: 800 22px/1.05 var(--display); max-width: 22ch; }
.s-hero .h button { border: 0; background: #3557e0; color: #fff; border-radius: 6px; padding: 6px 14px; font-size: 12px; font-weight: 600; }
.s-hero .feat { display: grid; grid-template-columns: repeat(3,1fr); gap: 8px; }
.s-hero .feat div { padding: 8px; display: grid; gap: 5px; font-size: 10px; }
```

No JavaScript needed.
