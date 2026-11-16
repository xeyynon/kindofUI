# Design systems

Process and methods · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#designsystem

A shared library of tokens (colors, type, spacing) and components so every screen looks and behaves the same.

- **Good for:** Teams and products with many screens
- **Watch out:** Tiny one-off sites where it is overkill
- **Seen in:** Material (Google), Apple HIG, Carbon (IBM), Ant Design, Atlassian

## Prompt for an AI assistant

Help me use Design systems on my project.

What it is: A shared library of tokens (colors, type, spacing) and components so every screen looks and behaves the same.
Good for: Teams and products with many screens.
Watch out: Tiny one-off sites where it is overkill.
Seen in: Material (Google), Apple HIG, Carbon (IBM), Ant Design, Atlassian

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
<div class="stage s-ds">
    <div><div class="lbl">Color tokens</div><div class="sw"><div style="background:#3557e0">primary</div><div style="background:#1f2430">ink</div><div style="background:#16a34a">success</div><div style="background:#f59e0b">warning</div><div style="background:#dc2626">danger</div></div></div>
    <div><div class="lbl">Type scale</div><div class="type"><span style="font:800 26px var(--display)">H1</span><span style="font:700 20px var(--display)">H2</span><span style="font:600 16px var(--body)">H3</span><span>Body 14</span><span style="font-size:11px;color:#777">Caption 11</span></div></div>
    <div><div class="lbl">Buttons</div><div class="btns"><button class="p">Primary</button><button class="s">Secondary</button><button class="gh">Ghost</button><button class="dn">Danger</button></div></div>
  </div>
```

### CSS

```css
:root { --display: "Bricolage Grotesque",system-ui,sans-serif; --body: "Figtree",system-ui,sans-serif; --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): Bricolage Grotesque, Figtree, JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-ds, .s-ds *, .s-ds *::before, .s-ds *::after { box-sizing: border-box; }
.s-ds { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-ds button { font: inherit; cursor: pointer; }
.s-ds { background: #fff; color: #1f2430; padding: 14px 16px; display: grid; gap: 12px; align-content: start; font-size: 12px; }
.s-ds .lbl { font: 10px var(--mono); color: #888; text-transform: uppercase; letter-spacing: .08em; margin-bottom: 4px; }
.s-ds .sw { display: flex; gap: 6px; }
.s-ds .sw div { flex: 1; height: 34px; border-radius: 6px; display: flex; align-items: flex-end; padding: 3px 5px; font: 9px var(--mono); color: #fff; }
.s-ds .type { display: flex; align-items: baseline; gap: 12px; flex-wrap: wrap; }
.s-ds .btns { display: flex; gap: 6px; flex-wrap: wrap; }
.s-ds .btns button { border-radius: 6px; padding: 6px 12px; font-size: 12px; font-weight: 600; border: 1px solid #3557e0; }
.s-ds .p { background: #3557e0; color: #fff; }
.s-ds .s { background: #fff; color: #3557e0; }
.s-ds .gh { background: none; border-color: transparent!important; color: #3557e0; }
.s-ds .dn { background: #dc2626; border-color: #dc2626!important; color: #fff; }
```

No JavaScript needed.
