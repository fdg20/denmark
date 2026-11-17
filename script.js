(() => {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const desktopQuery = window.matchMedia("(min-width: 961px)");

  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  const progressBar = document.querySelector(".scroll-progress span");
  const chapterIndex = document.querySelector("[data-chapter-index]");
  const chapterLabel = document.querySelector("[data-chapter-label]");
  const chapters = [...document.querySelectorAll("[data-chapter]")];
  const pin = document.querySelector("[data-work-pin]");
  const track = document.querySelector("[data-work-track]");
  const workMeter = document.querySelector("[data-work-meter]");
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

  document.querySelectorAll(".project").forEach((project, index, all) => {
    const label = document.createElement("p");
    label.className = "project-index";
    label.textContent = `${String(index + 1).padStart(2, "0")} / ${String(all.length).padStart(2, "0")}`;
    const body = project.querySelector(".project-body");
    if (body) body.prepend(label);
  });

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

  function pinning() {
    return !reduced && desktopQuery.matches && pin && track;
  }

  function layoutPin() {
    if (!pin || !track) return;
    if (!pinning()) {
      document.documentElement.classList.remove("has-pin");
      pin.style.height = "";
      track.style.transform = "";
      if (workMeter) workMeter.style.transform = "scaleX(0)";
      return;
    }
    document.documentElement.classList.add("has-pin");
    const distance = Math.max(0, track.scrollWidth - window.innerWidth);
    pin.style.height = `${window.innerHeight + distance}px`;
  }

  function onScroll() {
    const y = scrollY();
    const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    if (progressBar) progressBar.style.transform = `scaleX(${Math.min(1, y / max)})`;

    if (pinning()) {
      const start = pin.offsetTop;
      const distance = Math.max(1, pin.offsetHeight - window.innerHeight);
      const local = Math.min(1, Math.max(0, (y - start) / distance));
      const shift = Math.max(0, track.scrollWidth - window.innerWidth) * local;
      track.style.transform = `translate3d(${-shift}px,0,0)`;
      if (workMeter) workMeter.style.transform = `scaleX(${local})`;
    }

    if (heroStage && hero && !reduced) {
      const limit = hero.offsetHeight || 1;
      const t = Math.min(1, Math.max(0, y / limit));
      heroStage.style.transform = `translate3d(0, ${t * 42}px, 0)`;
      heroStage.style.opacity = String(1 - t * 0.55);
    }

    if (chapterIndex && chapterLabel && chapters.length) {
      let current = chapters[0];
      const line = window.innerHeight * 0.42;
      chapters.forEach((section) => {
        if (section.getBoundingClientRect().top <= line) current = section;
      });
      chapterIndex.textContent = current.dataset.chapter || "";
      chapterLabel.textContent = current.dataset.chapterLabel || "";
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

  layoutPin();
  onScroll();
  window.addEventListener("resize", () => {
    layoutPin();
    onScroll();
  });
  desktopQuery.addEventListener("change", () => {
    layoutPin();
    onScroll();
  });
  window.addEventListener("load", () => {
    layoutPin();
    onScroll();
  });

  if (track && "ResizeObserver" in window) {
    const ro = new ResizeObserver(() => {
      layoutPin();
      onScroll();
    });
    ro.observe(track);
  }

  bootLenis();
})();
