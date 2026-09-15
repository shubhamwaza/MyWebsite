## 2024-05-24 - Pause inactive requestAnimationFrame loop
**Learning:** Continuous `requestAnimationFrame` loops for UI effects (like cursor followers) consume unnecessary CPU and battery when the effect is invisible or inactive and the animation target is already reached.
**Action:** When implementing continuous background animations, explicitly ensure the loop pauses when the target position is reached and the animation is inactive, restarting only when relevant events (like mouse movement) occur.
