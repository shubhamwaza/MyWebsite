## 2024-05-24 - Add ARIA Labels to Mobile Menu Button
**Learning:** Found a mobile menu toggle button `navToggle` that uses icon-only SVG without any screen reader fallback or accessible label, reducing accessibility for screen reader users.
**Action:** Always add `aria-label` or `aria-expanded` properties to interactive elements that lack text content.
