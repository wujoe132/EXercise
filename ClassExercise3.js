/* ------------------------ In Class Exercise -----------------------------  */

/* ------ Object ------- */
// Write a function called “getProperty”.
// Given an object and a key, “getProperty” returns the value of the property at the given key. 
// Notes:
// * If there is no property at the given key, it should return undefined.

function getProperty(key,object){ 
    if(!object[key]){
        console.log("here")
        return undefined;
    } else if (object[key]) {
        return object[key];
    }
}

var person = {
    name: "James",
    age: 18
};

// console.log(getProperty("middle",person));


// Write a function called “addProperty”.
// Given an object, and a key, “addProperty” sets a new property on the given object 
// with a value of true.

function addProperty(object,key){
    
    return object[key]= true;
};
var person = {
    name: "smith"
}
var key = "tall";
// console.log(addProperty(person, "key"));
// console.log(person)

 




// Write a function called “removeProperty”.
// Given an object and a key, “removeProperty” removes the given key 
// from the given object.

function removeProperty (object,key){
    return delete object[key]
};

var person = {
    name: "smith",
    tall: true
}
var key = "tall";
// console.log(removeProperty(person, key));
// console.log(person);





// Write a function called “addFullNameProperty”.
// Given an object that has a “firstName” property and a “lastName” property, “addFullNameProperty” 
// returns a “fullName” property whose value is a string with the first name and last name separated by a space.

function addFullNameProperty (object){
    return object["firstName"] = object["firstName"] + " " + object["lastName"];
}

var object = {
    firstName: "Joe",
    lastName: "Wu"
}
// console.log(addFullNameProperty(object));
// console.log(object);

// Write a function called “addObjectProperty”.
// Given two objects and a key, “addObjectProperty” sets a new property on the 1st object 
// at the given key.  
// The value of that new property is the entire 2nd object.

function addObjectProperty (object1,object2,key){
    object1[key] = object2;
    return object1;
}
var obj1 = {
    key1: "value1"
};
var obj2 = {
    name: "Joe",
    message: "Welcome"
};
// console.log(addObjectProperty(obj1, obj2, "newKey"));


// Write a function called “isPersonOldEnoughToDrinkAndDrive”.
// Given a “person” object, that contains an “age” property, “isPersonOldEnoughToDrinkAndDrive” 
//returns whether the given person is old enough to legally drink and drive in the United States.
// Notes:
// * The legal drinking age in the United States is 21.
// * The legal driving age in the United States is 16.
// * It is always illegal to drink and drive in the United States.

function isPersonOldEnoughToDrinkAndDrive (fruit){
    if (fruit["age"] >= 21) {
        return true;  
    } else if (fruit["age"]<21) {
        return false;
    }
}

var TV =  {
    age: 16
} 

// console.log(isPersonOldEnoughToDrinkAndDrive(tv));



//----------  Array, String的部分method ——---------------// 
// Array.pop()
//Array.push()
//Array.shift()
//Array.unshift()
//Array.indexOf(), String.indexOf()
//Array.includes(), String.includes()
//Array.concat(), String.concat()

function addTwoArrays(input1, input2) {
    var newArray = input1.concat(input2);
    return newArray;
}

function deleteLastElement(array) {
    // array.pop();
    // array.shift();
    // array.unshift("hello");
    array.push("hello");
    return array;
}
console.log(deleteLastElement([1,2]));