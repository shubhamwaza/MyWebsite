## 2025-05-15 - [XSS via DOM-based Escape]
**Vulnerability:** Cross-Site Scripting (XSS) vulnerability caused by using `textContent` to `innerHTML` for escaping HTML in `escapeHtml` function.
**Learning:** DOM-based escaping (`textContent` to `innerHTML`) fails to escape quotes (`"` and `'`), making it unsafe when the output is placed inside HTML attributes, leading to XSS vulnerabilities.
**Prevention:** Always use regex-based replacement to explicitly escape `&`, `<`, `>`, `"`, and `'`, and safely handle non-string inputs (e.g. `null`).
