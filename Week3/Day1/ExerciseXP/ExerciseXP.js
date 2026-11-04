// Exercise 1 : Colors
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((e ,index) => {
    console.log(`${index}# choice is  ${e}`)
});

const isViolet=colors.some(e=>e==="Violet");
if (isViolet){
    console.log("Yeah")
}else{
    console.log("No...");
}    

//Exercise 2 : Colors #2
const colors2 = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];
colors2.forEach((e ,index) => {
   const ord=index <3 ? ordinal[index +1]:ordinal[0];
   console.log(`${index+1}${ord} choice is  ${e}`);
});

//Exercise 3 : Analyzing
//1
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
//will print ['bread', "carrot", "potato", 'chicken', "apple", "orange"];
//2
const country = "USA";
console.log([...country]);
//will print ["U","S","A"];

//Bonus
let newArray = [...[,,]];
console.log(newArray);
//will print [null,null];
//false: print [undefined,undefined]


// Exercise 4 : Employees
const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];
const welcomeStudents = users.map(e=> `Hello ${e.firstName}`);   
console.log(welcomeStudents);   
const fullstackResidents = users.filter(e=> e.role==="Full Stack Resident");   
console.log(fullstackResidents);  

const lastNames=fullstackResidents.map(e=>e.lastName);
console.log(lastNames);


// Exercise 5 : Star Wars
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
const sentenceResult= epic.reduce((sentence,word)=>{
return sentence + " " +word
},"");
console.log(sentenceResult);

// Exercise 6 : Employees #2
const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

const passedArray=students.filter(e=> e.isPassed===true );   
console.log(passedArray);    
passedArray.forEach(e=>console.log(`Good job ${e.name} , you passed the course of ${e.course}`));      
               
