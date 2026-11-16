# Which should I use?

kindofui build 1012. Answer the questions in order; each answer leads to the next question or to a recommendation with the reason. Interactive version: https://kindofui.vercel.app/?tool=which

## Modal, drawer, popover, tooltip or toast?

Must the person deal with it before doing anything else?
- **Yes:** Is it a short decision, like confirming a delete?
   - **Yes:** **Use: Modal dialog.** It blocks the page on purpose, so keep it to one clear question with two buttons. Esc and Cancel must close it, and focus returns to what opened it. See [Modals & toasts](modal.md).
   - **No:** **Use: Drawer (side sheet).** Longer forms and details fit in a panel that slides in, keeps the page visible behind it, and closes back to where they were. See [Sidebar / drawer](sidebar.md).
- **No:** Is it only telling them something already happened?
   - **Yes:** **Use: Toast.** A short message at the edge that goes away by itself. Add Undo for anything destructive, and never let a toast be the only place important information appears. See [Modals & toasts](modal.md).
   - **No:** Is it attached to one button or item on the page?
      - **Yes:** Will they click things inside it?
         - **Yes:** **Use: Popover.** Opens on click, can hold links and controls, and closes with Esc or a click outside. See [Tooltips & popovers](tooltip.md).
         - **No:** **Use: Tooltip.** A short label on hover and keyboard focus. Touch screens have no hover, so never put information people need to finish the task only in a tooltip. See [Tooltips & popovers](tooltip.md).
      - **No:** **Use: Inline message or banner.** Put the message in the page where it applies. It stays until it is resolved and blocks nothing. See [Error states](errors.md).

## Tabs, segmented control, accordion or stepper?

Must people go through the parts in a fixed order?
- **Yes:** **Use: Stepper / wizard.** Shows where they are and what is left. Use it for checkout and sign-up, and let people go back without losing what they typed. See [Stepper / wizard](stepper.md).
- **No:** Do people need to see more than one part at once, or is the screen narrow with long content?
   - **Yes:** **Use: Accordion.** Sections stack and open in place, which suits phones and FAQs. Write headings people can scan while everything is closed. See [Accordion](accordion.md).
   - **No:** Are the options different views of the same data, like List and Grid or Day, Week and Month?
      - **Yes:** **Use: Segmented control.** A compact switch between 2 to 5 views of the same thing. The content stays the same, only how it is shown changes. See [Tabs & segmented control](tabs.md).
      - **No:** **Use: Tabs.** Separate panels of related content on one page. Keep labels short, and few enough tabs that they fit without scrolling. See [Tabs & segmented control](tabs.md).

## Pagination, infinite scroll or Load more?

Do people need to find an item again, share their place, or reach the footer?
- **Yes:** **Use: Pagination.** Numbered pages give a sense of place and size, work with the Back button, and keep the footer reachable. Best for search results and catalogs. See [Infinite scroll vs pagination](infinite.md).
- **No:** Is it a casual feed people scroll without a goal?
   - **Yes:** **Use: Infinite scroll.** Loads more as they reach the bottom, which suits social and media feeds. Keep their place when they come back, and do not hide important links in a footer they can never reach. See [Infinite scroll vs pagination](infinite.md).
   - **No:** **Use: Load more button.** A middle ground: the list grows only when they ask, so they stay in control and the footer stays reachable. See [Infinite scroll vs pagination](infinite.md).

## Which main navigation?

Will it be used mostly on phones?
- **Yes:** Are there 3 to 5 main sections people switch between often?
   - **Yes:** **Use: Bottom tab bar.** The main sections stay one thumb tap away and always visible. Use icons with text labels. See [Bottom tab bar](tabbar.md).
   - **No:** Is there one main action, like Compose or Add?
      - **Yes:** **Use: Floating action button.** One clear button for the most common action, in easy reach. Keep it to one action, not a menu of everything. See [Floating action button (speed dial)](fab.md).
      - **No:** **Use: Hamburger menu.** Fine for secondary links, but hidden menus get used less, so keep the most used sections visible on screen. See [Hamburger menu](hamburger.md).
