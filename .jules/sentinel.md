## 2026-08-13 - Insecure DOM-based HTML escaping
**Vulnerability:** XSS vulnerability via unescaped quotes in HTML attributes.
**Learning:** Using DOM-based escaping (`textContent` to `innerHTML`) fails to escape quotes (like `"` and `'`), which creates XSS vulnerabilities when the output is injected into HTML attributes.
**Prevention:** In this vanilla JS codebase, always use a regex-based `escapeHtml` function to properly sanitize data injected into HTML, ensuring all unsafe characters are escaped.
