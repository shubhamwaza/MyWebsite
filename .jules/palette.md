## 2024-11-08 - Added `aria-current` to active navigation links
**Learning:** Screen readers need more than just an `active` CSS class to determine the current page in a navigation menu. Adding `aria-current="page"` explicitly conveys this state programmatically, which is a common pattern missing when navigation is generated dynamically via JavaScript.
**Action:** Always add `aria-current="page"` alongside visual active state classes in navigation links to ensure parity between visual and programmatic states.
