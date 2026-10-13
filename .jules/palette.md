## 2024-10-14 - Improve Form Validation Feedback
**Learning:** Custom client-side form validation scripts in this project display error alerts but fail to apply `aria-invalid="true"` or visually highlight the specific input field with an error, even though a `.is-invalid` CSS class exists.
**Action:** Always map validation errors directly to their corresponding input fields using `aria-invalid` and visual error classes, and clear these states upon the next submission attempt.
