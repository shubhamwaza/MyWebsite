## 2024-05-30 - Type Confusion and Attribute XSS in escapeHtml
**Vulnerability:** The `escapeHtml` function is vulnerable to Type Confusion XSS because it assumes the input is a string, and it is vulnerable to Attribute XSS because `textContent` -> `innerHTML` conversion leaves quotes unescaped.
**Learning:** We need to explicitly cast input to strings (e.g., `String(str)`) before processing, and we must escape quotes with regex replacements as native DOM `textContent` conversion does not escape them.
**Prevention:** Always explicitly cast to a string before escaping and ensure that both quotes (single and double) are properly replaced to prevent escaping out of attributes.
