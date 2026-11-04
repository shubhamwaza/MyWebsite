## 2024-11-04 - Incomplete HTML Escaping
**Vulnerability:** The `escapeHtml` function relied on DOM `textContent` to `innerHTML` conversion, which fails to escape single and double quotes, leading to potential Attribute XSS. It also failed to cast inputs to strings, risking Type Confusion XSS.
**Learning:** Native DOM conversions do not escape all characters necessary for safe HTML attribute interpolation.
**Prevention:** Always cast inputs to strings and use regex-based replacement for all HTML special characters (`&`, `<`, `>`, `"`, `'`) when implementing custom HTML escaping.
