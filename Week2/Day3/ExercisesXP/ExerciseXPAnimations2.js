let myButton=document.querySelector("button");
let myAnimate=document.querySelector("#animate");
position=0;
let myInterval=0;
let myMove=()=>{
    if (position==350){
        clearInterval(myInterval);
        
    }
    else{
        position ++;
        myAnimate.style.left =position+"px";
    }
   
}

myButton.addEventListener("click",()=>{
    position = 0; 
    myAnimate.style.left =position+"px";
    myInterval=setInterval(myMove,1)
});
