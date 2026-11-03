## 2024-05-24 - Attribute XSS and Type Confusion in DOM-based escaping
**Vulnerability:** The `escapeHtml` function relied on setting `textContent` and reading `innerHTML`, which fails to escape quotes (`"` and `'`), allowing Attribute XSS. It also lacked type casting, allowing Type Confusion XSS.
**Learning:** Native DOM text-to-HTML escaping does not secure attribute contexts where quotes must be escaped, and fails to handle non-string types safely.
**Prevention:** Always use comprehensive regex-based HTML escaping (`&`, `<`, `>`, `"`, `'`) and explicitly cast inputs to strings (e.g., `String(str)`) before sanitization.
