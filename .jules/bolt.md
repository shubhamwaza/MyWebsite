## 2024-05-19 - Prevent continuous requestAnimationFrame loops
**Learning:** Running `requestAnimationFrame` continuously, even when an animation has reached its target position, drains CPU and battery without any visual benefit. This is a common anti-pattern in vanilla JS cursor tracking.
**Action:** Always pause `requestAnimationFrame` loops when the target state (e.g., target coordinates) matches the current state within an acceptable threshold, and restart the loop via event listeners (e.g., `mousemove`) only when needed.
