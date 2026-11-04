//includes return true if it includes the element we put in ()
//find return the first element that we put in () we find 
//some check if  there is an element that has a condition provide a function as parameter
//every check if every element has some condition provide a function as parameter
//push add an element to an array at the end
//pop remove the last element
//shift remove first element
//unshift add an element at the beginning of the array
//splice(the index,the number of element we want to remove,teh element we want to add or put in place)
//flat(depth) to remove the nested arrays in an array
//indexOf(element) get the first index of the element or -1;
//lastindexof(element) get the last index of the element or -1;
//map(function) apply the function on each element of the array and print the new array
//  same lenght than the old array
//filter(function)apply the function on each element of the array and print the new array 
// lenght=the elements than are provided by the function
//reduce(function)reduce the all array to one item using a function
//reduceRight(function) start with the last element

const numbers=[10,11,12,15,20];
numbers.forEach((n)=>{
    if(n%2==0){
        console.log(n);
    }
});

const words=["hello","hey","hola"];
console.log(words.every(e=>e[0]==="h"));


const party = [
  {
    desert: 'Chocolate Mousse',
    calories: 30,
  },
  {
    desert: 'Apple Pie',
    calories: 15,
  },
  {
    desert: 'Croissant',
    calories: 50,
  },
  {
    desert: 'Strawberry Icecream',
    calories: 5,
  },
]
const countCalories=(sum,e)=>e.desert!=="Apple Pie"?sum+=e.calories:sum+=0;
console.log(party.reduce(countCalories,0));
