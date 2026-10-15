## 2026-08-13 - Layout Thrashing in High-Frequency Events
**Learning:** Calling `getBoundingClientRect()` inside high-frequency event listeners like `mousemove` causes layout thrashing and performance bottlenecks, especially when elements have active CSS transforms.
**Action:** Cache DOM measurements using a global version integer (incremented on `scroll` or `resize`) and locally invalidate when versions mismatch. Temporarily remove CSS transforms (`el.style.transform = "none"`) before measuring to ensure accurate bounds.
