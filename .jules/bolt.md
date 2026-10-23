## 2024-10-24 - Stop continuous requestAnimationFrame loop for cursor preview
**Learning:** The cursor preview animation loop was running continuously using requestAnimationFrame even when the cursor was stationary, causing unnecessary CPU/GPU usage and draining battery.
**Action:** When using requestAnimationFrame for continuous animations that settle on a target, conditionally stop the loop once the target is reached (e.g., delta < 0.1) and restart it only when the target changes (e.g., on mousemove).
