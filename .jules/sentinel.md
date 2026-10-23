## 2026-10-23 - DOM-based escaping Attribute XSS bypass
**Vulnerability:** The `escapeHtml` function used DOM `textContent` assignment which leaves quotes unescaped, leading to Attribute XSS in attributes like `alt="${escapeHtml(project.title)}"`.
**Learning:** Native DOM `textContent` to `innerHTML` conversion escapes `<`, `>`, and `&`, but not `"` or `'`.
**Prevention:** Always use regex-based escaping with explicit replacement of all special characters including quotes, and explicitly cast inputs to a string to prevent Type Confusion.
