## 2024-05-24 - [Fix XSS Vulnerability in HTML escaping]
**Vulnerability:** DOM-based HTML escaping (`textContent` to `innerHTML`) failed to escape quotes (`"` and `'`), leading to XSS via attribute injection (e.g. in `<img alt="${escapeHtml(...)}">`).
**Learning:** Assigning text to `textContent` and reading `innerHTML` only escapes `<`, `>`, and `&`, leaving quotes unescaped and vulnerable when placed in HTML attributes.
**Prevention:** Always use regex-based escaping replacing `&`, `<`, `>`, `"`, and `'` with their corresponding HTML entities.
