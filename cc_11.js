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

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5); // Test
console.log(book1.getDetails()); // Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"
book1.updateCopies(-1); // Test
console.log(book1.getDetails()); // Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

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
// Test 
const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks); // Expected output: ["The Great Gatsby"]

borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks); // Expected output: []