## 2024-05-24 - Dynamic ARIA Syncing for JavaScript Menus
**Learning:** In JS-rendered menus that rely on CSS classes (e.g., `open`) for visibility, ARIA attributes like `aria-expanded` and `aria-label` often become unsynced if they are not explicitly updated alongside the class toggle in the JavaScript event handler.
**Action:** Always ensure ARIA attributes are programmatically updated inside the JS event listeners simultaneously with visual state changes (like adding/removing CSS classes).
