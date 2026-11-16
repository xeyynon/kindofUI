# Table of contents (scroll spy)

Navigation · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#toc

A list of the page's sections that highlights where you are as you scroll, and jumps to a section when clicked.

- **Good for:** Long docs and articles
- **Watch out:** Short pages with two or three sections
- **Seen in:** MDN, Stripe Docs, Wikipedia, long blog posts

## Prompt for an AI assistant

Build this navigation pattern for my app: Table of contents (scroll spy).

What it is: A list of the page's sections that highlights where you are as you scroll, and jumps to a section when clicked.
Good for: Long docs and articles.
Watch out: Short pages with two or three sections.
Seen in: MDN, Stripe Docs, Wikipedia, long blog posts

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
<div class="stage s-toc">
    <nav class="tc" id="toc-nav" aria-label="On this page"><b>On this page</b><button class="on" data-t="toc1">Install</button><button data-t="toc2">Configure</button><button data-t="toc3">Deploy</button><button data-t="toc4">Troubleshoot</button></nav>
    <div class="ct" id="toc-ct" tabindex="0" role="region" aria-label="Article">
      <h5 role="none" id="toc1">Install</h5><p>Run <code>npm install brewkit</code> in your project folder. Node 20 or later is required. The installer adds a <code>brewkit.config.js</code> file with sensible defaults, so most projects work straight away.</p>
      <h5 role="none" id="toc2">Configure</h5><p>Open the config file and set your API key and region. Most teams only change the region and the output folder. Every option is listed in the reference, with its default value and an example.</p>
      <h5 role="none" id="toc3">Deploy</h5><p>Run <code>brewkit deploy</code> to build and upload your site. The first deploy takes about a minute. Later deploys only upload files that changed, so they usually finish in a few seconds.</p>
      <h5 role="none" id="toc4">Troubleshoot</h5><p>If a deploy fails, run <code>brewkit doctor</code>. It checks your Node version, API key and network, and prints the fix for each problem it finds.</p>
    </div>
  </div>
```

### CSS

```css
:root { --display: "Bricolage Grotesque",system-ui,sans-serif; --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): Bricolage Grotesque, JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-toc, .s-toc *, .s-toc *::before, .s-toc *::after { box-sizing: border-box; }
.s-toc { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-toc button { font: inherit; cursor: pointer; }
.s-toc { display: grid; grid-template-columns: 118px 1fr; background: #fff; color: #1f2430; font-size: 12px; }
.s-toc .tc { padding: 14px 10px; display: grid; align-content: start; gap: 2px; border-right: 1px solid #eef0f3; }
.s-toc .tc b { font-size: 10px; text-transform: uppercase; letter-spacing: .08em; color: #888; margin-bottom: 6px; }
.s-toc .tc button { border: 0; background: none; text-align: left; padding: 4px 8px; border-left: 2px solid #e3e6ec; color: #666; font-size: 12px; }
.s-toc .tc button.on { border-color: #3557e0; color: #3557e0; font-weight: 600; }
.s-toc .ct { overflow-y: auto; padding: 14px 14px 160px; position: relative; min-width: 0; }
.s-toc h5 { margin: 0 0 6px; font: 700 15px var(--display); }
.s-toc .ct p { margin: 0 0 18px; color: #555; line-height: 1.55; }
.s-toc code { font: 11px var(--mono); background: #f3f4f7; padding: 1px 4px; border-radius: 3px; }
```

### JavaScript

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // table of contents + scroll spy
  (() => { const ct = $('#toc-ct'); if (!ct) return; const bs = $$('#toc-nav button'); const hs = bs.map(b => document.getElementById(b.dataset.t));
    bs.forEach((b, i) => b.addEventListener('click', () => ct.scrollTo({ top: hs[i].offsetTop - 14, behavior: 'smooth' })));
    ct.addEventListener('scroll', () => { let k = 0; hs.forEach((h, i) => { if (h.offsetTop - 30 <= ct.scrollTop) k = i; }); bs.forEach((b, i) => b.classList.toggle('on', i === k)); }, { passive: true });
  })();
})();
```
