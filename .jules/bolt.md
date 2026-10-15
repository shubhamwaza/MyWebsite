## 2025-01-20 - Unnecessary Background Animation Loops
**Learning:** The `initCursorPreview` function in this codebase uses an unbounded `requestAnimationFrame` loop that runs continuously, even when the cursor is idle and the preview element is inactive, needlessly consuming CPU and battery.
**Action:** When implementing continuous background animations (e.g., using `requestAnimationFrame`), ensure the loop pauses when the target position is reached and the animation is inactive to save CPU and battery, restarting only when relevant events occur.
