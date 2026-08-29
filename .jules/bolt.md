## 2025-01-20 - Pause continuous requestAnimationFrame loops
**Learning:** Continuous `requestAnimationFrame` loops that run even when no animation or movement is happening waste CPU cycles, drain battery, and trigger unnecessary layout recalculations.
**Action:** When implementing or optimizing `requestAnimationFrame` loops, ensure the loop pauses when the target position is reached and the animation is inactive. Restart the loop only when relevant events (e.g., user interaction) occur.
