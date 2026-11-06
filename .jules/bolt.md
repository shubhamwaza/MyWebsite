## 2024-05-24 - Stop continuous requestAnimationFrame loops
**Learning:** Running `requestAnimationFrame` infinitely for UI elements (like cursor trackers) consumes unnecessary CPU cycles and battery when the user isn't interacting or moving the mouse.
**Action:** Always pause the animation loop when the animated values reach their target, and restart it dynamically on user input (e.g., `mousemove`).
