"use strict";

// Create Book class
class Book {
    constructor(title, author, ISBN, isIssued = false) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;
    }

    // Issue a book if it is available
    issueBook() {
        if (!this.isIssued) {
            this.isIssued = true;
            console.log(`"${this.title}" has been issued.`);
        } else {
            console.log(`"${this.title}" is already issued.`);
        }
    }

    // Return an issued book
    returnBook() {
        if (this.isIssued) {
            this.isIssued = false;
            console.log(`"${this.title}" has been returned.`);
        } else {
            console.log(`"${this.title}" was not issued.`);
        }
    }
}

// Create book objects
const books = [
    new Book("JavaScript Basics", "John Smith", "ISBN101"),
    new Book("Web Development", "David Miller", "ISBN102"),
    new Book("Python Programming", "Sara Lee", "ISBN103", true)
];

// Display available books
console.log("Available Books:");

books.filter(book => !book.isIssued).forEach(book => {
    console.log(`${book.title} | ${book.author} | ${book.ISBN}`);
});

// Search for a book by ISBN and issue it
const searchISBN = "ISBN102";
const selectedBook = books.find(book => book.ISBN === searchISBN);

if (selectedBook) {
    selectedBook.issueBook();
} else {
    console.log("Book not found.");
}

// Display updated available books
console.log("Updated Available Books:");

books.filter(book => !book.isIssued).forEach(book => {
    console.log(`${book.title} | ${book.ISBN}`);
});