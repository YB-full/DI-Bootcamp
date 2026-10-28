const sayHello=() =>alert("Hello World");
setTimeout(sayHello,2000);
const myDiv=document.querySelector("#container");
const createPHello=()=>{
    let newP=document.createElement("p");
    newP.innerText="Hello World"    
    myDiv.appendChild(newP);
}
setTimeout(createPHello,2000);
let myInterval=setInterval(createPHello,2000);
let myButton=document.querySelector("#clear");
myButton.addEventListener("click",()=> clearInterval(myInterval));