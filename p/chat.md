# Conversational UI

Components and UX patterns · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#chat

Users get things done by chatting, with quick-reply buttons for common answers.

- **Good for:** Support, open questions, AI assistants
- **Watch out:** Tasks a simple form does faster
- **Seen in:** ChatGPT, Claude, Siri, bank and airline support bots

## Prompt for an AI assistant

Build this UI pattern for my app: Conversational UI.

What it is: Users get things done by chatting, with quick-reply buttons for common answers.
Good for: Support, open questions, AI assistants.
Watch out: Tasks a simple form does faster.
Seen in: ChatGPT, Claude, Siri, bank and airline support bots

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
<div class="stage s-chat">
    <div class="hd"><i></i>Support assistant</div>
    <div class="log" id="chat-log">
      <div class="m b">Hi! What can I help you with today?</div>
      <div class="m u">Where is my order?</div>
      <div class="m b">Order #48213 left the warehouse today and should arrive Monday.</div>
      <div class="qr"><button>Track package</button><button>Change address</button></div>
    </div>
    <form id="chat-form"><input id="chat-in" placeholder="Type a message" aria-label="Message"><button type="submit">Send</button></form>
  </div>
```

### CSS

```css
/* base styles the site gives every demo (scoped to this demo) */
.s-chat, .s-chat *, .s-chat *::before, .s-chat *::after { box-sizing: border-box; }
.s-chat { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-chat button { font: inherit; cursor: pointer; }
.s-chat { background: #fff; display: grid; grid-template-rows: auto 1fr auto; font-size: 12px; color: #1f2430; }
.s-chat .hd { padding: 9px 12px; border-bottom: 1px solid #eef0f3; display: flex; gap: 8px; align-items: center; font-weight: 600; }
.s-chat .hd i { width: 22px; height: 22px; border-radius: 50%; background: linear-gradient(135deg,#3557e0,#22c1c3); }
.s-chat .log { overflow-y: auto; padding: 10px 12px; display: flex; flex-direction: column; gap: 7px; }
.s-chat .m { max-width: 78%; padding: 7px 10px; border-radius: 14px; line-height: 1.35; }
.s-chat .m.u { align-self: flex-end; background: #3557e0; color: #fff; border-bottom-right-radius: 4px; }
.s-chat .m.b { align-self: flex-start; background: #eef0f4; border-bottom-left-radius: 4px; }
.s-chat .qr { display: flex; gap: 5px; flex-wrap: wrap; }
.s-chat .qr button { border: 1px solid #3557e0; color: #3557e0; background: #fff; border-radius: 999px; padding: 3px 9px; font-size: 11px; }
.s-chat form { display: flex; gap: 6px; padding: 8px; border-top: 1px solid #eef0f3; }
.s-chat input { flex: 1; min-width: 0; border: 1px solid #d6dae1; border-radius: 999px; padding: 6px 12px; font: inherit; }
.s-chat form button { border: 0; background: #3557e0; color: #fff; border-radius: 999px; padding: 0 14px; }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // chat
  const log=$('#chat-log'),cf=$('#chat-form'),cin=$('#chat-in');
  function say(t,who){const d=document.createElement('div');d.className='m '+who;d.textContent=t;log.appendChild(d);log.scrollTop=log.scrollHeight}
  const replies=['Thanks! I have passed that to the delivery team.','Sure. Your package is in Nagpur and on schedule.','Done. You will get an SMS with the new address.'];let ri=0;
  cf.addEventListener('submit',e=>{e.preventDefault();const t=cin.value.trim();if(!t)return;say(t,'u');cin.value='';setTimeout(()=>say(replies[ri++%3],'b'),600)});
  $$('#chat-log .qr button').forEach(b=>b.addEventListener('click',()=>{say(b.textContent,'u');setTimeout(()=>say(replies[ri++%3],'b'),600)}));
})();
```
