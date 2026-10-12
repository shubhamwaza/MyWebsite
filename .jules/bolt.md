## 2024-10-12 - Stop Idle rAF Loops
**Learning:** The cursor follow animation was running an infinite `requestAnimationFrame` loop even when the user was idle or not interacting with the preview. In an HTML/JS static site, this unnecessarily keeps the CPU active.
**Action:** Always stop `rAF` loops when the animation reaches its target or becomes inactive, and wake them up only on relevant user input (like `mousemove` or `mouseenter`).
