## 2024-11-20 - Unconditional Animation Loop Battery Drain
**Learning:** The custom cursor preview (`initCursorPreview`) utilized an unconditional `requestAnimationFrame` loop, modifying DOM styles 60 times a second even when the user was idle. This causes continuous style recalculations and prevents the browser from resting, draining battery life.
**Action:** Always pause continuous animation loops (`requestAnimationFrame`) when target states are reached or when elements are inactive, particularly for UI effects like custom cursors.
