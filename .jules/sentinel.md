## 2024-05-24 - DOM-based HTML Escaping Attribute XSS
**Vulnerability:** The `escapeHtml` function used DOM `textContent` to `innerHTML` conversion, which fails to escape quotation marks (`"` and `'`), leading to Attribute XSS.
**Learning:** Browser native DOM text-to-HTML conversion is designed for text content, not attribute contexts, leaving attributes vulnerable to injection if the output is unquoted or breaks out of quotes.
**Prevention:** Always cast input to a string and use explicit regex replacements to escape `&`, `<`, `>`, `"`, and `'` to ensure safety in all HTML contexts (content and attributes).
