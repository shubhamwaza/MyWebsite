## 2024-05-15 - Fix Type Confusion and Attribute XSS in HTML Escaping
**Vulnerability:** The `escapeHtml` function was vulnerable to Type Confusion (not casting input to string) and Attribute XSS (using native DOM `textContent` to `innerHTML` conversion which leaves quote characters unescaped).
**Learning:** Native DOM `textContent` to `innerHTML` conversions do not escape quotes, allowing XSS when the result is placed inside HTML attributes. Also, not casting to string can allow Type Confusion bypasses if objects with custom `toString` are provided.
**Prevention:** Always cast input to a string explicitly and use a regex-based replacement to properly escape `&`, `<`, `>`, `"`, and `'` characters.
