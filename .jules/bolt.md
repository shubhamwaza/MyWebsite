## 2024-05-18 - Optimized Cursor Follow Preview Loop
**Learning:** The cursor-follow image preview animation in `js/main.js` was using a continuous, infinite `requestAnimationFrame` loop even when the user's cursor was idle. This constant recalculation is a performance anti-pattern.
**Action:** Always include a condition to stop the `requestAnimationFrame` loop when the animation reaches its target state, and only restart it when user interaction changes the target state.
