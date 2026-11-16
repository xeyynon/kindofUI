# Tesler's law

UX laws · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#tesler

Every task has some complexity that can't be removed. The question is who handles it, and it should be the system rather than the user.

- **Good for:** Moving complexity into defaults and automation
- **Watch out:** Taking control away from experts
- **Seen in:** address autocomplete, smart defaults, auto-filled PIN codes

## Prompt for an AI assistant

Review my UI against Tesler's law.

What it is: Every task has some complexity that can't be removed. The question is who handles it, and it should be the system rather than the user.
Good for: Moving complexity into defaults and automation.
Watch out: Taking control away from experts.
Seen in: address autocomplete, smart defaults, auto-filled PIN codes

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
<div class="stage s-tesler"><div class="vs2">
    <div><span class="lb2 b">User does the work</span><span class="f">Flat / house no.</span><span class="f">Street</span><span class="f">Area</span><span class="f">City</span><span class="f">State ▾</span><span class="f">PIN code</span></div>
    <div><span class="lb2 g">System does the work</span><span class="f on">14 MG Road, Pu|</span><div class="sgl"><span class="sg"><svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 1.5a4.5 4.5 0 0 0-4.5 4.5c0 3.2 4.5 8.5 4.5 8.5s4.5-5.3 4.5-8.5A4.5 4.5 0 0 0 8 1.5Zm0 6.2a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4Z"></path></svg><span><b>14 MG Road</b>, Camp, Pune 411001</span></span><span class="sg"><svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 1.5a4.5 4.5 0 0 0-4.5 4.5c0 3.2 4.5 8.5 4.5 8.5s4.5-5.3 4.5-8.5A4.5 4.5 0 0 0 8 1.5Zm0 6.2a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4Z"></path></svg><span><b>14 MG Road</b>, Bengaluru 560001</span></span></div><small>Pick one and city, state and PIN fill in for you.</small></div>
  </div></div>
```

### CSS

```css
:root { --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-tesler, .s-tesler *, .s-tesler *::before, .s-tesler *::after { box-sizing: border-box; }
.s-tesler { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-tesler button { font: inherit; cursor: pointer; }
.vs2 { display: grid; grid-template-columns: 1fr 1fr; height: 100%; font-size: 11px; color: #1f2430; }
.vs2 > div { padding: 10px 12px; display: grid; gap: 8px; align-content: start; position: relative; min-width: 0; }
.vs2 > div:first-child { background: #fff; border-right: 1px solid #e5e7eb; }
.vs2 > div:last-child { background: #fafafa; }
.vs2 .lb2 { font: 700 10px var(--mono); letter-spacing: .06em; text-transform: uppercase; }
.vs2 .lb2.b { color: #b42318; }
.vs2 .lb2.g { color: #067647; }
.s-tesler .f { background: #fff; border: 1px solid #e3e6ec; border-radius: 5px; padding: 5px 7px; color: #999; }
.s-tesler .f.on { border-color: #1a73e8; box-shadow: 0 0 0 3px rgba(26,115,232,.15); color: #1f2430; }
.s-tesler .sgl { background: #fff; border: 1px solid #dfe1e5; border-radius: 6px; box-shadow: 0 2px 6px rgba(60,64,67,.15); overflow: hidden; }
.s-tesler .sg { display: flex; gap: 7px; align-items: flex-start; padding: 7px 8px; color: #3c4043; line-height: 1.3; }
.s-tesler .sg + .sg { border-top: 1px solid #edeff2; }
.s-tesler .sg:hover { background: #f1f3f4; }
.s-tesler .sg svg { width: 12px; height: 12px; flex: none; margin-top: 1px; color: #80868b; }
.s-tesler .sg b { color: #1f2430; }
.s-tesler small { color: #666; }
```

No JavaScript needed.
