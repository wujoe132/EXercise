// var a = 12;
// Execution Environment & scope
// 1st: Global scope => file
    // 2nd: Local scope => one, function addColor(){}; 
        // 3rd: Local scope => function addOne(){};

// if (typeof a === "number") {
//     // global scope's variable
//     var color = "blue";
// }

// console.log(color);

// for (var i = 0; i < 3; i++) {
//     if (typeof a == "number") {
//         // global scope's variable
//         var color = "blue";
//     }
// }
// console.log(color);

// function addColor(input) {
//     if (typeof a === "number") {
//         var color = "blue";
//         return color;
//     }
//     return addOne(a);  
// }
// console.log(color);

// var color = "blue";
// function getColor(){
//     var color = "red";
//     return color;
// }

// console.log(getColor());


// Variable Declaration 
// without var, global scope's variable => strict mode, without var, report an error


// function add(num1, num2) {
//     var sum = num1 + num2;
//     return sum;
// }

// function add(num1, num2) {
//     sum = num1 + num2;
//     return sum;
// }

// var result = add(10,20);
// console.log(sum);

// difference between var and let
// if (typeof a === "number") {
//     // global scope's variable
//     var color = "blue";
// }
// if (typeof a === "number") {
//     // block level variable
//     let color = "blue";
// }

// for (var i = 0; i < 3; i++) {
//     if (typeof a == "number") {
        // global scope's variable
        // var color = "blue";
        // block level variable
        // let color = "blue";
    // }
    // console.log(color);
// }

// function addColor(input) {
//     if (typeof a === "number") {
//         var color = "blue";
//         // let color = "blue";
//     }
//     console.log(color);
//     return color;
// }


// Object 
// object literal 
// var obj = {
//     name: "name"
// };
// Object constructor
// var obj = new Object();

// obj.propertyName , obj[]
// 
// var person = {
//     "this name": "James"
// }

// obj property, method
// var cat = {
//     color: "black",
//     action: function(){
//         return "Meow";
//     }
// }
// console.log(cat.action());


// this
// scope
// var str = "abc";
// console.log(str);
// in global sope, this refers to the global object
// this.str = "hello";
// console.log(this.str);

// var cat = {
//     color: "black",
//     action: function(){
//         console.log(this);
//         if(this.color === "black") {
//             return "Meow";
//         }
//     }
// }
// console.log(this);

// function => object
// function name => pointers to the functino objects
// function sum(num1, num2) {
//     return num1 + num2;
// }
// console.log("this is sum", sum);
// var anotherSum = sum;
// console.log("this is anotherSum", anotherSum);
// sum = null;
// anotherSum = null;
// console.log("this is sum again", sum);
// console.log("this is anotherSum", anotherSum);
// console.log(anotherSum(10,10));\
// console.log(sum(10,10));


