let booksInLibrary = document.querySelector('.booksInLibrary');
let showAllBooksBtn = document.querySelector('#showAllBooks');
let welcomeMsgSection = document.querySelector('.welcomeMsg');
let form = document.getElementById('myForm');
let categories = document.querySelector('#categories');
let favouriteBooks = document.querySelector('#favouriteBooks');
let booksTracker = document.querySelector('#booksTracker');


class BookClass {
    constructor(name, author, noOfPages, isRead) {
        this.name = name;
        this.author = author;
        this.noOfPages = noOfPages;
        this.isRead = isRead;
    }
}

// book object constructor
// function Book(title, author, numberOfPages, isRead) {
//     this.title = title;
//     this.author = author;
//     this.numberOfPages = numberOfPages;
//     this.isRead = isRead;
// }


[categories, favouriteBooks, booksTracker].forEach(button => {
    button.addEventListener('click', () => {
        removeALlBooks();
        welcomeMsgSection.style.display = 'flex';
        welcomeMsgSection.textContent = "Feature Coming Soon!";
        showAllBooksBtn.disabled = false;
    })
})


// hide all books in library from view
function removeALlBooks() {
    while (booksInLibrary.firstChild) {
        booksInLibrary.removeChild(booksInLibrary.firstChild);
    }
}


// demo books for lib
let book1 = new BookClass('The Book of Nothing', 'Osho', 112, true);
let book2 = new BookClass('Sacrificed', 'John Babbage', 213, false);
let book3 = new BookClass('Order of the Phoenix', 'Goete', 98, true);
let book4 = new BookClass('Catching Fire', "Charles Fire", 276, false);
let book5 = new BookClass('Afraid of the World', 'Duen Nash', 34, true);
let book6 = new BookClass('The book of Mirdad', 'Leo Tolstoy', 425, false);

let myLibrary = [book1, book2, book3, book4, book5, book6];


form.addEventListener('submit', function () {

    showAllBooksBtn.disabled = false;

    let bookTitle = document.getElementById('bookName').value;
    let authorName = document.getElementById('authorName').value;
    let pagesInBook = document.getElementById('pagesInBook').value;
    let isReadinForm = document.getElementById('isReadinForm').checked;

    let bookN = new BookClass(bookTitle, authorName, pagesInBook, isReadinForm);
    myLibrary.push(bookN);

    showAllBooksBtn.click();

    welcomeMsgSection.style.display = 'flex';
    welcomeMsgSection.textContent = "New Book added successfully to the library.";
   
})


// modal script
const dialog = document.querySelector("dialog");
const addNewBook = document.querySelector("#addNewBook");
const closeModal = document.querySelector("dialog button");
// "Add New Book" button opens the dialog modally
addNewBook.addEventListener("click", () => {
    dialog.showModal();
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('pagesInBook').value = '';
    document.getElementById('isReadinForm').checked = '';
});
// "x" button closes the dialog
closeModal.addEventListener("click", () => {
    dialog.close();
});



// show all books and Hide all books toggle btn
showAllBooksBtn.addEventListener('click', () => {

    // display msg for no books in library
    if (myLibrary.length < 1) {
        welcomeMsgSection.style.display = 'flex';
        welcomeMsgSection.textContent = "There are no books in the library.";
        showAllBooksBtn.disabled = true;
    }

    // hide welcome msg in case there are books in library
    else {
        welcomeMsgSection.style.display = 'none';
        showAllBooksBtn.disabled = true;

        removeALlBooks();

        for (let i = 0; i < myLibrary.length; i++) {

            let book_card = document.createElement('div');
            book_card.setAttribute('class', 'book-card');

            let book_cover = document.createElement('div');
            book_cover.setAttribute('class', 'book-cover');
            book_cover.innerHTML = `${myLibrary[i].name} <br>by<br> ${myLibrary[i].author} <br><br> Total pages: ${myLibrary[i].noOfPages}`;
            book_card.appendChild(book_cover);

            let book_title = document.createElement('h3');
            book_title.setAttribute('class', 'book-title');
            book_title.textContent = `${myLibrary[i].name}`;
            book_card.appendChild(book_title);

            let readingStatus = document.createElement('p');
            if (myLibrary[i].isRead === true) {
                readingStatus.textContent = '              Read               ';
                readingStatus.style.backgroundColor = 'green';
            } else {
                readingStatus.textContent = '           Not Read           ';
                readingStatus.style.backgroundColor = 'red';
            }
            readingStatus.setAttribute('class', 'readingStatus');
            readingStatus.style.whiteSpace = 'pre';
            book_card.appendChild(readingStatus);

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

            let inputElement = document.createElement('input');
            inputElement.type = 'checkbox';
            inputElement.id = 'isReadInLibrary';
            inputElement.setAttribute('class', 'isReadInLibraryClass');
            readThisBook.appendChild(inputElement);
            if (myLibrary[i].isRead) {
                inputElement.checked = true;
            }
            else {
                inputElement.checked = false;
            }

            let labelElement = document.createElement('label');
            labelElement.for = 'isReadInLibrary';
            labelElement.textContent = 'Have read this book';
            readThisBook.appendChild(labelElement);

            booksInLibrary.appendChild(book_card);
        }

        // change the reading status of books
        let checkboxesIsReadInLibraryNodeList = document.querySelectorAll('.isReadInLibraryClass');
        let checkboxesIsReadInLibraryList = Array.from(checkboxesIsReadInLibraryNodeList)
        checkboxesIsReadInLibraryList.forEach((checkbox, index) => {
            checkbox.addEventListener('change', () => {
                // console.log(myLibrary[i].isRead);
                let child = checkbox.parentNode.parentNode.parentNode.children[2];
                if (checkbox.checked) {
                    child.textContent = '              Read               ';
                    child.style.backgroundColor = 'green';
                    myLibrary[index].isRead = true;
                    // console.log(myLibrary[i].isRead);
                } else {
                    child.textContent = '           Not Read           ';
                    child.style.backgroundColor = 'red';
                    myLibrary[index].isRead = false;
                    // console.log(myLibrary[i].isRead);
                }
            })
        })

        // // delete a book from the library
        let bookDeleteBtnNodeList = document.querySelectorAll('.delete-btn');
        let bookDeleteBtnList = Array.from(bookDeleteBtnNodeList);
        bookDeleteBtnList.forEach((bookDeleteBtn, index) => {
            bookDeleteBtn.addEventListener('click', () => {
                myLibrary.pop(myLibrary[index]);
                bookDeleteBtn.parentNode.parentNode.remove();
                myLibraryNew = myLibrary.filter(item => item != bookDeleteBtn.parentNode.parentNode.children[1].textContent);

                if (myLibraryNew.length < 1 && !booksInLibrary.hasChildNodes()) {
                    welcomeMsgSection.style.display = 'flex';
                    welcomeMsgSection.textContent = "You just deleted all the books from the library.";
                    showAllBooksBtn.disabled = true;
                }
            })
        })
    }
})