# Retro / Y2K / pixel

Visual styles · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#retro

Nostalgic computer looks: beveled grey windows, pixel fonts, blue title bars, chrome and early-2000s colors.

- **Good for:** Games, music, nostalgia campaigns
- **Watch out:** Core workflows where speed and clarity matter
- **Seen in:** Poolsuite FM, retro game sites, Gen Z fashion brands

## Prompt for an AI assistant

Design this interface in the Retro / Y2K / pixel visual style.

What it is: Nostalgic computer looks: beveled grey windows, pixel fonts, blue title bars, chrome and early-2000s colors.
Good for: Games, music, nostalgia campaigns.
Watch out: Core workflows where speed and clarity matter.
Seen in: Poolsuite FM, retro game sites, Gen Z fashion brands

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
<div class="stage s-retro">
    <div class="win">
      <div class="tb"><span>Copying files…</span><span><b>_</b> <b>×</b></span></div>
      <div class="bd">
        <span>From 'C:\MUSIC' to 'A:\'</span>
        <div class="pb"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
        <span>3 minutes remaining</span>
        <div class="btns"><button>Cancel</button></div>
      </div>
    </div>
  </div>
```

### CSS

```css
/* fonts used (all on Google Fonts): VT323 */
/* base styles the site gives every demo (scoped to this demo) */
.s-retro, .s-retro *, .s-retro *::before, .s-retro *::after { box-sizing: border-box; }
.s-retro { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-retro button { font: inherit; cursor: pointer; }
.s-retro { background: #008080; padding: 16px; display: grid; place-items: center; font-family: "VT323",monospace; font-size: 18px; color: #000; }
.s-retro .win { width: min(100%,300px); background: #c0c0c0; border: 2px solid; border-color: #fff #404040 #404040 #fff; box-shadow: 1px 1px 0 #000; }
.s-retro .tb { background: linear-gradient(90deg,#000080,#1084d0); color: #fff; padding: 2px 4px; display: flex; justify-content: space-between; align-items: center; }
.s-retro .tb b { display: inline-grid; place-items: center; width: 18px; height: 16px; background: #c0c0c0; color: #000; border: 2px solid; border-color: #fff #404040 #404040 #fff; font-size: 14px; line-height: 1; }
.s-retro .bd { padding: 10px; display: grid; gap: 8px; }
.s-retro .pb { height: 18px; border: 2px solid; border-color: #404040 #fff #fff #404040; padding: 2px; display: flex; gap: 2px; }
.s-retro .pb i { width: 10px; background: #000080; }
.s-retro .btns { display: flex; justify-content: flex-end; gap: 8px; }
.s-retro .btns button { font: inherit; background: #c0c0c0; border: 2px solid; border-color: #fff #404040 #404040 #fff; padding: 0 14px; }
.s-retro .btns button:active { border-color: #404040 #fff #fff #404040; }
```

No JavaScript needed.
