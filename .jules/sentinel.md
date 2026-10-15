## 2024-10-24 - DOM-based escaping leaves attributes vulnerable
**Vulnerability:** XSS vulnerability via unescaped quotes in `escapeHtml`.
**Learning:** Using `div.textContent = str; return div.innerHTML;` for escaping HTML is dangerous for attributes because it does not escape quotes (`"` or `'`), leading to XSS when the escaped value is injected into an HTML attribute.
**Prevention:** Always use regex-based escaping or a dedicated library to safely handle all HTML special characters (`&`, `<`, `>`, `"`, `'`) and handle nullish/non-string inputs.
