let numbers = [5,0,9,1,7,4,2,6,3,8];
numbers.toString();
numbers.join(",");
numbers.join(" ");
numbers.join("+");

highest=0;
smallest=0;
for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers.length - 1; j++) {
   
    if(numbers[j]<numbers[j+1]){
        highest=numbers[j+1];
        smallest=number[j];
    }
    console.log(numbers);
  }
  
}