- **No:** Is it a website people read, or an app people work in?
   - **Website:** Hundreds of categories, like a big shop or news site?
      - **Yes:** **Use: Mega menu.** Shows many categories at once in a grouped panel. Make it work with the keyboard and on click, not only on hover. See [Mega menu](mega.md).
      - **No:** **Use: Top navbar (sticky header).** The standard most sites use, so people know it already. Keep it short so it does not eat small screens. See [Top navbar (sticky header)](stickynav.md).
   - **App:** More than 7 places to go, or nested sections?
      - **Yes:** **Use: Sidebar.** Room for many sections and nesting. Let it collapse on smaller screens, and add a command palette for power users. See [Sidebar / drawer](sidebar.md).
      - **No:** **Use: Navigation rail.** A slim bar for 3 to 7 destinations that leaves room for the work. Always show labels. See [Navigation rail](navrail.md).

## Spinner, skeleton, progress bar or last known value?

Is there already data on screen from before, like numbers on a dashboard or an inbox list?
- **Yes:** **Use: Keep the last known value.** Leave the old data on screen with a small "Updating" note and when it was last updated, then change the values in place without moving anything. People keep reading the whole time, and a wait that keeps you busy feels shorter than an empty one. Only the very first load, when there is nothing to show yet, needs a skeleton. See [Last known value (stale-while-revalidate)](lastknown.md).
- **No:** Does it usually finish in under about one second?
   - **Yes:** **Use: No loader, just instant feedback.** Under a second, a loader only flashes and distracts. Respond to the click at once, for example with a pressed state or an optimistic update. See [Doherty threshold](doherty.md).
   - **No:** Can you tell how far along it is, like a percentage, steps or file size?
      - **Yes:** **Use: Progress bar.** Real progress makes waiting easier and tells people whether to wait. Show steps or time left for long jobs, and let them cancel. See [Loaders & progress](loaders.md).
      - **No:** Are you loading a page or list whose layout you already know?
         - **Yes:** **Use: Skeleton screen.** Grey shapes in the final layout make the page feel faster and stop it jumping when content arrives. A common rule of thumb: wait about 300 ms before showing it, and once shown keep it about 500 ms, so fast loads never flash. See [Skeleton loading](skeleton.md).
         - **No:** **Use: Spinner.** Fine for short, unknown waits on one action. Wait about 300 ms before showing it so fast actions never flash (a rule of thumb). If it can take more than about 10 seconds, switch to a progress message and let people cancel. See [Loaders & progress](loaders.md).

## Confirm dialog or Undo?

Can the action be reversed?
- **Yes:** **Use: Do it, then offer Undo.** Asking "Are you sure?" for every action trains people to click Yes without reading. Act at once and show a toast with Undo. See [Modals & toasts](modal.md).
- **No:** Is the loss big, like deleting an account, paying, or sending to many people?
   - **Yes:** **Use: Confirm dialog that names the thing.** Say exactly what will happen ("Delete Northwind and its 24 files?") and label the button with the action, not OK. For the biggest losses, ask them to type the name. See [Modals & toasts](modal.md).
   - **No:** **Use: Do it, then offer Undo.** For small losses a confirm step only slows people down. Act at once and let them undo. See [Modals & toasts](modal.md).

## When should a form show errors?

Is the field hard to get right the first time, like a new password or a username that may be taken?
- **Yes:** **Use: Show progress as they type, errors after they leave.** Tick the rules off as they are met instead of showing errors while people are still typing. Show a real error only once they move on. Source: Baymard on inline validation (2024). See [Password field done right](password.md).
- **No:** Is the person submitting the whole form right now?
   - **Yes, they pressed Submit:** **Use: Error summary on top plus a message at each field.** List every problem at the top, link each one to its field and move focus there; keep the message next to each field too. Source: GOV.UK Design System. See [Error summary on submit](errsummary.md).
   - **No, still filling it in:** **Use: Check each field when they leave it.** Wait until the person moves on, then say what is wrong, and clear the message on the keystroke that fixes it. The research is mixed: a 2009 test (Wroblewski) favoured checking after each field, a 2007 study (Bargas-Avila et al.) favoured the end of the form. Test with your own users. See [Inline form validation](validation.md).

