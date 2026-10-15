## 2024-05-18 - XSS in DOM Text Node Escape Function
**Vulnerability:** The `escapeHtml` function relied on assigning to a DOM text node (`div.textContent = str; return div.innerHTML;`). This failed to escape single and double quotes, creating a risk for Attribute Injection XSS.
**Learning:** DOM text node assignment is not suitable for escaping data that will be placed inside HTML attributes, as it leaves quotes unescaped. It also behaves unpredictably with non-string inputs.
**Prevention:** Use a dedicated regex-based string replacement approach that comprehensively escapes all necessary HTML entities (`&`, `<`, `>`, `"`, `'`) and safely handles non-string values (e.g. `null`).
