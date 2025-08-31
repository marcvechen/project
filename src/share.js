const shareApi = () => {
  const quoteAuthor = author.innerText;
  const quoteText = quote.innerText;

  if (navigator.share) {
    navigator
      .share({
        title: quoteAuthor,
        text: quoteText,
      })
      .then(() => console.log("Удалось поделиться"))
      .catch((error) => console.log("Не удалось поделиться", error));
  }
};

export default shareApi;
