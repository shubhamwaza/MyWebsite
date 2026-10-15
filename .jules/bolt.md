## 2024-05-14 - Layout Thrashing in High-Frequency Listeners
**Learning:** Calling `getBoundingClientRect()` inside high-frequency `mousemove` or `pointermove` listeners causes layout thrashing and scrolling stutter. Using a global version integer incremented on scroll/resize for cache invalidation is significantly faster than querying the DOM to clear caches or temporarily clearing CSS transforms.
**Action:** Always cache DOM measurements and invalidate using a single global version variable for high-frequency interactive UI effects.
