const quote = document.getElementById('quote');
const author = document.getElementById('author');


const api_url = "https://api.quotable.io/random";

async function gettingQuote(url){
    const response = await fetch(url);
    let data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}
