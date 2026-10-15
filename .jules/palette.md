## 2024-10-15 - Accessible Dynamic Filters
**Learning:** When building dynamic client-side filter lists, visual cues (like an `active` class) and visual updates (like DOM replacement) are invisible to screen readers. Relying purely on CSS means users won't know which filter is applied or if the content below actually changed.
**Action:** For filter groups, always use `role="group"` with an `aria-label`, apply `aria-pressed="true/false"` to the toggle buttons, and wrap the dynamic result container in `aria-live="polite"` so content updates are announced automatically.
