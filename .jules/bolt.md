## 2024-10-24 - Unconditional RequestAnimationFrame Loops Consume CPU
**Learning:** Continuous animation loops using `requestAnimationFrame` without an exit condition run perpetually in the background, consuming CPU and battery even when the target elements are static.
**Action:** Always implement a threshold or delta check in continuous `requestAnimationFrame` loops to pause execution when the elements have reached their target state, and resume execution only when interactions require it.
