## 2026-08-26 - Navigation Menu ARIA Synchronization
**Learning:** In JS-rendered dynamic components like mobile navigation menus, adding CSS classes (like `open` or `active`) isn't enough for screen readers. Attributes like `aria-expanded` on the toggle button and `aria-current="page"` on active links must be explicitly toggled in the JavaScript click handlers synchronously with the visual state changes.
**Action:** Always ensure ARIA attributes are updated in tandem with visual toggles in JavaScript event listeners.
