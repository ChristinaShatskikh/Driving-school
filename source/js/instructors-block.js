const openTextButton = document.querySelector(".instructors__further-button");
const text = document.querySelector(".instructors__text-last");

openTextButton.addEventListener("click", () => {
  openTextButton.classList.toggle("instructors__further-button--off")
  text.classList.toggle("instructors__text-last--hidden");
})
