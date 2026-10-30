## 2024-05-24 - Pausing idle animation loops
**Learning:** Continuous `requestAnimationFrame` loops for UI effects (like cursor followers) keep the CPU/GPU busy and drain battery by updating styles every frame, even when the user is idle.
**Action:** Always pause `requestAnimationFrame` loops when the target state is reached (e.g., when the current position is close enough to the target position). Restart the loop only when user input (like `mousemove`) changes the target state.
