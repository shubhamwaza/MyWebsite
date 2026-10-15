## 2024-05-24 - [HIGH] Fix XSS vulnerability in escapeHtml
**Vulnerability:** XSS via HTML attributes due to insecure `escapeHtml` implementation.
**Learning:** In vanilla JS, using DOM-based escaping (`textContent` to `innerHTML`) fails to escape quotes (`"` and `'`). When the output is placed inside HTML attributes, an attacker can break out of the attribute and inject malicious scripts.
**Prevention:** Always use regex-based string replacement for `escapeHtml` that escapes `&`, `<`, `>`, `"`, and `'`. Ensure non-string inputs are handled safely (e.g., returning empty strings for nullish values and explicitly casting other inputs to `String()`).
