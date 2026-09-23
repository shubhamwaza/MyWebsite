## 2024-05-18 - Improve Mobile Menu Accessibility
**Learning:** Custom toggle menus implemented without semantic `<details>`/`<summary>` require explicit management of `aria-expanded`, `aria-label`, and `aria-controls` to be accessible to screen readers, especially when changing icons dynamically.
**Action:** Always ensure ARIA attributes are updated via JS in sync with the visual and state changes of custom navigation toggles.
