## 2026-08-07 - Inadequate escapeHtml Implementation
**Vulnerability:** The `escapeHtml` function implemented via DOM `textContent` did not escape single and double quotes, leaving the application vulnerable to XSS if the escaped string was used in HTML attributes.
**Learning:** Using DOM assignment to escape HTML is a common anti-pattern that misses quotes. It's safer to use explicit string replacement for all dangerous characters (`&`, `<`, `>`, `"`, `'`).
**Prevention:** Use standard regex-based string replacement or a trusted library for HTML escaping.
