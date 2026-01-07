const buttons = document.querySelectorAll(".faq-btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    const plusIcon = button.querySelector(".plus-icon");
    const minusIcon = button.querySelector(".minus-icon");

    answer.classList.toggle("hidden");
    plusIcon.classList.toggle("hidden");
    minusIcon.classList.toggle("hidden");
  });
});
