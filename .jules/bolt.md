## 2024-05-24 - Unpaused background animation loops
**Learning:** Found a specific codebase anti-pattern in the cursor preview component where a `requestAnimationFrame` loop runs continuously forever, even when the animation isn't actively triggered or moving, burning unnecessary CPU and battery.
**Action:** When implementing continuous background animations (e.g., using `requestAnimationFrame`), ensure the loop pauses when the target position is reached and the animation is inactive, restarting only when relevant events occur.
