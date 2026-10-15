## 2025-01-20 - Fix XSS Vulnerability in escapeHtml
**Vulnerability:** Cross-Site Scripting (XSS) via attribute injection.
**Learning:** The previous `escapeHtml` function used DOM-based escaping (`div.textContent = str; return div.innerHTML;`), which escapes `<` and `>`, but fails to escape single or double quotes (`'` or `"`). This is extremely dangerous when the escaped string is injected directly into HTML attributes (like `<img alt="${escapeHtml(...)}" />`), as an attacker can break out of the attribute and inject executable scripts (e.g. `" onload="alert(1)`).
**Prevention:** Always use a regex-based `escapeHtml` function that covers `<`, `>`, `&`, `"`, and `'` when escaping data to be embedded into HTML, especially attributes.
