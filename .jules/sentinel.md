
## 2025-02-21 - Fix XSS in attribute contexts
**Vulnerability:** XSS via HTML attribute injection due to flawed `escapeHtml` implementation.
**Learning:** Using DOM assignment (`div.textContent = str; return div.innerHTML;`) to escape HTML fails to encode single and double quotes. If the result is used within HTML attributes, attackers can inject payloads.
**Prevention:** Always use regex-based replacement (e.g. `replace(/[&<>"']/g, ...)`) for robust HTML encoding when injecting strings into attributes.
