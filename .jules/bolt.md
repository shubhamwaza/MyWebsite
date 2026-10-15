## 2025-03-02 - Pause requestAnimationFrame when idle
**Learning:** Continuous `requestAnimationFrame` loops used for easing/lerping (like cursor-follow previews) can consume unnecessary CPU/battery when the element isn't moving.
**Action:** When implementing continuous background animations, explicitly check if the target position has been reached and pause the loop using a flag (`isLooping`), then manually restart it when relevant events (e.g., `mousemove`, `mouseenter`) occur.
