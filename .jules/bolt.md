## 2024-05-24 - Stop infinite requestAnimationFrame loop
**Learning:** Found an infinite `requestAnimationFrame` loop in `initCursorPreview` that was updating DOM styles and running continuously even when the mouse was completely stationary and the preview was hidden. This is a common codebase-specific anti-pattern for custom cursors/tooltips.
**Action:** Always pause `requestAnimationFrame` loops when the target state has been reached (e.g., when the animated values converge within a small delta threshold) and restart them on user interaction.
