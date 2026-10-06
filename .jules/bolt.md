## 2026-10-06 - Optimize continuous requestAnimationFrame loop
**Learning:** Found a continuous `requestAnimationFrame` loop in `initCursorPreview` that constantly recalculated position and updated the DOM, even when the cursor preview box was not active/visible.
**Action:** Update the `requestAnimationFrame` loop to conditionally check the `active` flag and avoid unnecessary DOM updates when the cursor preview is not visible. Also, instead of running continuously, only request frames when `active` is true.
