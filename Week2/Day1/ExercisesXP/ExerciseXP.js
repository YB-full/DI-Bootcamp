//EX1 List of people
const people = ["Greg", "Mary", "Devon", "James"];
people.shift();
people.splice(2,1,"Jason");
people.push("Yehoudit");
console.log(people.indexOf("Mary"));
console.log(people.slice(1,3));
console.log(people.indexOf("Foo")); //doesn't exists in the list so return-1
let last=people[people.length-1];
console.log(last);

for (const i of people){
    console.log(i);
}

for (const i of people){
    if (i == "Devon"){
        break
    }
    console.log(i);
}

//EX2 Your favorite colors
let colors=["green","pink","yellow","blue","purple"];
for(let i=0;i <colors.length;++i){
    console.log(`My #${i+1} choice is ${colors[i]}`);
}
// let suffixes=["st","nd","rd","th"];
// for(const e in colors){
//     for(const x of suffixes){
//        console.log(`My ${e}${x} choice is ${colors[e+1]}`); 
//     }
// }

//EX3  Repeat the question


// do{
//     let userInput = prompt("Enter a number :");
//     console.log(typeof(userInput));
//     let number=(parseInt(userInput));

    
//     if (number>=10){
//         break;
//     }
// }while (number<10)

//EX4 Building Management
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}    

console.log(building["numberOfFloors"]);
console.log(building["numberOfAptByFloor"]["firstFloor"] + building["numberOfAptByFloor"]["thirdFloor"]);
const nameOfTenant=building["nameOfTenants"][1]
const numberOfRooms=building["numberOfRoomsAndRent"][nameOfTenant.toLowerCase()][0];
console.log(`The second tenant is ${nameOfTenant} and he has ${numberOfRooms} rooms in his appartment.`)

let sumRents = building["numberOfRoomsAndRent"]["sarah"][1] + building["numberOfRoomsAndRent"]["david"][1]
let danRent=building["numberOfRoomsAndRent"]["dan"][1];
if (sumRents >danRent){
    danRent+=1200;

}
console.log(danRent);

//EX5 Family
let family={
    father:"Bob",
    mother:"Mary",
    child:"John"
}
for( e in family){
    console.log(e);
}
for (e in family){
    console.log(family[e]);
}

//EX6 Rudolf
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}
console.log(`My ${details["my"]} is ${details["is"]} the ${details["the"]} `);

//EX7 Secret Group
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let firstLetters=[];
for(name of names){
    firstLetters.push(name[0]);
}
let societyName= firstLetters.sort().join("");

console.log(societyName);