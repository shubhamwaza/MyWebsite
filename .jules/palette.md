## 2026-10-02 - Add accessibility properties to navigation and mobile menu
**Learning:** JS-rendered navigation missing `aria-current="page"` and mobile menu toggles lacking `aria-expanded` and dynamic `aria-label`s represent common accessibility gaps that hinder screen reader users.
**Action:** Always ensure active links have `aria-current="page"` and state-toggling buttons update their `aria-expanded` and `aria-label` attributes dynamically when triggered.
