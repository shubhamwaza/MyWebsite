## 2024-06-03 - Pause requestAnimationFrame When Inactive
**Learning:** The application was running `requestAnimationFrame` continuously for a cursor tracking preview, even when the cursor wasn't moving or the user wasn't interacting. This anti-pattern consumes unnecessary CPU cycles and drains battery on mobile devices.
**Action:** When implementing continuous background animations (e.g., cursor tracking), ensure the animation loop is paused when the target state is reached (distance is negligible) and restart it only when user interaction (like `mousemove`) requires a UI update.
