const modal = document.querySelector("#detailsModal");
const content = document.querySelector("#modalContent");
const closeBtn = document.querySelector("#closeModal");

export function openModal(system) {
  content.innerHTML = `
    <h2>${system.site}</h2>
    <p>Square Feet: ${system.sqft}</p>
    <p>Status: ${system.status}</p>
  `;

  modal.showModal();
}

closeBtn.addEventListener("click", () => modal.close());
