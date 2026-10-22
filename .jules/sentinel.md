## 2023-10-22 - XSS via Incomplete HTML Escaping
**Vulnerability:** The \`escapeHtml\` function used native DOM \`textContent\` to \`innerHTML\` conversion, which leaves quotes (\`"\` and \`'\`) unescaped, allowing Attribute XSS. It also lacked string casting, allowing Type Confusion XSS.
**Learning:** Native DOM text conversion does not safely escape quotes for attribute contexts.
**Prevention:** Always use robust regex-based replacing for all HTML control characters (\`&\`, \`<\`, \`>\`, \`"\`, \`'\`) and explicitly cast inputs to strings before processing.
