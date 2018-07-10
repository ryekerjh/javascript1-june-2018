var myString;
var myNumber;
var myOtherNumber; //VARIABLE declarations

var myString = "Hello World!*76 ";

var myNumber = 43; //PRIMITIVE number type
var myOtherNumber = new Number(43); //NUMBER OBJECT type

var isLoggedIn = false; //Boolean

let newVariable = "I am the best variable!";
console.log(newVariable, 'AFTER being declared');

{
  let newVariable = "I am the worst..."; //This will work because the let is INSIDE the scope created by this block {}
  console.log(newVariable, 'INSIDE the scope');
}

let newVarible; //This will throw an error because let variables can't be redeclared
newVariable = "My dog is ugly."; //reassignment. This is legal.
console.log(newVariable, 'OUTSIDE the scope');


//STRING interpolation
console.log("Hey there, " + myString + " how are you?"); //ES5
console.log(`Hey there, ${myString} how are you?`); //ES6


let dozen = 12; // if this was a var, it would reassign this value everywhere.
{
  dozen = 13;
  //BLOCK OF CODE
}

const age = 32;
{
  const age = 35; //This will be reassigned but only in this scope
  console.log(age);
};


console.log(age); //Will still be 32

let today = new Date(); //Will make a date object for RIGHT NOW
let myBirthday = new Date('5.21.1986'); //Will make a date object for the given date string
console.log(myBirthday);

let bestNumber = 42.7;

Math.floor(bestNumber); //Rounds down to the nearest WHOLE number
Math.ceil(bestNumber); //Rounds up to the nearest WHOLE number

let calc = Math.ceil(bestNumber) * Math.PI; //multiplication!!
console.log(Math.ceil(calc));


let classRoom = "Room 1";
let objectClassRoom = new String("Room 1");
console.log(typeof classRoom);
console.log(typeof objectClassRoom);
console.log(classRoom.length); //Will give you count of characters in the string

alert("Hey there, user! Pick a path...");//1-directional comm to your user
const isReady = confirm("Are you ready to party?"); //Returns a boolean

alert(isReady);

let userName = prompt("What's your name?", "John"); //Returns a full string from your user
console.log(userName);






















//
