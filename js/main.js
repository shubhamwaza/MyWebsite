// ===== Icons (inline SVG strings, no external deps) =====
const ICON_ARROW = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>`;
const ICON_MENU = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="7" x2="20" y2="7"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="17" x2="20" y2="17"></line></svg>`;
const ICON_CLOSE = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
const ICON_CHECK = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
const ICON_DOWNLOAD = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`;
const ICON_BACK = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>`;

const NAV_LINKS = [
  { href: "index.html", label: "Home" },
  { href: "about.html", label: "About" },
  { href: "work.html", label: "Work" },
  { href: "services.html", label: "Services" },
  { href: "resume.html", label: "Resume" },
  { href: "blog.html", label: "Blog" },
  { href: "contact.html", label: "Contact" }
];

function currentPage() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  return path;
}

function renderNav() {
  const el = document.getElementById("nav-placeholder");
  if (!el) return;
  const active = currentPage();

  el.innerHTML = `
    <header class="site-nav" id="siteNav">
      <div class="container">
        <a href="index.html" class="nav-logo" style="display:flex; align-items:center;"><span class="nav-mark">S.W.</span>Shubham Waza</a>
        <ul class="nav-links">
          ${NAV_LINKS.map(l => `<li><a href="${l.href}" class="${l.href === active ? "active" : ""}">${l.label}</a></li>`).join("")}
        </ul>
        <a href="contact.html" class="btn btn-outline nav-cta magnetic">Let's Connect</a>
        <button class="nav-toggle" id="navToggle" aria-label="Open menu">${ICON_MENU}</button>
      </div>
    </header>
    <div class="mobile-menu" id="mobileMenu">
      <div class="container">
        <ul>
          ${NAV_LINKS.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join("")}
        </ul>
      </div>
    </div>
  `;

  const nav = document.getElementById("siteNav");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 8);
  }, { passive: true });

  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("mobileMenu");
  let open = false;
  toggle.addEventListener("click", () => {
    open = !open;
    menu.classList.toggle("open", open);
    toggle.innerHTML = open ? ICON_CLOSE : ICON_MENU;
    document.body.style.overflow = open ? "hidden" : "";
  });
  menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    open = false;
    menu.classList.remove("open");
    toggle.innerHTML = ICON_MENU;
    document.body.style.overflow = "";
  }));
}

function renderFooter() {
  const el = document.getElementById("footer-placeholder");
  if (!el) return;
  const social = [
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Behance", href: "https://behance.net" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Email", href: "mailto:hello@shubhamwaza.com" }
  ];
  el.innerHTML = `
    <footer class="site-footer">
      <div class="container footer-top">
        <div>
          <p class="footer-logo">Shubham Waza</p>
          <p class="footer-tagline">Designing brands and digital experiences that people remember.</p>
        </div>
        <ul class="footer-social">
          ${social.map(s => `<li><a href="${s.href}" ${s.href.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}>${s.label}</a></li>`).join("")}
        </ul>
      </div>
      <div class="container" style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:16px;">
        <p class="footer-copy">© ${new Date().getFullYear()} Shubham Waza. All rights reserved.</p>
        <a href="#top" class="back-to-top" id="backToTop">Back to top ↑</a>
      </div>
    </footer>
  `;

  document.getElementById("backToTop")?.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ===== Scroll reveal =====
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach(i => i.classList.add("in-view"));
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
  items.forEach(i => obs.observe(i));
}

function escapeHtml(str) {
  if (typeof str !== 'string') return str;
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// ===== Magnetic hover — nudges an element toward the cursor within its bounds =====
function initMagnetic(selector = ".magnetic") {
  document.querySelectorAll(selector).forEach(el => {
    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
    });
    el.addEventListener("mouseleave", () => {
      el.style.transform = "translate(0, 0)";
    });
  });
}

// ===== Orange gradient hover =====
// Adds a cursor-positioned accent glow to interactive surfaces on pointer devices.
function initOrangeHover() {
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  const selector = ".btn, .row-item, .project-card, .service-card, .worked-row, .client-cell, .filter-btn, .blog-card, .cs-next-row, .back-to-top, .link-arrow";

  document.addEventListener("pointermove", (event) => {
    const target = event.target.closest(selector);
    if (!target) return;

    const rect = target.getBoundingClientRect();
    target.classList.add("orange-hover");
    target.style.setProperty("--hover-x", `${event.clientX - rect.left}px`);
    target.style.setProperty("--hover-y", `${event.clientY - rect.top}px`);
  }, { passive: true });

  document.addEventListener("pointerout", (event) => {
    const target = event.target.closest(selector);
    if (!target || target.contains(event.relatedTarget)) return;
    target.classList.remove("orange-hover");
  }, { passive: true });
}

// ===== Cursor-follow image preview =====
// Attach to any set of elements with a data-preview="path/to/image.jpg" attribute.
// A single floating box follows the cursor and swaps its image per hovered row.
function initCursorPreview(itemSelector) {
  if (window.matchMedia && window.matchMedia("(max-width: 899px)").matches) return;

  let box = document.getElementById("cursorPreview");
  if (!box) {
    box = document.createElement("div");
    box.id = "cursorPreview";
    box.className = "cursor-preview";
    box.innerHTML = `<img id="cursorPreviewImg" src="" alt="" />`;
    document.body.appendChild(box);
  }
  const img = document.getElementById("cursorPreviewImg");

  let targetX = 0, targetY = 0, curX = 0, curY = 0;
  let active = false;

  function loop() {
    curX += (targetX - curX) * 0.18;
    curY += (targetY - curY) * 0.18;
    box.style.left = curX + "px";
    box.style.top = curY + "px";
    requestAnimationFrame(loop);
  }
  loop();

  document.addEventListener("mousemove", (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
  });

  document.querySelectorAll(itemSelector).forEach(el => {
    const src = el.getAttribute("data-preview");
    if (!src) return;
    el.addEventListener("mouseenter", () => {
      img.setAttribute("src", src);
      box.classList.add("active");
      active = true;
    });
    el.addEventListener("mouseleave", () => {
      box.classList.remove("active");
      active = false;
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderNav();
  renderFooter();
  initReveal();
  initMagnetic();
  initOrangeHover();
});
