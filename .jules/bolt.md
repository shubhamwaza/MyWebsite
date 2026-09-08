## 2024-03-01 - Endless requestAnimationFrame Loop
**Learning:** In continuous background animations (like custom cursor followers), letting `requestAnimationFrame` run endlessly when the target has converged and the animation is inactive causes unnecessary CPU utilization and battery drain, even if the visual change is imperceptible.
**Action:** Always implement a pausing mechanism that halts the loop when the position difference is negligible and the component is no longer active, and restart the loop only upon new relevant input events.
