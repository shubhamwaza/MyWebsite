## 2024-05-15 - Fix XSS via DOM-based escapeHtml
**Vulnerability:** XSS vulnerability due to `escapeHtml` function using DOM `textContent` to `innerHTML` conversion, which fails to escape quotes (`"` and `'`), potentially allowing attribute injection when outputting to HTML attributes.
**Learning:** DOM-based escaping only escapes `<`, `>`, and `&`. It leaves quotes unescaped, which is dangerous when injecting sanitized strings into HTML attributes (e.g., `alt="..."`, `href="..."`).
**Prevention:** Always use regex-based substitution that explicitly escapes `&`, `<`, `>`, `"`, and `'`. Ensure non-strings like `null` or `undefined` are handled properly to avoid type-confusion vulnerabilities.
