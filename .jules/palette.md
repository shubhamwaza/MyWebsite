## 2023-10-25 - ARIA state synchronization in vanilla JS
**Learning:** When implementing or updating JS-rendered dynamic UI components (like navigation menus) in vanilla JS, it is critical to ensure that ARIA attributes (e.g., `aria-expanded`, `aria-label`, `aria-controls`, `aria-current`) are toggled simultaneously with CSS classes or states in the JavaScript logic.
**Action:** Always update ARIA attributes in the same event handlers where CSS classes are toggled to ensure screen readers stay perfectly synced with the visual state.
