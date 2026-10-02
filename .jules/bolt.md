## 2024-10-02 - Continuous Animation Optimization
**Learning:** The cursor preview animation loop runs continuously in the background via `requestAnimationFrame` even when the cursor is idle or not hovering over a target.
**Action:** When implementing continuous lerping animations for UI elements, only schedule `requestAnimationFrame` when the current position is noticeably different from the target position, and stop the loop when they converge.
