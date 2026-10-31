## 2024-10-31 - Stop perpetual rAF loop in cursor preview
**Learning:** The `initCursorPreview` function initiates a `requestAnimationFrame` loop that runs perpetually on every frame, even when the cursor preview is hidden/inactive. This causes unnecessary layout recalculations and drains battery.
**Action:** Instead of starting the loop blindly on page load and running forever, stop the loop when the preview box is inactive and start it only on `mouseenter`.
