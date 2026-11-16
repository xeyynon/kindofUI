# Customer journey map

Process and methods · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#journey

The stages a person goes through, what they do and feel at each one, where it hurts, and ideas to fix it.

- **Good for:** Finding pain points across the whole experience
- **Watch out:** Mapping without talking to users
- **Seen in:** service design at banks, airlines and SaaS teams

## Prompt for an AI assistant

Help me use Customer journey map on my project.

What it is: The stages a person goes through, what they do and feel at each one, where it hurts, and ideas to fix it.
Good for: Finding pain points across the whole experience.
Watch out: Mapping without talking to users.
Seen in: service design at banks, airlines and SaaS teams

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
<div class="stage s-jm"><div class="g5">
    <span class="rl">Stage</span><b>Discover</b><b>Sign up</b><b>First use</b><b>Pay</b><b>Renew</b>
    <span class="rl">Doing</span><span>Sees an ad</span><span>Fills 9 fields</span><span>Imports tasks</span><span>Enters card</span><span>Gets reminder</span>
    <span class="rl">Feeling</span><div class="cvw"><svg viewBox="0 0 500 60" preserveAspectRatio="none" aria-hidden="true"><polyline points="50,20 150,48 250,12 350,40 450,14" fill="none" stroke="#3557e0" stroke-width="2" vector-effect="non-scaling-stroke"></polyline></svg><span class="dt2" style="left:10%;top:33%">Curious</span><span class="dt2" style="left:30%;top:80%">Annoyed</span><span class="dt2" style="left:50%;top:20%">Delighted</span><span class="dt2" style="left:70%;top:67%">Worried</span><span class="dt2" style="left:90%;top:23%">Happy</span></div>
    <span class="rl">Pain</span><span></span><span class="pn">Form too long</span><span></span><span class="pn">Surprise fee</span><span></span>
    <span class="rl">Idea</span><span></span><span class="id">Sign up with phone</span><span></span><span class="id">Show price early</span><span></span>
  </div></div>
```

### CSS

```css
:root { --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-jm, .s-jm *, .s-jm *::before, .s-jm *::after { box-sizing: border-box; }
.s-jm { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-jm button { font: inherit; cursor: pointer; }
.s-jm { background: #fff; color: #1f2430; padding: 12px; font-size: 10px; overflow: auto; }
.s-jm .g5 { display: grid; grid-template-columns: 46px repeat(5,minmax(54px,1fr)); gap: 5px; align-items: center; min-width: 330px; }
.s-jm .g5 > b { background: #1f2430; color: #fff; border-radius: 5px; padding: 5px 2px; text-align: center; font-size: 10px; }
.s-jm .rl { font: 700 9px var(--mono); text-transform: uppercase; color: #888; }
.s-jm .g5 > span:not(.rl) { text-align: center; line-height: 1.3; }
.s-jm .cvw { grid-column: 2/-1; position: relative; height: 70px; background: linear-gradient(#f0fdf4,#fff 50%,#fef2f2); border-radius: 6px; }
.s-jm .cvw svg { position: absolute; inset: 0; width: 100%; height: 100%; }
.s-jm .dt2 { position: absolute; transform: translate(-50%,-50%); background: #fff; border: 2px solid #3557e0; border-radius: 999px; padding: 1px 6px; font-size: 9px; white-space: nowrap; }
.s-jm .pn { background: #fef2f2; color: #991b1b; border-radius: 5px; padding: 4px; }
.s-jm .id { background: #eff6ff; color: #1e40af; border-radius: 5px; padding: 4px; }
```

No JavaScript needed.
