## 2024-10-24 - Incomplete HTML Escaping allows Attribute XSS
**Vulnerability:** The `escapeHtml` function in `js/main.js` used a DOM-based approach (`div.textContent = str; return div.innerHTML;`) which escapes `<`, `>`, and `&`, but fails to escape double (`"`) and single (`'`) quotes.
**Learning:** Native DOM textContent to innerHTML conversions leave quotes unescaped, which can lead to Attribute XSS if the escaped string is placed inside an HTML attribute.
**Prevention:** Use a regex-based replacement or a robust escaping library that explicitly escapes `<`, `>`, `&`, `"`, and `'`. Always cast input to a string before escaping to prevent Type Confusion bypasses.
