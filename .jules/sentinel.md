## 2024-11-08 - Fix escapeHtml Vulnerability
**Vulnerability:** The escapeHtml function relies on DOM element properties and lacks string coercion and quote escaping, leading to Attribute XSS and Type Confusion XSS.
**Learning:** Using div.textContent does not properly escape quotes, allowing Attribute XSS. Additionally, lacking String(str) coercion can lead to Type Confusion XSS.
**Prevention:** Always coerce inputs to strings, and properly escape quotes and HTML special characters using regex-based replacement.
