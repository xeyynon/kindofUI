# Fat footer

Navigation · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#fatfooter

A large footer with grouped links, a newsletter box and legal info. It acts as a sitemap for people who reach the bottom.

- **Good for:** Large sites: sitemap, help, legal, newsletter
- **Watch out:** Apps where nobody reaches the footer
- **Seen in:** Apple, Amazon, large retail and news sites

## Prompt for an AI assistant

Build this navigation pattern for my app: Fat footer.

What it is: A large footer with grouped links, a newsletter box and legal info. It acts as a sitemap for people who reach the bottom.
Good for: Large sites: sitemap, help, legal, newsletter.
Watch out: Apps where nobody reaches the footer.
Seen in: Apple, Amazon, large retail and news sites

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
<div class="stage s-ff">
    <div class="cols5">
      <div class="brand"><b>Brewly</b><p>Fresh coffee, roasted in Pune every Monday.</p><form onsubmit="event.preventDefault()"><input id="ff-mail" placeholder="Email for offers" aria-label="Email for offers"><button>Join</button></form></div>
      <div><h5 role="none">Shop</h5><span>Beans</span><span>Gear</span><span>Gift cards</span><span>Subscriptions</span></div>
      <div><h5 role="none">Learn</h5><span>Brew guides</span><span>Origins</span><span>Blog</span></div>
      <div><h5 role="none">Help</h5><span>Shipping</span><span>Returns</span><span>Contact</span></div>
    </div>
    <div class="legal"><span>© 2026 Brewly</span><span>Privacy · Terms · Cookies</span></div>
  </div>
```

### CSS

```css
:root { --display: "Bricolage Grotesque",system-ui,sans-serif; }
/* fonts used (all on Google Fonts): Bricolage Grotesque */
/* base styles the site gives every demo (scoped to this demo) */
.s-ff, .s-ff *, .s-ff *::before, .s-ff *::after { box-sizing: border-box; }
.s-ff { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-ff button { font: inherit; cursor: pointer; }
.s-ff { background: #111827; color: #9ca3af; padding: 16px; display: grid; grid-template-rows: 1fr auto; gap: 12px; font-size: 11px; container-type: inline-size; }
.s-ff .cols5 { display: grid; grid-template-columns: 1.6fr repeat(3,1fr); gap: 12px; }
.s-ff .cols5 > div { display: grid; grid-template-columns: minmax(0,1fr); align-content: start; gap: 5px; min-width: 0; }
@container (max-width:520px) {
  .s-ff .cols5 { grid-template-columns: repeat(3,minmax(0,1fr)); }
  .s-ff .brand { grid-column: 1/-1; }
}
.s-ff .brand b { color: #fff; font: 700 15px var(--display); }
.s-ff p { margin: 0 0 4px; }
.s-ff form { display: flex; gap: 4px; }
.s-ff input { flex: 1; min-width: 0; background: #1f2937; border: 1px solid #374151; border-radius: 5px; color: #fff; padding: 5px 7px; font-size: 11px; }
.s-ff form button { border: 0; background: #fbbf24; color: #111; border-radius: 5px; padding: 0 8px; font-weight: 700; font-size: 11px; }
.s-ff h5 { margin: 0 0 3px; color: #fff; font-size: 11px; }
.s-ff .legal { border-top: 1px solid #1f2937; padding-top: 8px; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 4px; }
```

No JavaScript needed.
