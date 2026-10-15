## 2026-10-27 - [Stop endless requestAnimationFrame loops]
**Learning:** Background animation loops like cursor tracking using `requestAnimationFrame` can run continuously even when not needed, wasting CPU cycles and draining battery on devices, causing poor performance on a codebase that relies heavily on micro-interactions.
**Action:** Always pause `requestAnimationFrame` loops when the animation has reached its target state (e.g., when the target and current coordinates converge) and restart it only when user interaction triggers a change in the target.
