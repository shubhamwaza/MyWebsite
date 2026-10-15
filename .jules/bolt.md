## 2026-08-09 - Avoid layout thrashing in high-frequency events
**Learning:** Calling DOM measurement functions like `getBoundingClientRect()` within high-frequency event listeners (`mousemove`, `pointermove`, etc.) causes layout thrashing (forced synchronous layouts). This blocks the main thread and can lead to janky interactions.
**Action:** Always cache DOM measurements during `mouseenter` or when the active target changes. Invalidate the cache on `mouseleave` or window `scroll`.
