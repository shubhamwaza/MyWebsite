## 2024-05-23 - Prevent Attribute Injection XSS in escapeHtml
**Vulnerability:** DOM-based text node assignment for `escapeHtml` does not encode quotes.
**Learning:** Using `div.textContent = str; return div.innerHTML;` fails to escape single and double quotes, leaving the application vulnerable to attribute injection XSS when the result is used within HTML attributes.
**Prevention:** Use comprehensive regex-based escaping to safely encode all special HTML characters (including quotes) for both text and attributes.
