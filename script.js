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
  const canvas = document.getElementById("field");
  const ctx = canvas ? canvas.getContext("2d") : null;

  let lenis = null;
  let introP = 0;
  let pageFade = 1;

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
  const card = document.getElementById("float-card");
  const listWrap = document.querySelector(".work-list-wrap");
  const workCount = document.querySelector("[data-work-count]");
  let activeRow = rows.find((row) => row.classList.contains("is-active")) || rows[0] || null;
  let pointerInside = false;
  let cardY = 0;
  let targetY = 0;
  let cardReady = false;

  function visibleRows() {
    return rows.filter((row) => !row.closest("li")?.hidden);
  }

  function compactWork() {
    return window.matchMedia("(max-width: 960px)").matches;
  }

  function placeCard(row) {
    if (!card || !listWrap || !row || compactWork()) return;
    const rowBox = row.getBoundingClientRect();
    const wrapBox = listWrap.getBoundingClientRect();
    targetY = rowBox.top - wrapBox.top + rowBox.height / 2 - card.offsetHeight / 2;
    if (!cardReady || reduced) {
      cardY = targetY;
      cardReady = true;
      card.style.transform = `translate3d(0, ${targetY}px, 0)`;
    }
    card.classList.add("is-on");
    card.href = row.href;
  }

  function glideCard() {
    if (card && !compactWork()) {
      cardY += (targetY - cardY) * 0.16;
      card.style.transform = `translate3d(0, ${cardY}px, 0)`;
    }
    requestAnimationFrame(glideCard);
  }

  function setActiveRow(row) {
    if (!row) return;
    if (row !== activeRow) {
      if (activeRow) activeRow.classList.remove("is-active");
      row.classList.add("is-active");
      activeRow = row;
      const next = row.dataset.shot;
      if (shot && next && shot.getAttribute("src") !== next) {
        shot.style.opacity = "0.15";
        const pending = new Image();
        pending.onload = () => {
          if (activeRow !== row) return;
          shot.src = next;
          shot.alt = row.dataset.alt || "";
          shot.style.opacity = "1";
        };
        pending.src = next;
      }
    }
    placeCard(row);
  }

  rows.forEach((row) => {
    row.addEventListener("mouseenter", () => {
      pointerInside = true;
      setActiveRow(row);
    });
    row.addEventListener("focus", () => setActiveRow(row));
  });

  if (listWrap) {
    listWrap.addEventListener("mouseleave", () => {
      pointerInside = false;
    });
  }

  document.querySelectorAll(".work-filters button").forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.filter;
      document.querySelectorAll(".work-filters button").forEach((item) => {
        item.classList.toggle("is-on", item === button);
      });
      document.querySelectorAll(".work-rows > li").forEach((item) => {
        item.hidden = key !== "all" && item.dataset.group !== key;
      });
      const shown = visibleRows();
      if (workCount) workCount.textContent = String(shown.length);
      cardReady = false;
      setActiveRow(shown[0]);
    });
  });

  function syncWorkFromScroll() {
    const shown = visibleRows();
    if (!shown.length || compactWork() || pointerInside) return;
    const section = document.getElementById("work");
    if (!section) return;
    const box = section.getBoundingClientRect();
    if (box.bottom < 80 || box.top > window.innerHeight - 80) return;
    const anchor = window.innerHeight * 0.42;
    let current = shown[0];
    let best = Infinity;
    shown.forEach((row) => {
      const rect = row.getBoundingClientRect();
      const dist = Math.abs(rect.top + rect.height / 2 - anchor);
      if (dist < best) {
        best = dist;
        current = row;
      }
    });
    setActiveRow(current);
  }

  if (shot) shot.addEventListener("load", () => placeCard(activeRow));
  if (!reduced) requestAnimationFrame(glideCard);
  placeCard(activeRow);

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

    if (hero && !reduced) {
      const distance = Math.max(1, hero.offsetHeight - window.innerHeight);
      introP = Math.min(1, Math.max(0, (y - hero.offsetTop) / distance));
      const past = Math.max(0, y - hero.offsetTop - distance);
      pageFade = past <= 0 ? 1 : Math.max(0, 1 - past / (window.innerHeight * 0.42));
      const scrub = document.querySelector("[data-scrub]");
      if (scrub) scrub.textContent = `${String(Math.round(introP * 100)).padStart(3, "0")} / 100`;
      const begin = document.querySelector(".scroll-begin");
      if (begin) begin.style.opacity = String(Math.max(0, 1 - introP * 1.35));
      if (heroStage) heroStage.style.transform = `translate3d(0, ${introP * -36}px, 0)`;
      document.documentElement.classList.toggle("is-intro", introP < 0.92);
    } else {
      introP = 1;
      pageFade = 0.45;
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

  const particles = [];
  let morphReady = false;

  function smooth(t) {
    return t * t * (3 - 2 * t);
  }

  function shuffle(list) {
    for (let i = list.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const swap = list[i];
      list[i] = list[j];
      list[j] = swap;
    }
    return list;
  }

  function fitCount(list, count) {
    if (!list.length) return [];
    if (list.length === count) return list.slice();
    const out = [];
    if (list.length > count) {
      const step = list.length / count;
      for (let i = 0; i < count; i += 1) out.push(list[Math.floor(i * step)]);
      return out;
    }
    for (let i = 0; i < count; i += 1) out.push(list[i % list.length]);
    return out;
  }

  function readPoints(source, width, height, gold, step = 2) {
    const data = source.getImageData(0, 0, width, height).data;
    const points = [];
    for (let y = 0; y < height; y += step) {
      for (let x = 0; x < width; x += step) {
        if (data[(y * width + x) * 4 + 3] > 140) {
          points.push({ x: x - width / 2, y: y - height / 2, gold });
        }
      }
    }
    return points;
  }

  function sampleLines(lines, font, color) {
    const scratch = document.createElement("canvas");
    const pen = scratch.getContext("2d", { willReadFrequently: true });
    pen.font = font;
    const size = Number((String(font).match(/(\d+)px/) || [])[1]) || 32;
    const lineHeight = size * 1.18;
    const widths = lines.map((line) => pen.measureText(line).width);
    const width = Math.ceil(Math.max(...widths, 8) + 12);
    const height = Math.ceil(lines.length * lineHeight + 12);
    scratch.width = width;
    scratch.height = height;
    pen.font = font;
    pen.fillStyle = color;
    pen.textBaseline = "top";
    lines.forEach((line, index) => {
      const lineWidth = pen.measureText(line).width;
      pen.fillText(line, (width - lineWidth) / 2, 6 + index * lineHeight);
    });
    return readPoints(pen, width, height, false, size < 30 ? 1 : 2);
  }

  function sentenceLines(size) {
    const text = "Storefronts, themes, and the systems underneath.";
    const maxWidth = window.innerWidth * (window.innerWidth < 720 ? 0.82 : 0.9);
    const pen = document.createElement("canvas").getContext("2d");
    pen.font = `400 ${size}px "Instrument Serif", serif`;
    if (pen.measureText(text).width <= maxWidth) return [text];
    const words = text.split(" ");
    const lines = [];
    let line = "";
    words.forEach((word) => {
      const trial = line ? `${line} ${word}` : word;
      if (line && pen.measureText(trial).width > maxWidth) {
        lines.push(line);
        line = word;
      } else {
        line = trial;
      }
    });
    if (line) lines.push(line);
    return lines;
  }

  function sampleName(size) {
    const scratch = document.createElement("canvas");
    const pen = scratch.getContext("2d", { willReadFrequently: true });
    const regular = `400 ${size}px "Instrument Serif", serif`;
    const italic = `italic 400 ${size}px "Instrument Serif", serif`;
    const left = "Denmark";
    const right = "Dano";
    pen.font = regular;
    const leftWidth = pen.measureText(left).width;
    const gap = size * 0.22;
    pen.font = italic;
    const rightWidth = pen.measureText(right).width;
    const width = Math.ceil(leftWidth + gap + rightWidth + 16);
    const height = Math.ceil(size * 1.28);
    scratch.width = width;
    scratch.height = height;
    pen.font = regular;
    pen.fillStyle = "#f3efe6";
    pen.textBaseline = "top";
    pen.fillText(left, 8, size * 0.16);
    const cream = readPoints(pen, width, height, false);
    pen.clearRect(0, 0, width, height);
    pen.font = italic;
    pen.fillStyle = "#e7a56a";
    pen.textBaseline = "top";
    pen.fillText(right, 8 + leftWidth + gap, size * 0.16);
    return cream.concat(readPoints(pen, width, height, true));
  }

  function buildParticles() {
    const narrow = window.innerWidth < 720;
    const sentenceSize = Math.round(Math.max(20, Math.min(window.innerWidth * (narrow ? 0.05 : 0.032), 46)));
    const nameSize = Math.round(Math.max(56, Math.min(window.innerWidth * (narrow ? 0.14 : 0.092), 128)));
    const phrase = sampleLines(sentenceLines(sentenceSize), `400 ${sentenceSize}px "Instrument Serif", serif`, "#f3efe6");
    const name = sampleName(nameSize);
    const count = Math.min(2600, Math.max(phrase.length, name.length, 1));
    const from = fitCount(phrase, count);
    const to = shuffle(fitCount(name, count));
    const reach = Math.min(window.innerWidth, window.innerHeight) * 0.48;
    particles.length = 0;
    for (let i = 0; i < count; i += 1) {
      const angle = Math.random() * Math.PI * 2;
      const radius = (0.16 + Math.random() ** 0.65 * 0.84) * reach;
      particles.push({
        sx: from[i].x,
        sy: from[i].y,
        nx: to[i].x,
        ny: to[i].y,
        gold: Boolean(to[i].gold),
        rx: Math.cos(angle) * radius,
        ry: Math.sin(angle) * radius * 0.76,
        tw: Math.random() * Math.PI * 2,
        size: Math.random() < 0.14 ? 1.65 : 1.2,
      });
    }
    morphReady = particles.length > 40;
    document.documentElement.classList.toggle("has-morph", morphReady && !reduced);
  }

  function fitField() {
    if (!ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(window.innerWidth * dpr);
    canvas.height = Math.floor(window.innerHeight * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function drawField(time) {
    if (!ctx) return;
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    if (!morphReady || pageFade < 0.02) {
      if (!reduced) requestAnimationFrame(drawField);
      return;
    }
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight * 0.48;
    const t = introP;
    particles.forEach((dot) => {
      let x = dot.sx;
      let y = dot.sy;
      let scatter = 0;
      if (t < 0.16) {
        x = dot.sx;
        y = dot.sy;
      } else if (t < 0.46) {
        const u = smooth((t - 0.16) / 0.3);
        x = dot.sx + (dot.rx - dot.sx) * u;
        y = dot.sy + (dot.ry - dot.sy) * u;
        scatter = u;
      } else if (t < 0.8) {
        const u = smooth((t - 0.46) / 0.34);
        x = dot.rx + (dot.nx - dot.rx) * u;
        y = dot.ry + (dot.ny - dot.ry) * u;
        scatter = 1 - u;
      } else {
        x = dot.nx;
        y = dot.ny;
      }
      const wobble = Math.sin(time * 0.0013 + dot.tw) * (0.45 + scatter * 7);
      const gather = t < 0.46 ? 0 : Math.min(1, (t - 0.46) / 0.34);
      const red = dot.gold ? 243 + (231 - 243) * gather : 243;
      const green = dot.gold ? 239 + (165 - 239) * gather : 239;
      const blue = dot.gold ? 230 + (106 - 230) * gather : 230;
      const alpha = (0.42 + (1 - scatter) * 0.55) * pageFade;
      ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
      ctx.beginPath();
      ctx.arc(cx + x + wobble, cy + y + wobble * 0.35, dot.size, 0, Math.PI * 2);
      ctx.fill();
    });
    if (!reduced) requestAnimationFrame(drawField);
  }

  if (ctx && !reduced) {
    fitField();
    let resizeTimer = 0;
    window.addEventListener("resize", () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        fitField();
        buildParticles();
      }, 140);
    });
    const startField = async () => {
      try {
        await Promise.all([
          document.fonts.load('400 64px "Instrument Serif"'),
          document.fonts.load('italic 400 64px "Instrument Serif"'),
        ]);
      } catch (error) {
        /* fall back to the generic serif */
      }
      fitField();
      buildParticles();
      requestAnimationFrame(drawField);
    };
    startField();
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
