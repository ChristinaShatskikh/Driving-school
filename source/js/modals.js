let contactsButton = document.querySelector(".promo__button");
let contactsModal = document.querySelector(".modal-contacts");
let contactsForms = document.querySelectorAll(".contacts-form__form");
let overlay = document.querySelector(".overlay");
let applicationModal = document.querySelector(".modal-application");
let closeApplication = document.querySelector(".modal-application__close");
let entranceButtons = document.querySelectorAll(".map-info__button");
let entranceModal = document.querySelector(".modal-entrance");

contactsButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactsModal.classList.add("modal-contacts--show");
  overlay.classList.add("overlay--show");
})

for (let contactsForm of contactsForms) {
    contactsForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    contactsModal.classList.remove("modal-contacts--show");
    applicationModal.classList.add("modal-application--show");
    overlay.classList.add("overlay--show");
  })
}

closeApplication.addEventListener("click", function (evt) {
  evt.preventDefault();
  applicationModal.classList.remove("modal-application--show");
  overlay.classList.remove("overlay--show");
})

for (let entranceButton of entranceButtons) {
    entranceButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    entranceModal.classList.add("modal-entrance--show");
    overlay.classList.add("overlay--show");
  })
}

overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactsModal.classList.remove("modal-contacts--show");
  applicationModal.classList.remove("modal-application--show");
  entranceModal.classList.remove("modal-entrance--show");
  overlay.classList.remove("overlay--show");
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    contactsModal.classList.remove("modal-contacts--show");
    applicationModal.classList.remove("modal-application--show");
    entranceModal.classList.remove("modal-entrance--show");
    overlay.classList.remove("overlay--show");
  }
})
