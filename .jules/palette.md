## 2024-11-20 - Accessible JavaScript-Rendered Navigation
**Learning:** In vanilla JS codebases where navigation and toggle components are injected dynamically, ARIA attributes (`aria-expanded`, `aria-label`, `aria-controls`, `aria-current`) must be managed within the DOM manipulation logic. Simple CSS classes (`active`, `open`) are insufficient for screen readers without their corresponding ARIA counterparts being updated in sync.
**Action:** When updating or implementing JS-rendered interactive elements, always bind `aria-*` state changes alongside class toggles inside event listeners.
