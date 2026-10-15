## 2024-10-10 - Pause RequestAnimationFrame on Idle
**Learning:** The codebase has a cursor follow feature that continuously runs requestAnimationFrame(loop) even when the mouse is idle, causing unnecessary CPU usage.
**Action:** Always check continuous requestAnimationFrame loops and ensure they are paused when there is no state change to optimize performance.
