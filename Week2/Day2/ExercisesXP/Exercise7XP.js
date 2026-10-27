const allBooks=[
    {title: "HarryPotter", author:"JKRolling", image:"https://images.epagine.fr/935/9781408855935_1_75.jpg",alreadyRead:false},
    {title: "DavinciCode",author:"DanBrown",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwHRS1SvRc-hMXdkqeewTnDOkMYFempRbUnvA2wGV7rg&s=10" ,alreadyRead:true}
];


const mySection=document.querySelector(".listBooks");
allBooks.forEach (book =>{
    const bookDiv=document.createElement("div");
    const bookDetails=document.createElement("p")
    bookDetails.innerText=`${book.title} written by ${book.author}`;
    const bookImage=document.createElement("img")
    bookImage.src= book.image;
    bookImage.style.width="100px";
    bookDiv.append(bookImage);
    bookDiv.append(bookDetails);
    mySection.appendChild(bookDiv);
    if(book.alreadyRead === true){
        bookDetails.style.color="red";
    }


})

