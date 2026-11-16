# Wireframe vs mockup vs prototype

Process and methods · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#fidelity

Three levels of detail. Wireframes test structure, mockups show the final look, and prototypes let people click through before anything is built.

- **Good for:** Choosing the right detail for each stage
- **Watch out:** Polishing visuals before the flow works
- **Seen in:** Figma, Balsamiq, design handoffs

## Prompt for an AI assistant

Help me use Wireframe vs mockup vs prototype on my project.

What it is: Three levels of detail. Wireframes test structure, mockups show the final look, and prototypes let people click through before anything is built.
Good for: Choosing the right detail for each stage.
Watch out: Polishing visuals before the flow works.
Seen in: Figma, Balsamiq, design handoffs

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
<div class="stage s-fid">
    <figure><div class="fr wfm"><i class="b1"></i><i class="l1"></i><i class="l2"></i><i class="bt"></i></div><figcaption><b>Wireframe</b>Structure only</figcaption></figure>
    <figure><div class="fr mk"><i class="b2"></i><b>Goa villa</b><span>₹8,400 / night</span><i class="bt">Book</i></div><figcaption><b>Mockup</b>Final look, static</figcaption></figure>
    <figure><div class="fr pt2" id="fid-p"><div class="v1"><i class="b2"></i><b>Goa villa</b><span>₹8,400 / night</span><button id="fid-b">Book</button></div><div class="v2" hidden=""><b>Booked ✓</b><span>Fri 14 – Sun 16 Nov</span><button id="fid-x">Back</button></div></div><figcaption><b>Prototype</b>Clickable: try Book</figcaption></figure>
  </div>
```

### CSS

```css
/* base styles the site gives every demo (scoped to this demo) */
.s-fid, .s-fid *, .s-fid *::before, .s-fid *::after { box-sizing: border-box; }
.s-fid { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-fid button { font: inherit; cursor: pointer; }
[hidden] { display: none !important; }
.s-fid { background: #f3f4f7; color: #1f2430; display: grid; grid-template-columns: repeat(3,1fr); gap: 8px; padding: 14px; align-content: center; font-size: 10px; }
.s-fid figure { margin: 0; display: grid; gap: 8px; justify-items: center; text-align: center; min-width: 0; }
.s-fid figcaption { display: grid; color: #666; }
.s-fid figcaption b { color: #1f2430; font-size: 11px; }
.s-fid .fr { width: 100%; max-width: 110px; height: 160px; border-radius: 10px; padding: 8px; display: grid; gap: 5px; align-content: start; text-align: left; }
.s-fid .wfm { background: #fff; border: 1.5px dashed #9aa3b2; }
.s-fid .wfm .b1 { height: 50px; background: repeating-linear-gradient(45deg,#e5e7eb 0 4px,#f3f4f6 4px 8px); border: 1px solid #cbd5e1; }
.s-fid .wfm .l1 { height: 6px; background: #d6dbe4; border-radius: 3px; }
.s-fid .wfm .l2 { height: 6px; width: 60%; background: #d6dbe4; border-radius: 3px; }
.s-fid .wfm .bt { height: 18px; border: 1.5px solid #9aa3b2; border-radius: 4px; margin-top: 6px; }
.s-fid .mk,.s-fid .pt2 { background: #fff; box-shadow: 0 4px 12px rgba(0,0,0,.08); }
.s-fid .b2 { display: block; height: 50px; border-radius: 6px; background: linear-gradient(135deg,#fbbf24,#f97316); }
.s-fid .mk b,.s-fid .pt2 b { font-size: 12px; }
.s-fid .mk span,.s-fid .pt2 span { color: #666; }
.s-fid .mk .bt { font-style: normal; background: #3557e0; color: #fff; border-radius: 5px; padding: 4px; text-align: center; margin-top: 4px; }
.s-fid .pt2 { outline: 2px solid #3557e0; outline-offset: 2px; }
.s-fid .pt2 .v1,.s-fid .pt2 .v2 { display: grid; gap: 5px; }
.s-fid .pt2 button { border: 0; background: #3557e0; color: #fff; border-radius: 5px; padding: 5px; margin-top: 4px; font-size: 10px; font-weight: 600; }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  const on = (sel, ev, fn) => { const el = $(sel); if (el) el.addEventListener(ev, fn); return el; };

  on('#fid-b', 'click', () => { $('#fid-p .v1').hidden = true; $('#fid-p .v2').hidden = false; });

  on('#fid-x', 'click', () => { $('#fid-p .v2').hidden = true; $('#fid-p .v1').hidden = false; });
})();
```
