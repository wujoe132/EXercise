
// Given an array and an element, “addToFront” adds the given element to the front of the given array, and returns the given array.
// Notes: * It should be the SAME array, not a new array.

// function addTofront (array,element){
//     array.unshift(element);
//     return array; 
// }
// console.log(addTofront([1,2,3,5],9));

// Write a function called “addToBack”.
// Given an array and an element, “addToBack” returns the given array with the given element added to the end.
// Note: It should be the SAME array, not a new array.

// function addToBack(array,element){
//     array.push(element);
//     return array;
// }
// console.log(addToBack([1,2,3],5));

// Write a function called “computeAreaOfARectangle”.
// Given the length and width of a rectangle, “computeAreaOfARectangle” returns its area.

// function computeAreaOfARectangle(length,width){
//     return length * width; 
// }
// var length = 10;
// var width = 99;
// console.log(computeAreaOfARectangle(length,width));

// Write a function called “computePerimeterOfARectangle”.
// Given a length and a width describing a rectangle, “computePerimeterOfARectangle” returns its perimter.

// function computePerimeterOfARectangle(length,width){
//     return length * 2 + width * 2  
// }
// var length = 20; 
// var width = 100;
// console.log(computePerimeterOfARectangle(length,width));

// Write a function called “computePerimeterOfATriangle”.
// Given 3 sides describing a triangle, “computePerimeterOfATriangle” returns its perimter.

// function computePerimeterOfARectangle(s1,s2,s3){
//     return s1 + s2 +s3 
// }
// var s1 = 4;
// var s2 = 9;
// var s3 = 7;
// console.log(computePerimeterOfARectangle(s1,s2,s3));

// Write a function called “computeTripledAreaOfARectangle”.
// Given a length and width of a rectangle, “computeTripledAreaOfARectangle” returns the rectangle’s area, multiplied by 3.

// function computeTripledAreaOfARectangle (length,width){
//     return (length * width) * 3
// }
// var length = 40;
// var width = 5;
// console.log(computeTripledAreaOfARectangle(length,width));

// Write a function called “computePerimeterOfACircle”.
// Given the radius of a circle, “computePerimeterOfACircle” returns its perimeter

// function computePerimeterOfACircle(radius){
//     return radius * 2 * Math.PI
// }
// var radius = 5;
// console.log(computePerimeterOfACircle(radius));


// Write a function called “computeAreaOfACircle”.
// Given the radius of a circle, “computeAreaOfACircle” returns its area.
//Look up Math.PI and Math.pow()

// function computeAreaOfACircle(radius){
//     return Math.pow(radius,2) * Math.PI
// }
// var radius = 10;
// console.log(computeAreaOfACircle(radius));

// Write a function called “computePower”.
// Given a number and an exponent, “computePower” returns the given number, raised to the given exponent.

// function computePower(number,exponent){
//     return Math.pow(number,exponent);
// }
// console.log(computePower(4,2));

// Write a function called “computeSquareRoot”.
// Given a number, “computeSquareRoot” returns its square root.

// function computeSquareRoot(number){
//     return Math.sqrt(number)
// }
// console.log(computeSquareRoot(16,2));

// Write a function called “doubleSquareRootOf”.
// Given a number, “doubleSquareRootOf” returns double its square root.
//Look up Math.sqrt()

// function doubleSquareRootOf(number){
//     return Math.sqrt(number) * 2
// } 
// console.log(doubleSquareRootOf(16));

// Write a function called “getLengthOfThreeWords”.
// Given 3 words, “getLengthOfThreeWords” returns the sum of their lengths.

// function getLengthOfThreeWords(w1,w2,w3){
//     return w1.length + w2.length + w3.length
// }
// var w1 = "hello"
// var w2 = "zzz"
// var w3 = "rap"
// console.log(getLengthOfThreeWords(w1,w2,w3));

// Given two arrays, “joinArrays” returns an array with the elements of “arr1” in order, followed by the elementsin “arr2”.

// function joinArrays(arr1,arr2){
//     return arr1.concat(arr2);
// }
// console.log(joinArrays([1,2,3],[4,5,6]));

// Write a function called “removeFromFront”.
// Given an array, “removeFromFront” returns the given array with its first element removed.

// function removeFromFront(array){
//     array.shift();
//     return array
// }
// console.log(removeFromFront([1,2,3,4]));


// Write a function called “removeFromBackOfNew”.
// Given an array, “removeFromBackOfNew” returns a new array containing all but the last element of the given array.

// function removeFromBackOfNew(array){
//     var Newarray = array.pop();
//     return Newarray
// }
// console.log(removeFromBackOfNew([1,2,3,4]));

// Write a function called “removeFromBack”.
// Given an array, “removeFromBack” returns the given array with its last element removed.

// function removeFromBack(array){
//     array.pop();
//     return array
// }
// console.log(removeFromBack([1,2,3,4,5,6]));

// Write a function called “or”.
// Given 2 boolean expressions, “or” returns true or false, corresponding to the ‘||’ operator.
// Notes:
// * Do not use the || operator.
// * Use ! and && operators instead.

 function or(exp1,exp2){
    if (exp1 === true && exp2 === true){
        console.log("1");
        return true;
    }
    else if (exp1 !== true && exp2 === true){
        console.log("2");
        return true; 
    }
    else if (exp1 === true && exp2 !== true){
        console.log("3");
        return true;
    }
    console.log("4");
    return false;
}
// console.log(or(true,true));

// Write a function called “isEitherEvenOrAreBoth7”.
// Given two numbers, ‘isEitherEvenOrAreBoth7’ returns whether at least one of them is even, or, both of them are 7.

// function isEitherEvenOrAreBoth7(num1,num2){
//     if (num1 % 2 === 0 || num2 % 2 === 0 || num1 === 7 && num2 === 7){
//         return true
//     }
//     return false
// }
// console.log(isEitherEvenOrAreBoth7(7,7));


// Write a function called “isEitherEvenAndLessThan9”.
// Given two numbers, ‘isEitherEvenAndLessThan9’ returns whether at least one of them is even, and, both of them are less than 9.

function isEitherEvenAndLessThan9(num1,num2){
    if ((num1 % 2 === 0 || num2 % 2 === 0 ) && (num1<9 && num2<9)){
        return true;
    }
    return false;
}
console.log(isEitherEvenAndLessThan9(8,9));
