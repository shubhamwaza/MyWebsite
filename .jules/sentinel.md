## 2024-10-24 - XSS via Insecure escapeHtml
**Vulnerability:** The `escapeHtml` function in `js/main.js` was using `div.textContent = str; return div.innerHTML;` which does not escape quotes, allowing Attribute XSS. It also lacked string casting, making it vulnerable to Type Confusion.
**Learning:** Native DOM `textContent` to `innerHTML` conversions do not escape quotes, which is problematic when the escaped string is used in HTML attributes.
**Prevention:** Use regex-based replacement to explicitly escape `&`, `<`, `>`, `"`, and `'` and always cast input to a string.
