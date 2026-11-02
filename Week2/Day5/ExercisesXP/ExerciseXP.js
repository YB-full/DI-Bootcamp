//Exercise 1 : Scope
// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne()//it will print 3 because the value of a is changed to 3 inside the if block
// #1.2 What will happen if the variable is declared 
// with const instead of let ?
//will be an error because const variable cannot be reassigned

//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree()//it will print 0 because the value of a wich is the global value the func can access for now
funcTwo()//it will change the value of a to 5
funcThree()//it will print 5 because the value of a is changed to 5 by funcTwo
// #2.2 What will happen if the variable is declared 
// with const instead of let ?
//will be an error because const variable cannot be reassigned

//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()//will create a global variable a with value "hello"
funcFive()//it will print "hello" because the value of a is changed to "hello" by funcFour

//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
funcSix()//it will print "test" because the value of a inside the function is "test" 
//and it is not affected by the global variable a
// #4.2 What will happen if the variable is declared 
// with const instead of let ?
//will be an error because const variable cannot be reassigned

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
//it will print "in the if block 5" because the value of a inside the if block is 5
// #5.2 What will happen if the variable is declared 
// with const instead of let ?
//will print"in the if block 5" and after that "outside of the if block 2" 
// because the value of a inside the if block is 5 and the value of a outside the if block is 2
//and const a in if block is not the same variable as const a outside the if block

//Exercise2:Ternary operator
function winBattle(){
    return true;
}

const winBattle2 =()=>true;
let experiencedPoints= winBattle2() ? 10 : 1;

// Exercise 3 : Is it a string ?

const isString=e=>typeof(e)==="string"?true:false;
console.log(isString('hello')); 
console.log(isString([1, 2, 4, 0]));

//Exercise 4 : Find the sum
const sumNumber=(a,b)=>a + b ;
sumNumber(3,4);

//Exercise 5 : Kg and grams
function convertKg(weight){
    return weight*1000;
}
convertKg(10);
const convertKg2=function(weight){
    return weight*1000;
}
convertKg2(10);
/// the function declaration is hoisted so accessible everywhere(even befor it's definition),
// in contrary ,the function expression is accessible only after it's definition.
const convertKg3=weight=>weight*1000;
convertKg3(10);

//Exercise 6 : Fortune teller
(function(numberChildren, partnerName, location, jobTitle) {
    console.log(`You will be a ${jobTitle} in ${location},
         and married to ${partnerName} with ${numberChildren} kids.`);
})(4,"Mary","France","Fullstack Ingeneer");

//Exercise 7 : Welcome



//Exercise 8 : Juice Bar
function makeJuice(size) {
    function addIngredients(first,second,third){
        console.log(`The client wants a ${size} juice, containing ${first},${second},${third}.`)
    }
    return addIngredients("orange","strawberry","banana");
}
console.log(makeJuice("L"));

function makeJuice2(size) {
    let ingredients=[];
    function addIngredients(first,second,third){
        ingredients.push(first,second,third); 
        function displayJuice(){
            console.log(`The client wants a ${size} juice, containing ${first},${second},${third}.`)
        }
        displayJuice();
        
    }
    addIngredients("orange","strawberry","banana");
        addIngredients("apple","kiwi","pineaple");
       
}
makeJuice2("L");
//in one sentence it will be like this
function makeJuice3(size) {

    let ingredients = [];
    function addIngredients(first, second, third) {
        ingredients.push(first, second, third);
    }
    function displayJuice() {
        console.log(`The client wants a ${size} juice, containing ${ingredients.join(", ")}.`);
    }
    addIngredients("orange", "strawberry", "banana");
    addIngredients("apple", "kiwi", "pineaple");
    displayJuice();
}
makeJuice3("L");