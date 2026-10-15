## 2024-05-18 - Pause continuous rAF loop for cursor animations
**Learning:** Continuous `requestAnimationFrame` loops for cursor tracking animations drain CPU and battery when idle. The cursor preview script was continuously updating the DOM and looping even when the cursor wasn't moving.
**Action:** Always implement a threshold-based pause (e.g., `Math.abs(dx) < 0.1`) to halt the rAF loop when the element reaches its target, restarting only on the next relevant interaction (`mousemove`).
