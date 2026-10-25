//using one loop
 for (let i=0;i<7;i++){
    console.log( "* ".repeat(i));
}

//using 2 nested loops
for (let i = 0; i <7; i++) {
    let nestedLoops="";
  for (let j = 0; j <i; j++) {
    nestedLoops+="* ";
  }
  console.log(nestedLoops); 
}

