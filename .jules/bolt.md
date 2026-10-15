## 2023-10-24 - Unpaused requestAnimationFrame Loops
**Learning:** Background visual effects (like cursor-follow previews) often run continuous `requestAnimationFrame` loops even when completely hidden or inactive, leading to unnecessary battery drain and constant CPU overhead on static sites.
**Action:** Always track active state and convergence in continuous animation loops. Pause the loop when the visual effect is hidden and its target coordinates have been reached, and snap/resume when reactivated.
