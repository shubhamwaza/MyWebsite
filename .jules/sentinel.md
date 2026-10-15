## 2025-01-20 - XSS in HTML Attributes due to DOM-based escaping
**Vulnerability:** XSS vulnerability in HTML attributes due to incomplete HTML escaping.
**Learning:** DOM-based escaping (`div.textContent = str; return div.innerHTML;`) does not escape single (`'`) and double (`"`) quotes. This is dangerous because `escapeHtml` is widely used to escape text within HTML attributes (e.g., `alt="${escapeHtml(title)}"`), allowing attackers to break out of attributes and inject malicious scripts.
**Prevention:** Use a regex-based replacement map that explicitly covers `&`, `<`, `>`, `"`, and `'`.
