const awesomeBooks = document.getElementById('awesome-books');
const booksContainer = document.querySelector('.new-books');
const titleInput = document.querySelector('.title-input');
const authorInput = document.querySelector('.author-input');

const books = JSON.parse(localStorage.getItem("books")) || [];

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

    button.innerText = 'Remove';
    button.className = 'remove-btn'
    newBookTitle.innerText = title;
    newBookAuthor.innerText = author;

    newBooksDiv.append(newBookTitle, newBookAuthor, button, line);
    booksContainer.appendChild(newBooksDiv);
    for (let i = 0; i < books.length; i++) {
        button.addEventListener('click', () => {
            books[i]
        })
    }
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
