## 2023-10-25 - Pause Idle rAF Loops
**Learning:** Infinite `requestAnimationFrame` loops for UI effects that run unconditionally cause unnecessary continuous CPU and battery drain.
**Action:** Always pause rAF loops when the animation target is reached and the effect is inactive, restarting it via event listeners when needed.