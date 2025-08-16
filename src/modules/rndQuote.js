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

export default rndQuote;
