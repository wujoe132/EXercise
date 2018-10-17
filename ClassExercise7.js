//1. Write a function called “removeNumbersLargerThan”.
// Given a number and an object, “removeNumbersLargerThan” removes any properties whose values are numbers greater than the given number.

// object[key] = value
function removeNumbersLargerThan (number,object){
    for (var key in object ){
        if (object[key] > number){
            delete object [key];
    } // add or not add
}
        return object
    
}
var object = {
    a: 4,
    b: "happY",
    c: 9
};
// console.log(removeNumbersLargerThan(8,object));
// console.log(8,object);

//2. Write a function called “removeNumbersLessThan”.
// Given a number and an object, “removeNumbersLessThan” removes any properties whose values are numbers less than the given number.

function removeNumbersLessThan (number,object){
    for (var key in object){
        if (object[key] < number){
            delete object [key];
        }
    }
    return object 
}
var original = {
    a: 4,
    b: "Joe",
    c: 9999
};
// console.log(removeNumbersLessThan(10000,original));
// ** var prop vs var key;

//3. Write a function called “removeStringValuesLongerThan”.
// Given an number and an object, “removeStringValuesLongerThan” removes any properties on the given object whose values are strings longer than the given number.

function removeStringValuesLongerThan (number,object){
    for (var key in object){
        if (object[key].length > number){
            delete object[key];
        }
    }
    return object;// replace prop?
}
var input = {
    a: "I hate you",
    b: "I wanna kill you",
    c: "Ok"
};
// console.log(removeStringValuesLongerThan(3,input));
//deletes all = {} ? no need to define? undefined

//4. Write a function called “removeEvenValues”.
// Given an object, “removeEvenValues” removes any properties whose values are even numbers.
// Do this in place and return the original object, do not construct a cloned object that omits the properties. ??? say what

function removeEvenValues (object){
    for (var prop in object){
        if (object[prop] %2 === 0){
            delete object[prop];
        }
    }
    return object;
}
var original = {
    a: 2,
    b: 3,
    c: 4,
    d: 100,
    e: 88
}
//console.log(removeEvenValues(original));

//5. Write a function called “removeOddValues”.
// Given an object, “removeOddValues” removes any properties whose values are odd numbers.

function removeOddValues (object){
    for (var prop in object){
        if (object[prop] %2 !== 0){
            delete object[prop];
        }
    }
    return object;
}
var original = {
    a: 1,
    b: 81,
    c: 99,
    d: 100
}
// console.log(removeOddValues(original));


//6. Write a function called “removeArrayValues”.
// Given an object, “removeArrayValues” removes any properties whose values are arrays.

function removeArrayValues (object){
    for (var prop in object){
        if (typeof object[prop] === "object"){
            delete object[prop];
        }
    }
    return object;
}
var original = {
    a: ["Apple","I","CATE"],
    b: ["I","lIKE","TO"],
    c: 666,
    d: "okay bye"
};
// console.log(removeArrayValues(original));

//7. Write a function called “removeNumberValues”.
// Given an object, “removeNumberValues” removes any properties whose values are numbers.

function removeNumberValues (object){
    for (var prop in object){
        if (typeof object[prop]=== "number"){
            delete object[prop];
        }
    }
    return object;
}
var input = {
    a: [1,2,3,4],
    b: 666,
    c: 999,
    d: "I join"
}
// console.log(removeNumberValues(input));

//8. Write a function called “removeStringValues”.
// Given an object, “removeStringValues” removes any properties on the given object whose values are strings.

function removeStringValues (object){
    for (var prop in object){
        if (typeof object[prop] === "string"){
            delete object[prop];
        }
    }
    return object;
};
var input = {
    a: "I like you",
    b: "Joe",
    c: 123,
    d: 456,
    e: "Chue"
};
// console.log(removeStringValues(input));

