const btnMenu = document.querySelector("#btn-hamburger-icon button");
const menu = document.querySelector(".menu");
const externaMenu = document.querySelector(".parte-externa-menu");
const duvidas = document.querySelectorAll(".duvida");

function buttonMenu(){
  menu.classList.toggle('ativo')
  externaMenu.classList.toggle('ativa')
};

duvidas.forEach(element => {
  element.addEventListener('click', () => {
    element.classList.toggle('ativa')
  })
});