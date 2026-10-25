## 2024-03-24 - Active Link Accessibility
**Learning:** I found that the main navigation uses an "active" class to visually indicate the current page, but it doesn't convey this state to screen readers.
**Action:** Always add `aria-current="page"` to the active navigation link to ensure screen readers correctly announce the active state.