## Switch, checkbox or radio buttons?

Does the change apply at once, with no Save button?
- **Yes:** **Use: Switch.** A switch is an instant on or off, like a light switch. Never put switches in a form that waits for Save. Source: NN/g on toggle switches (2018). See [Settings page](settings.md).
- **No:** Is it a single yes or no inside a form that gets submitted?
   - **Yes:** **Use: One checkbox.** Use it for one yes or no that applies when the form is sent, like "Email me the receipt". Word it so that ticked means yes. Source: NN/g on checkboxes and radio buttons (2004).
   - **No:** Can people pick more than one option?
      - **Yes, any number:** **Use: Checkboxes.** Each option is independent, like filters, so show them all and let people tick any number. Source: NN/g (2004). See [Faceted search & filters](facets.md).
      - **No, exactly one:** **Use: Radio buttons.** Exactly one choice from a short list. Show every option, and preselect one or offer an explicit "None". Source: NN/g (2004).

## Radio buttons, dropdown or autocomplete?

Could you ask a simpler question that needs fewer options?
- **Yes:** **Use: Ask the simpler question first.** Fewer options beat any control. Rewrite the question, split it, or use what you already know about the person.
- **No:** Do people already know their answer, like their country, city or company?
   - **Yes:** **Use: Autocomplete.** Let people type and pick from matches. It handles long lists that a dropdown makes painful. See [Autocomplete](autocomplete.md).
   - **No:** Do all the options fit on screen?
      - **Yes:** **Use: Radio buttons.** Every choice is visible at once, easy to compare and easy to tap. Source: NN/g (2004).
      - **No:** **Use: Dropdown, as a last resort.** Only for a medium list people browse when space is tight. In GOV.UK testing people struggled to close dropdowns, tried to type in them and missed that they scroll. No study gives a reliable option count to switch at.

## Filters: update live or use an Apply button?

Is this a filter sheet on a phone?
- **Yes:** **Use: Apply button.** On phones, let people set several filters in the sheet and apply once, so the page does not reload under their thumb. Source: NN/g on applying filters (2016). See [Faceted search & filters](facets.md).
- **No:** Do results update almost instantly, well under a second?
   - **Yes:** Are people exploring rather than knowing exactly what they want?
      - **Exploring:** **Use: Update live.** Instant results let people see what each filter does and explore. Dim the results briefly while they update. Source: NN/g (2016). See [Faceted search & filters](facets.md).
      - **They know what they want:** **Use: Apply button.** When people know several criteria up front, one Apply saves them from watching the page reload after every tick. Source: NN/g (2016). See [Faceted search & filters](facets.md).
   - **No:** **Use: Apply button.** When results take a while, live filters freeze the page between every tick. Let people set them all, then apply once. Source: NN/g (2016). See [Faceted search & filters](facets.md).

## Toast, inline message, banner or dialog?

Is it an error the person has to fix?
- **Yes:** **Use: Inline message.** Put it next to the field or button it is about and keep it until it is fixed. Never a toast for errors. Sources: NN/g (2024); WCAG 2.2 Status Messages. See [Inline message vs toast](inlinestatus.md).
- **No:** Does it block progress or need a decision?
   - **Yes:** **Use: Dialog.** Stop the page on purpose for a decision, with buttons named after the action. Return focus to where the person was when it closes. See [Modals & toasts](modal.md).
   - **No:** Is it about the whole page or app, like being offline or a trial ending?
      - **Yes:** **Use: Banner.** A bar at the top that stays until the situation changes, with what to do next. See [Error states](errors.md).
      - **No:** **Use: Toast, with care.** Fine for a small confirmation of something the person just did, ideally with Undo. Keep it on screen long enough to read, announce it as a status, and make the result findable elsewhere. Source: Adrian Roselli on toast messages. See [Modals & toasts](modal.md).
