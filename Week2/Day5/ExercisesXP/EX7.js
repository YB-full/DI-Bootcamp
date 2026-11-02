(function(userName) {
    const myNav=document.querySelector("nav");
    const myDiv=document.createElement("div");
    myDiv.innerHTML=`Welcome ${userName}`;
    const image=document.createElement("img")
    image.src="https://i.etsystatic.com/31548528/r/il/ffde13/5804742914/il_300x300.5804742914_ap2d.jpg"
    image.alt="profilePicture.jpg"
    myDiv.appendChild(image);
    myNav.appendChild(myDiv);

})("Mary");