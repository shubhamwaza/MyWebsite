## 2024-05-24 - Stop infinite requestAnimationFrame loop in cursor preview
**Learning:** The cursor preview feature (`initCursorPreview`) starts an infinite `requestAnimationFrame` loop on page load. Even when the preview is hidden (most of the time), it continuously calculates positions and updates DOM styles every frame, which wastes CPU/battery on an idle page.
**Action:** Only start the animation loop when the preview is triggered by a mouse hover event. Stop the loop when the preview becomes inactive and the animation target is reached, completely halting the overhead.
