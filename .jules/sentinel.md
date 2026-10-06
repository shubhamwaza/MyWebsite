## 2023-10-24 - DOM Text Node Assignment Leaves Quotes Unescaped
**Vulnerability:** The `escapeHtml` function relies on DOM text node assignment (`div.textContent = str`), which fails to encode single and double quotes, causing an attribute injection XSS vulnerability.
**Learning:** When escaped strings are used within HTML attributes, they must have quotes encoded. Using DOM text assignment does not provide this protection. Also, inputs must be explicitly cast to strings to prevent Type Confusion bypasses.
**Prevention:** Use comprehensive regex-based escaping and explicitly cast inputs to strings when implementing custom sanitization functions.
