//QUERYING THE DOM
const body = document.getElementsByTagName("body");
// console.log(body[0]);
const header = document.getElementsByClassName("heading");

const paragraph = document.getElementById("paragraph1");
console.log(paragraph);

let div = document.querySelector("#beth_is_the_worst");

div.addEventListener(
  "mouseover",
  ev => { //ES6 way to write callback
    console.log(ev);
    div.style.backgroundColor = "indigo";
  }
  
  // function(ev) { //ES5 way to write callback
  //   div.style.backgroundColor = "indigo";
  // }
);
