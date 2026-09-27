## 2024-05-15 - Continuous requestAnimationFrame Loops
**Learning:** Background visual effects (like a cursor-following box) running unconditional `requestAnimationFrame` loops continuously consume CPU/GPU resources even when the user is idle, which drains battery and degrades performance.
**Action:** When implementing visual effects with `requestAnimationFrame`, always include a condition (e.g., checking if the difference between current and target state is below a tiny threshold) to pause the loop and restart it only when user interaction resumes.
