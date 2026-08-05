## 2026-08-05 - Fix DOM-based XSS vulnerability in escapeHtml
**Vulnerability:** The custom `escapeHtml` function relied on setting an element's `textContent` and returning its `innerHTML`, which escapes `<`, `>`, and `&` but does *not* escape quotes (`"` or `'`).
**Learning:** This approach left the app vulnerable to XSS if `escapeHtml` was used within an HTML attribute since an injected quote could break out of the attribute and inject arbitrary scripts (like `onload`).
**Prevention:** Always use regex-based replacement (or a dedicated security library) for `escapeHtml` to ensure comprehensive coverage, explicitly including `&quot;` and `&#39;`.
