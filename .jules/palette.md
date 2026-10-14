## 2024-10-14 - Navigation & Filter Accessibility
**Learning:** Visual active states (like the `active` CSS class on nav links or filter buttons) are not automatically announced by screen readers, which can leave non-visual users without context of their current page or selected filter.
**Action:** Always use `aria-current="page"` for active navigation links and `aria-pressed="true"`/`false` for toggleable filter buttons to ensure screen readers convey the correct state alongside visual indicators.
