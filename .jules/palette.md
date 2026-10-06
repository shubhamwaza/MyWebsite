## 2024-05-24 - Mobile Menu Accessibility
**Learning:** The mobile menu toggle lacked `aria-expanded` and didn't update its `aria-label` when opened, which is a common accessibility gap in custom JS menus.
**Action:** Always bind `aria-expanded` state to the visual open/close state of mobile menus and update the `aria-label` to reflect the current action (e.g., "Close menu").
