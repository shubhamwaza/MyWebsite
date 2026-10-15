## 2024-05-24 - Pausing requestAnimationFrame
**Learning:** Continuous `requestAnimationFrame` loops for UI effects (like cursor followers) that run even when inactive or static consume unnecessary CPU and battery, which is an easily avoidable performance bottleneck in vanilla JS codebases.
**Action:** Always ensure animation loops implement a pausing mechanism (e.g., checking if the animation is inactive and target coordinates are reached) to halt the loop and restart it only upon relevant interaction events.