//**9. Write a function called “findMinLengthOfThreeWords”.
// Given 3 words, “findMinLengthOfThreeWords” returns the length of the shortest word.

// math.min(...[])
//math.min(1,2,5)
function findMinLengthOfThreeWords (w1,w2,w3) {
    if (w1.length <= w2.length && w1.length <= w3.length){
        return w1.length
    }
    else if (w2.length <= w1.length && w2.length <= w3.length){
        return w2.length 
    }
    else {
        return w3.length
    }
};
// console.log(findMinLengthOfThreeWords("i","p","K"));
// for loop? no9. and no.10

//**10. Write a function called “findMaxLengthOfThreeWords”.
// Given 3 words, “findMaxLengthOfThreeWords” returns the length of the longest word.

function finMaxLengthOfThreeWords (w1,w2,w3){
    if (w1.length >= w2.length && w1.length >= w3.length){
        return w1.length
    }
    else if (w2.length >= w1.length && w2.length >= w3.length){
        return w2.length
    }
    else {
        return w3.length
    }
};
// console.log(finMaxLengthOfThreeWords("I","LIKE","TEA"));


//11. Write a function called “getElementsThatEqual10AtProperty”.
// Given an object and a key, “getElementsThatEqual10AtProperty” returns an array containing all the elements of the array located at the given key that are equal to ten.
// Notes:
// * If the array is empty, it should return an empty array.
// * If the array contains no elements that are equal to 10, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the key, it should return an empty array.

function getElementsThatEqual10AtProperty (object,key){
    var newArray = [];
    // to test number in array not object, so use i 
    for (var i = 0; i < object[key].length; i++){
        if (object[key][i] === 10){
            newArray.push(object[key][i])
        }
        }
    return newArray;
}
var object = {
    a: [10,11,12,100,10],
}
// console.log(getElementsThatEqual10AtProperty(object,"a"));


//12. Write a function called “getElementsLessThan100AtProperty”.
// Given an object and a key, “getElementsLessThan100AtProperty” returns an array containing all the elements of the array located at the given key that are less than 100.
// Notes:
// * If the array is empty, it should return an empty array.
// * If the array contains no elements less than 100, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the key, it should return an empty array.

function getElementsLessThan100AtProperty(object,key){
    var newArray = [];
    for (var i = 0; i < object[key].length; i++){
        if (object[key][i] < 100){
            newArray.push(object[key][i])
        }
    }
    return newArray;
}
var object = {
    a: [1,10,100,1000,11]
}
// console.log(getElementsLessThan100AtProperty(object,"a"));


//**13. Write a function called “countAllCharacters”.
// Given a string, “countAllCharacters” returns an object where each key is a character in the given string. The value of each key should be how many times each character appeared in the given string.
// Notes:
// * If given an empty string, countAllCharacters should return an empty object.

function countAllCharacters(str) {
    var obj = {};
    if (obj[str[i]] === 0){
        return obj;
    }
    for (var i = 0; i < str.length; i++) {
        if (str[i] in obj){
            obj[str[i]]+= 1;
        }
        else {
            obj[str[i]] = 1;
        }

    }
    return obj;
}
//  console.log(countAllCharacters("I like to eat an apple"));
 // obj[str][i] vs obj[str[i]];

//14. Write a function called “getElementsGreaterThan10AtProperty”.
// Given an object and a key, “getElementsGreaterThan10AtProperty” returns an array containing the elements within the array, located at the given key, that are greater than 10.
// Notes:
// * If the array is empty, it should return an empty array.
// * If the array contains no elements greater than 10, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the key, it should return an empty array.

function getElementsGreaterThan10AtProperty (object,key){
    var newArray = [];
    for (var i = 0; i < object[key].length; i++){
        if (object[key][i] > 10){
            newArray.push(object [key][i])
        }
    }
    return newArray;
}
var object = {
    a: [11,12,13,6,4]
};
// console.log(getElementsGreaterThan10AtProperty(object,"a"));


