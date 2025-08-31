"use strict";

import rndQuote from "./modules/rndQuote.js";
import {
  favoriteArray,
  removeFavQuote,
  loadFavorites,
  saveFavorites,
} from "./modules/favorites.js";
import { toggleDarkMode } from "./modules/themes.js";
import shareApi from "./share.js";
import downloadFunc from "./modules/download.js";

const rndBtn = document.getElementById("rndBtn"),
  quote = document.getElementById("quote"),
  copyBtn = document.getElementById("copyBtn"),
  favoriteBtn = document.getElementById("favoriteBtn"),
  favoriteList = document.getElementById("favoriteList"),
  divThemesIcon = document.querySelector(".divThemesIcon"),
  shareBtn = document.getElementById("shareBtn"),
  downloadBtn = document.getElementById("downloadBtn");

rndQuote();
loadFavorites();
renderFavorites();

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
export default renderFavorites;
// Toggle dark mode
divThemesIcon.addEventListener("click", toggleDarkMode);
//Share btn
shareBtn.addEventListener("click", shareApi);
//Download btn

downloadBtn.addEventListener("click", function () {
  const url = downloadFunc();
  const a = document.createElement("a");
  a.href = url;
  a.download = "favorites.txt";
  a.click();
  URL.revokeObjectURL(a.href);
});
