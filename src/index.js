"use strict";

import rndQuote from "./modules/rndQuote.js";
import {
  favoriteArray,
  removeFavQuote,
  loadFavorites,
  saveFavorites,
} from "./modules/favorites.js";

const rndBtn = document.getElementById("rndBtn");
const quote = document.getElementById("quote");
const copyBtn = document.getElementById("copy");
const favoriteBtn = document.getElementById("favoriteBtn");
const favoriteList = document.getElementById("favoriteList");

rndQuote();
loadFavorites();
//func of copy quotes
rndBtn.addEventListener("click", function () {
  rndQuote();
});
copyBtn.addEventListener("click", function () {
  navigator.clipboard.writeText(quote.innerText);
  alert("Quote was copy");
});

// Adding quote in favorite

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
  saveFavorites();
}

//Remove favotrite quote

favoriteBtn.addEventListener("click", function () {
  removeFavQuote();
  renderFavorites();
});
