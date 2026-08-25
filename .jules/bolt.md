## 2024-05-24 - Pause inactive requestAnimationFrame
**Learning:** In continuous background animations (e.g., cursor followers using `requestAnimationFrame`), failing to pause the loop when the target position is reached and the animation is inactive causes unnecessary CPU and battery drain.
**Action:** Implement a pause mechanism that stops the loop when the animation is inactive and near its target, and restart it only when relevant events (like mousemove or mouseenter) occur.
