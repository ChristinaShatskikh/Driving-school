function showBranches() {
  const branchesButtons = document.querySelectorAll(".branches__button");
  const branchesLists = document.querySelectorAll(".branches__list");

  function filterBranches (category, lists) {
    lists.forEach((list) => {
      const isListFiltered = list.classList.contains(category);
      if (isListFiltered) {
        list.classList.remove("branches__list--current");
        list.classList.add("branches__list--current");
      } else {
        list.classList.remove("branches__list--current");
      }
    })
  }

  branchesButtons.forEach((branchesButton) => {
    branchesButton.addEventListener("click", () => {
      branchesButtons.forEach(i => i.classList.remove("branches__button--active"));

      branchesButton.classList.toggle("branches__button--active")
      const currentCategory = branchesButton.dataset.category;

      console.log(currentCategory)
      filterBranches(currentCategory, branchesLists)
    })
  })
}

showBranches()
