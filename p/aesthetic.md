# Aesthetic-usability effect

UX laws · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#aesthetic

People think good-looking designs are easier to use, and forgive small problems in them. Both forms do the same job.

- **Good for:** Building trust and patience through polish
- **Watch out:** Using polish to hide real usability problems
- **Seen in:** Stripe, Linear, Apple

## Prompt for an AI assistant

Review my UI against Aesthetic-usability effect.

What it is: People think good-looking designs are easier to use, and forgive small problems in them. Both forms do the same job.
Good for: Building trust and patience through polish.
Watch out: Using polish to hide real usability problems.
Seen in: Stripe, Linear, Apple

For each screen or component I share:
1. Point to the exact places where it breaks this law and say why it matters to the user.
2. Suggest a concrete fix for each one, smallest change first.
3. Apply the fixes in code when I say so, keeping my existing styles.
4. Tell me how to check the result, for example with a quick user test or a measurement.

The kindofui example below shows the law in a small working demo.

## Code

Copy and adapt. The HTML and CSS are scoped to this demo, so they will not touch the page they are pasted into.

### HTML

```html
<div class="stage s-aes"><div class="vs2">
    <div><span class="lb2 b">Unpolished</span><div class="ug"><span>NAME:</span><input id="aes-1" aria-label="Name (unpolished form)"><span>E-MAIL ADDR:</span><input id="aes-2" aria-label="Email (unpolished form)"><button>SUBMIT FORM</button></div></div>
    <div><span class="lb2 g">Polished</span><div class="pf"><label for="aes-3">Name</label><input id="aes-3" placeholder="Aditi Rao"><label for="aes-4">Email</label><input id="aes-4" placeholder="you@example.com"><button>Join the waitlist</button></div></div>
  </div></div>
```

### CSS

```css
:root { --body: "Figtree",system-ui,sans-serif; --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): Figtree, JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-aes, .s-aes *, .s-aes *::before, .s-aes *::after { box-sizing: border-box; }
.s-aes { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-aes button { font: inherit; cursor: pointer; }
.vs2 { display: grid; grid-template-columns: 1fr 1fr; height: 100%; font-size: 11px; color: #1f2430; }
.vs2 > div { padding: 10px 12px; display: grid; gap: 8px; align-content: start; position: relative; min-width: 0; }
.vs2 > div:first-child { background: #fff; border-right: 1px solid #e5e7eb; }
.vs2 > div:last-child { background: #fafafa; }
.vs2 .lb2 { font: 700 10px var(--mono); letter-spacing: .06em; text-transform: uppercase; }
.vs2 .lb2.b { color: #b42318; }
.vs2 .lb2.g { color: #067647; }
.s-aes .ug { display: grid; gap: 3px; font: 11px "Times New Roman",serif; background: #ddd; padding: 6px; border: 2px ridge #aaa; }
.s-aes .ug input { border: 2px inset #999; font: 11px "Comic Sans MS",cursive; padding: 1px; min-width: 0; background: #fff; color: #000; }
.s-aes .ug button { justify-self: start; font: bold 10px Arial,sans-serif; background: #f0f; color: #0f0; border: 2px outset #ccc; }
.s-aes .pf { display: grid; gap: 4px; background: #fff; border-radius: 10px; padding: 10px; box-shadow: 0 4px 14px rgba(0,0,0,.06); }
.s-aes .pf label { font-weight: 600; font-size: 10.5px; }
.s-aes .pf input { border: 1px solid #d6dae1; border-radius: 6px; padding: 5px 7px; font: 11px var(--body); min-width: 0; color: #1f2430; }
.s-aes .pf button { margin-top: 4px; border: 0; background: #16a34a; color: #fff; border-radius: 6px; padding: 7px; font-weight: 600; }
```

No JavaScript needed.
