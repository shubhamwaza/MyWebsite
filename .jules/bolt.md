## 2025-02-24 - Pause Background Animation Loops

**Learning:** Unconditional `requestAnimationFrame` loops (like the cursor preview follower) will continually execute and layout thrash even when the user is completely idle, needlessly draining battery and consuming CPU cycles.

**Action:** Always verify if an animation loop naturally converges to a resting state. If it does, compute the distance/delta, and pause the loop using a flag when the delta drops below a minimal threshold (e.g., < 0.1px). Restart the loop in the relevant interaction event listener (e.g., `mousemove`).
