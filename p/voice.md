# Voice & multimodal input

AI patterns · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#voice

A mic button with a live waveform and transcript, so people can see they're being heard. This demo simulates speech; it doesn't use your microphone.

- **Good for:** Hands-busy moments: driving, cooking, accessibility
- **Watch out:** Noisy places or private information
- **Seen in:** Siri, Google Assistant, ChatGPT voice

## Prompt for an AI assistant

Build this AI interface pattern for my app: Voice & multimodal input.

What it is: A mic button with a live waveform and transcript, so people can see they're being heard. This demo simulates speech; it doesn't use your microphone.
Good for: Hands-busy moments: driving, cooking, accessibility.
Watch out: Noisy places or private information.
Seen in: Siri, Google Assistant, ChatGPT voice

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
<div class="stage s-voice">
    <div class="tr2" id="vc-t">"Remind me to call the bank tomorrow at 10."</div>
    <div class="wave" id="vc-w"></div>
    <button class="mic" id="vc-b" aria-pressed="false" aria-label="Start listening"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3"></rect><path d="M5 11a7 7 0 0 0 14 0M12 18v3"></path></svg></button>
    <small id="vc-s">Tap the mic to see a simulated voice request</small>
  </div>
```

### CSS

```css
:root { --body: "Figtree",system-ui,sans-serif; }
/* fonts used (all on Google Fonts): Figtree */
/* base styles the site gives every demo (scoped to this demo) */
.s-voice, .s-voice *, .s-voice *::before, .s-voice *::after { box-sizing: border-box; }
.s-voice { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-voice button { font: inherit; cursor: pointer; }
.s-voice { background: linear-gradient(#0f172a,#1e1b4b); color: #e2e8f0; display: grid; justify-items: center; align-content: center; gap: 14px; padding: 18px; text-align: center; font-size: 13px; }
.s-voice .tr2 { min-height: 42px; font: 500 15px/1.4 var(--body); max-width: 30ch; }
.s-voice .wave { display: flex; gap: 3px; align-items: center; height: 40px; }
.s-voice .wave i { width: 4px; height: 6px; border-radius: 2px; background: #818cf8; }
.s-voice .wave.on i { animation: wv .9s ease-in-out infinite; }
.s-voice .mic { width: 60px; height: 60px; border-radius: 50%; border: 0; background: #fff; color: #1e1b4b; display: grid; place-items: center; position: relative; }
.s-voice .mic[aria-pressed="true"] { background: #ef4444; color: #fff; }
.s-voice .mic[aria-pressed="true"]::before { content: ""; position: absolute; inset: -8px; border-radius: 50%; border: 2px solid rgba(239,68,68,.5); animation: pulse 1.2s ease-out infinite; }
.s-voice small { color: #94a3b8; }
@keyframes wv {
  50%{height:36px}
}
@keyframes pulse {
  to{transform:scale(1.4);opacity:0}
}
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  (() => { const b = $('#vc-b'), w = $('#vc-w'), t = $('#vc-t'), s = $('#vc-s'); if (!b) return;
    w.innerHTML = Array.from({ length: 18 }, (_, i) => `<i style="animation-delay:${(i * -.07).toFixed(2)}s"></i>`).join('');
    const say = 'Remind me to call the bank tomorrow at 10'; let tm;
    b.addEventListener('click', () => { const act = b.getAttribute('aria-pressed') !== 'true'; b.setAttribute('aria-pressed', act); b.setAttribute('aria-label', act ? 'Stop listening' : 'Start listening'); w.classList.toggle('on', act); clearInterval(tm);
      if (act) { s.textContent = 'Listening…'; const words = say.split(' '); let i = 0; t.textContent = '';
        tm = setInterval(() => { t.textContent += (i ? ' ' : '') + words[i++]; if (i >= words.length) { clearInterval(tm); setTimeout(() => { if (b.getAttribute('aria-pressed') === 'true') b.click(); }, 600); } }, 260); }
      else { s.textContent = 'Done · Reminder set for tomorrow, 10:00 AM'; t.textContent = '"' + say + '."'; } });
  })();
})();
```
