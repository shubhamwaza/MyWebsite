## 2025-01-20 - Fix Type Confusion and Attribute XSS in escapeHtml
**Vulnerability:** XSS via unescaped quotes in `escapeHtml` and potential Type Confusion XSS.
**Learning:** Using `textContent` to `innerHTML` conversion in the DOM escapes `<`, `>`, and `&`, but it leaves quote characters (`"` and `'`) unescaped, which leads to Attribute XSS when the result is embedded within HTML attributes. Furthermore, without explicit string casting, non-string types can bypass validation.
**Prevention:** Always use a regex-based replacement approach that escapes all five HTML control characters (`&`, `<`, `>`, `"`, `'`) and explicitly cast the input using `String()` before processing.
