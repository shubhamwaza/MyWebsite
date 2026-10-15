## 2024-05-24 - Infinite requestAnimationFrame loops on idle
**Learning:** Continuous animations like cursor followers that use `requestAnimationFrame` unconditionally can drain CPU/battery, even when visually hidden or idle.
**Action:** Add an `isRunning` state to pause the animation loop when the target coordinates are reached and the element is not active.
