const products=require('./products.js');

const findProduct = (productName)=>{
    return products.find(p=>p.name ===productName );
}
console.log(findProduct("Laptop"));
console.log(findProduct("Table"));
console.log(findProduct("Else"));
//not in the arr of objects so undefined