## 2024-05-23 - DOM textContent Attribute XSS and Type Confusion
**Vulnerability:** The `escapeHtml` function used `div.textContent = str; return div.innerHTML;` which fails to escape quotes (`"` and `'`), leading to Attribute XSS. Additionally, it lacked explicit string casting, making it vulnerable to Type Confusion XSS bypasses.
**Learning:** Native DOM `textContent` to `innerHTML` conversions leave quotes unescaped. Without explicit `String()` casting, certain object types can bypass text processing.
**Prevention:** Always explicitly cast input to a string (`String(str)`) before sanitization. Use regex-based replacement to properly escape quote characters (`"` and `'`) to prevent Attribute XSS.
