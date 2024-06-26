const open = document.querySelectorAll(".select-option-drop button");

function ativarItem(event) {
  const item = event.currentTarget;
  const controls = item.getAttribute("aria-controls");
  const options = document.getElementById(controls);

  options.classList.toggle("ativo");
  const ativo = options.classList.contains("ativo");
  item.setAttribute("aria-expanded", ativo);
  console.log(ativo);
}

function eventoOpen(item) {
  item.addEventListener("click", ativarItem);
}

open.forEach(eventoOpen);

//galeria
const galeria = document.querySelectorAll(".photos img");

const photosContainer = document.querySelector(".photos");

function trocarImagem(event) {
  const img = event.currentTarget;
  photosContainer.prepend(img);
  console.log(img);
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

console.log(photosContainer);
