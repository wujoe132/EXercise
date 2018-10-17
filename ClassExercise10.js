// 1. Write a function called “findSmallestNumberAmongMixedElements”.
// Given an array of mixed elements, “findSmallestNumberAmongMixedElements” returns the smallest number within the given array.
// Notes:
// * If the given array is empty, it should return 0.
// * If the array contains no numbers, it should return 0.

// function findSmallestNumberAmongMixedElements (arr){
//     var numOnly = arr.filter(function (x){
//         return typeof x === "number";
//     });
//     if (arr.length === 0 || numOnly.length === 0){
//         return 0;
//     }
//     else {
//         var smallest = numOnly.reduce(function(smallest,C){
//             return Math.min(smallest,C);
//         })
//         return smallest;
//     }
// };
// console.log(findSmallestNumberAmongMixedElements(["word", "up"]));
//map


//2. Write a function called “getLongestWordOfMixedElements”.
// Given an array of mixed types, “getLongestWordOfMixedElements” returns the longest string in the given array.
// Notes:
// * If the array is empty, it should return an empty string (“”). 
// * If the array contains no strings; it should return an empty string.

function getLongestWordOfMixedElements(arr) {
    var arrNew = arr.filter(el => {
        return typeof el === "string";
    });

    if (arrNew.length > 0) {
        // 从大到小
        arrNew.sort((x,y) => y - x);
        return arrNew[0];
    }
    return "";
}


function getLongestWordOfMixedElements (arr){
    var strOnly = arr.filter(function(x){
        return typeof x === "string";
    });
    if (arr.length === 0 ){
        return "";
    }
    else if (strOnly.length === 0){
        return "";
    }
    else {
        var longest = strOnly[0];
        return strOnly.reduce((longest,c) => longest.length >= c.length ? longest : c);
    }
};
console.log(getLongestWordOfMixedElements([]));



// 3. Write a function called “getLargestNumberAmongMixedElements”.
// Given any array, “getLargestNumberAmongMixedElements” returns the largest number in the given array.
// Notes:
// * The array might contain values of a type other than numbers.
// * If the array is empty, it should return 0.
// * If the array contains no numbers, it should return 0.

// function getLargestNumberAmongMixedElements (arr){
//     var numOnly = arr.filter(function (x){
//         return typeof x === "number";
//     })
//     if (arr.length === 0 || numOnly.length === 0){
//         return 0;
//     }
//     else {
//         var largest = numOnly.reduce(function(smallest,C){
//             return Math.max(smallest,C);
//         })
//         return largest;
//     }
// };
// console.log(getLargestNumberAmongMixedElements([]));



// 4. Write a function called “computeSummationToN”.
// Given a number, “computeSummationToN” returns the sum of sequential numbers leading up to the given number, beginning at 0.
// Notes:
// * If n = 4, it should calculate the sum of 1 + 2 + 3 + 4, and return 10.

// function computeSummationToN (number){
//     var sum = 0;
//     for (i = 0; i< number+1; i++){
//         sum += i;
//     }
//     return sum;
// }
// console.log(computeSummationToN(5));


//**5. Write a function called “convertScoreToGrade”.
// Given a score, “convertScoreToGrade” returns a string representing the letter grade corresponding to the given score.
// Notes:
// * (100 - 90) –> ‘A’
// * (89 - 80) –> ‘B’
// * (79 - 70) –> ‘C’
// * (69 - 60) –> ‘D’
// * (59 - 0) –> ‘F’
// * If the given score is greater than 100 or less than 0, it should return ‘INVALID SCORE’.

// function covertScoreToGrade (score){
//     var final = ""
//     switch (true) {
//         case (score >= 0 && score <= 59):
//           return final = "F";
//           break;
//         case (score >= 60 && score <= 69):
//           return final = "D";
//           break;
//         case (score >= 70 && score <= 79):
//           return final = "C";
//           break;
//         case (score >= 80 && score <= 89):
//           return final = "B";
//           break;
//         case (score >= 90 && score <= 100):
//           return final = "A";
//           break;
//         default:
//           return final = "INVALID SCORE";
//       }
//       return final;
// };

// console.log(covertScoreToGrade(77));



