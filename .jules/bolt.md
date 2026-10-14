## 2024-10-14 - Pause background animation loops
**Learning:** Found an unoptimized `requestAnimationFrame` loop continuously running in the background for a cursor preview feature, even when not visible.
**Action:** Always verify if continuous animation loops (like `requestAnimationFrame`) can be paused when the related UI component is inactive or hidden.