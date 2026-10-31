## 2024-05-24 - DOM-Based escapeHtml Attribute XSS
**Vulnerability:** The `escapeHtml` function relies on `textContent` to `innerHTML` conversion, which fails to escape single and double quotes, leading to Attribute XSS when used inside HTML attributes. It also lacked explicit string casting.
**Learning:** Native DOM conversions leave quotes unescaped. Failing to cast input to a string first can also lead to Type Confusion XSS bypasses.
**Prevention:** Always explicitly cast inputs to string and use regex replacement to properly escape quote characters when implementing custom HTML escaping functions.
