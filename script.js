(() => {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const desktopQuery = window.matchMedia("(min-width: 961px)");

  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  const progressBar = document.querySelector(".scroll-progress span");
  const chapterIndex = document.querySelector("[data-chapter-index]");
  const chapterLabel = document.querySelector("[data-chapter-label]");
  const chapters = [...document.querySelectorAll("[data-chapter]")];
  const heroStage = document.querySelector(".hero-stage");
  const hero = document.querySelector(".hero");

  let lenis = null;

  function closeNav() {
    if (!toggle || !nav) return;
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    nav.classList.remove("is-open");
    document.body.style.overflow = "";
    if (lenis) lenis.start();
  }

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      toggle.setAttribute("aria-label", open ? "Open menu" : "Close menu");
      nav.classList.toggle("is-open", !open);
      document.body.style.overflow = open ? "" : "hidden";
      if (lenis) {
        if (open) lenis.start();
        else lenis.stop();
      }
    });
  }

  const rows = [...document.querySelectorAll(".work-row")];
  const shot = document.getElementById("work-shot");
  const shotLabel = document.getElementById("work-shot-label");
  let activeRow = rows.find((row) => row.classList.contains("is-active")) || rows[0] || null;

  function setActiveRow(row) {
    if (!row || row === activeRow) return;
    if (activeRow) activeRow.classList.remove("is-active");
    row.classList.add("is-active");
    activeRow = row;
    const next = row.dataset.shot;
    if (shot && next && shot.getAttribute("src") !== next) {
      shot.style.opacity = "0.2";
      const pending = new Image();
      pending.onload = () => {
        if (activeRow !== row) return;
        shot.src = next;
        shot.alt = row.dataset.alt || "";
        shot.style.opacity = "1";
      };
      pending.src = next;
    }
    if (shotLabel) shotLabel.textContent = row.dataset.label || "";
  }

  rows.forEach((row) => {
    row.addEventListener("mouseenter", () => setActiveRow(row));
    row.addEventListener("focus", () => setActiveRow(row));
  });

  function syncWorkFromScroll() {
    if (!rows.length || !desktopQuery.matches) return;
    const preview = document.querySelector(".work-preview");
    const box = preview ? preview.getBoundingClientRect() : null;
    const anchor = box && box.height > 40
      ? box.top + box.height * 0.38
      : window.innerHeight * 0.4;
    let current = rows[0];
    let best = Infinity;
    rows.forEach((row) => {
      const rect = row.getBoundingClientRect();
      const dist = Math.abs(rect.top + rect.height / 2 - anchor);
      if (dist < best) {
        best = dist;
        current = row;
      }
    });
    setActiveRow(current);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
  );

  document.querySelectorAll(".skill-item, .focus-card, .role").forEach((el, i) => {
    el.style.transitionDelay = el.style.transitionDelay || `${Math.min(i * 0.04, 0.28)}s`;
    observer.observe(el);
  });

  function scrollY() {
    return lenis ? lenis.scroll : window.scrollY;
  }

  function onScroll() {
    const y = scrollY();
    const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    if (progressBar) progressBar.style.transform = `scaleX(${Math.min(1, y / max)})`;
    syncWorkFromScroll();

    if (heroStage && hero && !reduced) {
      const limit = hero.offsetHeight || 1;
      const t = Math.min(1, Math.max(0, y / limit));
      heroStage.style.transform = `translate3d(0, ${t * 42}px, 0)`;
      heroStage.style.opacity = String(1 - t * 0.35);
    }

    if (chapterIndex && chapterLabel && chapters.length) {
      let current = chapters[0];
      const line = window.innerHeight * 0.42;
      chapters.forEach((section) => {
        if (section.getBoundingClientRect().top <= line) current = section;
      });
      chapterIndex.textContent = current.dataset.chapter || "";
      chapterLabel.textContent = current.dataset.chapterLabel || "";
      const chapterHref = `#${current.dataset.chapterLabel || ""}`;
      document.querySelectorAll(".site-nav a").forEach((link) => {
        link.classList.toggle("is-current", link.getAttribute("href") === chapterHref);
      });
    }
  }

  function scrollToTarget(target) {
    if (lenis) {
      lenis.scrollTo(target, { offset: 0, duration: 1.15 });
      return;
    }
    const top = target === 0 ? 0 : target.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top, behavior: reduced ? "auto" : "smooth" });
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const hash = link.getAttribute("href");
      if (!hash || hash === "#") return;
      const target = hash === "#top" ? document.body : document.querySelector(hash);
      if (!target) return;
      event.preventDefault();
      closeNav();
      scrollToTarget(hash === "#top" ? 0 : target);
      if (history.replaceState) history.replaceState(null, "", hash);
    });
  });

  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  if (form && status) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const email = String(data.get("email") || "").trim();
      const subject = String(data.get("subject") || "").trim();
      const message = String(data.get("message") || "").trim();

      if (!name || !email || !subject || !message) {
        status.textContent = "Please fill in all required fields.";
        status.className = "form-status is-error";
        return;
      }

      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
      const mailSubject = encodeURIComponent(subject || "New Contact Form Submission");

      status.textContent = "Opening your email client…";
      status.className = "form-status is-success";

      window.location.href = `mailto:kramdano@gmail.com?subject=${mailSubject}&body=${body}`;
      form.reset();
    });
  }

  function bootLenis() {
    if (reduced || typeof Lenis === "undefined") {
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
      return;
    }

    document.documentElement.classList.add("has-smooth");
    lenis = new Lenis({
      lerp: 0.085,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.05,
      smoothWheel: true,
    });
    lenis.on("scroll", onScroll);
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }

  onScroll();
  window.addEventListener("resize", onScroll);
  window.addEventListener("load", onScroll);
  bootLenis();
})();
