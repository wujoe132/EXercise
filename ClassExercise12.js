
/* 
* You're given strings J representing the types of stones that are jewels, and S representing the stones you have.
* Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.
* The letters in J are guaranteed distinct, and all characters in J and S are letters. 
* Letters are case sensitive, so "a" is considered a different type of stone from "A".
* Input: J = "aA", S = "aAAbbbb" ===> Output: 3
* Input: J = "z", S = "ZZ" Output: 0
* Note:
    S and J will consist of letters and have length at most 50.
    The characters in J are distinct.
*/
// function findStonesAlsoJewels(J,S){
//     var count = 0; // we want to return a number; 
//     for (var i = 0; i < S.length; i++){
//         if (J.indexOf(S[i]) !== -1){
//             count ++;
//         }
//     }
//     return count;
// }
// console.log(findStonesAlsoJewel("aA","aAAbbbb"));

// input = j,s
// output = a number helps us do counting stuff 
// s = checking base, our pool; the stones we have in total 
// j = stones are alse jewels 
// need for loop to check our S
