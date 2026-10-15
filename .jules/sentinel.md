## 2024-10-15 - Prevent Type Confusion XSS Bypass in escapeHtml
**Vulnerability:** The `escapeHtml` function does not explicitly cast inputs to a string before assigning them to `div.textContent`.
**Learning:** Arrays or objects passed to such functions might bypass type checks elsewhere and be stringified unexpectedly by the DOM, potentially leading to Type Confusion XSS bypasses.
**Prevention:** Always explicitly cast input to a string (e.g., `String(str)`) before processing or sanitizing it for HTML output.
