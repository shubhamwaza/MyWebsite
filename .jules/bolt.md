## 2024-05-13 - Optimize continuous animation loop
**Learning:** The application had an unconditionally continuous requestAnimationFrame loop in js/main.js for custom cursor functionality, draining CPU continuously even when the mouse wasn't moving.
**Action:** When using rAF for cursor trails or similar follow-effects, implement a sleep state that exits the loop when the animated coordinates settle close to the target coordinates, and re-awake it dynamically on user interaction.
