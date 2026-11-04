//Exercise 1 : Location
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
//output:I am  from John Doe from Vancouver,Canada. Latitude(49.2827), Longitude(-123.1207)

//Exercise 2: Display Student Info
function displayStudentInfo(objUser){
    //destructuring
    let {first,last}= objUser;
    console.log(`Your full name is ${first} ${last}`)
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});

//Exercise 3: User & id
const users = { user1: 18273, user2: 92833, user3: 90315 }
let usersElements=Object.entries(users);
console.log(usersElements);

let updateUserId=Object.values(
    usersElements.map(([key,value])=>[key,value*2])
);
console.log(updateUserId);


//Exercise 4 : Person class
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);
//  will print object because with class we create objects

//Exercise 5 : Dog class
class Dog {
  constructor(name) {
    this.name = name;
  }
};
  // 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};

// Exercise 6 : Challenges
//[2] === [2] //false
//  because array and objects compares by reference not by value
//and the first as one reference the second as an other reference
//{} === {}//false for the same reason

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};


object1.number = 4;
console.log(object2.number)
//4 because takes the same reference as object1
console.log(object3.number)
//4 because takes the same reference as object2
console.log(object4.number)
//5 because it is an other reference


class Animal{
    constructor(name,type,color){
        this.name=name
        this.type=type
        this.color=color
    }
}

class Mammal extends Animal{
    constructor(name,type,color,noise){
        super(name,type,color);
        
    }
    sound(noise){
        console.log(`${noise} I'm a ${this.type} , named ${this.name} and I'm ${this.color}`);
    }
}

const farmerCow=new Mammal("Lily","cow","brown and white")
farmerCow.sound("Moooo");