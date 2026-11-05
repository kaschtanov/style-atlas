// Renders the atlas from window.ATLAS and filters it by family. The chosen family is kept in the URL hash (#glow).
(function () {
  const { families, sites } = window.ATLAS;
  const atlas = document.getElementById("atlas");
  const chips = document.getElementById("chips");
  const count = document.getElementById("count");
  const tpl = document.getElementById("family-tpl");

  const host = (url) => new URL(url).hostname.replace(/^www\./, "");

  families.forEach((f, i) => {
    const node = tpl.content.firstElementChild.cloneNode(true);
    node.id = f.id;
    node.dataset.family = f.id;
    node.setAttribute("aria-labelledby", `${f.id}-name`);
    node.querySelector(".swatch").classList.add(`swatch--${f.id}`);
    node.querySelector(".swatch").innerHTML = "<i></i><i></i><i></i>";
    node.querySelector(".family-no").textContent = `Family ${String(i + 1).padStart(2, "0")}`;
    const name = node.querySelector(".family-name");
    name.id = `${f.id}-name`;
    name.textContent = f.name;
    node.querySelector(".family-rule").textContent = f.rule;
    const signs = node.querySelector(".signs");
    f.signs.forEach((s) => {
      const li = document.createElement("li");
      li.textContent = s;
      signs.append(li);
    });
    const list = node.querySelector(".sites");
    sites.filter((s) => s.family === f.id).forEach((s) => {
      const li = document.createElement("li");
      li.className = "site";
      li.innerHTML = `<a href="${s.url}" rel="noopener noreferrer" target="_blank">
          <span class="site-name"></span><span class="site-host"></span>
          <span class="site-line"></span>
          <span class="visually-hidden"> (opens in a new tab)</span>
        </a>`;
      li.querySelector(".site-name").textContent = s.name;
      li.querySelector(".site-host").textContent = host(s.url);
      li.querySelector(".site-line").textContent = s.line;
      list.append(li);
    });
    atlas.append(node);
  });

  const all = [{ id: "all", name: "All families" }, ...families];
  all.forEach((f) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "chip";
    b.dataset.family = f.id;
    const n = f.id === "all" ? sites.length : sites.filter((s) => s.family === f.id).length;
    b.innerHTML = `<span class="dot dot--${f.id}" aria-hidden="true"></span><span></span><span class="chip-n">${n}</span>`;
    b.children[1].textContent = f.name;
    b.addEventListener("click", () => {
      show(f.id);
      history.replaceState(null, "", f.id === "all" ? location.pathname : `#${f.id}`);
    });
    chips.append(b);
  });

  function show(id) {
    const valid = all.some((f) => f.id === id) ? id : "all";
    chips.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", String(c.dataset.family === valid)));
    atlas.querySelectorAll(".family").forEach((s) => {
      s.hidden = valid !== "all" && s.dataset.family !== valid;
    });
    const n = valid === "all" ? sites.length : sites.filter((s) => s.family === valid).length;
    const fam = families.find((f) => f.id === valid);
    count.textContent = fam ? `${n} sites in ${fam.name}` : `${n} sites in ${families.length} families`;
  }

  show(location.hash.slice(1) || "all");

  // The sticky filter bar wraps to two rows on narrow screens; keep the sticky family headings below it.
  const bar = document.querySelector(".filters");
  new ResizeObserver(() => {
    document.documentElement.style.setProperty("--bar", `${bar.offsetHeight}px`);
  }).observe(bar);
})();
