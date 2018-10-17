// 1. Write a function called “countCharacter”.
// Given a string input and a character, “countCharacter” returns the number of occurences of a given character in the given string.

// function countCharacter(input,character){
//     var Count = 0;
//     for (i = 0; i < input.length; i++ ){
//         if (input[i] === character){
//             Count += 1
//         }
//     }
//     return Count;
// }
// console.log(countCharacter("say what?!"," "));

// 2. Write a function called “getAllLetters”.
// Given a word, “getAllLetters” returns an array containing every character in the word.
// Notes:
// * If given an empty string, it should return an empty array.

// function getAllLetters(word){
//     return word.split("");
// }
// console.log(getAllLetters("I like coding"));

// 3. Write a function called “getAllWords”.
// Given a sentence, “getAllWords” returns an array containing every word in the sentence.
// Notes:
// * If given an empty string, it should return an empty array.

// function getAllWords(sentence){
//     if (sentence.length < 1) {
//      return []
//     }
//     return sentence.split(" ");
// }

//ternary operator 
//operand
// function getAllWords(sentence){
//     return sentence.length === 0 ? [] : sentence.split(" ");
// }
// // console.log(getAllWords("I like coding and drinking tea"));

// function canDrink(age) {
//     return age < 18 ? false : true;
// }
// console.log(canDrink(22));


// 4. Write a function called “countWords”.
// Given a string, “countWords” returns an object where each key is a word in the given string, 
// with its value being how many times that word appeared in the given string.
// Notes:
// * If given an empty string, it should return an empty object.

//str = "I like to drink tea and drink coffee"
//arr = ["I", "like", "to", "drink", "tea", "and", "drink", "coffee"];
// if ("I" in obj) ? no
// obj["I"] = 1
// if ("I" in obj) ? yes
// obj["I"]+=1;
/*obj = {


}
*/

/*obj = {
    I : 1,
    like: 1,
    to: 1,
    drink: 2,
    tea: 1

*/ 
// function countWords(str) {
//     var obj = {};
//     var arr = str.split(' ');
//     if(arr.length > 0) {
//         //iterater the array of words
//         for(var i = 0; i < arr.length; i++) {
//             //check if the word exists in obj, if yes, count++
//             if(arr[i] in obj) {
//                 obj[arr[i]] += 1;
//             } else {
//                 obj[arr[i]] = 1;
//             }
//         }
//     }
//     return obj;
// }
// console.log(countWords(""));

// 5. Write a function called “countNumberOfKeys”.
// Given an object, “countNumberOfKeys” returns how many properties the given object has.
// 提示：了解一下Object.keys()

// function countNumberOfKeys (object){
//     return Object.keys(object).length;
// }
// var object = {
//     a: "apple", 
//     b: "banana",
//     c: "cat",
//     d: "dog"  
//  }; 
// console.log(countNumberOfKeys(object));

// (Do it again) Write a function called “convertDoubleSpaceToSingle”.
// Given a string, “convertDoubleSpaceToSingle” returns the passed in string, with all the double spaces converted to single spaces.

// function converDoubleSpaceToSingle (string){
//     var Singlespce = string.split("  ");
//     console.log(Singlespce)
//     var Newstring = Singlespce.join(" ");
//     //console.log(Newstring)
//     return Newstring;
// }
// console.log(converDoubleSpaceToSingle("I  like  coding  and  drinking  coke"));

// 7. Write a function called “joinThreeArrays”.
// Given three arrays, “joinThreeArrays” returns an array with the elements of “arr1” in order followed by the elements in “arr2” in order followed by the elements of “arr3” in order.

// function joinThreeArrays(arr1,arr2,arr3){
//     var arr = arr1.concat(arr2);
//     var arrnew = arr.concat(arr3);
//     return arrnew;   
// }
// var arr1 = [1,2,3,4];
// var arr2 = [4,5,6,7];
// var arr3 = [7,8,9];
// console.log(joinThreeArrays(arr1,arr2,arr3));


// 8. Write a function called “getAllElementsButNth”.
// Given an array and an index, “getAllElementsButNth” returns an array with all the elements but the nth.

