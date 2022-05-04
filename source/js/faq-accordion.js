const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(faqItem => {
  faqItem.addEventListener("click", (e) => {
    const self = e.currentTarget;
    const faqToggle = self.querySelector(".faq-item__toggle");
    const faqAnswer = self.querySelector(".faq-item__answer");

    self.classList.toggle("faq-item--active")

    if (self.classList.contains("faq-item--active")) {
      faqToggle.setAttribute("aria-expanded", true);
      faqAnswer.setAttribute("aria-hidden", false);
    } else {
      faqToggle.setAttribute("aria-expanded", false);
      faqAnswer.setAttribute("aria-hidden", true);
    }
  })
})
