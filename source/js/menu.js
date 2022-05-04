let menuButton = document.querySelector(".main-nav__toggle");
let contactsList = document.querySelector(".contacts")
let siteList = document.querySelector(".main-nav__site-list");
let socialList = document.querySelector(".social");

if (menuButton) {
  menuButton.addEventListener("click", function (evt) {
    menuButton.classList.toggle("main-nav__toggle--off");
    contactsList.classList.toggle("contacts--off");
    siteList.classList.toggle("main-nav__site-list--off");
    socialList.classList.toggle("social--off");
  })
}


