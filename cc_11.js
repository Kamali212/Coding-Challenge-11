// Task 1 Creating a book class
class Book { // Book Class
    constructor(title, author, isbn, copies) { // Class properties
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    };
    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}` // Method to return details of Book
    };
    updateCopies(quantity) { // Method to update stock quantities
        this.copies += quantity
    };
}


// Task 2 Creating a borrower class

class Borrower {
    constructor(name, borrowerID) {
        this.name = name;
        this.borrowerID = borrowerID;
        this.borrowedBooks = [];
    };
    borrowBook(book) { // Method to borrow books
        if (!this.borrowedBooks.includes(book)) { // Check to see if books is already borrowed
            this.borrowedBooks.push(book); // If not borrowed add to the borrowed books array
        } else {
            console.log(`${book} is already borrowed. `);
        };
    };
    returnBook(book) { // Method to return books
       const index = this.borrowedBooks.indexOf(book); 
        if (index !== -1) { // Find book in the borrowed books array
            this.borrowedBooks.splice(index, 1) // Remove book from borrowed books array 
        } else {
            console.log(`${book} hasn't been borrowed`) // Message if book was not found in array
        }
    }
}

// Task 3 Creating a library class

class Library { // Libary class with books and borrowers array
    constructor() {
        this.books = []
        this.borrowers = []
    };
    addBook(book) { // Method to add books
        this.books.push(book) 
    }
    listBooks() { // Method to list books
        this.books.forEach(book => {console.log(book.getDetails()); // Log details of books
        });
    };  

    lendBook(borrowerID, isbn) { // Method to lend books
        const borrower = this.borrowers.find(b => b.borrowerID === borrowerID); // Find borrower by id
        const book = this.books.find(b => b.isbn === isbn); // Find book by isbn

        if (book && borrower) { // Book and borrower exist
            if (book.copies > 0) { // If available copies
                book.updateCopies(-1); // Update copies of avaialble book
                borrower.borrowBookbook(book); // Lend book to borrower
                console.log(`${book.title} is lent to ${borrower.name}`); // Message when book is lent
            } else {
                console.log(`${book.title} is unavailable`); // Message if book is unavailable 
            }
        }
    }

    
    }
        
}
// Test Data Task 1
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails()); // Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"

book1.updateCopies(-1);
console.log(book1.getDetails()); // Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

// Test Data Task 2

const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks); // Expected output: ["The Great Gatsby"]

borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks); // Expected output: []

// Test Data Task 3

const library = new Library();
library.addBook(book1);
library.listBooks(); // Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

// Task Data Task 4

library.lendBook(201, 123456);
console.log(book1.getDetails()); // Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 3"
console.log(borrower1.borrowedBooks); // Expected output: ["The Great Gatsby"]

// Task Data Task 5

library.returnBook(201, 123456);
console.log(book1.getDetails()); // Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"
console.log(borrower1.borrowedBooks); // Expected output: []






