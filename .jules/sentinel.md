## 2024-10-02 - Fix Attribute Injection XSS in escapeHtml
**Vulnerability:** The `escapeHtml` function used DOM text node assignment (`textContent`), which fails to encode single and double quotes, leaving the app vulnerable to attribute injection XSS.
**Learning:** Using the DOM for HTML escaping does not cover attributes natively and should be avoided if output is placed inside tags. Also, inputs should be explicitly cast to strings to avoid Type Confusion bypasses.
**Prevention:** Use a comprehensive regex-based escaping function that replaces all critical entities (`&`, `<`, `>`, `"`, `'`) and casts to string first.
