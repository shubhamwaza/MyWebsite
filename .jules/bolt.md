## 2024-08-19 - Pause Continuous Animation Loops to Save Resources
**Learning:** In continuous background animations (like cursor-follow previews using `requestAnimationFrame`), allowing the loop to run indefinitely even when the target is reached and the animation is inactive causes unnecessary CPU usage and battery drain.
**Action:** Always pause the `requestAnimationFrame` loop when the target position is reached and the animation is inactive. Restart the loop only when relevant events (e.g., mouse movements or hover states) occur.