// function getAllElementsBuNth(array,index){
//     array.splice(index,1);
//     return array;
// }
// var array = [1,2,3,4,5,6]
// var index = 5
// console.log(getAllElementsBuNth(array,index));

// 9. Write a function called “areValidCredentials”.
// Given a name and a password, “areValidCredentials”, returns true if the name is longer than 3 characters, AND, the password is at least 8 characters long. Otherwise it returns false.

// function areValidCredentials (name,password){
//     if (name.length >3 && password >= 8){
//         return true
//     }
//     return false
// }
// console.log(areValidCredentials("Joey",33848088));

// 10. Write a function called “getIndexOf”.
// Given a character and a string, “getIndexOf” returns the first position of the given character in the given string.
// Notes:
// * Strings are zero indexed, meaning the first character in a string is at position 0.
// * When a string contains more than one occurrence of a character, it should return the index of its first occurrence.
// * If the character does not exist in the string, it should return -1.
// * Do not use the native indexOf function in your implementation.
// edgecase notice

// function getIndexOf(character,string){
//     var New = string.indexOf(character);
//     return New;
// }
// console.log(getIndexOf("a", "I like to eat a cake"));

// function getIndexOf(character,string){
//     var index = -1;
//     for (var i=0; i<string.length; i++){
//         console.log("string[i]", string[i])
//         if (string[i] === character){
//             index = i;
//             break;
//         }
//         // else {
//         //     index = -1;
//         // }
//     }
//     return index;
// }
// console.log(getIndexOf("a","I like to eat an apple"));

// 11. Write a function called “removeElement”.
// Given an array of elements, and a “discarder” parameter, “removeElement” returns an array containing the items in the given array that do not match the “discarder” parameter.
// Notes:
// * If all the elements match, it should return an empty array.
// * If an empty array is passed in, it should return an empty array.

// function removeElement (array,parameter){
//     var NewArray = [];
//     for (i = 0; i < array.length; i++){
//         if (array[i] !== parameter ){
//             NewArray.push(array[i]);
//         }
//     }
//     return NewArray;
// }
// console.log(removeElement([1,2,3,4,5,7,7,8,7,7],7));

// 12. Write a function called “select”.
// Given an array and an object, “select” returns a new object whose properties are those in the given object AND whose keys are present in the given array.
// Notes:
// * If keys are present in the given array, but are not in the given object, it should ignore them. 
// * It does not modify the passed in object.

// var arr = ["a", "c", "e"];
/* var obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}
*/
/*  
newObj = {
    a:1,
    c:3
}
*/
// how to name a variable? 
// camel case: 
// var myApple = ....
// var newCar = ......
// var aNewBook
// function select(array,obj){
//     var newObj = {};
//     for (var i = 0; i < array.length; i++){
//         // array[i] = "a"
//         // obj[array[i]] = 1;
//         if (array[i] in obj) {
//             newObj[arr[i]] = obj[arr[i]];
//         } 
//     }
//     return newObj;
// }

// 13. Write a function called “extend”.
// Given two objects, “extend” adds properties from the 2nd object to the 1st object.
// Notes:
// * Add any keys that are not in the 1st object.
// * If the 1st object already has a given key, ignore it (do not overwrite the property value).
// * Do not modify the 2nd object at all.

//  var obj1 = {
//     a:1,
//     b:2
// }

// var obj2 = {
//     b:4, 
//     c:3
// };

/*
 newObj = {
     a:1,
     b:2,
     c:3
 }

 */

//  key 相当于上一题array中的array[i] => obj[array[i]]
// 
// function extend(obj1,obj2){
//     for (var key in obj2){
//         if (key in obj1){
//             // continue the for loop
//             continue;
//         } else if (!(key in obj1)){
//             console.log("this is the key:", key);
//             console.log(obj1[key]);
//             console.log(obj2[key]);
//             obj1[key] = obj2[key];
//             console.log("obj1[key] assigned a new value: ", obj1[key]);
//         }
//     }
//     return obj1;
// }

// console.log(extend(obj1, obj2)); 



// pseudo code
// check if obj2's key is in obj1
    // if  true ,......
    // if false,.......  
