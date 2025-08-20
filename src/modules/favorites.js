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

function loadFavorites() {
  const favoriteStorage = localStorage.getItem("favorites");
  const storedFavorites = JSON.parse(favoriteStorage);
  favoriteArray.push(...storedFavorites);
}
function saveFavorites() {
  localStorage.setItem("favorites", JSON.stringify(favoriteArray));
}

export { favoriteArray, removeFavQuote, loadFavorites, saveFavorites };
