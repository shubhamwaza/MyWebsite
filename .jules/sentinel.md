## 2024-06-05 - Incomplete HTML Escaping
**Vulnerability:** The `escapeHtml` function failed to escape double quotes and did not enforce string casting, leading to attribute injection XSS and potential type confusion bypasses.
**Learning:** Relying on DOM `textContent` for HTML escaping is insufficient when the output is rendered inside HTML attributes, as quotes remain unescaped.
**Prevention:** Always use explicit regex replacement for all dangerous characters (`&`, `<`, `>`, `"`, `'`) and cast input to a string (`String(str)`) before sanitization.
