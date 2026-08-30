## 2024-05-18 - Fix XSS Vulnerability in escapeHtml
**Vulnerability:** DOM-based HTML escaping (`textContent` to `innerHTML`) failed to escape quotes, allowing XSS injections in HTML attributes.
**Learning:** The native `div.textContent` approach escapes `<`, `>`, and `&`, but leaves `"` and `'` unescaped, which is dangerous when injected into attributes like `alt` or `href`. Also, non-string inputs can cause type-confusion XSS if not handled.
**Prevention:** Always use regex-based replacement that explicitly handles `&`, `<`, `>`, `"`, and `'`. Also handle nullish values and cast inputs to string safely.
