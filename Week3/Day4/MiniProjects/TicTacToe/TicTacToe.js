const winCombos = [
           [0, 1, 2],
           [3, 4, 5],
           [6, 7, 8],
           [0, 3, 6],
           [1, 4, 7],
           [2, 5, 8],
           [0, 4, 8],
           [6, 4, 2]
]

const symbolX = "X";
const symbolO = "O";
const btnX = document.querySelector("#symbolX");
const btnO = document.querySelector("#symbolO");
let playerSymbol = "";
let computerSymbol = "";
let gameDifficulty = "";

const toggleDifficulty = document.querySelector("#difficulty-toggle");
const textlevels=document.querySelectorAll(".toggle-text");

toggleDifficulty.addEventListener("click", () => {
    toggleDifficulty.classList.toggle("is-hard");
    if(toggleDifficulty.classList.contains("is-hard")){
        gameDifficulty = "hard";
        textlevels[0].classList.remove("active");
        textlevels[1].classList.add("active");   
        
    
    }else{
        gameDifficulty = "easy";
        textlevels[0].classList.add("active");   
        textlevels[1].classList.remove("active");
    
    }    
    
});     


btnX.addEventListener("click", () => {
    playerSymbol = symbolX;
    computerSymbol = symbolO;
    startGame();
});
btnO.addEventListener("click", () => {
    playerSymbol = symbolO;
    computerSymbol = symbolX;
    startGame();
});

function startGame() {
    
    
}
function endGame(){
    console.log(`Le jeu fini !`);
}
let playingBoard = Array(9).fill(null);