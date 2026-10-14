## 2024-05-24 - DOM-based HTML Escaping Bypass
**Vulnerability:** The `escapeHtml` function used a DOM-based approach (`div.textContent = str; return div.innerHTML;`), which doesn't escape quotes (`"` and `'`). This leads to XSS vulnerabilities when used in HTML attributes.
**Learning:** DOM `innerHTML` generation is optimized for element text context, not attribute context. Therefore, it does not safely encode characters that are crucial for attribute injection.
**Prevention:** Always use regex-based string replacement that explicitly covers `&`, `<`, `>`, `"`, and `'` when escaping strings for general HTML inclusion (both elements and attributes), and explicitly cast the input to a string first to avoid type confusion.
