## 2024-05-15 - Pausing idle requestAnimationFrame loops
**Learning:** Background visual effects like a cursor-following preview often use `requestAnimationFrame` constantly, causing continuous main thread usage and battery drain even when the user isn't interacting with the page.
**Action:** Use an `isRunning` flag and a threshold check (`Math.abs(diff) < 0.1`) to pause the `requestAnimationFrame` loop when the effect has settled, and restart it in the relevant event listener (e.g., `mousemove`).
