## 2024-05-15 - Adding skip links to dynamically rendered navigation
**Learning:** Adding a static skip link in a dynamically rendered component can be tricky when `<main>` tags lack consistent IDs across pages.
**Action:** When adding skip links, use a script to find and assign an ID to the `<main>` tag across all pages if missing, then ensure the dynamically rendered nav injects the link appropriately pointing to that ID.
