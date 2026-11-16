# Design tokens

Process and methods · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#tokens

Named values for color, radius, type and spacing that components read from.

- **Good for:** Theming, dark mode and multi-brand systems
- **Watch out:** Hard-coding colors and sizes in components
- **Seen in:** Material 3, Salesforce Lightning, Figma Variables

## Prompt for an AI assistant

Help me use Design tokens on my project.

What it is: Named values for color, radius, type and spacing that components read from.
Good for: Theming, dark mode and multi-brand systems.
Watch out: Hard-coding colors and sizes in components.
Seen in: Material 3, Salesforce Lightning, Figma Variables

Steps:
1. Ask me the few questions you need about my product and users first.
2. Walk me through the method step by step for my case, not in general.
3. Produce the outputs the method needs (for example notes, a table or a checklist) in plain text I can share.
4. Tell me what to do next and how to know it worked.

The kindofui example below shows the method in a small working demo.

## Code

Copy and adapt. The HTML and CSS are scoped to this demo, so they will not touch the page they are pasted into.

### HTML

```html
<div class="stage s-tok" id="tok">
    <pre id="tok-j"></pre>
    <div class="pv"><div class="bs" role="group" aria-label="Brand"><button class="on" data-b="a">Brand A</button><button data-b="b">Brand B</button></div><div class="cd2"><b>Upgrade to Pro</b><span>Unlimited projects and priority support.</span><button>Upgrade</button></div></div>
  </div>
```

### CSS

```css
:root { --display: "Bricolage Grotesque",system-ui,sans-serif; --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): Bricolage Grotesque, JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-tok, .s-tok *, .s-tok *::before, .s-tok *::after { box-sizing: border-box; }
.s-tok { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-tok button { font: inherit; cursor: pointer; }
.s-tok { background: #f3f4f7; color: #1f2430; display: grid; grid-template-columns: 1fr 1fr; gap: 10px; padding: 12px; font-size: 11px; --t-p: #3557e0; --t-s: #fff; --t-x: #1f2430; --t-r: 8px; --t-f: var(--display); }
.s-tok pre { margin: 0; background: #1f2430; color: #d1d5db; border-radius: 8px; padding: 10px; font: 10px/1.5 var(--mono); overflow: auto; white-space: pre-wrap; word-break: break-all; }
.s-tok .pv { display: grid; gap: 10px; align-content: center; min-width: 0; }
.s-tok .bs { display: flex; gap: 4px; }
.s-tok .bs button { flex: 1; border: 1px solid #d6dae1; background: #fff; border-radius: 6px; padding: 4px; font-size: 10px; color: #1f2430; }
.s-tok .bs button.on { background: #1f2430; color: #fff; }
.s-tok .cd2 { background: var(--t-s); color: var(--t-x); border-radius: var(--t-r); padding: 12px; display: grid; gap: 6px; box-shadow: 0 4px 12px rgba(0,0,0,.08); transition: all .3s; }
.s-tok .cd2 b { font: 700 15px/1.1 var(--t-f); }
.s-tok .cd2 span { opacity: .75; }
.s-tok .cd2 button { border: 0; background: var(--t-p); color: #fff; border-radius: var(--t-r); padding: 7px; font-weight: 600; }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  (() => { const T = { a: { 'color.primary': '#3557e0', 'color.surface': '#ffffff', 'color.text': '#1f2430', 'radius.md': '8px', 'font.heading': 'Bricolage Grotesque' }, b: { 'color.primary': '#e8590c', 'color.surface': '#fff8f1', 'color.text': '#3b1d0c', 'radius.md': '20px', 'font.heading': 'DM Serif Display' } };
    const st = $('#tok'), pre = $('#tok-j'); if (!st) return;
    const ap = k => { const t = T[k]; st.style.setProperty('--t-p', t['color.primary']); st.style.setProperty('--t-s', t['color.surface']); st.style.setProperty('--t-x', t['color.text']); st.style.setProperty('--t-r', t['radius.md']); st.style.setProperty('--t-f', `"${t['font.heading']}",serif`);
      pre.textContent = JSON.stringify(t, null, 2); $$('.s-tok .bs button').forEach(b => b.classList.toggle('on', b.dataset.b === k)); };
    $$('.s-tok .bs button').forEach(b => b.addEventListener('click', () => ap(b.dataset.b))); ap('a');
  })();
})();
```
