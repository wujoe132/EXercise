
// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:
// Input: 123
// Output: 321

// Example 2:
// Input: -123
// Output: -321

// Example 3:
// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

function reVerse (num){
    var sign = num > 0 ? 1: -1;
    var string = num + "";
    var i = string.length - 1;
    while (string[i] === "0" && i != 0){
        i--;
    }
    var reverse = string.substring(0, i+1).split(" ").reverse().join(" ");
    var reverseX = parseInt(reverse);
    if (reverseX > 2147483647 || reverseX < -2147483647)
        return 0;
        return sign * reverseX;
    };
    console.log(reVerse(120));
