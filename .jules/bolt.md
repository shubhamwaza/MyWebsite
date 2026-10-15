## 2024-10-01 - Prevent idle requestAnimationFrame loop in cursor preview
**Learning:** The cursor preview animation loop in `js/main.js` was running continuously via `requestAnimationFrame` even when the cursor was idle and the preview box was inactive, causing unnecessary CPU usage and layout recalculations.
**Action:** Pause the `requestAnimationFrame` loop when the cursor is idle (distance between current and target positions is less than 0.1) and the preview is not active, restarting it on mousemove.
