## 2024-11-01 - Avoid Infinite requestAnimationFrame Loops
**Learning:** The codebase features a cursor-following preview element that runs an infinite `requestAnimationFrame` loop, even when the cursor is stationary or off-screen, leading to unnecessary CPU and battery consumption.
**Action:** Modify continuous animation loops to dynamically start only when needed (e.g., on mouse move) and pause when the target state is reached (e.g., when the delta between current and target positions is negligible).
