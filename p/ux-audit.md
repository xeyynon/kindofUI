# UX audit checklist

kindofui build 1012. Check your own product. Each line links to the pattern that explains it. Interactive version with a score: https://kindofui.vercel.app/?tool=audit

## Usability

- [ ] Main buttons are big (at least 44 by 44 px on touch) and close to where the hand or pointer already is. ([Fitts's law](fitts.md))
- [ ] Each screen offers a few clear choices; rare options are tucked away. ([Hick's law](hick.md))
- [ ] Navigation, search, cart and forms work the way people know from other sites. ([Jakob's law](jakob.md))
- [ ] Long numbers, codes and lists are broken into small groups. ([Miller's law (chunking)](miller.md))
- [ ] Related things are grouped by space or a shared box, and unrelated things sit apart. ([Gestalt principles](gestalt.md))
- [ ] Only one thing per screen stands out: the main action. ([Von Restorff effect](vonrestorff.md))
- [ ] Hard parts are handled by smart defaults instead of being pushed onto the user. ([Tesler's law](tesler.md))
- [ ] People can always see what is happening, undo mistakes, and read words they use themselves. ([Nielsen's 10 heuristics](nielsen.md))

## Feedback and errors

- [ ] Every action responds within about 400 ms, or shows feedback at once while it works. ([Doherty threshold](doherty.md))
- [ ] Anything slower than a second shows progress. ([Loaders & progress](loaders.md))
- [ ] Screens that already show data keep showing it while they refresh, with the time of the last update. ([Last known value (stale-while-revalidate)](lastknown.md))
- [ ] Error messages say what went wrong and how to fix it, in plain words. ([Error states](errors.md))
- [ ] Forms check fields as people go, not only after Submit. ([Inline form validation](validation.md))
- [ ] Empty screens explain what goes there and offer the first step. ([Empty states & onboarding](empty.md))
- [ ] No dark patterns: no pre-ticked boxes, hidden costs or guilt-trip wording. ([Dark patterns](darkpat.md))
- [ ] A failed submit lists every error at the top, with links to the fields. ([Error summary on submit](errsummary.md))
- [ ] Field labels stay visible above the fields, not only as placeholders. ([Label placement](labels.md))
- [ ] Clicking Pay or Submit twice cannot create two orders. ([Double-submit protection](doublesubmit.md))
- [ ] Nothing on the page jumps as images, ads or banners load. ([Reserve space (no layout shift)](reserve.md))

## Accessibility

- [ ] Body text contrast is at least 4.5:1, and the page still works at 200% zoom. ([Accessibility-first (WCAG)](a11y.md))
- [ ] Real buttons, links and labels are used, and icon-only buttons have a name. ([Semantic HTML & ARIA](aria.md))
- [ ] Every control shows a clear focus ring when using the keyboard. ([Visible focus states](focus.md))
- [ ] Color is never the only signal; status also has text or an icon. ([Color-blind safe design](colorblind.md))

## Motion

- [ ] Animation calms down or stops when the system asks for reduced motion. ([Reduced motion](reducedmotion.md))
- [ ] Motion is short and eases out when things enter. ([Easing curves](easing.md))
- [ ] Transitions show where content came from and went. ([Page transitions](transitions.md))
