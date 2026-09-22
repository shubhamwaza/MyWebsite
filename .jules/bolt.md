## 2024-05-24 - Pause Idle Animation Loops
**Learning:** This codebase uses endless `requestAnimationFrame` loops (e.g. `initCursorPreview`) that continue recalculating styles and executing code even when the UI element has reached its target state or is invisible, wasting CPU cycles and draining battery.
**Action:** When implementing or optimizing custom physics or cursor-follow animations, check if the position has converged to a negligible delta. If so, pause the `requestAnimationFrame` loop and only restart it upon user interaction (like `mousemove`).
