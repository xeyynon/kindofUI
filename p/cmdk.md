# Command palette

Navigation · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#cmdk

A search box that runs any action by typing. Fast for power users.

- **Good for:** Power users and apps with many actions
- **Watch out:** Being the only way to reach a feature
- **Seen in:** Linear, Notion, VS Code, Raycast, GitHub

## Prompt for an AI assistant

Build this navigation pattern for my app: Command palette.

What it is: A search box that runs any action by typing. Fast for power users.
Good for: Power users and apps with many actions.
Watch out: Being the only way to reach a feature.
Seen in: Linear, Notion, VS Code, Raycast, GitHub

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
<div class="stage s-cmd">
    <div class="bgui"><div class="ln"></div><div class="ln" style="width:70%"></div><div class="ln" style="width:85%"></div><div class="ln" style="width:50%"></div></div>
    <div class="pal">
      <input id="cmd-input" placeholder="Type a command or search…" aria-label="Command search" autocomplete="off">
      <ul id="cmd-list" tabindex="0" aria-label="Commands"></ul>
    </div>
  </div>
```

### CSS

```css
:root { --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-cmd, .s-cmd *, .s-cmd *::before, .s-cmd *::after { box-sizing: border-box; }
.s-cmd { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-cmd button { font: inherit; cursor: pointer; }
.ln { height: 6px; border-radius: 3px; background: #d6dbe4; }
.s-cmd { background: #1f2430; display: grid; place-items: center; padding: 14px; }
.s-cmd .bgui { position: absolute; inset: 0; padding: 14px; display: grid; gap: 8px; align-content: start; opacity: .35; }
.s-cmd .bgui .ln { background: #4a5266; }
.s-cmd .pal { position: relative; width: min(100%,330px); background: #fff; border-radius: 12px; box-shadow: 0 20px 50px rgba(0,0,0,.5); overflow: hidden; color: #1b1d22; font-size: 13px; }
.s-cmd input { width: 100%; border: 0; border-bottom: 1px solid #eee; padding: 12px 14px; font: inherit; outline: none; }
.s-cmd ul { list-style: none; margin: 0; padding: 6px; max-height: 170px; overflow: auto; }
.s-cmd li { display: flex; justify-content: space-between; padding: 7px 8px; border-radius: 6px; }
.s-cmd li.on { background: #eef1ff; }
.s-cmd kbd { font: 11px var(--mono); color: #777; background: #f2f3f5; border-radius: 4px; padding: 1px 5px; }
.s-cmd .empty { padding: 10px 14px; color: #888; }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // command palette
  const cmds=[['Create issue','C'],['Go to inbox','G I'],['Search projects','/'],['Assign to me','I'],['Change theme','⌘ T'],['Invite teammates',''],['Open settings','⌘ ,'],['Log out','']];
  const ci=$('#cmd-input'),cl=$('#cmd-list');
  function renderCmd(){
    const q=ci.value.trim().toLowerCase();const f=cmds.filter(c=>c[0].toLowerCase().includes(q));
    cl.innerHTML=f.length?f.map((c,i)=>`<li class="${i===0?'on':''}"><span>${c[0]}</span>${c[1]?`<kbd>${c[1]}</kbd>`:''}</li>`).join(''):'<li class="empty">No commands match</li>';
  }
  ci.addEventListener('input',renderCmd);renderCmd();
})();
```
