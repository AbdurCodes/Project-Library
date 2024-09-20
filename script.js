let booksInLibrary = document.querySelector('.booksInLibrary');
let showAllBooksBtn = document.querySelector('#showAllBooks');
let welcomeMsgSection = document.querySelector('.welcomeMsg');


let myLibrary = ['Sacrificed', 'Order of the Phoenix', 'Catching Fire', 'Afraid of the World', 'The book of Mirdad'];


function Book(author, title, numberOfPages, isRead) {
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.isRead = isRead;
}

function addBookToLibrary() {
    // do stuff here
}


function showAllBooks() {
    for (let i = 0; i < myLibrary.length; i++) {

        let book_card = document.createElement('div');
        book_card.setAttribute('class', 'book-card');

            let book_cover = document.createElement('div');
            book_cover.setAttribute('class', 'book-cover');
            book_cover.innerHTML = `${myLibrary[i]} <br><br> Book Cover`;
            book_card.appendChild(book_cover);

            let book_title = document.createElement('h3');
            book_title.setAttribute('class', 'book-title');
            book_title.textContent = `${myLibrary[i]}`;
            book_card.appendChild(book_title);

            let book_actions = document.createElement('div');
            book_actions.setAttribute('class', 'book-actions');
            book_card.appendChild(book_actions);

                let delete_button = document.createElement('button');
                delete_button.setAttribute('class', 'delete-btn');
                delete_button.textContent = 'Delete This Book';
                book_actions.appendChild(delete_button);

                let readThisBook = document.createElement('div');
                readThisBook.setAttribute('class', 'readThisBook');
                book_actions.appendChild(readThisBook);

                    let inputElement  = document.createElement('input');
                    inputElement.type = 'checkbox';
                    inputElement.id = 'isRead';
                    readThisBook.appendChild(inputElement);

                    let labelElement = document.createElement('label');
                    labelElement.for = 'isRead';
                    labelElement.textContent = 'Have read this book';
                    readThisBook.appendChild(labelElement);

        booksInLibrary.appendChild(book_card);
    }
}


function hideALlBooks () {
    while (booksInLibrary.firstChild) {
        booksInLibrary.removeChild(booksInLibrary.firstChild);
      }
}



// modal script
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("#addNewBook");
const closeButton = document.querySelector("dialog button");
// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});
// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});




// show all books and Hide all books toggle btn
showAllBooksBtn.addEventListener('click', ()=>{
    welcomeMsgSection.style.display = 'none';
    if (showAllBooksBtn.value === 'Show All Books') {
        
        showAllBooksBtn.value = "Hide All Books";
        showAllBooksBtn.setAttribute('onclick', 'hideALlBooks()');
    }
    else {
        welcomeMsgSection.style.display = 'flex';
        showAllBooksBtn.value = "Show All Books";
        showAllBooksBtn.setAttribute('onclick', 'showAllBooks()');
    }
})
