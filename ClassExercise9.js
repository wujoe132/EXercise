//**1. Write a function called “getAverageOfElementsAtProperty”.
// Given an object and a key, “getAverageOfElementsAtProperty” returns the average of all the elements in the array located at the given key.
// Notes:
// * If the array at the given key is empty, it should return 0.
// * If the property at the given key is not an array, it should return 0.
// * If there is no property at the given key, it should return 0.
// var obj = {
//     key: [,,]
// };
// 重写
// function getAverageOfElementsAtPropperty (obj,key){
//     if(Array.isArray(obj[key] && obj[key].length > 0 && key in obj ) {
//     }
//     else if (Array.isArray(obj[key]) === false){
//         return 0;
//     }
//     else if (obj.hasOwnProperty(key) === false){
//         return 0;
//     }
//     else if (obj[key].length = 0){
//         return 0;
//     }
//     else {
//         var sum = obj[key].reduce(function(T,C){
//             var sum = T + C;
//             return sum;
//         })
//     }
//     return sum / obj[key].length - 1
// }
// var obj = {
//     a:[1,2,3,4,5,6]
// }
// console.log(getAverageOfElementsAtPropperty(obj,"a"));
//reduce

//2. Write a function called “getEvenLengthWordsAtProperty”.
// Given an object and a key, “getEvenLengthWordsAtProperty” returns an array containing all the even length word elements of the array located at the given key.
// Notes:
// * If the array is empty, it should return an empty array.
// * If it contains no even length elements, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the key, it should return an empty array.

// Obj = {
//    arr: []
//}
// we want even length words given key in the words
function getEvenLengthWordsAtProperty (obj, key){
    if (obj[key].length === 0 /*|| obj[key] % 2 === 0*/ || Array.isArray(obj[key]) === false || 
    obj.hasOwnProperty(key) === false){
        return [];
    }
    else {
        return obj[key].filter(function(x){
            return x.length % 2 === 0
        });
    }
}
var obj = {
    a: ["I","to","kill","a","human","happyy"]
}
// console.log(getEvenLengthWordsAtProperty(obj,"a"))
// no need to push cuz its filter; if replace to map instead filter => true or false


//3. Write a function called “filterOddLengthWords”.
// Given an array of string, “filterOddLengthWords” returns an array containing only the elements of the given array whose lengths are odd numbers.

// var array = ["I", "like", "to", "eat", "and", "drink", "coffeee"]
// var newString = array.filter(function(x){
//     return x.length % 2 !== 0; 
//     })
// console.log(newString);

// var string = ["I", "like", "to", "eat", "and", "drink", "coffeee"]
// function filterOddLengthWords (string){
//     var newString = string.filter(function(x){
//         return x.length % 2 !==0;
//     })
//     return newString;
// }
// console.log(filterOddLengthWords(string));

//**4. Write a function called “getSquaredElementsAtProperty”.
// Given an object and a key, “getSquaredElementsAtProperty” returns an array containing all the squared elements of the array located at the given key.
// Notes:
// * If the array is empty, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the key, it should return an empty array.

// var obj = {
//     key: []
// }
// return []
// edgecase
// function getSquaredElementAtProperty (obj,key){
//     if ((obj[key]).length <1 ){
//         console.log("1")
//         return [];
//     }
//     if (Array.isArray(obj[key]) === !true){
//         console.log("2")
//         return [];
        
//     }
//     if (obj.hasOwnProperty(key) === !true){
//         console.log("3")
//         return [];
//     }
//     else { 
//         var sum = [];
//          obj[key].map(function(i){
//             sum.push(i * i);
//         })
//         return sum;
//     }
// }

// function getSquaredElementAtProperty(obj, key) {
//     var result = [];
//     if (key in obj && obj[key].length > 0 && Array.isArray(obj[key])) {
//         for (var prop in obj[key]) {
//             result.push(obj[key][prop] * obj[key][prop]);
//         }
//     }
//     return result;
// }

// var obj = {
//     a:[1,2,3,4,5]
// }
// console.log(getSquaredElementAtProperty(obj,"a"));
// var newArray= [];
// for (var i  in obj[key]){
//     newArray.push(obj[key][i]*obj[key][i])
// }
//     }
// return newArray;
// var obj = {
//     a: [1,2,3,4,5]
// }
// console.log(getSquaredElementAtProperty(obj,"a"));

