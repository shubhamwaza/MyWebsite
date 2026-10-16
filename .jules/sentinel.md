## 2024-10-16 - Attribute XSS via incomplete textContent escaping
**Vulnerability:** The `escapeHtml` function used the `textContent` to `innerHTML` trick, which escapes `<` and `>`, but leaves `"` and `'` unescaped, allowing attribute XSS when used inside tag attributes (e.g., `alt="${escapeHtml(...)}"`).
**Learning:** Browser native `innerHTML` escaping does not cover quote characters by default because it expects element text content context, not attribute context.
**Prevention:** Always use regex-based escaping mapping `&`, `<`, `>`, `"`, and `'` or dedicated security libraries when injecting user data into HTML contexts, especially attributes.
