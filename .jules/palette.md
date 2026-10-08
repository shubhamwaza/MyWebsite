## 2024-10-08 - Accessible Navigation Menus
**Learning:** Screen readers need to know the state of expandable navigation menus (whether they are open or closed). Hardcoding `aria-label="Open menu"` without an `aria-expanded` attribute leaves assistive technology users without context about the menu's current state.
**Action:** Always include `aria-expanded="false"` on menu toggle buttons and dynamically update it to `"true"` when the menu is opened, and back to `"false"` when closed.
