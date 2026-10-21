## 2024-05-18 - Fix Attribute and Type Confusion XSS in escapeHtml
**Vulnerability:** The `escapeHtml` function relied on DOM `textContent` assignment, which leaves quotes unescaped and is vulnerable to Type Confusion if non-strings are passed.
**Learning:** Native DOM `textContent` to `innerHTML` conversions leave quotes (`"` and `'`) unescaped, leading to Attribute XSS. Failing to cast inputs allows DOM Clobbering or Type Confusion bypasses.
**Prevention:** Explicitly cast input to String before sanitization and use regex replacement for all 5 HTML-sensitive characters (`&`, `<`, `>`, `"`, `'`).
