## 2024-05-24 - DOM Text Node Assignment Vulnerability
**Vulnerability:** Attribute injection XSS via improper HTML escaping in `escapeHtml`
**Learning:** Using DOM text node assignment (e.g., `div.textContent = str; return div.innerHTML`) fails to encode single and double quotes, leaving the application vulnerable when the output is used inside HTML attributes.
**Prevention:** Always use comprehensive regex-based escaping to encode quotes along with `<`, `>`, and `&` in client-side code.
