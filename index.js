const btnMenu = document.getElementById("btnMenu");
const menu = document.getElementById("menu");
const modalContato = document.getElementById("modalContato");
const btnContato = document.getElementById("btnContato");
const btnFecharModal = document.getElementById("btnFecharModal");

btnMenu.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

btnContato.addEventListener("click", () => {
  modalContato.classList.toggle("hidden");
});

btnFecharModal.addEventListener("click", () => {
  modalContato.classList.toggle("hidden");
});
