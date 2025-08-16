"use strict";

const rndBtn = document.getElementById("rndBtn");
const quote = document.getElementById("quote");
const copyBtn = document.getElementById("copy");
const favoriteBtn = document.getElementById("favoriteBtn");
const favoriteList = document.getElementById("favoriteList");
const loader = document.getElementById("loader");
const author = document.getElementById("author");

async function rndQuote() {
  loader.style.display = "block";
  quote.style.display = "none";
  author.style.display = "none";
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
      const authorQuote = data[0].author;
      author.innerText = authorQuote;
      quote.innerText = randomQuote;
    })
    .finally(() => {
      loader.style.display = "none";
      quote.style.display = "block";
      author.style.display = "block";
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
