interface Book {
    title:string,
    author:string,
    isbn:string,
    publishedYear:number,
    genre?:string
}

class Library {
    private books:Book[]=[];
    public addBook(book:Book):void{
        this.books.push(book);
    }
    public getBookDetails(isbn:string):void{
        const foundBook=this.books.find(book=>book.isbn===isbn);
        if (foundBook) {
            console.log( `Title: ${foundBook.title} Author: ${foundBook.author}(${foundBook.publishedYear}) ${foundBook.genre ? ` - Genre : ${foundBook.genre}` : ""}`);
        }else{
            console.log( "Book not found");
        }
       
    }
    protected getBooks():Book[]{
        return this.books;
    }

}

class DigitalLibrary extends Library{
    readonly website:string;
    constructor(website:string){
        super();
        this.website=website;
    }
    public listBooks():void{
        const allBooks= this.getBooks();
        allBooks.forEach(book => {
            console.log(`${book.title}`);
        });

    }
}
const book1={
    title:"Harry Poter" ,
    author: "J K Rowling",
    isbn:"978-0743273565",
    publishedYear: 2007,
    genre: "Fiction"
}
const book2={
    title:"Dune" ,
    author: "Frank Herbert",
    isbn:"978-0743247859",
    publishedYear: 1965,
    
}
let myDigitalLibrary= new DigitalLibrary("www.mylibraryOnline.com");
myDigitalLibrary.addBook(book1);
myDigitalLibrary.addBook(book2);

console.log("Test 1 (Harry Potter) :");
myDigitalLibrary.getBookDetails("978-0743273565");
console.log("Test 2 (Dune) :");
myDigitalLibrary.getBookDetails("978-0743247859");
console.log("Test 3 (Inexistant) :");
myDigitalLibrary.getBookDetails("978-07432474875");
console.log("Test 4 (List of books) :");
myDigitalLibrary.listBooks();
