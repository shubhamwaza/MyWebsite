🚨 **Severity:** HIGH
💡 **Vulnerability:** The existing `escapeHtml` function relied on DOM text node assignment (`div.textContent = str; return div.innerHTML;`). This approach fails to encode single (`'`) and double (`"`) quotes, rendering the application vulnerable to attribute injection XSS if the output is used inside HTML attributes.
🎯 **Impact:** An attacker could potentially inject malicious scripts into HTML attributes, leading to unauthorized actions or data exposure if user input is not sanitized properly elsewhere.
🔧 **Fix:** Replaced the DOM-based escaping with a comprehensive regex-based replacement that safely escapes `&`, `<`, `>`, `"`, and `'`. Also added a check to handle non-string inputs safely to avoid type-confusion XSS.
✅ **Verification:** The fix can be verified by reviewing the code and confirming that characters like `"` are replaced with `&quot;` and `'` with `&#039;`.
