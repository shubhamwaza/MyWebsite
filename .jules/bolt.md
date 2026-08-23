## 2024-05-24 - Pausing requestAnimationFrame
**Learning:** Continuous background animations (e.g., using `requestAnimationFrame`) can unnecessarily consume CPU and battery even when they are visually stationary or inactive. In this codebase, the cursor preview animation loop runs indefinitely.
**Action:** When implementing continuous background animations, ensure the loop pauses when the target position is reached and the animation is inactive to save CPU and battery, restarting only when relevant events occur.
