## 2024-05-31 - Fix XSS Vulnerability in escapeHtml
**Vulnerability:** The existing `escapeHtml` function used a DOM-based approach (`textContent` to `innerHTML`) which failed to properly escape single and double quotes, causing an XSS vulnerability when user inputs are injected into HTML attributes.
**Learning:** DOM textContent -> innerHTML is insufficient for escaping strings destined for HTML attributes, as quotes remain unescaped. Always use regex-based replacements or a dedicated sanitization library for comprehensive coverage.
**Prevention:** Always use regex to properly escape `&`, `<`, `>`, `"`, and `'` or use established secure libraries for data destined to HTML elements or attributes.
