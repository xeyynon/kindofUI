# Empty states & onboarding

Components and UX patterns · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#empty

Left: an empty screen that explains what will appear and how to start. Right: a coach mark that highlights one button during a first-time tour.

- **Good for:** First-time screens and zero-results states
- **Watch out:** Long forced tours; let people skip
- **Seen in:** Gmail empty inbox, Duolingo, Notion, Asana onboarding

## Prompt for an AI assistant

Build this UI pattern for my app: Empty states & onboarding.

What it is: Left: an empty screen that explains what will appear and how to start. Right: a coach mark that highlights one button during a first-time tour.
Good for: First-time screens and zero-results states.
Watch out: Long forced tours; let people skip.
Seen in: Gmail empty inbox, Duolingo, Notion, Asana onboarding

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
<div class="stage s-empty">
    <div class="e">
      <svg viewBox="0 0 90 70" aria-hidden="true"><rect x="10" y="20" width="70" height="44" rx="6" fill="#eef1ff" stroke="#3557e0" stroke-width="2"></rect><path d="M10 40 H32 L38 48 H52 L58 40 H80" fill="none" stroke="#3557e0" stroke-width="2"></path><circle cx="68" cy="14" r="8" fill="#ffd23f"></circle></svg>
      <b>No messages yet</b><span>When customers write in, their messages will show up here.</span><button>Connect email</button>
    </div>
    <div class="o">
      <button class="tgt">+ New project</button>
      <div class="tip"><b>Create your first project</b><span style="color:#666;font-size:11px">Projects keep tasks, files and people together.</span><div class="ft"><span class="dots"><i class="on"></i><i></i><i></i></span><button>Next</button></div></div>
    </div>
  </div>
```

### CSS

```css
/* base styles the site gives every demo (scoped to this demo) */
.s-empty, .s-empty *, .s-empty *::before, .s-empty *::after { box-sizing: border-box; }
.s-empty { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-empty button { font: inherit; cursor: pointer; }
.s-empty { display: grid; grid-template-columns: 1fr 1fr; background: #fff; color: #1f2430; font-size: 12px; }
.s-empty .e { display: grid; justify-items: center; align-content: center; text-align: center; gap: 8px; padding: 14px; border-right: 1px solid #eef0f3; }
.s-empty .e svg { width: 90px; height: 70px; }
.s-empty .e b { font-size: 14px; }
.s-empty .e span { color: #777; font-size: 11px; }
.s-empty .e button { border: 0; background: #3557e0; color: #fff; border-radius: 6px; padding: 6px 12px; font-weight: 600; }
.s-empty .o { position: relative; background: #f3f4f7; padding: 12px; }
.s-empty .o .tgt { position: absolute; left: 18px; top: 24px; border: 0; background: #3557e0; color: #fff; border-radius: 6px; padding: 6px 10px; font-size: 11px; box-shadow: 0 0 0 4px rgba(53,87,224,.25),0 0 0 9999px rgba(15,23,42,.35); }
.s-empty .o .tip { position: absolute; left: 14px; right: 14px; top: 72px; background: #fff; border-radius: 10px; padding: 10px; box-shadow: 0 10px 24px rgba(0,0,0,.2); display: grid; gap: 6px; }
.s-empty .o .tip::before { content: ""; position: absolute; top: -6px; left: 26px; width: 12px; height: 12px; background: #fff; transform: rotate(45deg); }
.s-empty .o .tip .ft { display: flex; justify-content: space-between; align-items: center; }
.s-empty .dots { display: flex; gap: 4px; }
.s-empty .dots i { width: 6px; height: 6px; border-radius: 50%; background: #cfd5de; }
.s-empty .dots i.on { background: #3557e0; }
.s-empty .tip button { border: 0; background: #3557e0; color: #fff; border-radius: 5px; padding: 4px 10px; font-size: 11px; }
```

No JavaScript needed.
