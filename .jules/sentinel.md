## 2024-10-24 - Attribute Injection XSS in escapeHtml
**Vulnerability:** The `escapeHtml` function used DOM text node assignment (`textContent`), which fails to encode single and double quotes, leading to Attribute Injection XSS.
**Learning:** The `textContent` method only encodes `<` and `&`, leaving elements vulnerable if the output is used inside HTML attributes (e.g., `alt`).
**Prevention:** Always use comprehensive regex-based escaping that encodes quotes (`"`, `'`) when placing user input within HTML attributes.
