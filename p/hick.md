# Hick's law

UX laws · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#hick

The more choices people see at once, the longer they take to decide. Group and reduce options.

- **Good for:** Menus, settings, choice-heavy screens
- **Watch out:** Burying common choices too deep while grouping
- **Seen in:** grouped settings menus, short restaurant menus, Google's homepage

## Prompt for an AI assistant

Review my UI against Hick's law.

What it is: The more choices people see at once, the longer they take to decide. Group and reduce options.
Good for: Menus, settings, choice-heavy screens.
Watch out: Burying common choices too deep while grouping.
Seen in: grouped settings menus, short restaurant menus, Google's homepage

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
<div class="stage s-hick"><div class="vs2">
    <div><span class="lb2 b">16 choices at once</span><div class="m16"><span>Overview</span><span>Invoices</span><span>Payments</span><span>Taxes</span><span>Members</span><span>Roles</span><span>Invites</span><span>Audit log</span><span>Sales</span><span>Traffic</span><span>Exports</span><span>Profile</span><span>Security</span><span>Plan</span><span>API keys</span><span>Integrations</span></div></div>
    <div><span class="lb2 g">Grouped into 4</span><div class="m4"><details open=""><summary>Billing</summary><span>Invoices</span><span>Payments</span><span>Taxes</span></details><details><summary>Team</summary><span>Members</span><span>Roles</span><span>Invites</span></details><details><summary>Reports</summary><span>Sales</span><span>Traffic</span><span>Exports</span></details><details><summary>Settings</summary><span>Profile</span><span>Security</span><span>API keys</span></details></div></div>
  </div></div>
```

### CSS

```css
:root { --mono: "JetBrains Mono",ui-monospace,monospace; }
/* fonts used (all on Google Fonts): JetBrains Mono */
/* base styles the site gives every demo (scoped to this demo) */
.s-hick, .s-hick *, .s-hick *::before, .s-hick *::after { box-sizing: border-box; }
.s-hick { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-hick button { font: inherit; cursor: pointer; }
.vs2 { display: grid; grid-template-columns: 1fr 1fr; height: 100%; font-size: 11px; color: #1f2430; }
.vs2 > div { padding: 10px 12px; display: grid; gap: 8px; align-content: start; position: relative; min-width: 0; }
.vs2 > div:first-child { background: #fff; border-right: 1px solid #e5e7eb; }
.vs2 > div:last-child { background: #fafafa; }
.vs2 .lb2 { font: 700 10px var(--mono); letter-spacing: .06em; text-transform: uppercase; }
.vs2 .lb2.b { color: #b42318; }
.vs2 .lb2.g { color: #067647; }
.s-hick .m16 { display: grid; grid-template-columns: 1fr 1fr; gap: 3px; }
.s-hick .m16 span { background: #fff; border: 1px solid #eee; border-radius: 4px; padding: 3px 5px; font-size: 10px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.s-hick .m4 { display: grid; gap: 4px; }
.s-hick .m4 details { background: #fff; border: 1px solid #e3efe6; border-radius: 6px; padding: 5px 8px; }
.s-hick .m4 summary { font-weight: 600; cursor: pointer; }
.s-hick .m4 span { display: block; padding: 2px 0 0 12px; color: #555; }
```

No JavaScript needed.
