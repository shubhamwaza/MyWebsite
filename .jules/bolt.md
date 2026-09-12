## 2024-05-20 - Unbounded requestAnimationFrame Loop
**Learning:** The cursor preview effect used an infinite `requestAnimationFrame` loop that ran continuously, even when the cursor wasn't moving and the preview wasn't active, needlessly burning CPU cycles.
**Action:** Always pause `requestAnimationFrame` loops when the target state is reached (e.g., position delta is negligible) and the effect is inactive, restarting them only when relevant events (like `mousemove`) occur.
