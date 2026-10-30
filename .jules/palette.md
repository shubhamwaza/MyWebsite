## 2023-11-01 - Add semantic state to interactive elements
**Learning:** The navigation links and category filter buttons in this design system rely entirely on visual CSS classes (`active`) to indicate state, failing to provide screen reader users with necessary context about their current location or selected filters.
**Action:** Ensure active navigation links always include `aria-current="page"` and toggle buttons always use `aria-pressed` to communicate their state semantically.
