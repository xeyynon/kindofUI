# kindofui

A single-page reference of UI/UX styles and patterns. Every entry is a live demo you can click, scroll or drag, with a plain-English description, what it is good for, what to watch out for, real products that use it, and copyable HTML and CSS.

134 entries in 8 sections, plus a side-by-side style compare tool:

| Section | Entries |
|---|---|
| Visual styles | 38 |
| Layouts | 18 |
| Navigation | 18 |
| Components & UX patterns | 25 |
| AI patterns | 5 |
| UX laws | 10 |
| Accessibility & motion | 8 |
| Process & methods | 12 |

## Run it

It is one static file with inline CSS and JS. No build step.

```
python -m http.server 8791
```

Then open http://127.0.0.1:8791/ui-style-atlas.html. Opening the file directly also works.

Sortable (drag and drop demos) and the fonts load from CDNs, so the first load needs a network connection.

## Structure

`ui-style-atlas.html` holds everything:

- `<style>`: page tokens (light and dark themes) and one scoped block per demo
- the markup: a compare section, then one `<section class="group">` per topic, each a grid of `<article class="demo">` cards
- one inline script: demo behaviour, the Good for / Watch out map, the View code generator, search and section filters

### Adding an entry

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

Then add `unique-id: ['Good for', 'Watch out']` to the notes map in the script.

Rules that keep it working:

- Every stage has a unique `s-xxx` class and every CSS rule for that demo is scoped under it. The View code panel finds CSS by that class, including rules inside `@media`, and the `@keyframes` those rules use.
- A demo's JavaScript appears in View code when it refers to the stage's `s-xxx` class or to one of the stage's element ids. The panel reads the code from the page's own script, so it cannot drift. Put each demo's code under its own `//` comment, or as its own top-level block starting in column 0.
- Stages are a fixed 290px tall and must fit at phone width (about 330px).
- All example content is invented (names, cities, prices, `example.com`). No real logos, photos or copied text.
- Demos should look like real shipped product UI: restrained colour, SVG icons, terse copy.
- Forms never really submit and there is no `alert` or `confirm`.

## Deploy

Hosted on Vercel as a static site. `vercel.json` serves the page at `/`.

```
vercel --prod
```

## Known issues

- Not yet verified in Apple's Safari: `backdrop-filter` on the glass demos. It is declared with the `-webkit-` prefix, and browsers without support get a firmer surface through an `@supports` fallback (checked in Chromium with the filter switched off). The only WebKit available for testing, Playwright on Windows, has no `backdrop-filter`, so the real blur could not be checked there. Everything else renders the same in that WebKit as in Chrome, including the film-grain effect and the dock hover.
- Pull to refresh and swipe cards are tested with real touch input in a mobile-configured Chromium (the page still scrolls when a drag starts on them), not on a physical device. A downward drag that starts on the pull-to-refresh card is used for the pull, so it does not scroll the page.
- Copied JavaScript is wrapped in a function. The three drag-and-drop demos load SortableJS from a CDN, so they need a network connection.
