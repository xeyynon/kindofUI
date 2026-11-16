# Atomic design

Process and methods · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#atomic

Build UIs from the smallest parts upward: atoms (a button) make molecules (a search field), which make organisms (a header), then templates and real pages.

- **Good for:** Building and naming component libraries
- **Watch out:** Over-splitting simple components
- **Seen in:** Brad Frost's method, used by most component libraries and Figma kits

## Prompt for an AI assistant

Help me use Atomic design on my project.

What it is: Build UIs from the smallest parts upward: atoms (a button) make molecules (a search field), which make organisms (a header), then templates and real pages.
Good for: Building and naming component libraries.
Watch out: Over-splitting simple components.
Seen in: Brad Frost's method, used by most component libraries and Figma kits

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
<div class="stage s-atom">
    <figure><div class="fr"><span class="btn">Go</span></div><figcaption>Atom</figcaption></figure><span class="arr">→</span>
    <figure><div class="fr" style="display:flex;gap:3px"><span class="inp"></span><span class="btn">Go</span></div><figcaption>Molecule</figcaption></figure><span class="arr">→</span>
    <figure><div class="fr" style="display:flex;gap:6px;align-items:center;width:110px"><b style="font-size:9px">Logo</b><span class="inp" style="width:40px"></span><span class="btn">Go</span></div><figcaption>Organism</figcaption></figure><span class="arr">→</span>
    <figure><div class="fr" style="width:62px;height:76px"><div style="height:10px;background:#c7d2fe;border-radius:2px"></div><div style="height:30px;border:1px dashed #cbd5e1"></div><div style="height:18px;border:1px dashed #cbd5e1"></div></div><figcaption>Template</figcaption></figure><span class="arr">→</span>
    <figure><div class="fr" style="width:62px;height:76px"><div style="height:10px;background:#3557e0;border-radius:2px"></div><div style="height:30px;background:linear-gradient(135deg,#fbbf24,#f97316);border-radius:2px"></div><div class="ln" style="height:4px"></div><div class="ln" style="height:4px;width:70%"></div></div><figcaption>Page</figcaption></figure>
  </div>
```

### CSS

```css
:root { --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-atom, .s-atom *, .s-atom *::before, .s-atom *::after { box-sizing: border-box; }
.s-atom { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-atom button { font: inherit; cursor: pointer; }
.ln { height: 6px; border-radius: 3px; background: #d6dbe4; }
.s-atom { background: #f3f4f7; display: flex; gap: 6px; align-items: center; justify-content: center; padding: 12px; color: #2b3040; overflow-x: auto; }
.s-atom figure { margin: 0; display: grid; gap: 8px; justify-items: center; flex: none; }
.s-atom figcaption { font: 10px var(--mono); color: #6b7280; text-align: center; }
.s-atom .arr { color: #9ca3af; font-size: 14px; flex: none; }
.s-atom .fr { background: #fff; border: 1px solid #dfe3ea; border-radius: 6px; padding: 6px; display: grid; gap: 4px; }
.s-atom .btn { background: #3557e0; color: #fff; border-radius: 4px; font-size: 9px; padding: 3px 7px; }
.s-atom .inp { border: 1px solid #cfd5dd; border-radius: 4px; height: 16px; width: 46px; background: #fff; }
```

No JavaScript needed.
