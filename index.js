'use strict';

const button = document.getElementById('refreshQuote');
const chuckSays = document.getElementById('chuckSays');
const submitFormButton = document.getElementById('submitFormButton');
const defaultCategory = "dev"

// function getQuote(category){}
const getQuote = (category) => { 
    const url = `https://api.chucknorris.io/jokes/random?category=${category}`;
    get(url).then(function (fetchResponse) {
     chuckSays.innerHTML = fetchResponse.value;
     })
}

button.addEventListener('click',function (e) {
    e.preventDefault();
    getQuote(defaultCategory);
});

submitFormButton.addEventListener('click', function (e) {
    e.preventDefault();
    const userInput = document.getElementById('categoryInput');
    const category = userInput.value;
    getQuote(category);
    
});

(function () {
    getQuote(defaultCategory)
})();
