## 2024-05-14 - Pausing Continuous Animation Loops
**Learning:** requestAnimationFrame loops for smooth cursor following continue running endlessly even when the cursor is idle, wasting CPU cycles and battery.
**Action:** Implement a dynamic pause mechanism that stops the loop when the cursor position converges (distance < 0.1) and restarts it on the next `mousemove` event.
