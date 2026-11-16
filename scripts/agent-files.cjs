// Writes the files AI agents read: llms.txt, patterns.json and p/<id>.md (plus p/decisions.md and p/ux-audit.md).
// Everything comes from window.kindofui.export() in ui-style-atlas.html, so the files say exactly what the page says.
//
//   node scripts/agent-files.cjs           write the files
//   node scripts/agent-files.cjs --check   exit 1 if any file differs from what the page would produce
//
// Needs Playwright with Chromium. Set PLAYWRIGHT_DIR to a folder containing playwright if it is not installed in this repo,
// and CHROMIUM_PATH to a Chromium binary if Playwright's own download is not used.
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..'), SITE = 'https://kindofui.vercel.app';
const pw = (() => { try { return require('playwright'); } catch (_) { return require(path.join(process.env.PLAYWRIGHT_DIR || path.join(process.env.APPDATA || '', 'npm/node_modules/@playwright/mcp/node_modules'), 'playwright')); } })();

const fence = code => { const f = /```/.test(code) ? '~~~~' : '```'; return f; };
const block = (lang, code) => { const f = fence(code); return `${f}${lang}\n${code.replace(/\s+$/, '')}\n${f}\n`; };
const first = t => ((t || '').match(/^.*?[.!?](\s|$)/) || [t || ''])[0].trim();

function patternMd(p, build) {
  const facts = [p.goodFor && `- **Good for:** ${p.goodFor}`, p.watchOut && `- **Watch out:** ${p.watchOut}`, p.seenIn && `- **Seen in:** ${p.seenIn}`, p.basedOn && `- **Based on:** ${p.basedOn}`].filter(Boolean).join('\n');
  return `# ${p.title}\n\n${p.sectionName} · kindofui build ${build} · Live demo: ${SITE}/#${p.id}\n\n${p.description}\n\n${facts}\n\n## Prompt for an AI assistant\n\n${p.prompt}\n\n## Code\n\nCopy and adapt. The HTML and CSS are scoped to this demo, so they will not touch the page they are pasted into.\n\n### HTML\n\n${block('html', p.code.html)}\n### CSS\n\n${block('css', p.code.css)}` + (p.code.js ? `\n### JavaScript\n\n${block('js', p.code.js)}` : '\nNo JavaScript needed.\n');
}

function decisionsMd(d, byId, build) {
  const link = id => id && byId[id] ? ` See [${byId[id].title}](${id}.md).` : '';
  const walk = (n, depth) => { const pad = '   '.repeat(depth);
    if (!n.question) return `${pad}**Use: ${n.use}.** ${n.why}${link(n.pattern)}\n`;
    return `${pad}${n.question}\n` + n.answers.map(a => `${pad}- **${a.label}:** ` + walk(a.then, depth + 1).replace(/^\s+/, '')).join(''); };
  return `# Which should I use?\n\nkindofui build ${build}. Answer the questions in order; each answer leads to the next question or to a recommendation with the reason. Interactive version: ${SITE}/?tool=which\n\n` +
    d.map(t => `## ${t.title}\n\n${walk(t.start, 0)}`).join('\n');
}

function auditMd(groups, byId, build) {
  return `# UX audit checklist\n\nkindofui build ${build}. Check your own product. Each line links to the pattern that explains it. Interactive version with a score: ${SITE}/?tool=audit\n\n` +
    groups.map(g => `## ${g.group}\n\n` + g.checks.map(c => `- [ ] ${c.check} ([${byId[c.pattern] ? byId[c.pattern].title : c.pattern}](${c.pattern}.md))`).join('\n') + '\n').join('\n');
}

function llmsTxt(data) {
  const secs = []; data.patterns.forEach(p => { let s = secs.find(x => x.id === p.section); if (!s) secs.push(s = { id: p.section, name: p.sectionName, items: [] }); s.items.push(p); });
  return `# kindofui\n\n> ${data.patterns.length} live UI and UX patterns. Each one has when to use it, when it hurts, what it is based on or where it is seen, a ready prompt for AI assistants, and copyable HTML, CSS and JavaScript. Build ${data.build}.\n\n` +
    `Read these files instead of scraping the page. Every pattern has its own Markdown page with the full prompt and code.\n\n` +
    `- [All patterns as JSON](${SITE}/patterns.json): every pattern with its facts, prompt and code, plus the decision guides, the UX audit and the Compare screens\n` +
    `- [Which should I use?](${SITE}/p/decisions.md): ${data.decisions.length} decision guides, for example modal vs drawer vs toast, spinner vs skeleton vs last known value, when to show form errors\n` +
    `- [UX audit checklist](${SITE}/p/ux-audit.md): ${data.uxAudit.reduce((n, g) => n + g.checks.length, 0)} checks to review an interface, each linked to its pattern\n\n` +
    secs.map(s => `## ${s.name}\n\n` + s.items.map(p => `- [${p.title}](${SITE}/p/${p.id}.md): ${first(p.description)}`).join('\n') + '\n').join('\n') +
    `\n## Optional\n\n- [Live site](${SITE}/): every pattern as an interactive demo, the Compare tool (${data.compare.screens.length} screens in ${data.compare.styles.length} visual styles) and the tools\n- [Source](https://github.com/xeyynon/kindofUI)\n`;
}

(async () => {
  const check = process.argv.includes('--check');
  const browser = await pw.chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
  const page = await browser.newPage(); const errs = []; page.on('pageerror', e => errs.push(e.message));
  await page.goto('file:///' + path.join(ROOT, 'ui-style-atlas.html').replace(/\\/g, '/')); await page.waitForTimeout(500);
  const data = await page.evaluate(() => window.kindofui.export()); await browser.close();
  if (errs.length) { console.error('Page errors:', errs); process.exit(1); }
  const byId = Object.fromEntries(data.patterns.map(p => [p.id, p]));
  const files = { 'llms.txt': llmsTxt(data), 'patterns.json': JSON.stringify(data, null, 1) + '\n', 'p/decisions.md': decisionsMd(data.decisions, byId, data.build), 'p/ux-audit.md': auditMd(data.uxAudit, byId, data.build) };
  data.patterns.forEach(p => { files[`p/${p.id}.md`] = patternMd(p, data.build); });
  const norm = t => t.replace(/\r\n/g, '\n');
  const stale = Object.entries(files).filter(([f, t]) => { const fp = path.join(ROOT, f); return !fs.existsSync(fp) || norm(fs.readFileSync(fp, 'utf8')) !== t; }).map(([f]) => f);
  const pdir = path.join(ROOT, 'p'), extra = fs.existsSync(pdir) ? fs.readdirSync(pdir).map(f => 'p/' + f).filter(f => !(f in files)) : [];
  if (check) { if (stale.length || extra.length) { console.error(`Agent files are out of date: ${stale.length} differ, ${extra.length} no longer made by the page.\n` + [...stale, ...extra].slice(0, 20).join('\n')); process.exit(1); } console.log(`Agent files match the page: ${Object.keys(files).length} files, build ${data.build}.`); return; }
  fs.mkdirSync(pdir, { recursive: true });
  for (const [f, t] of Object.entries(files)) fs.writeFileSync(path.join(ROOT, f), t);
  extra.forEach(f => console.log('No longer made by the page (left in place, review and remove by hand):', f));
  console.log(`Wrote ${Object.keys(files).length} files for build ${data.build}: llms.txt, patterns.json, p/decisions.md, p/ux-audit.md and ${data.patterns.length} pattern pages.`);
})().catch(e => { console.error(e); process.exit(1); });
