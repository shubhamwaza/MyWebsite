## 2024-05-24 - Optimize `initCursorPreview`
**Learning:** Continuous `requestAnimationFrame` loops even when UI is idle cause layout thrashing and unnecessary CPU usage.
**Action:** Only run `requestAnimationFrame` when elements are active or transitioning. Pause the loop when they've settled.
