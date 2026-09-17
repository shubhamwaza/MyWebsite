## 2026-10-27 - Dynamic ARIA states in vanilla JS navigation
**Learning:** When building responsive navigation menus without a framework, ensuring proper screen reader experience requires dynamically toggling attributes like `aria-expanded` and contextual `aria-label`s on the menu button, as well as applying `aria-current="page"` to the active links to provide spatial context.
**Action:** Always include event listener updates to toggle these ARIA attributes alongside CSS class changes in vanilla JS interactive components.
