## 2024-05-18 - Attribute XSS via DOM-based HTML escaping
**Vulnerability:** The custom `escapeHtml` function used DOM `textContent` assignment to escape HTML, but this technique does not escape double or single quotes.
**Learning:** When user data is inserted into HTML attributes (e.g., `<img alt="${escapeHtml(value)}">`), failing to escape quotes allows attackers to break out of the attribute and inject event handlers (Attribute XSS). Furthermore, implicit DOM string conversions can be bypassed if non-string types are passed.
**Prevention:** Always use regex-based escaping that covers `&`, `<`, `>`, `"`, and `'`, and explicitly cast input to a string before processing.
