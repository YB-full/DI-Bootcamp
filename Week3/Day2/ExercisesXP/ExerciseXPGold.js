//Exercise 1 : print Full Name
const printFullName=(( {first,last})=>{
    console.log(`Your full name is ${first} ${last}`)
});
printFullName({first:'Elie' ,last: 'Schoppik'})

//Exercise 2 : keys and values
function keysAndValues(myObject){
    const result=[
        Object.keys(myObject),
        Object.values(myObject)
    ];
    return console.log(result)
}
   
keysAndValues({ a: 1, b: 2, c: 3 })
keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
keysAndValues({ key1: true, key2: false, key3: undefined })

//Exercise 3 : Counter class
