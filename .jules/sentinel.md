## 2024-11-20 - DOM-based escapeHtml Vulnerability
**Vulnerability:** The custom `escapeHtml` implementation in `js/main.js` used a DOM-based approach (`div.textContent = str; return div.innerHTML`) which fails to escape single and double quotes.
**Learning:** This implementation allows for attribute-based XSS when the escaped value is injected into HTML attributes, as quotes are not transformed into HTML entities (`&quot;`, `&#39;`). Also, if non-strings like `null` or `undefined` were passed, it wouldn't cast them properly leading to incorrect escaping behavior.
**Prevention:** Use a regex-based `escapeHtml` function that replaces `<`, `>`, `&`, `"`, and `'` with their respective HTML entities and ensure explicit string casting for inputs.
