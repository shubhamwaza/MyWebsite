## 2024-11-10 - DOM based escaping leaves attributes vulnerable
**Vulnerability:** The native DOM textContent to innerHTML conversion approach in the HTML escaping function left quote characters unescaped, enabling Attribute XSS. It was also vulnerable to Type Confusion XSS bypasses.
**Learning:** Relying on textContent assignment to a temporary DOM element successfully escapes <, >, and &, but it deliberately leaves " and ' intact because they are valid text content, which becomes dangerous when the escaped output is used within HTML attributes.
**Prevention:** Always use regex-based string replacements that explicitly handle " and ' when escaping HTML context, and explicitly cast inputs to strings before processing.
