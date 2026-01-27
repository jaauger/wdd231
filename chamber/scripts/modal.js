
const modalNonprofit = document.querySelector('#np-modal');
const openModalNonprofit = document.querySelector("#np-modal-op-btn");
const closeModalNonprofit = document.querySelector('#np-modal-cl-btn');

const modalBronze = document.querySelector('#br-modal');
const openModalBronze = document.querySelector("#br-modal-op-btn");
const closeModalBronze = document.querySelector('#br-modal-cl-btn');

const modalSilver = document.querySelector('#si-modal');
const openModalSilver = document.querySelector("#si-modal-op-btn");
const closeModalSilver = document.querySelector('#si-modal-cl-btn');

const modalGold = document.querySelector('#go-modal');
const openModalGold = document.querySelector("#go-modal-op-btn");
const closeModalGold = document.querySelector('#go-modal-cl-btn');



openModalNonprofit.addEventListener("click", () => {
  modalNonprofit.showModal();
});

closeModalNonprofit.addEventListener('click', () => {
  modalNonprofit.close();
});

openModalBronze.addEventListener("click", () => {
  modalBronze.showModal();
});

closeModalBronze.addEventListener('click', () => {
  modalBronze.close();
});

openModalSilver.addEventListener("click", () => {
  modalSilver.showModal();
});

closeModalSilver.addEventListener('click', () => {
  modalSilver.close();
});

openModalGold.addEventListener("click", () => {
  modalGold.showModal();
});

closeModalGold.addEventListener('click', () => {
  modalGold.close();
});