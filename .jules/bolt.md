## 2024-11-05 - Stopping Infinite Animation Loops
**Learning:** Infinite `requestAnimationFrame` loops for UI effects (like cursor previews) consume idle CPU even when the user isn't interacting with the page.
**Action:** Always track the animation frame ID and stop the loop when the target values match the current values (i.e., the animation reaches its resting state). Restart the loop on user interaction.
