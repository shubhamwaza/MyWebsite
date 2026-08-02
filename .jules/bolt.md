## 2024-08-02 - Stop infinite animation loops
**Learning:** Found an infinite `requestAnimationFrame` loop in the `initCursorPreview` cursor follower code, causing unnecessary CPU usage and battery drain while the cursor was idle.
**Action:** Always verify that `requestAnimationFrame` loops pause when the target animation finishes or reaches an idle state, instead of running continuously.
