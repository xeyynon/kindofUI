# User persona

Process and methods · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#persona

A short profile of a typical user, built from research, with goals, frustrations and context. It keeps the team designing for real people.

- **Good for:** Keeping the team focused on real needs
- **Watch out:** Made-up personas not based on research
- **Seen in:** product teams at most companies

## Prompt for an AI assistant

Help me use User persona on my project.

What it is: A short profile of a typical user, built from research, with goals, frustrations and context. It keeps the team designing for real people.
Good for: Keeping the team focused on real needs.
Watch out: Made-up personas not based on research.
Seen in: product teams at most companies

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
<div class="stage s-pers">
    <div class="hd"><i>RK</i><span><b>Riya Kapoor, 29</b><small>Product manager · Bengaluru</small></span><em>"I plan my week on the metro. If it takes more than two taps, I won't use it."</em></div>
    <div class="gr3">
      <div><b>Goals</b><ul><li>See all deadlines in one place</li><li>Share status with her lead fast</li></ul></div>
      <div><b>Frustrations</b><ul><li>Too many apps for one task</li><li>Slow, cluttered mobile screens</li></ul></div>
      <div><b>Devices</b><span>Android phone 70% · Laptop 30%</span></div>
      <div><b>Tech comfort</b><span class="mt2"><i></i></span></div>
    </div>
  </div>
```

### CSS

```css
:root { --body: "Figtree",system-ui,sans-serif; }
/* fonts used (all on Google Fonts): Figtree */
/* base styles the site gives every demo (scoped to this demo) */
.s-pers, .s-pers *, .s-pers *::before, .s-pers *::after { box-sizing: border-box; }
.s-pers { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-pers button { font: inherit; cursor: pointer; }
.s-pers { background: #fff; color: #1f2430; padding: 14px; display: grid; gap: 10px; align-content: start; font-size: 11px; }
.s-pers .hd { display: grid; grid-template-columns: auto 1fr; gap: 6px 10px; align-items: center; }
.s-pers .hd i { width: 42px; height: 42px; border-radius: 50%; background: linear-gradient(135deg,#f59e0b,#ef4444); color: #fff; font: 700 13px var(--body); font-style: normal; display: grid; place-items: center; }
.s-pers .hd span { display: grid; }
.s-pers .hd b { font-size: 14px; }
.s-pers small { color: #777; }
.s-pers em { grid-column: 1/-1; font-style: italic; color: #444; font-size: 12px; line-height: 1.45; }
.s-pers .gr3 { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
.s-pers .gr3 > div { display: grid; gap: 3px; align-content: start; }
.s-pers .gr3 b { font-size: 10px; text-transform: uppercase; letter-spacing: .08em; color: #888; }
.s-pers ul { margin: 0; padding-left: 14px; display: grid; gap: 2px; }
.s-pers .mt2 { height: 6px; background: #eef0f3; border-radius: 3px; display: block; }
.s-pers .mt2 i { display: block; height: 100%; width: 80%; background: #3557e0; border-radius: 3px; }
```

No JavaScript needed.
