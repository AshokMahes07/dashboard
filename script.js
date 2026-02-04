const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-4px)";
    card.style.boxShadow = "0 16px 35px rgba(15, 23, 42, 0.12)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
    card.style.boxShadow = "";
  });
});
