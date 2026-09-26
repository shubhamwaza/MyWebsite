## 2026-03-10 - ARIA Label Escaping Issue
**Learning:** Found a potential attribute injection XSS issue where DOM text node assignment (`textContent` and then `.innerHTML`) was used to escape strings, which doesn't properly escape quotes for use in HTML attributes like `alt` and `aria-label`.
**Action:** Always use comprehensive regex-based escaping when placing user data into HTML attributes, especially when constructing UI elements dynamically.

## 2026-03-10 - Mobile Menu Accessibility
**Learning:** Found that the mobile menu toggle button (`#navToggle`) lacks `aria-expanded` attributes and dynamically updated `aria-label`s to indicate state changes (open vs closed) to screen reader users.
**Action:** Always ensure that interactive elements that toggle visibility of other content have `aria-expanded` attributes that update dynamically, and provide appropriate descriptive labels for both states.
