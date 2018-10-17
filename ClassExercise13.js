// Problem 1
// International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows: 
// "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.
// For convenience, the full table for the 26 letters of the English alphabet is given below:
// [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
// Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example, "cab" can be written as "-.-.-....-", (which is the concatenation "-.-." + "-..." + ".-"). We'll call such a concatenation, the transformation of a word.
// Return the number of different transformations among all words we have.
// Example:
// Input: words = ["gin", "zen", "gig", "msg"]
// Output: 2
// Explanation: 
// The transformation of each word is:
// "gin" -> "--...-."
// "zen" -> "--...-."
// "gig" -> "--...--."
// "msg" -> "--...--."
// There are 2 different transformations, "--...-." and "--...--.".
//find the morse code for each word
//find the morse code for each letter of the word
//compare morse code find the number of different transformation 
//return number

// function CountTransformations (arr){
//     var Count = 0;
//     var Morse = {a:".-",b:"-...",c:"-.-.",d:"-..",e:".",f:"..-.",g:"--.",h:"....",i:"..",j:".---",k:"-.-",l:".-..",m:"--",n:"-.",o:"---",p:".--.",q:"--.-",r:".-.",s:"...",t:"-",u:"..-",v:"...-",w:".--",x:"-..-",y:"-.--",z:"--.."}
//     for (var i = 0; i < arr.lengthx; i++ ){
//         var morseCode = arr[i].split(" ").reduce(function(t,current){
//             return t = t + Morse[current]
//         },[])
// }
// console.log(CountTransformations(["gin", "zen", "gig", "msg"]));
    




// Problem 2
// There is a robot starting at position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, 
// judge if this robot ends up at (0, 0) after it completes its moves.
// The move sequence is represented by a string, and the character moves[i] represents its ith move. Valid moves are R (right), L (left), U (up), and D (down). 
// If the robot returns to the origin after it finishes all of its moves, return true. Otherwise, return false.
// Note: The way that the robot is "facing" is irrelevant. "R" will always make the robot move to the right once, "L" will always make it move left, etc. Also, 
// assume that the magnitude of the robot's movement is the same for each move.
// Example 1:
// Input: "UD"
// Output: true 
// Explanation: The robot moves up once, and then down once. All moves have the same magnitude, so it ended up at the origin where it started. Therefore, we return true.
// Example 2:
// Input: "LL"
// Output: false
// Explanation: The robot moves left twice. It ends up two "moves" to the left of the origin. We return false because it is not at the origin at the end of its moves.
//let pos = [0, 0];
// up => pos[0]++
//down => pos[0]--;
//right => pos[1]++;
//left => pos[1]--;
//pos[0,0] => origin

// function isRobortReturntoOrigin (str){
//     var count = 0;
//     str.split(" ").forEach(function(str){
//         switch(str){
//             case "U": count ++;
//             case "R": count ++; 
//             break;
//             case "D": count --;
//             case "L": count --;
//             break;
//         }
//     });
//     return count == 0
// };
// console.log(isRobortReturntoOrigin("LR"));

