/* Write a function called “isOldEnoughToDrink”.
* Given a number, in this case an age, “isOldEnoughToDrink” returns whether a person of this given age is 
* old enough to legally drink in the United States.
* Notes:
* The legal drinking age in the United States is 21.
*/

// function isOldEnoughToDrink(age) {
//     if (age >= 21) {
//         return "she can drink";
//     } else if (age <21) {
//         return "she cant drink";
//     }
   
// }

// var age = 22;
// console.log(isOldEnoughToDrink(age));

/* Write a function called “isOldEnoughToDrive”.
* Given a number, in this case an age, “isOldEnoughToDrive” returns whether a person of this given age is old enough to legally drive in the United States.
* Notes:
* The legal driving age in the United States is 16.
*/ 


// function isOldEnoughToDrink (input) {
//      if (input >= 16) { 
//          return "drive";
//      } else if (input < 16) {
//          return "cant drive";
//      }
//  }

//  var age = 7;
//  console.log(isOldEnoughToDrink(age));

/* Write a function called “isGreaterThan10”.
* Given a number, “isGreaterThan10” returns whether the given number is greater than 10.
*/ 

// function isGreaterThan10(number){
//     if (number >10){
//         return true; 
//     }
//     else if (number <=10){
//         return false; 
//     }
// }

function isGreaterThan10(number){
    return number > 10;
};

// var number = 8
// console.log(isGreaterThan10(number));

/* Write a function called “checkAge”. 
* Given a person’s name and age, “checkAge” returns one of two messages:
* “Go home, {insert_name_here}!”, if they are younger than 21.
* “Welcome, {insert_name_here}!”, if they are 21 or older.
* Naturally, replace “{insert_name_here}” with the given name.
*/

// function checkAge (input){
//     if (input >=21) {
//         return "Welcome";
//     }
//    else if (input < 21){
//        return "Go home";
//    }

// };
// var age = 18;
// console.log( checkAge(age) );


// 试跑一下这个代码, 然后再想想上一个例子，该如何添加名字 
// var name = "Joe";
// console.log("My name is " + name + "!");

// EXTRA !!!!!!! 
/* Write a function called “isOldEnoughToDrinkAndDrive”.
* Given a number, in this case an age, “isOldEnoughToDrinkAndDrive” returns whether a person of this given age is old enough to legally drink and drive in the United States.
* Notes:
* The legal drinking age in the United States is 21.
* It is always illegal to drink and drive in the United States.
*/

function isOldEnoughToDrinkAndDrive (age) {
    if (age >= 21) {
        return "yes";
    }
    else if (age <21) {
        return "no";
    }
}
var age = 100;
console.log (isOldEnoughToDrinkAndDrive(age));