//5. Write a function called “getOddElementsAtProperty”.
// Given an object and a key, “getOddElementsAtProperty” returns an array containing all the odd elements of the array located at the given key.
// Notes:
// * If the array is empty, it should return an empty array.
// * If it contains no odd elements, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the key, it should return an empty array.

// obj = {
// arr: [] => all the odd elements
// } 
// function getOddElementsAtProperty (obj,key){
//     if (obj[key].length === 0 || /*obj[key] % 2 !==0 ||*/ !Array.isArray(obj[key]) || !obj.hasOwnProperty(key)){
//         return [];
//     }
//     else {
//         return obj[key].filter(function(x){
//             return x % 2 !== 0
//         })
//     }
// };
// var obj = {
//     a: "sike"
// };
// console.log(getOddElementsAtProperty(obj,"a"));
//** ?oddElement vs Even vs th


//6. Write a function called “getEvenElementsAtProperty”.
// Given an object and a key, “getEvenElementsAtProperty” returns an array containing all the even elements of the array located at the given key.
// Notes:
// * If the array is empty, it should return an empty array.
// * If the array contains no even elements, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the given key, it should return an empty array.

// function getEvenElementsAtProperty (obj,key){
//     if (obj[key].length === 0 || !Array.isArray(obj[key]) || !obj.hasOwnProperty(key)){
//         return [];
//     }
//     else {
//         return obj[key].filter(function(x){
//             return x % 2 === 0
//         })
//     }
// };
// var obj = {
//     p: [1,2,3,45,66]
// };
// console.log(getEvenElementsAtProperty(obj,"p"));

//7. Write a function called “filterEvenLengthWords”.
// Given an array of strings, “filterEvenLengthWords” returns an array containing only the elements of the given array whose length is an even number.

// arr = ["","",""]
// "" = even number length
// how to apply to a more general case?
// var array = ["Welcome", "to","my","bloddy","house"];
// var Newarr = array.filter(function(x){
//     return x.length % 2 === 0
// });
// function filterEvenLengthWords(array) {
//     return array.filter(function(x){
//         return x.length % 2 === 0
//     });
// }
// console.log(filterEvenLengthWords(["Welcome", "to","my","bloddy","house"]));

//8. Write a function called “getLengthOfLongestElement”.
// Given an array, “getLengthOfLongestElement” returns the length of the longest string in the given array.
// Notes:
// * It should return 0 if the array is empty.

// function getLengthOfLongestElement (array){
//     if (array.length === 0){
//         return [];
//     }
//     else {
//         for (i = 0; i < array.length; i++){
//             if (array[i].length > array[0]){
//                 return array[i]
//             }
//                 return array[0]
//         }
//     }   
// };
// var array = ["I","lIKE","To","eat","banana","and","my","macbook"]
// console.log(getLengthOfLongestElement(array));
// array.foreEach.

//**9. Write a function called “getSmallestElementAtProperty”.
// Given an object and a key, “getSmallestElementAtProperty” returns the smallest element in the array located at the given key.
// Notes:
// * If the array is empty, it should return undefined.
// * If the property at the given key is not an array, it should return undefined. 
// * If there is no property at the key, it should return undefined.

// var obj = {
// key: []
// }
// function getSmallestElementAtProperty (obj,key){
//     if (obj[key].length === 0 || !Array.isArray(obj[key]) || !obj.hasOwnProperty(key)){
//         return undefined
//     }
//     else {
//         var smallest = obj[key][0]; 
//         for (var i = 0; i < obj[key].length; i++){
//             console.log("smallest in for loop", smallest);
//             if (obj[key][i] < smallest){
//                 console.log(obj[key][i]);
//                 smallest = obj[key][i];
//             }
//         }
//         console.log("final smallest");
//         return smallest;
        
//     }
// };
// var obj = {
//     a: [200,30,4,1000000]
// }
// console.log(getSmallestElementAtProperty(obj,"a"));


//10. Write a function called “getLargestElementAtProperty”.
// Given an object and a key, “getLargestElementAtProperty” returns the largest element in the array located at the given key.
// Notes:
// * If the array is empty, it should return undefined.
// * If the property at the given key is not an array, it should return undefined.
// * If there is no property at the key, it should return undefined.

