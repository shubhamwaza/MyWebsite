## 2026-09-01 - Pause inactive requestAnimationFrame loops
**Learning:** Continuous requestAnimationFrame loops (e.g., for cursor-following elements) can consume significant CPU and battery even when the target state is reached. In this codebase, the loop should pause when the animation is inactive and resume on relevant events (e.g., mousemove) to avoid unnecessary processing.
**Action:** Always implement a distance threshold or active state check in requestAnimationFrame loops to pause them when unnecessary, and use event listeners to restart the loop when interaction resumes.
