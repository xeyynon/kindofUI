# Material Design

Visual styles · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#material

Google's system: layered surfaces with elevation shadows, a top app bar, chips, and a floating action button for the main action.

- **Good for:** Android apps, admin tools, teams wanting a ready system
- **Watch out:** Brands that need a very distinctive look
- **Seen in:** Android, Gmail, Google Drive, Google Calendar

## Prompt for an AI assistant

Design this interface in the Material Design visual style.

What it is: Google's system: layered surfaces with elevation shadows, a top app bar, chips, and a floating action button for the main action.
Good for: Android apps, admin tools, teams wanting a ready system.
Watch out: Brands that need a very distinctive look.
Seen in: Android, Gmail, Google Drive, Google Calendar

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
<div class="stage s-mat">
    <div class="bar">☰ <span>Inbox</span></div>
    <div class="chips"><span class="on">Primary</span><span>Updates</span><span>Promotions</span></div>
    <div class="item"><span class="av">AK</span><div><b>Ananya Kapoor</b><br><span style="color:#666">Design review moved to 4 PM</span></div></div>
    <div class="item"><span class="av" style="background:#386a20">RS</span><div><b>Rohan Shah</b><br><span style="color:#666">Here are the final icons</span></div></div>
    <button class="fab" aria-label="Compose">+</button>
  </div>
```

### CSS

```css
/* base styles the site gives every demo (scoped to this demo) */
.s-mat, .s-mat *, .s-mat *::before, .s-mat *::after { box-sizing: border-box; }
.s-mat { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-mat button { font: inherit; cursor: pointer; }
.s-mat { background: #fdf7ff; color: #1d1b20; font-family: Roboto,system-ui,sans-serif; }
.s-mat .bar { background: #6750a4; color: #fff; height: 52px; display: flex; align-items: center; gap: 14px; padding: 0 16px; font-size: 17px; box-shadow: 0 2px 4px rgba(0,0,0,.2); }
.s-mat .chips { display: flex; gap: 6px; padding: 12px 14px 4px; }
.s-mat .chips span { border: 1px solid #79747e; border-radius: 8px; padding: 4px 10px; font-size: 11px; }
.s-mat .chips span.on { background: #e8def8; border-color: #e8def8; }
.s-mat .item { margin: 8px 14px; background: #fff; border-radius: 12px; padding: 10px 12px; display: flex; gap: 10px; align-items: center; box-shadow: 0 1px 3px rgba(0,0,0,.18),0 1px 2px rgba(0,0,0,.1); font-size: 12px; }
.s-mat .av { width: 32px; height: 32px; border-radius: 50%; background: #7d5260; color: #fff; display: grid; place-items: center; font-weight: 600; flex: none; }
.s-mat .fab { position: absolute; right: 16px; bottom: 16px; width: 54px; height: 54px; border-radius: 16px; background: #eaddff; color: #21005d; border: 0; font-size: 26px; box-shadow: 0 3px 6px rgba(0,0,0,.25); }
```

No JavaScript needed.
