## 2024-10-09 - Fix attribute injection XSS in escapeHtml
**Vulnerability:** The `escapeHtml` function used DOM text node assignment (`textContent`), which fails to encode single and double quotes, leading to attribute injection XSS since the output is used in HTML attributes.
**Learning:** Using `textContent` for HTML escaping is insufficient when the output is used inside HTML attributes, and it doesn't protect against Type Confusion XSS.
**Prevention:** Use comprehensive regex-based escaping and explicitly cast input to a string.
