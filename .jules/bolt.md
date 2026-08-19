## 2024-03-24 - Optimize requestAnimationFrame in Cursor Preview
**Learning:** Background animation loops like `requestAnimationFrame` consume CPU and battery if left running continuously, even when there's no visible change (e.g., cursor is stationary).
**Action:** When implementing continuous background animations, ensure the loop pauses when the target position is reached and the animation is inactive, restarting only when relevant events occur.
