## 2024-10-01 - DOM-based HTML escaping fails to encode quotes
**Vulnerability:** The `escapeHtml` function in `js/main.js` used `document.createElement('div').textContent = str; return div.innerHTML;`. This fails to encode single and double quotes, allowing attribute injection XSS when used in HTML attributes (like `<img alt="${escapeHtml(project.title)}">`).
**Learning:** DOM text node assignment only escapes `<` and `&` in modern browsers, as quotes do not break standard text flow outside of attributes.
**Prevention:** Use comprehensive regex-based escaping that explicitly handles `&`, `<`, `>`, `"`, and `'` when encoding text meant for HTML attributes.
