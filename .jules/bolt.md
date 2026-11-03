## 2024-05-23 - Cursor preview requestAnimationFrame loop optimization
**Learning:** A constantly running `requestAnimationFrame` loop that continues even when the target has been reached wastes CPU cycles and causes continuous layout thrashing, hurting frontend performance.
**Action:** When creating animation loops with `requestAnimationFrame`, only call it when the current state hasn't reached the target state (or is within a small epsilon) and restart the loop from the event listener when needed.
