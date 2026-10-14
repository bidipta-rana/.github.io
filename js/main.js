/* Renders the page from js/data.js. No build step, no dependencies. */

/* ---------- tiny DOM helper ---------- */
function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v === false || v === null || v === undefined) continue;
    if (k === "class") node.className = v;
    else if (k === "text") node.textContent = v;
    else node.setAttribute(k, v);
  }
  for (const c of children) {
    if (c === null || c === undefined) continue;
    node.append(c.nodeType ? c : document.createTextNode(c));
  }
  return node;
}

/* ---------- hero ECG trace ---------- */
(function buildTrace() {
  const unit = "h40 q15 -22 30 0 h25 l8 10 l14 -62 l14 84 l8 -32 h45 q22 -30 44 0 h72";
  const d = "M0 80 " + Array(4).fill(unit).join(" ");
  const path = document.getElementById("trace-path");
  const svg = document.getElementById("trace");
  if (!path || !svg) return;
  path.setAttribute("d", d);
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) svg.classList.add("draw");
})();

/* ---------- placeholder cover (used until you add a cover image) ---------- */
function placeholderCover() {
  const ns = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(ns, "svg");
  svg.setAttribute("viewBox", "0 0 300 100");
  svg.setAttribute("aria-hidden", "true");
  const p = document.createElementNS(ns, "path");
  p.setAttribute("d", "M0 60 " + Array(2).fill("h20 q8 -14 16 0 h14 l5 6 l8 -38 l8 52 l5 -20 h26 q12 -18 24 0 h14").join(" "));
  svg.append(p);
  return el("div", { class: "cover placeholder" }, svg);
}

/* ---------- projects ---------- */
const grid = document.getElementById("project-grid");
PROJECTS.forEach(p => {
  const cover = p.cover
    ? el("img", { class: "cover", src: p.cover, alt: "", loading: "lazy" })
    : placeholderCover();
  const card = el("button", { class: "card", type: "button", "data-id": p.id },
    cover,
    el("div", { class: "card-body" },
      el("p", { class: "card-kind", text: p.kind }),
      el("h3", { text: p.title }),
      el("p", { class: "card-summary", text: p.summary }),
      el("ul", { class: "tags" }, ...p.tags.map(t => el("li", { text: t })))
    )
  );
  card.addEventListener("click", () => openProject(p.id));
  grid.append(card);
});

/* ---------- experience ---------- */
const timeline = document.getElementById("timeline");
EXPERIENCE.forEach(x => {
  const li = el("li", {},
    el("p", { class: "when", text: x.when }),
    el("h3", { text: x.role }),
    el("p", { class: "org", text: x.org }),
    el("p", { text: x.text })
  );
  if (x.project) {
    const b = el("button", { class: "link-btn", type: "button", text: "See this work" });
    b.addEventListener("click", () => openProject(x.project));
    li.append(b);
  }
  timeline.append(li);
});

/* ---------- publications ---------- */
const pubList = document.getElementById("pub-list");
PUBLICATIONS.forEach(p => {
  const title = p.url
    ? el("a", { href: p.url, target: "_blank", rel: "noopener", text: p.title })
    : document.createTextNode(p.title);
  pubList.append(el("li", {},
    el("strong", {}, title),
    el("span", { class: "venue", text: p.authors }),
    el("span", { class: "venue", text: p.venue })
  ));
});

/* ---------- education + skills ---------- */
function fillFacts(id, rows) {
  const dl = document.getElementById(id);
  rows.forEach(([t, d]) => dl.append(el("dt", { text: t }), el("dd", { text: d })));
}
fillFacts("education", EDUCATION);
fillFacts("skills", SKILLS);

/* ---------- contact ---------- */
const contact = document.getElementById("contact-actions");
if (SITE.email) contact.append(el("a", { class: "btn primary", href: "mailto:" + SITE.email, text: "Email me" }));
if (SITE.linkedin) contact.append(el("a", { class: "btn", href: SITE.linkedin, target: "_blank", rel: "noopener", text: "LinkedIn" }));
if (SITE.github) contact.append(el("a", { class: "btn", href: SITE.github, target: "_blank", rel: "noopener", text: "GitHub" }));
contact.append(el("a", { class: "btn", href: "assets/Bidipta_Rana_Resume.pdf", target: "_blank", rel: "noopener", text: "Resume (PDF)" }));

document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- project dialog ---------- */
const dlg = document.getElementById("project-dialog");
const body = document.getElementById("dlg-body");

function videoNode(v) {
  const wrap = el("div", { class: "video-wrap" });
  if (v.startsWith("youtube:")) {
    wrap.append(el("iframe", {
      src: "https://www.youtube-nocookie.com/embed/" + v.slice(8),
      title: "Project video", loading: "lazy", allowfullscreen: "",
      allow: "accelerometer; encrypted-media; gyroscope; picture-in-picture"
    }));
  } else if (v.startsWith("drive:")) {
    wrap.append(el("iframe", {
      src: "https://drive.google.com/file/d/" + v.slice(6) + "/preview",
      title: "Project video", loading: "lazy", allow: "autoplay", allowfullscreen: ""
    }));
  } else {
    wrap.append(el("video", { src: v, controls: "", preload: "metadata" }));
  }
  return wrap;
}

function block(title, content) {
  return el("section", { class: "media-block" }, el("h4", { text: title }), content);
}

function openProject(id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;
  document.getElementById("dlg-kind").textContent = p.kind;
  document.getElementById("dlg-title").textContent = p.title;
  document.getElementById("dlg-where").textContent = p.where;
  body.replaceChildren(el("p", { text: p.description }));

  if (p.videos && p.videos.length) {
    body.append(block("Video", el("div", {}, ...p.videos.map(videoNode))));
  }
  if (p.images && p.images.length) {
    body.append(block("Photos", el("div", { class: "gallery" },
      ...p.images.map(src => el("a", { href: src, target: "_blank", rel: "noopener" },
        el("img", { src, alt: p.title + " photo", loading: "lazy" }))))));
  }
  if (p.reports && p.reports.length) {
    body.append(block("Reports", el("ul", { class: "report-list" },
      ...p.reports.map(r => el("li", {}, el("a", { href: r.url, target: "_blank", rel: "noopener", text: r.label }))))));
  }
  if (!(p.videos?.length || p.images?.length || p.reports?.length)) {
    body.append(el("p", { class: "empty-note", text: "Photos, video and reports for this project are coming soon." }));
  }
  dlg.showModal();
  dlg.scrollTop = 0;
}

document.getElementById("dlg-close").addEventListener("click", () => dlg.close());
dlg.addEventListener("click", e => { if (e.target === dlg) dlg.close(); });
dlg.addEventListener("close", () => body.replaceChildren());  // stops any playing video
