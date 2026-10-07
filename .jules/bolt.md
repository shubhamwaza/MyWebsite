## 2024-10-07 - Pause continuous RAF loops
**Learning:** Infinite `requestAnimationFrame` loops that permanently write to DOM styles (like `left`/`top`) cause constant background layout thrashing, even when the element is visually hidden.
**Action:** Always track active state and pause the animation loop when visual updates are no longer needed, restarting it via event listeners when active again.