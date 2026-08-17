## 2024-05-25 - DOM-based HTML Escaping Vulnerability
**Vulnerability:** Incomplete HTML escaping that fails to sanitize quotes.
**Learning:** DOM-based escaping (`div.textContent = str; return div.innerHTML;`) successfully escapes `<` and `>`, but fails to escape single and double quotes. When this unsanitized output is injected into HTML attributes, it creates Cross-Site Scripting (XSS) vulnerabilities.
**Prevention:** Always use regex-based substitution for HTML escaping to ensure all potentially dangerous characters (including `&`, `<`, `>`, `"`, and `'`) are safely encoded.
