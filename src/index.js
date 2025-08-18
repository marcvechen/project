"use strict";

import rndQuote from "./modules/rndQuote.js";

const rndBtn = document.getElementById("rndBtn");
const quote = document.getElementById("quote");
const copyBtn = document.getElementById("copy");
const favoriteBtn = document.getElementById("favoriteBtn");
const favoriteList = document.getElementById("favoriteList");

rndQuote();
//func of copy quotes
rndBtn.addEventListener("click", function () {
  rndQuote();
});
copyBtn.addEventListener("click", function () {
  navigator.clipboard.writeText(quote.innerText);
  alert("Quote was copy");
});

rndBtn.addEventListener("click", function () {
  rndQuote();
});
copyBtn.addEventListener("click", function () {
  navigator.clipboard.writeText(quote.innerText);
  alert("Quote was copied");
});

// Adding quote in favorite
const favoriteArray = [];

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

function saveFavorites() {
  localStorage.setItem("favorites", JSON.stringify(favoriteArray));
}
saveFavorites();
function loadFavorites() {
  const favoriteStorage = localStorage.getItem("favorites");
  const adsd = JSON.parse(favoriteStorage);
  favoriteArray.splice(0, favoriteArray.length);
  favoriteArray.push(adsd);
}
loadFavorites();
renderFavorites();
//Remove favotrite quote
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
