## 2024-10-04 - Fix XSS Vulnerability in HTML Escaping
**Vulnerability:** The `escapeHtml` function used DOM text assignment (`div.textContent = str; return div.innerHTML`), which fails to encode single and double quotes, leading to XSS when output is used in HTML attributes (e.g., `alt` attributes).
**Learning:** Browsers do not automatically escape quotes when serializing text nodes via `innerHTML`, which can lead to attribute injection XSS and type confusion if the input isn't strictly cast to a string.
**Prevention:** Always use regex-based escaping with explicit string casting (`String(str).replace(...)`) for client-side sanitization to comprehensively cover `&`, `<`, `>`, `"`, and `'`.
