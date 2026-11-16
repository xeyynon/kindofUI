<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/banner-dark.png">
  <img alt="kindofui, the interactive UI/UX reference library" src="docs/banner-light.png" width="100%">
</picture>

**Stop looking at screenshots of interfaces. Touch them.**

145 live, clickable, copyable examples of how interfaces are designed, on one page, each with a ready prompt for your AI assistant.

[**Open the live site**](https://kindofui.vercel.app) &nbsp;·&nbsp; [Why it exists](#why-this-exists) &nbsp;·&nbsp; [What is inside](#what-is-inside) &nbsp;·&nbsp; [Use it from an AI agent](#use-it-from-an-ai-agent) &nbsp;·&nbsp; [Run it](#run-it) &nbsp;·&nbsp; [Add an entry](#add-an-entry)

</div>

<br>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/hero-dark.png">
  <img alt="The kindofui home page: search, section filters and the style comparison tool" src="docs/hero-light.png" width="100%">
</picture>

<br>

## Why this exists

You want to know what glassmorphism is. Or how a command palette should behave. Or why a bigger button is faster to hit.

What you usually get is a **picture** of it, or an article about it, or one style per page behind a menu, or a paid kit. Pictures can't be pressed. You never feel the toggle slide, the skeleton shimmer, the drag snap into place, or see how a "bad" version fails next to a good one. And nothing puts styles, layouts, navigation, components, AI patterns, UX laws, accessibility and design methods **in the same place**, so you can't learn how they connect.

kindofui is the page that did not exist yet:

- **Everything in one scroll.** No page per style, no menus to dig through. Search it, filter it, or just keep going.
- **Every entry is alive.** Hover it, click it, drag it, type into it. Where a lesson is a *comparison* (a UX law, a bad form versus a good one), both sides are on screen and both work.
- **Every entry is the same shape**, so you always know where to look, and you can compare ten styles in the time it takes to read one article.
- **Nothing is locked.** Each demo has a **Code and prompt** button: plain HTML, CSS and the little JavaScript it needs, ready to paste into your own project, plus a prompt you can hand to Claude or any AI assistant.

It is for people who design or build interfaces and learn by seeing and trying: students, developers who ended up doing UI, designers who want the "why" behind a pattern.

<br>

## What is inside

<picture>
  <img alt="A mosaic of twelve live demos: glassmorphism, neo-brutalism, aurora, pixel, bento, retro-future, vaporwave, Gen Z maximalism, liquid glass, holographic, dark UI and Memphis" src="docs/mosaic.jpg" width="100%">
</picture>

<sub>Twelve of the 38 visual styles. Every tile on the site is live.</sub>

| Collection | Entries | A taste of it |
|---|---:|---|
| **Visual styles** | 38 | Bento, glassmorphism, neumorphism, neo-brutalism, aurora, vaporwave, liquid glass, 3D tilt, e-ink, Apple and Windows design languages |
| **Layouts** | 18 | Masonry, dashboard, holy grail, 12-column grid, kanban you can drag, carousel, scrollytelling, parallax, scroll-snap sections |
| **Navigation** | 19 | Command palette, mega menu, magnifying dock, speed-dial button, scroll-spy contents, bottom tab bar, a Back button that closes overlays |
| **Components & UX patterns** | 34 | Skeleton loaders, last known value, delayed spinner, error summary, double-submit protection, password field, drag-to-reorder, OTP input, pull to refresh, optimistic updates, faceted search |
| **AI patterns** | 5 | Prompt box, streaming answer with a stop button, suggestions, citations, voice input |
| **UX laws** | 10 | Fitts's law as a timing game, Hick's law, the Doherty threshold, felt as a 1.5 s response next to one under 400 ms |
| **Accessibility & motion** | 9 | A colour-blindness simulator, focus rings, focus after actions, ARIA, reduced motion, easing curves |
| **Process & methods** | 12 | Personas, journey maps, card sorting, A/B test statistics, design tokens you can switch live |

Plus **Compare**: the same screen in two styles, side by side. Pick from 21 everyday screens in three groups (Marketing, Web app, Mobile app: pricing, landing, checkout, inbox, data table, chat, onboarding, feed and more) in any of 12 visual styles.

- **Mix styles** takes the colors, shape, depth and type from different styles, and warns about mixes that are known to fail, like blur on a plain background.
- A **State** switch shows each screen at hover, focus, disabled, error and loading.
- A contrast readout gives the real WCAG ratio for the chosen colors, and says "check by eye" for see-through or gradient colors instead of guessing.
- **Copy tokens** gives you a `:root` block, and **Copy prompt** writes a prompt to build that screen in that style or mix.

<picture>
  <img alt="The compare tool showing the same pricing card in glassmorphism and neo-brutalism" src="docs/compare.png" width="100%">
</picture>

And four **Tools** that turn the library into decisions:

- **Style finder.** Four questions about your project, then the styles and patterns that fit.
- **Which should I use?** 11 decision guides that settle a "this or that" in a few questions: modal, drawer, popover, tooltip or toast; spinner, skeleton or last known value; when a form should show errors; switch, checkbox or radio; and more. Each answer gives the reason and links to the card.
- **Brief builder.** Turns your Saved cards and a few lines about your project into one brief for an AI assistant, with or without the code. Copy it or download it as Markdown.
- **UX audit.** 26 checks to run on your own product, answered Yes, No or N/A, with a score. Copy the result as a to-do list or as a review prompt for an AI.

Getting around:

- **Search** puts the best match first, knows other names (snackbar finds toasts) and forgives small typos.
- **Save** any card. Saved cards sit in the header, kept in your browser with no account.
- **Copy link** on any card. Search, section, Compare and Tools settings stay in the address bar, so any view can be shared.
- **Keyboard shortcuts:** `j` and `k` move between cards, `s` saves, `l` copies a link, `o` opens Code and prompt, `/` searches, `?` lists them all. They can be switched off, and they never fire while you type.
- **What's new:** the build number in the header opens a list of what changed in every build.

<br>

## The anatomy of an entry

Every one of the 145 follows the same five-part shape:

<table>
<tr>
<td width="55%" valign="top">
<img alt="A card annotated with five numbered parts" src="docs/card-anatomy.png" width="100%">
</td>
<td valign="top">

1. **A live demo.** Not a screenshot. Click it, scroll it, drag it.
2. **A plain-English description.** One or two sentences, no jargon wall.
3. **Good for / Watch out.** When to use it and when it will hurt you.
4. **Seen in or Based on.** Real products that use it, named in text only. Where no product could be checked, the evidence instead: NN/g, Baymard, GOV.UK, NIST, WCAG or web.dev, and a note when that evidence is mixed.
5. **Code and prompt.** Copyable HTML and CSS, the JavaScript when the demo has any, and a ready prompt.

</td>
</tr>
</table>

Every card also has **Save** and **Copy link**.

<br>

## Copy the code and the prompt

The **Code and prompt** panel is generated from the page itself, so it can't drift from what you are looking at. The snippet is self-contained: the CSS is scoped to the demo, the JavaScript is wrapped so it can't clash with your page, and the three drag-and-drop demos fetch their one small library themselves.

The prompt is built only from the card's own words: its name, description, Good for, Watch out and Seen in or Based on. Designs get a build prompt with fixed quality rules (keyboard use, AA contrast, reduced motion, 320px wide). UX laws get a review prompt, accessibility and motion cards a fix-and-test prompt, and process cards a prompt that walks you through the method. Copy prompt includes the card's code.

<picture>
  <img alt="The View code panel open on a card, showing HTML, CSS and JavaScript with a Copy button" src="docs/view-code.png" width="62%">
</picture>

<br>

## Use it from an AI agent

An agent doesn't need to scrape the page. The site publishes plain files made for it:

| File | What is in it |
|---|---|
| [`/llms.txt`](https://kindofui.vercel.app/llms.txt) | The index: every pattern with a one-line summary and a link to its page |
| [`/patterns.json`](https://kindofui.vercel.app/patterns.json) | The whole library as data: every pattern with its facts, prompt and code, plus the decision guides, the UX audit and the Compare screens |
| `/p/<id>.md` | One Markdown page per pattern, for example [`/p/delayspin.md`](https://kindofui.vercel.app/p/delayspin.md): description, Good for, Watch out, Seen in or Based on, the prompt, and the HTML, CSS and JavaScript |
| [`/p/decisions.md`](https://kindofui.vercel.app/p/decisions.md) | The 11 "Which should I use?" guides as question trees |
| [`/p/ux-audit.md`](https://kindofui.vercel.app/p/ux-audit.md) | The 26 audit checks as a checklist, each linked to its pattern |

Paste something like this into Claude Code or any agent that can read the web:

```text
Read https://kindofui.vercel.app/llms.txt and build my checkout using the error summary and double-submit patterns.
```

The files are generated from the page, so they say exactly what the site says. After changing the page, run `node scripts/agent-files.cjs` to write them again. `node scripts/agent-files.cjs --check` fails if any of them has drifted from the page. The script needs Playwright with Chromium.

<br>

## Built to be fast and kind

<picture>
  <img alt="Three phone screens: the home page, a bento card and the before-and-after HCI card" src="docs/phones.jpg" width="100%">
</picture>

- **One file.** The whole site is a single HTML file with inline CSS and JavaScript. No framework, no build step, no bundler. Outside the page there are only web fonts, SortableJS for the drag demos, and Vercel Web Analytics for page view counts (one script tag, no package).
- **Smooth because it is quiet.** Cards that are off screen cost nothing: they are not laid out, painted or animated until you scroll near them. Measured in Chromium at 134 cards: **0.1% CPU while idle**, **steady 60 fps scrolling** across all of them, and on a phone with its CPU throttled to 4× slower it loads in about a second at 0.3% idle CPU. (An earlier build idled at 58% on desktop and 99% on that throttled phone, which is why this matters.)
- **Calm motion.** The hero word moves once, softly, then stops. It gives way the moment you scroll, type or click, and it never moves at all if your system asks for reduced motion. Reduced motion stops every animation on the page.
- **Works on a 320px phone.** Demos size to their card, not the screen. On a phone, Compare shows one side at a time with a switch, and Tools open from a short list. Dark and light themes, remembered between visits.
- **Accessible where it matters.** Keyboard-friendly (`Ctrl`/`⌘` + `K` jumps to search, every scrolling panel can be focused), visible focus that never hides under the sticky bar, screen-reader labels. The header, toolbar and footer have zero axe-core violations. Some demos *deliberately* show bad examples, so those are not counted.

<br>

## Run it

It is one static file. Either open `ui-style-atlas.html` in a browser, or serve the folder:

```bash
python -m http.server 8791
# then open http://127.0.0.1:8791/ui-style-atlas.html
```

<br>

## Add an entry

Every entry is an `<article>` with the same shape. Drop it into a section, then add its two notes to the map in the script.

```html
<article class="demo" id="unique-id">
  <div class="stage s-xxx"> ...demo markup... </div>
  <div class="meta">
    <h3>Name</h3>
    <p>One or two plain sentences.</p>
    <p class="seen"><b>Seen in:</b> products named in text only</p>
  </div>
</article>
```

Then add `'unique-id': ['Good for ...', 'Watch out ...']` to the notes map, and run `node scripts/agent-files.cjs` so the agent files include it.

The rules that keep it working:

- Every stage has a unique `s-xxx` class and **every CSS rule for that demo is scoped under it.** The Code and prompt panel finds CSS by that class, including rules inside `@media` and `@container`, and the `@keyframes` they use.
- A demo's JavaScript appears in the panel when it refers to the stage's `s-xxx` class or one of its element ids. Put each demo's code under its own `//` comment, or as its own top-level block starting in column 0.
- Stages are a fixed 290px tall and must fit at phone width. Use container queries so a demo reacts to its card, not the screen.
- Use **Based on:** instead of **Seen in:** when you can't verify a real product, and name the source.
- Example content is invented (names, cities, prices, `example.com`). No real logos, photos or copied text.
- Demos should look like real shipped product UI: restrained colour, SVG icons, terse copy.
- Forms never really submit, and there is no `alert` or `confirm`.

<br>

## Known issues

- Not yet verified in Apple's Safari: `backdrop-filter` on the glass demos. It is declared with the `-webkit-` prefix, and browsers without support get a firmer surface through an `@supports` fallback. The only WebKit available for testing, Playwright on Windows, has no `backdrop-filter`, so the real blur could not be checked there. Everything else renders the same in that WebKit as in Chrome.
- Pull to refresh and swipe cards are tested with real touch input in a mobile-configured Chromium, not on a physical device. A downward drag that starts on the pull-to-refresh card is used for the pull, so it does not scroll the page.
- The three drag-and-drop demos load SortableJS from a CDN, so they need a network connection.

<br>

<div align="center">



</div>
