## 2024-05-24 - DOM-based HTML Escaping Incomplete
**Vulnerability:** The escapeHtml function used document.createElement('div').textContent = str; return div.innerHTML.
**Learning:** This method fails to encode single and double quotes, leaving the application vulnerable to attribute injection XSS if the output is used inside HTML attributes.
**Prevention:** Always use comprehensive regex-based escaping (replacing &, <, >, ", ') for client-side HTML escaping to ensure safe interpolation in all contexts.
