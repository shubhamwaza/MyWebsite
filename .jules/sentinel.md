## 2026-08-23 - DOM-based escapeHtml XSS vulnerability
**Vulnerability:** XSS vulnerability in `escapeHtml` function allowing attribute breakouts due to unescaped quotes.
**Learning:** In vanilla JS codebases, using DOM-based escaping (`textContent` to `innerHTML`) fails to escape quotes and creates XSS vulnerabilities, especially when injecting escaped strings into HTML attributes.
**Prevention:** Always use regex-based string replacement for `escapeHtml` to ensure quotes (`"`, `'`) and other unsafe characters are fully sanitized, and explicitly handle non-string inputs (e.g., `null`, `undefined`) to avoid type-confusion XSS.
