## 2024-10-31 - Pause Inactive requestAnimationFrame Loops
**Learning:** Continuous `requestAnimationFrame` loops that update DOM styles (`element.style.left` and `element.style.top`) on every frame are wasteful if the element is hidden or inactive. In this codebase's `initCursorPreview`, the loop runs constantly even when the preview box is not shown.
**Action:** Always pause `requestAnimationFrame` loops when the visual effect is inactive or the target element has reached its destination, and only resume the loop when user interaction requires it.
