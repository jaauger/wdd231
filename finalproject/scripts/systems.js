import { openModal } from "./modal.js";
import { toggleFavorite, getFavorites } from "./storage.js";

const DATA_URL = "data/systems.json";

const grid = document.querySelector("#systems-grid");
const typeFilter = document.querySelector("#typeFilter");
const sortSelect = document.querySelector("#sortSelect");

const modal = document.querySelector("#systemModal");
const modalContent = document.querySelector("#modalContent");
const closeModalBtn = document.querySelector("#closeModal");

// Badge section containers
const protocolBadgeContainer = document.querySelector("#protocol-badges");
const controllerBadgeContainer = document.querySelector("#controller-badges");
const networkingBadgeContainer = document.querySelector("#networking-badges");

let buildings = [];

/* -------------------------
   FETCH DATA
-------------------------- */

async function loadSystems() {
  try {
    const response = await fetch(DATA_URL);
    const data = await response.json();

    buildings = data.buildings;

    renderCards(buildings);
    populateTypeFilter(buildings);
    populateCapabilityBadges(buildings);

  } catch (err) {
    console.error("Failed to load systems.json", err);
  }
}

loadSystems();

/* -------------------------
   RENDER CARDS
-------------------------- */

function renderCards(list) {
  grid.innerHTML = "";

  list.forEach(building => {

    const card = document.createElement("article");
    card.className = "system-card";

    const img = document.createElement("img");
    img.src = building.image;
    img.alt = `${building.name} building`;
    img.loading = "lazy";
    img.width = 400;
    img.height = 260;

    const title = document.createElement("h3");
    title.textContent = building.name;

    const meta = document.createElement("p");
    meta.className = "meta";
    meta.textContent = `${building.type} • ${building.location}`;

    const platform = document.createElement("p");
    platform.innerHTML = `<strong>Platform:</strong> ${building.platform}`;

    // Protocol badges for each card
    const badgeWrap = document.createElement("div");
    badgeWrap.className = "protocol-badges";

    building.protocols?.forEach(proto => {

      const span = document.createElement("span");
      span.className = "badge protocol";
      span.dataset.protocol = proto.toLowerCase().replace(/\s+/g, "-");
      span.textContent = proto;

      badgeWrap.appendChild(span);

    });

    const btn = document.createElement("button");
    btn.className = "btn-primary";
    btn.textContent = "View System Details";

    btn.setAttribute(
      "aria-label",
      `View automation details for ${building.name}`
    );

    btn.addEventListener("click", () => openModal(building));
    const favBtn = document.createElement("button");
    favBtn.className = "btn-secondary";
    favBtn.type = "button";

    const favorites = getFavorites();
    favBtn.textContent = favorites.includes(building.id) ? "★ Favorited" : "☆ Favorite";

    favBtn.addEventListener("click", () => {
      toggleFavorite(building.id);
      const updated = getFavorites();
      favBtn.textContent = updated.includes(building.id) ? "★ Favorited" : "☆ Favorite";
    });
    
    card.append(img, title, meta, platform, badgeWrap, favBtn, btn);

    grid.appendChild(card);

  });
  
}

/* -------------------------
   FILTERING
-------------------------- */

function populateTypeFilter(data) {

  const types = [...new Set(data.map(b => b.type))];

  types.forEach(type => {

    const opt = document.createElement("option");
    opt.value = type;
    opt.textContent = type;

    typeFilter.appendChild(opt);

  });
}

typeFilter.addEventListener("change", applyFilters);
sortSelect.addEventListener("change", applyFilters);

function applyFilters() {

  let filtered = [...buildings];

  const selectedType = typeFilter.value;
  const sortBy = sortSelect.value;

  if (selectedType !== "all") {
    filtered = filtered.filter(b => b.type === selectedType);
  }

  if (sortBy === "sizeAsc") {
    filtered.sort((a, b) => a.sizeSqFt - b.sizeSqFt);
  }

  if (sortBy === "sizeDesc") {
    filtered.sort((a, b) => b.sizeSqFt - a.sizeSqFt);
  }

  renderCards(filtered);

}

/* -------------------------
   CAPABILITY BADGES
-------------------------- */

function populateCapabilityBadges(buildings) {

  const protocols = new Set();
  const controllers = new Set();
  const networking = new Set();

  buildings.forEach(building => {

    building.protocols?.forEach(p => protocols.add(p));
    building.controllers?.forEach(c => controllers.add(c));
    building.networking?.forEach(n => networking.add(n));

  });

  renderBadgeGroup(protocolBadgeContainer, protocols);
  renderBadgeGroup(controllerBadgeContainer, controllers);
  renderBadgeGroup(networkingBadgeContainer, networking);

}

/* -------------------------
   RENDER BADGE GROUP
-------------------------- */

function renderBadgeGroup(container, items) {

  if (!container) return;

  container.innerHTML = "";

  [...items]
    .sort()
    .forEach(item => {

      const badge = document.createElement("span");
      badge.className = "badge";
      badge.textContent = item;

      container.appendChild(badge);

    });

}
