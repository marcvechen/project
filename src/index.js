"use strict";
const quotes = [
  "Be yourself; everyone else is already taken.",
  "So many books, so little time.",
  "A room without books is like a body without a soul.",
  "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
  "You only live once, but if you do it right, once is enough.",
];
const rndBtn = document.getElementById("rndBtn");
const quote = document.getElementById("quote");
const copyBtn = document.getElementById("copy");
const favoriteBtn = document.getElementById("favoriteBtn");
const favoriteList = document.getElementById("favoriteList");
const loader = document.getElementById("loader");
// const rndQuote = () => {
//   const randonIndex = Math.floor(Math.random() * quotes.length);
//   const randomQuote = quotes[randonIndex];
//   quote.innerText = randomQuote;
// };
rndQuote();
async function rndQuote() {
  loader.style.display = "block";
  quote.style.display = "none";
  favoriteBtn.style.display = "none";
  fetch("https://api.api-ninjas.com/v1/quotes", {
    method: "GET",
    headers: { "X-Api-Key": "A5WXKifXupMEJ6xGwymAYA==l704hvnDyhOXuEdD" },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const randomQuote = data[0].quote;
      quote.innerText = randomQuote;
    })
    .finally(() => {
      loader.style.display = "none";
      quote.style.display = "block";
      favoriteBtn.style.display = "block";
    });
}

rndQuote();
rndBtn.addEventListener("click", function () {
  rndQuote();
});
copyBtn.addEventListener("click", function () {
  navigator.clipboard.writeText(quote.innerText);
  alert("Quote was copied");
});
const favoriteArray = [];
const removeFavQuote = () => {
  const index = favoriteArray.indexOf(quote.innerText);
  if (index === -1) {
    favoriteArray.push(quote.innerText);
  }
};
favoriteBtn.addEventListener("click", function () {
  removeFavQuote();
  renderFavorites();
});
function renderFavorites() {
  favoriteList.innerHTML = "";

  favoriteArray.forEach((element) => {
    const favoriteQuote = document.createElement("li");
    favoriteList.appendChild(favoriteQuote);
    favoriteQuote.innerText = element;
    favoriteQuote.classList.add("list-group-item");
    const removeBtn = document.createElement("button");
    removeBtn.classList.add("btn", "btn-sm", "btn-danger", "float-end");
    removeBtn.innerText = "X";

    removeBtn.addEventListener("click", function () {
      const index = favoriteArray.indexOf(element);

      favoriteArray.splice(index, 1);
      renderFavorites();
    });
    favoriteQuote.appendChild(removeBtn);
  });
}

//3. подключить цитаты по API а не по массиву
