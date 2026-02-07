import { openModal } from "./modal.js";
import { saveFavorite } from "./storage.js";

const grid = document.querySelector("#systemsGrid");

async function loadSystems() {
  try {
    const response = await fetch("data/systems.json");
    const data = await response.json();
    displaySystems(data);
  } catch (err) {
    console.error("Fetch error:", err);
  }
}

function displaySystems(items) {
  items.forEach(system => {
    const card = document.createElement("article");

    card.innerHTML = `
      <h2>${system.site}</h2>
      <p>${system.city}</p>
      <p>System: ${system.system}</p>
      <button>Details</button>
    `;

    card.querySelector("button")
      .addEventListener("click", () => openModal(system));

    grid.appendChild(card);
  });
}

loadSystems();
