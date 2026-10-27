// Exercise 1 : Find the numbers divisible by 23
function displayNumbersDivisible(){
    let result=[]
    let sum=0
    for (let i =0;i<500;i++){
        
        if (i%23==0){
            result.push(i) ;
            sum += i;
        }      
    }
    console.log(`Outcome: ${result . join(" ")}`);
    console.log(`Sum: ${sum}`);
    
     
}
displayNumbersDivisible()

//Bonus 
function displayNumbersDivisible2(divisor){
    let result=[]
    let sum=0
    for (let i =0;i<500;i++){
        
        if (i%divisor==0){
            result.push(i) ;
            sum += i;
        }      
    }
    console.log(`Numbers divisible by ${divisor}: ${result . join(" ")}`);
    console.log(`Sum: ${sum}`);
    
     
}
displayNumbersDivisible2(3)
displayNumbersDivisible2(45)

//Exercise 2 : Shopping List
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

let shoppingList=["banana","orange","apple"]

function myBill(){
    let total=0;
    for (let i=0;i<shoppingList.length;i++){
        if (shoppingList[i] in stock){
            total+=prices[shoppingList[i]];
            
        }
    }
    console.log(total);
}
myBill();

//bonus
function myBill2(){
    let total=0;
    for (let i=0;i<shoppingList.length;i++){
        let fruit= shoppingList[i];
        if (shoppingList[i] in stock && stock[fruit]>0){
            total+=prices[fruit];
            stock[fruit]-=1;
            
        }
    }
    console.log(total);
}

myBill2()

//Exercise 3 : What’s in my wallet ?
function changeEnough(itemPrice, amountOfChange) {
    let change=amountOfChange[0]*0.25 +amountOfChange[1]*0.10+amountOfChange[2]*0.05+amountOfChange[3]*0.01
    if (change>itemPrice){
        console.log( true);
    }else{
        console.log(false);
    }

}
changeEnough(4.25, [25, 20, 5, 0])
changeEnough(14.11, [2,100,0,0])
changeEnough(0.75, [0,0,20,5])

// Exercise 4 : Vacations Costs
function hotelCost(){
    let answer;
    do{
        answer=Number(prompt("Enter the number of nights in the hotel: "));
    
    }while (answer===0|| isNaN(answer));
    return answer *140
}



function planeRideCost(){
    let answer;
    do{
        answer=prompt("What your destination : ");
    
    }while (answer===0|| answer === null||!isNaN(Number(answer)));
    
    if (answer=="London"){ return 183;}
    else if (answer=="Paris"){ return 220;}
    else{ return 300;}
}

function rentalCarCost(){
    let answer;
    do{
        answer=Number(prompt("Enter the number of days for renting a car : "));
    
    }while (answer===0|| isNaN(answer));
    let totalPrice=answer*40;
    if (answer>10){
        totalPrice =totalPrice*0.95
    }
    return totalPrice
}

function totalVacationCost(){
    let hotel=hotelCost();
    let plane=planeRideCost();
    let car=rentalCarCost();
    console.log(`The car cost: ${car}, the hotel cost: ${hotel}, the plane tickets cost: ${plane}.`);

}





