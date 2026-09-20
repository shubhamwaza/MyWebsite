## 2024-09-20 - [Mobile Menu Accessibility]
**Learning:** Pure HTML/JS custom overlays (like mobile menus) require manual state management (`aria-expanded`, `aria-controls`) and explicit Escape key handlers to meet basic accessibility standards, as they lack native semantic overlay behaviors.
**Action:** Always verify `aria-expanded` toggling and Escape key close functionality when dealing with custom toggleable menus/overlays in vanilla JS codebases.
