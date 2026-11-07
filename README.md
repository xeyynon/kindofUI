# Uiverse

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

- Every stage has a unique `s-xxx` class and every CSS rule for that demo is scoped under it. The View code panel finds CSS by that class.
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

- Copied code includes HTML and CSS only, not the demo's JavaScript.
- Not yet verified: dock hover magnify with a real mouse, the film-grain effect in Safari, and pull-to-refresh on a real touch device.
- Short keyframe names can pull an unrelated keyframe into the View code output. Harmless but untidy.
