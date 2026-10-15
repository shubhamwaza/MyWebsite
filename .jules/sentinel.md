## 2024-05-24 - Fix Insecure DOM-based escapeHtml

**Vulnerability:** The existing `escapeHtml` function relies on `textContent` to `innerHTML` conversion, which fails to escape single and double quotes. This allows XSS attacks when the escaped string is injected into HTML attributes (e.g., `alt`, `href`, or `class`).
**Learning:** In vanilla JS, DOM-based escaping (`textContent` to `innerHTML`) is insecure for attribute contexts because it only escapes `<`, `>`, and `&`. It does not escape `'` or `"`.
**Prevention:** Always use a regex-based `escapeHtml` function or a dedicated sanitization library to replace all HTML-sensitive characters (`&`, `<`, `>`, `"`, `'`) with their respective HTML entities.
