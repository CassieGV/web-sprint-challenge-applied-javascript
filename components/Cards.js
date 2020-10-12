// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

//javascript
axios.get(`https://lambda-times-api.herokuapp.com/articles`)
    .then(function(response) {
        let cards = document.querySelector(".cards-container")

        // console.log(response.data.articles)
        console.log(response.data.articles.javascript)

        response.data.articles.javascript.forEach(element => {
            
        
        let jsCards = document.createElement("div")
        jsCards.classList.add("card")
        cards.appendChild(jsCards)

        let headline = document.createElement("div")
        headline.classList.add("headline")
        headline.textContent = element.headline
        jsCards.appendChild(headline)

        let author = document.createElement("div")
        author.classList.add("author")
        jsCards.appendChild(author)

        let authorImg = document.createElement("div")
        authorImg.classList.add("img-container")
        author.appendChild(authorImg)

        let image = document.createElement("img")
        image.src = element.authorPhoto
        authorImg.appendChild(image)
        let name = document.createElement("span")
        name.textContent = element.authorName
        author.appendChild(name)

        cards.addEventListener("click", console.log(headline));
        // console.log(cards)
    });
        // response.data.articles[0]
    })


// bootstrap
axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then(function(response) {
        let cards = document.querySelector(".cards-container")

        // console.log(response.data.articles.bootstrap)
        response.data.articles.bootstrap.forEach(element => {
            
        
        let jsCards = document.createElement("div")
        jsCards.classList.add("card")
        cards.appendChild(jsCards)

        let headline = document.createElement("div")
        headline.classList.add("headline")
        headline.textContent = element.headline
        jsCards.appendChild(headline)

        let author = document.createElement("div")
        author.classList.add("author")
        jsCards.appendChild(author)

        let authorImg = document.createElement("div")
        authorImg.classList.add("img-container")
        author.appendChild(authorImg)

        let image = document.createElement("img")
        image.src = element.authorPhoto
        authorImg.appendChild(image)
        let name = document.createElement("span")
        name.textContent = element.authorName
        author.appendChild(name)

        cards.addEventListener("click", console.log(headline));
        // console.log(cards)
    });
        // response.data.articles[0]
    })

//technology
axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then(function(response) {
        let cards = document.querySelector(".cards-container")

        // console.log(response.data.articles.technology)
        response.data.articles.technology.forEach(element => {
            
        
        let jsCards = document.createElement("div")
        jsCards.classList.add("card")
        cards.appendChild(jsCards)

        let headline = document.createElement("div")
        headline.classList.add("headline")
        headline.textContent = element.headline
        jsCards.appendChild(headline)

        let author = document.createElement("div")
        author.classList.add("author")
        jsCards.appendChild(author)

        let authorImg = document.createElement("div")
        authorImg.classList.add("img-container")
        author.appendChild(authorImg)

        let image = document.createElement("img")
        image.src = element.authorPhoto
        authorImg.appendChild(image)
        let name = document.createElement("span")
        name.textContent = element.authorName
        author.appendChild(name)

        cards.addEventListener("click", console.log(headline));
        // console.log(cards)
    });
        // response.data.articles[0]
    })

//node    
axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then(function(response) {
        let cards = document.querySelector(".cards-container")

        // console.log(response.data.articles.node)
        response.data.articles.node.forEach(element => {
            
        let jsCards = document.createElement("div")
        jsCards.classList.add("card")
        cards.appendChild(jsCards)

        let headline = document.createElement("div")
        headline.classList.add("headline")
        headline.textContent = element.headline
        jsCards.appendChild(headline)

        let author = document.createElement("div")
        author.classList.add("author")
        jsCards.appendChild(author)

        let authorImg = document.createElement("div")
        authorImg.classList.add("img-container")
        author.appendChild(authorImg)

        let image = document.createElement("img")
        image.src = element.authorPhoto
        authorImg.appendChild(image)
        let name = document.createElement("span")
        name.textContent = element.authorName
        author.appendChild(name)

        cards.addEventListener("click", console.log(headline));
        // console.log(cards)
    });
        // response.data.articles[0]
    })