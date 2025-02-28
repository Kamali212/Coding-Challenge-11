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
    }
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5); // Test
console.log(book1.getDetails()); // Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"
book1.updateCopies(-1); // Test
console.log(book1.getDetails()); // Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"