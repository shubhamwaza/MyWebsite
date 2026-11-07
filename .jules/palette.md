## 2024-05-24 - Inline Form Validation
**Learning:** Users benefit significantly from immediate, inline visual and structural (ARIA) feedback on form errors, rather than just a top-level alert box. Marking individual invalid fields with `aria-invalid="true"` and a clear error state reduces cognitive load and improves screen reader experience.
**Action:** Always associate validation errors with their specific fields using `aria-invalid` and inline CSS states, and clear these states immediately upon user correction.
