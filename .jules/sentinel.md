## 2024-05-18 - Fix XSS vulnerability in escapeHtml
**Vulnerability:** XSS vulnerability in `escapeHtml` function due to DOM-based escaping (`textContent` to `innerHTML`) failing to escape quotes.
**Learning:** In this vanilla JS codebase, using the browser's DOM for HTML escaping fails to escape quotes (`"` and `'`), creating a severe XSS vulnerability when the sanitized string is injected into HTML attributes (e.g. `alt`, `href`, `value`).
**Prevention:** Always use a regex-based `escapeHtml` function to sanitize data that might be injected into HTML attributes. Ensure non-string inputs (like null, undefined) are handled safely to avoid type-confusion.