// 6. Write a function called “convertScoreToGradeWithPlusAndMinus”.
// Given a score, “convertScoreToGradeWithPlusAndMinus” returns a string representing the letter grade corresponding to the given score.
// Notes:
// * (100 - 90) –> ‘A’
// * (89 - 80) –> ‘B’
// * (79 - 70) –> ‘C’
// * (69 - 60) –> ‘D’
// * (59 - 0) –> ‘F’
// * If the given score is greater than 100 or less than 0, it should return ‘INVALID SCORE’.
// * If the score is between the 0 and 2 (inclusive) of a given range, return the letter with a ‘-‘
// * If the score is be the 8 and 9 (inclusive) of a given range, return the letter with a ‘+’
// * There are is no F+ and there is no F-.

// function convertScoreToGradeWithPlusAndMinus (score){
//   if(score > 100 || score < 0) return "INVALID SCORE";
//   else if(score >= 98) 
//     return "A+";
//   else if(score >= 93) 
//     return "A";
//   else if(score >= 90) 
//     return "A-";
//   else if(score >= 88) 
//     return "B+";
//   else if(score >= 83) 
//     return "B";
//   else if(score >= 80) 
//     return "B-";
//   else if(score >= 78) 
//     return "C+";
//   else if(score >= 73) 
//     return "C";
//   else if(score >= 70) 
//     return "C-";
//   else if(score >= 68) 
//     return "D+";
//   else if(score >= 63) 
//     return "D";
//   else if(score >= 60) 
//     return "D-";
//     return "F";
// };
// console.log(convertScoreToGradeWithPlusAndMinus(79));


// 7. Write a function called “repeatString”.
// Given a string and a number, “repeatString” returns the given string repeated the given number of times.

// function repeatString (str,num){
//     var newStr = "";
//     for (var i = 0; i < num; i++){
//         newStr = newStr.concat(str);
//     }
//     return newStr;
// };
// console.log(repeatString("BANG",4));
// think how to do with space in between.
//use while loop 

// function repeatString (str, num){
//     var newStr = "";
//     var i = 0;
//     while (i < num){
//         newStr = newStr + str;
//         i ++;
//     }
//     return newStr;
// }
console.log(repeatString("biu",5))

// **8. Write a function called “getLongestOfThreeWords”.
// Given 3 words, “getLongestOfThreeWords” returns the longest of three words.
// Notes:
// * If there is a tie, it should return the first word in the tie.

// function getLongestOfThreeWords(word1, word2, word3) {
//     var arr = [word1, word2, word3].sort((a, b) => b -a);
// }

// function getLongestOfThreeWords (w1,w2,w3){
//     var arr = [w1,w2,w3];
//     return arr.reduce((x,y) => x.length >= y.length ? x : y);
// };
// console.log(getLongestOfThreeWords("mark","I","ZZZZZ"));

//**9.  Write a function called “findShortestOfThreeWords”.
// Given 3 strings, “findShortestOfThreeWords” returns the shortest of the given strings.
// Notes:
// * If there are ties, it should return the first word in the parameters list.

// function findShortestOfThreeWords (str1,str2,str3){
//     var arr = [str1, str2, str3].sort(a,b)
// }

// function getShortestOfThreeWords (w1,w2,w3){
//     var arr = [w1,w2,w3];
//     return arr.reduce((x,y) => x.length <= y.length ? x : y);
// };
// console.log(getShortestOfThreeWords("mark","I","ZZZZZ"));


// 11。Write a function called “computeCompoundInterest”.
// Given a principal, an interest rate, a compounding frequency, and a time (in years), “computeCompoundInterest” 
// returns the amount of compound interest generated.
// FV = PV * E^(R * t)
// we want furture value - present value

// function computeCompoundInterest (principle,i,frequency,yr){
//     var newP = principle * Math.pow((1+i/frequency),(frequency * yr));
//     return newP - principle;
// };
// console.log(computeCompoundInterest(500,0.001,4,2));


// **BONUS. Write a function called “computeFactorialOfN”.
// Given a natural number (a whole number greater than 0), “computeFactorialOfN” returns its factorial.

function computeFactorialOfN(n) {
    return n.toString().split().reduce(function(t,x){
        return t = t * (Number(x)-1);
    },5);
}
console.log(computeFactorialOfN(5));