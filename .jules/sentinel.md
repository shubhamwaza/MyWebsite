## 2024-05-24 - Attribute Injection XSS
**Vulnerability:** escapeHtml used DOM textContent assignment, failing to encode quotes.
**Learning:** When escaping HTML in client-side code, do not rely on DOM text node assignment (e.g., document.createElement('div').textContent = str; return div.innerHTML) if the output will be used inside HTML attributes, as this method fails to encode single and double quotes, leaving the application vulnerable to attribute injection XSS. Use comprehensive regex-based escaping instead.
**Prevention:** Use regex replacement for &, <, >, ", and ' when escaping HTML.
