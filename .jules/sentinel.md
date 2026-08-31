## 2024-05-24 - Fix DOM-based escapeHtml XSS
**Vulnerability:** The existing `escapeHtml` function used DOM-based escaping (`textContent` to `innerHTML`), which fails to escape quotes when injecting data into HTML attributes, leading to Cross-Site Scripting (XSS).
**Learning:** DOM-based escaping (`textContent`) is unsafe for HTML attributes because it does not encode `'` or `"`. Non-string inputs must also be handled properly to prevent type-confusion.
**Prevention:** Always use regex-based replacements for HTML escaping and ensure non-string inputs are safely cast to strings or handled appropriately.
