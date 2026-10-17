## 2024-10-24 - Fix Attribute Injection in escapeHtml bypass
**Vulnerability:** The custom `escapeHtml` function used `textContent` to `innerHTML` conversion, which fails to escape quote characters (`"` and `'`), leading to Attribute Injection when used in HTML attributes.
**Learning:** Native DOM serialization of text nodes via `innerHTML` only escapes `<`, `>`, and `&`. It leaves quotes unescaped. When this function is used to escape attributes (e.g., `alt="..."`), attackers can break out using double quotes.
**Prevention:** Use regex-based replacement to properly escape all HTML special characters (including quotes) and explicitly cast inputs to strings to prevent Type Confusion bypasses.
