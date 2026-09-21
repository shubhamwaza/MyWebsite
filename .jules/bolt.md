## 2024-05-17 - Pause Idle Cursor Previews
**Learning:** Background visual flair like cursor followers can cause constant 60fps renders even when the cursor is idle.
**Action:** Always pause `requestAnimationFrame` loops when current and target values have converged (e.g. diff < 0.1) and only restart them when user input provides new targets.
