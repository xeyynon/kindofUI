# Information architecture (sitemap)

Process and methods · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#ia

A map of every page and how it's grouped, planned before any visual design so people can find things.

- **Good for:** Planning site structure before visual design
- **Watch out:** Structures that mirror the org chart
- **Seen in:** planning for every large website and app

## Prompt for an AI assistant

Help me use Information architecture (sitemap) on my project.

What it is: A map of every page and how it's grouped, planned before any visual design so people can find things.
Good for: Planning site structure before visual design.
Watch out: Structures that mirror the org chart.
Seen in: planning for every large website and app

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
<div class="stage s-ia"><div class="tree"><span class="nd r">Home</span><div class="lv">
    <div class="br"><span class="nd">Shop</span><span class="lf">Men</span><span class="lf">Women</span><span class="lf">Kids</span></div>
    <div class="br"><span class="nd">Help</span><span class="lf">Orders</span><span class="lf">Returns</span><span class="lf">Contact</span></div>
    <div class="br"><span class="nd">Account</span><span class="lf">Profile</span><span class="lf">Addresses</span><span class="lf">Wishlist</span></div>
  </div></div></div>
```

### CSS

```css
/* base styles the site gives every demo (scoped to this demo) */
.s-ia, .s-ia *, .s-ia *::before, .s-ia *::after { box-sizing: border-box; }
.s-ia { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-ia button { font: inherit; cursor: pointer; }
.s-ia { background: #fff; color: #1f2430; padding: 16px; font-size: 11px; display: grid; place-items: center; }
.s-ia .tree { display: grid; justify-items: center; gap: 20px; width: 100%; }
.s-ia .nd { background: #1f2430; color: #fff; border-radius: 6px; padding: 6px 12px; font-weight: 600; position: relative; }
.s-ia .nd.r { background: #3557e0; }
.s-ia .nd.r::after { content: ""; position: absolute; left: 50%; top: 100%; height: 10px; border-left: 1.5px solid #cbd5e1; }
.s-ia .lv { display: grid; grid-template-columns: repeat(3,1fr); gap: 10px; width: 100%; position: relative; }
.s-ia .lv::before { content: ""; position: absolute; top: -10px; left: 16.6%; right: 16.6%; border-top: 1.5px solid #cbd5e1; }
.s-ia .br { display: grid; justify-items: center; gap: 6px; position: relative; }
.s-ia .br::before { content: ""; position: absolute; top: -10px; left: 50%; height: 10px; border-left: 1.5px solid #cbd5e1; }
.s-ia .br .nd { margin-bottom: 4px; }
.s-ia .lf { background: #f3f4f7; border: 1px solid #e3e6ec; border-radius: 5px; padding: 4px 6px; width: 100%; max-width: 90px; text-align: center; }
```

No JavaScript needed.
