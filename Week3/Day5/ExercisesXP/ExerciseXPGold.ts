//Exercise 1: Union Types
function processValue(x:number|string){
    if (typeof x ==="number"){
        return `$${x.toFixed(2)}`
    }else{
        return x.split("").reverse().join("")
    }
}
console.log(processValue(5));
console.log(processValue("awesome"));

//Exercise 2: Array Type Annotations
function sumNumbersInArray (arr:(number|string)[]):number{
    let sum=0;
    for (let elem of arr){
        if (typeof elem ==="number"){
            sum+=elem;
            
        }
        
    }
    return sum;
}
console.log(sumNumbersInArray([1,"hi",2,3,"hello"]));
console.log(sumNumbersInArray([25,"hi",2,"funny","bye",13]));

//Exercise 3: Type Aliases
type AdvancedUser={
    name:string,
    age:number,
    adress?:string
}
function introduceAdvancedUser(user:AdvancedUser):string{
    let msg=`Hello ${user.name} , you are ${user.age} years old.`;
    return user.adress===undefined? msg: msg + `Your adress is : ${user.adress}`
}
let user1=introduceAdvancedUser({name:"Alice",age:25,adress:"3 Happy street London"});
let user2=introduceAdvancedUser({name:"Mary",age:25});
console.log(user1);
console.log(user2);

//Exercise 4: Optional Parameters
function welcomeUser(name:string,greeting?:string):void{
    console.log( `${greeting || "Hello"} ${name}`)
}
welcomeUser("Alice","Hi");
welcomeUser("John");