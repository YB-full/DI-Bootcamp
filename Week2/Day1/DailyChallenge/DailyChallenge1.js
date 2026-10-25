let sentence ="This dinner is not that bad,I like it";
//let sentence="This movie is not so bad !";
//let sentence="This dinner is bad !";
//let sentence="This dinner is awesome!"
let wordNot=sentence.indexOf("not");
console.log(wordNot);
let wordBad=sentence.indexOf("bad");
console.log(wordBad);
//we check if the word not doesn't exists , because if it's the case it wil be -1 wich is always<indexof(wordBad)
if (wordNot!==-1 && wordNot<wordBad){
    let newSentence=sentence.slice(0,wordNot) + "good" + sentence.slice(wordBad+3);
    console.log(`Your string is: '${sentence}',\n --> the result is: '${newSentence}'`);
}else{
    console.log(`Your string is: '${sentence}',\n --> the result is: '${sentence}'`);
}