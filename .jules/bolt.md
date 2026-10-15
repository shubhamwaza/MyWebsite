## 2026-10-01 - Pause background rAF when idle
**Learning:** The cursor preview relies on a continuously running `requestAnimationFrame` loop, which consumes CPU even when the user is not moving their mouse.
**Action:** Implement an idle check to pause `requestAnimationFrame` when the interpolated coordinates have converged with the target coordinates. Restart it on user interaction.
