// Write a function called “isSameLength”.
// Given two words, “isSameLength” returns whether the given words have the same length.

// function isSameLength (word1,word2){
// var length1 = word1.length;
// var length2 = word2.length;
// var sum = length1 + length2;
//     return sum;
// }
// console.log(isSameLength("Hello","Chu"));

// Write a function called “areBothOdd”.
// Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.

// function areBothOdd (num1,numb2){
//     return num1 % 2 !== 0 && num2 % 2 !===  0;
// }
// var num1 = 7;
// var num2 = 5;
// console.log(areBothOdd(num1,num2));

// Write a function called “isEitherEven”.
// Given two numbers, “isEitherEven” returns whether or not either one of the given numbers is even.

// function isEitherEven (num1,num2) {
//     return num1 % 2 === 0 || num2 % 2 === 0;
// }
// var num1 = 3;
// var num2 = 5;
// console.log(isEitherEven(num1,num2));


// Write a function called “isOddLength”.
// Given a word, “isOddLength” returns whether the length of the given word is odd.

// function isOddLength(word){
//     return word.length % 2 !== 0;
// } 
// var word = "fancy";
// console.log(isOddLength(word));

// Write a function called “isEvenLength”.
// Given a word, “isEvenLength” returns whether the length of the word is even.

// function isEvenLength(word){
//     return word.length % 2 == 0;
// }
// var word = "passion";
// console.log(isEvenLength(word));

// Write a function called “isEvenAndGreaterThanTen”.
// Given a number, “isEvenAndGreaterThanTen” returns whether it is both even and greater than 10.

// function isEvenAndGreaterThanThen(number){
//     return number > 10 && number % 2 === 0
// }
// var number = 15;
// console.log(isEvenAndGreaterThanThen(number));

// Write a function called “average”.
// Given two numbers, “average” returns their average.

// function average(num1,num2){
//     return (num1 + num2)/2 
// }
// var num1 = 9;
// var num2 = 4;
// console.log(average(num1,num2));

// Write a function called “computeAreaOfATriangle”.
// Given the base and height of a triangle, “computeAreaOfATriangle” returns its area.

// function computeAreaOfATriangle (base,height){
//     return base * height /2
// }
// var base = 20;
// var height = 4;
// console.log(computeAreaOfATriangle(base,height));

// Write a function called “cube”.
// Given a number, “cube” returns the cube of that number.

// function cube(number){
//     return number * number * number 
// }
// var number = 5; 
// console.log(cube(number));

// Write a function called “square”.
// Given a number, “square” should return the square of the given number.

// function square(number){
//     return number * number
// }
// var number = 8
// console.log(square(number));

// Write a function called “computeAverageLengthOfWords”.
// Given two words, “computeAverageLengthOfWords” returns the average of their lengths.

// function computeAverageLengthOfWords(word1,word2){
//     return word1.length * word2.length /2 
// }
// var word1 = "hello";
// var word2 = "go hell";
// console.log(computeAverageLengthOfWords(word1,word2));

// Write a function called “getFirstElement”.
// Given an array, “getFirstElement” returns the first element of the given array.
// Notes:* If the given array has a length of 0, it should return undefined.

// function getFirstElement(array){
//     return array[0]
// }
// var array = ["apple", "banana", "water", "brocoli"];
// console.log(getFirstElement(array));


// Write a function called “getLastElement”.
// Given an array, “getLastElement” returns the last element of the given array.
// Notes:* If the given array has a length of 0, it should return ‘undefined’.

// function getLastElement(array){
//     return array [array.length-1]
// }
// var array = [1,3,6,7,8,9,0];
// console.log(getLastElement(array));

// Write a function called “getNthElement”.
// Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array.
// Notes:  * If the array has a length of 0, it should return ‘undefined’.

function getNthElement(array,integer){
    return array[integer];
}
var integer = 99
console.log(getNthElement(["joe","yes","no","handsom","ok"]),99)


