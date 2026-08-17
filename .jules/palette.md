## 2024-10-24 - Dynamic ARIA State in Vanilla JS
**Learning:** In vanilla JS setups without reactive frameworks, ARIA attributes (like `aria-expanded`, `aria-label`, and `aria-current`) must be manually and simultaneously toggled alongside visual state classes (like `.open`) to maintain accessibility state for screen readers.
**Action:** Always verify that JavaScript toggle functions also update relevant ARIA attributes, not just DOM classes, to keep the UI accessible.
