"user strict";

const faqClick = document.querySelectorAll(".contents-container");

faqClick.forEach((faq) => {
  faq.addEventListener("click", function () {
    faq.classList.toggle("active");
  });
});
