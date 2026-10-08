## 2026-10-08 - Stop idle requestAnimationFrame loops
**Learning:** Found an infinite `requestAnimationFrame` loop driving a cursor-follow preview that runs constantly even when the user is idle, causing unnecessary CPU/battery drain.
**Action:** Added a threshold check to pause the loop when movement is microscopic, and restart it only on `mousemove`.
