//ANONYMOUS FUNCTION
//FUNCTION DEFINITION
function (string) { //Inside the () is where your ARGUMENTS/PARAMETERS go
  return string.toUpperCase(); //Data transormation and return
  console.log(string);
}; //End of the function

//NAMED FUNCTIONS
//FUNCTION DEFINITION
function addTwo(numberIWantToChange) { 
  return numberIWantToChange + 2;
};

//CALL the FUNCTION
// console.log(addTwo(1)); //Call Site

// let myNewNumber = addTwo(34);

function logMyString(string) {
  console.log(string);
};

logMyString('JR is the BEST EVAAAR!!!');

// alertsAd();
//FUNCTION DECLARATION (IS HOISTED)
function alertsAd() {
  alert('Hey, we have a sale on Garthoks!');
};


//FUNCTION EXPRESSION (NOT HOISTED
let confirmStuff = function(someString) {
  let newVariable = "cheese";
  confirm(someString);
};
// confirmStuff("Do you want to watch Frozen?");

// console.log(newVariable);//WOULD THROW ERR


//RECURSION
let i = 0;
function iCallMyself() {
  console.log(i);
  i++;
  if(i < 10) iCallMyself();
};

// iCallMyself();
//FAT ARROW FUNCTIONS

//BASIC IMPPLEMENTATION
(string, number) => { //NO FUNCTION KEYWORD
  console.log(string);
  alert(number);
};

//ONLY 1 ARGUMENTS
string => { //PARENS ARE OPTIONAL
  console.log(string);
}

//FUNCTION EXPRESSION OF FAT ARROW
let logString = string => {
  console.log(string);
};

// logString("Hello cats!");
//IMPLICIT RETURN
string => (string.toUpperCase());
string => string.toUpperCase();


//
