const myForm= document.querySelector("#libform");
const myStory=document.querySelector("#story");

let stories=[];
myForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    const noun=document.querySelector("#noun");
    let myNoun=noun.value

    const adjective=document.querySelector("#adjective");
    let myAdjective=adjective.value

    const person=document.querySelector("#person");
    let myPerson=person.value

    const verb=document.querySelector("#verb");
    let myverb=verb.value

    const place=document.querySelector("#place");
    let myPlace=place.value


    const story1 = `At ${myPlace}, ${myPerson} discovered a thing called ${myNoun}.
     It was ${myAdjective}, so he decided to ${myverb}!`;
    
    const story2 = `One day, ${myPerson} found a ${myAdjective}
     ${myNoun} in ${myPlace} and decided to ${myverb}.`;

    const story3 = `At ${myPlace}, ${myPerson} had to
     ${myverb} a ${myAdjective} ${myNoun} before sunset.`;

   
    if(myNoun.trim()==""|| myAdjective.trim()==""||myPerson.trim()==""
    ||myverb.trim()==""||myPlace.trim()==""){
        alert("Empty value");
    }else{
        stories=[story1,story2,story3];
        myStory.textContent=stories[0];
    }
});

const myShuffle=document.querySelector("#shuffle-button");
myShuffle.addEventListener("click",(event)=>{
            event.preventDefault();
            let randomIndex = Math.floor(Math.random()*stories.length);
            const story=stories[randomIndex];
            myStory.textContent=story;
    
        })

