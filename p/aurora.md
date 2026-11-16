# Aurora / mesh gradient

Visual styles · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#aurora

Large, heavily blurred color blobs that slowly drift behind the content, like northern lights.

- **Good for:** Landing page heroes and launch moments
- **Watch out:** Behind dense text; also respect reduced motion
- **Seen in:** Stripe, Vercel, Linear, Arc browser

## Prompt for an AI assistant

Design this interface in the Aurora / mesh gradient visual style.

What it is: Large, heavily blurred color blobs that slowly drift behind the content, like northern lights.
Good for: Landing page heroes and launch moments.
Watch out: Behind dense text; also respect reduced motion.
Seen in: Stripe, Vercel, Linear, Arc browser

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
<div class="stage s-aur">
    <span class="blob b1"></span><span class="blob b2"></span><span class="blob b3"></span>
    <div class="in"><h4 role="none">Ship faster.</h4><p>Deploy from git in seconds, on every push.</p><button>Get started</button></div>
  </div>
```

### CSS

```css
:root { --display: "Bricolage Grotesque",system-ui,sans-serif; }
/* fonts used (all on Google Fonts): Bricolage Grotesque */
/* base styles the site gives every demo (scoped to this demo) */
.s-aur, .s-aur *, .s-aur *::before, .s-aur *::after { box-sizing: border-box; }
.s-aur { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-aur button { font: inherit; cursor: pointer; }
.s-aur { background: #070b1a; color: #fff; display: grid; place-items: center; text-align: center; }
.s-aur .blob { position: absolute; width: 220px; height: 220px; border-radius: 50%; filter: blur(50px); opacity: .75; animation: drift 12s ease-in-out infinite alternate; }
.s-aur .b1 { background: #00d4ff; left: -40px; top: -60px; }
.s-aur .b2 { background: #a855f7; right: -40px; top: 20px; animation-delay: -4s; }
.s-aur .b3 { background: #22c55e; left: 30%; bottom: -120px; animation-delay: -8s; }
.s-aur .in { position: relative; display: grid; gap: 12px; justify-items: center; padding: 0 20px; }
.s-aur h4 { font: 800 32px/1 var(--display); margin: 0; letter-spacing: -.02em; }
.s-aur p { margin: 0; font-size: 13px; opacity: .8; }
.s-aur button { border: 0; background: #fff; color: #070b1a; padding: 9px 18px; border-radius: 999px; font-weight: 700; }
@keyframes drift {
  to{transform:translate(40px,30px) scale(1.15)}
}
```

No JavaScript needed.
