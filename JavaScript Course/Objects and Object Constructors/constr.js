function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;

    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead ? "already read" : "not read yet"}.`;
    };
}

// Example usage:
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
console.log(theHobbit.title); // "The Hobbit"
console.log(theHobbit.info()); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"

const newChange = new Book("New Change Of My Life", "Afeloh Felih", 450, true);
console.log(newChange.info()); // "New Change Of My Life by Afeloh Felih, 450 pages, already read."
