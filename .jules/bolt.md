## 2024-05-24 - Pause Idle requestAnimationFrame
**Learning:** The continuous `requestAnimationFrame` for the cursor preview runs unconditionally forever, wasting CPU/battery when the mouse is idle.
**Action:** Always pause background animation loops when the target position is reached and restart them on user interaction.
