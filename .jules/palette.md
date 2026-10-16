## 2024-05-14 - Simulated Async Loading States
**Learning:** Found that the contact form jumps immediately to the success state upon submission without any feedback. Even in a static frontend where the submission is simulated, failing to provide a temporary "loading" state (with a disabled button and spinner) makes the interaction feel abrupt and less trustworthy.
**Action:** Always implement a realistic disabled/loading state on form submission buttons before transitioning to the final success/error UI, even if the backend is mocked, using a timeout.
