## 2024-09-09 - Continuous requestAnimationFrame Loops

**Learning:** Animations implemented with `requestAnimationFrame` that interpolate values continuously (like a cursor-following preview box) can run endlessly at 60+ FPS even when the user is completely idle, wasting CPU and battery.
**Action:** When implementing continuous easing or lerp animations, always calculate the delta to the target and explicitly pause the loop (e.g., stopping the `requestAnimationFrame` calls) when the target is reached or the component is inactive, resuming it only via user interaction events.
