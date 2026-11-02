## 2024-05-24 - Unnecessary requestAnimationFrame loop in Cursor Preview
**Learning:** The cursor preview animation loop in this codebase runs continuously using `requestAnimationFrame(loop)`, even when the cursor is stationary. This is a common but easily missed anti-pattern that burns CPU cycles and drains battery for no visual benefit.
**Action:** Always pause `requestAnimationFrame` loops when the animated properties (like position) reach their target destinations, and re-trigger the loop only when new input (like a `mousemove` event) requires animation to resume.
