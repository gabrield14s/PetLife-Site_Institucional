const btnMenu = document.querySelector("#btn-hamburger-icon button");
const menu = document.querySelector("#menu");

function buttonMenu(){

  if (menu.style.display == "flex" && btnMenu.style.zIndex == "2"){
    menu.style.display = "none"
    btnMenu.style.zIndex = "1"
  } else {
      menu.style.display = "flex"
      btnMenu.style.zIndex = "2"
  }
  
};