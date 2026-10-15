## 2025-02-09 - XSS Vulnerability in HTML Escaping Function
**Vulnerability:** The `escapeHtml` function used a DOM-based approach (`textContent` to `innerHTML`) which fails to escape single and double quotes. This allowed Cross-Site Scripting (XSS) when the escaped strings were injected into HTML attributes.
**Learning:** Using the browser's DOM for escaping text is insufficient for all contexts, especially HTML attributes. A regex-based approach that explicitly escapes quotes is necessary.
**Prevention:** Always use a comprehensive regex-based escaping function that handles `<`, `>`, `&`, `"`, and `'` characters to ensure strings are safe for both text content and HTML attributes.
