## 2026-06-25 - Continuous requestAnimationFrame pausing
**Learning:** Background visual effects driven by `requestAnimationFrame` (like cursor followers) run indefinitely and consume CPU resources continuously if left unchecked.
**Action:** When implementing continuous background animations, explicitly measure when the animation has reached its target state (e.g., converged on cursor position) and pause the loop, restarting it only on user interaction events (e.g. `mousemove`) to save CPU and battery.
