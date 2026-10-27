const divId=document.querySelector("#navBar");
divId.setAttribute("id","SocialNetworkNavigation");

const newLi=document.createElement("li");
const logoutText = document.createTextNode('Logout');
newLi.appendChild(logoutText);
const ul=document.querySelector("ul")
ul.appendChild(newLi)
console.log(ul.firstElementChild.textContent);
console.log(ul.lastElementChild.textContent);