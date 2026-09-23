## 2024-05-24 - Dynamic ARIA attributes for mobile menu toggle
**Learning:** Screen readers need context of a toggle button's current state, especially for off-canvas mobile menus where visual cues aren't accessible. An initial `aria-label` is insufficient when the button's action toggles between opening and closing.
**Action:** Always dynamically update `aria-expanded` and `aria-label` attributes on navigation toggle buttons in JavaScript to reflect the current UI state.
