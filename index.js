const books = [];

function bookConfig(bookTitle, bookDesc) {
    return {
        titleOfBook: bookTitle,
        descOfBook: bookDesc,
        hasRead: false // starts as false, later we will have a check input to change its state
    };
}

function addBookToLibrary(book) {
    books.push(book);

    const li = document.createElement('li');

    const spanForTitle = document.createElement('span');
    const spanForDesc = document.createElement('span');
    const lineBreak = document.createElement('br');

    spanForTitle.textContent = `Title: ${book.titleOfBook}`;
    li.appendChild(spanForTitle);
    li.appendChild(lineBreak);

    if (book.descOfBook) {
        spanForDesc.textContent = `Description: ${book.descOfBook}`;
        li.appendChild(spanForDesc);
    }

    document.querySelector('ul').appendChild(li);
}

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();

    const title = document.querySelector('#bookTitle-input').value;
    const desc = document.querySelector('#bookDesc-input').value;

    if (!title.trim()) return;

    const book = bookConfig(title, desc);

    addBookToLibrary(book);

    console.log(books);
});