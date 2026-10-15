## 2024-05-18 - Fix DOM-based HTML Escaping
**Vulnerability:** XSS via unescaped quotes in HTML attributes because `escapeHtml` used DOM-based escaping (`textContent` to `innerHTML`), which does not escape `"` or `'`.
**Learning:** DOM-based escaping only escapes `<`, `>`, and `&`. It fails to escape quotes, leaving attributes vulnerable to injection (e.g. `alt="${escapeHtml(title)}"`).
**Prevention:** Always use regex-based string replacement for HTML escaping in plain JS, particularly when substituting variables into HTML attributes.
