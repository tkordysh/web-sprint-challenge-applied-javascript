const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  
  //instantiating elements 
  const cardElem = document.createElement("div");
  const headlineElem = document.createElement("div");
  const authorElem = document.createElement("div");
  const imgContainter = document.createElement("div");
  const image = document.createElement("img");
  const authorNameElem = document.createElement("span");

  //setting structure 
  cardElem.appendChild(headlineElem);
  cardElem.appendChild(authorElem);
  authorElem.appendChild(imgContainter);
  imgContainter.appendChild(image);
  authorElem.appendChild(authorNameElem);

  //setting classes 
  cardElem.classList.add("card");
  headlineElem.classList.add("headline");
  authorElem.classList.add("author");
  imgContainter.classList.add("img-container");

  //setting text content 
  headlineElem.textContent = article.headline;
  image.src = article.authorPhoto;
  authorNameElem.textContent = article.authorName;

  //adding click event 
  cardElem.addEventListener('click', () => {
    console.log(headlineElem);
  })

  return cardElem;

}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
