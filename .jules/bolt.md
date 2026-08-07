## 2024-05-18 - Pause Idle Animation Loops
**Learning:** Found a textbook performance anti-pattern: an infinite `requestAnimationFrame` loop in `initCursorPreview` that continuously updates inline DOM styles (`left`/`top`) even when the cursor is idle. This keeps the main thread active and drains battery needlessly.
**Action:** Always track motion delta and cancel the `requestAnimationFrame` loop when the element reaches its target. Re-initiate the loop only when new user input (`mousemove`) occurs.
