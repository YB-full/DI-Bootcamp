const _ =require("lodash");
const {addition,multiply}= require("./math.js");

console.log("Addition:" ,addition(2,5));
console.log("Multiplication:",multiply(4,2));

console.log("Addition with Lodash:",_.add(2, 5));
console.log("Multiplication with Lodash:",_.multiply(4, 2));