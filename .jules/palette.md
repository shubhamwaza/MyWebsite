## 2024-05-18 - Semantic Active States in Dynamic Navs
**Learning:** In vanilla JS projects where navigation markup is conditionally generated via template literals (e.g., `renderNav()`), visual active states like `class="active"` are easily applied but their semantic equivalent is often missed, breaking screen reader context.
**Action:** Always ensure that `aria-current="page"` is applied conditionally alongside any visual active classes in dynamic JS renders to maintain parity between visual and semantic states.
