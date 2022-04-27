const awesomeBooks = document.getElementById('awesome-books');
const booksContainer = document.querySelector('.new-books');
const titleInput = document.querySelector('.title-input');
const authorInput = document.querySelector('.author-input');
let books = JSON.parse(localStorage.getItem("books")) || [];
const addBooks = (title, author) => {
  books.push({
    title,
    author
  });

  localStorage.setItem("books", JSON.stringify(books))
  return { title, author }
};

const createNewBook = ({ title, author }) => {
  const newBooksDiv = document.createElement('div');
  const newBookTitle = document.createElement('p');
  const newBookAuthor = document.createElement('p');
  const button = document.createElement('button');
  const line = document.createElement('hr');
  let titleNoSpace = title.replace(/\s+/g, '');//take the title and remove space//
  let removeId = 'remove' + titleNoSpace;//removeId add the remove on titleNoSpace//
  let divId = 'div' + titleNoSpace;//divId add the div to titleNoSpace//

  newBooksDiv.setAttribute('id', divId);//the div id set to div+title//
  button.innerText = 'Remove';
  button.className = 'remove-btn';
  button.setAttribute('id', removeId);//the remove button id set to remove+title//
  newBookTitle.innerText = title;
  newBookAuthor.innerText = author;

  newBooksDiv.append(newBookTitle, newBookAuthor, button, line);
  booksContainer.appendChild(newBooksDiv);
}

books.forEach(createNewBook);

awesomeBooks.onsubmit = (event) => {
  event.preventDefault();

  const newBookEntry = addBooks(titleInput.value, authorInput.value
  );

  createNewBook(newBookEntry)
  titleInput.value = ""
  authorInput.value = ""
};
