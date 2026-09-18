## 2024-05-24 - Pause Inactive requestAnimationFrame Loops
**Learning:** Background animation loops (like `requestAnimationFrame`) that run unconditionally, even when target positions are reached and elements are visually inactive, continuously consume CPU and battery resources unnecessarily.
**Action:** When implementing continuous background animations, always ensure the loop pauses when the target position is reached (convergence) and the animation is inactive. Restart the loop only when relevant events (e.g., mousemove) occur.
