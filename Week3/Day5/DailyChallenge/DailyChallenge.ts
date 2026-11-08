function validateUnionType(value: any, allowedTypes: string[]): boolean{
    let valueType=typeof value;
    if ( allowedTypes.includes(valueType)){
        return true;
    }
    return false;
}
let test1=validateUnionType("Hello", ["string", "number"]);
let test2=validateUnionType(true, ["string", "number"]);
let test3=validateUnionType("Hello",["boolean","object"])
console.log(test1);
console.log(test2);
console.log(test3);
