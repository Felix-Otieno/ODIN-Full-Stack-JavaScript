class Book {
    constructor(title, author, publication) {
        this.title = title;
        this.author = author;
        this.publication = publication;
    }

    bookDetails() {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Publication Year: ${this.publication}`);
    }
}

class Ebook extends Book {
    constructor(title, author, publication, price) {
        super(title, author, publication);
        this.price = price;
    }

    // Overriding the bookDetails method
    bookDetails() {
        super.bookDetails(); // Call parent class method
        console.log(`Price: ${this.price}`);
    }
}

// Creating an instance of Book
const book = new Book("New Era", "Dololo Rubeh", 2024);
console.log("Book Details:");
book.bookDetails();
console.log({
    title: book.title,
    author: book.author,
    publication: book.publication
});

// Creating an instance of Ebook
const ebook = new Ebook("New Life", "Owiti Otieno", 2025, 2500);
console.log("\nEBook Details:");
ebook.bookDetails();
console.log({
    title: ebook.title,
    author: ebook.author,
    publication: ebook.publication,
    price: ebook.price
});
