## 2026-10-27 - Pause Idle requestAnimationFrame Loops
**Learning:** Continuous `requestAnimationFrame` loops for UI effects (like cursor followers) run even when the user is completely idle, consuming CPU/GPU cycles unnecessarily.
**Action:** Always calculate the delta between current and target state in continuous animation loops. If the difference is imperceptible (e.g., < 0.1px), pause the loop and only restart it via an event listener (like `mousemove`).
