## 2024-10-20 - Perpetual RAF Loops
**Learning:** Initializing animations with `requestAnimationFrame` that continuously run in the background (even when the target state has been reached) wastes CPU cycles and battery life.
**Action:** Always implement a termination condition for `requestAnimationFrame` loops when the animated value reaches its target, and restart the loop only when new input (like `mousemove`) changes the target state.
