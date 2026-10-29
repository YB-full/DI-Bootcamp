const tasks = [];
let myInput=document.querySelector("input");
const myForm=document.querySelector("form");
const myDiv=document.querySelector(".listTasks");
let myClearButton=document.createElement("button");
myClearButton.type="button";
myClearButton.textContent="CLEAR";
myClearButton.setAttribute("aria-label", "clear tasks");
myClearButton.classList.add("clearButton")
myClearButton.hidden="true";



function addTask(){
    event.preventDefault();
    let textInput=myInput.value;
    if(textInput.trim()!==""){
        tasks.push(textInput);
        let myXButton=document.createElement("button");
        myXButton.type="button";
        myXButton.setAttribute("aria-label", "delete task");

        const icon = document.createElement("i");
        icon.className = "fa-solid fa-xmark";
        icon.classList.add("x-icon");
        icon.setAttribute("aria-hidden", "true");

        myXButton.appendChild(icon);

        let myCheck=document.createElement("input");
        myCheck.type="checkbox";
        myCheck.id="myCheck"+tasks.length;
        let myLabel=document.createElement("label");
        myLabel.htmlFor=myCheck.id;
        myLabel.textContent=textInput;
        
          
        let myLi=document.createElement("li");
        myLi.appendChild(myXButton);
        myLi.appendChild(myCheck);
        myLi.appendChild(myLabel);
       
        
        myDiv.appendChild(myLi);
        myClearButton.hidden="false";
        myDiv.appendChild(myClearButton);   
        myCheck.addEventListener("click", ( )=>{
            myLabel.classList.add("task-done")});

    }else{
        alert("Enter a valid new task");
    }
   
}

function deleteTask(){
    
    myClearButton.addEventListener("click", ( )=>{
        myDiv.innerHTML = "";
        myInput.value= "";});
    ;
}
myForm.addEventListener("submit",addTask);
myForm.addEventListener("click",deleteTask);