// var a = 5 > 4 ? "apple" : "pear";
// var b = [1,2,3];
// var sum = b.reduce((x,y) => {
//     console.log("this is x", x);
//     console.log("this is y", y);
//     console.log("this is sum", x + y);
//     return x + y;
// })
// console.log(sum);
 
// function getLargestElementAtProperty (obj, key){
//     if (!Array.isArray(obj[key]) || obj[key].length === 0 || !obj.hasOwnProperty(key)){
//         return undefined;
//     }
//     else {
//         console.log("here");
//         return obj[key].reduce((x,y) => x < y ? x : y); 
//     }
// };
// var obj = {
//     a: [1,2,3,4,5,99,0]
// }
// console.log(getLargestElementAtProperty(obj,"a"));

//11. Write a function called “getAllButLastElementOfProperty”.
// Given an object and a key, “getAllButLastElementOfProperty” returns an array containing all but the last element of the array located at the given key.
// Notes:
// * If the array is empty, it should return an empty array.
// * If the property at the given key is not an array, it return an empty array.
// * If there is no property at the key, it should return an empty array.

// function getAllButLastElementOfProperty (obj,key){
//     if (!obj.hasOwnProperty(key) || !Array.isArray(obj[key]) || obj[key].length === 0){
//         return [];
//     }
//     else {
//         obj[key].pop()
//         return obj[key];
//     }
// }
// var obj = {
//     a: [1,23,66,77,88]
// };
// console.log(getAllButLastElementOfProperty(obj,"a"));


//12. Write a function called “getElementOfArrayProperty”.
// Given an object, a key, and a numerical index, “getElementOfArrayProperty” returns the value of the element at the given index of the array located within the given object at the given key.
// Notes:
// * If the array is empty, it should return undefined.
// * If the given index is out of range of the array located at the given key, it should return undefined.
// * If the property at the given key is not an array, it should return undefined.
// * If there is no property at the key, it should return undefined.

// function getElementOfArrayProperty (obj,key,num){
//     if (/*obj[key].length === 0 ||*/ !Array.isArray(obj[key]) /*|| obj.hasOwnProperty(key)*/){
//         return undefined;
//     }
//     else {
//         return obj[key][num]
//     }
// };
// var obj = {
//     a: [2,66,77,34,22]
// };
// console.log(getElementOfArrayProperty(obj,"a",3));



//13. Write a function called “squareElements”.
// Given an array of numbers, “squareElements” should return a new array where each element is the square of the element of the given array.
// var output = squareElements([1, 2, 3]); console.log(output); // --> [1, 4, 9]

// function squareElements (array){
//     return array.map(function(x){
//         return x * x
//     })
// };
// console.log(squareElements([2,6,8]));


//14. Write a function called “filterOddElements”.
// Given an array of numbers, “filterOddElements” returns an array containing only the odd numbers of the given array.

// function filterOddElements (array){
//     return array.filter(function(x){
//         return x % 2 !== 0
//     })
// };
// console.log(filterOddElements([1,3,5,7,99,100,88,3,44]));


//15. Write a function called “computeProductOfAllElements”.
// Given an array of numbers, “computeProductOfAllElements” returns the products of all the elements in the given array.
// Notes:
// * If given array is empty, it should return 0.

// function computeProductOfAllElements (array){
//     if (array.length === 0){
//         return 0;
//     }
//     else {
//         var product = 1;
//         for (var i = 0; i < array.length; i++){
//             product = product * array[i];
//         }
//     // }
//     return product;
// }
// console.log(computeProductOfAllElements([]));

//16. Write a function called “filterEvenElements”.
// Given an array of numbers, “filterEvenElements” returns an array containing only the even numbers of the given array.

// function filterEvenElements (array){
//     return array.filter(function(x){
//         return x % 2 === 0
//     })
// };
// console.log(filterEvenElements([1,3,44,55,66,99,100,990]));


//17. Write a function called “getLengthOfShortestElement”.
// Given an array, “getLengthOfShortestElement” returns the length of the shortest string in the given array.
// Notes:
// * It should return 0 if the array is empty.

// function getLengthOfShortestElement (array){
//     if (array.length === 0){
//         return 0;
//     }
//     else {
//         var smallest = array[0].length;
//         for (var i = 0; i < array.length; i++){
//             if (array[i].length < smallest){
//                 smallest = array[i].length;
//             }
//         }
//         return smallest;
//     }
// };
// console.log(getLengthOfShortestElement(["one", "to", "no"]));

