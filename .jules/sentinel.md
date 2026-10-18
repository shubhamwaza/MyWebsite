## 2024-10-18 - XSS bypass in escapeHtml
**Vulnerability:** XSS bypass via unescaped quotes in attributes.
**Learning:** Using `textContent` to `innerHTML` conversion in DOM for HTML escaping fails to escape single and double quotes, leading to XSS when inserted into HTML attributes. Casting to string is also important to prevent Type Confusion.
**Prevention:** Use regex-based string replacements (e.g., `.replace(/"/g, '&quot;')`) and explicit string casting (`String(str)`) for robust HTML escaping.
