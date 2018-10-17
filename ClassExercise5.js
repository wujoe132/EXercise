function addOne(num) {
   for(var i = 0; i < 15; i++) {
       num += 1;
    //num = num + 1;
       console.log("this is my input num:", num);
       console.log("this is i:", i)
   }
   return  num;
}

// console.log(addOne(10));

//Get all the even numbers in an array and store them in a new array
function getEvenNumber(array) {
    var newArray = [];
    for(var i = 0; i <= array.length - 1; i++) {
        if(array[i] % 2 === 0) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

// console.log(getEvenNumber([1,3,5,7,9,10,15,26]));


//Get me the letter "a" from the string and store it in an array
function getIndexOfLetterA(string){
    var newString = [];
    for(var i = 0; i <= string.length - 1; i++) {
        if (string[i] === "a") {
            newString.push(string[i]);
        }  
    }
    return newString;
}

// console.log(getIndexOfLetterA("I like to eat Apple!"));

//Get the index of the letter "a"
function getIndexOfLetterA(string){
    var indexArray = [];
    for(var i = 0; i <= string.length - 1; i++) {
        if (string[i] === "a") {
            // console.log(string[i], i);
            // console.log(string.indexOf(string[i]));
            // indexArray.push(string.indexOf(string[i]));
            indexArray.push(i);
        }  
    }
    return indexArray;
}

console.log(getIndexOfLetterA("I like to eat apple!"));
