//Exercise 1: Class with Access Modifiers
class Employee {
    private name:string;
    private salary:number;
    public position:string;
    protected department:string;
    constructor(name:string,salary:number,position:string,department:string){
        this.name=name;
        this.salary=salary;
        this.position=position;
        this.department=department;
    }

    public getEmployeeInfo():string{
        return `${this.name} ${this.position}`
    }
}
let myEmployee=new Employee("John Doe",8000,"FrontEnd Developer","Informatic");
console.log(myEmployee.getEmployeeInfo());

//Exercise 2: Readonly Properties in a Class
class Product{
    readonly id:number;
    public name:string;
    public price:number;
    constructor(id:number,name:string,price:number){
        this.id=id;
        this.name=name;
        this.price=price;
        
    }
    getProductInfo():string{
        return `${this.name} costs ${this.price}`
    }
}
let myProduct=new Product(1,"Apple",5.90);
myProduct.id=5;
//cannot assign to id because it s a readonly property so immutable

// Exercise 3: Class Inheritance
class Animal{
    public name: string;
    constructor (name:string){
        this.name=name;
    }
    makesound(sound:string):string{
        return `${this.name} ${sound}`
    }
}

class Dog extends Animal{
    constructor(name:string){
        super(name);
    }
    makeSound(): string {
        return `${this.name} bark`
    }
}
const myDog = new Dog("Rooky");
console.log(myDog.makeSound());

// Exercise 4: Static Properties and Methods
class Calculator {
    static add(a: number, b: number): number{
        return a + b;
    }
    static subtract(a: number, b: number): number{
        return a - b 
    }
    
}
console.log(Calculator.add(1,3));
console.log(Calculator.subtract(2,3));

// Exercise 5: Extending Interfaces with Optional and Readonly
interface User {
    readonly id :number,
    name:string,
    email:string
}

interface PremiumUser extends User {
    membershipLevel?: string
}
function printUserDetails (user : PremiumUser):void{
    console.log(`User details (ID: ${user.id}) :`);
    console.log(`- Name : ${user.name}`);
    console.log(`- Email : ${user.email}`);
    console.log(`- Level membership : ${user.membershipLevel || "Non specified"}`)
}
let myUser:PremiumUser={
    id:4,
    name:"Mary",
    email:"mary@gmail.com",
    membershipLevel:"Gold"
};
let myUser1:PremiumUser={
    id:42,
    name:"John",
    email:"John@gmail.com",
    
};
printUserDetails(myUser);
printUserDetails(myUser1);