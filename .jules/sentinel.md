## 2024-10-26 - Insecure HTML Escaping in escapeHtml
**Vulnerability:** The `escapeHtml` function in `js/main.js` used native DOM `textContent` to `innerHTML` conversion which leaves quotes (`"` and `'`) unescaped, leading to Attribute XSS. It also lacked string casting, making it susceptible to Type Confusion XSS bypasses if non-string types were passed.
**Learning:** Relying on DOM methods for HTML escaping is insufficient for rendering user input into HTML attributes.
**Prevention:** Always use regex-based string replacements to escape `<`, `>`, `&`, `"`, and `'`, and explicitly cast input to a string (e.g., `String(str)`) before processing.
