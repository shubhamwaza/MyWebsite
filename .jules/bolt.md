## 2025-02-23 - Pausing background animations
**Learning:** Background animations (like `requestAnimationFrame`) can unnecessarily consume CPU/battery if left running endlessly. Specifically, when easing to a target position, if the current position is close enough to the target position, it's a good time to stop the animation loop.
**Action:** When implementing continuous background animations (e.g., using `requestAnimationFrame`), ensure the loop pauses when the target position is reached and the animation is inactive to save CPU and battery, restarting only when relevant events occur.
