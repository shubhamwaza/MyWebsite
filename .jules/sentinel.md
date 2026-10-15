## 2024-05-24 - Attribute Injection XSS in escapeHtml
**Vulnerability:** The `escapeHtml` function relied on `document.createElement('div').textContent`, which fails to escape single and double quotes, allowing attribute injection XSS.
**Learning:** Assigning to `.textContent` only escapes `<` and `&`, leaving attributes vulnerable when the escaped string is used in them (e.g., `alt="..."`).
**Prevention:** Always use comprehensive regex-based escaping or a robust library for HTML entities, explicitly casting to string to avoid type confusion.
