# HCI: Human-Computer Interaction

Process and methods · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#hci

HCI studies how people perceive, think and act when they use computers. It turns "make it nicer" into specific fixes: clear feedback, visible signifiers, helpful constraints and natural mapping.

- **Good for:** Explaining why users get stuck and fixing it with evidence
- **Watch out:** Treating principles as rules without testing with real users
- **Seen in:** Don Norman's "The Design of Everyday Things", Apple HIG and Material guidelines, usability labs and ACM SIGCHI research

## Prompt for an AI assistant

Help me use HCI: Human-Computer Interaction on my project.

What it is: HCI studies how people perceive, think and act when they use computers. It turns "make it nicer" into specific fixes: clear feedback, visible signifiers, helpful constraints and natural mapping.
Good for: Explaining why users get stuck and fixing it with evidence.
Watch out: Treating principles as rules without testing with real users.
Seen in: Don Norman's "The Design of Everyday Things", Apple HIG and Material guidelines, usability labs and ACM SIGCHI research

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
<div class="stage s-hci" data-tabs="">
    <div class="tb">
      <button type="button" class="on" data-tab="fb">Feedback</button>
      <button type="button" data-tab="sg">Signifiers</button>
      <button type="button" data-tab="cn">Constraints</button>
      <button type="button" data-tab="mp">Mapping</button>
    </div>
    <div class="pn" data-panel="fb"><div class="vs2">
      <div><span class="lb2 b">Before</span><button type="button" class="pay" data-hci="silent">Pay ₹499</button><small>Tap it. Nothing changes, so you wonder if it worked and tap again. Double payment.</small></div>
      <div><span class="lb2 g">After</span><button type="button" class="pay" data-hci="pay">Pay ₹499</button><small>Tap it. It shows progress, then a clear result. People always know the system's state.</small></div>
    </div></div>
    <div class="pn" data-panel="sg" hidden=""><div class="vs2">
      <div><span class="lb2 b">Before</span><span class="flat">Download report</span><small>Plain text. Is it a label or a link? Nothing says "tap me".</small></div>
      <div><span class="lb2 g">After</span><button type="button" class="dl" data-hci="dl">⬇ Download report</button><small>Shape, colour, icon and a pointer cursor signal that it is clickable.</small></div>
    </div></div>
    <div class="pn" data-panel="cn" hidden=""><div class="vs2">
      <div><span class="lb2 b">Before</span><input class="in" value="31/02/2025" aria-label="Appointment date"><button type="button" class="pay" data-hci="book">Book</button><small class="err" hidden="">Invalid date. Start again.</small><small>Free typing lets people make mistakes, then scolds them afterwards.</small></div>
      <div><span class="lb2 g">After</span><div class="chips"><button type="button" aria-pressed="false">Tue 11 Nov</button><button type="button" aria-pressed="false">Wed 12 Nov</button><button type="button" disabled="">Thu 13 Nov · full</button></div><small>Only valid options are offered, so the error cannot happen.</small></div>
    </div></div>
    <div class="pn" data-panel="mp" hidden=""><div class="vs2">
      <div><span class="lb2 b">Before</span><div class="bg"><i></i><i></i><i></i><i></i></div><div class="kr"><button type="button" data-k="1" aria-label="Knob 1"></button><button type="button" data-k="3" aria-label="Knob 2"></button><button type="button" data-k="0" aria-label="Knob 3"></button><button type="button" data-k="2" aria-label="Knob 4"></button></div><small>Four knobs in a row, four burners in a square. Trial and error.</small></div>
      <div><span class="lb2 g">After</span><div class="bg"><div><i></i><button type="button" aria-label="Knob front left"></button></div><div><i></i><button type="button" aria-label="Knob front right"></button></div><div><i></i><button type="button" aria-label="Knob back left"></button></div><div><i></i><button type="button" aria-label="Knob back right"></button></div></div><small>Each control sits next to what it controls. No manual needed.</small></div>
    </div></div>
  </div>
