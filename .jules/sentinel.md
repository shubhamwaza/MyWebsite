## 2024-05-18 - [Fix XSS vulnerability in HTML escaping]
**Vulnerability:** The custom `escapeHtml` function relied on `document.createElement("div").textContent` to sanitize strings.
**Learning:** This DOM-based method only escapes `<` and `>`, leaving `"` and `'` unescaped. Since `escapeHtml` is widely used to insert dynamic user data into HTML attributes (e.g. `alt="${escapeHtml(title)}"`), this creates a severe Cross-Site Scripting (XSS) vulnerability. An attacker can break out of the attribute and inject malicious event handlers (like `onerror` or `onload`).
**Prevention:** Use a regex-based `replace` approach that explicitly covers all 5 critical entities: `&`, `<`, `>`, `"`, and `'`.
