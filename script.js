const gloves = [
  {
    brand: "Nike",
    model: "Vapor Grip 3",
    rating: 4.5,
    reviews: [
      "Great grip in wet conditions.",
      "A bit tight but very responsive."
    ]
  },
  {
    brand: "Adidas",
    model: "Predator Pro",
    rating: 4.0,
    reviews: [
      "Comfortable fit, solid durability.",
      "Grip fades after heavy use."
    ]
  },
  {
    brand: "Uhlsport",
    model: "Hyperact Supergrip+",
    rating: 5.0,
    reviews: [
      "Best grip I've ever used.",
      "Expensive but worth it."
    ]
  }
];

const gloveList = document.getElementById("glove-list");

gloves.forEach(glove => {
  const card = document.createElement("div");
  card.className = "glove-card";

  card.innerHTML = `
    <h2>${glove.brand} ${glove.model}</h2>
    <div class="rating">${"⭐".repeat(Math.round(glove.rating))}</div>
    ${glove.reviews.map(r => `<div class="review">"${r}"</div>`).join("")}
  `;

  gloveList.appendChild(card);
});
