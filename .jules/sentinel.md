## 2024-06-15 - Insecure HTML Escaping
**Vulnerability:** XSS vulnerability due to incomplete HTML escaping in `escapeHtml`.
**Learning:** DOM-based escaping (`textContent` to `innerHTML`) fails to escape quotes (`"` and `'`), creating XSS vulnerabilities when the output is injected into HTML attributes.
**Prevention:** Always use regex-based string replacement for HTML escaping in vanilla JS, ensuring all special characters (`&`, `<`, `>`, `"`, `'`) are covered and non-string inputs are handled safely.
