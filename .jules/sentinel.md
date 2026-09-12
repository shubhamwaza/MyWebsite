## 2024-09-12 - Fix XSS in `escapeHtml`
**Vulnerability:** DOM-based HTML escaping via `.textContent` fails to escape quote characters (`"`, `'`), making it vulnerable to XSS if the escaped string is injected into an HTML attribute. It is also vulnerable to type-confusion XSS.
**Learning:** `escapeHtml` function returned unmodified output for non-string inputs.
**Prevention:** Use a regex-based `escapeHtml` implementation that explicitly handles and casts non-string inputs and replaces quotes with entity encoding.
