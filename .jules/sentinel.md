## 2024-05-24 - DOM text node assignment attribute XSS vulnerability
**Vulnerability:** The `escapeHtml` function relies on `document.createElement('div').textContent = str` which does not escape single or double quotes, leaving HTML attributes vulnerable to XSS injection.
**Learning:** Using DOM assignment to escape HTML text is insufficient when the output will be used inside HTML attributes because quotes are not escaped.
**Prevention:** Use comprehensive regex-based HTML escaping (`.replace(/[&<>"']/g, ...)`).
