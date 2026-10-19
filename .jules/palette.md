## 2024-10-19 - [Navigation Aria Current]
**Learning:** Screen reader users rely on programmatic state to understand their context within a site. When building custom JavaScript-rendered navigation menus like `renderNav()` in `js/main.js`, visually active states (like the `.active` CSS class mapped to `DESKTOP_NAV_LINKS` and `ALL_NAV_LINKS`) are invisible to screen readers unless explicitly marked.
**Action:** Next time I implement or review a dynamic navigation menu, ensure `aria-current="page"` is dynamically applied to the active route link alongside the visual active class.
