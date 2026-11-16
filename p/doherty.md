# Doherty threshold

UX laws · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#doherty

People stay engaged when the system responds in under about 400 ms. If it can't, show feedback right away.

- **Good for:** Responding in under 400 ms, or giving instant feedback
- **Watch out:** Long silent waits with no feedback
- **Seen in:** instant search, optimistic UI, skeleton screens

## Prompt for an AI assistant

Review my UI against Doherty threshold.

What it is: People stay engaged when the system responds in under about 400 ms. If it can't, show feedback right away.
Good for: Responding in under 400 ms, or giving instant feedback.
Watch out: Long silent waits with no feedback.
Seen in: instant search, optimistic UI, skeleton screens

For each screen or component I share:
1. Point to the exact places where it breaks this law and say why it matters to the user.
2. Suggest a concrete fix for each one, smallest change first.
3. Apply the fixes in code when I say so, keeping my existing styles.
4. Tell me how to check the result, for example with a quick user test or a measurement.

The kindofui example below shows the law in a small working demo.

## Code

Copy and adapt. The HTML and CSS are scoped to this demo, so they will not touch the page they are pasted into.

### HTML

```html
<div class="stage s-doh"><div class="vs2">
    <div><span class="lb2 b">1.5 s response</span><button class="ld2" data-ms="1500">Load photos</button><div class="out"><span>Click to feel the wait</span></div></div>
    <div><span class="lb2 g">Under 400 ms</span><button class="ld2" data-ms="120">Load photos</button><div class="out"><span>Click to compare</span></div></div>
  </div></div>
```

### CSS

```css
:root { --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-doh, .s-doh *, .s-doh *::before, .s-doh *::after { box-sizing: border-box; }
.s-doh { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-doh button { font: inherit; cursor: pointer; }
.vs2 { display: grid; grid-template-columns: 1fr 1fr; height: 100%; font-size: 11px; color: #1f2430; }
.vs2 > div { padding: 10px 12px; display: grid; gap: 8px; align-content: start; position: relative; min-width: 0; }
.vs2 > div:first-child { background: #fff; border-right: 1px solid #e5e7eb; }
.vs2 > div:last-child { background: #fafafa; }
.vs2 .lb2 { font: 700 10px var(--mono); letter-spacing: .06em; text-transform: uppercase; }
.vs2 .lb2.b { color: #b42318; }
.vs2 .lb2.g { color: #067647; }
.s-doh .ld2 { border: 0; background: #3557e0; color: #fff; border-radius: 6px; padding: 7px; font-weight: 600; }
.s-doh .out { display: grid; grid-template-columns: repeat(3,1fr); gap: 4px; min-height: 60px; align-content: start; }
.s-doh .out i { aspect-ratio: 1; border-radius: 4px; max-width: 100%; }
.s-doh .out span { grid-column: 1/-1; font: 10px var(--mono); color: #666; }
.s-doh .out .sp4 { grid-column: 1/-1; justify-self: center; width: 18px; height: 18px; border-radius: 50%; border: 2px solid #cfd5dd; border-top-color: #3557e0; animation: spin .7s linear infinite; margin-top: 10px; }
@keyframes spin {
  to{transform:rotate(1turn)}
}
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  $$('.s-doh .ld2').forEach(b => b.addEventListener('click', () => { const o = b.nextElementSibling, ms = +b.dataset.ms, t = performance.now(); o.innerHTML = '<span class="sp4"></span>';
    setTimeout(() => { o.innerHTML = Array.from({ length: 6 }, (_, i) => `<i style="background:hsl(${200 + i * 25} 70% 70%)"></i>`).join('') + `<span>Loaded in ${Math.round(performance.now() - t).toLocaleString()} ms</span>`; }, ms); }));
})();
```
