## 2024-05-15 - Pause infinite requestAnimationFrame loops

**Learning:** Unconditional `requestAnimationFrame` loops run continuously at 60fps even when no visual changes are occurring (e.g., when the mouse is idle and the element has reached its target position), which wastes CPU cycles and drains battery.

**Action:** Always track the animation state and pause the `requestAnimationFrame` loop when the target condition is met (e.g., movement has settled). Resume the loop only when new input (like a `mousemove` event) requires it.
