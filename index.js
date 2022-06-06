const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    remove_active();
    card.classList.add("active");
  });
});

function remove_active() {
  cards.forEach((card) => {
    card.classList.remove("active");
  });
}
