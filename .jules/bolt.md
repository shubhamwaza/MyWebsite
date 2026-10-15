## 2024-10-15 - Initial Bolt Journal
**Learning:** Initializing bolt journal for this static HTML/CSS/JS project.
**Action:** Will record performance learnings here.

## 2024-10-15 - Stop idle requestAnimationFrame loops
**Learning:** Found an endless `requestAnimationFrame` loop in `initCursorPreview` that runs continuously even when the cursor preview is inactive and hidden.
**Action:** Always stop animation loops when visually idle (e.g., hidden or target position reached) and resume them only when needed to save CPU cycles.
