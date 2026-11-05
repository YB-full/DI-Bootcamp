  const robots = [
          {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
            image: 'https://robohash.org/1?200x200'
          },
          {
            id: 2,
            name: 'Ervin Howell',
            username: 'Antonette',
            email: 'Shanna@melissa.tv',
            image: 'https://robohash.org/2?200x200'
          },
          {
            id: 3,
            name: 'Clementine Bauch',
            username: 'Samantha',
            email: 'Nathan@yesenia.net',
            image: 'https://robohash.org/3?200x200'
          },
          {
            id: 4,
            name: 'Patricia Lebsack',
            username: 'Karianne',
            email: 'Julianne.OConner@kory.org',
            image: 'https://robohash.org/4?200x200'
          },
          {
            id: 5,
            name: 'Chelsey Dietrich',
            username: 'Kamren',
            email: 'Lucio_Hettinger@annie.ca',
            image: 'https://robohash.org/5?200x200'
          },
          {
            id: 6,
            name: 'Mrs. Dennis Schulist',
            username: 'Leopoldo_Corkery',
            email: 'Karley_Dach@jasper.info',
            image: 'https://robohash.org/6?200x200'
          },
          {
            id: 7,
            name: 'Kurtis Weissnat',
            username: 'Elwyn.Skiles',
            email: 'Telly.Hoeger@billy.biz',
            image: 'https://robohash.org/7?200x200'
          },
          {
            id: 8,
            name: 'Nicholas Runolfsdottir V',
            username: 'Maxime_Nienow',
            email: 'Sherwood@rosamond.me',
            image: 'https://robohash.org/8?200x200'
          },
          {
            id: 9,
            name: 'Glenna Reichert',
            username: 'Delphine',
            email: 'Chaim_McDermott@dana.io',
            image:'https://robohash.org/9?200x200'
          },
          {
            id: 10,
            name: 'Clementina DuBuque',
            username: 'Moriah.Stanton',
            email: 'Rey.Padberg@karina.biz',
            image:'https://robohash.org/10?200x200'
          }
 ];

//Part I Creating the cards 
const myDiv=document.createElement("div");
myDiv.classList.add("card-div");
const ulCards=document.createElement("ul");
ulCards.classList.add("user-grid");

 function displayRobots(robotsArray){
 robotsArray.forEach(e=>{

    const { id, name, username, email, image } = e;

    const liCards=document.createElement("li");

    const articleCards=document.createElement("article");
    articleCards.classList.add("user-card");
    articleCards.dataset.id = id;            
    articleCards.dataset.username = username;
    liCards.appendChild(articleCards);

    if(image){

        const divCards=document.createElement("div");
        divCards.classList.add("avatar-container");

        const imageCards=document.createElement("img");
        imageCards.classList.add("avatar-img");
        imageCards.src=image;
        divCards.appendChild(imageCards);
        articleCards.appendChild(divCards);
        

    }

    if (name){

        const h2Cards=document.createElement("h2");
        h2Cards.classList.add("user-name");
        h2Cards.textContent=name;
        articleCards.appendChild(h2Cards); 
        

    }

    if (email){

         const pCards=document.createElement("p");
         pCards.classList.add("user-email");
         pCards.textContent=email;
         articleCards.appendChild(pCards);
         
    }

    ulCards.appendChild(liCards);
 })
myDiv.appendChild(ulCards);
document.body.appendChild(myDiv);
};
displayRobots(robots);

//Part II Search Filter
const mySearch=document.querySelector("#search");
mySearch.addEventListener("input",e=>{
    const searchText=e.target.value.toLowerCase();
    const filterRobots=robots.filter(robot=>{
        let nameRobot= robot.name.toLowerCase();
        return nameRobot.includes(searchText);
        
    });
    ulCards.innerHTML="";
    displayRobots(filterRobots);

})



