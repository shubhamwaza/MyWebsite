## 2024-11-06 - Incomplete HTML Escaping (Attribute XSS)
**Vulnerability:** The custom `escapeHtml` function used DOM textContent to innerHTML conversion, which does not escape quotes (`"` and `'`).
**Learning:** When this unescaped string is injected into HTML attributes (like `<img alt="${escapeHtml(project.title)}">`), an attacker can break out of the attribute by using quotes and inject malicious code (e.g. `onload="alert(1)"`).
**Prevention:** Always implement robust string replacement that explicitly handles `&`, `<`, `>`, `"`, and `'` when escaping strings for HTML context, rather than relying on DOM manipulation side effects.
