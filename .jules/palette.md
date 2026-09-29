## 2024-05-24 - Dynamic ARIA states for Mobile Menus
**Learning:** Navigation toggles need dynamically updated `aria-expanded` and `aria-label` attributes to accurately communicate their state to screen readers. Active links should use `aria-current="page"`.
**Action:** Always bind the update of `aria-expanded` and `aria-label` to the menu's open/close logic, and implement `aria-current="page"` when generating active links.
