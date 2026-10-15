## 2024-05-18 - Fix XSS vulnerability in HTML escaping
**Vulnerability:** DOM-based HTML escaping (`textContent` to `innerHTML`) in `escapeHtml` function.
**Learning:** Assigning a string to an element's `textContent` and then reading its `innerHTML` correctly escapes `&`, `<`, and `>`, but it *fails* to escape single (`'`) and double (`"`) quotes. This becomes a Cross-Site Scripting (XSS) vulnerability when the escaped output is subsequently injected into an HTML attribute (e.g., `<img alt="${escapeHtml(userInput)}">`), as an attacker can break out of the attribute by supplying a quote.
**Prevention:** Always use regex-based substitution that explicitly covers `&`, `<`, `>`, `"`, and `'` for HTML escaping, especially when the output may be embedded inside attributes.
