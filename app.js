const bookInfo = (title, image, price, genre) => {
  return `<div class = "col-md-4">
                  <div class="card">
                      <img src="${image}" class="card-img-top" alt="Image of ${title}">
                      <div class="card-body">
                          <h5 class="card-title">${title}</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
                      <ul class="list-group list-group-flush">
                          <li class="list-group-item">Genre: ${genre}</li>
                          <li class="list-group-item">Price: ${price}</li>
                    
                      </ul>
                      <div class="card-body">
                          <a href="#" class="card-link">Add to cart</a>
                          <a href="#" class="card-link">Skip</a>
                      </div>
                  </div>
              </div>`;
};

// const renderBooks = (data) => {
//   const books = data.books;
//   const bookCollection = document.getElementById("book-collection");
//   bookCollection.innerHTML = "";
//   books.forEach((book) => {
//     const title = book.title;
//     const price = book.price;
//     const image = book.image;
//     const genre = book.category;
//     bookCollection.innerHTML += bookInfo(title, image, price, genre);
//   });
// };

window.onload = () => {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => response.json())
    .then((response) => console.log(response))
    // .then(renderBooks)
    .catch((err) => console.log(err));
};
