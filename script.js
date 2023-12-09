const btnMenu = document.querySelector("#btn-hamburger-icon button");
const menu = document.querySelector("#menu");
const duvidas = document.querySelectorAll(".duvida");

function buttonMenu(){
  if (menu.style.display == "flex" && btnMenu.style.zIndex == "2"){
    menu.style.display = "none"
    btnMenu.style.zIndex = "1"
  } else {
      menu.style.display = "flex"
      btnMenu.style.zIndex = "2"
  }
};

duvidas.forEach(element => {
  element.addEventListener('click', () => {
    element.classList.toggle('ativa');
  })
});