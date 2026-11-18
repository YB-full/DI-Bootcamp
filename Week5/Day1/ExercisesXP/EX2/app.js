import {person} from "./data.js";

const calculateAverageAge=(person)=>{
    let sum=0;
    for (let i=0;i<person.length;i++){
        sum+=person[i].age;
    }
    return sum/person.length;
    
}

console.log(calculateAverageAge(person));
//(42+29+10+32)/4
//28.25