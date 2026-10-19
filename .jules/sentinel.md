## 2024-05-28 - Attribute XSS in escapeHtml Function
**Vulnerability:** The `escapeHtml` function used DOM-based escaping (`textContent` to `innerHTML`), which does not escape quote characters (`"` and `'`). When used in HTML attributes, an attacker could inject quotes to break out of the attribute and execute XSS payloads. Additionally, it lacked type casting, opening up potential Type Confusion bypasses.
**Learning:** The native `textContent` to `innerHTML` conversion only escapes `<`, `>`, and `&`. It leaves quotes unescaped, making it unsafe for attribute contexts.
**Prevention:** Always implement HTML escaping using regex replacements that explicitly cover `<`, `>`, `&`, `"`, and `'`, and cast inputs to a string first using `String(str)` to prevent type confusion.