//**18. Write a function called “getLongestElement”.
// Given an array, “getLongestElement” returns the longest string in the given array.
// Notes:
// * If there are ties, it returns the first element to appear.
// * If the array is empty, it should return an empty string.

// function getLongestElement(array){
//     var res = "";
//     var longest = array[0].length;
//     array.forEach(function(x,i,array){
//         if (x.length > longest){
//             longest = x.length;
//             res = array[i];
//         }
//     });
//     return res;
// };
// console.log(getLongestElement(["I", "like", "to", "eat", "a", "piece", "of", "cake"]));



//19. Write a function called “findSmallestElement”.
// Given an array of numbers, “findSmallestElement” returns the smallest number within the given array.
// Notes:
// * If the given array is empty, it should return 0.

// function findSmalleastElement (array){
//     var Min = Math.min(...array);
//     if (array.length === 0){
//         return 0;
//     }
//     else {
//         return Min;
//     }
// };
// console.log(findSmalleastElement([3,1,3,1,5]));

//20. Write a function called “findShortestElement”.
// Given an array, “findShortestElement” returns the shortest string within the given array.
// Notes:
// * If there are ties, it should return the first element to appear.
// * If the given array is empty, it should return an empty string.

//  function findShortestElement (array){
//     // var shortest = "";
//     if (array.length === 0) {
//       return "";
//     } 
//     else {
//       var shortest = array[0];
//       for (var i = 0; i < array.length; i++) {
//         if (array[i].length < shortest.length) {
//           shortest = array[i];
//         }
//       }
//     }
//     return shortest;
// };
// console.log(findShortestElement(["koe","zzz","y","dsfw"]));

//21. Write a function called “getLargestElement”.
// Given an array, “getLargestElement” returns the largest number in the given array.
// Notes:
// * It should return 0 if the array is empty.

// function getLargestElement (array){
//     var Larg = array[0];
//     var Max = Math.max(...array)
//     if (array.length === 0){
//         return 0;
//     }
//     // else{
//     //     for (var i = 0; i < array.length; i ++){
//     //         if (array[i] > array[0]){
//     //             return array[i]
//     //         }
//     //     }
//     // }
//     // return Larg
//     else {
//         return Max;
//     }
// }
// console.log(getLargestElement([1,2,44,5,6,7]));

//22. Write a function called “computeSumOfAllElements”.
// Given an array of numbers, “computeSumOfAllElements” returns the sum of all the elements in the given array.

// function computeSumOfAllElement (arr){
//     sum = arr.reduce(function(T,a){
//         return T + a;
//     },0)
//     return sum;
// };
// console.log(computeSumOfAllElement([]));


//23. Write a function called “calculateBillTotal”.
// Given the pre tax and pre tip amount of a meal, “calculateBillTotal” returns the total amount due after tax and tip.
// Notes:
// * Assume that sales tax is 9.5% and tip is 15%.
// * Do NOT tip on the sales tax, only on the pre tip amount.

// function calculateBillTotal (preAmount){
//     let salestax = preAmount * 0.095;
//     let tip = preAmount * 0.15;
//     let total = tip + salestax + preAmount;
//     return total;
// }
// console.log(calculateBillTotal(20));

//**24. Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once.
// var wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
// ];
//varaible declare 
//do not repeat variable name
// function cost (arr){
//     var result =  arr.reduce(function(t,x) {
//         var sum =  t + x.price;
//         console.log("insidee reduce", sum);
//         return sum;
//     },0); 
//     console.log("final sum", sum);
//     return result;
// }
//  console.log(cost(wishlist));

//**25.Use Reduce
// Turn an array of numbers into a long string of all those numbers.

// var arr1 = [1,2,3,4,5] => "12345"
// var arr2 = ["1,2,3,4,5"]
// var arr1 = [1,2,3,4];
// console.log(arr1.join(""));
// function reduce(arr1){
//     var newStr = arr1.join("");
//     return newStr;
// }
// console.log(reduce(arr1));
// function reduce(arr1){
//     var newStr = arr1.reduce(function(t,x){
//         t = t.concat(x.toString());
//         console.log(t.concat(x.toString()))
//         return t;  // to overwite t
//     }, "");
//     return newStr;
// }
// console.log(reduce(arr1));


