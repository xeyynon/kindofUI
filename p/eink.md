# E-ink / paper

Visual styles · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#eink

Grey paper, black serif text, no color and no animation. Calm, readable and easy on the eyes.

- **Good for:** Reading apps, focus modes, low-power devices
- **Watch out:** Animated or color-coded interfaces
- **Seen in:** Kindle, Kobo, reading and focus modes

## Prompt for an AI assistant

Design this interface in the E-ink / paper visual style.

What it is: Grey paper, black serif text, no color and no animation. Calm, readable and easy on the eyes.
Good for: Reading apps, focus modes, low-power devices.
Watch out: Animated or color-coded interfaces.
Seen in: Kindle, Kobo, reading and focus modes

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
<div class="stage s-eink">
    <div class="tp"><span>Chapter 4 · The Harbour</span><span class="bat" role="img" aria-label="Battery 60%"></span></div>
    <p>The boats came in before dawn, their lamps still lit, and the whole town seemed to lean toward the water. Meena stood at the end of the pier with her father's old coat around her shoulders and counted the hulls the way he had taught her: by their sound against the posts, not by sight.</p>
    <div class="ft"><span>Page 87 of 312</span><span>12 min left in chapter</span></div>
  </div>
```

### CSS

```css
/* base styles the site gives every demo (scoped to this demo) */
.s-eink, .s-eink *, .s-eink *::before, .s-eink *::after { box-sizing: border-box; }
.s-eink { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-eink button { font: inherit; cursor: pointer; }
.s-eink { background: #e8e6df; color: #1a1a1a; font-family: Georgia,"Times New Roman",serif; padding: 16px 22px; display: grid; grid-template-rows: auto 1fr auto; gap: 10px; }
.s-eink .tp,.s-eink .ft { display: flex; justify-content: space-between; align-items: center; font: 11px Georgia,serif; color: #555; }
.s-eink p { margin: 0; font-size: 14px; line-height: 1.6; text-align: justify; hyphens: auto; overflow: hidden; }
.s-eink .bat { width: 22px; height: 10px; border: 1.5px solid #333; border-radius: 2px; background: linear-gradient(90deg,#333 60%,transparent 60%) 1px 1px/calc(100% - 2px) calc(100% - 2px) no-repeat; }
```

No JavaScript needed.
