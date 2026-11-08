## $(date +%Y-%m-%d) - RequestAnimationFrame loop leak
**Learning:** Found a permanent running `requestAnimationFrame` loop in `initCursorPreview` that runs continuously even when the preview is completely hidden or no items are being hovered, using up CPU unnecessarily.
**Action:** When implementing `requestAnimationFrame` for visual followers, ensure the loop only runs when the element is actually active/visible. Stop the loop when the user is not hovering.
