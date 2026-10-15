## 2024-05-15 - Fix XSS Vulnerability in escapeHtml
**Vulnerability:** The custom `escapeHtml` function relied on DOM text node assignment (`div.textContent = str; return div.innerHTML;`), which fails to encode single and double quotes. This left the application vulnerable to attribute injection XSS since the output was used inside HTML attributes in template literals.
**Learning:** Never rely on DOM text node assignment for escaping HTML intended for use in attributes. It does not encode quotes, leading to XSS if an attacker provides an attribute-breaking payload (e.g., `"><script>alert(1)</script>`).
**Prevention:** Use a comprehensive regex-based escaping function that replaces `&`, `<`, `>`, `"`, and `'` with their corresponding HTML entities.
