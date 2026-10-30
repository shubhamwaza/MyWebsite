## 2024-05-24 - Attribute XSS in DOM-based HTML Escaping
**Vulnerability:** The `escapeHtml` function relied solely on `textContent` to `innerHTML` conversion, which leaves single and double quotes unescaped. This allowed for Attribute XSS when used in HTML attributes.
**Learning:** Native DOM text conversion does not escape quotes because quotes are valid text content, not strictly HTML structure tags like `<` and `>`.
**Prevention:** Always cast input to string to prevent type confusion, and explicitly escape quotes using regex replacement when building HTML strings, especially for attribute injection.
