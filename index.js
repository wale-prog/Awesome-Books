const awesomeBooks = document.getElementById('awesome-books');
const booksContainer = document.querySelector('.new-books');
const titleInput = document.querySelector('.title-input');
const authorInput = document.querySelector('.author-input');
let books = JSON.parse(localStorage.getItem('books')) || [];
const addBooks = (title, author) => {
  books.push({
    title,
    author,
  });

  localStorage.setItem('books', JSON.stringify(books));
  return { title, author };
};

const createNewBook = ({ title, author }) => {
  const newBooksDiv = document.createElement('div');
  const newBookTitle = document.createElement('p');
  const newBookAuthor = document.createElement('p');
  const button = document.createElement('button');
  const line = document.createElement('hr');
  const titleNoSpace = title.replace(/\s+/g, '');
  const removeId = `remove${titleNoSpace}`;
  const divId = `div${titleNoSpace}`;

  newBooksDiv.setAttribute('id', divId);
  button.innerText = 'Remove';
  button.className = 'remove-btn';
  button.setAttribute('id', removeId);
  newBookTitle.innerText = title;
  newBookAuthor.innerText = author;

  newBooksDiv.append(newBookTitle, newBookAuthor, button, line);
  booksContainer.appendChild(newBooksDiv);
};

books.forEach(createNewBook);

awesomeBooks.onsubmit = (event) => {
  event.preventDefault();

  const newBookEntry = addBooks(titleInput.value, authorInput.value);

  createNewBook(newBookEntry);
  titleInput.value = '';
  authorInput.value = '';
};
const booksListAction = (event) => {
  const eventId = event.target.id;
  if (eventId.includes('remove')) {
    const bookTitle = eventId.replace('remove', '');
    const divId = `div${eventId}`;
    books = books.filter((book) => {
      const newTitleFromArray = book.title.replace(/\s+/g, '');
      return (newTitleFromArray !== bookTitle);
    });
    localStorage.setItem('books', JSON.stringify(books));
    document.getElementById(divId).remove();
  }
};

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('top-books').addEventListener('click', booksListAction);
});
