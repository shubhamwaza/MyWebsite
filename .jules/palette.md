## 2025-01-20 - Add aria-current for active links
**Learning:** Relying solely on visual cues (like an `.active` class) to indicate the current page in navigation menus leaves screen reader users without important context about their location within the site structure.
**Action:** Always include `aria-current="page"` on navigation links that represent the currently active page. This provides a semantic, accessibility-friendly indicator of the user's location.
