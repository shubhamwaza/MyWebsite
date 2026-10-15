## 2024-09-08 - Fix XSS Vulnerability in escapeHtml

**Vulnerability:** The custom `escapeHtml` function in `js/main.js` used a DOM-based approach (`div.textContent = str; return div.innerHTML;`), which fails to escape single and double quotes, creating Cross-Site Scripting (XSS) vulnerabilities when the escaped string is injected into HTML attributes (like `href` or `alt`).

**Learning:** DOM-based text escaping is insufficient for rendering user input into HTML attributes. While it handles `<` and `>`, it leaves quotes unescaped. Furthermore, passing null or undefined values to `div.textContent` could lead to type confusion issues or unexpected 'null'/'undefined' string renders.

**Prevention:** Always use a robust, regex-based escaping function that explicitly replaces `&`, `<`, `>`, `"`, and `'` with their corresponding HTML entities. Ensure the function safely handles non-string inputs (e.g., returning an empty string for nullish values and explicitly casting other values to strings).
