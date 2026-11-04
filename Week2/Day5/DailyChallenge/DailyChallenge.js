let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}
const displayGroceries=()=>{groceries.fruits.forEach(e => {
    console.log(e);
})};
displayGroceries();

const cloneGroceries=()=>{
    let user=client;
    client="Betty";
    console.log(`Client:${client}`);
    //Betty because client was reassigned to Betty
    console.log(`User:${user}`)
    // John because user is an independant variable 
    //that took the value of client before the reassignment

    const shopping=groceries;
    groceries.totalPrice="35$";
    //we will see it also in shopping because objects 
    //are passed by reference,not by value
    //so shopping and groceries share the same reference

    groceries.other.paid=false;
    //we will see it also in shopping because groceries 
    // and shopping share the same reference
    //so every element inside even theobject elements

    console.log(groceries);
    console.log(shopping);
}
cloneGroceries();