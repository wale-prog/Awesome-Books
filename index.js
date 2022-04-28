import Books from './Books.js';

const library = new Books(JSON.parse(localStorage.getItem('books')));
window.addEventListener('DOMContentLoaded', () => {
  const awesomeBooks = document.getElementById('awesome-books');
  const booksContainer = document.querySelector('.new-books');
  const titleInput = document.querySelector('.title-input');
  const authorInput = document.querySelector('.author-input');
  const createNewBook = ({ title, author }) => {
    const newBooksDiv = document.createElement('div');
    const newBookTitle = document.createElement('p');
    const newBookAuthor = document.createElement('p');
    const button = document.createElement('button');
    const titleNoSpace = title.replace(/\s+/g, '');
    const removeId = `remove${titleNoSpace}`;
    const divId = `div${titleNoSpace}`;
    newBooksDiv.setAttribute('id', divId);
    button.innerText = 'Remove';
    button.className = 'remove-btn';
    button.setAttribute('id', removeId);
    newBookTitle.innerText = `${title} by ${author}`;
    newBookAuthor.innerText = author;
    newBooksDiv.append(newBookTitle, button);
    booksContainer.append(newBooksDiv);
  };

  const displayBooks = (books) => {
    booksContainer.innerHTML = '';
    books.forEach(createNewBook);
    localStorage.setItem('books', JSON.stringify(books));
  };
  const booksListAction = (event) => {
    const eventId = event.target.id;
    if (eventId.includes('remove')) {
      const bookTitle = eventId.replace('remove', '');
      library.remove(bookTitle);
      displayBooks(library.getAll());
    }
  };
  awesomeBooks.onsubmit = (event) => {
    event.preventDefault();
    library.add(titleInput.value, authorInput.value);
    displayBooks(library.getAll());
    titleInput.value = '';
    authorInput.value = '';
  };
  document.getElementById('top-books').addEventListener('click', booksListAction);
  displayBooks(library.getAll());
});


// const navContent = `<p>Awesome Books</p>
// <ul class="nav-list">
//   <li class="nav-list-item"><a href="#">List</a></li>
//   <li class="nav-list-item"><a href="#">Add new</a></li>
//   <li class="nav-list-item"><a href="#">Contact</a></li>
// </ul>
// `;
// const navbarContent = document.createElement('div');
// navbarContent.setAttribute("id", "navbar")
// const navbar = document.getElementById('navbar')
// const navbarhead = document.querySelector('.navbar')
// navbarContent.innerHTML = navContent;
// navbarhead.appendChild(navbarContent);

const navList = document.querySelectorAll('.nav-list-item');


const dateDisplay = document.querySelector('.date-display');
const datePara = document.createElement('p')

function manageDate(datePara) {
  const date = new Date();
  const myDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
  let dayOfWeek = date.getDay();
  let dayOfMonth = date.getDate();
  let year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let innerHTMLP = `${myDay[dayOfWeek]} Apr ${dayOfMonth}, ${year} ${hour}:${minutes}`;
  datePara.innerHTML = innerHTMLP;
  dateDisplay.appendChild(datePara);
}
manageDate(datePara);

const list = document.querySelector('.list');
const addNew = document.querySelector('.add-new');


for (let i = 0; i < navList.length; i += 1) {
  navList[i].addEventListener('click', (event) => {
    if (event.target.innerText === `Add new`) {
      list.classList.add('hidden');
      addNew.classList.remove('hidden');
      contact.classList.add('hidden')
    } else if (event.target.innerText === "List") {
      list.classList.remove('hidden');
      addNew.classList.add('hidden')
      contact.classList.add('hidden')
    }
    manageDate(datePara);
  })
}

