//Exercise 7: Type Assertions
const myInput= document.getElementById("myInput") ;
const myCastedInput=myInput as HTMLInputElement;
myCastedInput.value="Hello";
myCastedInput.id="1";
myCastedInput.type="submit";
