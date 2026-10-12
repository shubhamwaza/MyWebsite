## 2023-10-24 - Inadequate HTML Escaping
**Vulnerability:** Attribute Injection XSS
**Learning:** Using `document.createElement('div').textContent = str; return div.innerHTML` fails to escape single and double quotes, leaving the application vulnerable when `escapeHtml` is used inside HTML attributes. Additionally, not casting input to string can lead to Type Confusion XSS.
**Prevention:** Use comprehensive regex-based escaping with explicit string casting (`String(str).replace(...)`) to encode all sensitive characters safely.
