document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault()

    const title = document.querySelector('#bookTitle-input').value;
    const desc = document.querySelector('#bookDesc-input').value;

    if (!title || !title.trim()) return;

    function bookConfig(bookTitle, bookDesc) {
        return {
            titleOfBook: bookTitle,
            descOfBook: bookDesc,
            hasRead: false // starts as false, later will have a check input to change its state
        }
    }

    const books = [];

    function addBookToLibrary(param) {
        books.forEach(() => {
            const li = document.createElement('li');
            const spanForTitle = document.createElement('span');
            
            spanForTitle.textContent = param.titleOfBook

            if (param.descOfBook) {
                const spanForDesc = document.createElement('span');
                spanForDesc.textContent = param.descOfBook;
            }
        });
    }

    console.log(bookConfig('hello', 'hi', 'sans'));
});