```

### CSS

```css
:root { --body: "Figtree",system-ui,sans-serif; --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): Figtree, JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-hci, .s-hci *, .s-hci *::before, .s-hci *::after { box-sizing: border-box; }
.s-hci { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-hci button { font: inherit; cursor: pointer; }
[hidden] { display: none !important; }
.s-hci { background: #fff; color: #1f2430; display: flex; flex-direction: column; font-size: 11px; }
.s-hci .tb { display: flex; gap: 2px; padding: 6px 6px 0; border-bottom: 1px solid #e5e7eb; flex: none; overflow-x: auto; }
.s-hci .tb button { border: 0; background: none; padding: 6px 8px; font: 600 11px var(--body); color: #6b7280; border-bottom: 2px solid transparent; white-space: nowrap; cursor: pointer; }
.s-hci .tb button.on { color: #1f2430; border-bottom-color: #3557e0; }
.s-hci .pn { flex: 1; min-height: 0; }
.s-hci .pn:not([hidden]) { display: grid; }
.s-hci .vs2 { height: auto; }
.s-hci small { color: #666; line-height: 1.35; font-size: 10.5px; }
.s-hci .pay { justify-self: start; border: 0; border-radius: 8px; background: #3557e0; color: #fff; padding: 8px 12px; font: 600 12px var(--body); cursor: pointer; }
.s-hci .pay:disabled { opacity: .85; cursor: default; }
.s-hci .sp { display: inline-block; width: 10px; height: 10px; border: 2px solid #fff; border-top-color: transparent; border-radius: 50%; animation: spin .7s linear infinite; vertical-align: -1px; margin-right: 6px; }
.s-hci .flat { color: #444; font-size: 12px; }
.s-hci .dl { justify-self: start; border: 1px solid #c7d0f5; background: #eef1ff; color: #2a45c7; border-radius: 8px; padding: 7px 10px; font: 600 12px var(--body); cursor: pointer; }
.s-hci .dl:hover { background: #dfe5ff; }
.s-hci .in { width: 100%; border: 1px solid #cfd4dc; border-radius: 6px; padding: 6px 8px; font: 12px var(--mono); color: #1f2430; background: #fff; }
.s-hci .err { color: #dc2626; }
.s-hci .chips { display: grid; gap: 5px; }
.s-hci .chips button { border: 1px solid #cfd4dc; background: #fff; border-radius: 6px; padding: 6px 8px; font: 600 11px var(--body); color: #1f2430; text-align: left; cursor: pointer; }
.s-hci .chips button[aria-pressed="true"] { border-color: #16a34a; background: #e8f7ec; color: #166534; }
.s-hci .chips button:disabled { color: #9aa0aa; background: #f3f4f7; cursor: not-allowed; }
.s-hci .bg { display: grid; grid-template-columns: repeat(2,28px); gap: 8px; justify-content: center; }
.s-hci .bg > div { display: grid; gap: 5px; justify-items: center; }
.s-hci .bg i { width: 28px; height: 28px; border-radius: 50%; background: #d6dae1; transition: background .2s,box-shadow .2s; }
.s-hci .bg i.hot { background: #ef4444; box-shadow: 0 0 8px #f87171; }
.s-hci .kr { display: flex; gap: 4px; justify-content: center; }
.s-hci .kr button,.s-hci .bg button { width: 20px; height: 20px; border-radius: 50%; border: 2px solid #6b7280; background: #fff; cursor: pointer; padding: 0; }
.s-hci .kr button.hot,.s-hci .bg button.hot { background: #6b7280; }
.vs2 { display: grid; grid-template-columns: 1fr 1fr; height: 100%; font-size: 11px; color: #1f2430; }
.vs2 > div { padding: 10px 12px; display: grid; gap: 8px; align-content: start; position: relative; min-width: 0; }
.vs2 > div:first-child { background: #fff; border-right: 1px solid #e5e7eb; }
.vs2 > div:last-child { background: #fafafa; }
.vs2 .lb2 { font: 700 10px var(--mono); letter-spacing: .06em; text-transform: uppercase; }
.vs2 .lb2.b { color: #b42318; }
.vs2 .lb2.g { color: #067647; }
@keyframes spin {
  to{transform:rotate(1turn)}
}
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // generic tabs
  $$('[data-tabs]').forEach(g=>{
    const tabs=$$('[data-tab]',g);
    tabs.forEach(b=>b.addEventListener('click',()=>{
      tabs.forEach(x=>x.classList.toggle('on',x===b));
      $$('[data-panel]',g).forEach(p=>p.hidden=p.dataset.panel!==b.dataset.tab);
    }));
  });

  /* ---------- HCI: before / after ---------- */
  (() => { const st = $('.s-hci'); if (!st) return; const busy = new WeakSet();
    st.addEventListener('click', e => { const t = e.target.closest('button'); if (!t || t.disabled) return;
      const k = t.dataset.hci;
      if (k === 'pay' && !busy.has(t)) { busy.add(t); const o = t.textContent; t.disabled = true; t.innerHTML = '<span class="sp"></span>Paying…';
        setTimeout(() => { t.textContent = '✓ Paid ₹499'; }, 900); setTimeout(() => { t.textContent = o; t.disabled = false; busy.delete(t); }, 2400); }
      else if (k === 'dl' && !busy.has(t)) { busy.add(t); const o = t.textContent; t.textContent = '✓ Saved to Downloads'; setTimeout(() => { t.textContent = o; busy.delete(t); }, 1500); }
      else if (k === 'book') { const er = t.parentElement.querySelector('.err'); er.hidden = false; setTimeout(() => { er.hidden = true; }, 2200); }
      else if (t.closest('.chips')) { const on = t.getAttribute('aria-pressed') !== 'true'; $$('.chips button', t.parentElement).forEach(b => b.setAttribute('aria-pressed', 'false')); t.setAttribute('aria-pressed', on); }
      else if (t.closest('.kr')) { const bg = t.parentElement.previousElementSibling; const b = bg.children[+t.dataset.k]; if (b) { b.classList.toggle('hot'); t.classList.toggle('hot'); } }
      else if (t.closest('.bg')) { t.parentElement.querySelector('i').classList.toggle('hot'); t.classList.toggle('hot'); } });
  })();
})();
```
