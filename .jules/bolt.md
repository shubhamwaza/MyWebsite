## 2024-05-24 - Pausing Idle requestAnimationFrame Loops
**Learning:** The cursor preview animation uses an infinite `requestAnimationFrame` loop that runs continuously even when the cursor is completely still and the preview box is hidden, causing unnecessary CPU and battery drain.
**Action:** Ensure continuous animation loops check for a resting state (e.g., delta < 0.1) and pause themselves, restarting only when input events (like `mousemove`) occur.
