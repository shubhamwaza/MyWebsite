## 2024-11-05 - DOM-based HTML escaping vulnerability
**Vulnerability:** The native DOM `textContent` to `innerHTML` conversion in `escapeHtml` leaves quotes unescaped, leading to Attribute XSS. It also suffers from Type Confusion if the input is not a string.
**Learning:** Native DOM APIs do not inherently escape quote characters because they are only concerned with safely rendering text nodes, not preventing attribute breakouts.
**Prevention:** Always explicitly cast inputs to strings and use regex-based replacements to escape all critical HTML characters, including `"` and `'`, when sanitizing data that may be injected into HTML attributes.
