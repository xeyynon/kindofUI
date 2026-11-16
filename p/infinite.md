# Infinite scroll vs pagination

Components and UX patterns · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#infinite

Infinite scroll keeps loading as you reach the bottom, good for browsing. Pagination splits results into numbered pages, good for finding and returning to things.

- **Good for:** Casual browsing feeds
- **Watch out:** Search results or anything people return to
- **Seen in:** Instagram and X feeds (infinite), Google results and Amazon (pages)

## Prompt for an AI assistant

Build this UI pattern for my app: Infinite scroll vs pagination.

What it is: Infinite scroll keeps loading as you reach the bottom, good for browsing. Pagination splits results into numbered pages, good for finding and returning to things.
Good for: Casual browsing feeds.
Watch out: Search results or anything people return to.
Seen in: Instagram and X feeds (infinite), Google results and Amazon (pages)

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
<div class="stage s-inf">
    <div class="col"><span class="lbl">Infinite scroll</span><div class="feed" id="inf-feed" tabindex="0" role="region" aria-label="Feed"></div><span class="ld">↓ scroll for more</span></div>
    <div class="col"><span class="lbl">Pagination</span><div class="feed" id="pg-feed"></div><div class="pg" id="pg-btns"></div></div>
  </div>
```

### CSS

```css
:root { --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-inf, .s-inf *, .s-inf *::before, .s-inf *::after { box-sizing: border-box; }
.s-inf { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-inf button { font: inherit; cursor: pointer; }
.s-inf { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; padding: 12px; background: #f3f4f7; font-size: 11px; color: #2b3040; }
.s-inf .col { display: grid; grid-template-rows: auto 1fr auto; gap: 6px; min-height: 0; }
.s-inf .lbl { font: 10px var(--mono); color: #888; text-transform: uppercase; }
.s-inf .feed { overflow-y: auto; display: grid; gap: 5px; align-content: start; padding-right: 2px; }
.s-inf .it { background: #fff; border: 1px solid #e3e6ec; border-radius: 6px; padding: 7px 8px; }
.s-inf .ld { text-align: center; color: #888; padding: 4px; }
.s-inf .pg { display: flex; gap: 4px; justify-content: center; }
.s-inf .pg button { border: 1px solid #d6dae1; background: #fff; border-radius: 5px; min-width: 24px; height: 24px; font-size: 11px; }
.s-inf .pg button.on { background: #3557e0; color: #fff; border-color: #3557e0; }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // infinite + pagination
  const titles=['Morning standup notes','Hiring plan for Q1','Logo feedback round','Pricing page draft','Customer interview #12','Sprint retro','Bug: login timeout','Launch checklist','Holiday calendar','API rate limits','Design crit recap','Onboarding emails'];
  const feed=$('#inf-feed');let n=0;
  function more(k){for(let i=0;i<k&&n<60;i++,n++){const d=document.createElement('div');d.className='it';d.textContent=`#${n+1} ${titles[n%titles.length]}`;feed.appendChild(d)}}
  more(8);feed.addEventListener('scroll',()=>{if(feed.scrollTop+feed.clientHeight>feed.scrollHeight-20)more(5)},{passive:true});
  const pf=$('#pg-feed'),pb=$('#pg-btns');let pgi=0;
  function rp(){pf.innerHTML=Array.from({length:5},(_,i)=>{const k=pgi*5+i;return `<div class="it">#${k+1} ${titles[k%titles.length]}</div>`}).join('');
    pb.innerHTML=['‹',1,2,3,'›'].map(x=>`<button class="${x===pgi+1?'on':''}" data-p="${x}">${x}</button>`).join('')}
  pb.addEventListener('click',e=>{const p=e.target.dataset.p;if(!p)return;pgi=p==='‹'?Math.max(0,pgi-1):p==='›'?Math.min(2,pgi+1):p-1;rp()});rp();
})();
```
