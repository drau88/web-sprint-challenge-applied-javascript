import axios from "axios";

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

  const cardDiv = document.createElement('div'); //Main parent div
  const headlineDiv = document.createElement('div'); //Child to main parent
  const authorDiv = document.createElement('div'); //Second parent div and child to main parent
  const imgDiv = document.createElement('div'); //Parent div to img
  const img = document.createElement('img'); // Child to imgDIv
  const span = document.createElement('span'); //Child to authorDiv

  cardDiv.classList.add('card');
  headlineDiv.classList.add('headline');
  authorDiv.classList.add('author');
  imgDiv.classList.add('img-container');

  headlineDiv.textContent = ` ${article.headline} `;
  img.setAttribute('src', article.authorPhoto);
  span.textContent = ` ${article.authorName}`;

  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(authorDiv);
  authorDiv.appendChild(imgDiv);
  authorDiv.appendChild(span);
  imgDiv.appendChild(img);

  cardDiv.addEventListener('click', () =>{
    console.log(headlineDiv.textContent);
  });

  return cardDiv;

}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  axios.get('http://localhost:5000/api/articles')
    .then(response => {
      const cardEntryPoint = document.querySelector(selector);
      //Iterations over individual topic arrays because all attempts at converting earlier objects in the data to arrays result in empty arrays.
      for (let i = 0; i < response.data.articles.bootstrap.length; i++){
        const articleCardContentObj = Card(response.data.articles.bootstrap[i]);
        console.log(articleCardContentObj);
        cardEntryPoint.appendChild(articleCardContentObj); 
      }
      for (let i = 0; i < response.data.articles.javascript.length; i++){
        const articleCardContentObj = Card(response.data.articles.javascript[i]);
        console.log(articleCardContentObj);
        cardEntryPoint.appendChild(articleCardContentObj); 
      }
      for (let i = 0; i < response.data.articles.jquery.length; i++){
        const articleCardContentObj = Card(response.data.articles.jquery[i]);
        console.log(articleCardContentObj);
        cardEntryPoint.appendChild(articleCardContentObj); 
      }
      for (let i = 0; i < response.data.articles.node.length; i++){
        const articleCardContentObj = Card(response.data.articles.node[i]);
        console.log(articleCardContentObj);
        cardEntryPoint.appendChild(articleCardContentObj); 
      }
      for (let i = 0; i < response.data.articles.technology.length; i++){
        const articleCardContentObj = Card(response.data.articles.technology[i]);
        console.log(articleCardContentObj);
        cardEntryPoint.appendChild(articleCardContentObj); 
      }
     
    })
    .catch(error => {
      console.log(error);
    })

}

export { Card, cardAppender }
