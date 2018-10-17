// **1. Write a function called “modulo”.
// Given 2 numbers, “modulo” returns the remainder after dividing num1 by num2.
// It should behave as described in the canonical documentation (MDN) for the JavaScript remainder operator:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()
// Notes:
// * Do NOT use the actual built-in modulo (aka “remainder”) operator (%) in your implementation.
// * 0 % ANYNUMBER = 0.
// * ANYNUMBER % 0 = NaN.
// * If either operand is NaN, then the result is NaN.
// * Modulo always returns the sign of the first number.

//num1 > num2 => num1 = num2 * int + remainder => remainder = num1 - num2 * int => int = parseInt(num1 / num2);
//num1 = num2 => 0
//num1 < num2 => remainder: num1

// function modulo (num1,num2){
//     var up = num1;
//     var down = num2;
//     if (up === 0){
//         return 0
//     }
//     else if (up < 0 || down < 0){
//         return up  * -1
//     }
    
// }



//2. Write a function called “multiply”.
// Given 2 numbers, “multiply” returns their product.
// Notes:
// * It should not use the multiply operator (*).

// function multiply (num1,num2){
//     if (num1 === 0 || num2 === 0){
//         return 0
//     }
//     else {
//         return num1 /(1 / num2);
//     }
// };
// console.log(multiply(-4,5));
// use while loop



// 3. Write a function called “isOddWithoutModulo”.
// Given a number, “isOddWithoutModulo” returns whether the passed in number is odd.
// Note:
// * It does so without using the modulo operator (%). 
// * It should work for negative numbers and zero.

// function isOddWithoutModulo (num){
//     var value  = num / 2;
//     if (Number.isInteger(value)){
//         return false;
//     }
//     else {
//         return true;
//     }
// };
// console.log(isOddWithoutModulo(0));

// 4.  Write a function called “isEvenWithoutModulo”.
// Given a number, “isEvenWithoutModulo” returns whether it is even.
// Notes:
// * It does so without using the modulo operator (%). 
// * It should work for negative numbers and zero.

// function isEvenWithoutModulo (num){
//     var value = num / 2;
//     if (Number.isInteger(value)){
//         return true;
//     }
//     else {
//         return false;
//     }
// };
// console.log(isEvenWithoutModulo(19));



// 5.  Write a function called “multiplyBetween”.
// Given 2 integers, “multiplyBetween” returns the product between the two given integers, beginning at num1, and excluding num2.
// Notes:
// * The product between 1 and 4 is 1 * 2 * 3 = 6.
// * If num2 is not greater than num1, it should return 0.
// var output = multiplyBetween(2, 5); console.log(output); // --> 24

// function multiplyBetween (int1,int2){
//     if (int2 <= int1){
//         return 0;
//     }
//     else {
//         var product = 1;
//         for (var i = int1; i < int2; i++){
//             product = product * i;
//         }
//         return product;
//     }
// };
// console.log(multiplyBetween(2,5));



// 6. Write a function called “computeSumBetween”.
// Given 2 integers, “computeSumBetween” returns the sum between the two given integers, beginning at num1, and excluding num2.
// Notes:
// * The sum between 1 and 4 is 1 + 2 + 3 = 6.
// * If num2 is not greater than num1, it should return 0.
// var output = computeSumBetween(2, 5); console.log(output); // --> 9

// function computeSumBetween (num1, num2){
//     if (num2 <= num1){
//         return 0;
//     }
//     else {
//         var sum = 0;
//         for (var i = num1; i < num2; i++){
//             sum += i;
//         }
//         return sum;
//     }
// };
// console.log(computeSumBetween(2,5));


// 7. Write a function ‘transformFirstAndLast’ that takes in an array, and returns an object with:
// 1) the first element of the array as the object’s key, and
// 2) the last element of the array as that key’s value.

// Example input:
// ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']

// Function’s return value (output):
// { Queen : 'Beyonce' }

// Do not change the input array. Assume all elements in the input array will be of type ‘string’.

// Note that the input array may have a varying number of elements. Your code should flexibly accommodate that.

// E.g. it should handle input like:
// ['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Spacey']

// Function’s return value (output):
// { Kevin : 'Spacey' }
// key : first element 
// value: last element

