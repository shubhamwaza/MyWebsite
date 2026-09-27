## 2024-05-24 - Navigation State Accessibility
**Learning:** The mobile menu toggle button lacked `aria-expanded` and dynamic `aria-label` updates, while active links lacked `aria-current="page"`. This pattern is common in static sites where DOM is dynamically updated without native framework routing.
**Action:** Always ensure toggleable UI elements update their `aria-expanded` state and icon-only buttons update their `aria-label` to reflect the new state ("Open menu" -> "Close menu") for screen reader users. Use `aria-current="page"` on navigation menus.
