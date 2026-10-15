## 2024-05-24 - Pause background animation loops when idle
**Learning:** Continuous animation loops using `requestAnimationFrame` for cursor tracking or similar effects can consume unnecessary CPU/GPU cycles when the target is idle and coordinates have converged.
**Action:** Always implement a pause mechanism in such loops, setting a flag when coordinates converge (e.g., `Math.abs(target - current) < threshold`) to stop scheduling frames, and only restart the loop on relevant user interaction (e.g., `mousemove`).