//15. Write a function called “removeElement”.
// Given an array of elements, and a “discarder” parameter, “removeElement” returns an array containing the items in the given array that do not match the “discarder” parameter.
// Notes:
// * If all the elements match, it should return an empty array.
// * If an empty array is passed in, it should return an empty array.

function removeElement (array,parameter){
    var newArray = [];
    for (i = 0; i <array.length; i++){
        if (array[i] !== parameter){
            newArray.push(array[i])
        }
    }
    return newArray;
};
// console.log(removeElement([1,99,666,23,45],666));



//**16. Write a function called “getFirstElementOfProperty”.
// Given an object and a key, “getFirstElementOfProperty” returns the first element of the array located at the given key.
// Notes:
// * If the array is empty, it should return undefined.
// * If the property at the given key is not an array, it should return undefined.
// * If there is no property at the key, it should return undefined. ??? what

function getFirstElementOfProperty (object,key){
    var newArray = undefined;
    if (typeof object[key] === "obejct"){
        object[key][0];
        }
        return newArray;
    }
var object = {
    a: [1,2,3]
}
//console.log(getFirstElementOfProperty(object,"a"));


//17. Write a function called “getNthElementOfProperty”.
// Given an object and a key, “getNthElementOfProperty” returns the nth element of an array located at the given key.
// Notes:
// * If the array is empty, it should return undefined.
// * If n is out of range, it should return undefined.
// * If the property at the given key is not an array, it should return undefined.
// * If there is no property at the key, it should return undefined. ??? how to code

function getNthElementOfProperty (object, key,N){
    if (typeof object[key] !== "object"){
        return undefined
    }
    else if (object[key].length <1 ){
        return undefined
    }
    else if (object["key"] < N || object["key"] > N ){
        return undefined
    }
    else {
        return object[key][N]
    }
}
var object = {
};
// console.log(getNthElementOfProperty(object,"a",6));


//18. Write a function called “getLastElementOfProperty”.
// Given an object and a key, “getLastElementOfProperty” returns the last element of an array located at the given key.
// Notes:
// * If the array is empty, it should return undefined.
// * if the property at the given key is not an array, it should return undefined.
// * If there is no property at the key, it should return undefined.

function getLastElementOfProperty(object,key){
    if (typeof object[key] !== "object"){
        return undefined
    }
    else if (object[key].length <1 ){
        return undefined
    }
    else {
        return object[key][object[key].length - 1]  
    }
};
var object = {
    a: [1,2,3,4,56,66]
}
// console.log(getLastElementOfProperty(object,"a"));

//**19. Write a function called “keep”.
// Given an array and a keeper element, “keep” returns an array containing the items that match the given keeper element.
// Notes:
// * If no elements match, “keep” should return an empty array.

function keep(array,element){
    var newArray = [];
    for (var i=0; i<array.length; i++){
        if (array[i] === element){
            newArray.push(array[i])
        }
    }
    return newArray;
};
// console.log(keep([1,2,3,4,5],4));


//20. Write a function called “getOddLengthWordsAtProperty”.
// Given an object and a key, “getOddLengthWordsAtProperty” returns an array containing all the odd length word elements of the array located at the given key.
// Notes:
// * If the array is empty, it should return an empty array.
// * If it contains no odd length elements, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the given key, it should return an empty array.

function getOddLengthWordsAtProperty(object,key) {
    var newArray = [];
    if (object[key] === []){
      return newArray;
    }
    else if (typeof object[key] !== "object"){
        return newArray;
    }
    else if (object === {}){
        return newArray;
    }
    else {
      for (var i = 0; i < object[key].length; i++) {
        if (object[key][i].length % 2 !== 0) {
          newArray.push(object[key][i]);
        }
      }
    return newArray;
    }
  };
  var object = {
      a: [1,2,3,4,5,6,7]
  }
// console.log(getOddLengthWordsAtProperty(object,"a"));




