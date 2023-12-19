// write your JavaScript here
const quote = document.getElementById('new-quote');
const quoteAuthor = document.getElementById('quote-author');
const quoteBtn = document.getElementById('quote-btn');

const url = "https://api.quotable.io/random";

const getQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
          quote.innerHTML = data.content;
          quoteAuthor.innerHTML = data.author;
      });
};

window.addEventListener('load', getQuote);
quoteBtn.addEventListener('click', getQuote);


