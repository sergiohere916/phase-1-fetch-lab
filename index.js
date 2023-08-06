function fetchBooks() {
  const gotApi = "https://anapioficeandfire.com/api/books"
  const render = fetch(gotApi)
  .then(res => res.json())
  .then(booksData => renderBooks(booksData))
  // To pass the tests, don't forget to return your fetch!
  return render; 
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
