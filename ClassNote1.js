/* 
*   -------------------------
        Variables, 变量 
    -------------------------
* Statement --> statement 用 ; 结束
*/

// var name = "Joe";
// var age  = 18;

/* 
* variable 是case sensitive的  
*/
// var Age = 20;
// var naMe = "Mria"

// console.log(age);
// console.log(Age);
// console.log(name);
// console.log(naMe)

/* 
* 文件的读取顺序是从上至下，所以重新定义名字相同的变量，变量值会被新值覆盖 (overwirte) 
*/
// var age = 22;



/* 
    --------------------------
        Data Type, 数据类型 
    --------------------------
* 变量类型：undefined, null, boolean, number, string, object
*/ 

/* 
 * undefined type: declare variables but not assign values, 定义变量了，但是没有赋予变量值
*/

// var person;
// console.log(person);

/* 
 * null type: declare variables and assign a value of null, 定义变量，并且赋予变量一个 空 值
*/
// var person = null;
// console.log(person);


/* 
 * boolean type --> true, false， 注意：true, false本身就是数据类型的一种，所以在使用时可以不需要加 “” 或 ‘’
*/
// var num1 = 10;
// var num2 = 10;
// console.log(num1 === num2); 

//var canDrive = true;
//console.log(canDrive);


/*
 * string type --> 字符串要用 "" 或 '' 括起来，
*/
// var roomName = "World + Word - ******* Cup!"
// console.log(roomName);


/*
 * number type --> integer, float, NaN 
*/
// var age = 19;  
// var temp = 20.6;
// console.log(temp);

// var name = "Maria";
// var age = 12;
// console.log(name / age );


/* 
 * object type --> collection of related data, 以pair的形式出现
 * 下面这个例子， firstName是 key， ”Maria“是这个 key 的 value
 * object的 property 可以为任意类型
*/
// var person = {
//     firstName : "Maria",
//     lastName: "Steven",
//     age: 10,
//     canDrink: false,
//     canDance: true,
//     gender: "female", 
// };

/* 
 * 以下为获取 object 中指定 key 的 property 的两种方法
*/
// console.log(person.age);
// console.log(person["age"]);


/* 
 * array --> array本质上也是object
 * array 是用 index 来获取其中的 element(元素)， 而 object 是用 key
 * 通过 array.length 可以获取到 array 的长度，即该 array 有多少个元素
*/ 
// var array1 = [1, 2, 3];
// var array2 = ["apple", "pear", "mango"];

// console.log(array1[0]);
// console.log(array1[2]);
// console.log(array2[2]);

/* 
 * array中的每一个元素也可以是任意类型的数据，如下例：
*/
// var array3 = [
//     {age: 1}, 
//     {age:2}, 
//     {age:3}, 
//     true, 
//     false, 
//     1,
//     2,
//     3, 
//     "string"
// ];
// console.log(array3[1])

// 这个例子稍微复杂一点，尝试搞懂
// console.log(array2[array2.length - 1]);

/* 
    ------------------------ 
        operator, 操作符 
    ------------------------ 
*/
// console.log(1 + 2);
// console.log(1 - 2);
// console.log(1 * 2);
// console.log(1 / 2);
// console.log(8 % 4);
// console.log(8 % 3);

// var age = 5;
// var Age = "5";

//注意 == 与 === 的区别，在以后的应用中，使用 === 
// console.log(age == Age);
// console.log(age === Age);

/*
    -------------------------
        Logical Operators 
    -------------------------
* ||,or 
* &&, and 
* !, not 
* !==,!=,  not equal 
* !== 与 === 相对应
* != 与 == 相对应
*/
// console.log(true || false);
// console.log(false || true || false);
// console.log(true && false);
// console.log(false && true);
// console.log(true || false && true);

// console.log(age !== Age);
// console.log(age != Age);


/*
    -----------------------------
        if ... else... statement
    -----------------------------
* 以下为 if else statement 的语法格式

    if (age >= 18) {
        return true;
    } 
    else if (age < 18) {
        return false;
    }

* 注意：花括号的位置， 每一个 { 都必须对应一个 }，一开一合
*/
// var girl = "Maria";
// var age = 7;
// var gender = "male";

// if (age > 18 && gender === "female") {
//     console.log("she can drink");
//     console.log(1 + 2);
// };

// console.log("NO!!")

/* 
    -----------------------
        function，函数
    -----------------------

* 一个函数由以下几个部分构成： 
    1. function, 相当于 var, 是用来定义函数的
    2. 函数名字，与 variable(变量)的名字相似，不需要 "" 
    3. input, input 紧跟函数名，需要用 () 括起来
    4. 函数的statement，即这个函数的逻辑部分，需要用 {} 括起来

* 以下为函数的格式：

    function functionName(input) {
        ...
        ...
        return ...;
    };

*/
// function canSheDrink(input) {
    // if (input < 18) {
        // return "she cannot drink";
    // } else if (input >= 18) {
        // return "she can drink!"
    // }
// };

// var herAge = 7;

// console.log(canSheDrink(herAge));