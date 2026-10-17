## 2024-10-17 - Pausing infinite rAF loops
**Learning:** Unconditional requestAnimationFrame loops that continuously write to the DOM (like style.left and style.top), even when the target values haven't changed, cause persistent layout thrashing and high idle CPU/battery drain.
**Action:** Always pause requestAnimationFrame loops when the animated values reach their target threshold, and only restart the loop when new input (e.g., mousemove) changes the target.
