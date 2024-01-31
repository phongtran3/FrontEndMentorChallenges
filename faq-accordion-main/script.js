"use strict";

document.addEventListener("DOMContentLoaded", (e) => {
  const faqDrownDown = document.querySelectorAll(".faq-dropdown");

  faqDrownDown.forEach((dropDown) => {
    dropDown.addEventListener("click", (e) => {
      const faqIcon = dropDown.querySelector(".faq-icon");
      const faqBody = dropDown.querySelector(".faq-dropdown-body");

      if (faqBody.classList.contains("open")) {
        faqBody.classList.remove("open");
        faqIcon.classList.remove("open");
        console.log("open");
      } else {
        faqBody.classList.add("open");
        faqIcon.classList.add("open");
      }
    });
  });
});
