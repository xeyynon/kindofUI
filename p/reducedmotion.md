# Reduced motion

Accessibility and motion · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#reducedmotion

Some people get dizzy or sick from movement. Respect the system "reduce motion" setting (the prefers-reduced-motion media query) by stopping or softening animation.

- **Good for:** Honouring the system reduce-motion setting
- **Watch out:** Autoplay, parallax and big motion with no off switch
- **Seen in:** iOS Reduce Motion, macOS, Android "Remove animations"

## Prompt for an AI assistant

Make my UI follow this accessibility and motion practice: Reduced motion.

What it is: Some people get dizzy or sick from movement. Respect the system "reduce motion" setting (the prefers-reduced-motion media query) by stopping or softening animation.
Good for: Honouring the system reduce-motion setting.
Watch out: Autoplay, parallax and big motion with no off switch.
Seen in: iOS Reduce Motion, macOS, Android "Remove animations"

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
<div class="stage s-rm" id="rm">
    <div class="hero2"><span class="bl1"></span><span class="bl2"></span><b>Welcome back</b></div>
    <div class="tk2"><span>Sale ends Sunday · Free delivery over ₹999 · Sale ends Sunday · Free delivery over ₹999 ·&nbsp;</span></div>
    <label class="tg4" for="rm-c"><input type="checkbox" id="rm-c"> Reduce motion</label>
    <small class="cap" id="rm-cap">Full motion: floating shapes and a scrolling ticker.</small>
  </div>
```

### CSS

```css
:root { --display: "Bricolage Grotesque",system-ui,sans-serif; --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): Bricolage Grotesque, JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-rm, .s-rm *, .s-rm *::before, .s-rm *::after { box-sizing: border-box; }
.s-rm { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-rm button { font: inherit; cursor: pointer; }
.s-rm { background: #fff; color: #1f2430; display: grid; grid-template-rows: 1fr auto auto auto; font-size: 12px; }
.s-rm .hero2 { position: relative; overflow: hidden; background: #eef1ff; display: grid; place-items: center; }
.s-rm .hero2 b { font: 700 20px var(--display); position: relative; }
.s-rm .bl1,.s-rm .bl2 { position: absolute; width: 70px; height: 70px; border-radius: 50%; background: #c7d2fe; animation: float 3s ease-in-out infinite; }
.s-rm .bl1 { left: 18%; top: 16%; }
.s-rm .bl2 { right: 16%; bottom: 10%; background: #fbcfe8; animation-delay: -1.5s; }
.s-rm .tk2 { overflow: hidden; white-space: nowrap; background: #1f2430; color: #fff; padding: 6px 0; font: 11px var(--mono); }
.s-rm .tk2 span { display: inline-block; animation: mq 10s linear infinite; }
.s-rm.red .bl1,.s-rm.red .bl2,.s-rm.red .tk2 span { animation: none; }
.s-rm.red .tk2 { text-align: center; }
.s-rm .tg4 { display: flex; gap: 6px; align-items: center; padding: 10px 14px 2px; font-weight: 600; }
.s-rm .cap { padding: 0 14px 12px; color: #666; }
@keyframes mq {
  to{transform:translateX(-50%)}
}
@keyframes float {
  50%{transform:translate(20px,-18px) scale(1.15)}
}
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  const on = (sel, ev, fn) => { const el = $(sel); if (el) el.addEventListener(ev, fn); return el; };

  on('#rm-c', 'change', e => { $('#rm').classList.toggle('red', e.target.checked); $('#rm-cap').textContent = e.target.checked ? 'Reduced: shapes stay still and the ticker stops.' : 'Full motion: floating shapes and a scrolling ticker.'; });
})();
```
