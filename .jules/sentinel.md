## 2024-10-11 - DOM-based HTML Escaping Bypass
**Vulnerability:** The `escapeHtml` function relied on `div.textContent = str; return div.innerHTML;`, which does not encode single or double quotes, leading to potential Cross-Site Scripting (XSS) via attribute injection.
**Learning:** Browsers do not encode quotes when assigning text content and reading `innerHTML`. If the escaped string is used in HTML attributes (like `alt="${escapeHtml(...)}"`), an attacker can inject a quote and break out of the attribute.
**Prevention:** Use a regex-based replacement that explicitly encodes `&`, `<`, `>`, `"`, and `'` or use a dedicated library for escaping HTML.
