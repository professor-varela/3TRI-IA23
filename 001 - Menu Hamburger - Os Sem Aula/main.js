const btToggleMenu = document.querySelector(".menu-hamburger")
const mainMenu = document.querySelector(".main-menu")

btToggleMenu.addEventListener("click", () => {
  document.body.classList.toggle("open-nav")
})