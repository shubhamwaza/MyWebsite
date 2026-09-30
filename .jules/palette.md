## 2024-05-30 - Dynamic ARIA on Toggle Buttons
**Learning:** Screen readers need dynamic feedback on toggle buttons to understand their current state. A static `aria-label` without `aria-expanded` leaves users guessing if the menu is open or closed.
**Action:** Always include `aria-expanded="false"` on initialization for toggle buttons and dynamically update both `aria-expanded` and `aria-label` when the state changes.
