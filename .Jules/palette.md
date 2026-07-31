## 2024-05-24 - Navigation Accessibility
**Learning:** For dynamic navigation menus, adding `aria-current="page"` to active links is essential for screen readers to identify the current page, and mobile menu toggles need `aria-expanded` and dynamic `aria-label` updates to properly convey their state.
**Action:** Always ensure active links use `aria-current="page"` and toggle buttons update `aria-expanded` and `aria-label` attributes.
