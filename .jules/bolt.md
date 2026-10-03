## 2024-10-24 - Continuous requestAnimationFrame Loop
**Learning:** The cursor preview animation runs continuously, even when the cursor is idle, consuming CPU/battery.
**Action:** Always stop the animation loop when the target position is reached and restart it only when necessary (e.g., on mousemove).
