# Hamburger menu

Navigation · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#hamburger

Three lines that open a hidden menu, saving space on small screens.

- **Good for:** Secondary links on small screens
- **Watch out:** Hiding main sections on desktop
- **Seen in:** mobile websites, Gmail mobile, many apps

## Prompt for an AI assistant

Build this navigation pattern for my app: Hamburger menu.

What it is: Three lines that open a hidden menu, saving space on small screens.
Good for: Secondary links on small screens.
Watch out: Hiding main sections on desktop.
Seen in: mobile websites, Gmail mobile, many apps

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
<div class="stage s-ham center">
    <div class="phone open" id="ham">
      <div class="top"><button class="hb" aria-label="Menu" aria-expanded="true"><i></i><i></i><i></i></button><b>Readr</b><span style="width:28px"></span></div>
      <div class="cnt wf" style="background:#fff"><div class="ln"></div><div class="ln" style="width:80%"></div><div style="height:60px;background:#e5e7eb;border-radius:6px"></div><div class="ln"></div><div class="ln" style="width:60%"></div></div>
      <div class="drawer"><span>Home</span><span>Saved</span><span>Topics</span><span>Settings</span><span style="opacity:.6">Sign out</span></div>
    </div>
  </div>
```

### CSS

```css
/* base styles the site gives every demo (scoped to this demo) */
.s-ham, .s-ham *, .s-ham *::before, .s-ham *::after { box-sizing: border-box; }
.s-ham { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-ham button { font: inherit; cursor: pointer; }
.center { display: grid; place-items: center; }
.phone { width: 172px; height: 262px; border-radius: 26px; border: 6px solid #1b1d22; background: #fff; position: relative; overflow: hidden; color: #1b1d22; font-size: 11px; }
.wf { background: #f3f4f7; color: #2b3040; }
.ln { height: 6px; border-radius: 3px; background: #d6dbe4; }
.s-ham { background: #e9ecf1; }
.s-ham .top { display: flex; align-items: center; justify-content: space-between; padding: 10px; border-bottom: 1px solid #eee; }
.s-ham .hb { width: 28px; height: 28px; border: 0; background: none; display: grid; gap: 4px; align-content: center; padding: 4px; }
.s-ham .hb i { display: block; height: 2px; background: #1b1d22; border-radius: 2px; transition: .25s; }
.s-ham .phone.open .hb i:nth-child(1) { transform: translateY(6px) rotate(45deg); }
.s-ham .phone.open .hb i:nth-child(2) { opacity: 0; }
.s-ham .phone.open .hb i:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }
.s-ham .drawer { position: absolute; top: 49px; left: 0; bottom: 0; width: 78%; background: #1b1d22; color: #fff; padding: 14px; display: grid; align-content: start; gap: 12px; font-size: 13px; transform: translateX(-100%); transition: transform .3s; }
.s-ham .phone.open .drawer { transform: none; }
.s-ham .cnt { padding: 10px; display: grid; gap: 7px; }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // hamburger
  const ham=$('#ham'),hb=$('.hb',ham);
  hb.addEventListener('click',()=>{const o=ham.classList.toggle('open');hb.setAttribute('aria-expanded',o)});
})();
```
