## 2024-11-20 - [XSS via insecure HTML escaping]
**Vulnerability:** The `escapeHtml` function in `js/main.js` used DOM text node assignment (`div.textContent = str; return div.innerHTML;`), which fails to encode single and double quotes, leaving the application vulnerable to attribute injection XSS.
**Learning:** Using DOM assignment for HTML escaping is insufficient when the output might be used within HTML attributes, as quotes remain unescaped.
**Prevention:** Use comprehensive regex-based escaping that covers `&`, `<`, `>`, `"`, and `'`. Also handle non-string inputs safely to prevent type-confusion XSS.
