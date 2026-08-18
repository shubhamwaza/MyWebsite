## 2024-05-24 - DOM-based Escape Fails on Quotes
**Vulnerability:** XSS via HTML attribute injection due to unescaped quotes (`"` and `'`).
**Learning:** Using DOM-based escaping (`div.textContent = str; return div.innerHTML;`) successfully escapes `<`, `>`, and `&`, but it completely fails to escape quotation marks. When `escapeHtml` is used inside HTML attributes (like `<img alt="${escapeHtml(value)}" />`), an attacker can inject a double quote to break out of the attribute and inject arbitrary JS, resulting in Cross-Site Scripting (XSS).
**Prevention:** Always use regex-based escaping to explicitly replace `&`, `<`, `>`, `"`, and `'` with their respective HTML entities when writing a custom escaping function in vanilla JS.
