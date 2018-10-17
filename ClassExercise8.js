// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
//array.sort()
//Array.isArray()
//Higher Order Function
//array.every()
function isEveryElementIsGreaterThan100(element) {
    return element > 100;
}

var array = [1000,200,300, 400];

// console.log(array.every(isEveryElementIsGreaterThan100));
// 1.
var result = array.every(function(x){
    return x > 100;
});

// console.log(result);

// 2.
//array.map()
// var array2 = ['i', 'like','to','eat'];
// console.log(array2.map(function(currentElement) {
//     return currentElement.toUpperCase();
// }))

var arr = [1,4,435,5,74,234,23,4];
var arrNew = [];
arr.map(function(a) {
    if (a === 4) {
        arrNew.push(a);
    }
    return arrNew;
});
// console.log(arrNew)

// 3.
//array.filter 
var employees = [
    {
        name: "Jane",
        age: 20,
        gender: "female"
    },
    {
        name: "James",
        age: 30,
        gender: "male"
    },
    {
        name: "Joe",
        age: 16,
        gender: "male"
    }
];

var filteredEmployees = employees.filter(function(currentEmployee){
    return currentEmployee.age < 18 && currentEmployee.gender === "male";
})

console.log(filteredEmployees);
var arr = [1,3,5];
arr.filter(function(a){
    return a > 2;
});

// 4.
//array.reduce()
var arr = ["a","b","c"];
// var sum = arr.reduce(function(total, currentValue) {
//     var sum = total * currentValue;
//     return sum;
// }, 10);

var sum = arr.reduce(function(total, currentValue) {
    var sum = total.concat(currentValue);
    return sum;
}, "hello world!");
// arr.reduce(function(accumulator, currentValue){
//     return total * currentValue;
// }, initialValue)
// console.log(sum);




//ES6
// http://es6-features.org/#Constants
// 常量：constant, 不变的
// const age = 20; 

// // variable
// let obj = {};
// for (let i = 0; i < array.length; i++) {

// }

// function Name(input) {
//     return undefined;
// }

// const getAge = (input1, input2) => {
//     return input1 * input2;
// }

// var array = [1000,200,300, 400];

// const result2 = array.every(x => {
//     return x > 400;
// });

// let result = array.map(currentElement => {
//     return currentElement * 0.1;
// })

// console.log(result);

//for loop
//for...in...
//while
//switch
// <60: d, 60~69: pass. 70~79:c, 80~89: b, >90:a
// function getGrade(grade) {
//     var finalGrade = "";
//     switch (grade) {
//         case grade < 60:
//             finalGrade = "d";
//             break;
//         case 60 < grade && grade <= 79: 
//             finalGrade = "pass";
//             break;
//         default: 
//             finalGrade = "dont know"
//     }
//     return finalGrade;
// }
