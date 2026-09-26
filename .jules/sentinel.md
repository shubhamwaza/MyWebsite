## 2024-09-26 - Fix Attribute Injection XSS
**Vulnerability:** The `escapeHtml` function relies on DOM text node assignment (`div.textContent = str; return div.innerHTML`), which fails to encode single and double quotes.
**Learning:** This leaves the application vulnerable to attribute injection XSS because the output is used inside HTML attributes.
**Prevention:** Use comprehensive regex-based escaping instead of relying on DOM text node assignment, especially when the output is placed inside HTML attributes.
