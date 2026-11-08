//using a sorted array
 function isAnagram1(string1,string2){
     let string1Clean=string1.toLowerCase().replaceAll(" ","").split("");
    let string2Clean=string2.toLowerCase().replaceAll(" ","").split("");
     let string1Sorted=string1Clean.sort();
     let string2Sorted=string2Clean.sort();
     if(string1Sorted.join("")===string2Sorted.join("")){
        console.log(`${string1} is an anagram of ${string2}`);
        return true;
    }else{
        console.log(`${string1} is NOT an anagram of ${string2}`);
        return false;
    }  
}
isAnagram1('"Astronomer"','"Moon starer"');
isAnagram1('"School master"','"The classroom"');
isAnagram1('"The Morse Code"','"Here come dots"');
isAnagram1('"Family"','"myafi"');
isAnagram1('"Robot"','"Roboo"');

//using regex and an object to count the letters
function isAnagram(string1,string2){
    let clean1=string1.toLowerCase().replace(/\s+/g,'').split('');
    let clean2=string2.toLowerCase().replace(/\s+/g,'').split('');

    if (clean1.length !== clean2.length){
        return false;
    }
    letters1={};
    clean1.forEach(e => {
        //the letter is already inside letters1
        if (e in letters1){ 
            letters1[e]+=1;//add 1 to the counter
        }else{
            letters1[e]=1;//initialize the counter to 1
        }
    });
    //checking the letters in second string
    for(const e of clean2){
        //if there is the same letter in first string (so in letters1)
        if (e in letters1){
            letters1[e]-=1; //left the counter of the letter with one less
        }else{
            return false;//different letter so different word
        }
        //if we find a letter more times
        if (letters1[e]<0){
            return false;
        }
        
    }
    
    return true ;
    
}

function testAndLogAnagram(string1,string2){
    if (isAnagram(string1,string2)){
        console.log(`${string1} is an anagram of ${string2}`);
    }else{
        console.log(`${string1} is NOT an anagram of ${string2}`);
        return true ;
    }
}

testAndLogAnagram('"Astronomer"','"Moon starer"');
testAndLogAnagram('"School master"','"The classroom"');
testAndLogAnagram('"The Morse Code"','"Here come dots"');
testAndLogAnagram('"Family"','"myafi"');
testAndLogAnagram('"Robot"','"Roboo"');