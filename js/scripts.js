var myString;
var myNumber;
var myOtherNumber;


var myString = "Hello World!*76 ";

var myNumber = 43; //PRIMITIVE
var myOtherNumber = new Number(43); //NUMBER OBJECT

var isLoggedIn = false; //Boolean

let newVariable = "I am the best variable!";
// console.log(newVariable, 'AFTER being declared');

{
  let newVariable = "I am the worst...";
  // console.log(newVariable, 'INSIDE the scope');
}
// let newVarible; //DECLARATION
newVariable = "My dog is ugly.";
// console.log(newVariable, 'OUTSIDE the scope');

isLoggedIn = null;


//STRING interpolation
// console.log("Hey there, " + myString + " how are you?"); //ES5
// console.log(`Hey there, ${myString} how are you?`); //ES6

var dozen = 12;
{
  dozen = 13;
  //BLOCK OF CODE
}

const age = 32;
{
  const age = 35;
  console.log(age);
};


// console.log(age);

let today = new Date();
let myBirthday = new Date('5.21.1986');
// console.log(myBirthday);

let bestNumber = 42.7;

Math.floor(bestNumber);
let calc = Math.ceil(bestNumber) * Math.PI;
// console.log(Math.ceil(calc));


let classRoom = "Room 1";
let objectClassRoom = new String("Room 1");
// console.log(typeof classRoom);
// console.log(typeof objectClassRoom);
// console.log(classRoom.length);

// alert("Hey there, user! Pick a path...");//1-directional comm to your user
// const isReady = confirm("Are you ready to party?");

// alert(isReady);

let userName = prompt("What's your name?", "John");
console.log(userName);






















//
