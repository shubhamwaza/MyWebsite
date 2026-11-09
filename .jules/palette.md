## 2024-11-20 - Skip to Main Content & Active Link ARIA Roles
**Learning:** Single Page Applications or template-rendered sites often omit foundational accessibility features like "Skip to Main Content" links and `aria-current="page"` markers, which disproportionately impact screen reader and keyboard-only users.
**Action:** Always implement a visually hidden "Skip to Main" link that becomes visible on focus, and ensure the active page in navigation elements receives `aria-current="page"`.
