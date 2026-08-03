## 2026-05-15 - DOM-based HTML escaping bypass
**Vulnerability:** XSS vulnerability in `escapeHtml` implementation due to using `div.textContent = str; return div.innerHTML;`
**Learning:** Setting `textContent` and reading `innerHTML` correctly escapes `<` and `>`, but **it does not escape quotes (`"` or `'`)**. This is a dangerous anti-pattern when the output is used in HTML attributes (e.g. `alt="${escapeHtml(value)}"`). An attacker can easily break out of the attribute using a quote and inject malicious handlers like `onclick` or `onerror`.
**Prevention:** Never use the DOM for HTML escaping if the output is going into attributes. Always use regex string replacement for `&`, `<`, `>`, `"`, and `'`.
