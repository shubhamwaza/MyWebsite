## 2026-10-05 - Stop Unnecessary animation loops
**Learning:** The cursor preview animation loop runs continuously with requestAnimationFrame(loop) even when the cursor is idle. This wastes CPU and battery.
**Action:** Only run the animation loop when the cursor target position is different from the current position.
