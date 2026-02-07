import { interests } from "../data/places-of-interest.mjs";

const container = document.querySelector("#interest-cards");

interests.interests.forEach(place => {
  const card = document.createElement("section");
  card.classList.add("interest-card");

  // ---- Title ----
  const title = document.createElement("h2");
  title.textContent = place.name;

  // ---- Figure / Image ----
  const figure = document.createElement("figure");

  const img = document.createElement("img");
  img.src = `${place.image}`;
  img.alt = place.name;
  img.loading = "lazy";

  figure.appendChild(img);

  // ---- Address ----
  const address = document.createElement("address");
  address.textContent = place.address;

  // ---- Description ----
  const desc = document.createElement("p");
  desc.textContent = place.description;

  // ---- Button ----
  const button = document.createElement("a");
  button.textContent = `Learn More about ${place.name}`;
  button.href = place.url;
  button.target = "_blank";
  button.classList.add("learn-more");  
  button.setAttribute(
  "aria-label",
  `Learn more about ${place.name}`
);  
  // ---- Assemble ----
  card.append(title, figure, address, desc, button);
  container.appendChild(card);
});
