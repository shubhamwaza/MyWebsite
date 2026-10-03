## 2024-05-15 - Dynamic ARIA attributes and keyboard support for mobile menus
**Learning:** Hardcoding `aria-label="Open menu"` on toggle buttons creates a confusing experience for screen reader users when the menu is already open, and lacking an `Escape` key listener leaves keyboard users trapped.
**Action:** Always dynamically update `aria-expanded` and `aria-label` via JavaScript when toggling menu states, use `aria-controls` to link the button to the menu, and ensure `Escape` closes the menu and restores focus.
