## 2024-05-09 - Navigation Accessibility Enhancements
**Learning:** Setting static aria-labels is not enough for interactive elements like mobile menus. Missing dynamic `aria-expanded` and updated `aria-label` fails to convey state changes to screen readers. Also, active links need `aria-current="page"` to be semantically identified.
**Action:** Always verify that stateful toggles update their ARIA attributes dynamically and active links properly declare their current state.
