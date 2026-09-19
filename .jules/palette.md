## 2024-05-09 - Accessible Mobile Menus
**Learning:** For a mobile menu toggle button, it's not enough to just have a static `aria-label="Open menu"`. Screen readers need to know the state of the menu (using `aria-expanded`) and what element the button controls (using `aria-controls`), plus the label should update when the menu is open (e.g. "Close menu").
**Action:** Always include `aria-expanded` and dynamically toggle it and the `aria-label` attribute in JavaScript when implementing interactive toggles like menus, accordions, or dialogs.
