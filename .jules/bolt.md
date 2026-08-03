

## 2026-08-03 - Layout Thrashing in Pointer Events
**Learning:** Calling `getBoundingClientRect()` on every `mousemove` and `pointermove` (in `initMagnetic` and `initOrangeHover`) forces unnecessary layout reads in the hot path. In `initMagnetic`, this also reads the rect *after* a translation is applied, causing a feedback loop that subtly dampens the effect.
**Action:** Cache layout measurements on `mouseenter` or initial target hover, and use document-relative coordinates (`pageX/pageY` minus `rect + scroll`) to maintain accuracy without layout reads during the move event.
