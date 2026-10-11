## 2025-02-27 - Dynamic ARIA attributes for mobile menu toggles
**Learning:** Screen reader users rely on dynamic `aria-expanded` and updated `aria-label` attributes to understand the current state of toggleable UI elements like mobile menus, which is often missing in static implementations.
**Action:** Always bind the `aria-expanded` state to the visual open/close state in the JavaScript event handlers, and update `aria-label` to reflect the action that will occur on the next click (e.g., "Close menu" when open).
