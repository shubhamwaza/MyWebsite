## 2026-09-16 - Add ARIA expanded and Escape key support to mobile menu
**Learning:** Mobile menus without `aria-expanded` and Escape key support trap keyboard users and fail to communicate their state to screen readers.
**Action:** Always add `aria-expanded` to toggle buttons, update it dynamically, and ensure the Escape key closes the menu and returns focus to the toggle button.
