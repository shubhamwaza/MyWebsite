## 2024-10-25 - Prevent infinite requestAnimationFrame loop
**Learning:** The cursor preview animation runs an infinite `requestAnimationFrame` loop even when the cursor is stationary, consuming CPU unnecessarily on pages with project thumbnails.
**Action:** Implement a check to pause the animation loop when the floating element has caught up to the target coordinates, and resume the loop only when new mouse movements are detected.
