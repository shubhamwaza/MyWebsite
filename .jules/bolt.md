## 2024-05-14 - Optimize background requestAnimationFrame loops
**Learning:** Found an unconditional `requestAnimationFrame(loop)` in `js/main.js` for cursor follow logic that runs endlessly, even when the target elements are not active or the interpolation is complete. This eats CPU and battery needlessly.
**Action:** When working with continuous interpolation loops, pause `requestAnimationFrame` when the element is inactive and current values have sufficiently converged on target values, and resume it on interaction.
