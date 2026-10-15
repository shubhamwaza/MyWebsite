## 2026-09-13 - Pausing requestAnimationFrame
**Learning:** Unconditional requestAnimationFrame loops run indefinitely, draining CPU and battery even when the UI is idle.
**Action:** Always wrap requestAnimationFrame in a conditional that checks for actual state changes (e.g., position deltas) and stop the loop when idle. Restart it via relevant event listeners.
