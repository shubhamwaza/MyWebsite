## 2024-05-24 - escapeHtml attribute injection XSS
**Vulnerability:** The custom `escapeHtml` function relies on DOM text node assignment (`div.textContent = str; return div.innerHTML`), which does not encode single and double quotes. This allows attribute injection XSS when the output is used inside HTML attributes.
**Learning:** DOM text node assignment is insufficient for escaping strings that will be interpolated into HTML attributes, as quotes remain unescaped.
**Prevention:** Always use a comprehensive regex replacement for HTML escaping (`&`, `<`, `>`, `"`, `'`) to ensure all potentially dangerous characters are encoded, regardless of context.
