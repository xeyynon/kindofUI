# Human-centered design process

Process and methods · kindofui build 1012 · Live demo: https://kindofui.vercel.app/#hcd

Start from real users, not assumptions. Research, define the problem, explore ideas, prototype, test with people, and loop back with what you learn.

- **Good for:** New products and big redesigns
- **Watch out:** Skipping research and guessing
- **Seen in:** IDEO, Google Design Sprint, Stanford d.school "design thinking"

## Prompt for an AI assistant

Help me use Human-centered design process on my project.

What it is: Start from real users, not assumptions. Research, define the problem, explore ideas, prototype, test with people, and loop back with what you learn.
Good for: New products and big redesigns.
Watch out: Skipping research and guessing.
Seen in: IDEO, Google Design Sprint, Stanford d.school "design thinking"

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
<div class="stage s-hcd">
    <svg viewBox="0 0 380 230" role="img" aria-label="Five-step design process loop">
      <defs><marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#9aa3b2"></path></marker></defs>
      <g font-family="Figtree, system-ui, sans-serif" font-size="12" font-weight="600" text-anchor="middle">
        <rect x="8" y="40" width="64" height="50" rx="10" fill="#dbeafe"></rect><text x="40" y="62" fill="#1e3a8a">1</text><text x="40" y="78" fill="#1e3a8a">Research</text>
        <rect x="83" y="40" width="64" height="50" rx="10" fill="#ede9fe"></rect><text x="115" y="62" fill="#4c1d95">2</text><text x="115" y="78" fill="#4c1d95">Define</text>
        <rect x="158" y="40" width="64" height="50" rx="10" fill="#fce7f3"></rect><text x="190" y="62" fill="#831843">3</text><text x="190" y="78" fill="#831843">Ideate</text>
        <rect x="233" y="40" width="64" height="50" rx="10" fill="#fef3c7"></rect><text x="265" y="62" fill="#78350f">4</text><text x="265" y="78" fill="#78350f">Prototype</text>
        <rect x="308" y="40" width="64" height="50" rx="10" fill="#dcfce7"></rect><text x="340" y="62" fill="#14532d">5</text><text x="340" y="78" fill="#14532d">Test</text>
      </g>
      <g stroke="#9aa3b2" stroke-width="1.6" fill="none" marker-end="url(#ar)"><path d="M72 65H81"></path><path d="M147 65H156"></path><path d="M222 65H231"></path><path d="M297 65H306"></path><path d="M340 92 V140 H40 V95"></path></g>
      <text x="190" y="158" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" fill="#6b7280">learn from users, then repeat</text>
      <g font-family="Figtree, system-ui, sans-serif" font-size="10" fill="#4b5563" text-anchor="middle">
        <text x="40" y="190">interviews</text><text x="115" y="190">personas</text><text x="190" y="190">sketches</text><text x="265" y="190">wireframes</text><text x="340" y="190">usability tests</text>
        <text x="40" y="205">surveys</text><text x="115" y="205">user journeys</text><text x="190" y="205">workshops</text><text x="265" y="205">Figma mockups</text><text x="340" y="205">A/B tests</text>
      </g>
    </svg>
  </div>
```

### CSS

```css
/* base styles the site gives every demo (scoped to this demo) */
.s-hcd, .s-hcd *, .s-hcd *::before, .s-hcd *::after { box-sizing: border-box; }
.s-hcd { position: relative; height: 290px; border-bottom: 1px solid transparent; overflow: hidden; font: 15px/1.55 system-ui, sans-serif; color: #1f2430; color-scheme: light; }
.s-hcd button { font: inherit; cursor: pointer; }
.s-hcd { background: #fff; color: #1f2430; display: grid; place-items: center; padding: 12px; }
.s-hcd svg { width: 100%; max-width: 380px; height: auto; }
```

No JavaScript needed.