//26. Write a function called “getStringLength”.
// Given a string, “getStringLength” returns the length of the given string.
// Notes:
// * Do NOT use any native ‘length’ methods.
// * You might consider using ‘substring’ or ‘slice’ as alternatives.

// function getStringLength (str){
//     var Counting = 0
//     for (var i in str){
//         Counting ++
//     }
//     return Counting;
// }
// console.log(getStringLength("I am very rich"));


//27. Write a function called “joinArrayOfArrays”.
// Given an array of arrays, “joinArrayOfArrays” returns a single array containing the elements of the nested arrays.

// var arr = [  [  ] ,[  ],[  ]  ];
// function joinArrayOfArrays (arr){
//     var newArr = []
//     for (var i = 0; i < arr.length; i++){
//         newArr = newArr.concat(arr[i])
//     } 
//     return newArr
// }
// var arr = [[1,2,3],[4,5,6],[7,89]];
// console.log(joinArrayOfArrays(arr));


//28. Write a function called “getProductOfAllElementsAtProperty”.
// Given an object and a key, “getProductOfAllElementsAtProperty” returns the product of all the elements in the array located at the given key.
// Notes:
// * If the array is empty, it should return 0.
// * If the property at the given key is not an array, it should return 0.
// * If there is no property at the given key, it should return 0.

// function getProductOfAllElementsAtProperty (obj, key) {
//     if (!Array.isArray(obj[key]) || obj[key].length === 0) {
//       return 0;
//     }
//       var Num = 1;//cant be 0
//       for (var i in obj[key]){
//           Num = Num * obj[key][i];
//       }
//       return Num;
// }
// var obj = {
//     a:[1,2,3,4,5,6]
// }
// console.log(getProductOfAllElementsAtProperty(obj,"a"))

// **29. Write a function called “sumDigits”.
// Given a number, “sumDigits” returns the sum of all its digits.
// var num = -316; => 4

// function sumDigits (number){
//     var number1 = number.toString().split("")
//     if (number < 0){
//         number1 = number1.slice(1);
//         
//     }
//     return number1.reduce(function(t,x){    
//         return t + Number(x);
//     }, 0);
// }

// console.log(sumDigits(-1234));


// var a =  1234567
// var b =  its sum


//30. Write a function called “getSumOfAllElementsAtProperty”.
// Given an object and a key, “getSumOfAllElementsAtProperty” returns the sum of all the elements in the array located at the given key.
// Notes:
// * If the array is empty, it should return 0.
// * If the property at the given key is not an array, it should return 0.
// * If there is no property at the key, it should return 0.

// function getSumOfAllElementsAtProperty(obj, key) {
//     if (!Array.isArray(obj[key]) || obj[key].length === 0) {
//       return 0;
//     }
//     else {
//         var SUM = 0
//         for (var i in obj[key]){
//             SUM = SUM + obj[key][i];
//         }
//         return SUM;
//     }
// };
// obj = {
//    a: [1,2,3,4,5]
// }
// console.log(getSumOfAllElementsAtProperty(obj,"a"));

//**31. Write a function called “findShortestWordAmongMixedElements”.
// Given an array, “findShortestWordAmongMixedElements” returns the shortest string within the given array.
// Notes:
// * If there are ties, it should return the first element to appear in the given array.
// * Expect the given array to have values other than strings.
// * If the given array is empty, it should return an empty string.
// * If the given array contains no strings, it should return an empty string.

// function finShortestWordAmongMixedElements (arr){    
//     var strOnly = arr.filter(function(x){
//         return typeof x === "string";
//     });
    // console.log("this is strOnly",strOnly);
    // var shortest = strOnly[0];
    // var shortest = strOnly.reduce(function(shortest,c) {
    //     console.log("shortest", shortest);
    //     console.log("c", c);
    //     if (shortest.length < c.length){
    //         console.log(1);
    //         return shortest;
    //     }
    //     else if(shortest.length === c.length){
    //         console.log(2)
    //         return shortest;
    //     }
    //     else if(shortest.length > c.length){
    //         console.log(3);
    //         return c;
    //     }
    // });
    // return shortest;
//     return strOnly.reduce((shortest,c) => shortest.length <= c.length ? shortest : c);
// }

// reduce((x,y) => x < y ? x : y); 
//ternary operator 
// console.log(finShortestWordAmongMixedElements([99,"oke","by","GO","HOME", undefined, null, 90,2384903, true, 0]));

// var arr = [];
// var string = " ";



