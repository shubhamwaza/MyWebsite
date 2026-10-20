## 2026-10-20 - Missing Skip-to-Content Link
**Learning:** Found a missing skip-to-content link for keyboard accessibility. A "skip to main content" link at the top of the body helps keyboard and screen reader users bypass navigation and jump straight to the main content.
**Action:** Add a visually hidden, keyboard-focusable skip link at the top of `renderNav()` in `js/main.js` that points to `<main id="main-content">`, and ensure all HTML pages have `id="main-content"` on their `<main>` elements.