// function transformFirstAndLast (arr){
//     var firstname = arr[0];
//     var lastname = arr[arr.length -1]
//     var newObj = {};
//     newObj[firstname] = lastname;
//     return newObj;
// }
// console.log(transformFirstAndLast(["JOE","wu"]));




//** 8. Write a function ‘fromListToObject’ which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.

// Example input:
// [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]

// Function’s return value (output):
// { make : 'Ford', model : 'Mustang', year : 1964 }

// Do not change the input string. Assume that all elements in the array will be of type ‘string’.

// Note that the input may have a different number of elements than the given sample.
// For instance, if the input had 6 values instead of 4, your code should flexibly accommodate that.

// function fromListToObject (arr) {
//    var newObj = {};
//     for (var i = 0; i < arr.length; i++) {
//         newObj[arr[i][0]] = arr[i][1];
//     }
//     return newObj; 
// }
// console.log(fromListToObject([[1,2],[3,4],[5,6]]));


//**9. Write a function called “transformEmployeeData” that transforms some employee data from one format to another.

// The argument will look like this:

// [
//     [
//         ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
//     ],
//     [
//         ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
//     ]
// ]
// Given that input, the return value should look like this:

// [
//     {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
//     {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
// ]
// Note that the input may have a different number of rows or different keys than the given sample.

// For example, let’s say the HR department adds a “tshirtSize” field to each employee record.
// Your code should flexibly accommodate that.
// arr1 to arr2

function transformEmployeeData (arr1){
    var arr2 = [];
    for (var i = 0; i < arr1.length; i++){
        var newObj = {};
        for (var j = 0; j < arr1[i].length; j++){
            newObj[arr1[i][j][0]] = arr1[i][j][1];
        }
        arr2.push(newObj);
    }
    return arr2;
}
var arr1 =  [
        [
            ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
        ],
        [
            ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
        ]
    ]
console.log(transformEmployeeData(arr1));

// 10. Write a function called “getAllKeys” which returns an array of all the input object’s keys.
// Example input:
// { name : 'Sam', age : 25, hasPets : true }
// Function’s return value (output) :
// ['name', 'age', 'hasPets']
// Do not use “Object.keys” to solve this prompt.
// Note that your function should be able to handle any object passed in it.
// E.g. it should also handle an input like:
// { a : 'a', number : 11, hungry : true, grammyWins : 1 }
// Function’s return value (output):
// ['a', 'number', 'hungry', 'grammyWins']

// function getAllkeys (obj){
//     var newArr = [];
//     for (var key in obj){
//         newArr.push(key);
//     }
//     return newArr;
// }
// var obj = { name : 'Sam', age : 25, hasPets : true };
// console.log(getAllkeys(obj));


// 11. Write a function called “listAllValues” which returns an array of all the input object’s values.
// Example input:
// {
//   name : 'Krysten',
//   age : 33,
//   hasPets : false
// }
// Function’s return value (output):
// ['Krysten', 33, false]
// Note that the input may have a different number of keys and values than the given sample.
// E.g. it should also handle an input like:
// {
//   a : 'a',
//   number : 11,
//   hungry : true,
//   grammyWins : 1
// }
// Function’s return value (output):
// ['a', 11, true, 1]

// function listAllValues (obj){
//     var values = [];
//     for (var key in obj){
//         values.push(obj[key]);
//     }
//     return values;
// }
// var obj = {
    //   a : 'a',
    //   number : 11,
    //   hungry : true,
    //   grammyWins : 1
    // }
// console.log(listAllValues(obj));



// 12. Write a function called “convertObjectToList” which converts an object literal into an array of arrays, like this:
// Argument:
// {
//   name: 'Holly',
//   age: 35,
//   role: 'producer'
// }
// Return value:
// [['name', 'Holly'], ['age', 35], ['role', 'producer']]

// function convertObjectToList (obj){
//     bigArr = [];
//     for (var key in obj){
//         var smallArr = [];
//         smallArr.push(key);
//         smallArr.push(obj[key]);
//         bigArr.push(smallArr);
//     }
//     return bigArr;
// }
// var obj = {
//       name: 'Holly',
//       age: 35,
//       role: 'producer'
//     }
// console.log(convertObjectToList(obj));







