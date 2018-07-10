let bestNumber = true;
let isTrue = false;

// console.log(isTrue || bestNumber);


// console.log(!bestNumber);




let num = 11;
let string = 12;

// console.log(num == string); //loose equality checks for value and NOT type 
// console.log(num !== string); //strict Equility checks for value AND type 



const prim = "my string";
const objectString = new String("my string");

// console.log(prim === objectString); //false
// console.log(prim == objectString); //TRUE




//MODULUS
// console.log(5 % 2); //returns 1


//INC and DEC 
let start = 1;

//....after some logic
start--;  //start = start - 1;
// console.log(start); //2

let nonNumber = "cheese";

// console.log(parseInt(nonNumber));

// console.log(!isNaN(nonNumber));



let fifty = "50";

// console.log(parseInt(fifty));


let nonString = 50000;

// console.log(nonString.toString()); //NOT A REASSIGNMENT
nonString += 20;

// console.log(nonString); //nonString = nonString + 20


let stringNum = "50000";

// console.log(nonString.toString()); //NOT A REASSIGNMENT
stringNum += 20; //STRING CONCATENATION



// let firstNum = parseInt(prompt("Give me a number....any number!!", "10"));
// let secondNum = parseInt(prompt("Give me another number....any other number!!", "10"));

// if(!isNaN(firstNum) && !isNaN(secondNum)) {
//   alert(firstNum + secondNum);
// } else if(isNaN(secondNum)) {
//   secondNum = parseInt(prompt('No, I said a number!!!', '10'));
//   alert(firstNum + secondNum);
// } else {
//   alert('No dummie!');
// }

//switch 
// let greeting = prompt("Tell me how to say hello", "Gutentaag!");
// 
// switch(greeting.toLowerCase()) { //NORMALIZING DATA!
//     case 'hello':
//       alert(`I love saying ${greeting}!`);
//       break;
//     case 'wassup':
//       alert(`${greeting} is SO 90s!!!`);
//       break;
//     default:
//       alert(`I've never heard ${greeting} before!`);
//       break;
// }


//TERNARY

let money = 10;
// let currency = confirm("In dollars or not?");

// currency ? alert(`$${money}`) ? : alert(money); //TERNARY

let isAdult = confirm("Are you over 18?");

if(isAdult) {
  let isUnder80 = confirm("Are you under 80 years old?");
  if(isUnder80) {
    let isCool = confirm("Do you like Star Wars?");
    if(!isCool) return;
    alert('You are so cool!');
  } else {
    let isElderly = confirm("Do you enjoy prunes?");
  }
} else {
  alert('You were shot first!!');
}





//






// 
