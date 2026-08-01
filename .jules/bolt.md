## 2024-08-01 - [Cursor Tracking Loop Optimization]
**Learning:** In continuous `requestAnimationFrame` loops used for cursor tracking (e.g. `initCursorPreview` in `js/main.js`), letting the loop run forever at 60fps causes unnecessary CPU usage when the cursor is idle.
**Action:** Always stop the `requestAnimationFrame` loop when the delta (`dx/dy`) falls below a threshold (e.g. 0.1), and dynamically restart it on `mousemove`.
