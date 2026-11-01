## 2024-05-18 - Fix Attribute XSS Bypass in escapeHtml
**Vulnerability:** The `escapeHtml` function relies on `div.textContent` and `div.innerHTML` which leaves quote characters (`"` and `'`) unescaped, allowing for Attribute XSS. It also doesn't cast input to a string, leading to Type Confusion XSS.
**Learning:** Native DOM `textContent` to `innerHTML` conversions do not escape quotes, which is unsafe when the output is used inside HTML attributes.
**Prevention:** Always explicitly cast input to string and use robust regex-based HTML entity replacements for escaping HTML.
