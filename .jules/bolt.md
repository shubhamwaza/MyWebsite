## 2024-11-12 - Pause inactive animation loops
**Learning:** Found a `requestAnimationFrame` loop in `initCursorPreview` that runs continuously, even when the cursor preview is hidden and the user is not interacting. This is a common performance anti-pattern in UI scripting that continuously consumes CPU/battery.
**Action:** Always wrap continuous UI animation loops in a condition that stops them when they are not visibly active, and restart them via event listeners when interaction resumes.
