## 2024-05-18 - Pair visual state with ARIA attributes
**Learning:** Adding `.active` classes to nav links and filter buttons changes visual styling but doesn't convey state to screen readers.
**Action:** Always pair visual active states with `aria-current="page"` for nav links and `aria-pressed="true"` for toggle buttons.
