## 2024-05-18 - Stop infinite requestAnimationFrame
**Learning:** Found an infinite `requestAnimationFrame` loop in `js/main.js` that continuously updates the cursor preview box position even when the cursor is stationary, burning CPU and battery.
**Action:** Cancel the frame request when the box reaches its target, and restart the loop only when the mouse moves.
