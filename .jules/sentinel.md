## 2026-09-20 - [Fix Attribute Injection XSS in escapeHtml]
**Vulnerability:** The `escapeHtml` function used DOM text node assignment (`div.textContent = str; return div.innerHTML`), which fails to encode single and double quotes, leaving the application vulnerable to attribute injection XSS when the output is used inside HTML attributes.
**Learning:** Using DOM assignment for HTML escaping is insufficient for attributes because it does not encode quotes.
**Prevention:** Use a comprehensive regex-based escaping function that handles all relevant characters (`&`, `<`, `>`, `"`, `'`) and safely processes non-string inputs.
