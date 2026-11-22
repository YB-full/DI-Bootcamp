const firstGrid=document.querySelector("#grid1")

let colors=["red","orangered","orange","yellow","yellowgreen","green","aqua","blue",
    "blueviolet","cadetblue","darkblue","brown","crimson","darksalmon",
    "chocolate","cyan","palevioletred","pink","grey","black","white"]

let myColor="";    
for(let color of colors){
    let divColor=document.createElement("div");
    divColor.style.backgroundColor=color;
    firstGrid.appendChild(divColor);
    divColor.addEventListener("click", () => {
    myColor = color;
  });
}

const SecondGrid=document.querySelector("#grid2");
for (let i=0;i<24*60;i++){
    const cell=document.createElement("div");
    SecondGrid.appendChild(cell);
    cell.addEventListener("click",()=>{cell.style.backgroundColor=myColor})
    
}


let isMouseDown = false;
SecondGrid.addEventListener("mousedown", ()=>{
    isMouseDown  = true;
});
document.addEventListener("mouseup", ()=>{
    isMouseDown  = false;
})
SecondGrid.addEventListener("mouseover",(event)=>{
    if (isMouseDown ==true && event.target.parentElement === SecondGrid){
        event.target.style.backgroundColor = myColor;
    };
});


const clearButton=document.querySelector("button");
clearButton.addEventListener("click",()=>{
    for(const cell of SecondGrid.children){
        cell.style.removeProperty("background-color") ; 
    }});