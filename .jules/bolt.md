## 2024-05-18 - requestAnimationFrame loop optimization
**Learning:** Continuous background `requestAnimationFrame` loops that run even when an element is idle or offscreen consume unnecessary CPU cycles and drain battery life.
**Action:** When implementing continuous background animations (e.g., using `requestAnimationFrame`), ensure the loop pauses when the target position is reached and the animation is inactive to save CPU and battery, restarting only when relevant events occur.
