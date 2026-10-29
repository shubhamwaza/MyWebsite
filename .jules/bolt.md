## 2024-05-24 - Pausing Idle Animation Loops
**Learning:** Continuous `requestAnimationFrame` loops, even when calculating minimal state changes like cursor positioning, consume CPU cycles and drain battery on portable devices.
**Action:** Always pause animation loops when the target state is reached (e.g., cursor has settled) and resume them only when new input (e.g., mouse movement) occurs.
