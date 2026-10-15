## 2025-01-20 - Pause continuous requestAnimationFrame loops
**Learning:** A continuous `requestAnimationFrame` loop in `initCursorPreview` was running continuously even when inactive, needlessly consuming CPU and battery.
**Action:** Always implement a pausing mechanism based on target proximity and active state for cursor-following animations to save CPU cycles on idle.