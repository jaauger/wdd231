const modal = document.querySelector("#systemModal");
const content = document.querySelector("#modalContent");
const closeBtn = document.querySelector("#closeModal");

export function openModal(building) {
  content.innerHTML = `
    <h2>${building.name}</h2>

    <p><strong>Location:</strong> ${building.location}</p>
    <p><strong>Square Footage:</strong> ${building.sizeSqFt.toLocaleString()} sq ft</p>
    <p><strong>Platform:</strong> ${building.platform}</p>

    <h3>Protocols</h3>
    <ul>
      ${building.protocols.map(p => `<li>${p}</li>`).join("")}
    </ul>

    <h3>Controllers</h3>
    <ul>
      ${building.controllers.map(c => `<li>${c}</li>`).join("")}
    </ul>

    <h3>Analytics</h3>
    <ul>
      ${building.analytics.map(a => `<li>${a}</li>`).join("")}
    </ul>

    <h3>Networking & Security</h3>
    <ul>
      ${building.networking.map(n => `<li>${n}</li>`).join("")}
    </ul>

    <p><strong>Energy Profile:</strong> ${building.energyProfile}</p>
  `;

  modal.showModal();
}

closeBtn.addEventListener("click", () => modal.close());

modal.addEventListener("click", e => {
  if (e.target === modal) modal.close();
});
