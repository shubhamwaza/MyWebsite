## 2026-09-18 - Improve Dynamic ARIA states in navigation
**Learning:** Mobile navigation toggles in plain JS need their `aria-expanded` and `aria-label` updated dynamically to provide accurate context to screen reader users (e.g., changing from 'Open menu' to 'Close menu'), and active navigation links should be identified via `aria-current="page"`.
**Action:** Always verify that interactive custom components correctly manage dynamic ARIA attributes corresponding to their state changes and context.
