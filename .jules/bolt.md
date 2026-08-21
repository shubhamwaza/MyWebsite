## 2024-08-22 - Cursor follow animation loop pausing
**Learning:** Background continuous animation loops (like `requestAnimationFrame` for a cursor-following preview) that run indefinitely even when hidden or idle will silently drain CPU and battery.
**Action:** Always pause `requestAnimationFrame` loops when the target position is reached and the animation is inactive. Ensure event listeners (`mousemove`, `mouseenter`) properly restart the loop if it was previously paused.
