//Exercise 1 Hello, World! Program

function sayHello():void{
    console.log("Hello World!");
}
sayHello();

//Exercise 2: Type Annotations
let age : number = 10;
let firstName : string = "John";
console.log(age)
console.log(firstName);

//Exercise 3: Union Types
let id : string | number;

//Exercise 4: Control Flow with if...else
function isPositive(num:number):string{
    let msg:string;
    if(num>0){
        msg="The number is positive";
    }else if(num===0){
        msg="The number is zero";
        }else{
                msg="The number is negative";
            }
      
    return msg;   
}   
console.log(isPositive(5));
console.log(isPositive(0));
console.log(isPositive(-4));

//Exercise 5: Tuple Types
function getDetails(name:string, age:number):[string, number, string]{
    let greeting:string=`Hello, ${name}! You are ${age} years old.`;
    return [name, age, greeting];
}
const details = getDetails("Alice", 25);
console.log(details); 

//Exercise 6: Object Type Annotations
type Person = {
    name:string,
    age:number
}
function createPerson(name:string,age:number):Person{
    return {name:name, age:age}
}
const person = createPerson("Alice", 25);
console.log(person); 



//Exercise 8: switch Statement with Complex Conditions
function getAction(userRole:string):string{
    let msg="";
    switch(userRole){
        case "admin":
            msg="Manage users and settings";
        break;
        case "editor":
            msg="Edit content";
        break;
        case "viewer":
            msg="View content";
        break;
        case "guest":
            msg="Limited access";
        break;
        case "unknown":
            msg="Invalid role";
        break;   

        
    }
    return msg;
    
}
console.log(getAction("admin")); 
console.log(getAction("editor")); 
console.log(getAction("viewer")); 
console.log(getAction("guest")); 
console.log(getAction("unknown")); 

//Exercise 9: Function Overloading with Default Parameters

function greet(): string;
function greet(name: string): string;

function greet(name?:string):string{
    return `Hello ${name || "Guest"} !`;
}
console.log(greet());
console.log(greet("Alice"));
    