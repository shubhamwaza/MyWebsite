## 2024-11-05 - Form Validation Accessibility
**Learning:** Inline validation needs more than just a global alert message; adding aria-invalid and visual cues directly to the offending field is critical for both screen readers and cognitive UX. Existing design system utility classes like .is-invalid are often ignored in custom JS.
**Action:** Ensure all form validations map error states visually and semantically back to the specific problematic input, utilizing existing CSS tokens.
