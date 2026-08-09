/* whoami · Sankha Cooray — tiny data-driven renderer (no deps) */
(function () {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);

  // ── theme (persisted; first visit follows OS) ───────────────────────
  const root = document.documentElement;
  const saved = localStorage.getItem("whoami-theme");
  if (saved) root.setAttribute("data-theme", saved);
  else if (window.matchMedia && matchMedia("(prefers-color-scheme: light)").matches)
    root.setAttribute("data-theme", "light");
  $("#themebtn").addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    localStorage.setItem("whoami-theme", next);
  });

  // ── header text ─────────────────────────────────────────────────────
  $("#role").innerHTML = DATA.role;
  $("#ikigai").innerHTML = DATA.ikigai;

  // ── build tabs ──────────────────────────────────────────────────────
  const tabsEl = $("#tabs");
  const wrapEl = $("#panelwrap");
  DATA.tabs.forEach((t, i) => {
    const b = document.createElement("button");
    b.className = "tab";
    b.setAttribute("role", "tab");
    b.setAttribute("aria-selected", i === 0 ? "true" : "false");
    b.dataset.idx = i;
    b.innerHTML = t.label + (t.pct != null ? ` <span class="pct">${t.pct}%</span>` : "");
    b.addEventListener("click", () => select(i));
    tabsEl.appendChild(b);
    wrapEl.appendChild(buildPanel(t, i));
  });

  function buildPanel(t, i) {
    const p = document.createElement("div");
    p.className = "panel" + (i === 0 ? " active" : "");
    p.setAttribute("role", "tabpanel");
    p.dataset.idx = i;

    // LEFT column
    const left = document.createElement("div");
    left.className = "p-left";
    left.innerHTML =
      (t.kicker ? `<div class="p-kicker">${t.kicker}</div>` : "") +
      `<h2>${t.heading}</h2>` +
      `<p class="p-blurb">${t.blurb}</p>` +
      (t.pct != null
        ? `<div class="p-tag"><span class="big">${t.pct}%</span> ${t.tagline || ""}</div>`
        : (t.tagline ? `<div class="p-tag">${t.tagline}</div>` : ""));

    // RIGHT column
    const right = document.createElement("div");
    right.className = "p-right";
    if (t.bars) {
      right.innerHTML =
        `<div class="bars">` +
        t.bars.map(b =>
          `<div class="bar"><span class="lbl">${b.label}</span>` +
          `<span class="track"><span class="fill" data-w="${b.value}"></span></span>` +
          `<span class="val">${b.value}%</span></div>`).join("") +
        `</div>`;
    } else {
      right.innerHTML =
        `<div class="p-kicker">${t.skillsLabel || "skills & tools"}</div>` +
        `<div class="chips">` +
        t.skills.map(s => {
          const key = typeof s === "object" && s.key;
          const label = typeof s === "object" ? s.label : s;
          return `<span class="chip${key ? " key" : ""}">${label}</span>`;
        }).join("") +
        `</div>`;
    }

    p.appendChild(left);
    p.appendChild(right);
    return p;
  }

  function select(i, push) {
    tabsEl.querySelectorAll(".tab").forEach(t =>
      t.setAttribute("aria-selected", +t.dataset.idx === i ? "true" : "false"));
    wrapEl.querySelectorAll(".panel").forEach(p =>
      p.classList.toggle("active", +p.dataset.idx === i));
    animateBars(i);
    if (push !== false) {
      const slug = DATA.tabs[i].label;
      history.replaceState(null, "", i === 0 ? location.pathname : "#" + slug);
    }
  }

  // deep-link: open the tab named in the URL hash (e.g. /#engineer)
  function idxFromHash() {
    const slug = decodeURIComponent(location.hash.replace(/^#/, "")).toLowerCase();
    const i = DATA.tabs.findIndex(t => t.label.toLowerCase() === slug);
    return i < 0 ? 0 : i;
  }
  const start = idxFromHash();
  if (start !== 0) select(start, false);
  window.addEventListener("hashchange", () => select(idxFromHash(), false));

  // animate the Overall bars when shown
  function animateBars(i) {
    const panel = wrapEl.querySelector(`.panel[data-idx="${i}"]`);
    if (!panel) return;
    panel.querySelectorAll(".fill").forEach(f => {
      f.style.width = "0";
      requestAnimationFrame(() => requestAnimationFrame(() => { f.style.width = f.dataset.w + "%"; }));
    });
  }

  animateBars(0); // first paint

  // keyboard: ← → to move between tabs
  document.addEventListener("keydown", e => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    const cur = +tabsEl.querySelector('[aria-selected="true"]').dataset.idx;
    const n = DATA.tabs.length;
    select(e.key === "ArrowRight" ? (cur + 1) % n : (cur - 1 + n) % n);
  });
})();
