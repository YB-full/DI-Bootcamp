class Employee {
    protected name:string;
    protected salary:number;
   
    constructor(name:string,salary:number){
        this.name=name;
        this.salary=salary;
    }

    public getDetails():string{
        return `${this.name} ${this.salary}`
    }
}
class Manager extends Employee{
    department :string;
    constructor(name:string, salary:number ,department:string){
        super(name,salary);
        this.department=department;
    }
    public getDetails(): string {
        return this.getDetails() + `${this.department}`
    }

}
let myManager= new Manager("Marketing");
myManager.getDetails();