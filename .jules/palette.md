## 2024-10-24 - Dynamic ARIA States for Navigation
**Learning:** In vanilla JS apps, mobile navigation menus often rely solely on CSS classes (`.open`) and icon changes for state, leaving screen readers unaware when the menu is opened or closed, or which page is active.
**Action:** Always bind `aria-expanded` and `aria-label` updates directly to the JavaScript state toggle for menus, and include `aria-current="page"` on active links during render.
